import React from 'react';
import { render, screen } from '@testing-library/react';
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
      '@id': 'http://localhost:3000/argomenti/sport/@actions',
    },
    aliases: {
      '@id': 'http://localhost:3000/argomenti/sport/@aliases',
    },
    breadcrumbs: {
      '@id': 'http://localhost:3000/argomenti/sport/@breadcrumbs',
    },
    contextnavigation: {
      '@id': 'http://localhost:3000/argomenti/sport/@contextnavigation',
    },
    navigation: {
      '@id': 'http://localhost:3000/argomenti/sport/@navigation',
    },
    subsite: {},
    translations: {
      '@id': 'http://localhost:3000/argomenti/sport/@translations',
    },
    types: {
      '@id': 'http://localhost:3000/argomenti/sport/@types',
    },
    workflow: {
      '@id': 'http://localhost:3000/argomenti/sport/@workflow',
    },
  },
  '@id': 'http://localhost:3000/argomenti/sport',
  '@type': 'Pagina Argomento',
  UID: '90e54807ffe444f09fd59725fbfc557c',
  title: 'Sport',
};

const mock_allfields = {
  ...mock_mandatory,
  allow_discussion: false,
  blocks: {
    '00228483-b071-4c68-a565-92a90549cf48': {
      '@type': 'title',
    },
    '0cf3f1df-c020-40eb-8f33-f265bb19dad1': {
      '@type': 'description',
    },
    '2d02f60e-5bc9-4382-bded-87b5c5aa405b': {
      '@type': 'listing',
      block: '2d02f60e-5bc9-4382-bded-87b5c5aa405b',
      headlineTag: 'h2',
      hide_dates: false,
      linkHref: [
        {
          '@id': '/documenti-e-dati',
          Description: '',
          Title: 'Documenti e dati',
          title: 'Documenti e dati',
        },
      ],
      linkTitle: 'Tutti i documenti',
      query: [],
      querystring: {
        query: [
          {
            i: 'portal_type',
            o: 'plone.app.querystring.operation.selection.any',
            v: ['Documento'],
          },
        ],
        sort_order: 'ascending',
      },
      show_description: true,
      show_detail_link: false,
      show_icon: false,
      show_path_filters: false,
      show_section: true,
      show_type: false,
      title: 'Documenti',
      variation: 'simpleCard',
    },
    '4036e2cc-199b-4d9f-9584-877b06a113d2': {
      '@type': 'text',
    },
    '795d6f3a-970a-47b1-8ad1-cc8ada0f70bc': {
      '@type': 'listing',
      block: '795d6f3a-970a-47b1-8ad1-cc8ada0f70bc',
      headlineTag: 'h2',
      hide_dates: false,
      linkHref: [
        {
          '@id': '/amministrazione',
          Description: '',
          Title: 'Amministrazione',
          title: 'Amministrazione',
        },
      ],
      linkTitle: "Tutta l'amministrazione",
      path_filters: {},
      query: [],
      querystring: {
        limit: '3',
        query: [
          {
            i: 'portal_type',
            o: 'plone.app.querystring.operation.selection.any',
            v: ['UnitaOrganizzativa', 'Persona'],
          },
        ],
        sort_order: 'ascending',
      },
      show_description: true,
      show_detail_link: false,
      show_icon: false,
      show_path_filters: false,
      show_section: true,
      show_type: false,
      title: 'Amministrazione',
      variation: 'simpleCard',
    },
    '7e34a700-a41e-4a44-9e04-2e51c5e1d9b0': {
      '@type': 'listing',
      block: '7e34a700-a41e-4a44-9e04-2e51c5e1d9b0',
      headlineTag: 'h2',
      hide_dates: false,
      linkHref: [
        {
          '@id': '/servizi',
          Description: '',
          Title: 'Servizi',
          title: 'Servizi',
        },
      ],
      linkTitle: 'Tutti i servizi',
      query: [],
      querystring: {
        limit: '3',
        query: [
          {
            i: 'portal_type',
            o: 'plone.app.querystring.operation.selection.any',
            v: ['Servizio'],
          },
        ],
        sort_order: 'ascending',
      },
      show_description: true,
      show_detail_link: false,
      show_icon: false,
      show_path_filters: false,
      show_section: true,
      show_type: false,
      title: 'Servizi',
      variation: 'simpleCard',
    },
    'cc6f7851-ad0f-4eb1-bba0-1d23750b6fe8': {
      '@type': 'listing',
      always_show_image: false,
      autoplay: false,
      autoplay_speed: 2,
      block: 'cc6f7851-ad0f-4eb1-bba0-1d23750b6fe8',
      headlineTag: 'h2',
      hide_dates: false,
      linkHref: [
        {
          '@id': '/notizie',
          Description: '',
          Title: 'Notizie',
          title: 'Notizie',
        },
      ],
      linkTitle: 'Tutte le novità',
      natural_image_size: false,
      path_filters: {},
      query: [],
      querystring: {
        limit: '3',
        query: [
          {
            i: 'portal_type',
            o: 'plone.app.querystring.operation.selection.any',
            v: ['News Item', 'Event'],
          },
        ],
        sort_order: 'ascending',
      },
      set_four_columns: false,
      show_block_bg: true,
      show_description: true,
      show_detail_link: false,
      show_dots: true,
      show_icon: false,
      show_image_popup: false,
      show_image_title: true,
      show_only_first_ribbon: false,
      show_path_filters: false,
      show_pointer_list: false,
      show_section: false,
      show_topics: false,
      show_type: true,
      slidesToShow: 1,
      title: 'Novità',
      variation: 'cardWithImageTemplate',
    },
  },
  description:
    'Informazioni su eventi sportivi, impianti comunali, servizi dedicati allo sport',
  icona: 'child',
  image: {
    'content-type': 'image/png',
    download:
      'http://localhost:3000/argomenti/sport/@@images/image-1156-4ffcd0c77ca4a1c9c64a80649bdae352.png',
    filename: 'foto-ospedale.png',
    height: 940,
    scales: {
      gallery: {
        download:
          'http://localhost:3000/argomenti/sport/@@images/image-250-a830b05cc226c10022663a8870939760.png',
        height: 203,
        width: 250,
      },
      great: {
        download:
          'http://localhost:3000/argomenti/sport/@@images/image-1200-893c7283628ec9c36465079d21f05ee0.png',
        height: 940,
        width: 1156,
      },
      huge: {
        download:
          'http://localhost:3000/argomenti/sport/@@images/image-1600-11978e33cf1496dcad5ddf72d2addfec.png',
        height: 940,
        width: 1156,
      },
      icon: {
        download:
          'http://localhost:3000/argomenti/sport/@@images/image-32-17e65f3e8aa84ed6073fb06d3892f807.png',
        height: 26,
        width: 32,
      },
      large: {
        download:
          'http://localhost:3000/argomenti/sport/@@images/image-800-e0ccedc3da400dddb644eb871a129d2e.png',
        height: 650,
        width: 800,
      },
      larger: {
        download:
          'http://localhost:3000/argomenti/sport/@@images/image-1000-3a8204d5166f1788579b76d41b11112d.png',
        height: 813,
        width: 1000,
      },
      listing: {
        download:
          'http://localhost:3000/argomenti/sport/@@images/image-16-da545670ce47827cdc7612634f04d8a5.png',
        height: 13,
        width: 16,
      },
      midi: {
        download:
          'http://localhost:3000/argomenti/sport/@@images/image-300-cb33c44a55ea9f4842c74cb28a365930.png',
        height: 243,
        width: 300,
      },
      mini: {
        download:
          'http://localhost:3000/argomenti/sport/@@images/image-200-f0240dabd42962ce5490a48211561f71.png',
        height: 162,
        width: 200,
      },
      preview: {
        download:
          'http://localhost:3000/argomenti/sport/@@images/image-400-fdf79ef230c6d931e9bf20e038fc30f0.png',
        height: 325,
        width: 400,
      },
      teaser: {
        download:
          'http://localhost:3000/argomenti/sport/@@images/image-600-371729b4ca1e8bb32d1e06860dbb8533.png',
        height: 487,
        width: 600,
      },
      thumb: {
        download:
          'http://localhost:3000/argomenti/sport/@@images/image-128-857bb85322609c7b73d7e111bc7732b9.png',
        height: 104,
        width: 128,
      },
      tile: {
        download:
          'http://localhost:3000/argomenti/sport/@@images/image-64-49d29cadb948f4e10b6fadce6877477c.png',
        height: 52,
        width: 64,
      },
    },
    size: 1296882,
    width: 1156,
  },
  image_caption: 'Didascalia immagine testata',
  relatedItems: [
    {
      '@id': 'http://localhost:3000/eventi/mega-evento',
      '@type': 'Event',
      description: 'Descrizione del mega evento',
      design_italia_meta_type: 'Evento',
      effective: null,
      end: '2023-01-20T09:00:00+00:00',
      has_children: true,
      id: 'mega-evento',
      image_field: 'preview_image',
      image_scales: {
        preview_image: [
          {
            'content-type': 'image/jpeg',
            download:
              'http://localhost:3000/eventi/mega-evento/@@images/preview_image-5184-b5d567a7ba608b94404e30c90b255c22.jpeg',
            filename: 'national-cancer-institute.jpeg',
            height: 3456,
            scales: {
              gallery: {
                download:
                  'http://localhost:3000/eventi/mega-evento/@@images/preview_image-250-1ec9475de2124b017f1dd92d4888a04a.jpeg',
                height: 166,
                width: 250,
              },
              great: {
                download:
                  'http://localhost:3000/eventi/mega-evento/@@images/preview_image-1200-dce45656c72c5e2fda91d15ea1700b38.jpeg',
                height: 800,
                width: 1200,
              },
              huge: {
                download:
                  'http://localhost:3000/eventi/mega-evento/@@images/preview_image-1600-43b4907c74976d400296f42c4bee8b89.jpeg',
                height: 1066,
                width: 1600,
              },
              icon: {
                download:
                  'http://localhost:3000/eventi/mega-evento/@@images/preview_image-32-10fa05879a725f1c0a79ff6cb9299c97.jpeg',
                height: 21,
                width: 32,
              },
              large: {
                download:
                  'http://localhost:3000/eventi/mega-evento/@@images/preview_image-800-be70acf978f5aacbe83af8482c6a2381.jpeg',
                height: 533,
                width: 800,
              },
              larger: {
                download:
                  'http://localhost:3000/eventi/mega-evento/@@images/preview_image-1000-820f7ead7e59728ce3ee9bb8021ec950.jpeg',
                height: 666,
                width: 1000,
              },
              listing: {
                download:
                  'http://localhost:3000/eventi/mega-evento/@@images/preview_image-16-ab5be9555a009fb3de92b9d049462440.jpeg',
                height: 10,
                width: 16,
              },
              midi: {
                download:
                  'http://localhost:3000/eventi/mega-evento/@@images/preview_image-300-8edca2b5c68239a69a87584b16f146e4.jpeg',
                height: 200,
                width: 300,
              },
              mini: {
                download:
                  'http://localhost:3000/eventi/mega-evento/@@images/preview_image-200-10ce8dad9c6577e5f08e12bc7d94be91.jpeg',
                height: 133,
                width: 200,
              },
              preview: {
                download:
                  'http://localhost:3000/eventi/mega-evento/@@images/preview_image-400-0500bc73ae0d0d6f304e4de314a41e73.jpeg',
                height: 266,
                width: 400,
              },
              teaser: {
                download:
                  'http://localhost:3000/eventi/mega-evento/@@images/preview_image-600-389097fa4b7b5dee7b16be86a1957043.jpeg',
                height: 400,
                width: 600,
              },
              thumb: {
                download:
                  'http://localhost:3000/eventi/mega-evento/@@images/preview_image-128-91e9caaa30bdb024c025190a58db4eae.jpeg',
                height: 85,
                width: 128,
              },
              tile: {
                download:
                  'http://localhost:3000/eventi/mega-evento/@@images/preview_image-64-7d4fda773924ded6e0ac3321d3046c81.jpeg',
                height: 42,
                width: 64,
              },
            },
            size: 2026538,
            width: 5184,
          },
        ],
      },
      review_state: 'private',
      start: '2023-01-20T09:00:00+00:00',
      title: 'Mega Evento',
    },
  ],
  ulteriori_informazioni: {
    'content-type': 'text/html',
    data: "<p>There's a lady who's sure</p>",
    encoding: 'utf8',
  },
  unita_amministrative_responsabili: [
    {
      '@id':
        'http://localhost:3000/amministrazione/uffici/gestione-impianti-sportivi',
      '@type': 'UnitaOrganizzativa',
      address: '',
      circoscrizione: null,
      city: null,
      contact_info: {
        blocks: {
          '65589e29-7a43-4979-bf71-6f46503a70a2': {
            '@type': 'text',
          },
        },
        blocks_layout: {
          items: ['65589e29-7a43-4979-bf71-6f46503a70a2'],
        },
      },
      description: '',
      design_italia_meta_type: 'Unita Organizzativa',
      effective: null,
      geolocation: {
        latitude: 0,
        longitude: 0,
      },
      has_children: true,
      id: 'gestione-impianti-sportivi',
      image_field: null,
      image_scales: null,
      nome_sede: null,
      quartiere: null,
      review_state: 'private',
      street: 'Via Dei Transiti 21',
      title: 'Gestione impianti sportivi',
      zip_code: '50302',
    },
  ],
};

