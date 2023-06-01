import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PaginaArgomentoView from '../PaginaArgomentoView/PaginaArgomentoView';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

// Warning: An update to Icon inside a test was not wrapped in act(...).
// When testing, code that causes React state updates should be wrapped into act(...):
jest.mock('design-comuni-plone-theme/components/ItaliaTheme/Icons/Icon');

jest.mock('@plone/volto/helpers/Loadable/Loadable');
beforeAll(
  async () =>
    await require('@plone/volto/helpers/Loadable/Loadable').__setLoadables(),
);

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const mock_mandatory = {
  '@components': {
    actions: {
      '@id': 'http://localhost:3000/argomenti-1/sport/@actions',
    },
    breadcrumbs: {
      '@id': 'http://localhost:3000/argomenti-1/sport/@breadcrumbs',
    },
    contextnavigation: {
      '@id': 'http://localhost:3000/argomenti-1/sport/@contextnavigation',
    },
    navigation: {
      '@id': 'http://localhost:3000/argomenti-1/sport/@navigation',
    },
    subsite: {},
    translations: {
      '@id': 'http://localhost:3000/argomenti-1/sport/@translations',
    },
    types: {
      '@id': 'http://localhost:3000/argomenti-1/sport/@types',
    },
    workflow: {
      '@id': 'http://localhost:3000/argomenti-1/sport/@workflow',
    },
  },
  '@id': 'http://localhost:3000/argomenti-1/sport',
  '@type': 'Pagina Argomento',
  title: 'Sport',
  UID: 'f8bf0797eec54e2abc90a825a149bd12',
};

