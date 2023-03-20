import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NewsItemView from '../NewsItemView/NewsItemView';
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
  items: [],
  tipologia_notizia: {
    title: 'Notizia',
    token: 'notizia',
  },
  title: 'So you think you can stop me and spit in my eye',
};

const mock_allfields = {
  ...mock_mandatory,
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
  correlato_in_evidenza: [
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
  created: '2023-01-31T10:42:29+00:00',
  creators: ['admin'],
  design_italia_meta_type: 'notizia',
  effective: '2023-01-26T12:28:00+00:00',
  exclude_from_nav: false,
  expires: null,
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
  modified: '2023-01-31T10:42:29+00:00',
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
  numero_progressivo_cs: 12345,
  opengraph_description: null,
  opengraph_image: null,
  opengraph_title: null,
  parent: {
    '@id': 'http://localhost:3000/notizie',
    '@type': 'Document',
    description: '',
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
          'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye/@@images/preview_image-16-d0d37249bb7b4cd817e5c79c81683b02.webp',
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
      '/amministrazione/uffici/ufficio-delle-attivita-produttive-1_office': {
        loading: false,
        loaded: true,
        error: null,
        data: {
          '@components': {
            actions: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/ufficio-delle-attivita-produttive-1/@actions',
            },
            aliases: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/ufficio-delle-attivita-produttive-1/@aliases',
            },
            breadcrumbs: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/ufficio-delle-attivita-produttive-1/@breadcrumbs',
            },
            contextnavigation: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/ufficio-delle-attivita-produttive-1/@contextnavigation',
            },
            navigation: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/ufficio-delle-attivita-produttive-1/@navigation',
            },
            subsite: {},
            translations: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/ufficio-delle-attivita-produttive-1/@translations',
            },
            types: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/ufficio-delle-attivita-produttive-1/@types',
            },
            workflow: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/ufficio-delle-attivita-produttive-1/@workflow',
            },
          },
          '@id':
            'http://localhost:3000/amministrazione/uffici/ufficio-delle-attivita-produttive-1',
          '@type': 'UnitaOrganizzativa',
          UID: '74618999482247659b5109dcbecb1ab0',
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
          contributors: [],
          correlato_in_evidenza: [],
          country: null,
          created: '2023-01-04T13:44:39+00:00',
          creators: ['admin'],
          description: '',
          design_italia_meta_type: 'Unita Organizzativa',
          documenti_pubblici: [],
          effective: null,
          exclude_from_nav: false,
          expires: null,
          geolocation: {},
          id: 'ufficio-delle-attivita-produttive-1',
          image: null,
          image_caption: null,
          is_folderish: true,
          items: [
            {
              '@id':
                'http://localhost:3000/amministrazione/uffici/ufficio-delle-attivita-produttive-1/allegati',
              '@type': 'Document',
              description: '',
              design_italia_meta_type: 'Pagina',
              has_children: false,
              id: 'allegati',
              image_field: '',
              image_scales: null,
              review_state: 'private',
              title: 'Allegati',
              url: '/amministrazione/uffici/ufficio-delle-attivita-produttive-1/allegati',
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
          next_item: {},
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
          prestazioni: [
            {
              '@id': 'http://localhost:3000/servizi/visita-veterinaria-gratis',
              '@type': 'Servizio',
              description: 'Fai visitare il tuo cucciolo',
              design_italia_meta_type: 'Servizio',
              has_children: true,
              id: 'visita-veterinaria-gratis',
              image_field: 'preview_image',
              image_scales: {
                image: [
                  {
                    'content-type': 'image/jpeg',
                    download:
                      '@@images/image-6240-2c594a38b2e918a428cf37e96c1745c3.jpeg',
                    filename: 'woman-having-online-meeting-work.jpg',
                    height: 4160,
                    scales: {
                      gallery: {
                        download:
                          '@@images/image-250-5ec6fbc93855e22dfeca3e0ca8bac55e.jpeg',
                        height: 166,
                        width: 250,
                      },
                      great: {
                        download:
                          '@@images/image-1200-fb50dd51062ef46315e69d24bfbeb8c6.jpeg',
                        height: 800,
                        width: 1200,
                      },
                      huge: {
                        download:
                          '@@images/image-1600-b69d1469d3e022ecd6f354619a7d6e56.jpeg',
                        height: 1066,
                        width: 1600,
                      },
                      icon: {
                        download:
                          '@@images/image-32-daf4fb476defdd68e275adc06695ce4a.jpeg',
                        height: 21,
                        width: 32,
                      },
                      large: {
                        download:
                          '@@images/image-800-4985256109694ea9ecaba1277e7d8e13.jpeg',
                        height: 533,
                        width: 800,
                      },
                      larger: {
                        download:
                          '@@images/image-1000-7717236918373cc3a44021f3d8e9df36.jpeg',
                        height: 666,
                        width: 1000,
                      },
                      listing: {
                        download:
                          '@@images/image-16-5355dc03746125b473c40b9fe423c250.jpeg',
                        height: 10,
                        width: 16,
                      },
                      midi: {
                        download:
                          '@@images/image-300-01ad7b7e4e1288408e495666564df0a5.jpeg',
                        height: 200,
                        width: 300,
                      },
                      mini: {
                        download:
                          '@@images/image-200-f4b92a6e52ad43faffae0e515304d0e3.jpeg',
                        height: 133,
                        width: 200,
                      },
                      preview: {
                        download:
                          '@@images/image-400-c521e9abfeb0c3c12ae58669f1490ef2.jpeg',
                        height: 266,
                        width: 400,
                      },
                      teaser: {
                        download:
                          '@@images/image-600-ce3524b95455608ad4dc0ec0c33f486b.jpeg',
                        height: 400,
                        width: 600,
                      },
                      thumb: {
                        download:
                          '@@images/image-128-4a2fe6e8078e7d26ac3f1f40b06a54e5.jpeg',
                        height: 85,
                        width: 128,
                      },
                      tile: {
                        download:
                          '@@images/image-64-f3e4369c785d72d5bca10538dca23d34.jpeg',
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
                      '@@images/preview_image-2000-351417a7e35b93c02255b36e48ce7ad6.webp',
                    filename:
                      'doctor-with-stethoscope-hands-hospital-background_1423-1.webp',
                    height: 1333,
                    scales: {
                      gallery: {
                        download:
                          '@@images/preview_image-250-ad52823cf13a882e9a150eb50dbd625d.webp',
                        height: 166,
                        width: 250,
                      },
                      great: {
                        download:
                          '@@images/preview_image-1200-3e5150e4490984a99836488f9c765e14.webp',
                        height: 799,
                        width: 1200,
                      },
                      huge: {
                        download:
                          '@@images/preview_image-1600-825624e70971ca938e4b0aaf8279141b.webp',
                        height: 1066,
                        width: 1600,
                      },
                      icon: {
                        download:
                          '@@images/preview_image-32-dedbe08f8301a8dd43fe12c46c51f555.webp',
                        height: 21,
                        width: 32,
                      },
                      large: {
                        download:
                          '@@images/preview_image-800-324f4d314c250c5748afc4710e7d3573.webp',
                        height: 533,
                        width: 800,
                      },
                      larger: {
                        download:
                          '@@images/preview_image-1000-6c403d01ee832304f24ca85e0210508a.webp',
                        height: 666,
                        width: 1000,
                      },
                      listing: {
                        download:
                          '@@images/preview_image-16-f3e9c45fd509de692f510eebce7dd927.webp',
                        height: 10,
                        width: 16,
                      },
                      midi: {
                        download:
                          '@@images/preview_image-300-4c45e1a97d91f5eb425ac173b9f8136f.webp',
                        height: 199,
                        width: 300,
                      },
                      mini: {
                        download:
                          '@@images/preview_image-200-8928c72a6e53664f0a18c8561a407976.webp',
                        height: 133,
                        width: 200,
                      },
                      preview: {
                        download:
                          '@@images/preview_image-400-673b9ca9b4592cddefd2b247a00b7590.webp',
                        height: 266,
                        width: 400,
                      },
                      teaser: {
                        download:
                          '@@images/preview_image-600-119e03f73c6eedf5e4fde351c610205d.webp',
                        height: 399,
                        width: 600,
                      },
                      thumb: {
                        download:
                          '@@images/preview_image-128-a84697ad5ac7c4c1a032b74d458d3a91.webp',
                        height: 85,
                        width: 128,
                      },
                      tile: {
                        download:
                          '@@images/preview_image-64-c5090aa89408b0b6fd7d52093e5809f8.webp',
                        height: 42,
                        width: 64,
                      },
                    },
                    size: 199994,
                    width: 2000,
                  },
                ],
              },
              review_state: 'private',
              title: 'Visita veterinaria gratis',
            },
          ],
          preview_caption: null,
          preview_image: null,
          previous_item: {
            '@id':
              'http://localhost:3000/amministrazione/uffici/ufficio-delle-attivita-produttive',
            '@type': 'PuntoDiContatto',
            description: '',
            title: 'Ufficio delle Attività Produttive',
          },
          quartiere: null,
          relatedItems: [],
          related_news: [
            {
              '@id':
                'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye',
              '@type': 'News Item',
              description: 'So you think you can love me and leave me to die',
              design_italia_meta_type: 'notizia',
              effective: null,
              has_children: true,
              id: 'so-you-think-you-can-stop-me-and-spit-in-my-eye',
              image_field: '',
              image_scales: null,
              review_state: 'private',
              title: 'So you think you can stop me and spit in my eye',
              typology: 'notizia',
            },
          ],
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
          tipologia_organizzazione: null,
          title: 'Ufficio delle Attività Produttive',
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
          zip_code: null,
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
              effective: null,
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
          sede_di: [],
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
    },
  },
  search: {
    error: null,
    items: [],
    total: 0,
    loaded: false,
    loading: false,
    batching: {},
    subrequests: {},
  },
});

