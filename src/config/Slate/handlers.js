import { Node, Editor } from 'slate';
import {
  goDown,
  goUp,
  softBreak,
  unwrapEmptyString,
} from '@plone/volto-slate/blocks/Text/keyboard';

import {
  isCursorAtBlockStart,
  isCursorAtBlockEnd,
  getNextVoltoBlock,
  getPreviousVoltoBlock,
  createDefaultBlock,
  getCurrentListItem,
} from '@plone/volto-slate/utils';
import config from '@plone/volto/registry';

const focusPrev = (props) => {
  const getBlockProps = props.editor.getBlockProps;
  const {
    focusPrevField,
    showToolbar,
    onFocusPreviousBlock,
    block,
    blockNode,
    properties,
    index,
    saveSlateBlockSelection,
  } = getBlockProps
    ? getBlockProps()
    : {
        focusPrevField: null,
        showToolbar: true,
        onFocusPreviousBlock: null,
        block: null,
        blockNode: null,
        properties: null,
        index: null,
        saveSlateBlockSelection: null,
      };

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
  const getBlockProps = props.editor.getBlockProps;
  const {
    focusNextField,
    showToolbar,
    onFocusNextBlock,
    onSelectBlock,
    onAddBlock,
    index,
  } = getBlockProps
    ? getBlockProps()
    : {
        showToolbar: true,
        focusNextField: null,
        onFocusNextBlock: null,
        onSelectBlock: null,
        onAddBlock: null,
      };

  if (showToolbar) {
    const [listItem] = getCurrentListItem(props.editor);
    if (listItem) {
      //managed by breaklist extension
      return true;
    }
  }

  props.event.preventDefault();
  props.event.stopPropagation();
  let isAtEnd = false;

  if (showToolbar) {
    isAtEnd = isCursorAtBlockEnd(props.editor);
  } else {
    let selection = document.getSelection();

    if (selection && selection.rangeCount > 0) {
      const _range = selection.getRangeAt(0);
      let range = _range.cloneRange();
      range.selectNodeContents(props.event.target);
      range.setEnd(_range.endContainer, _range.endOffset);
      isAtEnd =
        range.toString().length === props.event.target.innerText?.length;
      // isAtEnd =
      //   props.event.target.selectionEnd === props.event.target.value?.length;
    }
  }

  //move to next field
  if (focusNextField) {
    focusNextField();
    return false;
  }

  if (isAtEnd) {
    if (props.event.key === 'Enter' || props.event.keyCode === 13) {
      onSelectBlock(onAddBlock(config.settings.defaultBlockType, index + 1));
      return false;
    } else {
      //arrow-down key
      //handle SimpleTextEditorWidget -> move to next block
      if (!showToolbar && onFocusNextBlock) {
        return goToNextVoltoBlock(props);
      }
    }
  }

  //handle SlateEditor arrow-down key
  return goDown(props);
};

const breakInSimpleTextEditor = (props) => {
  //disable break and softBreak (props.event.shiftKey) in SimpleTextEditorWidget
  const getBlockProps = props.editor.getBlockProps;
  const { showToolbar, focusNextField } = getBlockProps
    ? getBlockProps()
    : { showToolbar: true };
  if (props.event.key === 'Enter' && !showToolbar) {
    props.event.preventDefault();
    if (focusNextField) {
      focusNextField();
      return false;
    }
    goToNextVoltoBlock(props);
    return false;
  }

  return true;
};

const handleBreak = (props) => {
  const getBlockProps = props.editor.getBlockProps;
  const { showToolbar } = getBlockProps
    ? getBlockProps()
    : { showToolbar: true };

  if (!showToolbar) {
    return breakInSimpleTextEditor(props);
  } else {
    let ret = softBreak(props);
    if (!ret) {
      const [listItem] = props.editor.selection
        ? getCurrentListItem(props.editor)
        : [];
      if (listItem) {
        //managed by breaklist extension
      } else {
        props.event.preventDefault();
        props.event.stopPropagation();
        Editor.insertNode(props.editor, {
          type: 'paragraph',
          children: [{ text: '' }],
        });
        ret = true;
      }
    }
    return ret;
  }
};

export default function install(config) {
  config.settings.slate.textblockDetachedKeyboardHandlers = {
    ...config.settings.slate.textblockDetachedKeyboardHandlers,
    Enter: [unwrapEmptyString, handleBreak, focusNext],
    ArrowUp: [focusPrev],
    ArrowDown: [focusNext],
  };

  return config;
}
