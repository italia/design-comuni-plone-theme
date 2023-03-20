import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UOView from '../UOView/UOView';
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
  '@id':
    'http://localhost:3000/amministrazione/enti-e-fondazioni/im-just-a-poor-boy',
  '@type': 'UnitaOrganizzativa',
  UID: '7c99d048364b4166b1eb56832ca7542e',
  competenze: {
    blocks: {
      '6d932632-7966-47d0-941c-96fc6fcdaf30': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: 'e0b08',
              text: "He's just a poor boy",
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['6d932632-7966-47d0-941c-96fc6fcdaf30'],
    },
  },
  contact_info: [
    {
      '@id':
        'http://localhost:3000/amministrazione/punti-di-contatto/is-this-the-real-life',
      '@type': 'PuntoDiContatto',
      description: 'Is this just fantasy',
      design_italia_meta_type: 'Punto di Contatto',
      effective: null,
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
  items: [],
  persone_struttura: [
    {
      '@id':
        'http://localhost:3000/amministrazione/personale-amministrativo/valerio-alfio-boi-1',
      '@type': 'Persona',
      description: '',
      design_italia_meta_type: 'Persona pubblica',
      effective: null,
      has_children: true,
      id: 'valerio-alfio-boi-1',
      image_field: 'foto_persona',
      image_scales: {
        foto_persona: [null],
      },
      incarichi: 'Incarico di Valerio Alfio Boi',
      review_state: 'private',
      title: 'Valerio Alfio Boi',
    },
  ],
  sede: [
    {
      '@id': 'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody',
      '@type': 'Venue',
      circoscrizione: null,
      city: 'Roma',
      country: '380',
      description: 'Is this the real life?',
      design_italia_meta_type: 'Luogo',
      effective: null,
      email: null,
      fax: null,
      geolocation: {
        latitude: 41.8337833,
        longitude: 12.4677863,
      },
      has_children: true,
      id: 'bohemian-rhapsody',
      image_field: null,
      image_scales: null,
      nome_sede: null,
      orario_pubblico: {
        blocks: {},
        blocks_layout: {
          items: [],
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
      title: 'Bohemian Rhapsody',
      web: null,
      zip_code: '00144',
    },
  ],
  tipologia_organizzazione: {
    title: 'Struttura amministrativa',
    token: 'struttura_amministrativa',
  },
  title: "I'm just a poor boy",
};

const mock_allfields = {
  ...mock_mandatory,
  '@components': {
    actions: {
      '@id':
        'http://localhost:3000/amministrazione/enti-e-fondazioni/im-just-a-poor-boy/@actions',
    },
    aliases: {
      '@id':
        'http://localhost:3000/amministrazione/enti-e-fondazioni/im-just-a-poor-boy/@aliases',
    },
    breadcrumbs: {
      '@id':
        'http://localhost:3000/amministrazione/enti-e-fondazioni/im-just-a-poor-boy/@breadcrumbs',
    },
    contextnavigation: {
      '@id':
        'http://localhost:3000/amministrazione/enti-e-fondazioni/im-just-a-poor-boy/@contextnavigation',
    },
    navigation: {
      '@id':
        'http://localhost:3000/amministrazione/enti-e-fondazioni/im-just-a-poor-boy/@navigation',
    },
    subsite: {},
    translations: {
      '@id':
        'http://localhost:3000/amministrazione/enti-e-fondazioni/im-just-a-poor-boy/@translations',
    },
    types: {
      '@id':
        'http://localhost:3000/amministrazione/enti-e-fondazioni/im-just-a-poor-boy/@types',
    },
    workflow: {
      '@id':
        'http://localhost:3000/amministrazione/enti-e-fondazioni/im-just-a-poor-boy/@workflow',
    },
  },
  '@id':
    'http://localhost:3000/amministrazione/enti-e-fondazioni/im-just-a-poor-boy',
  '@type': 'UnitaOrganizzativa',
  UID: '7c99d048364b4166b1eb56832ca7542e',
  allow_discussion: false,
  assessore_riferimento: [
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
  changeNote: '',
  circoscrizione: 'No, we will not let you go',
  city: 'will you let me go',
  contributors: [],
  correlato_in_evidenza: [
    {
      '@id':
        'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye',
      '@type': 'News Item',
      description: 'So you think you can love me and leave me to die',
      design_italia_meta_type: 'notizia',
      effective: '2023-01-26T12:28:00+00:00',
      has_children: true,
      id: 'so-you-think-you-can-stop-me-and-spit-in-my-eye',
      image_field: null,
      image_scales: null,
      review_state: 'private',
      title: 'So you think you can stop me and spit in my eye',
    },
  ],
  country: {
    title: 'Afghanistan',
    token: '004',
  },
  created: '2023-01-31T14:54:57+00:00',
  creators: ['admin'],
  description: 'Nobody loves me',
  design_italia_meta_type: 'Unita Organizzativa',
  documenti_pubblici: [
    {
      '@id':
        'http://localhost:3000/documenti-e-dati/documenti-albo-pretorio/piano-lavori-2023',
      '@type': 'Documento',
      description:
        'Deliberazione del Consiglio comunale per piano lavori previsto per il 2023',
      design_italia_meta_type: 'Documento',
      effective: null,
      has_children: true,
      id: 'piano-lavori-2023',
      image_field: null,
      image_scales: null,
      review_state: 'private',
      title: 'Piano lavori 2023',
    },
  ],
  effective: null,
  exclude_from_nav: false,
  expires: null,
  geolocation: {
    latitude: 0,
    longitude: 0,
  },
  id: 'im-just-a-poor-boy',
  image: {
    'content-type': 'image/webp',
    download:
      'http://localhost:3000/amministrazione/enti-e-fondazioni/im-just-a-poor-boy/@@images/image-2000-8c39b3a70151bdcff6e9920861173ec6.webp',
    filename:
      'business-teamwork-join-hands-together-business-teamwork-concept_1150-1804.webp',
    height: 1333,
    scales: {
      gallery: {
        download:
          'http://localhost:3000/amministrazione/enti-e-fondazioni/im-just-a-poor-boy/@@images/image-250-c907994b7c1e05edaacd14c863622eeb.webp',
        height: 166,
        width: 250,
      },
      great: {
        download:
          'http://localhost:3000/amministrazione/enti-e-fondazioni/im-just-a-poor-boy/@@images/image-1200-39b3d3b7f273640680585884fee3dc56.webp',
        height: 799,
        width: 1200,
      },
      huge: {
        download:
          'http://localhost:3000/amministrazione/enti-e-fondazioni/im-just-a-poor-boy/@@images/image-1600-468058dfb88547d3e692ba03b5a3773e.jpeg',
        height: 1066,
        width: 1600,
      },
      icon: {
        download:
          'http://localhost:3000/amministrazione/enti-e-fondazioni/im-just-a-poor-boy/@@images/image-32-75b211798102a4af187ba4617247f54b.webp',
        height: 21,
        width: 32,
      },
      large: {
        download:
          'http://localhost:3000/amministrazione/enti-e-fondazioni/im-just-a-poor-boy/@@images/image-800-bf916e49d3296d7f70f22b9971a1422a.webp',
        height: 533,
        width: 800,
      },
      larger: {
        download:
          'http://localhost:3000/amministrazione/enti-e-fondazioni/im-just-a-poor-boy/@@images/image-1000-27a7fbd0adf44296bbf6b65ab84d0d17.webp',
        height: 666,
        width: 1000,
      },
      listing: {
        download:
          'http://localhost:3000/amministrazione/enti-e-fondazioni/im-just-a-poor-boy/@@images/image-16-c9f8abe915729a3ddefa86e5848ac000.webp',
        height: 10,
        width: 16,
      },
      midi: {
        download:
          'http://localhost:3000/amministrazione/enti-e-fondazioni/im-just-a-poor-boy/@@images/image-300-604bd396d7ead35bb98b5ce84b6dfc48.webp',
        height: 199,
        width: 300,
      },
      mini: {
        download:
          'http://localhost:3000/amministrazione/enti-e-fondazioni/im-just-a-poor-boy/@@images/image-200-ef48f14df2ccdd6e4f82babbb446aa25.webp',
        height: 133,
        width: 200,
      },
      preview: {
        download:
          'http://localhost:3000/amministrazione/enti-e-fondazioni/im-just-a-poor-boy/@@images/image-400-0a344ce717e4496f24606766ebdb3f7a.webp',
        height: 266,
        width: 400,
      },
      teaser: {
        download:
          'http://localhost:3000/amministrazione/enti-e-fondazioni/im-just-a-poor-boy/@@images/image-600-2f8c24261e04b9cf12a89ac59eba300d.webp',
        height: 399,
        width: 600,
      },
      thumb: {
        download:
          'http://localhost:3000/amministrazione/enti-e-fondazioni/im-just-a-poor-boy/@@images/image-128-b81f6f5d853c067d94f5f8595df07893.webp',
        height: 85,
        width: 128,
      },
      tile: {
        download:
          'http://localhost:3000/amministrazione/enti-e-fondazioni/im-just-a-poor-boy/@@images/image-64-36d6f466b87119ca04996732e29a1c32.webp',
        height: 42,
        width: 64,
      },
    },
    size: 202972,
    width: 2000,
  },
  image_caption: 'From a poor family',
  is_folderish: true,
  items: [
    {
      '@id':
        'http://localhost:3000/amministrazione/enti-e-fondazioni/im-just-a-poor-boy/allegati',
      '@type': 'Document',
      description: '',
      design_italia_meta_type: 'Pagina',
      has_children: false,
      id: 'allegati',
      image_field: '',
      image_scales: null,
      review_state: 'private',
      title: 'Allegati',
    },
  ],
  items_total: 1,
  language: {
    title: 'Italiano',
    token: 'it',
  },
  layout: 'view',
  legami_con_altre_strutture: [
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
  lock: {
    locked: false,
    stealable: true,
  },
  modified: '2023-01-31T14:54:57+00:00',
  next_item: {},
  nome_sede: 'Spare him his life from this monstrosity',
  opengraph_description: null,
  opengraph_image: null,
  opengraph_title: null,
  orario_pubblico: {
    blocks: {
      'e64bb2b4-d372-4978-842a-b8a0c0eec910': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: '8pd54',
              text: 'I have this thing where I get older',
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['e64bb2b4-d372-4978-842a-b8a0c0eec910'],
    },
  },
  parent: {
    '@id': 'http://localhost:3000/amministrazione/enti-e-fondazioni',
    '@type': 'Document',
    description: '',
    design_italia_meta_type: 'Pagina',
    has_children: true,
    id: 'enti-e-fondazioni',
    image_field: null,
    image_scales: null,
    review_state: 'private',
    title: 'Enti e fondazioni',
  },
  prestazioni: [],
  preview_caption: null,
  preview_image: null,
  previous_item: {
    '@id':
      'http://localhost:3000/amministrazione/enti-e-fondazioni/copy_of_arciconfraternita-del-gonfalone-sotto-linvocazione-di-santefisio-martire',
    '@type': 'UnitaOrganizzativa',
    description: '',
    title:
      "Arciconfraternita del Gonfalone sotto l’invocazione di Sant'Efisio martire",
  },
  quartiere: 'Bismillah',
  relatedItems: [
    {
      '@id': 'http://localhost:3000/novita',
      '@type': 'Document',
      description:
        'Tutte le novità comunali per i cittadini per restare aggiornati.',
      design_italia_meta_type: 'Pagina',
      effective: null,
      has_children: true,
      id: 'novita',
      image_field: null,
      image_scales: null,
      review_state: 'published',
      title: 'Novità',
    },
  ],
  related_news: [],
  responsabile: [
    {
      '@id':
        'http://localhost:3000/amministrazione/personale-amministrativo/gianluca-luchetti',
      '@type': 'Persona',
      description: 'Is this the real life?',
      design_italia_meta_type: 'Persona pubblica',
      effective: null,
      has_children: true,
      id: 'gianluca-luchetti',
      image_field: 'foto_persona',
      image_scales: {
        foto_persona: [
          {
            'content-type': 'image/jpeg',
            download:
              'http://localhost:3000/amministrazione/personale-amministrativo/gianluca-luchetti/@@images/foto_persona-6240-d31400b093b5122378386bfcbfcbadef.jpeg',
            filename: 'woman-having-online-meeting-work.jpg',
            height: 4160,
            scales: {
              gallery: {
                download:
                  'http://localhost:3000/amministrazione/personale-amministrativo/gianluca-luchetti/@@images/foto_persona-250-4415efecba55f5c3b7855d316c282803.jpeg',
                height: 166,
                width: 250,
              },
              great: {
                download:
                  'http://localhost:3000/amministrazione/personale-amministrativo/gianluca-luchetti/@@images/foto_persona-1200-8362c0aa18afb393870557831338e877.jpeg',
                height: 800,
                width: 1200,
              },
              huge: {
                download:
                  'http://localhost:3000/amministrazione/personale-amministrativo/gianluca-luchetti/@@images/foto_persona-1600-5870178455c80ebd71ab45f2ad13a723.jpeg',
                height: 1066,
                width: 1600,
              },
              icon: {
                download:
                  'http://localhost:3000/amministrazione/personale-amministrativo/gianluca-luchetti/@@images/foto_persona-32-5ca5f6d23481ec4c66837ea5651e7d36.jpeg',
                height: 21,
                width: 32,
              },
              large: {
                download:
                  'http://localhost:3000/amministrazione/personale-amministrativo/gianluca-luchetti/@@images/foto_persona-800-68fd8822e74c7ae1a2543164ddd90893.jpeg',
                height: 533,
                width: 800,
              },
              larger: {
                download:
                  'http://localhost:3000/amministrazione/personale-amministrativo/gianluca-luchetti/@@images/foto_persona-1000-9eff05079ce70e130cf0933f7a452d51.jpeg',
                height: 666,
                width: 1000,
              },
              listing: {
                download:
                  'http://localhost:3000/amministrazione/personale-amministrativo/gianluca-luchetti/@@images/foto_persona-16-b38ed561b94559c62ae52844b0d1047b.jpeg',
                height: 10,
                width: 16,
              },
              midi: {
                download:
                  'http://localhost:3000/amministrazione/personale-amministrativo/gianluca-luchetti/@@images/foto_persona-300-a55ee7f9e782c431b17d7235120ed3d8.jpeg',
                height: 200,
                width: 300,
              },
              mini: {
                download:
                  'http://localhost:3000/amministrazione/personale-amministrativo/gianluca-luchetti/@@images/foto_persona-200-0709de767e7a6265ef39e5487a2e56a1.jpeg',
                height: 133,
                width: 200,
              },
              preview: {
                download:
                  'http://localhost:3000/amministrazione/personale-amministrativo/gianluca-luchetti/@@images/foto_persona-400-5eeb9a3af2c47d6706343b334c38961c.jpeg',
                height: 266,
                width: 400,
              },
              teaser: {
                download:
                  'http://localhost:3000/amministrazione/personale-amministrativo/gianluca-luchetti/@@images/foto_persona-600-75da0c04427678563fc513045d897d12.jpeg',
                height: 400,
                width: 600,
              },
              thumb: {
                download:
                  'http://localhost:3000/amministrazione/personale-amministrativo/gianluca-luchetti/@@images/foto_persona-128-3ae9e59c013b3ac965c5dd6b0ad1734b.jpeg',
                height: 85,
                width: 128,
              },
              tile: {
                download:
                  'http://localhost:3000/amministrazione/personale-amministrativo/gianluca-luchetti/@@images/foto_persona-64-beefd05f0c84aa0004daf27d1a940e6c.jpeg',
                height: 42,
                width: 64,
              },
            },
            size: 1195679,
            width: 6240,
          },
        ],
      },
      incarichi: 'Incaricone',
      review_state: 'private',
      title: 'Gianluca Luchetti',
    },
  ],
  review_state: 'private',
  rights: '',
  sedi_secondarie: [
    {
      '@id':
        'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1',
      '@type': 'Venue',
      circoscrizione: null,
      city: 'Roma',
      country: '380',
      description:
        'Sorta a metà Seicento come residenza di caccia di Carlo Emanuele II, che fece del centrale Salone di Diana uno snodo ideale fra palazzo e giardini.',
      design_italia_meta_type: 'Luogo',
      effective: null,
      email: null,
      fax: null,
      geolocation: {
        latitude: 41.8337833,
        longitude: 12.4677863,
      },
      has_children: true,
      id: 'il-castello-normanno-1',
      image_field: null,
      image_scales: null,
      nome_sede: null,
      orario_pubblico: {
        blocks: {},
        blocks_layout: {
          items: [],
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
      title: 'Il castello normanno',
      web: null,
      zip_code: '00144',
    },
  ],
  seo_canonical_url: null,
  seo_description: null,
  seo_noindex: null,
  seo_title: null,
  servizi_offerti: [],
  street: 'Easy come',
  subjects: [],
  tassonomia_argomenti: [
    {
      '@id': 'http://localhost:3000/argomenti/cultura',
      '@type': 'Pagina Argomento',
      description: '',
      design_italia_meta_type: 'Argomento',
      effective: null,
      has_children: false,
      id: 'cultura',
      image_field: null,
      image_scales: null,
      review_state: 'private',
      title: 'Cultura',
    },
  ],
  ulteriori_informazioni: {
    blocks: {
      '15d603b5-a979-4b9f-8772-c50e06a2907d': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: 'dd49f',
              text: 'Any way the wind blows',
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['15d603b5-a979-4b9f-8772-c50e06a2907d'],
    },
  },
  uo_children: [],
  uo_parent: null,
  version: 'current',
  versioning_enabled: true,
  working_copy: null,
  working_copy_of: null,
  zip_code: 'Easy go',
};

const store = mockStore({
  intl: {
    locale: 'en',
    messages: {},
  },
  content: {
    subrequests: {
      '/amministrazione/punti-di-contatto/is-this-the-real-life': {
        loading: false,
        loaded: true,
        error: null,
        data: {
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
              design_italia_meta_type: 'notizia',
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
              typology: 'notizia',
            },
            {
              '@id':
                'http://localhost:3000/notizie/sport-nel-verde-le-iniziative-della-prossima-edizione',
              '@type': 'News Item',
              description:
                'Le informazioni per partecipare all’iniziativa rivolta a tutte le fasce d’età per promuovere l’attività motoria nelle aree verdi della città.',
              design_italia_meta_type: 'Notizia',
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
              title: 'Sport nel verde: le iniziative della prossima edizione',
              typology: 'Notizia',
            },
            {
              '@id':
                'http://localhost:3000/novita/notizie/osservatorio-sul-turismo',
              '@type': 'News Item',
              description:
                'Donec in consequat nunc. Duis semper fermentum lacus, ac condimentum justo auctor a. Nam erat erat, porta vel pharetra in, ullamcorper vel turpis.',
              design_italia_meta_type: 'Notizia',
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
                'http://localhost:3000/amministrazione/enti-e-fondazioni/im-just-a-poor-boy',
              '@type': 'UnitaOrganizzativa',
              address: '',
              circoscrizione: null,
              city: null,
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
              nome_sede: null,
              quartiere: null,
              review_state: 'private',
              street: null,
              title: "I'm just a poor boy",
              zip_code: null,
            },
          ],
          subjects: [],
          title: 'Is this the real life',
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
        },
      },
      'luogo/amministrazione/luoghi/bohemian-rhapsody': {
        loading: false,
        loaded: true,
        error: null,
        data: {
          '@components': {
            actions: {
              '@id':
                'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@actions',
            },
            aliases: {
              '@id':
                'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@aliases',
            },
            breadcrumbs: {
              '@id':
                'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@breadcrumbs',
            },
            contextnavigation: {
              '@id':
                'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@contextnavigation',
            },
            navigation: {
              '@id':
                'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@navigation',
            },
            subsite: {},
            translations: {
              '@id':
                'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@translations',
            },
            types: {
              '@id':
                'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@types',
            },
            workflow: {
              '@id':
                'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@workflow',
            },
          },
          '@id':
            'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody',
          '@type': 'Venue',
          UID: 'f936f47d0dc34a6c98f40b4d1e1baf7e',
          allow_discussion: false,
          changeNote: '',
          circoscrizione: null,
          city: 'Roma',
          contact_info: [
            {
              '@id':
                'http://localhost:3000/amministrazione/uffici/ufficio-delle-attivita-produttive',
              '@type': 'PuntoDiContatto',
              description: '',
              design_italia_meta_type: 'Punto di Contatto',
              effective: null,
              has_children: false,
              id: 'ufficio-delle-attivita-produttive',
              image_field: null,
              image_scales: null,
              review_state: 'private',
              title: 'Ufficio delle Attività Produttive',
              value_punto_contatto: [
                {
                  pdc_type: 'phone',
                  pdc_value: '+39 070 6776430',
                },
                {
                  pdc_type: 'email',
                  pdc_value: 'produttive@comune.cagliari.it',
                },
              ],
            },
          ],
          correlato_in_evidenza: [],
          country: {
            title: 'Italia',
            token: '380',
          },
          created: '2023-01-31T11:21:07+00:00',
          description: 'Is this the real life?',
          descrizione_completa: {
            blocks: {},
            blocks_layout: {
              items: [],
            },
          },
          design_italia_meta_type: 'Luogo',
          elementi_di_interesse: {
            blocks: {},
            blocks_layout: {
              items: [],
            },
          },
          geolocation: {
            latitude: 41.8337833,
            longitude: 12.4677863,
          },
          id: 'bohemian-rhapsody',
          identificativo_mibac: null,
          image: {
            'content-type': 'image/webp',
            download:
              'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@@images/image-2000-d2aaa2d6fd8c990ee030db286f8c3b86.webp',
            filename:
              'business-teamwork-join-hands-together-business-teamwork-concept_1150-1804.webp',
            height: 1333,
            scales: {
              gallery: {
                download:
                  'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@@images/image-250-9bf3e77714a27b7feccde12cef2b8742.webp',
                height: 166,
                width: 250,
              },
              great: {
                download:
                  'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@@images/image-1200-d7f1d50c480ebd2ee8b08949caca6bbd.webp',
                height: 799,
                width: 1200,
              },
              huge: {
                download:
                  'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@@images/image-1600-11c11454186c31aa9d198a35c33ed0c0.jpeg',
                height: 1066,
                width: 1600,
              },
              icon: {
                download:
                  'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@@images/image-32-6ac5fb278e684f53c6b9ebddb7016fc2.webp',
                height: 21,
                width: 32,
              },
              large: {
                download:
                  'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@@images/image-800-ff658de7892bc2402359c3e1b3e3a6a2.webp',
                height: 533,
                width: 800,
              },
              larger: {
                download:
                  'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@@images/image-1000-f881b1a20f581ae59f1e3c0ff9089119.webp',
                height: 666,
                width: 1000,
              },
              listing: {
                download:
                  'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@@images/image-16-fe6722b0e2ffdcb5c35895e67b2863a7.webp',
                height: 10,
                width: 16,
              },
              midi: {
                download:
                  'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@@images/image-300-a0718ced8dbcae2131683518bb748c61.webp',
                height: 199,
                width: 300,
              },
              mini: {
                download:
                  'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@@images/image-200-5a5e8cf9e90fae00cbf72304c6fe51c7.webp',
                height: 133,
                width: 200,
              },
              preview: {
                download:
                  'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@@images/image-400-4118777fc82185206b0e521120c20ff3.webp',
                height: 266,
                width: 400,
              },
              teaser: {
                download:
                  'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@@images/image-600-1422a395e2994f4348bf4622e3a8fb93.webp',
                height: 399,
                width: 600,
              },
              thumb: {
                download:
                  'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@@images/image-128-1c86a59fd849c32edf0688e30f7c0f50.webp',
                height: 85,
                width: 128,
              },
              tile: {
                download:
                  'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@@images/image-64-61b0b2cbb79b486d1bdafca931e25c81.webp',
                height: 42,
                width: 64,
              },
            },
            size: 202972,
            width: 2000,
          },
          image_caption: 'Is this just fantasy?',
          is_folderish: true,
          items: [
            {
              '@id':
                'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/multimedia',
              '@type': 'Folder',
              description: '',
              design_italia_meta_type: 'Cartella',
              has_children: false,
              id: 'multimedia',
              image_field: '',
              image_scales: null,
              review_state: 'private',
              title: 'Multimedia',
              url: '/amministrazione/luoghi/bohemian-rhapsody/multimedia',
            },
          ],
          items_total: 1,
          language: {
            title: 'Italiano',
            token: 'it',
          },
          layout: 'venue_view',
          lock: {},
          luoghi_correlati: [],
          modalita_accesso: {
            blocks: {
              '937c319d-97bc-42e0-b9f8-0dc094dfa555': {
                '@type': 'text',
                text: {
                  blocks: [
                    {
                      data: {},
                      depth: 0,
                      entityRanges: [],
                      inlineStyleRanges: [],
                      key: 'v3fm',
                      text: 'Open your eyes',
                      type: 'unstyled',
                    },
                  ],
                  entityMap: {},
                },
              },
            },
            blocks_layout: {
              items: ['937c319d-97bc-42e0-b9f8-0dc094dfa555'],
            },
          },
          modified: '2023-01-31T11:21:08+00:00',
          next_item: {},
          nome_alternativo: 'No escape from reality',
          notes: null,
          opengraph_description: null,
          opengraph_image: null,
          opengraph_title: null,
          orario_pubblico: {
            blocks: {},
            blocks_layout: {
              items: [],
            },
          },
          parent: {
            '@id': 'http://localhost:3000/amministrazione/luoghi',
            '@type': 'Document',
            description: '',
            design_italia_meta_type: 'Pagina',
            has_children: true,
            id: 'luoghi',
            image_field: null,
            image_scales: null,
            review_state: 'private',
            title: 'Luoghi',
          },
          preview_caption: 'Caught in a landside',
          preview_image: {
            'content-type': 'image/jpeg',
            download:
              'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@@images/preview_image-1280-d0a5797aa1b0e0d9a5417204b2b8595e.jpeg',
            filename: 'insalata-1280x720.jpeg',
            height: 720,
            scales: {
              gallery: {
                download:
                  'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@@images/preview_image-250-b6676a571060fa3028fe65e954abd19f.jpeg',
                height: 140,
                width: 250,
              },
              great: {
                download:
                  'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@@images/preview_image-1200-413f20ca83daa6ae232537b06ce772b7.jpeg',
                height: 675,
                width: 1200,
              },
              huge: {
                download:
                  'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@@images/preview_image-1600-6b5696e1e835e98e9cc0d9fb2b24b2f6.jpeg',
                height: 720,
                width: 1280,
              },
              icon: {
                download:
                  'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@@images/preview_image-32-f2d6214dcaf1b05196aac82bceea6cc1.jpeg',
                height: 18,
                width: 32,
              },
              large: {
                download:
                  'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@@images/preview_image-800-5d06a939fcd291d8ac2c6d7841c560c5.jpeg',
                height: 450,
                width: 800,
              },
              larger: {
                download:
                  'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@@images/preview_image-1000-71a094948cd8c7d9644ec8a4f54dfe5d.jpeg',
                height: 562,
                width: 1000,
              },
              listing: {
                download:
                  'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@@images/preview_image-16-3344d03704af19c70e8f87ed73523459.jpeg',
                height: 9,
                width: 16,
              },
              midi: {
                download:
                  'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@@images/preview_image-300-b3c8872e852cd0f88386bc256c5dec50.jpeg',
                height: 168,
                width: 300,
              },
              mini: {
                download:
                  'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@@images/preview_image-200-ba90be0aa37605449ec6fdc900a0763f.jpeg',
                height: 112,
                width: 200,
              },
              preview: {
                download:
                  'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@@images/preview_image-400-c2011a33b278550971bdd022c4cd8258.jpeg',
                height: 225,
                width: 400,
              },
              teaser: {
                download:
                  'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@@images/preview_image-600-136a3ac419d64afdede2ead5a84a032b.jpeg',
                height: 337,
                width: 600,
              },
              thumb: {
                download:
                  'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@@images/preview_image-128-cb7deeafe5ba75f824e422337e6e9cd8.jpeg',
                height: 72,
                width: 128,
              },
              tile: {
                download:
                  'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@@images/preview_image-64-a280806f26a8e29e2de92bfc380864cc.jpeg',
                height: 36,
                width: 64,
              },
            },
            size: 244065,
            width: 1280,
          },
          previous_item: {},
          quartiere: null,
          relatedItems: [],
          related_news: [
            {
              '@id':
                'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye',
              '@type': 'News Item',
              description: 'So you think you can love me and leave me to die',
              design_italia_meta_type: 'notizia',
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
              typology: 'notizia',
            },
          ],
          review_state: 'private',
          sede_di: [
            {
              '@id':
                'http://localhost:3000/amministrazione/enti-e-fondazioni/im-just-a-poor-boy',
              '@type': 'UnitaOrganizzativa',
              address: '',
              circoscrizione: null,
              city: null,
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
              nome_sede: null,
              quartiere: null,
              review_state: 'private',
              street: null,
              title: "I'm just a poor boy",
              zip_code: null,
            },
          ],
          seo_canonical_url: null,
          seo_description: null,
          seo_noindex: null,
          seo_title: null,
          street: 'Via Liszt, 21',
          struttura_responsabile: {
            blocks: {
              '7bac38f6-622b-480c-9691-400ac750529b': {
                '@type': 'text',
              },
            },
            blocks_layout: {
              items: ['7bac38f6-622b-480c-9691-400ac750529b'],
            },
          },
          struttura_responsabile_correlati: [],
          subjects: [],
          tassonomia_argomenti: [],
          tipologia_luogo: null,
          title: 'Bohemian Rhapsody',
          ulteriori_informazioni: {
            blocks: {},
            blocks_layout: {
              items: [],
            },
          },
          venue_services: [],
          version: 'current',
          versioning_enabled: true,
          working_copy: null,
          working_copy_of: null,
          zip_code: '00144',
        },
      },
      '/amministrazione/uffici/gestione-impianti-sportivi_office': {
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
  search: {
    error: null,
    items: [],
    total: 0,
    loaded: false,
    loading: false,
    batching: {},
    subrequests: {
      '1675176815846-multiple': {
        error: null,
        items: [
          {
            '@id': '/amministrazione/luoghi/bohemian-rhapsody',
            '@type': 'Venue',
            CreationDate: '2023-01-31T11:21:07+00:00',
            Creator: 'admin',
            Date: '2023-01-31T11:21:08+00:00',
            Description: 'Is this the real life?',
            EffectiveDate: 'None',
            ExpirationDate: 'None',
            ModificationDate: '2023-01-31T11:21:08+00:00',
            Subject: [],
            Subject_bando: null,
            Title: 'Bohemian Rhapsody',
            Type: 'Luogo',
            UID: 'f936f47d0dc34a6c98f40b4d1e1baf7e',
            apertura_bando: null,
            author_name: null,
            chiusura_procedimento_bando: null,
            cmf_uid: 242,
            commentators: [],
            created: '2023-01-31T11:21:07+00:00',
            data_conclusione_incarico: null,
            description: 'Is this the real life?',
            design_italia_meta_type: 'Luogo',
            destinatari_bando: null,
            effective: null,
            end: null,
            ente_bando: null,
            event_location: null,
            exclude_from_nav: null,
            expires: null,
            geolocation: {
              latitude: 41.8337833,
              longitude: 12.4677863,
            },
            getIcon: true,
            getId: 'bohemian-rhapsody',
            getObjSize: '436.6 KB',
            getPath: '/Plone/amministrazione/luoghi/bohemian-rhapsody',
            getRemoteUrl: null,
            getURL:
              'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody',
            hasPreviewImage: true,
            head_title: null,
            icona: null,
            id: 'bohemian-rhapsody',
            image: {
              scales: {
                gallery: {
                  download:
                    'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@@images/preview_image/gallery',
                  height: 65536,
                  width: 250,
                },
                great: {
                  download:
                    'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@@images/preview_image/great',
                  height: 65536,
                  width: 1200,
                },
                huge: {
                  download:
                    'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@@images/preview_image/huge',
                  height: 65536,
                  width: 1600,
                },
                icon: {
                  download:
                    'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@@images/preview_image/icon',
                  height: 32,
                  width: 32,
                },
                large: {
                  download:
                    'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@@images/preview_image/large',
                  height: 65536,
                  width: 800,
                },
                larger: {
                  download:
                    'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@@images/preview_image/larger',
                  height: 65536,
                  width: 1000,
                },
                listing: {
                  download:
                    'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@@images/preview_image/listing',
                  height: 16,
                  width: 16,
                },
                midi: {
                  download:
                    'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@@images/preview_image/midi',
                  height: 65536,
                  width: 300,
                },
                mini: {
                  download:
                    'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@@images/preview_image/mini',
                  height: 65536,
                  width: 200,
                },
                preview: {
                  download:
                    'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@@images/preview_image/preview',
                  height: 65536,
                  width: 400,
                },
                teaser: {
                  download:
                    'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@@images/preview_image/teaser',
                  height: 65536,
                  width: 600,
                },
                thumb: {
                  download:
                    'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@@images/preview_image/thumb',
                  height: 65536,
                  width: 128,
                },
                tile: {
                  download:
                    'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody/@@images/preview_image/tile',
                  height: 64,
                  width: 64,
                },
              },
            },
            image_field: 'preview_image',
            image_scales: {
              image: [
                {
                  'content-type': 'image/webp',
                  download:
                    '@@images/image-2000-88311c5ae290a9978e0109d85b260ba7.webp',
                  filename:
                    'business-teamwork-join-hands-together-business-teamwork-concept_1150-1804.webp',
                  height: 1333,
                  scales: {
                    gallery: {
                      download:
                        '@@images/image-250-f9a2f896005b9c813615dc39d04cc8af.webp',
                      height: 166,
                      width: 250,
                    },
                    great: {
                      download:
                        '@@images/image-1200-241e7c8a423c1f85a2bfe84f6765f8de.webp',
                      height: 799,
                      width: 1200,
                    },
                    huge: {
                      download:
                        '@@images/image-1600-b7f789992f9f705178344b02ae86bfed.webp',
                      height: 1066,
                      width: 1600,
                    },
                    icon: {
                      download:
                        '@@images/image-32-f6ecf7a145b19420f01629ea9030c60a.webp',
                      height: 21,
                      width: 32,
                    },
                    large: {
                      download:
                        '@@images/image-800-85d5850f21f91cd25f51d3c11b5baed3.webp',
                      height: 533,
                      width: 800,
                    },
                    larger: {
                      download:
                        '@@images/image-1000-411c8d643cf7f9d1e8366bb19a2e6d18.webp',
                      height: 666,
                      width: 1000,
                    },
                    listing: {
                      download:
                        '@@images/image-16-22d13afba81d5a8e1bf5071879d464d5.webp',
                      height: 10,
                      width: 16,
                    },
                    midi: {
                      download:
                        '@@images/image-300-70ea8c2502548826eed1cbf60844fcb9.webp',
                      height: 199,
                      width: 300,
                    },
                    mini: {
                      download:
                        '@@images/image-200-fe6c60a2b348318158037857743e83dc.webp',
                      height: 133,
                      width: 200,
                    },
                    preview: {
                      download:
                        '@@images/image-400-3be48d85ce763c5c11a7902217857ccd.webp',
                      height: 266,
                      width: 400,
                    },
                    teaser: {
                      download:
                        '@@images/image-600-e3f75eddfe913cdce745c155c57764f3.webp',
                      height: 399,
                      width: 600,
                    },
                    thumb: {
                      download:
                        '@@images/image-128-b82741b7a472446892c52851300e958d.webp',
                      height: 85,
                      width: 128,
                    },
                    tile: {
                      download:
                        '@@images/image-64-d2b9de75dcde7d082de46cadf1d1552c.webp',
                      height: 42,
                      width: 64,
                    },
                  },
                  size: 202972,
                  width: 2000,
                },
              ],
              preview_image: [
                {
                  'content-type': 'image/jpeg',
                  download:
                    '@@images/preview_image-1280-2a918be01110ba5992df0190f20c5cb8.jpeg',
                  filename: 'insalata-1280x720.jpeg',
                  height: 720,
                  scales: {
                    gallery: {
                      download:
                        '@@images/preview_image-250-27579e2d38d5abd0dd0145c94ae6fd55.jpeg',
                      height: 140,
                      width: 250,
                    },
                    great: {
                      download:
                        '@@images/preview_image-1200-4221846d907e00cbc0ae2b4b93477e9f.jpeg',
                      height: 675,
                      width: 1200,
                    },
                    icon: {
                      download:
                        '@@images/preview_image-32-4d5a05587ad0044c326f98d4eca15e98.jpeg',
                      height: 18,
                      width: 32,
                    },
                    large: {
                      download:
                        '@@images/preview_image-800-7ca5b43901638f343719a7e5aa86ff67.jpeg',
                      height: 450,
                      width: 800,
                    },
                    larger: {
                      download:
                        '@@images/preview_image-1000-e690f7d07ee47d97fce28b0763a145e4.jpeg',
                      height: 562,
                      width: 1000,
                    },
                    listing: {
                      download:
                        '@@images/preview_image-16-4a5f86575c4be2cfac91789e22098ec5.jpeg',
                      height: 9,
                      width: 16,
                    },
                    midi: {
                      download:
                        '@@images/preview_image-300-35e8d017fc8685c573da0c7c390a0708.jpeg',
                      height: 168,
                      width: 300,
                    },
                    mini: {
                      download:
                        '@@images/preview_image-200-41f994c68121dd02c23772a404a1e059.jpeg',
                      height: 112,
                      width: 200,
                    },
                    preview: {
                      download:
                        '@@images/preview_image-400-45d052c8bb5ddd04d3f87eb6bc07a1f1.jpeg',
                      height: 225,
                      width: 400,
                    },
                    teaser: {
                      download:
                        '@@images/preview_image-600-360bb7067da56462ebc906646edf375e.jpeg',
                      height: 337,
                      width: 600,
                    },
                    thumb: {
                      download:
                        '@@images/preview_image-128-ec8227e88e1a47ef3ce35be62e88ce0d.jpeg',
                      height: 72,
                      width: 128,
                    },
                    tile: {
                      download:
                        '@@images/preview_image-64-acacffe9207e1b0bd57ac638c97e6e52.jpeg',
                      height: 36,
                      width: 64,
                    },
                  },
                  size: 244065,
                  width: 1280,
                },
              ],
            },
            in_response_to: null,
            is_folderish: true,
            last_comment_date: null,
            latitude: 41.8337833,
            listCreators: ['admin'],
            location: null,
            longitude: 12.4677863,
            mime_type: 'text/plain',
            modified: '2023-01-31T11:21:08+00:00',
            nav_title: null,
            open_end: null,
            parent: {
              '@id': 'http://localhost:3000/amministrazione/luoghi',
              UID: '65c84499d5474cd7b736181c531bfa28',
              title: 'Luoghi',
            },
            portal_type: 'Venue',
            recurrence: null,
            review_state: 'private',
            scadenza_bando: null,
            start: null,
            sync_uid: null,
            tassonomia_argomenti: [],
            taxonomy_business_events: [],
            taxonomy_person_life_events: [],
            taxonomy_temi_dataset: [],
            taxonomy_tipologia_documenti_albopretorio: [],
            taxonomy_tipologia_documento: [],
            taxonomy_tipologia_evento: [],
            taxonomy_tipologia_frequenza_aggiornamento: [],
            taxonomy_tipologia_incarico: [],
            taxonomy_tipologia_licenze: [],
            taxonomy_tipologia_luogo: [],
            taxonomy_tipologia_notizia: [],
            taxonomy_tipologia_organizzazione: [],
            taxonomy_tipologia_pdc: [],
            taxonomy_tipologia_stati_pratica: [],
            tipologia_bando: null,
            tipologia_documento: null,
            tipologia_notizia: null,
            title: 'Bohemian Rhapsody',
            total_comments: 0,
            ufficio_responsabile_bando: null,
            update_note: null,
            whole_day: null,
          },
        ],
        total: 1,
        loaded: true,
        loading: false,
        batching: {},
      },
    },
  },
});

test('renders all mandatory fields in the page', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <UOView content={mock_mandatory} />
      </MemoryRouter>
    </Provider>,
  );

  //title
  expect(
    screen.getByRole('heading', { name: /I'm just a poor boy/i }),
  ).toBeInTheDocument();

  //descrizione
  expect(screen.getByText(/Nobody loves me/i)).toBeInTheDocument();

  //competenze --> non compare
  expect(screen.getByText(/He's just a poor boy/i)).toBeInTheDocument();

  //tipologia organizzazione
  expect(
    screen.getByRole('heading', { name: /Tipologia di organizzazione/i }),
  ).toBeInTheDocument();
  expect(screen.getByText(/Struttura amministrativa/i)).toBeInTheDocument();

  //persone che compongono la struttura
  expect(screen.getByRole('heading', { name: /Persone/i })).toBeInTheDocument();
  expect(
    screen.getByText(/Tutte le persone che fanno parte di questo servizio:/i),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: /Valerio Alfio Boi/i }),
  ).toBeInTheDocument();

  //contatti
  expect(
    screen.getByRole('heading', { name: /Contatti/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: /freddymercury@gmail.com/i }),
  ).toBeInTheDocument();
  //sede principale
  expect(
    screen.getByRole('link', { name: /Bohemian Rhapsody/i }),
  ).toBeInTheDocument();
});

test('renders all non-mandatory fields in the page', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <UOView content={mock_allfields} />
      </MemoryRouter>
    </Provider>,
  );

  //immagine di testata
  expect(screen.getByAltText(/From a poor family/i)).toBeInTheDocument();
  expect(screen.getByText(/From a poor family/i)).toBeInTheDocument();

  //argomenti
  expect(screen.getAllByText(/Argomenti/i)).toBeTruthy();
  expect(screen.getAllByRole('link', { name: /Cultura/i })).toBeTruthy();

  //Servizi o uffici collegati
  expect(
    screen.getByRole('heading', { name: /Struttura/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: /Servizi o uffici di riferimento/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: /Gestione impianti sportivi/i }),
  ).toBeInTheDocument();

  //Responsabile
  expect(
    screen.getByRole('heading', { name: /Responsabile/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: /Gianluca Luchetti/i }),
  ).toBeInTheDocument();
  // immagine non renderizza
  expect(screen.getByAltText(/Gianluca Luchetti/i)).toBeInTheDocument();

  //assessore di riferimento
  expect(
    screen.getByRole('heading', { name: /Assessore di riferimento/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: /Gabriele Bianchi/i }),
  ).toBeInTheDocument();
  // immagine non renderizza
  expect(screen.getByAltText(/Gabriele Bianchi/i)).toBeInTheDocument();

  //altre sedi
  expect(
    screen.getByRole('heading', { name: /Altre sedi/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: /Il castello normanno/i }),
  ).toBeInTheDocument();

  //Sede principale
  expect(
    screen.getByRole('link', { name: /Bohemian Rhapsody/i }),
  ).toBeInTheDocument();

  //Orario per il pubblico
  expect(
    screen.getByRole('heading', { name: /Orario per il pubblico/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByText(/I have this thing where I get older/i),
  ).toBeInTheDocument();

  expect(
    screen.getByRole('heading', { name: /Allegati/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: /Piano lavori 2023/i }),
  ).toBeInTheDocument();

  //contenuti correlati
  expect(
    screen.getByRole('heading', { name: /Contenuti correlati/i }),
  ).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Novità/i })).toBeInTheDocument();

  //correlati in evidenza
  expect(
    screen.getByRole('heading', {
      name: /So you think you can stop me and spit in my eye/i,
    }),
  ).toBeInTheDocument();

  //ulteriori informazioni
  expect(
    screen.getByRole('heading', { name: /Ulteriori informazioni/i }),
  ).toBeInTheDocument();
  expect(screen.getByText(/Any way the wind blows/i)).toBeInTheDocument();
});
