export enum TokenType {
  // Basic tokens
  TEXT,       // Generic text (used for plain_text or code content)
  NEWLINE,    // "\n" or "\r\n"
  EOF,        // End of file/input

  // Code block tokens
  CODE_FENCE,         // "```" (both start and end of a code block)
  LANGUAGE_SPECIFIER, // Optional language identifier following the opening code fence
  CODE_CONTENT,       // Everything inside a code block (until the closing fence)

  // Inline formatting tokens (these mark both the start and the end)
  BOLD_MARKER,        // "**"
  ITALIC_MARKER,      // "__"
  STRIKE_MARKER,      // "~~"
  SPOILER_MARKER,     // "||"
  INLINE_CODE_MARKER, // "`"

  // Punctuation tokens (used by both emoji and links)
  LBRACKET, // "["
  RBRACKET, // "]"
  LPAREN, // "("
  RPAREN, // ")"
  EMOJI_TEXT,
  // Emoji-specific tokens
  CUSTOM_EMOJI_PREFIX, // Literal "customEmoji:" in an emoji token
  NUMBER, // One or more digits (for the emoji id)

  // Link-specific tokens (if you wish to distinguish inner text)
  LINK_TEXT, // Text inside the square brackets of a link
  LINK_URL, // URL inside the parentheses of a link
}

export interface Token {
  type: TokenType;
  value: string;
}

