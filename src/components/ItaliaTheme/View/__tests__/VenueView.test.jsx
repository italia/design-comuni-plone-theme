import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import VenueView from '../VenueView/VenueView';
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
  '@id': 'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody',
  '@type': 'Venue',
  UID: 'f936f47d0dc34a6c98f40b4d1e1baf7e',
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
  description: 'Is this the real life?',
  geolocation: {
    latitude: 41.8337833,
    longitude: 12.4677863,
  },
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
  items: [],
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
  street: 'Via Liszt, 21',
  zip_code: '00144',
  title: 'Bohemian Rhapsody',
};

const mock_allfields = {
  ...mock_mandatory,
  allow_discussion: false,
  changeNote: '',
  circoscrizione: "Because I'm easy come",
  correlato_in_evidenza: [
    {
      '@id':
        'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista',
      '@type': 'Event',
      description:
        'Dal 2 al 3 giugno torna il torneo di beneficienza “Tutti in pista”. La raccolta fondi finanzierà progetti sportivi per ragazzi e ragazze.',
      design_italia_meta_type: 'Evento',
      effective: '2023-01-03T15:40:33+00:00',
      end: '2023-06-03T15:00:00+00:00',
      has_children: true,
      id: 'torneo-di-beneficienza-tutti-in-pista',
      image_field: 'preview_image',
      image_scales: {
        preview_image: [
          {
            'content-type': 'image/jpeg',
            download:
              'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/preview_image-5184-74c3e55aa69d3eec7332cb8028f247f0.jpeg',
            filename: 'national-cancer-institute.jpeg',
            height: 3456,
            scales: {
              gallery: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/preview_image-250-bd9d757f9bab5f7fe8ae1ac4fbb1adc5.jpeg',
                height: 166,
                width: 250,
              },
              great: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/preview_image-1200-502b536559cea66d298e6857671cfaec.jpeg',
                height: 800,
                width: 1200,
              },
              huge: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/preview_image-1600-cef7453cc7e5539995203acfd0fd67af.jpeg',
                height: 1066,
                width: 1600,
              },
              icon: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/preview_image-32-3e9daca363c77b93aed78e17d721a3bc.jpeg',
                height: 21,
                width: 32,
              },
              large: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/preview_image-800-7e93626815d089878e6ce731efd8561e.jpeg',
                height: 533,
                width: 800,
              },
              larger: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/preview_image-1000-fddf730aa0c1379ad7251efebf48808f.jpeg',
                height: 666,
                width: 1000,
              },
              listing: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/preview_image-16-b792a861a9f3fe0dec3a5689c648bbbd.jpeg',
                height: 10,
                width: 16,
              },
              midi: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/preview_image-300-f5465a4e5f233f8d2a63880b6a8d8eea.jpeg',
                height: 200,
                width: 300,
              },
              mini: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/preview_image-200-f9542fccc1ed011fde2c79b43b0927be.jpeg',
                height: 133,
                width: 200,
              },
              preview: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/preview_image-400-a7b07ee75a650233ddb8a659ca0bbe27.jpeg',
                height: 266,
                width: 400,
              },
              teaser: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/preview_image-600-cf3e72563ace502a8b9e75ade4f6ca49.jpeg',
                height: 400,
                width: 600,
              },
              thumb: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/preview_image-128-e40ea7e792fbba0a30bd5c22cdb1a3a4.jpeg',
                height: 85,
                width: 128,
              },
              tile: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/preview_image-64-8c3cf625de779a0bc3c0a28d2e3cc4be.jpeg',
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
      start: '2023-06-02T14:39:39+00:00',
      title: 'Torneo di beneficienza "Tutti in pista"',
    },
  ],
  country: {
    title: 'Italia',
    token: '380',
  },
  created: '2023-01-31T11:21:07+00:00',
  description: 'Is this the real life?',
  descrizione_completa: {
    blocks: {
      'fca04fd2-6429-4de6-936a-be505443414c': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: '9ee9d',
              text: 'Look up to the skies and see',
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['fca04fd2-6429-4de6-936a-be505443414c'],
    },
  },
  design_italia_meta_type: 'Luogo',
  elementi_di_interesse: {
    blocks: {
      'e2710e04-0cf0-48d5-8c14-5d28e972526d': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: 'b1p0d',
              text: 'Easy go',
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['e2710e04-0cf0-48d5-8c14-5d28e972526d'],
    },
  },
  id: 'bohemian-rhapsody',
  identificativo_mibac: null,
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
    },
  ],
  items_total: 1,
  language: {
    title: 'Italiano',
    token: 'it',
  },
  layout: 'venue_view',
  lock: {},
  luoghi_correlati: [
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
  modified: '2023-01-31T11:21:08+00:00',
  next_item: {},
  nome_alternativo: 'No escape from reality',
  notes: {
    'content-type': 'text/html',
    data: '<p>Little high</p>',
    encoding: 'utf8',
  },
  opengraph_description: null,
  opengraph_image: null,
  opengraph_title: null,
  orario_pubblico: {
    blocks: {
      'd6ba0f5f-45de-413f-8341-9e09e409c9fa': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: '1u9c2',
              text: 'Little low',
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['d6ba0f5f-45de-413f-8341-9e09e409c9fa'],
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
  quartiere: 'I need no sympathy',
  relatedItems: [
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
      image_field: null,
      image_scales: null,
      review_state: 'published',
      title: 'Sport nel verde: le iniziative della prossima edizione',
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
  ],
  review_state: 'private',
  sede_di: [
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
      title: "I'm just a poor boy",
      zip_code: 'Easy go',
    },
  ],
  seo_canonical_url: null,
  seo_description: null,
  seo_noindex: null,
  seo_title: null,
  struttura_responsabile: {
    blocks: {
      '7bac38f6-622b-480c-9691-400ac750529b': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [
                {
                  key: 0,
                  length: 22,
                  offset: 0,
                },
              ],
              inlineStyleRanges: [],
              key: '7i9c9',
              text: 'Any way the wind blows',
              type: 'unstyled',
            },
          ],
          entityMap: {
            0: {
              data: {
                dataElement: '',
                url: 'http://localhost:3000/',
              },
              mutability: 'MUTABLE',
              type: 'LINK',
            },
          },
        },
      },
    },
    blocks_layout: {
      items: ['7bac38f6-622b-480c-9691-400ac750529b'],
    },
  },
  struttura_responsabile_correlati: [
    {
      '@id': 'http://localhost:3000/amministrazione/uffici/giunta-e-consiglio',
      '@type': 'UnitaOrganizzativa',
      address: '',
      circoscrizione: null,
      city: null,
      contact_info: [],
      description: '',
      design_italia_meta_type: 'Unita Organizzativa',
      effective: null,
      geolocation: {
        latitude: 0,
        longitude: 0,
      },
      has_children: true,
      id: 'giunta-e-consiglio',
      image_field: null,
      image_scales: null,
      nome_sede: null,
      quartiere: null,
      review_state: 'private',
      street: null,
      title: 'Giunta e consiglio',
      zip_code: null,
    },
  ],
  subjects: [],
  tassonomia_argomenti: [
    {
      '@id': 'http://localhost:3000/argomenti/vivere-la-citta',
      '@type': 'Pagina Argomento',
      description: '',
      design_italia_meta_type: 'Argomento',
      effective: null,
      has_children: false,
      id: 'vivere-la-citta',
      image_field: null,
      image_scales: null,
      review_state: 'private',
      title: 'Vivere la città',
    },
  ],
  tipologia_luogo: [
    {
      title: 'Architettura Militare e fortificata » Fortezza',
      token: 'fortezza',
    },
  ],
  ulteriori_informazioni: {
    blocks: {
      'c1b95735-a523-4234-b7e4-ba6bad186194': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: '5sg08',
              text: "doesn't really matter to me",
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['c1b95735-a523-4234-b7e4-ba6bad186194'],
    },
  },
  venue_services: [],
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
      'generic_card_/novita': {
        loading: false,
        loaded: true,
        error: null,
        data: {
          '@components': {
            actions: {
              '@id': 'http://localhost:3000/novita/@actions',
            },
            aliases: {
              '@id': 'http://localhost:3000/novita/@aliases',
            },
            breadcrumbs: {
              '@id': 'http://localhost:3000/novita/@breadcrumbs',
            },
            contextnavigation: {
              '@id': 'http://localhost:3000/novita/@contextnavigation',
            },
            navigation: {
              '@id': 'http://localhost:3000/novita/@navigation',
            },
            subsite: {},
            translations: {
              '@id': 'http://localhost:3000/novita/@translations',
            },
            types: {
              '@id': 'http://localhost:3000/novita/@types',
            },
            workflow: {
              '@id': 'http://localhost:3000/novita/@workflow',
            },
          },
          '@id': 'http://localhost:3000/novita',
          '@type': 'Document',
          UID: 'a81dfe66d4cc44b69cc5e2f53f5ec6f8',
          allow_discussion: false,
          blocks: {
            '8459baa4-cfa5-426d-bcd0-e7c82c9b94e0': {
              '@type': 'title',
            },
            'a813cb17-54ce-400b-b767-1a5a485c844e': {
              '@type': 'listing',
              always_show_image: false,
              block: 'a813cb17-54ce-400b-b767-1a5a485c844e',
              headlineTag: 'h2',
              hide_dates: false,
              natural_image_size: false,
              query: [],
              querystring: {
                query: [
                  {
                    i: 'portal_type',
                    o: 'plone.app.querystring.operation.selection.any',
                    v: ['News Item'],
                  },
                ],
                sort_order: 'ascending',
              },
              set_four_columns: false,
              show_description: true,
              show_detail_link: false,
              show_icon: false,
              show_path_filters: false,
              show_section: false,
              show_topics: false,
              show_type: false,
              title: 'In evidenza',
              variation: 'cardWithImageTemplate',
            },
            'af80fd3b-1b66-40f4-be80-9ae6b165a950': {
              '@type': 'text',
            },
            'f126a894-3094-4240-8a74-004f787516bc': {
              '@type': 'listing',
              block: 'f126a894-3094-4240-8a74-004f787516bc',
              headlineTag: 'h2',
              hide_dates: false,
              query: [],
              querystring: {
                query: [
                  {
                    i: 'portal_type',
                    o: 'plone.app.querystring.operation.selection.any',
                    v: ['Document'],
                  },
                  {
                    i: 'path',
                    o: 'plone.app.querystring.operation.string.relativePath',
                    v: '',
                  },
                ],
                sort_order: 'ascending',
              },
              show_description: true,
              show_detail_link: false,
              show_icon: false,
              show_path_filters: false,
              show_section: false,
              show_type: false,
              title: 'Esplora per categoria',
              variation: 'simpleCard',
            },
          },
          blocks_layout: {
            items: [
              '8459baa4-cfa5-426d-bcd0-e7c82c9b94e0',
              'a813cb17-54ce-400b-b767-1a5a485c844e',
              'f126a894-3094-4240-8a74-004f787516bc',
              'af80fd3b-1b66-40f4-be80-9ae6b165a950',
            ],
          },
          changeNote: '',
          contributors: [],
          correlato_in_evidenza: [],
          created: '2023-01-03T16:15:01+00:00',
          creators: ['admin'],
          description:
            'Tutte le novità comunali per i cittadini per restare aggiornati.',
          design_italia_meta_type: 'Pagina',
          effective: null,
          exclude_from_nav: false,
          expires: null,
          id: 'novita',
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
              '@id': 'http://localhost:3000/novita/notizie',
              '@type': 'Document',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula fermentum eros a elementum. Donec.',
              design_italia_meta_type: 'Pagina',
              has_children: true,
              id: 'notizie',
              image_field: '',
              image_scales: null,
              review_state: 'private',
              title: 'Notizie',
              url: '/novita/notizie',
            },
            {
              '@id': 'http://localhost:3000/novita/comunicati-stampa',
              '@type': 'Document',
              description: '',
              design_italia_meta_type: 'Pagina',
              has_children: false,
              id: 'comunicati-stampa',
              image_field: '',
              image_scales: null,
              review_state: 'private',
              title: 'Comunicati (stampa)',
              url: '/novita/comunicati-stampa',
            },
            {
              '@id': 'http://localhost:3000/novita/eventi',
              '@type': 'Document',
              description: '',
              design_italia_meta_type: 'Pagina',
              has_children: false,
              id: 'eventi',
              image_field: '',
              image_scales: null,
              review_state: 'private',
              title: 'Eventi',
              url: '/novita/eventi',
            },
          ],
          items_total: 3,
          language: '',
          layout: 'document_view',
          lock: {
            locked: false,
            stealable: true,
          },
          modified: '2023-01-04T15:38:11+00:00',
          mostra_bottoni_condivisione: false,
          mostra_navigazione: false,
          next_item: {
            '@id': 'http://localhost:3000/documenti-e-dati',
            '@type': 'Document',
            description:
              'Donec in consequat nunc. Duis semper fermentum lacus, ac condimentum justo auctor a. Nam erat erat, porta vel pharetra in, ullamcorper vel turpis.',
            title: 'Documenti e dati',
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
            '@id': 'http://localhost:3000/servizi',
            '@type': 'Document',
            description:
              'Tutti i servizi comunali per i cittadini, disponibili online o a sportello, per richiedere documenti e permessi, iscriversi a graduatorie ed effettuare pagamenti.',
            title: 'Servizi',
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
          title: 'Novità',
          version: 'current',
          versioning_enabled: true,
          working_copy: null,
          working_copy_of: null,
        },
      },
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
              title: "I'm just a poor boy",
              zip_code: 'Easy go',
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
      '/amministrazione/uffici/ufficio-delle-attivita-produttive': {
        loading: false,
        loaded: true,
        error: null,
        data: {
          '@components': {
            actions: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/ufficio-delle-attivita-produttive/@actions',
            },
            aliases: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/ufficio-delle-attivita-produttive/@aliases',
            },
            breadcrumbs: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/ufficio-delle-attivita-produttive/@breadcrumbs',
            },
            contextnavigation: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/ufficio-delle-attivita-produttive/@contextnavigation',
            },
            navigation: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/ufficio-delle-attivita-produttive/@navigation',
            },
            subsite: {},
            translations: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/ufficio-delle-attivita-produttive/@translations',
            },
            types: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/ufficio-delle-attivita-produttive/@types',
            },
            workflow: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/ufficio-delle-attivita-produttive/@workflow',
            },
          },
          '@id':
            'http://localhost:3000/amministrazione/uffici/ufficio-delle-attivita-produttive',
          '@type': 'PuntoDiContatto',
          UID: '9f6029b4eb94454590c674f83158af5f',
          allow_discussion: false,
          changeNote: '',
          contributors: [],
          created: '2023-01-04T13:44:17+00:00',
          creators: ['admin'],
          description: '',
          design_italia_meta_type: 'Punto di Contatto',
          effective: null,
          exclude_from_nav: false,
          expires: null,
          id: 'ufficio-delle-attivita-produttive',
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
              '@id':
                'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody',
              '@type': 'Venue',
              circoscrizione: null,
              city: 'Roma',
              country: '380',
              description: 'Is this the real life?',
              design_italia_meta_type: 'Luogo',
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
                blocks: {
                  'd6ba0f5f-45de-413f-8341-9e09e409c9fa': {
                    '@type': 'text',
                  },
                },
                blocks_layout: {
                  items: ['d6ba0f5f-45de-413f-8341-9e09e409c9fa'],
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
          modified: '2023-01-04T13:44:17+00:00',
          next_item: {
            '@id':
              'http://localhost:3000/amministrazione/uffici/ufficio-delle-attivita-produttive-1',
            '@type': 'UnitaOrganizzativa',
            description: '',
            title: 'Ufficio delle Attività Produttive',
          },
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
          persona: [],
          persone_correlate: [
            {
              '@id':
                'http://localhost:3000/amministrazione/personale-amministrativo/franco-franchini',
              '@type': 'Persona',
              description: '',
              design_italia_meta_type: 'Persona pubblica',
              has_children: true,
              id: 'franco-franchini',
              image_field: 'foto_persona',
              image_scales: {
                foto_persona: [null],
              },
              incarichi: '',
              review_state: 'private',
              title: 'Franco Franchini',
            },
            {
              '@id':
                'http://localhost:3000/amministrazione/personale-amministrativo/gabriele-bianchi',
              '@type': 'Persona',
              description: 'Assessore allo sport',
              design_italia_meta_type: 'Persona pubblica',
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
          previous_item: {
            '@id':
              'http://localhost:3000/amministrazione/uffici/assessorato-al-turismo',
            '@type': 'UnitaOrganizzativa',
            description: '',
            title: 'Assessorato al Turismo',
          },
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
                'http://localhost:3000/amministrazione/uffici/ufficio-delle-attivita-produttive-1',
              '@type': 'UnitaOrganizzativa',
              address: '',
              circoscrizione: null,
              city: null,
              contact_info: [
                {
                  '@id':
                    'http://localhost:3000/amministrazione/uffici/ufficio-delle-attivita-produttive',
                  '@type': 'PuntoDiContatto',
                  description: '',
                  design_italia_meta_type: 'Punto di Contatto',
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
              description: '',
              design_italia_meta_type: 'Unita Organizzativa',
              geolocation: {
                latitude: 0,
                longitude: 0,
              },
              has_children: true,
              id: 'ufficio-delle-attivita-produttive-1',
              image_field: null,
              image_scales: null,
              nome_sede: null,
              quartiere: null,
              review_state: 'private',
              street: null,
              title: 'Ufficio delle Attività Produttive',
              zip_code: null,
            },
          ],
          subjects: [],
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
          version: 'current',
          versioning_enabled: true,
          working_copy: null,
          working_copy_of: null,
        },
      },
      'generic_card_/amministrazione/enti-e-fondazioni/im-just-a-poor-boy': {
        loading: false,
        loaded: true,
        error: null,
        data: {
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
                  'http://localhost:3000/amministrazione/enti-e-fondazioni/im-just-a-poor-boy/@@images/image-16-c9f8abe915729a3ddefa86e5848ac000.jpeg',
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
              url: '/amministrazione/enti-e-fondazioni/im-just-a-poor-boy/allegati',
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
          modified: '2023-01-31T16:23:45+00:00',
          next_item: {},
          nome_sede: 'Spare him his life from this monstrosity',
          opengraph_description: null,
          opengraph_image: null,
          opengraph_title: null,
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
          sede: [
            {
              '@id':
                'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody',
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
                blocks: {
                  'd6ba0f5f-45de-413f-8341-9e09e409c9fa': {
                    '@type': 'text',
                  },
                },
                blocks_layout: {
                  items: ['d6ba0f5f-45de-413f-8341-9e09e409c9fa'],
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
          tipologia_organizzazione: {
            title: 'Struttura amministrativa',
            token: 'struttura_amministrativa',
          },
          title: "I'm just a poor boy",
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
        },
      },
      'generic_card_/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye': {
        loading: false,
        loaded: true,
        error: null,
        data: {
          '@components': {
            actions: {
              '@id':
                'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye/@actions',
            },
            aliases: {
              '@id':
                'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye/@aliases',
            },
            breadcrumbs: {
              '@id':
                'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye/@breadcrumbs',
            },
            contextnavigation: {
              '@id':
                'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye/@contextnavigation',
            },
            navigation: {
              '@id':
                'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye/@navigation',
            },
            subsite: {},
            translations: {
              '@id':
                'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye/@translations',
            },
            types: {
              '@id':
                'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye/@types',
            },
            workflow: {
              '@id':
                'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye/@workflow',
            },
          },
          '@id':
            'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye',
          '@type': 'News Item',
          UID: '541addc65a904a96a8bdf9dff0765d58',
          a_cura_di: [
            {
              '@id':
                'http://localhost:3000/amministrazione/uffici/ufficio-delle-attivita-produttive-1',
              '@type': 'UnitaOrganizzativa',
              address: '',
              circoscrizione: null,
              city: null,
              contact_info: [
                {
                  '@id':
                    'http://localhost:3000/amministrazione/uffici/ufficio-delle-attivita-produttive',
                  '@type': 'PuntoDiContatto',
                  description: '',
                  design_italia_meta_type: 'Punto di Contatto',
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
              description: '',
              design_italia_meta_type: 'Unita Organizzativa',
              effective: null,
              geolocation: {
                latitude: 0,
                longitude: 0,
              },
              has_children: true,
              id: 'ufficio-delle-attivita-produttive-1',
              image_field: null,
              image_scales: null,
              nome_sede: null,
              quartiere: null,
              review_state: 'private',
              street: null,
              title: 'Ufficio delle Attività Produttive',
              zip_code: null,
            },
          ],
          a_cura_di_persone: [
            {
              '@id':
                'http://localhost:3000/amministrazione/personale-amministrativo/marco-murgia-1',
              '@type': 'Persona',
              description: '',
              design_italia_meta_type: 'Persona pubblica',
              effective: null,
              has_children: true,
              id: 'marco-murgia-1',
              image_field: 'foto_persona',
              image_scales: {
                foto_persona: [null],
              },
              incarichi: 'Incarico di Marco Murgia',
              review_state: 'private',
              title: 'Marco Murgia',
            },
          ],
          allow_discussion: false,
          changeNote: '',
          contributors: [],
          correlato_in_evidenza: [],
          created: '2023-01-31T10:42:29+00:00',
          creators: ['admin'],
          description: 'So you think you can love me and leave me to die',
          descrizione_estesa: {
            blocks: {
              '0d06de62-8d05-4b15-a8f5-99705ec89137': {
                '@type': 'text',
                text: {
                  blocks: [
                    {
                      data: {},
                      depth: 0,
                      entityRanges: [],
                      inlineStyleRanges: [],
                      key: '5nlq',
                      text: 'Oh, baby',
                      type: 'unstyled',
                    },
                  ],
                  entityMap: {},
                },
              },
            },
            blocks_layout: {
              items: ['0d06de62-8d05-4b15-a8f5-99705ec89137'],
            },
          },
          design_italia_meta_type: 'notizia',
          effective: '2023-01-26T12:28:00+00:00',
          exclude_from_nav: false,
          expires: '2023-02-28T12:31:00+00:00',
          id: 'so-you-think-you-can-stop-me-and-spit-in-my-eye',
          image: {
            'content-type': 'image/jpeg',
            download:
              'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye/@@images/image-6240-a67a4e08b95d74c1a6aaa264629cc8ca.jpeg',
            filename: 'woman-having-online-meeting-work.jpg',
            height: 4160,
            scales: {
              gallery: {
                download:
                  'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye/@@images/image-250-cec6593cfb510d857f2417ad9e5594c9.jpeg',
                height: 166,
                width: 250,
              },
              great: {
                download:
                  'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye/@@images/image-1200-b2ce1605d02c0e2bd890725499dd7d14.jpeg',
                height: 800,
                width: 1200,
              },
              huge: {
                download:
                  'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye/@@images/image-1600-05c48f4d277d86179f4a28cc7c6acb59.jpeg',
                height: 1066,
                width: 1600,
              },
              icon: {
                download:
                  'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye/@@images/image-32-5e06c5b54fd11882b2bc6f4eb47463e3.jpeg',
                height: 21,
                width: 32,
              },
              large: {
                download:
                  'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye/@@images/image-800-6465ce31efb78ddabed5b25a33569a19.jpeg',
                height: 533,
                width: 800,
              },
              larger: {
                download:
                  'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye/@@images/image-1000-413a4ac537148fd7465d9387ffb0167c.jpeg',
                height: 666,
                width: 1000,
              },
              listing: {
                download:
                  'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye/@@images/image-16-d50c56fec248e061988d72e8a5452885.jpeg',
                height: 10,
                width: 16,
              },
              midi: {
                download:
                  'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye/@@images/image-300-3a92839fcffb82a672b2419ce44acf2e.jpeg',
                height: 200,
                width: 300,
              },
              mini: {
                download:
                  'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye/@@images/image-200-f50e135ded517ae2b1dadecb9d073e7b.jpeg',
                height: 133,
                width: 200,
              },
              preview: {
                download:
                  'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye/@@images/image-400-701c21c6be73ed1dc6f0eb77bd23069a.jpeg',
                height: 266,
                width: 400,
              },
              teaser: {
                download:
                  'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye/@@images/image-600-f26ef5446a0888bac9a38767241accb8.jpeg',
                height: 400,
                width: 600,
              },
              thumb: {
                download:
                  'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye/@@images/image-128-8bdc68adf44a111b63a6a3bd100ba45a.jpeg',
                height: 85,
                width: 128,
              },
              tile: {
                download:
                  'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye/@@images/image-64-86ce8fb2c45d8a5d817830876ceae56f.jpeg',
                height: 42,
                width: 64,
              },
            },
            size: 1195679,
            width: 6240,
          },
          image_caption: "can't do this to me, baby",
          is_folderish: true,
          items: [
            {
              '@id':
                'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye/multimedia',
              '@type': 'Document',
              description: '',
              design_italia_meta_type: 'Pagina',
              has_children: false,
              id: 'multimedia',
              image_field: '',
              image_scales: null,
              review_state: 'private',
              title: 'Multimedia',
              url: '/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye/multimedia',
            },
            {
              '@id':
                'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye/documenti-allegati',
              '@type': 'Document',
              description: '',
              design_italia_meta_type: 'Pagina',
              has_children: false,
              id: 'documenti-allegati',
              image_field: '',
              image_scales: null,
              review_state: 'private',
              title: 'Documenti allegati',
              url: '/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye/documenti-allegati',
            },
          ],
          items_total: 2,
          language: {
            title: 'Italiano',
            token: 'it',
          },
          layout: 'newsitem_view',
          lock: {
            locked: false,
            stealable: true,
          },
          luoghi_correlati: [
            {
              '@id':
                'http://localhost:3000/amministrazione/luoghi/bohemian-rhapsody',
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
                blocks: {
                  'd6ba0f5f-45de-413f-8341-9e09e409c9fa': {
                    '@type': 'text',
                  },
                },
                blocks_layout: {
                  items: ['d6ba0f5f-45de-413f-8341-9e09e409c9fa'],
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
          modified: '2023-01-31T11:32:17+00:00',
          next_item: {},
          notizie_correlate: [
            {
              '@id':
                'http://localhost:3000/notizie/chiusa-per-ristrutturazione-la-piscina-minghetti',
              '@type': 'News Item',
              description:
                'Partiti i lavori per l’adeguamento dell’impianto. La riapertura è prevista per giugno 2023.',
              design_italia_meta_type: 'avviso',
              effective: null,
              has_children: true,
              id: 'chiusa-per-ristrutturazione-la-piscina-minghetti',
              image_field: null,
              image_scales: null,
              review_state: 'private',
              title: 'Chiusa per ristrutturazione la piscina Minghetti',
            },
          ],
          numero_progressivo_cs: '12345',
          opengraph_description: null,
          opengraph_image: null,
          opengraph_title: null,
          parent: {
            '@id': 'http://localhost:3000/notizie',
            '@type': 'Document',
            description: 'Is this the real life?',
            design_italia_meta_type: 'Pagina',
            has_children: true,
            id: 'notizie',
            image_field: null,
            image_scales: null,
            review_state: 'published',
            title: 'Notizie',
          },
          preview_caption: 'Just gotta get out',
          preview_image: {
            'content-type': 'image/webp',
            download:
              'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye/@@images/preview_image-2000-514bb8c7fafbf38163b2356efbc98e1f.webp',
            filename:
              'business-teamwork-join-hands-together-business-teamwork-concept_1150-1804.webp',
            height: 1333,
            scales: {
              gallery: {
                download:
                  'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye/@@images/preview_image-250-a11f9ec63a5165b45800fb3883691d3d.webp',
                height: 166,
                width: 250,
              },
              great: {
                download:
                  'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye/@@images/preview_image-1200-104bc3ca9dbf04a88a421103fa231d5e.webp',
                height: 799,
                width: 1200,
              },
              huge: {
                download:
                  'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye/@@images/preview_image-1600-6607214e3c30009bd97e3b7137cf8739.webp',
                height: 1066,
                width: 1600,
              },
              icon: {
                download:
                  'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye/@@images/preview_image-32-c4cc72cf538a369862ed10df8abeb0a5.webp',
                height: 21,
                width: 32,
              },
              large: {
                download:
                  'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye/@@images/preview_image-800-23543f5e90ab23f08fb81b199051bd63.webp',
                height: 533,
                width: 800,
              },
              larger: {
                download:
                  'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye/@@images/preview_image-1000-aec09f2d66c1e0ee46a0cd6b75cc5c37.webp',
                height: 666,
                width: 1000,
              },
              listing: {
                download:
                  'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye/@@images/preview_image-16-d0d37249bb7b4cd817e5c79c81683b02.jpeg',
                height: 10,
                width: 16,
              },
              midi: {
                download:
                  'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye/@@images/preview_image-300-0498a29aa54d893ac70d052fe720dbc2.webp',
                height: 199,
                width: 300,
              },
              mini: {
                download:
                  'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye/@@images/preview_image-200-0d86b312fde76848b519089e45f57dc3.webp',
                height: 133,
                width: 200,
              },
              preview: {
                download:
                  'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye/@@images/preview_image-400-22a18435bf1c4a65796e80e06c1c2e04.webp',
                height: 266,
                width: 400,
              },
              teaser: {
                download:
                  'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye/@@images/preview_image-600-1bc7d40f1dd2ad835c50bcedf34065ae.webp',
                height: 399,
                width: 600,
              },
              thumb: {
                download:
                  'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye/@@images/preview_image-128-2a8e7e9d8d990c3a351a47318abbe6b8.webp',
                height: 85,
                width: 128,
              },
              tile: {
                download:
                  'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye/@@images/preview_image-64-13d4d4a7b92e2c6780af6277d4bb7ad5.webp',
                height: 42,
                width: 64,
              },
            },
            size: 202972,
            width: 2000,
          },
          previous_item: {
            '@id':
              'http://localhost:3000/notizie/chiusa-per-ristrutturazione-la-piscina-minghetti',
            '@type': 'News Item',
            description:
              'Partiti i lavori per l’adeguamento dell’impianto. La riapertura è prevista per giugno 2023.',
            title: 'Chiusa per ristrutturazione la piscina Minghetti',
          },
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
          review_state: 'private',
          rights: '',
          seo_canonical_url: null,
          seo_description: null,
          seo_noindex: null,
          seo_title: null,
          subjects: [],
          tassonomia_argomenti: [],
          tipologia_notizia: {
            title: 'Notizia',
            token: 'notizia',
          },
          title: 'So you think you can stop me and spit in my eye',
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
        <VenueView content={mock_mandatory} />
      </MemoryRouter>
    </Provider>,
  );

  //title
  expect(
    screen.getAllByRole('heading', { name: /Bohemian Rhapsody/i }),
  ).toBeTruthy();

  //descrizione
  expect(screen.getByText(/Is this the real life?/i)).toBeInTheDocument();

  //immagine di testata
  expect(
    screen.getByRole('img', { name: /Is this just fantasy?/i }),
  ).toBeInTheDocument();
  //didascalia
  expect(screen.getByText(/Is this just fantasy?/i)).toBeInTheDocument();

  //modalità di accesso
  expect(
    screen.getByRole('heading', { name: /Modalità di accesso/i }),
  ).toBeInTheDocument();
  expect(screen.getByText(/Open your eyes/i)).toBeInTheDocument();

  //street
  expect(screen.getByText(/Via Liszt/i)).toBeInTheDocument();
  //città
  expect(screen.getByText(/Roma/i)).toBeInTheDocument();
  //CAP
  expect(screen.getByText(/00144/i)).toBeInTheDocument();

  //punti di contatto
  expect(
    screen.getByRole('heading', { name: /Contatti/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: /produttive@comune.cagliari.it/i }),
  ).toBeInTheDocument();
});

test('renders all non-mandatory fields in the page', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <VenueView content={mock_allfields} />
      </MemoryRouter>
    </Provider>,
  );

  //argomenti
  expect(screen.getAllByText(/Argomenti/i)).toBeTruthy();
  expect(
    screen.getAllByRole('link', { name: /Vivere la città/i }),
  ).toBeTruthy();

  //luoghi correlati
  expect(
    screen.getByRole('heading', { name: /Luoghi correlati/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: /Il castello normanno/i }),
  ).toBeInTheDocument();

  //tipologia luogo
  expect(
    screen.getByText(/Architettura Militare e fortificata/i),
  ).toBeInTheDocument();

  //descrizione completa
  expect(
    screen.getByRole('heading', { name: /Descrizione/i }),
  ).toBeInTheDocument();
  expect(screen.getByText(/Look up to the skies and see/i)).toBeInTheDocument();

  //elementi di interesse
  expect(
    screen.getByRole('heading', { name: /Elementi di interesse:/i }),
  ).toBeInTheDocument();
  expect(screen.getByText(/Easy go/i)).toBeInTheDocument();

  //quartiere
  expect(
    screen.getByRole('heading', { name: /Quartiere/i }),
  ).toBeInTheDocument();
  expect(screen.getByText(/I need no sympathy/i)).toBeInTheDocument();

  //circoscrizione
  expect(
    screen.getByRole('heading', { name: /Circoscrizione/i }),
  ).toBeInTheDocument();
  expect(screen.getByText(/Because I'm easy come/i)).toBeInTheDocument();

  //note
  expect(screen.getByText(/Little high/i)).toBeInTheDocument();

  //orario per il pubblico
  expect(
    screen.getByRole('heading', { name: /Orari per il pubblico/i }),
  ).toBeInTheDocument();
  expect(screen.getByText(/Little low/i)).toBeInTheDocument();

  //struttura responsabile correlati
  expect(
    screen.getByRole('heading', { name: /Struttura responsabile/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: /Giunta e consiglio/i }),
  ).toBeInTheDocument();

  // //struttura responsabile --> non appare
  // expect(screen.getByText(/Any way the wind blows/i)).toBeInTheDocument();

  //ulteriori informazioni
  expect(screen.getByText(/doesn't really matter to me/i)).toBeInTheDocument();

  //elementi correlati
  expect(
    screen.getByRole('heading', { name: /Contenuti correlati/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', {
      name: /Sport nel verde: le iniziative della prossima edizione/i,
    }),
  ).toBeInTheDocument();

  //correlato in evidenza
  expect(
    screen.getByRole('heading', {
      name: /Torneo di beneficienza "tutti in pista"/i,
    }),
  ).toBeInTheDocument();
});
