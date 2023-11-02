/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
import { Editor, Transforms } from 'slate';
import { isBlockActive } from '@plone/volto-slate/utils';
import config from '@plone/volto/registry';

export const toggleFormat = (editor, format, allowedChildren) => {
  const { slate } = config.settings;
  const isActive = isBlockActive(editor, format);
  const type = isActive ? slate.defaultBlockType : format;
  Transforms.setNodes(editor, {
    type,
  });
  const selectedChildren = editor.selection.focus.path[0];
  allowedChildren?.length &&
    Transforms.unwrapNodes(editor, {
      mode: 'all',
      at: [selectedChildren],
      match: (n, path) => {
        const isMatch =
          path.length > 1 && // we don't deal with the parent nodes
          !(Text.isText(n) || allowedChildren.includes(n?.type));
        return isMatch;
      },
    });
};

/**
 * Toggles a style (e.g. in the StyleMenu plugin).
 * @param {Editor} editor
 * @param {object} options
 * @param {boolean} options.oneOfType Whether the given type is admitted once
 */
export const toggleStyle = (
  editor,
  { cssClass, isBlock, oneOf, format, allowedChildren },
) => {
  if (isBlock) {
    toggleBlockStyle(editor, cssClass, oneOf, format, allowedChildren);
  } else {
    toggleInlineStyle(editor, cssClass, oneOf);
  }
};

export const toggleBlockStyle = (
  editor,
  style,
  oneOf,
  format,
  allowedChildren,
) => {
  // We have 6 boolean variables which need to be accounted for.
  // See https://docs.google.com/spreadsheets/d/1mVeMuqSTMABV2BhoHPrPAFjn7zUksbNgZ9AQK_dcd3U/edit?usp=sharing
  const { slate } = config.settings;

  const isListItem = isBlockActive(editor, slate.listItemType);
  const isBlockquote = isBlockActive(editor, 'blockquote');

  const isActive = isBlockStyleActive(editor, style);
  const wantsList = false;
  const wantsBlockquote = format === 'blockquote';

  if (isListItem && wantsBlockquote && !isBlockquote) {
    //wrap list with blockquote
    Transforms.wrapNodes(
      editor,
      { type: format },
      {
        mode: 'highest',
        split: false,
      },
    );
    internalToggleBlockStyle(editor, style, oneOf, format);
  } else if (isListItem && wantsBlockquote && isBlockquote) {
    //remove blockquote wrap to list
    //Transforms.unwrapNodes(editor, { mode: 'all', at: [0] });
    const unwrap = true;
    internalToggleBlockStyle(editor, style, oneOf, format, unwrap);
  } else if (isListItem && !wantsList) {
    toggleBlockStyleAsListItem(editor, style, oneOf);
  } else if (isListItem && wantsList && !isActive) {
    // switchListType(editor, format); // this will deconstruct to Volto blocks
  } else if (!isListItem && wantsList) {
    // changeBlockToList(editor, format);
  } else if (!isListItem && !wantsList) {
    //se ho rimosso tutti gli stili devo rimuoverre anche il format
    const selectedChildren = editor.selection.focus.path[0];
    if (format && editor.children?.[selectedChildren]?.type !== format) {
      toggleFormat(editor, format, allowedChildren);
    }
    internalToggleBlockStyle(editor, style, oneOf, format);
  } else {
    console.warn('toggleBlockStyle case not covered, please examine:', {
      wantsList,
      isActive,
      isListItem,
    });
  }
};