const markers = ['**', '```', '__', '||', '~~', '`', '['];
// eslint-disable-next-line @typescript-eslint/no-shadow
function startsWithAny(input: string, pos: number, markers: string[]): boolean {
  for (const marker of markers) {
    if (input.startsWith(marker, pos)) {
      return true;
    }
  }
  return false;
}
export function tokenize(input: string): Token[] {
  const tokens: Token[] = [];
  let pos = 0;

  while (pos < input.length) {
    const char = input[pos];

    // Code fence (```), which may include a language specifier and content.
    if (input.startsWith('```', pos)) {
      const endPos = findMatchingDelimiter(input, '```', pos + 3);
      if (endPos !== -1) {
        // Opening fence
        tokens.push({ type: TokenType.CODE_FENCE, value: '```' });
        pos += 3;

        // Optional language specifier until newline
        const langStart = pos;
        while (pos < input.length && input[pos] !== '\n' && input[pos] !== '\r') {
          pos++;
        }
        if (pos > langStart) {
          tokens.push({
            type: TokenType.LANGUAGE_SPECIFIER,
            value: input.substring(langStart, pos),
          });
        }
        // Consume newline if present
        if (pos < input.length && (input[pos] === '\n' || input[pos] === '\r')) {
          tokens.push({ type: TokenType.NEWLINE, value: input[pos] });
          pos++;
        }

        // Code content until the closing fence
        // eslint-disable-next-line no-mixed-operators
        if (pos < endPos && input[endPos - 1] === '\n' || input[endPos - 1] === '\r') {
          tokens.push({
            type: TokenType.CODE_CONTENT,
            value: input.substring(pos, endPos - 1),
          });
          tokens.push({ type: TokenType.NEWLINE, value: input[endPos - 1] });
        } else if (pos < endPos) {
          tokens.push({
            type: TokenType.CODE_CONTENT,
            value: input.substring(pos, endPos),
          });
        }
        // Closing fence
        tokens.push({ type: TokenType.CODE_FENCE, value: '```' });
        pos = endPos + 3;
      } else {
        tokens.push({ type: TokenType.TEXT, value: '```' });
        pos += 3;
      }
    } else if (input.startsWith('**', pos)) { // Bold marker (**)
      const endPos = findMatchingDelimiter(input, '**', pos + 2);
      if (endPos !== -1) {
        tokens.push({ type: TokenType.BOLD_MARKER, value: '**' });
        const innerTokens = tokenize(input.substring(pos + 2, endPos));
        innerTokens.pop(); // Removes the EOF token.
        tokens.push(...innerTokens);
        tokens.push({ type: TokenType.BOLD_MARKER, value: '**' });
        pos = endPos + 2;
      } else {
        tokens.push({ type: TokenType.TEXT, value: '**' });
        pos += 2;
      }
    } else if (input.startsWith('__', pos)) { // Italic marker (__)
      const endPos = findMatchingDelimiter(input, '__', pos + 2);
      if (endPos !== -1) {
        tokens.push({ type: TokenType.ITALIC_MARKER, value: '__' });
        const innerTokens = tokenize(input.substring(pos + 2, endPos));
        innerTokens.pop(); // Removes the EOF token.
        tokens.push(...innerTokens);
        tokens.push({ type: TokenType.ITALIC_MARKER, value: '__' });
        pos = endPos + 2;
      } else {
        tokens.push({ type: TokenType.TEXT, value: '__' });
        pos += 2;
      }
    } else if (input.startsWith('~~', pos)) { // Strike marker (~~)
      const endPos = findMatchingDelimiter(input, '~~', pos + 2);
      if (endPos !== -1) {
        tokens.push({ type: TokenType.STRIKE_MARKER, value: '~~' });
        const innerTokens = tokenize(input.substring(pos + 2, endPos));
        innerTokens.pop(); // Removes the EOF token.
        tokens.push(...innerTokens);
        tokens.push({ type: TokenType.STRIKE_MARKER, value: '~~' });
        pos = endPos + 2;
      } else {
        tokens.push({ type: TokenType.TEXT, value: '~~' });
        pos += 2;
      }
    } else if (input.startsWith('||', pos)) { // Spoiler marker (||)
      const endPos = findMatchingDelimiter(input, '||', pos + 2);
      if (endPos !== -1) {
        tokens.push({ type: TokenType.SPOILER_MARKER, value: '||' });
        const innerTokens = tokenize(input.substring(pos + 2, endPos));
        innerTokens.pop(); // Removes the EOF token.
        tokens.push(...innerTokens);
        tokens.push({ type: TokenType.SPOILER_MARKER, value: '||' });
        pos = endPos + 2;
      } else {
        tokens.push({ type: TokenType.TEXT, value: '||' });
        pos += 2;
      }
    } else if (input.startsWith('`', pos)) { // Inline code marker (`)
      const endPos = findMatchingDelimiter(input, '`', pos + 1);
      if (endPos !== -1) {
        tokens.push({ type: TokenType.INLINE_CODE_MARKER, value: '`' });
        const innerTokens = tokenize(input.substring(pos + 1, endPos));
        innerTokens.pop(); // Removes the EOF token.
        tokens.push(...innerTokens);
        tokens.push({ type: TokenType.INLINE_CODE_MARKER, value: '`' });
        pos = endPos + 1;
      } else {
        tokens.push({ type: TokenType.TEXT, value: '`' });
        pos += 1;
      }
    } else if (input.startsWith('[', pos)) { // Link markers ([...])
      // Find the closing bracket for the text inside the square brackets.
      const closingBracket = findMatchingDelimiter(input, ']', pos + 1);
      // Check that there is an opening parenthesis immediately after.
      if (closingBracket !== -1 && input[closingBracket + 1] === '(') {
        const openParen = closingBracket + 1;
        const closingParen = findMatchingDelimiter(input, ')', openParen + 1);
        if (closingParen !== -1) {
          // Extract the text inside the brackets and the parentheses.
          const innerText = input.substring(pos + 1, closingBracket);
          const innerParen = input.substring(openParen + 1, closingParen);

          // Check if the parenthesis content indicates an emoji.
          if (innerParen.startsWith('customEmoji:')) {
            // Tokenize as an emoji.
            tokens.push({ type: TokenType.LBRACKET, value: '[' });
            tokens.push({ type: TokenType.EMOJI_TEXT, value: innerText });
            tokens.push({ type: TokenType.RBRACKET, value: ']' });
            tokens.push({ type: TokenType.LPAREN, value: '(' });
            tokens.push({ type: TokenType.CUSTOM_EMOJI_PREFIX, value: 'customEmoji:' });
            // Get the emoji id (digits following "customEmoji:")
            const emojiId = innerParen.substring('customEmoji:'.length);
            tokens.push({ type: TokenType.NUMBER, value: emojiId });
            tokens.push({ type: TokenType.RPAREN, value: ')' });
          } else {
            // Otherwise, tokenize as a link.
            tokens.push({ type: TokenType.LBRACKET, value: '[' });
            tokens.push({ type: TokenType.LINK_TEXT, value: innerText });
            tokens.push({ type: TokenType.RBRACKET, value: ']' });
            tokens.push({ type: TokenType.LPAREN, value: '(' });
            tokens.push({ type: TokenType.LINK_URL, value: innerParen });
            tokens.push({ type: TokenType.RPAREN, value: ')' });
          }
          // Update the position to the character after the closing parenthesis.
          pos = closingParen + 1;
        } else {
          tokens.push({ type: TokenType.TEXT, value: '[' });
          pos += 1;
        }
      } else {
        tokens.push({ type: TokenType.TEXT, value: '[' });
        pos += 1;
      }
      // eslint-disable-next-line @typescript-eslint/brace-style
    }
    // Newline
    else if (char === '\n') {
      tokens.push({ type: TokenType.NEWLINE, value: '\n' });
      pos++;
      // eslint-disable-next-line @typescript-eslint/brace-style
    }
    // Regular text (until the next newline)
    else {
      let text = '';
      while (pos < input.length && input[pos] !== '\n' && !startsWithAny(input, pos, markers)) {
        text += input[pos++];
      }
      if (text) {
        if (tokens[tokens.length - 1] && tokens[tokens.length - 1].type === TokenType.TEXT) {
          const lastToken = tokens.pop();
          // eslint-disable-next-line no-unsafe-optional-chaining
          tokens.push({ type: TokenType.TEXT, value: lastToken?.value + text });
        } else {
          tokens.push({ type: TokenType.TEXT, value: text });
        }
      }
    }
  }

  tokens.push({ type: TokenType.EOF, value: '' });
  return tokens;
}

