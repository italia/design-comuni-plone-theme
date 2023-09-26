/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
import { Editor, Transforms } from 'slate';
import { isBlockActive } from '@plone/volto-slate/utils';
import config from '@plone/volto/registry';

/**
 * Toggles a style (e.g. in the StyleMenu plugin).
 * @param {Editor} editor
 * @param {object} options
 * @param {boolean} options.oneOfType Whether the given type is admitted once
 */
export const toggleStyle = (editor, { cssClass, isBlock, oneOf }) => {
  if (isBlock) {
    toggleBlockStyle(editor, cssClass, oneOf);
  } else {
    toggleInlineStyle(editor, cssClass);
  }
};

export const toggleBlockStyle = (editor, style, oneOf) => {
  // We have 6 boolean variables which need to be accounted for.
  // See https://docs.google.com/spreadsheets/d/1mVeMuqSTMABV2BhoHPrPAFjn7zUksbNgZ9AQK_dcd3U/edit?usp=sharing
  const { slate } = config.settings;

  const isListItem = isBlockActive(editor, slate.listItemType);
  const isActive = isBlockStyleActive(editor, style);
  const wantsList = false;

  if (isListItem && !wantsList) {
    toggleBlockStyleAsListItem(editor, style);
  } else if (isListItem && wantsList && !isActive) {
    // switchListType(editor, format); // this will deconstruct to Volto blocks
  } else if (!isListItem && wantsList) {
    // changeBlockToList(editor, format);
  } else if (!isListItem && !wantsList) {
    internalToggleBlockStyle(editor, style, oneOf);
  } else {
    console.warn('toggleBlockStyle case not covered, please examine:', {
      wantsList,
      isActive,
      isListItem,
    });
  }
};

export const toggleInlineStyle = (editor, style) => {
  // We have 6 boolean variables which need to be accounted for.
  // See https://docs.google.com/spreadsheets/d/1mVeMuqSTMABV2BhoHPrPAFjn7zUksbNgZ9AQK_dcd3U/edit?usp=sharing
  const { slate } = config.settings;

  const isListItem = isBlockActive(editor, slate.listItemType);
  const isActive = isInlineStyleActive(editor, style);
  const wantsList = false;

  if (isListItem && !wantsList) {
    toggleInlineStyleAsListItem(editor, style);
  } else if (isListItem && wantsList && !isActive) {
    // switchListType(editor, format); // this will deconstruct to Volto blocks
  } else if (!isListItem && wantsList) {
    // changeBlockToList(editor, format);
  } else if (!isListItem && !wantsList) {
    internalToggleInlineStyle(editor, style);
  } else {
    console.warn('toggleInlineStyle case not covered, please examine:', {
      wantsList,
      isActive,
      isListItem,
    });
  }
};

export const isBlockStyleActive = (editor, style) => {
  const keyName = `style-${style}`;
  const sn = Array.from(
    Editor.nodes(editor, {
      match: (n) => {
        const isStyle = typeof n.styleName === 'string' || n[keyName];
        return !Editor.isEditor(n) && isStyle;
      },
      mode: 'all',
    }),
  );

  for (const [n] of sn) {
    if (typeof n.styleName === 'string') {
      if (n.styleName.split(' ').filter((x) => x === style).length > 0) {
        return true;
      }
    } else if (
      n[keyName] &&
      keyName.split('style-').filter((x) => x === style).length > 0
    )
      return true;
  }
  return false;
};

export const isInlineStyleActive = (editor, style) => {
  const m = Editor.marks(editor);
  const keyName = `style-${style}`;
  if (m && m[keyName]) {
    return true;
  }
  return false;
};

export const internalToggleBlockStyle = (editor, style, oneOf) => {
  toggleBlockStyleInSelection(editor, style, oneOf);
};

export const internalToggleInlineStyle = (editor, style) => {
  toggleInlineStyleInSelection(editor, style);
};

/*
 * Applies a block format unto a list item. Will split the list and deconstruct the
 * block
 */
export const toggleBlockStyleAsListItem = (editor, style) => {
  toggleBlockStyleInSelection(editor, style);
};

/*
 * Applies an inline style unto a list item.
 */
export const toggleInlineStyleAsListItem = (editor, style) => {
  toggleInlineStyleInSelection(editor, style);
};

function toggleInlineStyleInSelection(editor, style) {
  const m = Editor.marks(editor);
  const keyName = 'style-' + style;

  if (m && m[keyName]) {
    Editor.removeMark(editor, keyName);
  } else {
    Editor.addMark(editor, keyName, true);
  }
}

function toggleBlockStyleInSelection(editor, style, oneOf) {
  const sn = Array.from(
    Editor.nodes(editor, {
      mode: 'highest',
      match: (n) => {
        return !Editor.isEditor(n);
      },
    }),
  );

  for (const [n, p] of sn) {
    let cn = n.styleName;
    if (typeof n.styleName !== 'string') {
      cn = style;
    } else if (n.styleName.split(' ').filter((x) => x === style).length > 0) {
      cn = cn
        .split(' ')
        .filter((x) => x !== style && x !== '')
        .join(' ');
    } else {
      if (oneOf?.length > 0) {
        cn = cn
          .split(' ')
          .filter((c) => !oneOf.includes(c))
          .join(' ');
      }

      // the style is not set but other styles are set
      cn = cn
        .split(' ')
        .filter((c) => c !== '')
        .concat(style)
        .join(' ');
    }
    Transforms.setNodes(editor, { styleName: cn }, { at: p });
  }
}