export const toggleInlineStyle = (editor, style, oneOf) => {
  // We have 6 boolean variables which need to be accounted for.
  // See https://docs.google.com/spreadsheets/d/1mVeMuqSTMABV2BhoHPrPAFjn7zUksbNgZ9AQK_dcd3U/edit?usp=sharing
  const { slate } = config.settings;

  const isListItem = isBlockActive(editor, slate.listItemType);
  const isLinkItem = isBlockActive(editor, 'link');

  const isActive = isInlineStyleActive(editor, style);
  const wantsList = false;

  if (isLinkItem) {
    toggleLinkStyleInSelection(editor, style, oneOf);
  } else if (isListItem && !wantsList) {
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

export const isBlockStyleActive = (editor, style, oneOf) => {
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

  if (oneOf) {
    oneOf.sort((a, b) => {
      const al = a.split(' ').length + a.split('-').length;
      const bl = b.split(' ').length + b.split('-').length;
      return al > bl ? -1 : al < bl ? 1 : 0;
    });
  }

  for (const [n] of sn) {
    if (typeof n.styleName === 'string') {
      if (oneOf?.length > 0) {
        let selected = false;
        let foundOneOf = false;

        for (var i = 0; i < oneOf.length; i++) {
          const o = oneOf[i];

          const si = n.styleName.indexOf(o);
          if (si >= 0) {
            if (!foundOneOf) {
              foundOneOf = true;
              if (o === style) {
                selected = true;
              }
            }
          }
        }
        return selected;
      } else if (n.styleName.split(' ').filter((x) => x === style).length > 0) {
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

export const isLinkStyleActive = (editor, style) => {
  const selection = editor.selection || editor.getSavedSelection();
  let found;
  try {
    found = Array.from(
      Editor.nodes(editor, {
        match: (n) => n.type === 'link',
        at: selection,
      }) || [],
    );
  } catch (e) {
    // eslint-disable-next-line
    // console.warn('Error in finding active element', e);
    return false;
  }

  if (found.length) {
    for (const [n, p] of found) {
      if (n?.styleName?.indexOf(style) >= 0) {
        return true;
      }
    }
  }

  if (selection) {
    const { path } = selection.anchor;
    const isAtStart =
      selection.anchor.offset === 0 && selection.focus.offset === 0;

    if (isAtStart) {
      try {
        found = Editor.previous(editor, {
          at: path,
          // match: (n) => n.type === MENTION,
        });
      } catch (ex) {
        found = [];
      }
      if (found && found[0] && found[0].type === 'link') {
        if (found[0]?.styleName?.indexOf(style) >= 0) {
          return true;
        }
      }
    }
  }

  return false;
};

export const internalToggleBlockStyle = (
  editor,
  style,
  oneOf,
  format,
  unwrap,
) => {
  return toggleBlockStyleInSelection(editor, style, oneOf, format, unwrap);
};

export const internalToggleInlineStyle = (editor, style) => {
  toggleInlineStyleInSelection(editor, style);
};

/*
 * Applies a block format unto a list item. Will split the list and deconstruct the
 * block
 */
export const toggleBlockStyleAsListItem = (editor, style, oneOf) => {
  toggleBlockStyleInSelection(editor, style, oneOf);
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

function toggleLinkStyleInSelection(editor, style, oneOf) {
  const sn = Array.from(
    Editor.nodes(editor, {
      mode: 'all',
      match: (n) => {
        return !Editor.isEditor(n) && n.type === 'link';
      },
    }),
  );

  //ordino mettendo prima le combinazioni di classi
  if (oneOf) {
    oneOf.sort((a, b) => {
      const al = a.split(' ').length + a.split('-').length;
      const bl = b.split(' ').length + b.split('-').length;
      return al > bl ? -1 : al < bl ? 1 : 0;
    });
  }

  for (const [n, p] of sn) {
    let cn = n.styleName;

    if (typeof n.styleName !== 'string') {
      cn = style;
    } else if (oneOf && oneOf.indexOf(style) >= 0) {
      let stylename = n.styleName;
      let addStyle = true;
      oneOf.forEach((o) => {
        const si = stylename.indexOf(o);
        if (si >= 0) {
          addStyle = o !== style;
          stylename = stylename.replace(o, '');
        }
      });

      //rimuovo gli stili oneof
      cn = stylename.split(' ').filter((x) => x !== '');

      if (addStyle) {
        cn = cn.concat(style);
      }
      cn = cn.join(' ');
    } else if (n.styleName.indexOf(style) >= 0) {
      //rimuovo lo stile style
      cn = n.styleName
        .replace(style, '')
        .split(' ')
        .filter((x) => x !== '')
        .join(' ');
    } else {
      if (oneOf?.length > 0) {
        //tolgo tutti gli altri stili di oneOf, perchè ne voglio solo uno di quelli
        cn = cn
          .split(' ')
          .filter((c) => !oneOf.includes(c))
          .join(' ');
      }

      // the style is not set but other styles are set. Aggiungo lo stile
      cn = cn
        .split(' ')
        .filter((c) => c !== '')
        .concat(style)
        .join(' ');
    }
    Transforms.setNodes(editor, { styleName: cn }, { at: p });
  }
}

function toggleBlockStyleInSelection(editor, style, oneOf, format, unwrap) {
  const sn = Array.from(
    Editor.nodes(editor, {
      mode: 'highest',
      match: (n) => {
        return !Editor.isEditor(n);
      },
    }),
  );

  //ordino mettendo prima le combinazioni di classi
  if (oneOf) {
    oneOf.sort((a, b) => {
      const al = a.split(' ').length + a.split('-').length;
      const bl = b.split(' ').length + b.split('-').length;
      return al > bl ? -1 : al < bl ? 1 : 0;
    });
  }

  for (const [n, p] of sn) {
    let cn = n.styleName;

    if (typeof n.styleName !== 'string') {
      cn = style;
    } else if (oneOf && oneOf.indexOf(style) >= 0) {
      let stylename = n.styleName;
      let addStyle = true;
      oneOf.forEach((o) => {
        const si = stylename.indexOf(o);
        if (si >= 0) {
          addStyle = o !== style;
          stylename = stylename.replace(o, '');
        }
      });

      //rimuovo gli stili oneof
      cn = stylename.split(' ').filter((x) => x !== '');

      if (addStyle) {
        cn = cn.concat(style);
      } else if (format) {
        if (unwrap) {
          Transforms.unwrapNodes(editor, { mode: 'all', at: [0] });
        } else {
          toggleFormat(editor, format);
        }
      }
      cn = cn.join(' ');
    } else if (n.styleName.split(' ').filter((x) => x === style).length > 0) {
      //rimuovo lo stile style
      cn = cn
        .split(' ')
        .filter((x) => x !== style && x !== '')
        .join(' ');
    } else {
      if (oneOf?.length > 0) {
        //tolgo tutti gli altri stili di oneOf, perchè ne voglio solo uno di quelli
        cn = cn
          .split(' ')
          .filter((c) => !oneOf.includes(c))
          .join(' ');
      }

      // the style is not set but other styles are set. Aggiungo lo stile
      cn = cn
        .split(' ')
        .filter((c) => c !== '')
        .concat(style)
        .join(' ');
    }
    Transforms.setNodes(editor, { styleName: cn }, { at: p });
  }
}
