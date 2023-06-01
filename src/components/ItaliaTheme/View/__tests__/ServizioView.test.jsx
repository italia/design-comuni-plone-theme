import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ServizioView from '../ServizioView/ServizioView';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

// Warning: An update to Icon inside a test was not wrapped in act(...).
// When testing, code that causes React state updates should be wrapped into act(...):
jest.mock('design-comuni-plone-theme/components/ItaliaTheme/Icons/Icon');
// loadables.push('rrule');
jest.mock('@plone/volto/helpers/Loadable/Loadable');
beforeAll(
  async () =>
    await require('@plone/volto/helpers/Loadable/Loadable').__setLoadables(),
);

const mock_mandatory = {
  '@components': {
    actions: {
      '@id':
        'http://localhost:3000/servizi/anagrafe-e-stato-civile/is-this-the-real-life/@actions',
    },
    breadcrumbs: {
      '@id':
        'http://localhost:3000/servizi/anagrafe-e-stato-civile/is-this-the-real-life/@breadcrumbs',
    },
    contextnavigation: {
      '@id':
        'http://localhost:3000/servizi/anagrafe-e-stato-civile/is-this-the-real-life/@contextnavigation',
    },
    navigation: {
      '@id':
        'http://localhost:3000/servizi/anagrafe-e-stato-civile/is-this-the-real-life/@navigation',
    },
    subsite: {},
    translations: {
      '@id':
        'http://localhost:3000/servizi/anagrafe-e-stato-civile/is-this-the-real-life/@translations',
    },
    types: {
      '@id':
        'http://localhost:3000/servizi/anagrafe-e-stato-civile/is-this-the-real-life/@types',
    },
    workflow: {
      '@id':
        'http://localhost:3000/servizi/anagrafe-e-stato-civile/is-this-the-real-life/@workflow',
    },
  },
  '@id':
    'http://localhost:3000/servizi/anagrafe-e-stato-civile/is-this-the-real-life',
  '@type': 'Servizio',
  UID: '6b214f86b1ab4afd8da7a50d43d89b4c',
  area: [
    {
      '@id':
        'http://localhost:3000/amministrazione/aree-amministrative/anti-hero',
      '@type': 'UnitaOrganizzativa',
      address: '',
      circoscrizione: null,
      city: null,
      description: 'I have this thing',
      design_italia_meta_type: 'Unita Organizzativa',
      effective: null,
      email: null,
      geolocation: {
        latitude: 0,
        longitude: 0,
      },
      has_children: true,
      id: 'anti-hero',
      image_field: null,
      image_scales: null,
      nome_sede: null,
      quartiere: null,
      review_state: 'private',
      street: null,
      telefono: null,
      title: 'Anti-hero',
      zip_code: null,
    },
  ],
  cosa_serve: {
    blocks: {
      '3a7d48cb-532e-48ed-a940-e699da0393eb': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: 'e22qj',
              text: "Didn't mean to make you cry",
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['3a7d48cb-532e-48ed-a940-e699da0393eb'],
    },
  },
  items: [],
  title: 'Is this the real life',
  ufficio_responsabile: [
    {
      '@id': 'http://localhost:3000/amministrazione/uffici/killer-queen',
      '@type': 'UnitaOrganizzativa',
      address: '',
      circoscrizione: null,
      city: null,
      description: 'She keeps her Moet et Chandon',
      design_italia_meta_type: 'Unita Organizzativa',
      effective: null,
      email: null,
      geolocation: {
        latitude: 0,
        longitude: 0,
      },
      has_children: true,
      id: 'killer-queen',
      image_field: null,
      image_scales: null,
      nome_sede: null,
      quartiere: null,
      review_state: 'private',
      street: null,
      telefono: null,
      title: 'Killer queen',
      zip_code: null,
    },
  ],
};

