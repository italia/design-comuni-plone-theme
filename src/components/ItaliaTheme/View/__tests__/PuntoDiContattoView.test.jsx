import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PuntoDiContattoView from '../PuntoDiContattoView/PuntoDiContattoView';
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
      '@id':
        'http://localhost:3000/amministrazione/punti-di-contatto/is-this-the-real-life/@actions',
    },
    aliases: {
      '@id':
        'http://localhost:3000/amministrazione/punti-di-contatto/is-this-the-real-life/@aliases',
    },
    breadcrumbs: {
      '@id':
        'http://localhost:3000/amministrazione/punti-di-contatto/is-this-the-real-life/@breadcrumbs',
    },
    contextnavigation: {
      '@id':
        'http://localhost:3000/amministrazione/punti-di-contatto/is-this-the-real-life/@contextnavigation',
    },
    navigation: {
      '@id':
        'http://localhost:3000/amministrazione/punti-di-contatto/is-this-the-real-life/@navigation',
    },
    subsite: {},
    translations: {
      '@id':
        'http://localhost:3000/amministrazione/punti-di-contatto/is-this-the-real-life/@translations',
    },
    types: {
      '@id':
        'http://localhost:3000/amministrazione/punti-di-contatto/is-this-the-real-life/@types',
    },
    workflow: {
      '@id':
        'http://localhost:3000/amministrazione/punti-di-contatto/is-this-the-real-life/@workflow',
    },
  },
  '@id':
    'http://localhost:3000/amministrazione/punti-di-contatto/is-this-the-real-life',
  '@type': 'PuntoDiContatto',
  UID: '541fa38e47764d10bc257d31c5be0ccd',
  title: 'Is this the real life',
  value_punto_contatto: [
    {
      pdc_type: 'email',
      pdc_value: 'freddymercury@gmail.com',
    },
  ],
};