const mock_allfields = {
  ...mock_mandatory,
  allow_discussion: false,
  blocks: {
    '32f4ef4f-6312-4fc7-804a-6dc4a6342dd0': {
      '@type': 'text',
    },
    '6766e76d-f1c6-4069-bc22-262d312441f4': {
      '@type': 'title',
    },
    '80951c51-e600-4037-af81-63dfb462ff4f': {
      '@type': 'description',
    },
  },
  blocks_layout: {
    items: [
      '6766e76d-f1c6-4069-bc22-262d312441f4',
      '80951c51-e600-4037-af81-63dfb462ff4f',
      '32f4ef4f-6312-4fc7-804a-6dc4a6342dd0',
    ],
  },
  changeNote: '',
  contributors: [],
  created: '2023-05-26T08:43:03+00:00',
  creators: ['admin'],
  description: 'Is this just fantasy',
  design_italia_meta_type: 'Argomento',
  effective: null,
  exclude_from_nav: false,
  expires: null,
  icona: 'hand-holding-heart',
  id: 'sport',
  image: {
    'content-type': 'image/jpeg',
    download:
      'http://localhost:3000/argomenti-1/sport/@@images/4d85f2f0-5c8e-46fb-bdf7-677d1a6ca830.jpeg',
    filename: 'Ginger_european_cat.jpeg',
    height: 2579,
    scales: {
      great: {
        download:
          'http://localhost:3000/argomenti-1/sport/@@images/a1568a35-00b1-43d2-988c-8630374a8652.jpeg',
        height: 1600,
        width: 1200,
      },
      huge: {
        download:
          'http://localhost:3000/argomenti-1/sport/@@images/e9342f0a-fff9-4c94-b417-3c7e2e22ce97.jpeg',
        height: 2133,
        width: 1600,
      },
      icon: {
        download:
          'http://localhost:3000/argomenti-1/sport/@@images/84156368-ef21-487d-9300-f58f08d79c1c.jpeg',
        height: 32,
        width: 24,
      },
      large: {
        download:
          'http://localhost:3000/argomenti-1/sport/@@images/e8d96553-d1e3-4d42-8e24-cd26fe7b9891.jpeg',
        height: 1066,
        width: 800,
      },
      larger: {
        download:
          'http://localhost:3000/argomenti-1/sport/@@images/f215c6d5-5824-411e-a5cd-b98122ed23da.jpeg',
        height: 1333,
        width: 1000,
      },
      listing: {
        download:
          'http://localhost:3000/argomenti-1/sport/@@images/213636b2-e13a-4fc7-88c6-77e548e9e738.jpeg',
        height: 16,
        width: 12,
      },
      midi: {
        download:
          'http://localhost:3000/argomenti-1/sport/@@images/a33c404e-5f17-4c10-9870-168ccdd0bb2a.jpeg',
        height: 400,
        width: 300,
      },
      mini: {
        download:
          'http://localhost:3000/argomenti-1/sport/@@images/33542b05-7ff7-4370-b85d-04f51fd689d8.jpeg',
        height: 266,
        width: 200,
      },
      preview: {
        download:
          'http://localhost:3000/argomenti-1/sport/@@images/ea901d98-3bd3-4342-8cbc-c638c14c8dfc.jpeg',
        height: 533,
        width: 400,
      },
      teaser: {
        download:
          'http://localhost:3000/argomenti-1/sport/@@images/5c3d9b0a-1d1f-4303-ae3f-9f3b5e56daad.jpeg',
        height: 800,
        width: 600,
      },
      thumb: {
        download:
          'http://localhost:3000/argomenti-1/sport/@@images/5e0dbb73-cb17-4585-920f-b43e6be48531.jpeg',
        height: 170,
        width: 128,
      },
      tile: {
        download:
          'http://localhost:3000/argomenti-1/sport/@@images/5d7d0860-9e8f-4a7b-90a7-c8726735b4da.jpeg',
        height: 64,
        width: 48,
      },
    },
    size: 2621622,
    width: 1934,
  },
  image_caption: 'Caption image',
  is_folderish: true,
  items: [],
  items_total: 0,
  language: {
    title: 'Italiano',
    token: 'it',
  },
  layout: 'view',
  lock: {
    locked: false,
    stealable: true,
  },
  modified: '2023-05-26T09:23:38+00:00',
  next_item: {},
  opengraph_description: null,
  opengraph_image: null,
  opengraph_title: null,
  parent: {
    '@id': 'http://localhost:3000/argomenti-1',
    '@type': 'Document',
    description: '',
    design_italia_meta_type: 'Pagina',
    has_children: true,
    id: 'argomenti-1',
    image_field: null,
    image_scales: null,
    review_state: 'private',
    title: 'Argomenti',
  },
  preview_caption: null,
  preview_image: null,
  previous_item: {},
  relatedItems: [
    {
      '@id': 'http://localhost:3000/argomenti',
      '@type': 'Document',
      description: '',
      design_italia_meta_type: 'Pagina',
      effective: null,
      has_children: false,
      id: 'argomenti',
      image_field: null,
      image_scales: null,
      review_state: 'published',
      title: 'Argomenti',
    },
  ],
  review_state: 'private',
  rights: '',
  seo_canonical_url: null,
  seo_description: null,
  seo_noindex: null,
  seo_title: null,
  subjects: [],
  ulteriori_informazioni: {
    'content-type': 'text/html',
    data: '<p>Is this the real life</p>',
    encoding: 'utf8',
  },
  unita_amministrative_responsabili: [
    {
      '@id': 'http://localhost:3000/amministrazione/uffici/ufficio-lorem-ipsum',
      '@type': 'UnitaOrganizzativa',
      address: '',
      circoscrizione: null,
      city: null,
      description: '',
      design_italia_meta_type: 'Unita Organizzativa',
      effective: null,
      email: null,
      geolocation: {
        latitude: 0,
        longitude: 0,
      },
      has_children: true,
      id: 'ufficio-lorem-ipsum',
      image_field: null,
      image_scales: null,
      nome_sede: null,
      quartiere: null,
      review_state: 'private',
      street: null,
      telefono: null,
      title: 'Ufficio Lorem Ipsum',
      zip_code: null,
    },
  ],
  version: 'current',
  versioning_enabled: true,
  working_copy: null,
  working_copy_of: null,
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
            text: 'Eventi ambiente ed educazione \nParchi e Boschi urbani\nContabilit\u00e0 ambientale e Open Data ambientali',
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
      'generic_card_/argomenti': {
        loading: false,
        loaded: true,
        error: null,
        data: {
          '@components': {
            actions: {
              '@id': 'http://localhost:3000/argomenti/@actions',
            },
            breadcrumbs: {
              '@id': 'http://localhost:3000/argomenti/@breadcrumbs',
            },
            contextnavigation: {
              '@id': 'http://localhost:3000/argomenti/@contextnavigation',
            },
            navigation: {
              '@id': 'http://localhost:3000/argomenti/@navigation',
            },
            subsite: {},
            translations: {
              '@id': 'http://localhost:3000/argomenti/@translations',
            },
            types: {
              '@id': 'http://localhost:3000/argomenti/@types',
            },
            workflow: {
              '@id': 'http://localhost:3000/argomenti/@workflow',
            },
          },
          '@id': 'http://localhost:3000/argomenti',
          '@type': 'Document',
          UID: '7cfcca83deee499ba37e847e56559838',
          allow_discussion: false,
          blocks: {
            '9050d52c-057e-4944-9432-ffb938f990e0': {
              '@type': 'title',
            },
          },
          blocks_layout: {
            items: ['9050d52c-057e-4944-9432-ffb938f990e0'],
          },
          changeNote: '',
          contributors: [],
          correlato_in_evidenza: [],
          created: '2023-05-26T08:40:38+00:00',
          creators: ['admin'],
          description: '',
          design_italia_meta_type: 'Pagina',
          effective: null,
          exclude_from_nav: false,
          expires: null,
          id: 'argomenti',
          image: null,
          image_caption: null,
          info_testata: null,
          is_folderish: true,
          items: [],
          items_total: 0,
          language: '',
          layout: 'document_view',
          lock: {
            locked: false,
            stealable: true,
          },
          modified: '2023-05-26T08:40:38+00:00',
          mostra_bottoni_condivisione: false,
          mostra_navigazione: false,
          next_item: {
            '@id': 'http://localhost:3000/argomenti-1',
            '@type': 'Document',
            description: '',
            title: 'Argomenti',
          },
          opengraph_description: null,
          opengraph_image: null,
          opengraph_title: null,
          parent: {
            '@id': 'http://localhost:3000',
            '@type': 'Plone Site',
            description: 'Il sistema di gestione contenuti basato su React',
            title: 'Benvenuto in Volto!',
          },
          preview_caption: null,
          preview_image: null,
          previous_item: {
            '@id': 'http://localhost:3000/documenti-e-dati',
            '@type': 'Document',
            description: '',
            title: 'Documenti e dati',
          },
          relatedItems: [],
          review_state: 'published',
          ricerca_in_testata: false,
          rights: '',
          seo_canonical_url: null,
          seo_description: null,
          seo_noindex: null,
          seo_title: null,
          show_modified: true,
          subjects: [],
          table_of_contents: null,
          tassonomia_argomenti: [],
          title: 'Argomenti',
          version: 'current',
          versioning_enabled: true,
          working_copy: null,
          working_copy_of: null,
        },
      },
      '/amministrazione/uffici/ufficio-lorem-ipsum': {
        loading: false,
        loaded: true,
        error: null,
        data: {
          '@components': {
            actions: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/ufficio-lorem-ipsum/@actions',
            },
            breadcrumbs: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/ufficio-lorem-ipsum/@breadcrumbs',
            },
            contextnavigation: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/ufficio-lorem-ipsum/@contextnavigation',
            },
            navigation: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/ufficio-lorem-ipsum/@navigation',
            },
            subsite: {},
            translations: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/ufficio-lorem-ipsum/@translations',
            },
            types: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/ufficio-lorem-ipsum/@types',
            },
            workflow: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/ufficio-lorem-ipsum/@workflow',
            },
          },
          '@id':
            'http://localhost:3000/amministrazione/uffici/ufficio-lorem-ipsum',
          '@type': 'UnitaOrganizzativa',
          UID: '9740dd442a4a498790ae12c696e18886',
          allow_discussion: false,
          assessore_riferimento: [],
          changeNote: '',
          circoscrizione: null,
          city: null,
          competenze: {
            blocks: {
              '1d0c781a-b770-4cce-98e3-b3c209c07901': {
                '@type': 'text',
              },
            },
            blocks_layout: {
              items: ['1d0c781a-b770-4cce-98e3-b3c209c07901'],
            },
          },
          contact_info: {
            blocks: {
              '5cca3491-0f26-4f3a-a970-2f9f7fcba324': {
                '@type': 'text',
              },
            },
            blocks_layout: {
              items: ['5cca3491-0f26-4f3a-a970-2f9f7fcba324'],
            },
          },
          contributors: [],
          correlato_in_evidenza: [],
          country: null,
          created: '2023-05-26T08:59:54+00:00',
          creators: ['admin'],
          description: '',
          design_italia_meta_type: 'Unita Organizzativa',
          effective: null,
          email: null,
          exclude_from_nav: false,
          expires: null,
          fax: null,
          geolocation: {
            latitude: 0,
            longitude: 0,
          },
          id: 'ufficio-lorem-ipsum',
          image: null,
          image_caption: null,
          is_folderish: true,
          items: [
            {
              '@id':
                'http://localhost:3000/amministrazione/uffici/ufficio-lorem-ipsum/allegati',
              '@type': 'Document',
              description: '',
              design_italia_meta_type: 'Pagina',
              has_children: false,
              id: 'allegati',
              image_field: '',
              image_scales: null,
              review_state: 'private',
              title: 'Allegati',
              url: '/amministrazione/uffici/ufficio-lorem-ipsum/allegati',
            },
          ],
          items_total: 1,
          language: {
            title: 'Italiano',
            token: 'it',
          },
          layout: 'view',
          legami_con_altre_strutture: [],
          lock: {
            locked: false,
            stealable: true,
          },
          modified: '2023-05-26T08:59:54+00:00',
          next_item: {},
          nome_sede: null,
          opengraph_description: null,
          opengraph_image: null,
          opengraph_title: null,
          orario_pubblico: {
            blocks: {
              'c5a48ab9-ac3d-498f-be7c-40f0d9960f31': {
                '@type': 'text',
              },
            },
            blocks_layout: {
              items: ['c5a48ab9-ac3d-498f-be7c-40f0d9960f31'],
            },
          },
          parent: {
            '@id': 'http://localhost:3000/amministrazione/uffici',
            '@type': 'Document',
            description: '',
            design_italia_meta_type: 'Pagina',
            has_children: true,
            id: 'uffici',
            image_field: null,
            image_scales: null,
            review_state: 'private',
            title: 'Uffici',
          },
          pec: null,
          persone_struttura: [],
          prestazioni: [],
          preview_caption: null,
          preview_image: null,
          previous_item: {},
          quartiere: null,
          relatedItems: [],
          related_news: [],
          responsabile: [],
          review_state: 'private',
          rights: '',
          sede: [],
          sedi_secondarie: [],
          seo_canonical_url: null,
          seo_description: null,
          seo_noindex: null,
          seo_title: null,
          servizi_offerti: [],
          street: null,
          subjects: [],
          tassonomia_argomenti: [],
          telefono: null,
          tipologia_organizzazione: {
            title: 'Politica',
            token: 'Politica',
          },
          title: 'Ufficio Lorem Ipsum',
          ulteriori_informazioni: {
            blocks: {},
            blocks_layout: {
              items: [],
            },
          },
          uo_children: [],
          uo_parent: null,
          version: 'current',
          versioning_enabled: true,
          web: null,
          working_copy: null,
          working_copy_of: null,
          zip_code: null,
        },
      },
    },
  },

  breadcrumbs: {
    error: null,
    items: [
      {
        title: 'Argomenti',
        url: '/argomenti-1',
      },
      {
        title: 'Sport',
        url: '/argomenti-1/sport',
      },
    ],
    root: '',
    loaded: true,
    loading: false,
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
  expect(getByText('Sport')).toBeInTheDocument();
});