// const with_blocks = {
//   ...mock_allfields,
//   title: 'Pagina argomento a blocchi',
//   description: 'Description argomento a blocchi',
//   blocks: {
//     '1fb7c316-ec00-4f0d-9973-096bab6d610b': {
//       '@type': 'pagina_argomento_title',
//       blockRenderMap: {
//         'align-center': 'p',
//         atomic: {
//           element: 'figure',
//         },
//         blockquote: {
//           element: 'blockquote',
//         },
//         callout: {
//           element: 'p',
//         },
//         'code-block': {
//           element: 'pre',
//           wrapper: {
//             _owner: null,
//             _store: {},
//             key: null,
//             props: {
//               className: 'public-DraftStyleDefault-pre',
//             },
//             ref: null,
//             type: 'pre',
//           },
//         },
//         'header-five': {
//           element: 'h5',
//         },
//         'header-four': {
//           element: 'h4',
//         },
//         'header-one': {
//           element: 'h1',
//         },
//         'header-six': {
//           element: 'h6',
//         },
//         'header-three': {
//           element: 'h3',
//         },
//         'header-two': {
//           element: 'h2',
//         },
//         'ordered-list-item': {
//           element: 'li',
//           wrapper: {
//             _owner: null,
//             _store: {},
//             key: null,
//             props: {
//               className: 'public-DraftStyleDefault-ol',
//             },
//             ref: null,
//             type: 'ol',
//           },
//         },
//         'unordered-list-item': {
//           element: 'li',
//           wrapper: {
//             _owner: null,
//             _store: {},
//             key: null,
//             props: {
//               className: 'public-DraftStyleDefault-ul',
//             },
//             ref: null,
//             type: 'ul',
//           },
//         },
//         unstyled: {
//           element: 'div',
//         },
//       },
//       portata_di_click: {
//         blocks: [
//           {
//             data: {},
//             depth: 0,
//             entityRanges: [],
//             inlineStyleRanges: [
//               {
//                 length: 6,
//                 offset: 40,
//                 style: 'BOLD',
//               },
//               {
//                 length: 11,
//                 offset: 54,
//                 style: 'BOLD',
//               },
//               {
//                 length: 21,
//                 offset: 78,
//                 style: 'BOLD',
//               },
//             ],
//             key: '1vnli',
//             text: 'Eventi ambiente ed educazione \nParchi e Boschi urbani\nContabilit\u00e0 ambientale e Open Data ambientali',
//             type: 'unstyled',
//           },
//         ],
//         entityMap: {},
//       },
//     },
//   },
//   blocks_layout: {
//     items: ['1fb7c316-ec00-4f0d-9973-096bab6d610b'],
//   },
// };