const mock_allfields = {
  ...mock_mandatory,
  allow_discussion: false,
  changeNote: '',
  contributors: [],
  created: '2023-01-31T14:33:05+00:00',
  creators: ['admin'],
  description: 'Is this just fantasy',
  design_italia_meta_type: 'Punto di Contatto',
  effective: null,
  exclude_from_nav: false,
  expires: null,
  id: 'is-this-the-real-life',
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
  luoghi_correlati: [
    {
      '@id': 'http://localhost:3000/vivi-il-comune/luoghi/prova',
      '@type': 'Venue',
      circoscrizione: null,
      city: 'Roma',
      country: '380',
      description: 'Lorem ipsum',
      design_italia_meta_type: 'Luogo',
      email: null,
      fax: null,
      geolocation: {
        latitude: 41.8337833,
        longitude: 12.4677863,
      },
      has_children: true,
      id: 'prova',
      image_field: null,
      image_scales: null,
      nome_sede: null,
      orario_pubblico: {
        blocks: {
          '0cba7e98-73ee-41c7-9260-8dbb4af725d4': {
            '@type': 'text',
          },
        },
        blocks_layout: {
          items: ['0cba7e98-73ee-41c7-9260-8dbb4af725d4'],
        },
      },
      pec: null,
      quartiere: null,
      review_state: 'private',
      riferimento_mail_struttura: null,
      riferimento_pec_struttura: null,
      riferimento_telefonico_struttura: null,
      street: 'Via Liszt, 21',
      telefono: null,
      tipologia_luogo: [
        {
          title: 'Architettura Militare e fortificata␟Roccaforte',
          token: 'roccaforte',
        },
      ],
      title: 'Prova',
      web: null,
      zip_code: '00144',
    },
  ],
  modified: '2023-01-31T14:43:38+00:00',
  next_item: {},
  opengraph_description: null,
  opengraph_image: null,
  opengraph_title: null,
  parent: {
    '@id': 'http://localhost:3000/amministrazione/punti-di-contatto',
    '@type': 'Document',
    description: '',
    design_italia_meta_type: 'Pagina',
    has_children: true,
    id: 'punti-di-contatto',
    image_field: null,
    image_scales: null,
    review_state: 'private',
    title: 'Punti di Contatto',
  },
  persona: [
    {
      '@id':
        'http://localhost:3000/amministrazione/personale-amministrativo/gabriele-bianchi',
      '@type': 'Persona',
      description: 'Assessore allo sport',
      design_italia_meta_type: 'Persona pubblica',
      effective: null,
      has_children: true,
      id: 'gabriele-bianchi',
      image_field: 'foto_persona',
      image_scales: {
        foto_persona: [
          {
            'content-type': 'image/jpeg',
            download:
              'http://localhost:3000/amministrazione/personale-amministrativo/gabriele-bianchi/@@images/foto_persona-5184-a0948b7d7c2e6ec2944ea4915f5d0c4f.jpeg',
            filename: 'national-cancer-institute.jpeg',
            height: 3456,
            scales: {
              gallery: {
                download:
                  'http://localhost:3000/amministrazione/personale-amministrativo/gabriele-bianchi/@@images/foto_persona-250-d009f9ee6746d6ada973aeb0e99437eb.jpeg',
                height: 166,
                width: 250,
              },
              great: {
                download:
                  'http://localhost:3000/amministrazione/personale-amministrativo/gabriele-bianchi/@@images/foto_persona-1200-db22dc3240b650dc494ea6412e5c4e8c.jpeg',
                height: 800,
                width: 1200,
              },
              huge: {
                download:
                  'http://localhost:3000/amministrazione/personale-amministrativo/gabriele-bianchi/@@images/foto_persona-1600-1a281d1182b9422a0211cb7cc5e156f2.jpeg',
                height: 1066,
                width: 1600,
              },
              icon: {
                download:
                  'http://localhost:3000/amministrazione/personale-amministrativo/gabriele-bianchi/@@images/foto_persona-32-92c4797637f83c00ac27cba86b37cff5.jpeg',
                height: 21,
                width: 32,
              },
              large: {
                download:
                  'http://localhost:3000/amministrazione/personale-amministrativo/gabriele-bianchi/@@images/foto_persona-800-d85755d485e32d0a1deba313de75711b.jpeg',
                height: 533,
                width: 800,
              },
              larger: {
                download:
                  'http://localhost:3000/amministrazione/personale-amministrativo/gabriele-bianchi/@@images/foto_persona-1000-e88f96e2a0ed91917f9d728caf2d4406.jpeg',
                height: 666,
                width: 1000,
              },
              listing: {
                download:
                  'http://localhost:3000/amministrazione/personale-amministrativo/gabriele-bianchi/@@images/foto_persona-16-37154ce0fea872870103d5fae1a29f61.jpeg',
                height: 10,
                width: 16,
              },
              midi: {
                download:
                  'http://localhost:3000/amministrazione/personale-amministrativo/gabriele-bianchi/@@images/foto_persona-300-458fd003c0d1576f66035dbc1e8ab87e.jpeg',
                height: 200,
                width: 300,
              },
              mini: {
                download:
                  'http://localhost:3000/amministrazione/personale-amministrativo/gabriele-bianchi/@@images/foto_persona-200-830b17e7b02da4853b079bc80c1c4e34.jpeg',
                height: 133,
                width: 200,
              },
              preview: {
                download:
                  'http://localhost:3000/amministrazione/personale-amministrativo/gabriele-bianchi/@@images/foto_persona-400-f9e5f2efc8120f6e3351536b3f287196.jpeg',
                height: 266,
                width: 400,
              },
              teaser: {
                download:
                  'http://localhost:3000/amministrazione/personale-amministrativo/gabriele-bianchi/@@images/foto_persona-600-001ddce8166a4c8bb2839212f9fb2430.jpeg',
                height: 400,
                width: 600,
              },
              thumb: {
                download:
                  'http://localhost:3000/amministrazione/personale-amministrativo/gabriele-bianchi/@@images/foto_persona-128-d97983d9975606ed88ec6d2029e10ea9.jpeg',
                height: 85,
                width: 128,
              },
              tile: {
                download:
                  'http://localhost:3000/amministrazione/personale-amministrativo/gabriele-bianchi/@@images/foto_persona-64-f7765a9f78ff6e0725ebee3534a782c8.jpeg',
                height: 42,
                width: 64,
              },
            },
            size: 2026538,
            width: 5184,
          },
        ],
      },
      incarichi: 'Incarico di Gabriele Bianchi',
      review_state: 'private',
      title: 'Gabriele Bianchi',
    },
  ],
  previous_item: {},
  relatedItems: [
    {
      '@id': 'http://localhost:3000/amministrazione/aree-di-competenza',
      '@type': 'Document',
      description: '',
      design_italia_meta_type: 'Pagina',
      effective: null,
      has_children: true,
      id: 'aree-di-competenza',
      image_field: null,
      image_scales: null,
      review_state: 'private',
      title: 'Aree di competenza',
    },
  ],
  related_news: [
    {
      '@id':
        'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye',
      '@type': 'News Item',
      description: 'So you think you can love me and leave me to die',
      design_italia_meta_type: 'Notizia',
      effective: '2023-01-26T12:28:00+00:00',
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
      typology: 'notizia',
    },
    {
      '@id':
        'http://localhost:3000/notizie/sport-nel-verde-le-iniziative-della-prossima-edizione',
      '@type': 'News Item',
      description:
        'Le informazioni per partecipare all’iniziativa rivolta a tutte le fasce d’età per promuovere l’attività motoria nelle aree verdi della città.',
      design_italia_meta_type: null,
      effective: '2022-05-18T16:29:00+00:00',
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
      typology: 'Notizia',
    },
    {
      '@id': 'http://localhost:3000/novita/notizie/osservatorio-sul-turismo',
      '@type': 'News Item',
      description:
        'Donec in consequat nunc. Duis semper fermentum lacus, ac condimentum justo auctor a. Nam erat erat, porta vel pharetra in, ullamcorper vel turpis.',
      design_italia_meta_type: null,
      effective: '2019-12-03T11:09:00+00:00',
      has_children: true,
      id: 'osservatorio-sul-turismo',
      image_field: 'preview_image',
      image_scales: {
        image: [
          {
            'content-type': 'image/png',
            download:
              '@@images/image-1156-23a6d691013f38eef4da7c9070b860d5.png',
            filename: 'foto-ospedale.png',
            height: 940,
            scales: {
              gallery: {
                download:
                  '@@images/image-250-3f30dc5a4b324c2c81c729af40b7946a.png',
                height: 203,
                width: 250,
              },
              icon: {
                download:
                  '@@images/image-32-26f7b27a252798f783b662aa7e1cdb63.png',
                height: 26,
                width: 32,
              },
              large: {
                download:
                  '@@images/image-800-1b51f5a02768c18c02eb317738eee4a2.png',
                height: 650,
                width: 800,
              },
              larger: {
                download:
                  '@@images/image-1000-cd7ea607a71d3ffa94c5b612317bcfc2.png',
                height: 813,
                width: 1000,
              },
              listing: {
                download:
                  '@@images/image-16-45bfce0601794216b233cbf5615d4d1d.png',
                height: 13,
                width: 16,
              },
              midi: {
                download:
                  '@@images/image-300-3800583f32decd4246ffa329d0d934b6.png',
                height: 243,
                width: 300,
              },
              mini: {
                download:
                  '@@images/image-200-4592c49fa47d209224518c591edcd956.png',
                height: 162,
                width: 200,
              },
              preview: {
                download:
                  '@@images/image-400-948d0d5f2676802a905c31469aa0744d.png',
                height: 325,
                width: 400,
              },
              teaser: {
                download:
                  '@@images/image-600-8fe093861a4edcbf0ff7b79220b5e838.png',
                height: 487,
                width: 600,
              },
              thumb: {
                download:
                  '@@images/image-128-41b926e6735616e649d55d747c9c36a2.png',
                height: 104,
                width: 128,
              },
              tile: {
                download:
                  '@@images/image-64-aae52bf50eb77e0e934256a6974037a0.png',
                height: 52,
                width: 64,
              },
            },
            size: 1296882,
            width: 1156,
          },
        ],
        preview_image: [
          {
            'content-type': 'image/png',
            download:
              '@@images/preview_image-1156-ec9dea8625d8a5dfeb472feeeaf2b569.png',
            filename: 'foto-ospedale.png',
            height: 940,
            scales: {
              gallery: {
                download:
                  '@@images/preview_image-250-4b13c28cf0aca436a602cd984d040a69.png',
                height: 203,
                width: 250,
              },
              icon: {
                download:
                  '@@images/preview_image-32-cccba83547d44ee65113371774a6e9b2.png',
                height: 26,
                width: 32,
              },
              large: {
                download:
                  '@@images/preview_image-800-1c9b8e39510a6ef2bbe0806cc7c1818d.png',
                height: 650,
                width: 800,
              },
              larger: {
                download:
                  '@@images/preview_image-1000-be8bb924f3892cd2319c2e8a4503e850.png',
                height: 813,
                width: 1000,
              },
              listing: {
                download:
                  '@@images/preview_image-16-d93ca5f96a5a3c8a554475e267ea332e.png',
                height: 13,
                width: 16,
              },
              midi: {
                download:
                  '@@images/preview_image-300-b3daa8b10d5c2edf34e0378e811fc002.png',
                height: 243,
                width: 300,
              },
              mini: {
                download:
                  '@@images/preview_image-200-1e874d5503c99c483643f1ef72e02dac.png',
                height: 162,
                width: 200,
              },
              preview: {
                download:
                  '@@images/preview_image-400-27fb29056f75dbdab8252011dc243cd1.png',
                height: 325,
                width: 400,
              },
              teaser: {
                download:
                  '@@images/preview_image-600-967d14e77d8e5293d36c32ed24d2f908.png',
                height: 487,
                width: 600,
              },
              thumb: {
                download:
                  '@@images/preview_image-128-bcfbd8ee03a1e56a79ce1e557baec9ac.png',
                height: 104,
                width: 128,
              },
              tile: {
                download:
                  '@@images/preview_image-64-519a94460297b1ab1f06411fcec19842.png',
                height: 52,
                width: 64,
              },
            },
            size: 1296882,
            width: 1156,
          },
        ],
      },
      review_state: 'private',
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
      title: 'Osservatorio sul turismo',
      typology: 'Notizia',
    },
  ],
  review_state: 'private',
  rights: '',
  seo_canonical_url: null,
  seo_description: null,
  seo_noindex: null,
  seo_title: null,
  strutture_correlate: [
    {
      '@id':
        'http://localhost:3000/amministrazione/uffici/gestione-impianti-sportivi',
      '@type': 'UnitaOrganizzativa',
      address: '',
      circoscrizione: '',
      city: '',
      contact_info: [
        {
          '@id':
            'http://localhost:3000/amministrazione/punti-di-contatto/is-this-the-real-life',
          '@type': 'PuntoDiContatto',
          description: 'Is this just fantasy',
          design_italia_meta_type: 'Punto di Contatto',
          has_children: false,
          id: 'is-this-the-real-life',
          image_field: null,
          image_scales: null,
          review_state: 'private',
          title: 'Is this the real life',
          value_punto_contatto: [
            {
              pdc_type: 'email',
              pdc_value: 'freddymercury@gmail.com',
            },
          ],
        },
      ],
      description: 'Prova prova prova',
      design_italia_meta_type: 'Unita Organizzativa',
      geolocation: {
        latitude: 0,
        longitude: 0,
      },
      has_children: true,
      id: 'gestione-impianti-sportivi',
      image_field: null,
      image_scales: null,
      nome_sede: '',
      quartiere: '',
      review_state: 'private',
      street: 'Via Dei Transiti 21',
      tipologia_organizzazione: {
        title: 'Struttura amministrativa',
        token: 'struttura_amministrativa',
      },
      title: 'Gestione impianti sportivi',
      zip_code: '50302',
    },
    {
      '@id': 'http://localhost:3000/amministrazione/uffici/giunta-e-consiglio',
      '@type': 'UnitaOrganizzativa',
      address: '',
      circoscrizione: '',
      city: '',
      contact_info: [
        {
          '@id':
            'http://localhost:3000/amministrazione/punti-di-contatto/is-this-the-real-life',
          '@type': 'PuntoDiContatto',
          description: 'Is this just fantasy',
          design_italia_meta_type: 'Punto di Contatto',
          has_children: false,
          id: 'is-this-the-real-life',
          image_field: null,
          image_scales: null,
          review_state: 'private',
          title: 'Is this the real life',
          value_punto_contatto: [
            {
              pdc_type: 'email',
              pdc_value: 'freddymercury@gmail.com',
            },
          ],
        },
      ],
      description: 'Pierced through the heart but never killed',
      design_italia_meta_type: 'Unita Organizzativa',
      geolocation: {
        latitude: 0,
        longitude: 0,
      },
      has_children: true,
      id: 'giunta-e-consiglio',
      image_field: null,
      image_scales: null,
      nome_sede: '',
      quartiere: '',
      review_state: 'private',
      street: '',
      tipologia_organizzazione: {
        title: 'Struttura amministrativa',
        token: 'struttura_amministrativa',
      },
      title: 'Giunta e consiglio',
      zip_code: '',
    },
    {
      '@id':
        'http://localhost:3000/amministrazione/enti-e-fondazioni/im-just-a-poor-boy',
      '@type': 'UnitaOrganizzativa',
      address: '',
      circoscrizione: 'No, we will not let you go',
      city: 'will you let me go',
      contact_info: [
        {
          '@id':
            'http://localhost:3000/amministrazione/punti-di-contatto/is-this-the-real-life',
          '@type': 'PuntoDiContatto',
          description: 'Is this just fantasy',
          design_italia_meta_type: 'Punto di Contatto',
          has_children: false,
          id: 'is-this-the-real-life',
          image_field: null,
          image_scales: null,
          review_state: 'private',
          title: 'Is this the real life',
          value_punto_contatto: [
            {
              pdc_type: 'email',
              pdc_value: 'freddymercury@gmail.com',
            },
          ],
        },
      ],
      description: 'Nobody loves me',
      design_italia_meta_type: 'Unita Organizzativa',
      geolocation: {
        latitude: 0,
        longitude: 0,
      },
      has_children: true,
      id: 'im-just-a-poor-boy',
      image_field: null,
      image_scales: null,
      nome_sede: 'Spare him his life from this monstrosity',
      quartiere: 'Bismillah',
      review_state: 'private',
      street: 'Easy come',
      tipologia_organizzazione: {
        title: 'Struttura amministrativa',
        token: 'struttura_amministrativa',
      },
      title: "I'm just a poor boy",
      zip_code: 'Easy go',
    },
  ],
  subjects: [],
  value_punto_contatto: [
    {
      pdc_type: 'email',
      pdc_value: 'freddymercury@gmail.com',
    },
  ],
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
    subrequests: {
      'generic_card_/amministrazione/aree-di-competenza': {
        loading: false,
        loaded: true,
        error: null,
        data: {
          '@components': {
            actions: {
              '@id':
                'http://localhost:3000/amministrazione/aree-di-competenza/@actions',
            },
            aliases: {
              '@id':
                'http://localhost:3000/amministrazione/aree-di-competenza/@aliases',
            },
            breadcrumbs: {
              '@id':
                'http://localhost:3000/amministrazione/aree-di-competenza/@breadcrumbs',
            },
            contextnavigation: {
              '@id':
                'http://localhost:3000/amministrazione/aree-di-competenza/@contextnavigation',
            },
            navigation: {
              '@id':
                'http://localhost:3000/amministrazione/aree-di-competenza/@navigation',
            },
            subsite: {},
            translations: {
              '@id':
                'http://localhost:3000/amministrazione/aree-di-competenza/@translations',
            },
            types: {
              '@id':
                'http://localhost:3000/amministrazione/aree-di-competenza/@types',
            },
            workflow: {
              '@id':
                'http://localhost:3000/amministrazione/aree-di-competenza/@workflow',
            },
          },
          '@id': 'http://localhost:3000/amministrazione/aree-di-competenza',
          '@type': 'Document',
          UID: '4c2bca0d91e0485aa144c6a4ac5f2edf',
          allow_discussion: false,
          blocks: {
            '7a5772b2-4894-406a-883e-60e036c48bca': {
              '@type': 'text',
            },
            'aa14d99c-4f53-4adc-b825-0e47caa5e485': {
              '@type': 'title',
            },
          },
          blocks_layout: {
            items: [
              'aa14d99c-4f53-4adc-b825-0e47caa5e485',
              '7a5772b2-4894-406a-883e-60e036c48bca',
            ],
          },
          changeNote: '',
          contributors: [],
          correlato_in_evidenza: [],
          created: '2023-01-03T16:24:55+00:00',
          creators: ['admin'],
          description: '',
          design_italia_meta_type: 'Pagina',
          effective: null,
          exclude_from_nav: false,
          expires: null,
          id: 'aree-di-competenza',
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
                'http://localhost:3000/amministrazione/aree-di-competenza/area-impiantistica-sportiva-e-manifestazioni-sportive',
              '@type': 'UnitaOrganizzativa',
              description: 'Dirigente Arch. M. Alessandra Verdi',
              design_italia_meta_type: 'Unita Organizzativa',
              has_children: true,
              id: 'area-impiantistica-sportiva-e-manifestazioni-sportive',
              image_field: '',
              image_scales: null,
              review_state: 'private',
              title: 'Area impiantistica sportiva e manifestazioni sportive',
              url: '/amministrazione/aree-di-competenza/area-impiantistica-sportiva-e-manifestazioni-sportive',
            },
          ],
          items_total: 1,
          language: {
            title: 'Italiano',
            token: 'it',
          },
          layout: 'document_view',
          lock: {
            locked: false,
            stealable: true,
          },
          modified: '2023-01-03T16:32:16+00:00',
          mostra_bottoni_condivisione: false,
          mostra_navigazione: false,
          next_item: {
            '@id': 'http://localhost:3000/amministrazione/incarichi',
            '@type': 'Document',
            description: '',
            title: 'Incarichi',
          },
          opengraph_description: null,
          opengraph_image: null,
          opengraph_title: null,
          parent: {
            '@id': 'http://localhost:3000/amministrazione',
            '@type': 'Document',
            description:
              'Tutte le informazioni sulla struttura amministrativa del Comune. Scopri gli organi politici, gli uffici e il personale e consulta i documenti pubblici, le statistiche e i bandi di gara.',
            design_italia_meta_type: 'Pagina',
            has_children: true,
            id: 'amministrazione',
            image_field: null,
            image_scales: null,
            review_state: 'published',
            title: 'Amministrazione',
          },
          preview_caption: null,
          preview_image: null,
          previous_item: {
            '@id': 'http://localhost:3000/amministrazione/luoghi',
            '@type': 'Document',
            description: '',
            title: 'Luoghi',
          },
          relatedItems: [],
          review_state: 'private',
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
          title: 'Aree di competenza',
          version: 'current',
          versioning_enabled: true,
          working_copy: null,
          working_copy_of: null,
        },
      },
    },
  },
});