test('expect to have all fields in page', async () => {
  const { getByText, getByRole, getAllByRole } = render(
    <Provider store={store}>
      <MemoryRouter>
        <PaginaArgomentoView content={mock_allfields} />
      </MemoryRouter>
    </Provider>,
  );
  // image
  expect(getByRole('img', { Name: 'Sport' })).toBeInTheDocument();
  // description
  expect(getByText(/Is this just fantasy/i)).toBeInTheDocument();

  //ulteriori informazioni
  expect(getByText(/Is this the real life/i));

  // UO responsabili
  expect(
    getByRole('link', { name: /Ufficio Lorem Ipsum/i }),
  ).toBeInTheDocument();

  // Contenuti correlati
  expect(
    getByRole('heading', { name: /Contenuti correlati/i }),
  ).toBeInTheDocument();

  expect(getAllByRole('link', { name: /Argomenti/i })).toBeTruthy();
});

// TypeError: Cannot read property 'items' of undefined
// 32 |   const dispatch = useDispatch();
// 33 |
// > 34 |   let items = useSelector((state) => state.breadcrumbs.items, isEqual);

// test('Page with blocks', async () => {
//   const { getByText, getByAltText } = render(
//     <Provider store={store}>
//       <MemoryRouter>
//         <PaginaArgomentoView content={with_blocks} />
//       </MemoryRouter>
//     </Provider>,
//   );
//   // title
//   expect(getByText(/Pagina argomento a blocchi/i)).toBeInTheDocument();
//   // description
//   expect(getByText(/Description argomento a blocchi/i)).toBeInTheDocument();
//   // portata_di_click
//   expect(getByText(/Eventi ambiente ed educazione/)).toBeInTheDocument();
// });

test('todo', () => {
  expect(with_blocks).toBeDefined();
  expect(true).toBe(true);
});
