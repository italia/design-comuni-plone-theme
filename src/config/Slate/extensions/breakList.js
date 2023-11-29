import { Editor, Range, Transforms } from 'slate';
import config from '@plone/volto/registry';
import {
  isCursorAtBlockEnd,
  getCurrentListItem,
  createEmptyParagraph,
} from '@plone/volto-slate/utils';

export const breakList = (editor) => {
  const { insertBreak } = editor;

  editor.insertBreak = () => {
    // If the selection does not exist or is expanded, handle with the default
    // behavior.
    if (!(editor.selection && Range.isCollapsed(editor.selection))) {
      insertBreak();
      return false;
    }

    const { slate } = config.settings;
    const { anchor } = editor.selection;

    const ref = Editor.rangeRef(editor, editor.selection, {
      affinity: 'inward',
    });

    // If the selection is inside a LI and it starts at a non-0 offset, split
    // the LI. (if one of the parents is a list item, break that list item)
    const [listItem, listItemPath] = getCurrentListItem(editor);
    if (listItem) {
      // if there is text in the selection
      if (Editor.string(editor, listItemPath)) {
        Transforms.splitNodes(editor, {
          at: editor.selection,
          match: (node) => node.type === slate.listItemType,
          always: true, // in case cursor is at end of line
        });

        return true;
      }
    }

    // If the selection anchor is not in a LI or it is not at offset 0, handle
    // with the default behavior.
    const [parent] = Editor.parent(editor, anchor.path); // , parentPath

    if (parent.type !== slate.listItemType || anchor.offset > 0) {
      insertBreak();
      return; // applies default behaviour, as defined in insertBreak.js extension
    }

    // if (parent) {
    //   const blockProps = editor.getBlockProps();
    //   const { data } = blockProps;
    //   // Don't add new block if not allowed
    //   if (data?.disableNewBlocks) {
    //     return insertBreak();
    //   }
    // }

    Editor.deleteBackward(editor, { unit: 'line' });
    // also account for empty nodes [{text: ''}]
    if (Editor.isEmpty(editor, parent)) {
      Transforms.removeNodes(editor, { at: ref.current });

      Transforms.insertNodes(editor, createEmptyParagraph(), {
        at: [editor.children.length],
      });
      Transforms.select(editor, Editor.end(editor, []));

      return true;
    }

    Transforms.removeNodes(editor, { at: ref.current });

    if (isCursorAtBlockEnd(editor)) {
      Editor.insertNode(editor, createEmptyParagraph());
      return true;
    }

    //const [top, bottom] = splitEditorInTwoFragments(editor, ref.current);
    //Editor.insertNode(editor, createEmptyParagraph());
    //setEditorContent(editor, top);

    //createAndSelectNewBlockAfter(editor, bottom);

    return true;
  };

  return editor;
};
