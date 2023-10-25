import {
  goDown,
  goUp,
  softBreak,
} from '@plone/volto-slate/blocks/Text/keyboard';

import {
  isCursorAtBlockStart,
  isCursorAtBlockEnd,
  getNextVoltoBlock,
  getPreviousVoltoBlock,
  createDefaultBlock,
} from '@plone/volto-slate/utils';

const focusPrev = (props) => {
  const {
    focusPrevField,
    showToolbar,
    onFocusPreviousBlock,
    block,
    blockNode,
    properties,
    index,
    saveSlateBlockSelection,
  } = props.editor.getBlockProps();

  let isAtStart = false;

  if (showToolbar) {
    isAtStart = isCursorAtBlockStart(props.editor);
  } else {
    let _range = document.getSelection().getRangeAt(0);
    let range = _range.cloneRange();
    range.selectNodeContents(props.event.target);
    range.setEnd(_range.endContainer, _range.endOffset);
    isAtStart = range.toString().length === 0;
    //isAtStart = props.event.target.selectionStart === 0;
  }

  if (isAtStart) {
    //move to prev field
    if (focusPrevField) {
      props.event.stopPropagation();
      return focusPrevField();
    }

    //handle SimpleTextEditorWidget -> move to prev block
    if (!showToolbar && onFocusPreviousBlock) {
      const prev = getPreviousVoltoBlock(index, properties);
      if (!prev || prev[0]?.['@type'] !== 'slate')
        return onFocusPreviousBlock(block, blockNode.current);
      const [slateBlock, id] = prev;
      const pseudoEditor = {
        children: slateBlock.value || [createDefaultBlock()],
      };
      const match = Node.last(pseudoEditor, []);
      if (!match) return onFocusPreviousBlock(block, blockNode.current);

      const [node, path] = match;
      const point = { path, offset: (node?.text || '').length };
      const selection = { anchor: point, focus: point };
      saveSlateBlockSelection(id, selection);
      return onFocusPreviousBlock(block, blockNode.current);
    }
  }

  //handle SlateEditor arrow-up key
  return goUp(props);
};

const goToNextVoltoBlock = (props) => {
  const {
    onFocusNextBlock,
    block,
    blockNode,
    properties,
    index,
    saveSlateBlockSelection,
  } = props.editor.getBlockProps();
  const next = getNextVoltoBlock(index, properties);
  if (!next || next[0]?.['@type'] !== 'slate')
    return onFocusNextBlock(block, blockNode.current);

  const [slateBlock, id] = next;
  const pseudoEditor = {
    children: slateBlock.value || [createDefaultBlock()],
  };
  const match = Node.last(pseudoEditor, []);
  if (!match) return onFocusNextBlock(block, blockNode.current);

  const path = match[1];
  const point = { path, offset: 0 };
  const selection = { anchor: point, focus: point };
  saveSlateBlockSelection(id, selection);
  return onFocusNextBlock(block, blockNode.current);
};
const focusNext = (props) => {
  const {
    focusNextField,
    showToolbar,
    onFocusNextBlock,
  } = props.editor.getBlockProps();

  props.event.stopPropagation();
  let isAtEnd = false;

  if (showToolbar) {
    isAtEnd = isCursorAtBlockEnd(props.editor);
  } else {
    let _range = document.getSelection().getRangeAt(0);
    let range = _range.cloneRange();
    range.selectNodeContents(props.event.target);
    range.setEnd(_range.endContainer, _range.endOffset);
    isAtEnd = range.toString().length === props.event.target.innerText?.length;
    // isAtEnd =
    //   props.event.target.selectionEnd === props.event.target.value?.length;
  }

  if (isAtEnd) {
    //move to next field
    if (focusNextField) {
      return focusNextField();
    }

    //handle SimpleTextEditorWidget -> move to next block
    if (!showToolbar && onFocusNextBlock) {
      goToNextVoltoBlock(props);
    }
  }
  //handle SlateEditor arrow-down key
  return goDown(props);
};

const customSoftBreak = (props) => {
  //handle SimpleTextEditorWidget softBreak
  const { showToolbar } = props.editor.getBlockProps();
  if (props.event.key === 'Enter' && props.event.shiftKey && !showToolbar) {
    props.event.preventDefault();
    goToNextVoltoBlock(props);
    return false;
  }
  return softBreak;
};

const breakInSimpleTextEditor = (props) => {
  //disable break in SimpleTextEditorWidget

  const getBlockProps = props.editor.getBlockProps;
  const { showToolbar } = getBlockProps
    ? getBlockProps()
    : { showToolbar: true };
  if (props.event.key === 'Enter' && !props.event.shiftKey && !showToolbar) {
    props.event.preventDefault();
    goToNextVoltoBlock(props);
    return false;
  }
  return true;
};

export default function install(config) {
  config.settings.slate.textblockDetachedKeyboardHandlers = {
    ...config.settings.slate.textblockDetachedKeyboardHandlers,
    Enter: [breakInSimpleTextEditor, customSoftBreak, focusNext],
    ArrowUp: [focusPrev],
    ArrowDown: [focusNext],
  };

  return config;
}
