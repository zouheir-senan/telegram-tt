import type { FC } from '../../../../lib/teact/teact';
import React, { useRef, useState } from '../../../../lib/teact/teact';

import type LangFn from '../../../../hooks/useOldLang';

import buildClassName from '../../../../util/buildClassName';

import useFlag from '../../../../hooks/useFlag';

import EmojiPicker from '../../../middle/composer/EmojiPicker';
import Button from '../../../ui/Button';
import InputText from '../../../ui/InputText';
import Menu from '../../../ui/Menu';
import useLastCallback from '../../../../hooks/useLastCallback';
import './FolderTitleInput.scss';

type Props = {
  value: string;
  error?: string;
  lang: LangFn;
  onChange?:(event: React.ChangeEvent<HTMLInputElement>) => void;
  onEmojiSelect? :(emoji: string) => void;
};

const FolderTitleInput: FC<Props> = ({
  value,
  error,
  lang,
  onChange,
  onEmojiSelect,
}) => {
  const [isEmojiPickerOpen, openEmojiPicker, closeEmojiPicker] = useFlag();
  const [folderName, setFolderName] = useState<string>('folder');
  const inputRef = useRef<HTMLInputElement>(null);
  const handleEmojiSelect = useLastCallback((emoji: string, name: string) => {
    setFolderName(name);
    if (onEmojiSelect) {
      onEmojiSelect(emoji);
    }
  });
  return (
    <div className="folder-title-input-wrapper">
      <InputText
        ref={inputRef}
        className="mb-0"
        label={lang('FilterNameHint')}
        value={value}
        onChange={onChange}
        error={error}
      />
      <Button
        className={buildClassName(
          'emoji-button',
          isEmojiPickerOpen && 'active'
        )}
        round
        color="translucent"
        onClick={isEmojiPickerOpen ? closeEmojiPicker : openEmojiPicker}
        ariaLabel="Choose emoji"
      >
        <i
          // className={buildClassName(`icon icon-${folderName}`)}
          className={buildClassName('icon icon-folder')}
        />
      </Button>
      {/* todo we may need to load this menu on lazy way like SymbolMenuAsync */}
      <Menu
        isOpen={isEmojiPickerOpen}
        onClose={closeEmojiPicker}
        className="emoji-menu"
        positionX="left"
        positionY="top"
        transformOriginX={90}
        autoClose
      >
        <div className="SymbolMenu-main ">
          <EmojiPicker onEmojiSelect={handleEmojiSelect} isFolderPicker />
        </div>
      </Menu>

    </div>
  );
};

export default FolderTitleInput;