export function findMatchingDelimiter(
  input: string,
  delimiter: string,
  startIndex: number,
): number {
  return input.indexOf(delimiter, startIndex);
}


export enum ASTNodeType {
  document,
  block,
  code_block,
  paragraph,
  language_specifier,
  code_content,
  newline,
  any_character,
  inline,
  bold,
  italic,
  strike,
  spoiler,
  inline_code,
  emoji,
  link,
  plain_text,
}
export interface ASTNode {
  type: ASTNodeType | TokenType;
  children: ASTNode[];
  value?: string;
}
export function parse(tokens: Token[]): ASTNode {
  let pos = 0;

  // Helper functions for token management
  function peek(offset = 0): Token | undefined {
    return tokens[pos + offset];
  }

  function nextToken(): Token {
    if (pos >= tokens.length) {
      throw new Error("Unexpected end of input");
    }
    return tokens[pos++];
  }

  function match(tokenType: TokenType): boolean {
    return peek()?.type === tokenType;
  }

  function expect(tokenType: TokenType): Token {
    if (match(tokenType)) {
      return nextToken();
    }
    throw new Error(`Expected token of type ${tokenType} but got ${peek()?.type}`);
  }

  // document → block* EOF
  function document(): ASTNode {
    const children: ASTNode[] = [];

    while (peek() && peek()!.type !== TokenType.EOF) {
      children.push(block());
    }

    // Consume EOF token if present
    if (peek()?.type === TokenType.EOF) {
      nextToken();
    }

    return { type: ASTNodeType.document, children };
  }

  // block → code_block | paragraph
  function block(): ASTNode {
    if (match(TokenType.CODE_FENCE)) {
      return codeBlock();
    } else {
      return paragraph();
    }
  }

  // code_block → CODE_FENCE [language_specifier] [newline] code_content [newline] CODE_FENCE
  function codeBlock(): ASTNode {
    const children: ASTNode[] = [];

    // Opening code fence
    const openFence = expect(TokenType.CODE_FENCE);
    children.push({ type: openFence.type, value: openFence.value, children: [] });

    // Optional language specifier
    if (match(TokenType.LANGUAGE_SPECIFIER)) {
      const langSpec = nextToken();
      children.push({ type: ASTNodeType.language_specifier, value: langSpec.value, children: [] });
    }

    // Optional newline
    if (match(TokenType.NEWLINE)) {
      const newline = nextToken();
      children.push({ type: newline.type, value: newline.value, children: [] });
    }

    // Code content until closing fence
    while (peek() && peek()!.type !== TokenType.CODE_FENCE) {
      const content = nextToken();
      children.push({ type: ASTNodeType.code_content, value: content.value, children: [] });
    }

    // Optional newline before closing fence
    if (match(TokenType.NEWLINE)) {
      const newline = nextToken();
      children.push({ type: newline.type, value: newline.value, children: [] });
    }

    // Closing code fence
    if (!match(TokenType.CODE_FENCE)) {
      throw new Error("Unclosed code fence");
    }
    const closeFence = nextToken();
    children.push({ type: closeFence.type, value: closeFence.value, children: [] });

    return { type: ASTNodeType.code_block, children };
  }

  // paragraph → inline+
  function paragraph(): ASTNode {
    const children: ASTNode[] = [];

    // Parse one or more inline elements
    do {
      children.push(inline());
    } while (
      peek() &&
      peek()!.type !== TokenType.CODE_FENCE &&
      peek()!.type !== TokenType.EOF
      );

    return { type: ASTNodeType.paragraph, children };
  }

  // inline → bold | italic | strike | spoiler | inline_code | link | emoji | plain_text
  function inline(): ASTNode {
    if (!peek()) {
      throw new Error("Unexpected end of input in inline content");
    }

    switch (peek()!.type) {
      case TokenType.BOLD_MARKER:
        return bold();
      case TokenType.ITALIC_MARKER:
        return italic();
      case TokenType.STRIKE_MARKER:
        return strike();
      case TokenType.SPOILER_MARKER:
        return spoiler();
      case TokenType.INLINE_CODE_MARKER:
        return inlineCode();
      case TokenType.LBRACKET:
        // Additional lookahead to determine link or emoji
        if (peek(1)?.type === TokenType.EMOJI_TEXT) {
          return emoji();
        } else {
          return link();
        }
      default:
        return plainText();
    }
  }

  // bold → BOLD_MARKER inline+ BOLD_MARKER
  function bold(): ASTNode {
    const children: ASTNode[] = [];

    // Consume opening marker
    const openMarker = expect(TokenType.BOLD_MARKER);
    children.push({ type: openMarker.type, value: openMarker.value, children: [] });

    // Parse inline content until closing marker
    while (peek() && peek()!.type !== TokenType.BOLD_MARKER) {
      children.push(inline());
    }

    // Consume closing marker
    if (!match(TokenType.BOLD_MARKER)) {
      throw new Error("Unclosed bold marker");
    }
    const closeMarker = nextToken();
    children.push({ type: closeMarker.type, value: closeMarker.value, children: [] });

    return { type: ASTNodeType.bold, children };
  }

  // italic → ITALIC_MARKER inline+ ITALIC_MARKER
  function italic(): ASTNode {
    const children: ASTNode[] = [];

    // Consume opening marker
    const openMarker = expect(TokenType.ITALIC_MARKER);
    children.push({ type: openMarker.type, value: openMarker.value, children: [] });

    // Parse inline content until closing marker
    while (peek() && peek()!.type !== TokenType.ITALIC_MARKER) {
      children.push(inline());
    }

    // Consume closing marker
    if (!match(TokenType.ITALIC_MARKER)) {
      throw new Error("Unclosed italic marker");
    }
    const closeMarker = nextToken();
    children.push({ type: closeMarker.type, value: closeMarker.value, children: [] });

    return { type: ASTNodeType.italic, children };
  }

  // strike → STRIKE_MARKER inline+ STRIKE_MARKER
  function strike(): ASTNode {
    const children: ASTNode[] = [];

    // Consume opening marker
    const openMarker = expect(TokenType.STRIKE_MARKER);
    children.push({ type: openMarker.type, value: openMarker.value, children: [] });

    // Parse inline content until closing marker
    while (peek() && peek()!.type !== TokenType.STRIKE_MARKER) {
      children.push(inline());
    }

    // Consume closing marker
    if (!match(TokenType.STRIKE_MARKER)) {
      throw new Error("Unclosed strike marker");
    }
    const closeMarker = nextToken();
    children.push({ type: closeMarker.type, value: closeMarker.value, children: [] });

    return { type: ASTNodeType.strike, children };
  }

  // spoiler → SPOILER_MARKER inline+ SPOILER_MARKER
  function spoiler(): ASTNode {
    const children: ASTNode[] = [];

    // Consume opening marker
    const openMarker = expect(TokenType.SPOILER_MARKER);
    children.push({ type: openMarker.type, value: openMarker.value, children: [] });

    // Parse inline content until closing marker
    while (peek() && peek()!.type !== TokenType.SPOILER_MARKER) {
      children.push(inline());
    }

    // Consume closing marker
    if (!match(TokenType.SPOILER_MARKER)) {
      throw new Error("Unclosed spoiler marker");
    }
    const closeMarker = nextToken();
    children.push({ type: closeMarker.type, value: closeMarker.value, children: [] });

    return { type: ASTNodeType.spoiler, children };
  }

  // inline_code → INLINE_CODE_MARKER plain_text INLINE_CODE_MARKER
  function inlineCode(): ASTNode {
    const children: ASTNode[] = [];

    // Consume opening marker
    const openMarker = expect(TokenType.INLINE_CODE_MARKER);
    children.push({ type: openMarker.type, value: openMarker.value, children: [] });

    // Parse plain text until closing marker
    while (peek() && peek()!.type !== TokenType.INLINE_CODE_MARKER) {
      // For inline code, content is treated as plain text
      const contentToken = nextToken();
      children.push({ type: ASTNodeType.plain_text, value: contentToken.value, children: [] });
    }

    // Consume closing marker
    if (!match(TokenType.INLINE_CODE_MARKER)) {
      throw new Error("Unclosed inline code marker");
    }
    const closeMarker = nextToken();
    children.push({ type: closeMarker.type, value: closeMarker.value, children: [] });

    return { type: ASTNodeType.inline_code, children };
  }

  // link → LBRACKET link_text RBRACKET LPAREN link_url RPAREN
  function link(): ASTNode {
    const children: ASTNode[] = [];

    // Consume LBRACKET
    const lbracket = expect(TokenType.LBRACKET);
    children.push({ type: lbracket.type, value: lbracket.value, children: [] });

    // Parse link text until RBRACKET
    while (peek() && peek()!.type !== TokenType.RBRACKET) {
      children.push(plainText());
    }

    // Consume RBRACKET
    if (!match(TokenType.RBRACKET)) {
      throw new Error("Unclosed link: missing RBRACKET");
    }
    const rbracket = nextToken();
    children.push({ type: rbracket.type, value: rbracket.value, children: [] });

    // Consume LPAREN
    if (!match(TokenType.LPAREN)) {
      throw new Error("Invalid link: missing LPAREN");
    }
    const lparen = nextToken();
    children.push({ type: lparen.type, value: lparen.value, children: [] });

    // Parse link URL until RPAREN
    while (peek() && peek()!.type !== TokenType.RPAREN) {
      children.push(plainText());
    }

    // Consume RPAREN
    if (!match(TokenType.RPAREN)) {
      throw new Error("Unclosed link: missing RPAREN");
    }
    const rparen = nextToken();
    children.push({ type: rparen.type, value: rparen.value, children: [] });

    return { type: ASTNodeType.link, children };
  }

  // emoji → LBRACKET EMOJI_TEXT RBRACKET LPAREN CUSTOM_EMOJI_PREFIX NUMBER RPAREN
  function emoji(): ASTNode {
    const children: ASTNode[] = [];

    // Consume LBRACKET
    const lbracket = expect(TokenType.LBRACKET);
    children.push({ type: lbracket.type, value: lbracket.value, children: [] });

    // Consume EMOJI_TEXT
    if (!match(TokenType.EMOJI_TEXT)) {
      throw new Error("Invalid emoji: expected EMOJI_TEXT");
    }
    const emojiText = nextToken();
    children.push({ type: emojiText.type, value: emojiText.value, children: [] });

    // Consume RBRACKET
    if (!match(TokenType.RBRACKET)) {
      throw new Error("Invalid emoji: missing RBRACKET");
    }
    const rbracket = nextToken();
    children.push({ type: rbracket.type, value: rbracket.value, children: [] });

    // Consume LPAREN
    if (!match(TokenType.LPAREN)) {
      throw new Error("Invalid emoji: missing LPAREN");
    }
    const lparen = nextToken();
    children.push({ type: lparen.type, value: lparen.value, children: [] });

    // Consume CUSTOM_EMOJI_PREFIX
    if (!match(TokenType.CUSTOM_EMOJI_PREFIX)) {
      throw new Error("Invalid emoji: missing CUSTOM_EMOJI_PREFIX");
    }
    const prefix = nextToken();
    children.push({ type: prefix.type, value: prefix.value, children: [] });

    // Consume NUMBER
    if (!match(TokenType.NUMBER)) {
      throw new Error("Invalid emoji: missing NUMBER");
    }
    const number = nextToken();
    children.push({ type: number.type, value: number.value, children: [] });

    // Consume RPAREN
    if (!match(TokenType.RPAREN)) {
      throw new Error("Invalid emoji: missing RPAREN");
    }
    const rparen = nextToken();
    children.push({ type: rparen.type, value: rparen.value, children: [] });

    return { type: ASTNodeType.emoji, children };
  }

  // plain_text → TEXT
  function plainText(): ASTNode {
    const token = nextToken();
    return { type: ASTNodeType.plain_text, value: token.value, children: [] };
  }

  // Start parsing from the document rule
  return document();
}


