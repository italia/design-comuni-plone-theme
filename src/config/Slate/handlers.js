import {
  goDown,
  goUp,
  softBreak,
} from '@plone/volto-slate/blocks/Text/keyboard';

import {
  isCursorAtBlockStart,
  isCursorAtBlockEnd,
} from '@plone/volto-slate/utils';

const focusPrev = (props) => {
  const { focusPrevField, showToolbar } = props.editor.getBlockProps();

  let isAtStart = false;

  if (showToolbar) {
    isAtStart = isCursorAtBlockStart(props.editor);
  } else {
    isAtStart = props.event.target.selectionStart === 0;
  }

  if (focusPrevField && isAtStart) {
    props.event.stopPropagation();
    return focusPrevField();
  }
  return goUp(props); // Select prev block
};

const focusNext = (props) => {
  const { focusNextField, showToolbar } = props.editor.getBlockProps();

  let isAtEnd = false;
  if (showToolbar) {
    isAtEnd = isCursorAtBlockEnd(props.editor);
  } else {
    isAtEnd =
      props.event.target.selectionEnd === props.event.target.value.length;
  }
  if (focusNextField && isAtEnd) {
    props.event.stopPropagation();
    return focusNextField();
  }
  return goDown(props); // Select next block
};
export default function install(config) {
  config.settings.slate.textblockDetachedKeyboardHandlers = {
    ...config.settings.slate.textblockDetachedKeyboardHandlers,
    Enter: [
      ...config.settings.slate.textblockDetachedKeyboardHandlers.Enter,
      focusNext,
    ],
    ArrowUp: [focusPrev],
    ArrowDown: [focusNext],
  };

  return config;
}