test('renders all mandatory fields in the page', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <PuntoDiContattoView content={mock_mandatory} />
      </MemoryRouter>
    </Provider>,
  );

  //title
  expect(
    screen.getByRole('heading', { name: /Is this the real life/i }),
  ).toBeInTheDocument();

  //value punto di contatto
  expect(
    screen.getByRole('heading', { name: /Contatti/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: /freddymercury@gmail.com/i }),
  ).toBeInTheDocument();
});

test('renders all non-mandatory fields in the page', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <PuntoDiContattoView content={mock_allfields} />
      </MemoryRouter>
    </Provider>,
  );

  //descrizione
  expect(screen.getByText(/Is this just fantasy/i)).toBeInTheDocument();

  //persona
  expect(screen.getByRole('heading', { name: /Persona/i })).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: /Gabriele Bianchi/i }),
  ).toBeInTheDocument();

  //strutture collegate
  expect(screen.getByRole('heading', { name: /Persona/i })).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: /Gabriele Bianchi/i }),
  ).toBeInTheDocument();

  //contenuti correlati
  expect(
    screen.getByRole('heading', { name: /Contenuti correlati/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: /Aree di competenza/i }),
  ).toBeInTheDocument();
});

test('renders relateed fields', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <PuntoDiContattoView content={mock_allfields} />
      </MemoryRouter>
    </Provider>,
  );

  // strutture correlate
  mock_allfields.strutture_correlate?.length > 0 &&
    expect(
      screen.getByRole('heading', { name: /Strutture correlate/i }),
    ).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: /Gestione impianti sportivi/i }),
  ).toBeInTheDocument();

  mock_allfields.servizi_correlati?.length > 0 &&
    expect(
      screen.getByRole('heading', { name: /Servizi correlati/i }),
    ).toBeInTheDocument();

  mock_allfields.eventi_correlati?.length > 0 &&
    expect(
      screen.getByRole('heading', { name: /Eventi correlati/i }),
    ).toBeInTheDocument();

  mock_allfields.luoghi_correlati?.length > 0 &&
    expect(
      screen.getByRole('heading', { name: /Luoghi correlati/i }),
    ).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Prova/i })).toBeInTheDocument();

  mock_allfields.persone_correlate?.length > 0 &&
    expect(
      screen.getByRole('heading', { name: /Persone correlate/i }),
    ).toBeInTheDocument();
});
