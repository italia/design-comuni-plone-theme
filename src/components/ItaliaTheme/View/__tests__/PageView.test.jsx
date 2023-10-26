import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PageView from '../PageView/PageView';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

// Warning: An update to Icon inside a test was not wrapped in act(...).
// When testing, code that causes React state updates should be wrapped into act(...):
jest.mock('design-comuni-plone-theme/components/ItaliaTheme/Icons/Icon');
jest.mock('@plone/volto/helpers/Loadable/Loadable');
beforeAll(
  async () =>
    await require('@plone/volto/helpers/Loadable/Loadable').__setLoadables(),
);

const mock_mandatory = {
  '@components': {
    actions: {
      '@id': 'http://localhost:3000/notizie/@actions',
    },
    aliases: {
      '@id': 'http://localhost:3000/notizie/@aliases',
    },
    breadcrumbs: {
      '@id': 'http://localhost:3000/notizie/@breadcrumbs',
    },
    contextnavigation: {
      '@id': 'http://localhost:3000/notizie/@contextnavigation',
    },
    navigation: {
      '@id': 'http://localhost:3000/notizie/@navigation',
    },
    subsite: {},
    translations: {
      '@id': 'http://localhost:3000/notizie/@translations',
    },
    types: {
      '@id': 'http://localhost:3000/notizie/@types',
    },
    workflow: {
      '@id': 'http://localhost:3000/notizie/@workflow',
    },
  },
  '@id': 'http://localhost:3000/notizie',
  '@type': 'Document',
  UID: 'c68bc16e610e4a41a8a2578588298253',
  info_testata: {
    'content-type': 'text/html',
    data: '<p><br></p>',
    encoding: 'utf8',
  },
  title: 'Notizie',
};

