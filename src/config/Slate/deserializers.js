import { jsx } from 'slate-hyperscript';
import { deserializeChildren } from '@plone/volto-slate/editor/deserialize';
import { TD, TH, TEXT_NODE } from '@plone/volto-slate/constants';

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
- se il tag body contiene direttamente dei children <li> allora crea un <ul> wrapper.
- se il tag body contiene una lista da Word Online, la normalizza.
- se il tag body contiene una lista da Word Desktop, la normalizza.
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

  const children = Array.from(el.children);

  // START: Gestione Word Online
  const hasWordOnlineList = children.some(
    (child) =>
      child.nodeName === 'DIV' &&
      child.classList?.contains('ListContainerWrapper'),
  );

  if (hasWordOnlineList) {
    const newBody = document.createElement('body');
    let currentList = null;

    for (const child of children) {
      const isWordListWrapper =
        child.nodeName === 'DIV' &&
        child.classList?.contains('ListContainerWrapper') &&
        (child.firstElementChild?.nodeName === 'UL' ||
          child.firstElementChild?.nodeName === 'OL');

      if (isWordListWrapper) {
        const listNode = child.firstElementChild;
        const listType = listNode.nodeName.toLowerCase();
        const listItem = listNode.querySelector('li');

        if (listItem) {
          const paragraph = listItem.querySelector('p.Paragraph');
          if (paragraph) {
            while (paragraph.firstChild) {
              listItem.appendChild(paragraph.firstChild);
            }
            listItem.removeChild(paragraph);
          }

          if (currentList && currentList.nodeName.toLowerCase() === listType) {
            currentList.appendChild(listItem);
          } else {
            currentList = document.createElement(listType);
            currentList.appendChild(listItem);
            newBody.appendChild(currentList);
          }
        }
      } else {
        currentList = null;
        newBody.appendChild(child.cloneNode(true));
      }
    }
    return jsx('fragment', {}, deserializeChildren(newBody, editor, options));
  }
  // END: Gestione Word Online

  // START: NUOVA GESTIONE Word Desktop
  const hasWordDesktopList = children.some((child) =>
    child.matches('p[class*="MsoListParagraph"]'),
  );

  if (hasWordDesktopList) {
    const newBody = document.createElement('body');
    let currentList = null;

    for (const child of children) {
      // Verifica se l'elemento è un paragrafo di lista di Word
      if (child.matches('p[class*="MsoListParagraph"]')) {
        let listType = 'ul'; // Default a lista non ordinata

        // Rimuove gli elementi specifici di Word e determina il tipo di lista
        const bulletSpan = child.querySelector(
          'span[style*="mso-list:Ignore"]',
        );
        if (bulletSpan) {
          // Se il bullet non è il classico pallino, la lista è ordinata (ol)
          if (bulletSpan.textContent.trim() !== '·') {
            listType = 'ol';
          }
          // Rimuove l'intero blocco del bullet, che è un commento condizionale o un span
          bulletSpan.closest('span')?.remove();
        }

        // Rimuove i tag <o:p> vuoti di Office
        child.querySelectorAll('o\\:p').forEach((el) => el.remove());

        // Se la lista corrente non esiste o è di tipo diverso, ne crea una nuova
        if (!currentList || currentList.nodeName.toLowerCase() !== listType) {
          currentList = document.createElement(listType);
          newBody.appendChild(currentList);
        }

        // Crea il nuovo elemento <li> e ci sposta dentro tutto il contenuto del <p>
        const listItem = document.createElement('li');
        while (child.firstChild) {
          listItem.appendChild(child.firstChild);
        }
        currentList.appendChild(listItem);
      } else {
        // Se non è un elemento di lista, interrompe il raggruppamento
        currentList = null;
        // Aggiunge gli altri elementi (es. paragrafi normali) così come sono
        newBody.appendChild(child.cloneNode(true));
      }
    }
    // Deserializza il nuovo body pulito e ristrutturato
    return jsx('fragment', {}, deserializeChildren(newBody, editor, options));
  }
  // END: NUOVA GESTIONE Word Desktop

  return jsx('fragment', {}, deserializeChildren(el, editor, options));
};

export const spanTagDeserializer = (editor, el, options) => {
  const style = el.getAttribute('style') || '';
  let children = el.childNodes;

  if (
    // handle formatting from OpenOffice
    children.length === 1 &&
    children[0].nodeType === TEXT_NODE &&
    children[0].textContent === '\n'
  ) {
    return jsx('text', {}, ' ');
  }
  children = deserializeChildren(el, editor, options);

  // whitespace is replaced by deserialize() with null;
  children = children.map((c) => (c === null ? '' : c));

  // THIS IS THE PATCH FOR THE DEFAULT DESERIALIZER:
  // Text pasted from Word Online has some "strange" html and styles
  // like bold, underline and italic are set in css inline styles and not as markup
  const stylesMapping = {
    'font-weight:bold': 'strong',
    'font-style:italic': 'em',
    'text-decoration:underline': 'u',
  };
  function parseStyles(style) {
    if (!style) return [];
    const cleaned = style.replace(/\s/g, '').toLowerCase();

    return Object.entries(stylesMapping)
      .filter(([cssProp]) => cleaned.includes(cssProp))
      .map(([, type]) => type);
  }

  function nestStyles(children, styleString) {
    const activeStyles = parseStyles(styleString);

    if (activeStyles.length === 0) {
      return children;
    }

    // Riduci da destra a sinistra creando la struttura annidata con jsx
    return activeStyles.reduceRight((acc, styleType) => {
      const attrs = { type: styleType };
      // acc può essere array di children, ma jsx vuole children singolo o array
      return [jsx('element', attrs, acc)];
    }, children);
  }

  if (parseStyles(style).length > 0) {
    const styled = nestStyles(children, style);
    return Array.isArray(styled) && styled.length === 1 ? styled[0] : styled;
  }

  // TODO: handle sub/sup as <sub> and <sup>
  // Handle Google Docs' <sub> formatting
  if (style.replace(/\s/g, '').indexOf('vertical-align:sub') > -1) {
    const attrs = { sub: true };
    return children.map((child) => {
      return jsx('text', attrs, child);
    });
  }

  // Handle Google Docs' <sup> formatting
  if (style.replace(/\s/g, '').indexOf('vertical-align:super') > -1) {
    const attrs = { sup: true };
    return children.map((child) => {
      return jsx('text', attrs, child);
    });
  }

  const res = children.find((c) => typeof c !== 'string')
    ? children
    : jsx('text', {}, children);

  return res;
};

export default function install(config) {
  config.settings.slate.htmlTagsToSlate.BODY = bodyTagDeserializer();
  config.settings.slate.htmlTagsToSlate.P = blockTagDeserializer('p');
  config.settings.slate.htmlTagsToSlate.OL = blockTagDeserializer('ol');
  config.settings.slate.htmlTagsToSlate.UL = blockTagDeserializer('ul');
  config.settings.slate.htmlTagsToSlate.BLOCKQUOTE =
    blockTagDeserializer('blockquote');
  config.settings.slate.htmlTagsToSlate.SPAN = spanTagDeserializer;

  //A (link) deserializer is defined in ./Link/deserializer.js
}
