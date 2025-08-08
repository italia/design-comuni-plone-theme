import { jsx } from 'slate-hyperscript';
import { deserialize } from '@plone/volto-slate/editor/deserialize';
import { SIMPLELINK } from '@plone/volto-slate/constants';

export const simpleLinkDeserializer = (editor, el) => {
  let parent = el;
  let children = Array.from(parent.childNodes)
    .map((el) => deserialize(editor, el))
    .flat();

  if (!children.length) children = [{ text: '' }];

  if (el.getAttribute('href') === null) {
    return jsx('text', {}, children);
  }

  const attrs = {
    type: SIMPLELINK,
    data: {
      url: el.getAttribute('href'),
      dataElement: el.getAttribute('data-element'),
    },
    styleName: el.getAttribute('class'),
  };

  return jsx('element', attrs, children);
};

simpleLinkDeserializer.id = 'simpleLinkDeserializer';