test('renders all mandatory fields in the page', async () => {
  const { getByText, getByRole, debug } = render(
    <Provider store={store}>
      <MemoryRouter>
        <NewsItemView content={mock_mandatory} />
      </MemoryRouter>
    </Provider>,
  );

  //title
  expect(
    screen.getByRole('heading', {
      name: /So you think you can stop me and spit in my eye/i,
    }),
  ).toBeInTheDocument();

  // descrizione
  expect(
    screen.getByText(/So you think you can love me and leave me to die/i),
  ).toBeInTheDocument();

  //descrizione estesta
  expect(screen.getByText(/Oh, baby/i)).toBeInTheDocument();

  //a cura di
  expect(
    screen.getByRole('heading', { name: /A cura di/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: /Ufficio delle attività produttive/i }),
  ).toBeInTheDocument();
});

test('renders all non-mandatory fields in the page', async () => {
  const { getByText, getByRole, debug } = render(
    <Provider store={store}>
      <MemoryRouter>
        <NewsItemView content={mock_allfields} />
      </MemoryRouter>
    </Provider>,
  );

  //immagine di testata
  expect(screen.getByAltText(/can't do this to me, baby/i)).toBeInTheDocument();
  expect(screen.getByText(/can't do this to me, baby/i)).toBeInTheDocument();

  // a cura di - persone
  expect(
    screen.getByRole('link', { name: /Marco Murgia/i }),
  ).toBeInTheDocument();

  //argomenti + correlato in evidenza
  expect(screen.getAllByRole('link', { name: /Cultura/i })).toHaveLength(2);
  expect(screen.getByRole('heading', { name: /Novità/i })).toBeInTheDocument();

  //numero del comunicato di stampa
  expect(screen.getByText(/Numero del comunicato stampa/i)).toBeInTheDocument();
  expect(screen.getByText(/12345/)).toBeInTheDocument();

  //persone
  expect(screen.getByText(/Persone/i)).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: /Marco Murgia/i }),
  ).toBeInTheDocument();

  //luoghi
  expect(screen.getByRole('heading', { name: /Luoghi/i })).toBeInTheDocument();
  expect(screen.getByText(/Bohemian Rhapsody/i)).toBeInTheDocument();

  //notizie correlate
  expect(
    screen.getByRole('heading', { name: /Contenuti correlati/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', {
      name: /Chiusa per ristrutturazione la piscina Minghetti/i,
    }),
  ).toBeInTheDocument();

  //data di pubblicazione
  expect(screen.getByText(/26 January 2023/i)).toBeInTheDocument();

  //contenuti correlati
  expect(
    screen.getByRole('link', { name: /Mega evento/i }),
  ).toBeInTheDocument();
});
