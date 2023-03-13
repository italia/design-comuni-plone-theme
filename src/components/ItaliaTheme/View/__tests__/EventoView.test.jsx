import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EventoView from '../EventoView/EventoView';
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

// TODO: test evento senza data fine

const mock_mandatory = {
  '@components': {
    actions: {
      '@id': 'http://localhost:3000/eventi/mega-evento/@actions',
    },
    aliases: {
      '@id': 'http://localhost:3000/eventi/mega-evento/@aliases',
    },
    breadcrumbs: {
      '@id': 'http://localhost:3000/eventi/mega-evento/@breadcrumbs',
    },
    contextnavigation: {
      '@id': 'http://localhost:3000/eventi/mega-evento/@contextnavigation',
    },
    navigation: {
      '@id': 'http://localhost:3000/eventi/mega-evento/@navigation',
    },
    subsite: {},
    translations: {
      '@id': 'http://localhost:3000/eventi/mega-evento/@translations',
    },
    types: {
      '@id': 'http://localhost:3000/eventi/mega-evento/@types',
    },
    workflow: {
      '@id': 'http://localhost:3000/eventi/mega-evento/@workflow',
    },
  },
  '@id': 'http://localhost:3000/eventi/mega-evento',
  '@type': 'Event',
  UID: '3a046f1b374d465abaea77175ab20cce',
  a_chi_si_rivolge: {
    blocks: {
      '393849f3-523a-46e0-92ab-c826873a177f': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: '37t3k',
              text: 'Programmatori RedTurtle',
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['393849f3-523a-46e0-92ab-c826873a177f'],
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
          pdc_type: 'email',
          pdc_value: 'produttive@comune.cagliari.it',
        },
        {
          pdc_type: 'fax',
          pdc_value: '+393333333333',
        },
        {
          pdc_type: 'url',
          pdc_value: 'www.festadisantelfisio.com',
        },
        {
          pdc_type: 'pec',
          pdc_value: 'contatto@pec.it',
        },
        {
          pdc_type: 'account',
          pdc_value: 'Account',
        },
        {
          pdc_type: 'whatsapp',
          pdc_value: 'Whatsapp',
        },
        {
          pdc_type: 'telegram',
          pdc_value: 'Telegram',
        },
        {
          pdc_type: 'skype',
          pdc_value: 'Skype',
        },
        {
          pdc_type: 'linkedin',
          pdc_value: 'LinkedIn',
        },
        {
          pdc_type: 'twitter',
          pdc_value: 'Twitter',
        },
        {
          pdc_type: 'telefono',
          pdc_value: '+39 070 6776430',
        },
      ],
    },
  ],
  descrizione_estesa: {
    blocks: {
      'c3aac6c5-b8d9-48b7-bc01-a7211248548b': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: 'e0m83',
              text: 'Un mega evento con delle mega iniziative',
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['c3aac6c5-b8d9-48b7-bc01-a7211248548b'],
    },
  },
  end: '2023-01-20T09:00:00+00:00',
  items: [
    {
      '@id': 'http://localhost:3000/eventi/mega-evento/immagini',
      '@type': 'Document',
      description: '',
      design_italia_meta_type: 'Pagina',
      has_children: false,
      id: 'immagini',
      image_field: '',
      image_scales: null,
      review_state: 'published',
      title: 'Immagini',
      url: '/eventi/mega-evento/immagini',
    },
    {
      '@id': 'http://localhost:3000/eventi/mega-evento/video',
      '@type': 'Document',
      description: '',
      design_italia_meta_type: 'Pagina',
      has_children: false,
      id: 'video',
      image_field: '',
      image_scales: null,
      review_state: 'published',
      title: 'Video',
      url: '/eventi/mega-evento/video',
    },
    {
      '@id': 'http://localhost:3000/eventi/mega-evento/sponsor_evento',
      '@type': 'Document',
      description: '',
      design_italia_meta_type: 'Pagina',
      has_children: false,
      id: 'sponsor_evento',
      image_field: '',
      image_scales: null,
      review_state: 'published',
      title: 'Sponsor Evento',
      url: '/eventi/mega-evento/sponsor_evento',
    },
    {
      '@id': 'http://localhost:3000/eventi/mega-evento/documenti',
      '@type': 'Document',
      description: '',
      design_italia_meta_type: 'Pagina',
      has_children: false,
      id: 'documenti',
      image_field: '',
      image_scales: null,
      review_state: 'published',
      title: 'Allegati',
      url: '/eventi/mega-evento/documenti',
    },
  ],
  organizzato_da_esterno: {
    blocks: {
      'd8f67e41-c9a1-4993-9b0b-6124db188de2': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: '71ibo',
              text: 'Batman',
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['d8f67e41-c9a1-4993-9b0b-6124db188de2'],
    },
  },
  parent: {
    '@id': 'http://localhost:3000/eventi',
    '@type': 'Document',
    description: 'Lorem ipsum',
    design_italia_meta_type: 'Pagina',
    has_children: true,
    id: 'eventi',
    image_field: null,
    image_scales: null,
    review_state: 'published',
    title: 'Eventi',
  },
  start: '2023-01-20T09:00:00+00:00',
  strutture_politiche: [
    {
      '@id': 'http://localhost:3000/amministrazione/politici/arst-1',
      '@type': 'UnitaOrganizzativa',
      address: '',
      circoscrizione: '',
      city: '',
      contact_info: [
        {
          '@id': 'http://localhost:3000/amministrazione/politici/arst',
          '@type': 'PuntoDiContatto',
          description: '',
          design_italia_meta_type: 'Punto di Contatto',
          has_children: false,
          id: 'arst',
          image_field: null,
          image_scales: null,
          review_state: 'private',
          title: 'ARST',
          value_punto_contatto: [
            {
              pdc_type: 'web',
              pdc_value: 'http://www.arst.sardegna.it/index.html',
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
      id: 'arst-1',
      image_field: null,
      image_scales: null,
      nome_sede: '',
      quartiere: '',
      review_state: 'private',
      street: '',
      title: 'ARST',
      zip_code: '',
    },
  ],
  title: 'Mega Evento',
  tipologia_evento: {
    title: 'Evento culturale',
    token: 'evento_culturale',
  },
};

const mock_allfields = {
  ...mock_mandatory,
  allow_discussion: false,
  changeNote: '',
  circoscrizione: 'Arginone',
  city: 'Perugia',
  contributors: [],
  correlato_in_evidenza: [
    {
      '@id': 'http://localhost:3000/notizie',
      '@type': 'Document',
      description: 'Is this the real life?',
      design_italia_meta_type: 'Pagina',
      effective: '2023-01-03T15:40:54+00:00',
      has_children: true,
      id: 'notizie',
      image_field: null,
      image_scales: null,
      review_state: 'published',
      title: 'Notizie',
    },
  ],
  country: {
    title: 'Italia',
    token: '380',
  },
  created: '2023-01-20T08:12:40+00:00',
  creators: ['admin'],
  description: 'Descrizione del mega evento',
  descrizione_destinatari: {
    blocks: {
      'b9b06941-630d-4876-ad94-5ee8fcaef369': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: '9fccd',
              text: 'I destinatari dovranno essere programmatori',
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['b9b06941-630d-4876-ad94-5ee8fcaef369'],
    },
  },
  design_italia_meta_type: 'Evento',
  effective: null,
  exclude_from_nav: false,
  expires: null,
  geolocation: {
    latitude: 39.21252001040267,
    longitude: 9.115209984181092,
  },
  id: 'mega-evento',
  image: {
    'content-type': 'image/png',
    download:
      'http://localhost:3000/eventi/mega-evento/@@images/image-1156-c9f0af33a87b488c2c0006b67d6b6315.png',
    filename: 'foto-ospedale.png',
    height: 940,
    scales: {
      gallery: {
        download:
          'http://localhost:3000/eventi/mega-evento/@@images/image-250-1bc27073253601c7e927642f5694bbb5.png',
        height: 203,
        width: 250,
      },
      great: {
        download:
          'http://localhost:3000/eventi/mega-evento/@@images/image-1200-7d00619bc955d8515a097ab3c9e4002b.png',
        height: 940,
        width: 1156,
      },
      huge: {
        download:
          'http://localhost:3000/eventi/mega-evento/@@images/image-1600-9be37360d8f3cb220cfb45d11b455209.png',
        height: 940,
        width: 1156,
      },
      icon: {
        download:
          'http://localhost:3000/eventi/mega-evento/@@images/image-32-160a4c43283ae99f6607e620739a94ae.png',
        height: 26,
        width: 32,
      },
      large: {
        download:
          'http://localhost:3000/eventi/mega-evento/@@images/image-800-92a87cc7ddcda158a759875586371f6c.png',
        height: 650,
        width: 800,
      },
      larger: {
        download:
          'http://localhost:3000/eventi/mega-evento/@@images/image-1000-6067b97b20006cdc98944ec51c825e95.png',
        height: 813,
        width: 1000,
      },
      listing: {
        download:
          'http://localhost:3000/eventi/mega-evento/@@images/image-16-13f680ff016f5ef95c4877199f0cc0f9.png',
        height: 13,
        width: 16,
      },
      midi: {
        download:
          'http://localhost:3000/eventi/mega-evento/@@images/image-300-bc4c97c6e342c12d5599be4fa9c4e08a.png',
        height: 243,
        width: 300,
      },
      mini: {
        download:
          'http://localhost:3000/eventi/mega-evento/@@images/image-200-1492b07c9272ed1447035a24fc4e91f3.png',
        height: 162,
        width: 200,
      },
      preview: {
        download:
          'http://localhost:3000/eventi/mega-evento/@@images/image-400-dba23485787eafd571064b3dd8d00527.png',
        height: 325,
        width: 400,
      },
      teaser: {
        download:
          'http://localhost:3000/eventi/mega-evento/@@images/image-600-33f8e4880678d1660593e38962de2f4f.png',
        height: 487,
        width: 600,
      },
      thumb: {
        download:
          'http://localhost:3000/eventi/mega-evento/@@images/image-128-b2052752176ce9ca65f641464072fc8f.png',
        height: 104,
        width: 128,
      },
      tile: {
        download:
          'http://localhost:3000/eventi/mega-evento/@@images/image-64-832e21fee3455c8ac82f06c4c4a5463c.png',
        height: 52,
        width: 64,
      },
    },
    size: 1296882,
    width: 1156,
  },
  image_caption: 'Didascalia immagine testata',
  is_folderish: true,
  items_total: 4,
  language: {
    title: 'Italiano',
    token: 'it',
  },
  layout: 'event_view',
  lock: {
    locked: false,
    stealable: true,
  },
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
        blocks: {
          'b87e0b6c-e210-4d75-964b-17d71a281ada': {
            '@type': 'text',
            text: {
              blocks: [
                {
                  data: {},
                  depth: 0,
                  entityRanges: [],
                  inlineStyleRanges: [],
                  key: 'b1c6n',
                  text: 'Built a home and watched it burn',
                  type: 'unstyled',
                },
              ],
              entityMap: {},
            },
          },
        },
        blocks_layout: {
          items: ['b87e0b6c-e210-4d75-964b-17d71a281ada'],
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
          title: 'Architettura Militare e fortificata',
          token: 'architettura_militare_e_fortificata',
        },
      ],
      title: 'Il castello normanno',
      web: null,
      zip_code: '00144',
    },
  ],
  modified: '2023-01-25T15:23:08+00:00',
  next_item: {
    '@id': 'http://localhost:3000/eventi/lorem-ipsum',
    '@type': 'Event',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam cursus magna vel porta euismod. Aenean vitae lacus viverra, hendrerit velit a, maximus tortor. Suspendisse finibus ultrices eros, vitae tristique risus sollicitudin in. Ut pellentesque commodo r',
    title: 'Lorem ipsum',
  },
  nome_sede: 'Sede del mega evento',
  open_end: true,
  opengraph_description: null,
  opengraph_image: null,
  opengraph_title: null,
  orari: {
    blocks: {
      'bdb27ec6-3371-42c0-9e55-65d69bfff7ef': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: '5acqg',
              text: 'Ho inventato tutto',
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['bdb27ec6-3371-42c0-9e55-65d69bfff7ef'],
    },
  },
  organizzato_da_interno: [
    {
      '@id':
        'http://localhost:3000/amministrazione/uffici/assessorato-al-turismo',
      '@type': 'UnitaOrganizzativa',
      address: '',
      circoscrizione: '',
      city: 'Roma',
      contact_info: [],
      description: '',
      design_italia_meta_type: 'Unita Organizzativa',
      effective: null,
      geolocation: {
        latitude: 0,
        longitude: 0,
      },
      has_children: true,
      id: 'assessorato-al-turismo',
      image_field: null,
      image_scales: null,
      nome_sede: '',
      quartiere: '',
      review_state: 'private',
      street: 'Via Roma 1',
      tipologia_organizzazione: {
        title: 'Struttura amministrativa',
        token: 'struttura_amministrativa',
      },
      title: 'Assessorato al Turismo',
      zip_code: '00100',
    },
  ],
  patrocinato_da: 'Regione Autonome della Sardegna',
  persone_amministrazione: [
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
  preview_caption: 'Didascalia immagine preview',
  preview_image: {
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
  previous_item: {
    '@id': 'http://localhost:3000/eventi/363-festa-di-santefisio',
    '@type': 'Event',
    description:
      "Il 1° maggio 2019 Cagliari e tutta la Sardegna festeggiano la 363ª Festa di Sant'Efisio. Un intenso momento di devozione, fede, cultura e tradizioni centenarie che si fondono in una processione che non ha eguali.",
    title: "363^ Festa di Sant'Efisio",
  },
  prezzo: {
    blocks: {
      '3ae432d0-6255-4168-8fba-578c46f2321d': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: 's9f2',
              text: '10€',
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['3ae432d0-6255-4168-8fba-578c46f2321d'],
    },
  },
  quartiere: 'Bello',
  recurrence: null,
  relatedItems: [
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
        image: [
          {
            'content-type': 'image/jpeg',
            download:
              '@@images/image-5184-40c7eaa33c6c54aa29dedac49e94df89.jpeg',
            filename: 'national-cancer-institute.jpeg',
            height: 3456,
            scales: {
              gallery: {
                download:
                  '@@images/image-250-7b0e56e988604eea439fa33ffeb8550a.jpeg',
                height: 166,
                width: 250,
              },
              great: {
                download:
                  '@@images/image-1200-3ce6f15e8ecb14ff7f8cc2212ff8466f.jpeg',
                height: 800,
                width: 1200,
              },
              huge: {
                download:
                  '@@images/image-1600-0e8d74773520f196e3a3a024901c2459.jpeg',
                height: 1066,
                width: 1600,
              },
              icon: {
                download:
                  '@@images/image-32-12137579b4452eac919248d0a4f016b0.jpeg',
                height: 21,
                width: 32,
              },
              large: {
                download:
                  '@@images/image-800-12943fd32b1636c8809a0fbb551a3e39.jpeg',
                height: 533,
                width: 800,
              },
              larger: {
                download:
                  '@@images/image-1000-f835c3eb1ef0543023d1cc70870bd9c1.jpeg',
                height: 666,
                width: 1000,
              },
              listing: {
                download:
                  '@@images/image-16-845a44d9fbb2de07b170d4c51905b287.jpeg',
                height: 10,
                width: 16,
              },
              midi: {
                download:
                  '@@images/image-300-798a37614985cf5005f5366561c9be98.jpeg',
                height: 200,
                width: 300,
              },
              mini: {
                download:
                  '@@images/image-200-01545d595ae8b4fe34b81d884e9707d7.jpeg',
                height: 133,
                width: 200,
              },
              preview: {
                download:
                  '@@images/image-400-c8f88b078f0c31df1d931e6ebf975549.jpeg',
                height: 266,
                width: 400,
              },
              teaser: {
                download:
                  '@@images/image-600-530df8bed590a10142ff8af7d0e280fc.jpeg',
                height: 400,
                width: 600,
              },
              thumb: {
                download:
                  '@@images/image-128-dde65d0e13ed94eb193db2159ea6be72.jpeg',
                height: 85,
                width: 128,
              },
              tile: {
                download:
                  '@@images/image-64-0e97272d5a8b4a796d08a7f055345bbd.jpeg',
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
              '@@images/preview_image-5184-7ecfd1173eff751c8d1cb7914c7518d8.jpeg',
            filename: 'national-cancer-institute.jpeg',
            height: 3456,
            scales: {
              gallery: {
                download:
                  '@@images/preview_image-250-c96a676e655ec293a54e8d0f3f3b2f2f.jpeg',
                height: 166,
                width: 250,
              },
              great: {
                download:
                  '@@images/preview_image-1200-9c8c7d44877ac3a0f73bbca89a5394e5.jpeg',
                height: 800,
                width: 1200,
              },
              huge: {
                download:
                  '@@images/preview_image-1600-1675145136aabae9ff1d522b548308bc.jpeg',
                height: 1066,
                width: 1600,
              },
              icon: {
                download:
                  '@@images/preview_image-32-b253a826ca285a0bf1bdaf017bccd712.jpeg',
                height: 21,
                width: 32,
              },
              large: {
                download:
                  '@@images/preview_image-800-460a4d552e7f6daacd4405cea33f8799.jpeg',
                height: 533,
                width: 800,
              },
              larger: {
                download:
                  '@@images/preview_image-1000-952437d4893daef993e664fd2514d046.jpeg',
                height: 666,
                width: 1000,
              },
              listing: {
                download:
                  '@@images/preview_image-16-ec07d423f977183b0ec460e71e0c82ef.jpeg',
                height: 10,
                width: 16,
              },
              midi: {
                download:
                  '@@images/preview_image-300-c4e0f8ef57aca43f96fccb6bf5321073.jpeg',
                height: 200,
                width: 300,
              },
              mini: {
                download:
                  '@@images/preview_image-200-5abca393768d0a22c1ade849537f8746.jpeg',
                height: 133,
                width: 200,
              },
              preview: {
                download:
                  '@@images/preview_image-400-15eea7738a74beb28e506e20fa788a38.jpeg',
                height: 266,
                width: 400,
              },
              teaser: {
                download:
                  '@@images/preview_image-600-85d77ae4fb15ddb33f911f00ba274db8.jpeg',
                height: 400,
                width: 600,
              },
              thumb: {
                download:
                  '@@images/preview_image-128-0fd297681d054ef4aaf4df372aeb9f75.jpeg',
                height: 85,
                width: 128,
              },
              tile: {
                download:
                  '@@images/preview_image-64-5ab5c9fdc31755ff65aa52e7c76ede62.jpeg',
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
  review_state: 'private',
  rights: '',
  seo_canonical_url: null,
  seo_description: null,
  seo_noindex: null,
  seo_title: null,
  sottotitolo: 'Sottotitolo del mega evento',
  street: 'Via Cincillà 198',
  subjects: [],
  supportato_da: [
    {
      '@id':
        'http://localhost:3000/amministrazione/aree-di-competenza/area-impiantistica-sportiva-e-manifestazioni-sportive',
      '@type': 'UnitaOrganizzativa',
      address: '',
      circoscrizione: '',
      city: '',
      contact_info: [],
      description: 'Dirigente Arch. M. Alessandra Verdi',
      design_italia_meta_type: 'Unita Organizzativa',
      effective: null,
      geolocation: {
        latitude: 0,
        longitude: 0,
      },
      has_children: true,
      id: 'area-impiantistica-sportiva-e-manifestazioni-sportive',
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
      title: 'Area impiantistica sportiva e manifestazioni sportive',
      zip_code: '',
    },
  ],
  sync_uid: null,
  tassonomia_argomenti: [
    {
      '@id': 'http://localhost:3000/argomenti/muoversi',
      '@type': 'Pagina Argomento',
      description: '',
      design_italia_meta_type: 'Argomento',
      effective: null,
      has_children: false,
      id: 'muoversi',
      image_field: null,
      image_scales: null,
      review_state: 'private',
      title: 'Muoversi',
    },
  ],
  ulteriori_informazioni: {
    blocks: {
      'fe8ee3f2-c1b3-4692-98ed-d9ca7821fbab': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: '2lvs7',
              text: 'Magliette gratis',
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['fe8ee3f2-c1b3-4692-98ed-d9ca7821fbab'],
    },
  },
  version: 'current',
  versioning_enabled: true,
  whole_day: true,
  working_copy: null,
  working_copy_of: null,
  zip_code: '999999',
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
      'luogohttp://loremipsum.com/amministrazione/luoghi/ravenna-1': {
        data: {
          '@id': 'http://loremipsum.com/amministrazione/luoghi/ravenna-1',
          '@type': 'Venue',
          description: '',
          review_state: 'private',
          title: 'Ravenna',
        },
      },
      'http://loremipsum.com/amministrazione/enti-e-fondazioni/ente-svago_office':
        {
          data: {
            '@id':
              'http://loremipsum.com/amministrazione/enti-e-fondazioni/ente-svago',
            '@type': 'Unita organizzativa',
            UID: 'c5ee7af923204be484ffd329f91f3de2',
            city: 'Lugo',
            email: 'martina.bustacchini@redturtle.it',
            phone: '03468492433',
            street: 'Ravegnana 158a',
            title: 'Ente svago',
            website: null,
            zip_code: null,
          },
          'http://loremipsum.com/amministrazione/luoghi/ravenna-1_venue': {
            data: {
              '@id': 'http://loremipsum.com/amministrazione/luoghi/ravenna-1',
              '@type': 'Venue',
              UID: '42abd9ce876f4eea9bca32b6845d3a71',
              id: 'ravenna-1',
              title: 'Ravenna',
            },
          },
        },
    },
  },
  search: {
    subrequests: {
      documenti: {
        items: [
          {
            '@id':
              'http://loremipsum.com/events/altro-eventone/documenti/agid-2.pages',
            '@type': 'File',
            title: 'AGID2.pages',
          },
        ],
      },
      multimedia: {
        '@id':
          'http://loremipsum.it/events/altro-eventone/multimedia/@search?path.depth=1&metadata_fields=_all&fullobjects=1',
        items: [
          {
            '@id':
              'http://loremipsum.it/events/altro-eventone/multimedia/download-5.jpeg',
            '@type': 'Image',
            image: {
              scales: {
                gallery: {
                  download:
                    'http://loremipsum.it/events/altro-eventone/multimedia/download-5.jpeg/@@images/5f9e35e1-405e-43d4-96b1-0fd3113b3fa7.jpeg',
                  height: 175,
                  width: 250,
                },
              },
              title: 'download (5).jpeg',
            },
          },
        ],
      },
    },
  },
});

it('expect to have all mandatory fields in page', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <EventoView content={mock_mandatory} />
      </MemoryRouter>
    </Provider>,
  );
  // title
  expect(
    screen.getByRole('heading', { name: /Mega evento/i }),
  ).toBeInTheDocument();
  // descrizione estesa
  expect(
    screen.getByText(/Un mega evento con delle mega iniziative/i),
  ).toBeInTheDocument();

  // contatti
  expect(
    screen.getByRole('heading', { name: /Contatti/i }),
  ).toBeInTheDocument();

  // date e orari
  expect(
    screen.getByRole('heading', { name: /Date e orari/i }),
  ).toBeInTheDocument();
});

it('Check parts loaded from child folders', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <EventoView content={mock_mandatory} />
      </MemoryRouter>
    </Provider>,
  );
  // // documenti
  // const documenti = await waitForElement(() =>
  //   document.querySelector('#documenti'),
  // );
  // expect(documenti).toBeInTheDocument();
  // // galleria immagini
  // const galleria = await waitForElement(() =>
  //   getByText(/Galleria di immagini/i),
  // );
  // expect(galleria).toBeInTheDocument();

  // const eventi = await waitForElement(() => document.querySelector('#events'));
  // expect(eventi).toBeInTheDocument();
});

it('embedded video is displayed', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <EventoView content={mock_mandatory} />
      </MemoryRouter>
    </Provider>,
  );
  // const iframe = await waitForElement(() =>
  //   document.querySelector('#embedded-video-0'),
  // );
  // expect(iframe).toBeInTheDocument();
});

// test('todo', () => {
//   expect(mock_mandatory).toBeDefined();
//   expect(store).toBeDefined();
//   expect(true).toBe(true);
// });
