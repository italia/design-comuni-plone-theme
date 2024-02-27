import { jsx } from 'slate-hyperscript';
import { deserializeChildren } from '@plone/volto-slate/editor/deserialize';
import { TD, TH } from '@plone/volto-slate/constants';

/*rispetto a quello di volto-slate:
- aggiunge anche la classe (styleName) se era stata impostata
*/
export const blockTagDeserializer = (tagname) => (editor, el, options) => {
  // if (tagname === 'h2') debugger;
  let children = deserializeChildren(el, editor, options).filter(
    (n) => n !== null,
  );

  if (
    [TD, TH].includes(tagname) &&
    children.length > 0 &&
    typeof children[0] === 'string'
  ) {
    // TODO: should here be handled the cases when there are more strings in
    // `children` or when there are besides strings other types of nodes too?
    const p = { type: 'div', children: [{ text: '' }] };
    p.children[0].text = children[0];
    children = [p];
  }

  // normalizes block elements so that they're never empty
  // Avoids a hard crash from the Slate editor
  const hasValidChildren = children.length && children.find((c) => !!c);
  if (!hasValidChildren) {
    children = [{ text: '' }];
  }

  return jsx(
    'element',
    { type: tagname, styleName: el.getAttribute('class') },
    children,
  );
};

/*rispetto a quello di volto-slate:
- se il tag body contiene direttamente dei children <li> allora crea un <ul> wrapper
*/
export const bodyTagDeserializer = () => (editor, el, options) => {
  if (
    el?.firstElementChild?.nodeName === 'LI' &&
    el?.lastElementChild?.nodeName === 'LI'
  ) {
    return jsx(
      'element',
      { type: 'ul' },
      deserializeChildren(el, editor, options),
    );
  }
  return jsx('fragment', {}, deserializeChildren(el, editor, options));
};

export default function install(config) {
  config.settings.slate.htmlTagsToSlate.BODY = bodyTagDeserializer();
  config.settings.slate.htmlTagsToSlate.P = blockTagDeserializer('p');
  config.settings.slate.htmlTagsToSlate.OL = blockTagDeserializer('ol');
  config.settings.slate.htmlTagsToSlate.UL = blockTagDeserializer('ul');
  config.settings.slate.htmlTagsToSlate.BLOCKQUOTE =
    blockTagDeserializer('blockquote');

  //A (link) deserializer is defined in ./Link/deserializer.js
}