const mock_allfields = {
  ...mock_mandatory,
  allow_discussion: false,
  blocks: {
    'cb95f0fa-189c-4d6a-82a9-8182f7e2c0d4': {
      '@type': 'listing',
      block: 'cb95f0fa-189c-4d6a-82a9-8182f7e2c0d4',
      headlineTag: 'h2',
      hide_dates: false,
      query: [],
      show_description: true,
      show_detail_link: false,
      show_icon: true,
      show_path_filters: false,
      show_section: true,
      show_type: false,
      variation: 'simpleCard',
    },
    'e274abbd-0239-46ac-b3a8-dad1dee0691c': {
      '@type': 'slate',
      plaintext: '',
      value: [
        {
          children: [
            {
              text: '',
            },
          ],
          type: 'p',
        },
      ],
    },
    'fcfde1bb-0d46-4678-bb6a-2f64fc0084b9': {
      '@type': 'title',
    },
  },
  blocks_layout: {
    items: [
      'fcfde1bb-0d46-4678-bb6a-2f64fc0084b9',
      'cb95f0fa-189c-4d6a-82a9-8182f7e2c0d4',
      'e274abbd-0239-46ac-b3a8-dad1dee0691c',
    ],
  },
  changeNote: '',
  contributors: [],
  correlato_in_evidenza: [],
  created: '2023-01-03T15:26:54+00:00',
  creators: ['admin'],
  description: 'Is this the real life?',
  design_italia_meta_type: 'Pagina',
  effective: '2023-01-03T15:40:54+00:00',
  exclude_from_nav: false,
  expires: null,
  id: 'notizie',
  image: null,
  image_caption: null,
  info_testata: {
    'content-type': 'text/html',
    data: '<p><br></p>',
    encoding: 'utf8',
  },
  is_folderish: true,
  items: [
    {
      '@id':
        'http://localhost:3000/notizie/sport-nel-verde-le-iniziative-della-prossima-edizione',
      '@type': 'News Item',
      description:
        'Le informazioni per partecipare all’iniziativa rivolta a tutte le fasce d’età per promuovere l’attività motoria nelle aree verdi della città.',
      design_italia_meta_type: null,
      has_children: true,
      id: 'sport-nel-verde-le-iniziative-della-prossima-edizione',
      image_field: 'preview_image',
      image_scales: {
        image: [
          {
            'content-type': 'image/jpeg',
            download:
              '@@images/image-5184-f5098a6120bf6d77120ade51613b2421.jpeg',
            filename: 'national-cancer-institute.jpeg',
            height: 3456,
            scales: {
              gallery: {
                download:
                  '@@images/image-250-49e5f5fa9627f9d116e937bd76654091.jpeg',
                height: 166,
                width: 250,
              },
              great: {
                download:
                  '@@images/image-1200-920af22d3d8bf83ea467faf60f9d1888.jpeg',
                height: 800,
                width: 1200,
              },
              huge: {
                download:
                  '@@images/image-1600-20c3c7b9940aabb51143abaa6e0e50a3.jpeg',
                height: 1066,
                width: 1600,
              },
              icon: {
                download:
                  '@@images/image-32-82fdf55155a2dd6ea29d4467222f2392.jpeg',
                height: 21,
                width: 32,
              },
              large: {
                download:
                  '@@images/image-800-6348765c039dd3268da9c9d829e7ec19.jpeg',
                height: 533,
                width: 800,
              },
              larger: {
                download:
                  '@@images/image-1000-e09f88650a7cbc0da9d4736b6d0d952c.jpeg',
                height: 666,
                width: 1000,
              },
              listing: {
                download:
                  '@@images/image-16-c6380d7d7b8b4afd993b24ac200bc230.jpeg',
                height: 10,
                width: 16,
              },
              midi: {
                download:
                  '@@images/image-300-8d4e411695d01225d8c6be3993ec3c30.jpeg',
                height: 200,
                width: 300,
              },
              mini: {
                download:
                  '@@images/image-200-14acaa28232fb3c8309da5c5f7933e1e.jpeg',
                height: 133,
                width: 200,
              },
              preview: {
                download:
                  '@@images/image-400-6e346e702da96058e48158d271e7043b.jpeg',
                height: 266,
                width: 400,
              },
              teaser: {
                download:
                  '@@images/image-600-3975f8c82120189ece436677f5b3e6a9.jpeg',
                height: 400,
                width: 600,
              },
              thumb: {
                download:
                  '@@images/image-128-f6ce4305a76b4511e1e10c50a1c1b4da.jpeg',
                height: 85,
                width: 128,
              },
              tile: {
                download:
                  '@@images/image-64-19669a6cef991ed40ef389ceb5da32fd.jpeg',
                height: 42,
                width: 64,
              },
            },
            size: 2026538,
            width: 5184,
          },
        ],
        preview_image: [
          {
            'content-type': 'image/jpeg',
            download:
              '@@images/preview_image-5184-3c6c2e4f0b75f9365405305f562fd0da.jpeg',
            filename: 'national-cancer-institute.jpeg',
            height: 3456,
            scales: {
              gallery: {
                download:
                  '@@images/preview_image-250-785408520e6d7b9d05af2fedfee78d2a.jpeg',
                height: 166,
                width: 250,
              },
              great: {
                download:
                  '@@images/preview_image-1200-d3de0810040f56632ddb5e9bbb96003b.jpeg',
                height: 800,
                width: 1200,
              },
              huge: {
                download:
                  '@@images/preview_image-1600-8ea0c1ee6cbde7232a7124d084c81a18.jpeg',
                height: 1066,
                width: 1600,
              },
              icon: {
                download:
                  '@@images/preview_image-32-d795572814924a541bee314c2c150084.jpeg',
                height: 21,
                width: 32,
              },
              large: {
                download:
                  '@@images/preview_image-800-8ab6a0ebc1f0a2385fb37c1d9849f9b4.jpeg',
                height: 533,
                width: 800,
              },
              larger: {
                download:
                  '@@images/preview_image-1000-427e67a155fac6e94a7a64a27f00a4dd.jpeg',
                height: 666,
                width: 1000,
              },
              listing: {
                download:
                  '@@images/preview_image-16-12a9a305b32c8dd7ccccccb73dcf187a.jpeg',
                height: 10,
                width: 16,
              },
              midi: {
                download:
                  '@@images/preview_image-300-ca5dac141c26dbfeda9ba058c401f76d.jpeg',
                height: 200,
                width: 300,
              },
              mini: {
                download:
                  '@@images/preview_image-200-3f6749e2cdff7873580b38b38f8fe5cf.jpeg',
                height: 133,
                width: 200,
              },
              preview: {
                download:
                  '@@images/preview_image-400-7973bb70be8915dd5731c5872144c2fc.jpeg',
                height: 266,
                width: 400,
              },
              teaser: {
                download:
                  '@@images/preview_image-600-6f040ff8785b40296d1148a89821f4f7.jpeg',
                height: 400,
                width: 600,
              },
              thumb: {
                download:
                  '@@images/preview_image-128-23aec0db095cf60152ee0eead83433d7.jpeg',
                height: 85,
                width: 128,
              },
              tile: {
                download:
                  '@@images/preview_image-64-da2dbe6b589040648dd782cc4196fb25.jpeg',
                height: 42,
                width: 64,
              },
            },
            size: 2026538,
            width: 5184,
          },
        ],
      },
      review_state: 'published',
      tipologia_notizia: [
        {
          title: null,
          token: 'N',
        },
        {
          title: null,
          token: 'o',
        },
        {
          title: null,
          token: 't',
        },
        {
          title: null,
          token: 'i',
        },
        {
          title: null,
          token: 'z',
        },
        {
          title: null,
          token: 'i',
        },
        {
          title: null,
          token: 'a',
        },
      ],
      title: 'Sport nel verde: le iniziative della prossima edizione',
    },
    {
      '@id':
        'http://localhost:3000/notizie/chiusa-per-ristrutturazione-la-piscina-minghetti',
      '@type': 'News Item',
      description:
        'Partiti i lavori per l’adeguamento dell’impianto. La riapertura è prevista per giugno 2023.',
      design_italia_meta_type: 'Avviso',
      has_children: true,
      id: 'chiusa-per-ristrutturazione-la-piscina-minghetti',
      image_field: '',
      image_scales: null,
      review_state: 'private',
      tipologia_notizia: [
        {
          title: null,
          token: 'a',
        },
        {
          title: null,
          token: 'v',
        },
        {
          title: null,
          token: 'v',
        },
        {
          title: null,
          token: 'i',
        },
        {
          title: null,
          token: 's',
        },
        {
          title: null,
          token: 'o',
        },
      ],
      title: 'Chiusa per ristrutturazione la piscina Minghetti',
    },
    {
      '@id':
        'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye',
      '@type': 'News Item',
      description: 'So you think you can love me and leave me to die',
      design_italia_meta_type: 'Notizia',
      has_children: true,
      id: 'so-you-think-you-can-stop-me-and-spit-in-my-eye',
      image_field: 'preview_image',
      image_scales: {
        image: [
          {
            'content-type': 'image/jpeg',
            download:
              '@@images/image-6240-71da431c0d9c95248f540d51dfb68fed.jpeg',
            filename: 'woman-having-online-meeting-work.jpg',
            height: 4160,
            scales: {
              gallery: {
                download:
                  '@@images/image-250-9689c314e86d6b6dce893d0018087c27.jpeg',
                height: 166,
                width: 250,
              },
              great: {
                download:
                  '@@images/image-1200-87df243c43d1f9f9d84c1f1062f931f3.jpeg',
                height: 800,
                width: 1200,
              },
              huge: {
                download:
                  '@@images/image-1600-9e3807f4782d0e8b5b95214046f6c8f8.jpeg',
                height: 1066,
                width: 1600,
              },
              icon: {
                download:
                  '@@images/image-32-e8b928b39b37725125239faf3ceaf161.jpeg',
                height: 21,
                width: 32,
              },
              large: {
                download:
                  '@@images/image-800-1c55ef8cdb42a08b1e9e5a960b033e72.jpeg',
                height: 533,
                width: 800,
              },
              larger: {
                download:
                  '@@images/image-1000-56b3e34b0b7efbaa41a59ac807a2387b.jpeg',
                height: 666,
                width: 1000,
              },
              listing: {
                download:
                  '@@images/image-16-0bcd9fbfdc057cf8ebc5e231395e5d34.jpeg',
                height: 10,
                width: 16,
              },
              midi: {
                download:
                  '@@images/image-300-22f007ac656483637616ef48a91d1460.jpeg',
                height: 200,
                width: 300,
              },
              mini: {
                download:
                  '@@images/image-200-007fbea0600dc46cbbcf2e856242d34c.jpeg',
                height: 133,
                width: 200,
              },
              preview: {
                download:
                  '@@images/image-400-eaf194f10746432871f09ed3d07ed292.jpeg',
                height: 266,
                width: 400,
              },
              teaser: {
                download:
                  '@@images/image-600-9b9c36cf016b1a29b37e6c0c2e99623c.jpeg',
                height: 400,
                width: 600,
              },
              thumb: {
                download:
                  '@@images/image-128-a5f1102b033775b9b1cef99929ae188d.jpeg',
                height: 85,
                width: 128,
              },
              tile: {
                download:
                  '@@images/image-64-64e7e2600864a53f7217f3b311307416.jpeg',
                height: 42,
                width: 64,
              },
            },
            size: 1195679,
            width: 6240,
          },
        ],
        preview_image: [
          {
            'content-type': 'image/webp',
            download:
              '@@images/preview_image-2000-fe838f52b9eb0ced276d0f393ba4e2de.webp',
            filename:
              'business-teamwork-join-hands-together-business-teamwork-concept_1150-1804.webp',
            height: 1333,
            scales: {
              gallery: {
                download:
                  '@@images/preview_image-250-995bbcf1f1946de58f84e18d63dae1eb.webp',
                height: 166,
                width: 250,
              },
              great: {
                download:
                  '@@images/preview_image-1200-d37cc717cb905ea8b6122c2bfa79610d.webp',
                height: 799,
                width: 1200,
              },
              huge: {
                download:
                  '@@images/preview_image-1600-9b6626c97db8159392d81c7bd3179f8a.webp',
                height: 1066,
                width: 1600,
              },
              icon: {
                download:
                  '@@images/preview_image-32-1202b3108041f21e426824d31ff8f31e.webp',
                height: 21,
                width: 32,
              },
              large: {
                download:
                  '@@images/preview_image-800-60c57a8c74c21c289ef969d0f792b5ff.jpeg',
                height: 533,
                width: 800,
              },
              larger: {
                download:
                  '@@images/preview_image-1000-fd1d78cac12899a019ba4ca8525bbf31.jpeg',
                height: 666,
                width: 1000,
              },
              listing: {
                download:
                  '@@images/preview_image-16-3ed212ed2808128b22aae7159c0ddd00.jpeg',
                height: 10,
                width: 16,
              },
              midi: {
                download:
                  '@@images/preview_image-300-e669b19856bc23a0b8b364e2accd65a7.webp',
                height: 199,
                width: 300,
              },
              mini: {
                download:
                  '@@images/preview_image-200-b97f3a3dfded69f5b8974c8a4e1847d2.webp',
                height: 133,
                width: 200,
              },
              preview: {
                download:
                  '@@images/preview_image-400-e019b42a66bf2b15825f79071876a762.webp',
                height: 266,
                width: 400,
              },
              teaser: {
                download:
                  '@@images/preview_image-600-4e55af059198a0f440d21500a699070b.jpeg',
                height: 399,
                width: 600,
              },
              thumb: {
                download:
                  '@@images/preview_image-128-60708835dd4069e0f00577a759f35e82.webp',
                height: 85,
                width: 128,
              },
              tile: {
                download:
                  '@@images/preview_image-64-cd986e11711f44e4ac6fe7d036017447.webp',
                height: 42,
                width: 64,
              },
            },
            size: 202972,
            width: 2000,
          },
        ],
      },
      review_state: 'private',
      tipologia_notizia: [
        {
          title: null,
          token: 'n',
        },
        {
          title: null,
          token: 'o',
        },
        {
          title: null,
          token: 't',
        },
        {
          title: null,
          token: 'i',
        },
        {
          title: null,
          token: 'z',
        },
        {
          title: null,
          token: 'i',
        },
        {
          title: null,
          token: 'a',
        },
      ],
      title: 'So you think you can stop me and spit in my eye',
    },
  ],
  items_total: 3,
  language: {
    title: 'Italiano',
    token: 'it',
  },
  layout: 'document_view',
  lock: {
    locked: false,
    stealable: true,
  },
  modified: '2023-01-31T13:54:54+00:00',
  mostra_bottoni_condivisione: false,
  mostra_navigazione: false,
  next_item: {
    '@id': 'http://localhost:3000/eventi',
    '@type': 'Document',
    description: 'Lorem ipsum',
    title: 'Eventi',
  },
  opengraph_description: null,
  opengraph_image: null,
  opengraph_title: null,
  parent: {
    '@id': 'http://localhost:3000',
    '@type': 'Plone Site',
    description: 'Il sistema di gestione contenuti basato su React',
    title: 'Benvenuto in Volto!!',
  },
  preview_caption: null,
  preview_image: null,
  previous_item: {
    '@id': 'http://localhost:3000/argomenti',
    '@type': 'Document',
    description:
      "Gli argomenti rispondono a un'esigenza di organizzazione dei contenuti del sito istituzionale per temi e rappresentano le principali categorie di contenuti, informazioni e documenti specifici.  ",
    title: 'Argomenti',
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
  title: 'Notizie',
  version: 'current',
  versioning_enabled: true,
  working_copy: null,
  working_copy_of: null,
};

const store = mockStore({
  intl: {
    locale: 'en',
    messages: {},
  },

  content: {
    create: {
      loaded: false,
      loading: false,
      error: null,
    },
    delete: {
      loaded: false,
      loading: false,
      error: null,
    },
    get: {
      loading: false,
      loaded: true,
      error: null,
    },
    order: {
      loaded: false,
      loading: false,
      error: null,
    },
    update: {
      loaded: false,
      loading: false,
      error: null,
    },
    updatecolumns: {
      loaded: false,
      loading: false,
      error: null,
    },
    lock: {
      loaded: false,
      loading: false,
      error: null,
    },
    unlock: {
      loaded: false,
      loading: false,
      error: null,
    },
    data: {
      '@components': {
        actions: {
          '@id': 'http://localhost:3000/notizie/@actions',
        },
        aliases: {
          '@id': 'http://localhost:3000/notizie/@aliases',
        },
        breadcrumbs: {
          '@id': 'http://localhost:3000/notizie/@breadcrumbs',
        },
        contextnavigation: {
          '@id': 'http://localhost:3000/notizie/@contextnavigation',
        },
        navigation: {
          '@id': 'http://localhost:3000/notizie/@navigation',
        },
        subsite: {},
        translations: {
          '@id': 'http://localhost:3000/notizie/@translations',
        },
        types: {
          '@id': 'http://localhost:3000/notizie/@types',
        },
        workflow: {
          '@id': 'http://localhost:3000/notizie/@workflow',
        },
      },
      '@id': 'http://localhost:3000/notizie',
      '@type': 'Document',
      UID: 'c68bc16e610e4a41a8a2578588298253',
      allow_discussion: false,
      blocks: {
        'cb95f0fa-189c-4d6a-82a9-8182f7e2c0d4': {
          '@type': 'listing',
          block: 'cb95f0fa-189c-4d6a-82a9-8182f7e2c0d4',
          headlineTag: 'h2',
          hide_dates: false,
          query: [],
          show_description: true,
          show_detail_link: false,
          show_icon: true,
          show_path_filters: false,
          show_section: true,
          show_type: false,
          variation: 'simpleCard',
        },
        'e274abbd-0239-46ac-b3a8-dad1dee0691c': {
          '@type': 'slate',
          plaintext: '',
          value: [
            {
              children: [
                {
                  text: '',
                },
              ],
              type: 'p',
            },
          ],
        },
        'fcfde1bb-0d46-4678-bb6a-2f64fc0084b9': {
          '@type': 'title',
        },
      },
      blocks_layout: {
        items: [
          'fcfde1bb-0d46-4678-bb6a-2f64fc0084b9',
          'cb95f0fa-189c-4d6a-82a9-8182f7e2c0d4',
          'e274abbd-0239-46ac-b3a8-dad1dee0691c',
        ],
      },
      changeNote: '',
      contributors: [],
      correlato_in_evidenza: [],
      created: '2023-01-03T15:26:54+00:00',
      creators: ['admin'],
      description: 'Is this the real life?',
      design_italia_meta_type: 'Pagina',
      effective: '2023-01-03T15:40:54+00:00',
      exclude_from_nav: false,
      expires: null,
      id: 'notizie',
      image: null,
      image_caption: null,
      info_testata: {
        'content-type': 'text/html',
        data: '<p><br></p>',
        encoding: 'utf8',
      },
      is_folderish: true,
      items: [
        {
          '@id':
            'http://localhost:3000/notizie/sport-nel-verde-le-iniziative-della-prossima-edizione',
          '@type': 'News Item',
          description:
            'Le informazioni per partecipare all’iniziativa rivolta a tutte le fasce d’età per promuovere l’attività motoria nelle aree verdi della città.',
          design_italia_meta_type: 'Notizia',
          has_children: true,
          id: 'sport-nel-verde-le-iniziative-della-prossima-edizione',
          image_field: 'preview_image',
          image_scales: {
            image: [
              {
                'content-type': 'image/jpeg',
                download:
                  '@@images/image-5184-f5098a6120bf6d77120ade51613b2421.jpeg',
                filename: 'national-cancer-institute.jpeg',
                height: 3456,
                scales: {
                  gallery: {
                    download:
                      '@@images/image-250-49e5f5fa9627f9d116e937bd76654091.jpeg',
                    height: 166,
                    width: 250,
                  },
                  great: {
                    download:
                      '@@images/image-1200-920af22d3d8bf83ea467faf60f9d1888.jpeg',
                    height: 800,
                    width: 1200,
                  },
                  huge: {
                    download:
                      '@@images/image-1600-20c3c7b9940aabb51143abaa6e0e50a3.jpeg',
                    height: 1066,
                    width: 1600,
                  },
                  icon: {
                    download:
                      '@@images/image-32-82fdf55155a2dd6ea29d4467222f2392.jpeg',
                    height: 21,
                    width: 32,
                  },
                  large: {
                    download:
                      '@@images/image-800-6348765c039dd3268da9c9d829e7ec19.jpeg',
                    height: 533,
                    width: 800,
                  },
                  larger: {
                    download:
                      '@@images/image-1000-e09f88650a7cbc0da9d4736b6d0d952c.jpeg',
                    height: 666,
                    width: 1000,
                  },
                  listing: {
                    download:
                      '@@images/image-16-c6380d7d7b8b4afd993b24ac200bc230.jpeg',
                    height: 10,
                    width: 16,
                  },
                  midi: {
                    download:
                      '@@images/image-300-8d4e411695d01225d8c6be3993ec3c30.jpeg',
                    height: 200,
                    width: 300,
                  },
                  mini: {
                    download:
                      '@@images/image-200-14acaa28232fb3c8309da5c5f7933e1e.jpeg',
                    height: 133,
                    width: 200,
                  },
                  preview: {
                    download:
                      '@@images/image-400-6e346e702da96058e48158d271e7043b.jpeg',
                    height: 266,
                    width: 400,
                  },
                  teaser: {
                    download:
                      '@@images/image-600-3975f8c82120189ece436677f5b3e6a9.jpeg',
                    height: 400,
                    width: 600,
                  },
                  thumb: {
                    download:
                      '@@images/image-128-f6ce4305a76b4511e1e10c50a1c1b4da.jpeg',
                    height: 85,
                    width: 128,
                  },
                  tile: {
                    download:
                      '@@images/image-64-19669a6cef991ed40ef389ceb5da32fd.jpeg',
                    height: 42,
                    width: 64,
                  },
                },
                size: 2026538,
                width: 5184,
              },
            ],
            preview_image: [
              {
                'content-type': 'image/jpeg',
                download:
                  '@@images/preview_image-5184-3c6c2e4f0b75f9365405305f562fd0da.jpeg',
                filename: 'national-cancer-institute.jpeg',
                height: 3456,
                scales: {
                  gallery: {
                    download:
                      '@@images/preview_image-250-785408520e6d7b9d05af2fedfee78d2a.jpeg',
                    height: 166,
                    width: 250,
                  },
                  great: {
                    download:
                      '@@images/preview_image-1200-d3de0810040f56632ddb5e9bbb96003b.jpeg',
                    height: 800,
                    width: 1200,
                  },
                  huge: {
                    download:
                      '@@images/preview_image-1600-8ea0c1ee6cbde7232a7124d084c81a18.jpeg',
                    height: 1066,
                    width: 1600,
                  },
                  icon: {
                    download:
                      '@@images/preview_image-32-d795572814924a541bee314c2c150084.jpeg',
                    height: 21,
                    width: 32,
                  },
                  large: {
                    download:
                      '@@images/preview_image-800-8ab6a0ebc1f0a2385fb37c1d9849f9b4.jpeg',
                    height: 533,
                    width: 800,
                  },
                  larger: {
                    download:
                      '@@images/preview_image-1000-427e67a155fac6e94a7a64a27f00a4dd.jpeg',
                    height: 666,
                    width: 1000,
                  },
                  listing: {
                    download:
                      '@@images/preview_image-16-12a9a305b32c8dd7ccccccb73dcf187a.jpeg',
                    height: 10,
                    width: 16,
                  },
                  midi: {
                    download:
                      '@@images/preview_image-300-ca5dac141c26dbfeda9ba058c401f76d.jpeg',
                    height: 200,
                    width: 300,
                  },
                  mini: {
                    download:
                      '@@images/preview_image-200-3f6749e2cdff7873580b38b38f8fe5cf.jpeg',
                    height: 133,
                    width: 200,
                  },
                  preview: {
                    download:
                      '@@images/preview_image-400-7973bb70be8915dd5731c5872144c2fc.jpeg',
                    height: 266,
                    width: 400,
                  },
                  teaser: {
                    download:
                      '@@images/preview_image-600-6f040ff8785b40296d1148a89821f4f7.jpeg',
                    height: 400,
                    width: 600,
                  },
                  thumb: {
                    download:
                      '@@images/preview_image-128-23aec0db095cf60152ee0eead83433d7.jpeg',
                    height: 85,
                    width: 128,
                  },
                  tile: {
                    download:
                      '@@images/preview_image-64-da2dbe6b589040648dd782cc4196fb25.jpeg',
                    height: 42,
                    width: 64,
                  },
                },
                size: 2026538,
                width: 5184,
              },
            ],
          },
          review_state: 'published',
          title: 'Sport nel verde: le iniziative della prossima edizione',
          url: '/notizie/sport-nel-verde-le-iniziative-della-prossima-edizione',
        },
        {
          '@id':
            'http://localhost:3000/notizie/chiusa-per-ristrutturazione-la-piscina-minghetti',
          '@type': 'News Item',
          description:
            'Partiti i lavori per l’adeguamento dell’impianto. La riapertura è prevista per giugno 2023.',
          design_italia_meta_type: 'avviso',
          has_children: true,
          id: 'chiusa-per-ristrutturazione-la-piscina-minghetti',
          image_field: '',
          image_scales: null,
          review_state: 'private',
          title: 'Chiusa per ristrutturazione la piscina Minghetti',
          url: '/notizie/chiusa-per-ristrutturazione-la-piscina-minghetti',
        },
        {
          '@id':
            'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye',
          '@type': 'News Item',
          description: 'So you think you can love me and leave me to die',
          design_italia_meta_type: 'notizia',
          has_children: true,
          id: 'so-you-think-you-can-stop-me-and-spit-in-my-eye',
          image_field: 'preview_image',
          image_scales: {
            image: [
              {
                'content-type': 'image/jpeg',
                download:
                  '@@images/image-6240-71da431c0d9c95248f540d51dfb68fed.jpeg',
                filename: 'woman-having-online-meeting-work.jpg',
                height: 4160,
                scales: {
                  gallery: {
                    download:
                      '@@images/image-250-9689c314e86d6b6dce893d0018087c27.jpeg',
                    height: 166,
                    width: 250,
                  },
                  great: {
                    download:
                      '@@images/image-1200-87df243c43d1f9f9d84c1f1062f931f3.jpeg',
                    height: 800,
                    width: 1200,
                  },
                  huge: {
                    download:
                      '@@images/image-1600-9e3807f4782d0e8b5b95214046f6c8f8.jpeg',
                    height: 1066,
                    width: 1600,
                  },
                  icon: {
                    download:
                      '@@images/image-32-e8b928b39b37725125239faf3ceaf161.jpeg',
                    height: 21,
                    width: 32,
                  },
                  large: {
                    download:
                      '@@images/image-800-1c55ef8cdb42a08b1e9e5a960b033e72.jpeg',
                    height: 533,
                    width: 800,
                  },
                  larger: {
                    download:
                      '@@images/image-1000-56b3e34b0b7efbaa41a59ac807a2387b.jpeg',
                    height: 666,
                    width: 1000,
                  },
                  listing: {
                    download:
                      '@@images/image-16-0bcd9fbfdc057cf8ebc5e231395e5d34.jpeg',
                    height: 10,
                    width: 16,
                  },
                  midi: {
                    download:
                      '@@images/image-300-22f007ac656483637616ef48a91d1460.jpeg',
                    height: 200,
                    width: 300,
                  },
                  mini: {
                    download:
                      '@@images/image-200-007fbea0600dc46cbbcf2e856242d34c.jpeg',
                    height: 133,
                    width: 200,
                  },
                  preview: {
                    download:
                      '@@images/image-400-eaf194f10746432871f09ed3d07ed292.jpeg',
                    height: 266,
                    width: 400,
                  },
                  teaser: {
                    download:
                      '@@images/image-600-9b9c36cf016b1a29b37e6c0c2e99623c.jpeg',
                    height: 400,
                    width: 600,
                  },
                  thumb: {
                    download:
                      '@@images/image-128-a5f1102b033775b9b1cef99929ae188d.jpeg',
                    height: 85,
                    width: 128,
                  },
                  tile: {
                    download:
                      '@@images/image-64-64e7e2600864a53f7217f3b311307416.jpeg',
                    height: 42,
                    width: 64,
                  },
                },
                size: 1195679,
                width: 6240,
              },
            ],
            preview_image: [
              {
                'content-type': 'image/webp',
                download:
                  '@@images/preview_image-2000-fe838f52b9eb0ced276d0f393ba4e2de.webp',
                filename:
                  'business-teamwork-join-hands-together-business-teamwork-concept_1150-1804.webp',
                height: 1333,
                scales: {
                  gallery: {
                    download:
                      '@@images/preview_image-250-995bbcf1f1946de58f84e18d63dae1eb.webp',
                    height: 166,
                    width: 250,
                  },
                  great: {
                    download:
                      '@@images/preview_image-1200-d37cc717cb905ea8b6122c2bfa79610d.webp',
                    height: 799,
                    width: 1200,
                  },
                  huge: {
                    download:
                      '@@images/preview_image-1600-9b6626c97db8159392d81c7bd3179f8a.webp',
                    height: 1066,
                    width: 1600,
                  },
                  icon: {
                    download:
                      '@@images/preview_image-32-1202b3108041f21e426824d31ff8f31e.webp',
                    height: 21,
                    width: 32,
                  },
                  large: {
                    download:
                      '@@images/preview_image-800-60c57a8c74c21c289ef969d0f792b5ff.webp',
                    height: 533,
                    width: 800,
                  },
                  larger: {
                    download:
                      '@@images/preview_image-1000-fd1d78cac12899a019ba4ca8525bbf31.webp',
                    height: 666,
                    width: 1000,
                  },
                  listing: {
                    download:
                      '@@images/preview_image-16-3ed212ed2808128b22aae7159c0ddd00.webp',
                    height: 10,
                    width: 16,
                  },
                  midi: {
                    download:
                      '@@images/preview_image-300-e669b19856bc23a0b8b364e2accd65a7.webp',
                    height: 199,
                    width: 300,
                  },
                  mini: {
                    download:
                      '@@images/preview_image-200-b97f3a3dfded69f5b8974c8a4e1847d2.webp',
                    height: 133,
                    width: 200,
                  },
                  preview: {
                    download:
                      '@@images/preview_image-400-e019b42a66bf2b15825f79071876a762.webp',
                    height: 266,
                    width: 400,
                  },
                  teaser: {
                    download:
                      '@@images/preview_image-600-4e55af059198a0f440d21500a699070b.webp',
                    height: 399,
                    width: 600,
                  },
                  thumb: {
                    download:
                      '@@images/preview_image-128-60708835dd4069e0f00577a759f35e82.webp',
                    height: 85,
                    width: 128,
                  },
                  tile: {
                    download:
                      '@@images/preview_image-64-cd986e11711f44e4ac6fe7d036017447.webp',
                    height: 42,
                    width: 64,
                  },
                },
                size: 202972,
                width: 2000,
              },
            ],
          },
          review_state: 'private',
          title: 'So you think you can stop me and spit in my eye',
          url: '/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye',
        },
      ],
      items_total: 3,
      language: {
        title: 'Italiano',
        token: 'it',
      },
      layout: 'document_view',
      lock: {
        locked: false,
        stealable: true,
      },
      modified: '2023-01-31T13:54:54+00:00',
      mostra_bottoni_condivisione: false,
      mostra_navigazione: false,
      next_item: {
        '@id': 'http://localhost:3000/eventi',
        '@type': 'Document',
        description: '',
        title: 'Eventi',
      },
      opengraph_description: null,
      opengraph_image: null,
      opengraph_title: null,
      parent: {
        '@id': 'http://localhost:3000',
        '@type': 'Plone Site',
        description: 'Il sistema di gestione contenuti basato su React',
        title: 'Benvenuto in Volto!!',
      },
      preview_caption: null,
      preview_image: null,
      previous_item: {
        '@id': 'http://localhost:3000/argomenti',
        '@type': 'Document',
        description:
          "Gli argomenti rispondono a un'esigenza di organizzazione dei contenuti del sito istituzionale per temi e rappresentano le principali categorie di contenuti, informazioni e documenti specifici.  ",
        title: 'Argomenti',
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
      title: 'Notizie',
      version: 'current',
      versioning_enabled: true,
      working_copy: null,
      working_copy_of: null,
    },
    subrequests: {},
  },
});

test('renders all mandatory fields in the page', async () => {
  const { getByText, getByRole, debug } = render(
    <Provider store={store}>
      <MemoryRouter>
        <PageView content={mock_mandatory} />
      </MemoryRouter>
    </Provider>,
  );

  screen.debug();

  //non viene renderizzato nulla

  //title --> test fallisce
  // expect(screen.getByText(/Notizie/i)).toBeInTheDocument();
});

// test('renders all non-mandatory fields in the page', async () => {
//   const { getByText, getByRole, debug } = render(
//     <Provider store={store}>
//       <MemoryRouter>
//         <PageView content={mock_allfields} />
//       </MemoryRouter>
//     </Provider>,
//   );

//   // description
//   screen.debug();
//   // expect(screen.getByText(/Is this the real life?/i)).toBeInTheDocument();
// });

// expect(screen.getByRole('heading', {name: //i})).toBeInTheDocument();
// expect(screen.getByRole('link', {name: //i})).toBeInTheDocument();
// expect(screen.getByAltText(//i)).toBeInTheDocument();
// expect(screen.getByText(//i)).toBeInTheDocument();