export function generateHTML(ast: ASTNode): string {
  // Helper function to check if a node generates empty content
  function isEmptyContent(node: ASTNode): boolean {
    if (!node.children || node.children.length === 0) {
      return !node.value || node.value.trim() === '';
    }

    // Check if all children generate empty content
    return node.children.every(isEmptyContent);
  }

  // Skip empty nodes for certain types
  if ((ast.type === ASTNodeType.paragraph ||
      ast.type === ASTNodeType.bold ||
      ast.type === ASTNodeType.italic ||
      ast.type === ASTNodeType.strike ||
      ast.type === ASTNodeType.spoiler) &&
    isEmptyContent(ast)) {
    return '';
  }

  // Process based on node type
  switch (ast.type) {
    case ASTNodeType.document:
      // Filter out empty children
      return ast.children
        .map(generateHTML)
        .filter(html => html.trim() !== '')
        .join("");

    case ASTNodeType.block:
      // Filter out empty children
      return ast.children
        .map(generateHTML)
        .filter(html => html.trim() !== '')
        .join("");

    case ASTNodeType.paragraph: {
      const content = ast.children
        .map(generateHTML)
        .filter(html => html==="\n" || html.trim() !== '')
        .join("");

      return content.trim() ? `${content}` : '';
    }

    case ASTNodeType.code_block: {
      // Handle language specifier for syntax highlighting
      let language = '';
      let content = '';

      for (const child of ast.children) {
        if (child.type === ASTNodeType.language_specifier) {
          language = child.value || '';
        } else if (child.type === ASTNodeType.code_content) {
          content += (child.value || '') + '\n';
        }
      }

      // Trim trailing newline
      content = content.trim();

      // Don't generate empty code blocks
      if (!content) return '';

      // Add language class if specified
      const languageAttr = language ? ` class="language-${language}"` : '';
      return `<pre><code${languageAttr}>${escapeHTML(content)}</code></pre>`;
    }

    case ASTNodeType.code_content:
      return ast.value || "";

    case ASTNodeType.bold: {
      const content = ast.children
        .map(generateHTML)
        .filter(html => html.trim() !== '')
        .join("");

      return content.trim() ? `<strong>${content}</strong>` : '';
    }

    case ASTNodeType.italic: {
      const content = ast.children
        .map(generateHTML)
        .filter(html => html.trim() !== '')
        .join("");

      return content.trim() ? `<em>${content}</em>` : '';
    }

    case ASTNodeType.strike: {
      const content = ast.children
        .map(generateHTML)
        .filter(html => html.trim() !== '')
        .join("");

      return content.trim() ? `<del>${content}</del>` : '';
    }

    case ASTNodeType.spoiler: {
      const content = ast.children
        .map(generateHTML)
        .filter(html => html.trim() !== '')
        .join("");

      return content.trim() ? `<span class="spoiler">${content}</span>` : '';
    }

    case ASTNodeType.inline_code: {
      // Get content by filtering out markers
      const content = ast.children
        .filter(child => child.type !== TokenType.INLINE_CODE_MARKER)
        .map(child => child.value || '')
        .join('');

      return content.trim() ? `<code>${escapeHTML(content)}</code>` : '';
    }

    case ASTNodeType.emoji: {
      // Extract emoji name and ID
      let emojiName = '';
      let emojiId = '';

      for (const child of ast.children) {
        if (child.type === TokenType.EMOJI_TEXT) {
          emojiName = child.value || '';
        } else if (child.type === TokenType.NUMBER) {
          emojiId = child.value || '';
        }
      }

      if (emojiName && emojiId) {
        return `<span class="emoji" data-emoji-id="${emojiId}">${emojiName}</span>`;
      }

      return ast.value || '';
    }

    case ASTNodeType.link: {
      // Extract link text and URL
      let linkText = '';
      let linkUrl = '';
      let inUrl = false;

      for (const child of ast.children) {
        if (child.type === TokenType.LPAREN) {
          inUrl = true;
        } else if (child.type === TokenType.RPAREN) {
          inUrl = false;
        } else if (child.type !== TokenType.LBRACKET && child.type !== TokenType.RBRACKET) {
          if (inUrl) {
            linkUrl += child.value || '';
          } else {
            linkText += generateHTML(child);
          }
        }
      }

      if (linkText.trim() && linkUrl.trim()) {
        return `<a href="${escapeAttribute(linkUrl)}">${linkText}</a>`;
      }

      return linkText;
    }

    case ASTNodeType.plain_text:
      return ast.value ? escapeHTML(ast.value) : '';

    case ASTNodeType.inline:
      return ast.children
        .map(generateHTML)
        .filter(html => html.trim() !== '')
        .join("");

    default:
      // Markers and special tokens - ignore them
      if ([
        TokenType.BOLD_MARKER,
        TokenType.ITALIC_MARKER,
        TokenType.STRIKE_MARKER,
        TokenType.SPOILER_MARKER,
        TokenType.INLINE_CODE_MARKER,
        TokenType.CODE_FENCE,
        TokenType.LBRACKET,
        TokenType.RBRACKET,
        TokenType.LPAREN,
        TokenType.RPAREN,
        TokenType.LANGUAGE_SPECIFIER,
        TokenType.NEWLINE,
        TokenType.EOF
      ].includes(ast.type as any)) {
        return '';
      }

      // Fallback: return the node's value or process its children
      return ast.value ||
        (ast.children ?
          ast.children
            .map(generateHTML)
            .filter(html => html.trim() !== '')
            .join("") :
          '');
  }
}
// Helper function to escape HTML special characters
function escapeHTML(text: string): string {
  return text
    // .replace(/&/g, '&amp;')
    // .replace(/</g, '&lt;')
    // .replace(/>/g, '&gt;')
    // .replace(/"/g, '&quot;')
    // .replace(/'/g, '&#039;');
}
// Helper function to escape HTML attribute values
function escapeAttribute(text: string): string {
  return text
    // .replace(/&/g, '&amp;')
    // .replace(/"/g, '&quot;')
    // .replace(/'/g, '&#039;');
}
