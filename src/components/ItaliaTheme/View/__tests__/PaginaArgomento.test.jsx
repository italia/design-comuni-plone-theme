import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PaginaArgomentoView from '../PaginaArgomentoView/PaginaArgomentoView';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import { MemoryRouter } from 'react-router-dom';

const mockStore = configureStore();

const mock_mandatory = {
  '@id': 'http://loremipsum.it/cultura',
  '@type': 'Pagina Argomento',
  UID: 'e2552caeca3b42daaa55d983b96dfdea',
  area_appartenenza: [
    {
      '@id': 'http://loremipsum.it/siet',
      '@type': 'Unita organizzativa',
      description: "Questa è una descrcizione dell'unità organizzativa",
      review_state: 'published',
      title: 'SIET',
    },
  ],
  assessorati_riferimento: [
    {
      '@id': 'http://loremipsum.it/collegamenti_organizzazione_l1',
      '@type': 'Unita organizzativa',
      description: "Questa è una descrcizione dell'unità organizzativa",
      review_state: 'published',
      title: 'Unità organizzativa di primo livello',
    },
  ],
  ulteriori_informazioni: {
    'content-type': 'text/html',
    data: '<p>BoxUlterioriInfo, viverra dignissim nibh vestibulum nisi. </p>',
    encoding: 'utf-8',
  },
  description:
    'Lorem descrizione ipsum dolor sit amet, consectetur adipiscing elit.',
  title: 'Cultura e spettacolo',
  related_uo: [
    {
      '@id': 'http://loremipsum.it/lorem_uo',
      description:
        "Questa \u00e8 una descrcizione dell'unit\u00e0 organizzativa",
      title: 'Unit\u00e0 organizzativa di riferimento',
    },
  ],
};

const mock_allfields = {
  ...mock_mandatory,
  image: {
    'content-type': 'image/jpeg',
    download:
      'http://loremipsum.com/cultura/@@images/bf6af857-5fd1-4353-b270-830577b3bd6e.jpeg',
    filename: 'immagine.jpg',
    height: 1050,
    size: 193044,
    width: 1680,
  },
  image_caption: 'Caption immagine',
  relatedItems: [
    {
      '@id': 'http://loremipsum.com/related_pagina',
      '@type': 'Document',
      description: '',
      review_state: 'published',
      title: 'Pagina1',
    },
  ],
  related_doc: [
    {
      '@id': 'http://loremipsum.it/loremdoc',
      description:
        "Breve descrizione dell'elemento del servizio di potatura e sfalcio",
      title: 'Documento',
    },
  ],
  related_news: [
    {
      '@id': 'http://loremipsum.it/lorem_news',
      description: 'Una descrizione descrittiva della notizia descritta',
      effective: '2020/02/14 11:36:00 GMT+1',
      title: 'Un titolo',
      typology: 'Notizia',
    },
  ],
  related_servizio: [
    {
      '@id': 'http://loremipsum.it/lorem_servizio',
      description:
        "Breve descrizione dell'elemento del servizio di potatura e sfalcio",
      title: 'Servizio di potatura e sfalcio',
    },
  ],
};

const with_blocks = {
  ...mock_allfields,
  title: 'Pagina argomento a blocchi',
  description: 'Description argomento a blocchi',
  blocks: {
    '1fb7c316-ec00-4f0d-9973-096bab6d610b': {
      '@type': 'pagina_argomento_title',
      blockRenderMap: {
        'align-center': 'p',
        atomic: {
          element: 'figure',
        },
        blockquote: {
          element: 'blockquote',
        },
        callout: {
          element: 'p',
        },
        'code-block': {
          element: 'pre',
          wrapper: {
            _owner: null,
            _store: {},
            key: null,
            props: {
              className: 'public-DraftStyleDefault-pre',
            },
            ref: null,
            type: 'pre',
          },
        },
        'header-five': {
          element: 'h5',
        },
        'header-four': {
          element: 'h4',
        },
        'header-one': {
          element: 'h1',
        },
        'header-six': {
          element: 'h6',
        },
        'header-three': {
          element: 'h3',
        },
        'header-two': {
          element: 'h2',
        },
        'ordered-list-item': {
          element: 'li',
          wrapper: {
            _owner: null,
            _store: {},
            key: null,
            props: {
              className: 'public-DraftStyleDefault-ol',
            },
            ref: null,
            type: 'ol',
          },
        },
        'unordered-list-item': {
          element: 'li',
          wrapper: {
            _owner: null,
            _store: {},
            key: null,
            props: {
              className: 'public-DraftStyleDefault-ul',
            },
            ref: null,
            type: 'ul',
          },
        },
        unstyled: {
          element: 'div',
        },
      },
      portata_di_click: {
        blocks: [
          {
            data: {},
            depth: 0,
            entityRanges: [],
            inlineStyleRanges: [
              {
                length: 6,
                offset: 40,
                style: 'BOLD',
              },
              {
                length: 11,
                offset: 54,
                style: 'BOLD',
              },
              {
                length: 21,
                offset: 78,
                style: 'BOLD',
              },
            ],
            key: '1vnli',
            text:
              'Eventi ambiente ed educazione \nParchi e Boschi urbani\nContabilit\u00e0 ambientale e Open Data ambientali',
            type: 'unstyled',
          },
        ],
        entityMap: {},
      },
    },
  },
  blocks_layout: {
    items: ['1fb7c316-ec00-4f0d-9973-096bab6d610b'],
  },
};