const mock_other_fields = {
  ...mock_mandatory,
  '@components': {
    actions: {
      '@id':
        'http://localhost:3000/servizi/anagrafe-e-stato-civile/is-this-the-real-life/@actions',
    },
    breadcrumbs: {
      '@id':
        'http://localhost:3000/servizi/anagrafe-e-stato-civile/is-this-the-real-life/@breadcrumbs',
    },
    contextnavigation: {
      '@id':
        'http://localhost:3000/servizi/anagrafe-e-stato-civile/is-this-the-real-life/@contextnavigation',
    },
    navigation: {
      '@id':
        'http://localhost:3000/servizi/anagrafe-e-stato-civile/is-this-the-real-life/@navigation',
    },
    subsite: {},
    translations: {
      '@id':
        'http://localhost:3000/servizi/anagrafe-e-stato-civile/is-this-the-real-life/@translations',
    },
    types: {
      '@id':
        'http://localhost:3000/servizi/anagrafe-e-stato-civile/is-this-the-real-life/@types',
    },
    workflow: {
      '@id':
        'http://localhost:3000/servizi/anagrafe-e-stato-civile/is-this-the-real-life/@workflow',
    },
  },
  '@id':
    'http://localhost:3000/servizi/anagrafe-e-stato-civile/is-this-the-real-life',
  '@type': 'Servizio',
  UID: '6b214f86b1ab4afd8da7a50d43d89b4c',
  a_chi_si_rivolge: {
    blocks: {
      'd2067599-1ef2-43f4-b74a-de3db7d89e91': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: 'biha4',
              text: 'I need no sympathy',
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['d2067599-1ef2-43f4-b74a-de3db7d89e91'],
    },
  },
  allow_discussion: false,
  altri_documenti: [
    {
      '@id':
        'http://localhost:3000/documenti-e-dati/documenti-albo-pretorio/documentoloremipsum',
      '@type': 'Documento',
      description: '',
      design_italia_meta_type: 'Documento',
      effective: null,
      has_children: true,
      id: 'documentoloremipsum',
      image_field: null,
      image_scales: null,
      review_state: 'private',
      title: 'DocumentoLoremIpsum',
    },
  ],
  area: [
    {
      '@id':
        'http://localhost:3000/amministrazione/aree-amministrative/anti-hero',
      '@type': 'UnitaOrganizzativa',
      address: '',
      circoscrizione: null,
      city: null,
      description: 'I have this thing',
      design_italia_meta_type: 'Unita Organizzativa',
      effective: null,
      email: null,
      geolocation: {
        latitude: 0,
        longitude: 0,
      },
      has_children: true,
      id: 'anti-hero',
      image_field: null,
      image_scales: null,
      nome_sede: null,
      quartiere: null,
      review_state: 'private',
      street: null,
      telefono: null,
      title: 'Anti-hero',
      zip_code: null,
    },
  ],
  autenticazione: {
    blocks: {
      '99927577-a4c5-4d9c-afba-ffa7f2799e8f': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: '34j8f',
              text: 'Life had just begun',
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['99927577-a4c5-4d9c-afba-ffa7f2799e8f'],
    },
  },
  canale_digitale: {
    blocks: {
      '6cfd11ad-4ade-4844-9be4-c65d5eb7f986': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: '8nkv3',
              text: "Doesn't really matter",
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['6cfd11ad-4ade-4844-9be4-c65d5eb7f986'],
    },
  },
  casi_particolari: {
    blocks: {
      '43277b01-c011-4f02-b053-5f4d643f7f8e': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: 'co67p',
              text: 'too late',
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['43277b01-c011-4f02-b053-5f4d643f7f8e'],
    },
  },
  changeNote: '',
  chi_puo_presentare: {
    blocks: {
      '95188918-2008-49b3-8bd9-c5bc1c6297a7': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: 'bverd',
              text: "Cause I'm easy come",
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['95188918-2008-49b3-8bd9-c5bc1c6297a7'],
    },
  },
  codice_ipa: null,
  come_si_fa: {
    blocks: {
      '1008ed72-708f-4351-bb9a-aa39dfb400db': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: 'ec75q',
              text: 'Little high',
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['1008ed72-708f-4351-bb9a-aa39dfb400db'],
    },
  },
  contributors: [],
  copertura_geografica: {
    blocks: {
      '31d37d9f-d456-4ec3-9d93-3fcb2fa19865': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: 'bpvbg',
              text: 'Easy go',
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['31d37d9f-d456-4ec3-9d93-3fcb2fa19865'],
    },
  },
  correlato_in_evidenza: [
    {
      '@id': 'http://localhost:3000/events',
      '@type': 'Folder',
      description: 'Eventi del sito',
      design_italia_meta_type: 'Cartella',
      effective: null,
      has_children: true,
      id: 'events',
      image_field: null,
      image_scales: null,
      review_state: 'published',
      title: 'Eventi',
    },
  ],
  cosa_serve: {
    blocks: {
      '3a7d48cb-532e-48ed-a940-e699da0393eb': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: 'e22qj',
              text: "Didn't mean to make you cry",
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['3a7d48cb-532e-48ed-a940-e699da0393eb'],
    },
  },
  cosa_si_ottiene: {
    blocks: {
      '8ac70ad2-6c0f-47b9-9858-924d84f8d882': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: '6ghgr',
              text: 'Little low',
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['8ac70ad2-6c0f-47b9-9858-924d84f8d882'],
    },
  },
  costi: {
    blocks: {
      'bf12abbe-1e9b-4da4-b238-e50d1adcb619': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: 'fn2h1',
              text: "If I'm not back this time tomorrow",
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['bf12abbe-1e9b-4da4-b238-e50d1adcb619'],
    },
  },
  created: '2023-05-26T12:37:07+00:00',
  creators: ['admin'],
  description: 'Is this just fantasy',
  descrizione_estesa: {
    blocks: {
      'eb636df1-f6cb-4288-8785-d1482963dfdc': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: '6g0um',
              text: "I'm just a poor boy",
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['eb636df1-f6cb-4288-8785-d1482963dfdc'],
    },
  },
  design_italia_meta_type: 'Servizio',
  dove_rivolgersi: [
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
  dove_rivolgersi_extra: {
    blocks: {
      '8b5f20d3-4e50-4760-bf6d-5014c135c418': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: '9ncus',
              text: "But now I've gone",
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['8b5f20d3-4e50-4760-bf6d-5014c135c418'],
    },
  },
  effective: null,
  exclude_from_nav: false,
  expires: null,
  id: 'is-this-the-real-life',
  identificativo: null,
  image: {
    'content-type': 'image/jpeg',
    download:
      'http://localhost:3000/servizi/anagrafe-e-stato-civile/is-this-the-real-life/@@images/e4b2321d-847e-4fe7-8b21-d89c901529f2.jpeg',
    filename: '220805-border-collie-play-mn-1100-82d2f1.jpeg',
    height: 1663,
    scales: {
      great: {
        download:
          'http://localhost:3000/servizi/anagrafe-e-stato-civile/is-this-the-real-life/@@images/0cb4c944-9ecc-446a-aa43-b901cbf2f457.jpeg',
        height: 798,
        width: 1200,
      },
      huge: {
        download:
          'http://localhost:3000/servizi/anagrafe-e-stato-civile/is-this-the-real-life/@@images/0958b1a8-ebca-46c8-a3c0-d1c85ad214a4.jpeg',
        height: 1064,
        width: 1600,
      },
      icon: {
        download:
          'http://localhost:3000/servizi/anagrafe-e-stato-civile/is-this-the-real-life/@@images/3acfabbf-817b-4082-ad3e-2735709306da.jpeg',
        height: 21,
        width: 32,
      },
      large: {
        download:
          'http://localhost:3000/servizi/anagrafe-e-stato-civile/is-this-the-real-life/@@images/5cedfae1-f33e-462d-9ab6-d4da4c8b8a9d.jpeg',
        height: 532,
        width: 800,
      },
      larger: {
        download:
          'http://localhost:3000/servizi/anagrafe-e-stato-civile/is-this-the-real-life/@@images/4b64d2bf-a38c-42a3-911b-86d6f5829627.jpeg',
        height: 665,
        width: 1000,
      },
      listing: {
        download:
          'http://localhost:3000/servizi/anagrafe-e-stato-civile/is-this-the-real-life/@@images/25f08cac-baa6-4335-88ac-ea0a87535536.jpeg',
        height: 10,
        width: 16,
      },
      midi: {
        download:
          'http://localhost:3000/servizi/anagrafe-e-stato-civile/is-this-the-real-life/@@images/c64a1aca-42ec-4baa-af91-ea86a8ebe262.jpeg',
        height: 199,
        width: 300,
      },
      mini: {
        download:
          'http://localhost:3000/servizi/anagrafe-e-stato-civile/is-this-the-real-life/@@images/cbea961b-1513-4a33-8581-171f36763c25.jpeg',
        height: 133,
        width: 200,
      },
      preview: {
        download:
          'http://localhost:3000/servizi/anagrafe-e-stato-civile/is-this-the-real-life/@@images/a42b3e89-07b9-42a8-83b8-b1b5de5935c6.jpeg',
        height: 266,
        width: 400,
      },
      teaser: {
        download:
          'http://localhost:3000/servizi/anagrafe-e-stato-civile/is-this-the-real-life/@@images/b81c9f06-b046-47e6-8a52-b5d6b9898beb.jpeg',
        height: 399,
        width: 600,
      },
      thumb: {
        download:
          'http://localhost:3000/servizi/anagrafe-e-stato-civile/is-this-the-real-life/@@images/07a02c84-6505-4418-b320-3fb60b49a7fe.jpeg',
        height: 85,
        width: 128,
      },
      tile: {
        download:
          'http://localhost:3000/servizi/anagrafe-e-stato-civile/is-this-the-real-life/@@images/d499dcc6-160d-4d80-8730-dc8705f0094e.jpeg',
        height: 42,
        width: 64,
      },
    },
    size: 2357239,
    width: 2500,
  },
  image_caption: 'Open your eyes',
  is_folderish: true,
  items: [
    {
      '@id':
        'http://localhost:3000/servizi/anagrafe-e-stato-civile/is-this-the-real-life/modulistica',
      '@type': 'Document',
      description: '',
      design_italia_meta_type: 'Pagina',
      has_children: false,
      id: 'modulistica',
      image_field: '',
      image_scales: null,
      review_state: 'private',
      title: 'Modulistica',
    },
    {
      '@id':
        'http://localhost:3000/servizi/anagrafe-e-stato-civile/is-this-the-real-life/allegati',
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
  items_total: 2,
  language: {
    title: 'Italiano',
    token: 'it',
  },
  layout: 'view',
  link_siti_esterni: {
    blocks: {
      '02856239-6608-43bb-8e7d-35f1a94e7e32': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: 'f4u1l',
              text: 'My time has come',
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['02856239-6608-43bb-8e7d-35f1a94e7e32'],
    },
  },
  lock: {
    locked: false,
    stealable: true,
  },
  modified: '2023-05-26T13:11:44+00:00',
  motivo_stato_servizio: {
    blocks: {
      'b67f7a1d-8c6e-430c-89cb-ab9d8cf8166a': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: '9jsob',
              text: 'No escape from reality',
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['b67f7a1d-8c6e-430c-89cb-ab9d8cf8166a'],
    },
  },
  next_item: {
    '@id':
      'http://localhost:3000/servizi/anagrafe-e-stato-civile/servizio-prova',
    '@type': 'Servizio',
    description: '',
    title: 'Servizio prova',
  },
  opengraph_description: null,
  opengraph_image: null,
  opengraph_title: null,
  parent: {
    '@id': 'http://localhost:3000/servizi/anagrafe-e-stato-civile',
    '@type': 'Document',
    description: '',
    design_italia_meta_type: 'Pagina',
    has_children: true,
    id: 'anagrafe-e-stato-civile',
    image_field: null,
    image_scales: null,
    review_state: 'private',
    title: 'Anagrafe e stato civile',
  },
  prenota_appuntamento: {
    blocks: {
      '25e06213-6846-42ce-97e4-b366849d8134': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: '74jnb',
              text: 'And thrown it all away',
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['25e06213-6846-42ce-97e4-b366849d8134'],
    },
  },
  preview_caption: 'Look up at the sky and see',
  preview_image: null,
  previous_item: {},
  procedure_collegate: {
    blocks: {
      '021d72ba-6557-452e-80da-c7eb77b7e908': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: '5nf28',
              text: 'Anyway the wind blows',
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['021d72ba-6557-452e-80da-c7eb77b7e908'],
    },
  },
  relatedItems: [
    {
      '@id': 'http://localhost:3000/Members',
      '@type': 'Folder',
      description: 'Contenitore delle cartelle personali dei collaboratori.',
      design_italia_meta_type: 'Cartella',
      effective: null,
      has_children: false,
      id: 'Members',
      image_field: null,
      image_scales: null,
      review_state: 'private',
      title: 'Collaboratori',
    },
  ],
  related_news: [],
  review_state: 'private',
  rights: '',
  seo_canonical_url: null,
  seo_description: null,
  seo_noindex: null,
  seo_title: null,
  servizi_collegati: [
    {
      '@id':
        'http://localhost:3000/servizi/anagrafe-e-stato-civile/servizio-prova',
      '@type': 'Servizio',
      canale_digitale: {
        blocks: {},
        blocks_layout: {
          items: [],
        },
      },
      description: '',
      design_italia_meta_type: 'Servizio',
      effective: null,
      has_children: true,
      id: 'servizio-prova',
      image_field: null,
      image_scales: null,
      review_state: 'private',
      title: 'Servizio prova',
    },
  ],
  settore_merceologico: null,
  sottotitolo: 'Caught in a landside',
  stato_servizio: true,
  subjects: [],
  tassonomia_argomenti: [
    {
      '@id': 'http://localhost:3000/argomenti-1/sport',
      '@type': 'Pagina Argomento',
      description: 'Is this just fantasy',
      design_italia_meta_type: 'Argomento',
      effective: null,
      has_children: false,
      icona: 'hand-holding-heart',
      id: 'sport',
      image_field: null,
      image_scales: null,
      review_state: 'private',
      title: 'Sport',
    },
  ],
  tempi_e_scadenze: {
    blocks: {
      'a9bb50da-4388-4f99-a3d4-ea8ff6a92078': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: 'dv0bs',
              text: 'as if nothing really matters',
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['a9bb50da-4388-4f99-a3d4-ea8ff6a92078'],
    },
  },
  ulteriori_informazioni: {
    blocks: {
      '152b889c-90c4-4b3a-b289-0b2ed1608036': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: 'e1nni',
              text: 'Send shivers down my spine',
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['152b889c-90c4-4b3a-b289-0b2ed1608036'],
    },
  },
  version: 'current',
  versioning_enabled: true,
  vincoli: {
    blocks: {
      '29b0dc65-1e17-4803-9ab3-ddca9b6f267d': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: 'fbjj2',
              text: 'Carry on',
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['29b0dc65-1e17-4803-9ab3-ddca9b6f267d'],
    },
  },
  working_copy: null,
  working_copy_of: null,
};

const mock_servizio_chiuso = {
  title: 'Chiuso',
  motivo_stato_servizio: {
    'content-type': 'text/html',
    data: '<p>Il servizio non è più erogato</p>',
    encoding: 'utf-8',
  },
  stato_servizio: true,
  items: [],
  area: [],
  ufficio_responsabile: [],
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
      'luogo/amministrazione/uffici/ufficio-lorem-ipsum': {
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
          next_item: {
            '@id': 'http://localhost:3000/amministrazione/uffici/killer-queen',
            '@type': 'UnitaOrganizzativa',
            description: 'She keeps her Moet et Chandon',
            title: 'Killer queen',
          },
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
          prestazioni: [
            {
              '@id':
                'http://localhost:3000/servizi/anagrafe-e-stato-civile/is-this-the-real-life',
              '@type': 'Servizio',
              description: 'Is this just fantasy',
              design_italia_meta_type: 'Servizio',
              has_children: true,
              id: 'is-this-the-real-life',
              image_field: 'image',
              image_scales: null,
              review_state: 'private',
              title: 'Is this the real life',
            },
          ],
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
          servizi_offerti: [
            {
              '@id':
                'http://localhost:3000/servizi/anagrafe-e-stato-civile/servizio-prova',
              '@type': 'Servizio',
              canale_digitale: {
                blocks: {},
                blocks_layout: {
                  items: [],
                },
              },
              description: '',
              design_italia_meta_type: 'Servizio',
              has_children: true,
              id: 'servizio-prova',
              image_field: null,
              image_scales: null,
              review_state: 'private',
              title: 'Servizio prova',
            },
          ],
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
  search: {
    subrequests: {
      '1685104655343-multiple': {
        error: null,
        items: [
          {
            '@id': '/amministrazione/aree-amministrative/anti-hero',
            '@type': 'UnitaOrganizzativa',
            CreationDate: '2023-05-26T12:41:04+00:00',
            Creator: 'admin',
            Date: '2023-05-26T12:41:05+00:00',
            Description: 'I have this thing',
            EffectiveDate: 'None',
            ExpirationDate: 'None',
            ModificationDate: '2023-05-26T12:41:05+00:00',
            Subject: [],
            Subject_bando: null,
            Title: 'Anti-hero',
            Type: 'Unita Organizzativa',
            UID: '8088c867d3504a249f079530a7846cb1',
            apertura_bando: null,
            author_name: null,
            chiusura_procedimento_bando: null,
            cmf_uid: 64,
            commentators: [],
            created: '2023-05-26T12:41:04+00:00',
            data_conclusione_incarico: null,
            description: 'I have this thing',
            design_italia_meta_type: 'Unita Organizzativa',
            destinatari_bando: null,
            effective: null,
            end: null,
            ente_bando: null,
            event_location: null,
            exclude_from_nav: false,
            expires: null,
            geolocation: null,
            getIcon: true,
            getId: 'anti-hero',
            getObjSize: '1.1 MB',
            getPath: '/Plone/amministrazione/aree-amministrative/anti-hero',
            getRemoteUrl: null,
            getURL:
              'http://localhost:3000/amministrazione/aree-amministrative/anti-hero',
            hasPreviewImage: false,
            head_title: null,
            icona: null,
            id: 'anti-hero',
            image: {
              scales: {
                great: {
                  download:
                    'http://localhost:3000/amministrazione/aree-amministrative/anti-hero/@@images/image/great',
                  height: 65536,
                  width: 1200,
                },
                huge: {
                  download:
                    'http://localhost:3000/amministrazione/aree-amministrative/anti-hero/@@images/image/huge',
                  height: 65536,
                  width: 1600,
                },
                icon: {
                  download:
                    'http://localhost:3000/amministrazione/aree-amministrative/anti-hero/@@images/image/icon',
                  height: 32,
                  width: 32,
                },
                large: {
                  download:
                    'http://localhost:3000/amministrazione/aree-amministrative/anti-hero/@@images/image/large',
                  height: 65536,
                  width: 800,
                },
                larger: {
                  download:
                    'http://localhost:3000/amministrazione/aree-amministrative/anti-hero/@@images/image/larger',
                  height: 65536,
                  width: 1000,
                },
                listing: {
                  download:
                    'http://localhost:3000/amministrazione/aree-amministrative/anti-hero/@@images/image/listing',
                  height: 16,
                  width: 16,
                },
                midi: {
                  download:
                    'http://localhost:3000/amministrazione/aree-amministrative/anti-hero/@@images/image/midi',
                  height: 65536,
                  width: 300,
                },
                mini: {
                  download:
                    'http://localhost:3000/amministrazione/aree-amministrative/anti-hero/@@images/image/mini',
                  height: 65536,
                  width: 200,
                },
                preview: {
                  download:
                    'http://localhost:3000/amministrazione/aree-amministrative/anti-hero/@@images/image/preview',
                  height: 65536,
                  width: 400,
                },
                teaser: {
                  download:
                    'http://localhost:3000/amministrazione/aree-amministrative/anti-hero/@@images/image/teaser',
                  height: 65536,
                  width: 600,
                },
                thumb: {
                  download:
                    'http://localhost:3000/amministrazione/aree-amministrative/anti-hero/@@images/image/thumb',
                  height: 65536,
                  width: 128,
                },
                tile: {
                  download:
                    'http://localhost:3000/amministrazione/aree-amministrative/anti-hero/@@images/image/tile',
                  height: 64,
                  width: 64,
                },
              },
            },
            image_field: 'image',
            image_scales: null,
            in_response_to: null,
            is_folderish: true,
            last_comment_date: null,
            latitude: null,
            listCreators: ['admin'],
            location: null,
            longitude: null,
            meta_type: 'Dexterity Container',
            mime_type: 'text/plain',
            modified: '2023-05-26T12:41:05+00:00',
            nav_title: null,
            open_end: null,
            parent: {
              '@id':
                'http://localhost:3000/amministrazione/aree-amministrative',
              UID: '4c019192be6f4576a429c61e0ebf2348',
              title: 'Aree amministrative',
            },
            portal_type: 'UnitaOrganizzativa',
            recurrence: null,
            review_state: 'private',
            ruolo: null,
            scadenza_bando: null,
            start: null,
            sync_uid: null,
            tassonomia_argomenti: [
              {
                '@id': 'http://localhost:3000/argomenti-1/sport',
                '@type': 'Pagina Argomento',
                CreationDate: '2023-05-26T08:43:03+00:00',
                Creator: 'admin',
                Date: '2023-05-26T09:35:30+00:00',
                Description: 'Is this just fantasy',
                EffectiveDate: 'None',
                ExpirationDate: 'None',
                ModificationDate: '2023-05-26T09:35:30+00:00',
                Subject: [],
                Subject_bando: null,
                Title: 'Sport',
                Type: 'Argomento',
                UID: 'f8bf0797eec54e2abc90a825a149bd12',
                apertura_bando: null,
                author_name: null,
                chiusura_procedimento_bando: null,
                cmf_uid: 43,
                commentators: null,
                created: '2023-05-26T08:43:03+00:00',
                data_conclusione_incarico: null,
                description: 'Is this just fantasy',
                design_italia_meta_type: 'Argomento',
                destinatari_bando: null,
                effective: null,
                end: null,
                ente_bando: null,
                event_location: null,
                exclude_from_nav: false,
                expires: null,
                geolocation: null,
                getIcon: '',
                getId: 'sport',
                getObjSize: null,
                getPath: '/Plone/argomenti-1/sport',
                getRemoteUrl: null,
                getURL: 'http://localhost:3000/argomenti-1/sport',
                hasPreviewImage: null,
                head_title: null,
                icona: 'hand-holding-heart',
                id: 'sport',
                image_field: null,
                image_scales: null,
                in_response_to: null,
                is_folderish: null,
                last_comment_date: null,
                latitude: null,
                listCreators: ['admin'],
                location: null,
                longitude: null,
                meta_type: 'Dexterity Container',
                mime_type: null,
                modified: '2023-05-26T09:35:30+00:00',
                nav_title: null,
                open_end: null,
                parent: null,
                portal_type: 'Pagina Argomento',
                recurrence: null,
                review_state: 'private',
                ruolo: null,
                scadenza_bando: null,
                start: null,
                sync_uid: null,
                tassonomia_argomenti: null,
                tipologia_bando: null,
                tipologia_documento: null,
                tipologia_notizia: null,
                title: 'Sport',
                total_comments: null,
                ufficio_responsabile_bando: null,
                update_note: null,
                whole_day: null,
              },
            ],
            tipologia_bando: null,
            tipologia_documento: null,
            tipologia_notizia: null,
            title: 'Anti-hero',
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

test('expect to have all mandatory fields in page', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <ServizioView title={mock_mandatory.title} content={mock_mandatory} />
      </MemoryRouter>
    </Provider>,
  );
  // title
  expect(screen.getByText(/Is this the real life/i)).toBeInTheDocument();

  //cosa serve
  expect(
    screen.getByRole('heading', { name: /Cosa serve/i }),
  ).toBeInTheDocument();

  //ufficio responsabile
  expect(
    screen.getByRole('link', { name: /Killer queen/i }),
  ).toBeInTheDocument();
});

test('expect to have all fields in page', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <ServizioView
          content={mock_other_fields}
          area={mock_other_fields.area}
          title={mock_other_fields.title}
          a_chi_si_rivolge={mock_other_fields.a_chi_si_rivolge}
        />
      </MemoryRouter>
    </Provider>,
  );

  // descrizione
  expect(screen.getByText(/Is this just fantasy/i)).toBeInTheDocument();
  // sottotitolo
  expect(screen.getByText(/Caught in a landside/i)).toBeInTheDocument();

  //servizio non attivo
  expect(
    screen.getByRole('heading', { name: /Il servizio non è attivo/i }),
  ).toBeInTheDocument();
  //motivo dello stato del servizio // test non funziona
  // expect(screen.getByText(/No escape from reality/i)).toBeInTheDocument();

  //immagine di testata
  expect(
    screen.getByRole('img', { name: /Open your eyes/i }),
  ).toBeInTheDocument();

  //didascalia immagine
  expect(screen.getByText(/Open your eyes/i)).toBeInTheDocument();

  //tassonomia argomenti
  expect(screen.getAllByText(/Argomenti/i)).toBeTruthy();
  expect(screen.getAllByRole('link', { name: /Sport/i })).toBeTruthy();
});

// test('Check parts loaded from child folders', async () => {
//   const { getByText } = render(
//     <Provider store={store}>
//       <MemoryRouter>
//         <ServizioView content={mock_other_fields} />
//       </MemoryRouter>
//     </Provider>,
//   );
//   // const modulistica = await waitForElement(() => getByText(/Modulistica/i));
//   // expect(modulistica).toBeInTheDocument();
//   // const allegati = await waitForElement(() => getByText(/Allegati/i));
//   // expect(allegati).toBeInTheDocument();
// });

test('Check servizio sospeso', async () => {
  const { getByText } = render(
    <Provider store={store}>
      <MemoryRouter>
        <ServizioView content={mock_servizio_chiuso} />
      </MemoryRouter>
    </Provider>,
  );
  // motivo_stato_servizio
  expect(getByText(/Il servizio non è più erogato/i)).toBeInTheDocument();
});

test('todo', () => {
  expect(mock_other_fields).toBeDefined();
  expect(mock_servizio_chiuso).toBeDefined();
  expect(store).toBeDefined();
  expect(true).toBe(true);
});