const store = mockStore({
  intl: {
    locale: 'en',
    messages: {},
  },
  breadcrumbs: {
    error: null,
    items: [
      {
        title: 'Argomenti',
        url: '/argomenti',
      },
      {
        title: 'Sport',
        url: '/argomenti/sport',
      },
    ],
    root: '',
    loaded: true,
    loading: false,
  },
  content: {
    data: {
      is_folderish: true,
    },
    subrequests: {
      '/amministrazione/uffici/gestione-impianti-sportivi': {
        loading: false,
        loaded: true,
        error: null,
        data: {
          '@components': {
            actions: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/gestione-impianti-sportivi/@actions',
            },
            aliases: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/gestione-impianti-sportivi/@aliases',
            },
            breadcrumbs: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/gestione-impianti-sportivi/@breadcrumbs',
            },
            contextnavigation: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/gestione-impianti-sportivi/@contextnavigation',
            },
            navigation: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/gestione-impianti-sportivi/@navigation',
            },
            subsite: {},
            translations: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/gestione-impianti-sportivi/@translations',
            },
            types: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/gestione-impianti-sportivi/@types',
            },
            workflow: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/gestione-impianti-sportivi/@workflow',
            },
          },
          '@id':
            'http://localhost:3000/amministrazione/uffici/gestione-impianti-sportivi',
          '@type': 'UnitaOrganizzativa',
          UID: 'a0c6f3a0d8194e3ba801138a09510714',
          allow_discussion: false,
          assessore_riferimento: [],
          changeNote: '',
          circoscrizione: null,
          city: null,
          competenze: {
            blocks: {},
            blocks_layout: {
              items: [],
            },
          },
          contact_info: [],
          contributors: [],
          correlato_in_evidenza: [],
          country: null,
          created: '2023-01-03T15:25:37+00:00',
          creators: ['admin'],
          description: '',
          design_italia_meta_type: 'Unita Organizzativa',
          documenti_pubblici: [],
          effective: null,
          exclude_from_nav: false,
          expires: null,
          geolocation: {
            latitude: 0,
            longitude: 0,
          },
          id: 'gestione-impianti-sportivi',
          image: null,
          image_caption: null,
          is_folderish: true,
          items: [
            {
              '@id':
                'http://localhost:3000/amministrazione/uffici/gestione-impianti-sportivi/allegati',
              '@type': 'Document',
              description: '',
              design_italia_meta_type: 'Pagina',
              has_children: false,
              id: 'allegati',
              image_field: '',
              image_scales: null,
              review_state: 'private',
              title: 'Allegati',
              url: '/amministrazione/uffici/gestione-impianti-sportivi/allegati',
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
          modified: '2023-01-19T12:04:48+00:00',
          next_item: {
            '@id':
              'http://localhost:3000/amministrazione/uffici/giunta-e-consiglio',
            '@type': 'UnitaOrganizzativa',
            description: '',
            title: 'Giunta e consiglio',
          },
          nome_sede: null,
          opengraph_description: null,
          opengraph_image: null,
          opengraph_title: null,
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
          street: 'Via Dei Transiti 21',
          subjects: [],
          tassonomia_argomenti: [],
          tipologia_organizzazione: {
            title: 'Struttura amministrativa',
            token: 'struttura_amministrativa',
          },
          title: 'Gestione impianti sportivi',
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
          working_copy: null,
          working_copy_of: null,
          zip_code: '50302',
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
  expect(screen.getByRole('heading', { name: 'Sport' })).toBeInTheDocument();
});

test('expect to have all fields in page', async () => {
  const { getByText, getByAltText, debug } = render(
    <Provider store={store}>
      <MemoryRouter>
        <PaginaArgomentoView content={mock_allfields} />
      </MemoryRouter>
    </Provider>,
  );

  //descrizione
  expect(
    screen.getByText(/Informazioni su eventi sportivi/i, { exact: false }),
  ).toBeInTheDocument();

  //unità amministrative responsabili
  expect(screen.getByText(/gestione impianti sportivi/i)).toBeInTheDocument();

  // Ulteriori informazioni
  expect(screen.getByText(/There's a lady who's sure/i)).toBeInTheDocument();

  //Eventi correlati
  expect(
    screen.getByRole('heading', { name: /Contenuti correlati/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: /Mega evento/i }),
  ).toBeInTheDocument();
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