const store = mockStore({
  intl: {
    locale: 'en',
    messages: {},
  },
  content: {
    data: {
      is_folderish: true,
    },
    subrequests: {
      'http://loremipsum.it/siet_office': {
        data: {
          '@id': 'http://office_link.it',
          title: 'Test 1',
          description: 'office description',
          city: 'office city',
          zipcode: 'office zip code',
          street: 'office street',
        },
      },
      'http://loremipsum.it/collegamenti_organizzazione_l1_office': {
        data: {
          '@id': 'http://office_link.it',
          title: 'Test 2',
          description: 'office description',
          city: 'office city',
          zipcode: 'office zip code',
          street: 'office street',
        },
      },
      'generic_card_http://loremipsum.it/loremdoc': {
        data: {
          '@id': 'http://loremipsum.it/loremdoc',
          title: 'Pagina doc',
          description: 'PaginaDocDesc',
        },
      },
      'generic_card_http://loremipsum.it/lorem_uo': {
        data: {
          '@id': 'http://loremipsum.it/lorem_uo',
          title: 'Pagina UO',
          description: 'Pagina UO',
        },
      },
      'generic_card_http://loremipsum.it/lorem_servizio': {
        data: {
          '@id': 'http://loremipsum.it/lorem_servizio',
          title: 'Pagina Servizio',
          description: 'Descrizione',
        },
      },
      'generic_card_http://loremipsum.com/related_pagina': {
        data: {
          '@id': 'http://loremipsum.it/lorem_servizio',
          title: 'Pagina Related',
          description: 'Descrizione',
        },
      },
    },
  },
});

test('expect to have all mandatory fields in page', async () => {
  const { getByText } = render(
    <Provider store={store}>
      <MemoryRouter>
        <PaginaArgomentoView content={mock_mandatory} />
      </MemoryRouter>
    </Provider>,
  );
  // title
  expect(getByText(/Cultura e spettacolo/i)).toBeInTheDocument();
  // description
  expect(getByText(/Lorem descrizione ipsum/i)).toBeInTheDocument();
  // box aiuto
  expect(getByText(/BoxUlterioriInfo/i)).toBeInTheDocument();
  // area_appartenenza
  const area_appartenenza = await waitForElement(() => getByText(/Test 1/i));
  expect(area_appartenenza).toBeInTheDocument();
  // assessorati_riferimento
  const assessorati_riferimento = await waitForElement(() =>
    getByText(/Test 2/i),
  );
  expect(assessorati_riferimento).toBeInTheDocument();
  // related uo
  const related_uo = await waitForElement(() => getByText(/Amministrazione/i));
  expect(related_uo).toBeInTheDocument();
});

test('expect to have all fields in page', async () => {
  const { getByText, getByAltText } = render(
    <Provider store={store}>
      <MemoryRouter>
        <PaginaArgomentoView content={mock_allfields} />
      </MemoryRouter>
    </Provider>,
  );
  // image
  expect(getByAltText(/Caption immagine/i)).toBeInTheDocument();
  // image_caption
  expect(getByText(/Caption immagine/i)).toBeInTheDocument();

  // relatedItems
  const related_items = await waitForElement(() =>
    getByText(/Pagina Related/i),
  );
  expect(related_items).toBeInTheDocument();

  // related news
  expect(getByText(/Novità/i)).toBeInTheDocument();

  // // related doc
  const related_doc = await waitForElement(() => getByText(/Pagina doc/i));
  expect(related_doc).toBeInTheDocument();

  // related service
  const related_service = await waitForElement(() =>
    getByText(/Pagina Servizio/i),
  );
  expect(related_service).toBeInTheDocument();
});

test('Page with blocks', async () => {
  const { getByText, getByAltText } = render(
    <Provider store={store}>
      <MemoryRouter>
        <PaginaArgomentoView content={with_blocks} />
      </MemoryRouter>
    </Provider>,
  );

  // title
  expect(getByText(/Pagina argomento a blocchi/i)).toBeInTheDocument();
  // description
  expect(getByText(/Description argomento a blocchi/i)).toBeInTheDocument();
  // portata_di_click
  expect(getByText(/Eventi ambiente ed educazione/)).toBeInTheDocument();
});
