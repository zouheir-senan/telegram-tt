import type {ChangeEvent, KeyboardEvent, MouseEvent, RefObject} from 'react';
import React, {memo, useCallback, useRef, useState, useEffect} from '../../lib/teact/teact';
import type {FC} from 'react';
import {parseMarkdown} from "../../util/parseHtmlAsFormattedText";

// Props interface
interface MessageEditorProps {
  ref: RefObject<HTMLDivElement>;
  id?: string;
  html: string;
  placeholder?: string;
  isActive?: boolean;
  className?: string;
  tabIndex?: number;
  contentEditable?: boolean;
  onUpdate: (html: string) => void;
  onClick?: () => void;
  onKeyDown?: (e: KeyboardEvent<HTMLDivElement>) => void;
  onMouseDown?: (e: MouseEvent<HTMLDivElement>) => void;
  onContextMenu?: (e: MouseEvent<HTMLDivElement>) => void;
  onTouchCancel?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

// Position tracking interface
interface Position {
  offset: number;      // Character offset from the start of the element’s text
  selection: number;   // Length of selection (if any)
  content: string;
  lineNumber: number;
}

// History entry interface
interface HistoryEntry {
  content: string;
  position: Position;
  timestamp: number;
}

// Editor state interface
interface EditorState {
  history: HistoryEntry[];
  currentIndex: number;
  lastPosition: Position | null;
  isComposing: boolean;
}

// Constants
const MAX_HISTORY_LENGTH = 100;
const HISTORY_THROTTLE_MS = 500;

// Utility function: Get all text nodes within a node.
function getTextNodesIn(node: Node): Node[] {
  const textNodes: Node[] = [];

  function getTextNodes(node: Node) {
    if (node.nodeType === Node.TEXT_NODE) {
      textNodes.push(node);
    } else {
      node.childNodes.forEach(getTextNodes);
    }
  }

  getTextNodes(node);
  return textNodes;
}

// --------------------
// CARET SAVE/RESTORE VIA MARKER (for onInput updates)
// --------------------

/**
 * Inserts a temporary marker element at the current caret position.
 */
function saveCaretMarker(element: HTMLElement): HTMLElement | null {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return null;
  const range = selection.getRangeAt(0);
  const marker = document.createElement("span");
  marker.id = "caret-marker";
  // Hide the marker
  marker.style.opacity = "0";
  marker.style.position = "absolute";
  marker.style.pointerEvents = "none";
  // Collapse the range and insert the marker
  range.collapse(true);
  range.insertNode(marker);
  return marker;
}

/**
 * Restores the caret position by searching for the marker.
 * If the marker is not found (e.g. on the very first input), the caret is placed at the end.
 */

function restoreCaretMarker(element: HTMLElement): void {
  const marker = element.querySelector("#caret-marker");
  const sel = window.getSelection();
  if (sel) {
    sel.removeAllRanges();
    let range = document.createRange();
    if (marker) {
      let parentMarker = marker.parentNode as HTMLElement;
      // Check if marker is inside another tag
      if (marker.previousSibling && marker.previousSibling.nodeType === Node.ELEMENT_NODE) {
        const emptyTextNode = document.createTextNode(' ');
        parentMarker.insertBefore(emptyTextNode, marker); // Insert space to break out of the tag
        range.setStartAfter(emptyTextNode);
      } else {
        range.setStartAfter(marker);
      }

      range.collapse(true);
      parentMarker.removeChild(marker);
      sel.addRange(range);
    } else {
      range = createRangeAtEnd(element); // Ensure caret is placed at the end if no marker
      sel.addRange(range);
    }
  }
}



/**
 * Creates a Range at the end of the element's text.
 */
function createRangeAtEnd(element: HTMLElement): Range {
  const range = document.createRange();
  const textNodes = getTextNodesIn(element);
  if (textNodes.length) {
    const lastNode = textNodes[textNodes.length - 1];
    const len = lastNode.textContent ? lastNode.textContent.length : 0;
    range.setStart(lastNode, len);
  } else {
    range.selectNodeContents(element);
    range.collapse(false);
  }
  return range;
}

// --------------------
// CARET RESTORE BY OFFSET (for undo/redo)
// --------------------
const restoreCaretByOffset = (element: HTMLElement, offset: number): void => {
  const textNodes = getTextNodesIn(element);
  let currentOffset = 0;
  let targetNode: Node | null = null;
  let targetOffset = 0;
  for (const node of textNodes) {
    const len = node.textContent?.length || 0;
    if (currentOffset + len >= offset) {
      targetNode = node;
      targetOffset = offset - currentOffset;
      break;
    }
    currentOffset += len;
  }
  if (targetNode) {
    const range = document.createRange();
    range.setStart(targetNode, targetOffset);
    range.collapse(true);
    const sel = window.getSelection();
    sel?.removeAllRanges();
    sel?.addRange(range);
  }
};

const MessageEditor: FC<MessageEditorProps> = ({
  ref,
  id,
  html,
  placeholder,
  isActive = true,
  className,
  tabIndex = 0,
  contentEditable = true,
  onUpdate,
  onClick,
  onKeyDown,
  onMouseDown,
  onContextMenu,
  onTouchCancel,
  onFocus,
  onBlur,
}) => {
  const [editorState, setEditorState] = useState<EditorState>({
    history: [{
      content: html,
      position: {
        offset: html.length,
        selection: 0,
        content: html,
        lineNumber: html.split('\n').length - 1,
      },
      timestamp: Date.now(),
    }],
    currentIndex: 0,
    lastPosition: null,
    isComposing: false,
  });

  const lastChangeRef = useRef<number>(Date.now());
  const isUpdatingRef = useRef<boolean>(false);

  // Get current caret position relative to the element's text.
  const getCursorPosition = useCallback((element: HTMLElement): Position => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) {
      return {
        offset: 0,
        selection: 0,
        content: element.textContent || '',
        lineNumber: 0
      };
    }
    const range = selection.getRangeAt(0);
    const preRange = document.createRange();
    preRange.selectNodeContents(element);
    preRange.setEnd(range.startContainer, range.startOffset);
    const content = preRange.toString();
    const lines = content.split('\n');
    return {
      offset: content.length,
      selection: range.collapsed ? 0 : range.toString().length,
      content: element.innerHTML,
      lineNumber: lines.length - 1,
    };
  }, []);

  // For onInput updates, we restore caret using the marker approach.
  const setCursorUsingMarker = useCallback((element: HTMLElement) => {
    restoreCaretMarker(element);
  }, []);

  // --------------------
  // Event Handlers
  // --------------------
  const handleChange = useCallback((e: ChangeEvent<HTMLDivElement>) => {

    if (editorState.isComposing || isUpdatingRef.current) return;
    const element = e.currentTarget;
    // Save caret position via marker
    if (element.innerText.length <= 1) {
      onUpdate(element.innerHTML);
      return;
    }
    saveCaretMarker(element);
    const content = element.innerHTML;
    const currentTime = Date.now();
    const cursorPos = getCursorPosition(element);

    isUpdatingRef.current = true;
    onUpdate(parseMarkdown(content));
    const timeSinceLastChange = currentTime - lastChangeRef.current;

    setEditorState(prev => {
      const newHistory = timeSinceLastChange >= HISTORY_THROTTLE_MS
        ? [...prev.history.slice(0, prev.currentIndex + 1), {
          content,
          position: cursorPos,
          timestamp: currentTime
        }].slice(-MAX_HISTORY_LENGTH)
        : prev.history;
      return {
        ...prev,
        history: newHistory,
        currentIndex: timeSinceLastChange >= HISTORY_THROTTLE_MS ? newHistory.length - 1 : prev.currentIndex,
        lastPosition: cursorPos,
      };
    });
    if (timeSinceLastChange >= HISTORY_THROTTLE_MS) {
      lastChangeRef.current = currentTime;
    }
    requestAnimationFrame(() => {
      if (element) {
        // Restore caret using marker; fallback to end if marker not found.
        setCursorUsingMarker(element);
      }
      isUpdatingRef.current = false;
    });
  }, [editorState.isComposing, getCursorPosition, onUpdate, setCursorUsingMarker]);

  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'z' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      if (e.shiftKey) {
        // Redo
        if (editorState.currentIndex < editorState.history.length - 1) {
          const nextIndex = editorState.currentIndex + 1;
          const nextEntry = editorState.history[nextIndex];
          if (ref?.current) {
            ref.current.innerHTML = nextEntry.content;
            // Restore caret using stored offset from history.
            restoreCaretByOffset(ref.current, nextEntry.position.offset);
            onUpdate(nextEntry.content);
          }
          setEditorState(prev => ({
            ...prev,
            currentIndex: nextIndex,
            lastPosition: nextEntry.position,
          }));
        }
      } else {
        // Undo
        if (editorState.currentIndex > 0) {
          const prevIndex = editorState.currentIndex - 1;
          const prevEntry = editorState.history[prevIndex];
          if (ref?.current) {
            ref.current.innerHTML = prevEntry.content;
            restoreCaretByOffset(ref.current, prevEntry.position.offset);
            onUpdate(prevEntry.content);
          }
          setEditorState(prev => ({
            ...prev,
            currentIndex: prevIndex,
            lastPosition: prevEntry.position,
          }));
        }
      }
    }
    onKeyDown?.(e);
  }, [editorState, ref, onUpdate, onKeyDown]);

  const handleCompositionStart = useCallback(() => {
    setEditorState(prev => ({
      ...prev,
      isComposing: true
    }));
  }, []);

  const handleCompositionEnd = useCallback(() => {
    setEditorState(prev => ({
      ...prev,
      isComposing: false
    }));
  }, []);

  return (
    <div
      ref={ref}
      id={id}
      className={className}
      contentEditable={contentEditable}
      role="textbox"
      dir="auto"
      tabIndex={tabIndex}
      aria-label={placeholder}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      onMouseDown={onMouseDown}
      onContextMenu={onContextMenu}
      onTouchCancel={onTouchCancel}
      onFocus={onFocus}
      onBlur={onBlur}
      onInput={handleChange}
      onCompositionStart={handleCompositionStart}
      onCompositionEnd={handleCompositionEnd}
    />
  );
};

export default memo(MessageEditor);
