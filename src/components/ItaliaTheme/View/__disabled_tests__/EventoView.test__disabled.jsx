import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
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
  items: [],
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
  tipologia_evento: {
    title: 'Evento culturale',
    token: 'evento_culturale',
  },
  title: ' Mega Evento',
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
    },
  ],
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
  modified: '2023-03-13T15:49:09+00:00',
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
  patrocinato_da: {
    blocks: {
      '36fb336c-f829-4ae3-8cac-e3548d2d510f': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: '1ag9i',
              text: 'Regioni autonome',
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['36fb336c-f829-4ae3-8cac-e3548d2d510f'],
    },
  },
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
  whole_day: false,
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
              circoscrizione: "Because I'm easy come",
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
              pec: null,
              quartiere: 'I need no sympathy',
              review_state: 'private',
              riferimento_mail_struttura: null,
              riferimento_pec_struttura: null,
              riferimento_telefonico_struttura: null,
              street: 'Via Liszt, 21',
              telefono: null,
              tipologia_luogo: [
                {
                  title: 'Architettura Militare e fortificata␟Fortezza',
                  token: 'fortezza',
                },
              ],
              title: 'Bohemian Rhapsody',
              web: null,
              zip_code: '00144',
            },
          ],
          modified: '2023-02-20T16:38:02+00:00',
          next_item: {
            '@id':
              'http://localhost:3000/amministrazione/uffici/ufficio-delle-attivita-produttive-1',
            '@type': 'UnitaOrganizzativa',
            description: 'Prova',
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
              '@id':
                'http://localhost:3000/novita/notizie/osservatorio-sul-turismo',
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
                'http://localhost:3000/amministrazione/uffici/ufficio-delle-attivita-produttive-1',
              '@type': 'UnitaOrganizzativa',
              address: '',
              circoscrizione: '',
              city: '',
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
              description: 'Prova',
              design_italia_meta_type: 'Unita Organizzativa',
              geolocation: {
                latitude: 0,
                longitude: 0,
              },
              has_children: true,
              id: 'ufficio-delle-attivita-produttive-1',
              image_field: null,
              image_scales: null,
              nome_sede: '',
              quartiere: '',
              review_state: 'published',
              street: '',
              tipologia_organizzazione: {
                title: 'Struttura amministrativa␟Ufficio',
                token: 'ufficio',
              },
              title: 'Ufficio delle Attività Produttive',
              zip_code: '',
            },
          ],
          subjects: [],
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
          version: 'current',
          versioning_enabled: true,
          working_copy: null,
          working_copy_of: null,
        },
      },
      '/amministrazione/uffici/assessorato-al-turismo_office': {
        loading: false,
        loaded: true,
        error: null,
        data: {
          '@components': {
            actions: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/assessorato-al-turismo/@actions',
            },
            aliases: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/assessorato-al-turismo/@aliases',
            },
            breadcrumbs: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/assessorato-al-turismo/@breadcrumbs',
            },
            contextnavigation: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/assessorato-al-turismo/@contextnavigation',
            },
            navigation: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/assessorato-al-turismo/@navigation',
            },
            subsite: {},
            translations: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/assessorato-al-turismo/@translations',
            },
            types: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/assessorato-al-turismo/@types',
            },
            workflow: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/assessorato-al-turismo/@workflow',
            },
          },
          '@id':
            'http://localhost:3000/amministrazione/uffici/assessorato-al-turismo',
          '@type': 'UnitaOrganizzativa',
          UID: '95ac1dc413734d898716a74737d5c4f7',
          allow_discussion: false,
          assessore_riferimento: [],
          changeNote: '',
          competenze: {
            blocks: {
              'abf3498b-f674-4478-a8f0-43ff8f0508eb': {
                '@type': 'text',
              },
            },
            blocks_layout: {
              items: ['abf3498b-f674-4478-a8f0-43ff8f0508eb'],
            },
          },
          contact_info: [],
          contributors: [],
          correlato_in_evidenza: [],
          created: '2023-01-04T10:18:55+00:00',
          creators: ['admin'],
          description: '',
          design_italia_meta_type: 'Unita Organizzativa',
          documenti_pubblici: [],
          effective: null,
          exclude_from_nav: false,
          expires: null,
          id: 'assessorato-al-turismo',
          image: {
            'content-type': 'image/png',
            download:
              'http://localhost:3000/amministrazione/uffici/assessorato-al-turismo/@@images/image-1156-d9c0f21d70ab7a13641c0d4bde317b9d.png',
            filename: 'foto-ospedale.png',
            height: 940,
            scales: {
              gallery: {
                download:
                  'http://localhost:3000/amministrazione/uffici/assessorato-al-turismo/@@images/image-250-d55c6b904794217bcf4c480891fb3c52.png',
                height: 203,
                width: 250,
              },
              great: {
                download:
                  'http://localhost:3000/amministrazione/uffici/assessorato-al-turismo/@@images/image-1200-c46ce86009dd5aa6363adb190479c618.png',
                height: 940,
                width: 1156,
              },
              huge: {
                download:
                  'http://localhost:3000/amministrazione/uffici/assessorato-al-turismo/@@images/image-1600-cca19a8f190285b2c257e8ac337c94c2.png',
                height: 940,
                width: 1156,
              },
              icon: {
                download:
                  'http://localhost:3000/amministrazione/uffici/assessorato-al-turismo/@@images/image-32-79de5088a8e50556f250764ff775c7eb.png',
                height: 26,
                width: 32,
              },
              large: {
                download:
                  'http://localhost:3000/amministrazione/uffici/assessorato-al-turismo/@@images/image-800-adc5b7b6abad469d061867136f85c259.png',
                height: 650,
                width: 800,
              },
              larger: {
                download:
                  'http://localhost:3000/amministrazione/uffici/assessorato-al-turismo/@@images/image-1000-917938c12d172de05c0882652787bc6d.png',
                height: 813,
                width: 1000,
              },
              listing: {
                download:
                  'http://localhost:3000/amministrazione/uffici/assessorato-al-turismo/@@images/image-16-4b375d9f156b2e79ebc93555c44f721f.png',
                height: 13,
                width: 16,
              },
              midi: {
                download:
                  'http://localhost:3000/amministrazione/uffici/assessorato-al-turismo/@@images/image-300-a87b4508335ac9ba8a34ca864a9d91b8.png',
                height: 243,
                width: 300,
              },
              mini: {
                download:
                  'http://localhost:3000/amministrazione/uffici/assessorato-al-turismo/@@images/image-200-67dcacb37ef025801410f9724a4fcdea.png',
                height: 162,
                width: 200,
              },
              preview: {
                download:
                  'http://localhost:3000/amministrazione/uffici/assessorato-al-turismo/@@images/image-400-7bbfbca56f2827e1e8ca904aef72b900.png',
                height: 325,
                width: 400,
              },
              teaser: {
                download:
                  'http://localhost:3000/amministrazione/uffici/assessorato-al-turismo/@@images/image-600-36913a0b6a60497044e47d168f32f312.png',
                height: 487,
                width: 600,
              },
              thumb: {
                download:
                  'http://localhost:3000/amministrazione/uffici/assessorato-al-turismo/@@images/image-128-629b5defa586c8ede07dd91b794ce1de.png',
                height: 104,
                width: 128,
              },
              tile: {
                download:
                  'http://localhost:3000/amministrazione/uffici/assessorato-al-turismo/@@images/image-64-a5a7125881b707e977d78161011580bc.png',
                height: 52,
                width: 64,
              },
            },
            size: 1296882,
            width: 1156,
          },
          image_caption: null,
          is_folderish: true,
          items: [
            {
              '@id':
                'http://localhost:3000/amministrazione/uffici/assessorato-al-turismo/allegati',
              '@type': 'Document',
              description: '',
              design_italia_meta_type: 'Pagina',
              has_children: false,
              id: 'allegati',
              image_field: '',
              image_scales: null,
              review_state: 'private',
              title: 'Allegati',
              url: '/amministrazione/uffici/assessorato-al-turismo/allegati',
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
              'http://localhost:3000/amministrazione/uffici/ufficio-delle-attivita-produttive',
            '@type': 'PuntoDiContatto',
            description: '',
            title: 'Ufficio delle Attività Produttive',
          },
          opengraph_description: null,
          opengraph_image: null,
          opengraph_title: null,
          orario_pubblico: {
            blocks: {
              '31c8cac0-bf3a-4bab-b1cb-dfb054780bae': {
                '@type': 'text',
              },
            },
            blocks_layout: {
              items: ['31c8cac0-bf3a-4bab-b1cb-dfb054780bae'],
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
          persone_struttura: [],
          prestazioni: [],
          preview_caption: null,
          preview_image: {
            'content-type': 'image/png',
            download:
              'http://localhost:3000/amministrazione/uffici/assessorato-al-turismo/@@images/preview_image-1156-45f1e19cba3295029911cd44fb3d5343.png',
            filename: 'foto-ospedale.png',
            height: 940,
            scales: {
              gallery: {
                download:
                  'http://localhost:3000/amministrazione/uffici/assessorato-al-turismo/@@images/preview_image-250-8acdeef7b39164aff1c19c4abbb6186d.png',
                height: 203,
                width: 250,
              },
              great: {
                download:
                  'http://localhost:3000/amministrazione/uffici/assessorato-al-turismo/@@images/preview_image-1200-c4f7ee4282a4ba3669492294dedf4a39.png',
                height: 940,
                width: 1156,
              },
              huge: {
                download:
                  'http://localhost:3000/amministrazione/uffici/assessorato-al-turismo/@@images/preview_image-1600-c4b07d8ebf513b996941ac0abe23dd83.png',
                height: 940,
                width: 1156,
              },
              icon: {
                download:
                  'http://localhost:3000/amministrazione/uffici/assessorato-al-turismo/@@images/preview_image-32-f79d626ef0b4ecb218fd5847eab3f251.png',
                height: 26,
                width: 32,
              },
              large: {
                download:
                  'http://localhost:3000/amministrazione/uffici/assessorato-al-turismo/@@images/preview_image-800-16ca2e18b231f55efb9e9df5ef6097d8.png',
                height: 650,
                width: 800,
              },
              larger: {
                download:
                  'http://localhost:3000/amministrazione/uffici/assessorato-al-turismo/@@images/preview_image-1000-54abdd3677c59a887d8e0a9433b6501e.png',
                height: 813,
                width: 1000,
              },
              listing: {
                download:
                  'http://localhost:3000/amministrazione/uffici/assessorato-al-turismo/@@images/preview_image-16-b3d8cd80ca1dbb3f34a8306421e37236.png',
                height: 13,
                width: 16,
              },
              midi: {
                download:
                  'http://localhost:3000/amministrazione/uffici/assessorato-al-turismo/@@images/preview_image-300-ea5eefa0d83669427c3bc4cfc36aa92b.png',
                height: 243,
                width: 300,
              },
              mini: {
                download:
                  'http://localhost:3000/amministrazione/uffici/assessorato-al-turismo/@@images/preview_image-200-6c304fa57b43c928fce1315ac7fd8cb0.png',
                height: 162,
                width: 200,
              },
              preview: {
                download:
                  'http://localhost:3000/amministrazione/uffici/assessorato-al-turismo/@@images/preview_image-400-357a07e9875ace5a0059e3cbe7dd5ec8.png',
                height: 325,
                width: 400,
              },
              teaser: {
                download:
                  'http://localhost:3000/amministrazione/uffici/assessorato-al-turismo/@@images/preview_image-600-569962895206ae9dc2dfdd3f94d214aa.png',
                height: 487,
                width: 600,
              },
              thumb: {
                download:
                  'http://localhost:3000/amministrazione/uffici/assessorato-al-turismo/@@images/preview_image-128-54adeb0580201df3353ecc72cb2de90e.png',
                height: 104,
                width: 128,
              },
              tile: {
                download:
                  'http://localhost:3000/amministrazione/uffici/assessorato-al-turismo/@@images/preview_image-64-1420af5d9ba6191dae672acc9c0aee90.png',
                height: 52,
                width: 64,
              },
            },
            size: 1296882,
            width: 1156,
          },
          previous_item: {
            '@id':
              'http://localhost:3000/amministrazione/uffici/giunta-e-consiglio',
            '@type': 'UnitaOrganizzativa',
            description: 'Pierced through the heart but never killed',
            title: 'Giunta e consiglio',
          },
          relatedItems: [],
          related_news: [
            {
              '@id':
                'http://localhost:3000/novita/notizie/osservatorio-sul-turismo',
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
          subjects: [],
          tassonomia_argomenti: [],
          tipologia_organizzazione: {
            title: 'Struttura amministrativa',
            token: 'struttura_amministrativa',
          },
          title: 'Assessorato al Turismo',
          ulteriori_informazioni: {
            blocks: {
              '832b6d4c-ac12-476a-87c4-247068d5ae85': {
                '@type': 'text',
              },
            },
            blocks_layout: {
              items: ['832b6d4c-ac12-476a-87c4-247068d5ae85'],
            },
          },
          uo_children: [],
          uo_parent: null,
          version: 'current',
          versioning_enabled: true,
          working_copy: null,
          working_copy_of: null,
        },
      },
      '/amministrazione/aree-di-competenza/area-impiantistica-sportiva-e-manifestazioni-sportive_office':
        {
          loading: false,
          loaded: true,
          error: null,
          data: {
            '@components': {
              actions: {
                '@id':
                  'http://localhost:3000/amministrazione/aree-di-competenza/area-impiantistica-sportiva-e-manifestazioni-sportive/@actions',
              },
              aliases: {
                '@id':
                  'http://localhost:3000/amministrazione/aree-di-competenza/area-impiantistica-sportiva-e-manifestazioni-sportive/@aliases',
              },
              breadcrumbs: {
                '@id':
                  'http://localhost:3000/amministrazione/aree-di-competenza/area-impiantistica-sportiva-e-manifestazioni-sportive/@breadcrumbs',
              },
              contextnavigation: {
                '@id':
                  'http://localhost:3000/amministrazione/aree-di-competenza/area-impiantistica-sportiva-e-manifestazioni-sportive/@contextnavigation',
              },
              navigation: {
                '@id':
                  'http://localhost:3000/amministrazione/aree-di-competenza/area-impiantistica-sportiva-e-manifestazioni-sportive/@navigation',
              },
              subsite: {},
              translations: {
                '@id':
                  'http://localhost:3000/amministrazione/aree-di-competenza/area-impiantistica-sportiva-e-manifestazioni-sportive/@translations',
              },
              types: {
                '@id':
                  'http://localhost:3000/amministrazione/aree-di-competenza/area-impiantistica-sportiva-e-manifestazioni-sportive/@types',
              },
              workflow: {
                '@id':
                  'http://localhost:3000/amministrazione/aree-di-competenza/area-impiantistica-sportiva-e-manifestazioni-sportive/@workflow',
              },
            },
            '@id':
              'http://localhost:3000/amministrazione/aree-di-competenza/area-impiantistica-sportiva-e-manifestazioni-sportive',
            '@type': 'UnitaOrganizzativa',
            UID: '956e481bda7c4a5da6ce4dab0cbbb0be',
            allow_discussion: false,
            assessore_riferimento: [],
            changeNote: '',
            competenze: {
              blocks: {
                '68c21d17-ea6b-4469-9e10-ff6029d49419': {
                  '@type': 'text',
                },
              },
              blocks_layout: {
                items: ['68c21d17-ea6b-4469-9e10-ff6029d49419'],
              },
            },
            contact_info: [],
            contributors: [],
            correlato_in_evidenza: [],
            created: '2023-01-03T16:32:16+00:00',
            creators: ['admin'],
            description: 'Dirigente Arch. M. Alessandra Verdi',
            design_italia_meta_type: 'Unita Organizzativa',
            documenti_pubblici: [],
            effective: null,
            exclude_from_nav: false,
            expires: null,
            id: 'area-impiantistica-sportiva-e-manifestazioni-sportive',
            image: null,
            image_caption: null,
            is_folderish: true,
            items: [
              {
                '@id':
                  'http://localhost:3000/amministrazione/aree-di-competenza/area-impiantistica-sportiva-e-manifestazioni-sportive/allegati',
                '@type': 'Document',
                description: '',
                design_italia_meta_type: 'Pagina',
                has_children: false,
                id: 'allegati',
                image_field: '',
                image_scales: null,
                review_state: 'private',
                title: 'Allegati',
                url: '/amministrazione/aree-di-competenza/area-impiantistica-sportiva-e-manifestazioni-sportive/allegati',
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
                  'http://localhost:3000/amministrazione/uffici/giunta-e-consiglio',
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
                effective: null,
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
            ],
            lock: {
              locked: false,
              stealable: true,
            },
            modified: '2023-01-19T12:04:48+00:00',
            next_item: {},
            opengraph_description: null,
            opengraph_image: null,
            opengraph_title: null,
            orario_pubblico: {
              blocks: {
                '3cf3d6e2-0ded-4701-8e88-9eee27ddb9d6': {
                  '@type': 'text',
                },
              },
              blocks_layout: {
                items: ['3cf3d6e2-0ded-4701-8e88-9eee27ddb9d6'],
              },
            },
            parent: {
              '@id': 'http://localhost:3000/amministrazione/aree-di-competenza',
              '@type': 'Document',
              description: '',
              design_italia_meta_type: 'Pagina',
              has_children: true,
              id: 'aree-di-competenza',
              image_field: null,
              image_scales: null,
              review_state: 'private',
              title: 'Aree di competenza',
            },
            persone_struttura: [],
            prestazioni: [],
            preview_caption: null,
            preview_image: null,
            previous_item: {},
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
                  'http://localhost:3000/servizi/visita-veterinaria-gratis',
                '@type': 'Servizio',
                business_events: [
                  {
                    title: 'Avvio impresa',
                    token: 'avvio_impresa',
                  },
                ],
                canale_digitale: {
                  blocks: {
                    '7bebaf7f-40fd-4274-82a4-59180e9dff0b': {
                      '@type': 'text',
                      text: {
                        blocks: [
                          {
                            data: {},
                            depth: 0,
                            entityRanges: [],
                            inlineStyleRanges: [],
                            key: '1e42l',
                            text: 'Open your eyes',
                            type: 'unstyled',
                          },
                        ],
                        entityMap: {},
                      },
                    },
                  },
                  blocks_layout: {
                    items: ['7bebaf7f-40fd-4274-82a4-59180e9dff0b'],
                  },
                },
                description: 'Fai visitare il tuo cucciolo',
                design_italia_meta_type: 'Servizio',
                has_children: true,
                id: 'visita-veterinaria-gratis',
                image_field: null,
                image_scales: null,
                parent_title: 'Servizi',
                parent_url: 'http://localhost:3000/servizi',
                person_life_events: [
                  {
                    title: 'Possesso, cura, smarrimento animale da compagnia',
                    token: 'possesso_cura_smarrimento_animale_da_compagnia',
                  },
                ],
                review_state: 'private',
                title: 'Visita veterinaria gratis',
              },
            ],
            subjects: [],
            tassonomia_argomenti: [
              {
                '@id': 'http://localhost:3000/argomenti/sport',
                '@type': 'Pagina Argomento',
                description:
                  'Informazioni su eventi sportivi, impianti comunali, servizi dedicati allo sport',
                design_italia_meta_type: 'Argomento',
                effective: null,
                has_children: false,
                icona: 'child',
                id: 'sport',
                image_field: null,
                image_scales: null,
                review_state: 'private',
                title: 'Sport',
              },
            ],
            tipologia_organizzazione: {
              title: 'Struttura amministrativa',
              token: 'struttura_amministrativa',
            },
            title: 'Area impiantistica sportiva e manifestazioni sportive',
            ulteriori_informazioni: {
              blocks: {
                'b5d8cddb-45d9-4025-bc0d-1cb08ea40706': {
                  '@type': 'text',
                },
              },
              blocks_layout: {
                items: ['b5d8cddb-45d9-4025-bc0d-1cb08ea40706'],
              },
            },
            uo_children: [],
            uo_parent: null,
            version: 'current',
            versioning_enabled: true,
            working_copy: null,
            working_copy_of: null,
          },
        },
      'generic_card_/eventi/torneo-di-beneficienza-tutti-in-pista': {
        loading: false,
        loaded: true,
        error: null,
        data: {
          '@components': {
            actions: {
              '@id':
                'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@actions',
            },
            aliases: {
              '@id':
                'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@aliases',
            },
            breadcrumbs: {
              '@id':
                'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@breadcrumbs',
            },
            contextnavigation: {
              '@id':
                'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@contextnavigation',
            },
            navigation: {
              '@id':
                'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@navigation',
            },
            subsite: {},
            translations: {
              '@id':
                'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@translations',
            },
            types: {
              '@id':
                'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@types',
            },
            workflow: {
              '@id':
                'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@workflow',
            },
          },
          '@id':
            'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista',
          '@type': 'Event',
          UID: 'c9443cc746ba49c4adda298ad0080643',
          a_chi_si_rivolge: {
            blocks: {},
            blocks_layout: {
              items: [],
            },
          },
          allow_discussion: false,
          changeNote: '',
          circoscrizione: null,
          city: null,
          contact_info: [],
          contributors: [],
          correlato_in_evidenza: [],
          country: null,
          created: '2023-01-03T15:39:57+00:00',
          creators: ['admin'],
          description:
            'Dal 2 al 3 giugno torna il torneo di beneficienza “Tutti in pista”. La raccolta fondi finanzierà progetti sportivi per ragazzi e ragazze.',
          descrizione_destinatari: {
            blocks: {
              'ad5016d1-11b4-43db-b4ef-f21aa9381700': {
                '@type': 'text',
              },
            },
            blocks_layout: {
              items: ['ad5016d1-11b4-43db-b4ef-f21aa9381700'],
            },
          },
          descrizione_estesa: {
            blocks: {
              '2839c176-6d34-49e0-b756-49b28ef9ea73': {
                '@type': 'text',
              },
            },
            blocks_layout: {
              items: ['2839c176-6d34-49e0-b756-49b28ef9ea73'],
            },
          },
          design_italia_meta_type: 'Evento',
          effective: '2023-01-03T15:40:33+00:00',
          end: '2023-06-03T15:00:00+00:00',
          exclude_from_nav: false,
          expires: null,
          geolocation: {
            latitude: 0,
            longitude: 0,
          },
          id: 'torneo-di-beneficienza-tutti-in-pista',
          image: {
            'content-type': 'image/jpeg',
            download:
              'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/image-5184-32d92bd5ca50d12645bd19521f617a1e.jpeg',
            filename: 'national-cancer-institute.jpeg',
            height: 3456,
            scales: {
              gallery: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/image-250-b0dc15fe14239fd6540a8ec0b69b90a1.jpeg',
                height: 166,
                width: 250,
              },
              great: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/image-1200-f2783d495fc42002a30a66621a5f1d42.jpeg',
                height: 800,
                width: 1200,
              },
              huge: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/image-1600-125af2d574d162bcfcba6d736263475b.jpeg',
                height: 1066,
                width: 1600,
              },
              icon: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/image-32-758138967f0d3ac6d281334aa62fb9a1.jpeg',
                height: 21,
                width: 32,
              },
              large: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/image-800-04f6a50efe9ba09785f13efbe81cc835.jpeg',
                height: 533,
                width: 800,
              },
              larger: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/image-1000-c3bf6f131bc3d7186cfb6212474a64bd.jpeg',
                height: 666,
                width: 1000,
              },
              listing: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/image-16-364cc86aaee3918aff2580668562e366.jpeg',
                height: 10,
                width: 16,
              },
              midi: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/image-300-a55537091b4b5dbdd0e7ca968771c435.jpeg',
                height: 200,
                width: 300,
              },
              mini: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/image-200-5c020550114a11c536aa692e4ab528cd.jpeg',
                height: 133,
                width: 200,
              },
              preview: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/image-400-748b5b91d8abe2ac088995ebaf74173c.jpeg',
                height: 266,
                width: 400,
              },
              teaser: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/image-600-0c36e26ba473bcb77673e1c844e2aa79.jpeg',
                height: 400,
                width: 600,
              },
              thumb: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/image-128-3c50593d9eab746a9d675921afd7d63e.jpeg',
                height: 85,
                width: 128,
              },
              tile: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/image-64-202ea134831e1be47e2c2a961fe9f5c5.jpeg',
                height: 42,
                width: 64,
              },
            },
            size: 2026538,
            width: 5184,
          },
          image_caption: null,
          is_folderish: true,
          items: [
            {
              '@id':
                'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/multimedia',
              '@type': 'Document',
              description: '',
              design_italia_meta_type: 'Pagina',
              has_children: false,
              id: 'multimedia',
              image_field: '',
              image_scales: null,
              review_state: 'published',
              title: 'Multimedia',
              url: '/eventi/torneo-di-beneficienza-tutti-in-pista/multimedia',
            },
            {
              '@id':
                'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/sponsor_evento',
              '@type': 'Document',
              description: '',
              design_italia_meta_type: 'Pagina',
              has_children: false,
              id: 'sponsor_evento',
              image_field: '',
              image_scales: null,
              review_state: 'published',
              title: 'Sponsor Evento',
              url: '/eventi/torneo-di-beneficienza-tutti-in-pista/sponsor_evento',
            },
            {
              '@id':
                'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/documenti',
              '@type': 'Document',
              description: '',
              design_italia_meta_type: 'Pagina',
              has_children: false,
              id: 'documenti',
              image_field: '',
              image_scales: null,
              review_state: 'published',
              title: 'Documenti',
              url: '/eventi/torneo-di-beneficienza-tutti-in-pista/documenti',
            },
            {
              '@id':
                'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/immagini',
              '@type': 'Document',
              description: '',
              design_italia_meta_type: 'Pagina',
              has_children: true,
              id: 'immagini',
              image_field: '',
              image_scales: null,
              review_state: 'private',
              title: 'Immagini',
              url: '/eventi/torneo-di-beneficienza-tutti-in-pista/immagini',
            },
          ],
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
          luoghi_correlati: [],
          modified: '2023-03-17T14:28:54+00:00',
          next_item: {
            '@id': 'http://localhost:3000/eventi/363-festa-di-santefisio',
            '@type': 'Event',
            description:
              "Il 1° maggio 2019 Cagliari e tutta la Sardegna festeggiano la 363ª Festa di Sant'Efisio. Un intenso momento di devozione, fede, cultura e tradizioni centenarie che si fondono in una processione che non ha eguali.",
            title: "363^ Festa di Sant'Efisio",
          },
          nome_sede: null,
          open_end: false,
          opengraph_description: null,
          opengraph_image: null,
          opengraph_title: null,
          orari: {
            blocks: {
              'ac4b6614-854c-4f32-87b7-8bcaa70df3e3': {
                '@type': 'text',
              },
            },
            blocks_layout: {
              items: ['ac4b6614-854c-4f32-87b7-8bcaa70df3e3'],
            },
          },
          organizzato_da_esterno: {
            blocks: {},
            blocks_layout: {
              items: [],
            },
          },
          organizzato_da_interno: [],
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
          patrocinato_da: null,
          persone_amministrazione: [],
          preview_caption: null,
          preview_image: {
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
          previous_item: {},
          prezzo: {
            blocks: {},
            blocks_layout: {
              items: [],
            },
          },
          quartiere: null,
          recurrence: null,
          relatedItems: [],
          review_state: 'published',
          rights: '',
          seo_canonical_url: null,
          seo_description: null,
          seo_noindex: null,
          seo_title: null,
          sottotitolo: null,
          start: '2023-06-02T14:39:39+00:00',
          street: null,
          strutture_politiche: [],
          subjects: [],
          supportato_da: [],
          sync_uid: null,
          tassonomia_argomenti: [
            {
              '@id': 'http://localhost:3000/argomenti/sport',
              '@type': 'Pagina Argomento',
              description:
                'Informazioni su eventi sportivi, impianti comunali, servizi dedicati allo sport',
              design_italia_meta_type: 'Argomento',
              effective: null,
              has_children: false,
              icona: 'child',
              id: 'sport',
              image_field: null,
              image_scales: null,
              review_state: 'private',
              title: 'Sport',
            },
          ],
          tipologia_evento: null,
          title: 'Torneo di beneficienza "Tutti in pista"',
          ulteriori_informazioni: {
            blocks: {},
            blocks_layout: {
              items: [],
            },
          },
          version: 'current',
          versioning_enabled: true,
          whole_day: false,
          working_copy: null,
          working_copy_of: null,
          zip_code: null,
        },
      },
      'luogo/vivi-il-comune/luoghi/il-castello-normanno-1': {
        loading: false,
        loaded: true,
        error: null,
        data: {
          '@components': {
            actions: {
              '@id':
                'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@actions',
            },
            aliases: {
              '@id':
                'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@aliases',
            },
            breadcrumbs: {
              '@id':
                'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@breadcrumbs',
            },
            contextnavigation: {
              '@id':
                'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@contextnavigation',
            },
            navigation: {
              '@id':
                'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@navigation',
            },
            subsite: {},
            translations: {
              '@id':
                'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@translations',
            },
            types: {
              '@id':
                'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@types',
            },
            workflow: {
              '@id':
                'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@workflow',
            },
          },
          '@id':
            'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1',
          '@type': 'Venue',
          UID: '6d27d782beca40deb5c1d3cb8e7392c2',
          allow_discussion: false,
          changeNote: '',
          circoscrizione: null,
          city: 'Roma',
          contact_info: [
            {
              '@id':
                'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno',
              '@type': 'PuntoDiContatto',
              description: '',
              design_italia_meta_type: 'Punto di Contatto',
              effective: null,
              has_children: false,
              id: 'il-castello-normanno',
              image_field: null,
              image_scales: null,
              review_state: 'private',
              title: 'Il castello normanno',
              value_punto_contatto: [
                {
                  pdc_type: 'web',
                  pdc_value: '/',
                },
              ],
            },
          ],
          correlato_in_evidenza: [],
          country: {
            title: 'Italia',
            token: '380',
          },
          created: '2023-01-04T16:37:19+00:00',
          description:
            'Sorta a metà Seicento come residenza di caccia di Carlo Emanuele II, che fece del centrale Salone di Diana uno snodo ideale fra palazzo e giardini.',
          descrizione_completa: {
            blocks: {
              '4fae3d32-93ec-45c5-9e5a-c9311d9fac0c': {
                '@type': 'text',
                text: {
                  blocks: [
                    {
                      data: {},
                      depth: 0,
                      entityRanges: [
                        {
                          key: 0,
                          length: 10,
                          offset: 0,
                        },
                      ],
                      inlineStyleRanges: [],
                      key: 'egfn3',
                      text: 'Link prova',
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
              '84324fc4-cd21-47ee-b605-1486fff356cd': {
                '@type': 'text',
                text: {
                  blocks: [
                    {
                      data: {},
                      depth: 0,
                      entityRanges: [],
                      inlineStyleRanges: [],
                      key: 'el02p',
                      text: " I didn't wanna leave you",
                      type: 'unstyled',
                    },
                  ],
                  entityMap: {},
                },
              },
            },
            blocks_layout: {
              items: [
                '84324fc4-cd21-47ee-b605-1486fff356cd',
                '4fae3d32-93ec-45c5-9e5a-c9311d9fac0c',
              ],
            },
          },
          design_italia_meta_type: 'Luogo',
          elementi_di_interesse: {
            blocks: {
              '4cde16ad-b10d-48e2-85a1-839702198a7e': {
                '@type': 'text',
                text: {
                  blocks: [
                    {
                      data: {},
                      depth: 0,
                      entityRanges: [],
                      inlineStyleRanges: [],
                      key: 'd2irg',
                      text: "I didn't wanna lie",
                      type: 'unstyled',
                    },
                  ],
                  entityMap: {},
                },
              },
            },
            blocks_layout: {
              items: ['4cde16ad-b10d-48e2-85a1-839702198a7e'],
            },
          },
          geolocation: {
            latitude: 41.8337833,
            longitude: 12.4677863,
          },
          id: 'il-castello-normanno-1',
          identificativo_mibac: null,
          image: {
            'content-type': 'image/jpeg',
            download:
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@@images/image-6240-855cbf2b40c8481acf93eca29efc781c.jpeg',
            filename: 'woman-having-online-meeting-work.jpg',
            height: 4160,
            scales: {
              gallery: {
                download:
                  'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@@images/image-250-341a22c0b63d1580e2875230f0ceee30.jpeg',
                height: 166,
                width: 250,
              },
              great: {
                download:
                  'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@@images/image-1200-35fc87ccd3db8fd14f6c564356c49ea1.jpeg',
                height: 800,
                width: 1200,
              },
              huge: {
                download:
                  'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@@images/image-1600-a717150e9895f191027d2fa8c14da5cd.jpeg',
                height: 1066,
                width: 1600,
              },
              icon: {
                download:
                  'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@@images/image-32-0c96b7246be3d698898b1f906a142a96.jpeg',
                height: 21,
                width: 32,
              },
              large: {
                download:
                  'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@@images/image-800-2c457b9e075f4afd6af3cab9354ed5d1.jpeg',
                height: 533,
                width: 800,
              },
              larger: {
                download:
                  'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@@images/image-1000-8d7287880673bcaf80641e1a4403d301.jpeg',
                height: 666,
                width: 1000,
              },
              listing: {
                download:
                  'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@@images/image-16-99e22c580ba4498b9daf02b87738140c.jpeg',
                height: 10,
                width: 16,
              },
              midi: {
                download:
                  'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@@images/image-300-368c078e6e8bf2a35dc93d184395fcac.jpeg',
                height: 200,
                width: 300,
              },
              mini: {
                download:
                  'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@@images/image-200-74657a3662666b2c0cc4211be76a5169.jpeg',
                height: 133,
                width: 200,
              },
              preview: {
                download:
                  'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@@images/image-400-59f5c8969c152dbff66d49a569fb1346.jpeg',
                height: 266,
                width: 400,
              },
              teaser: {
                download:
                  'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@@images/image-600-dbf3967f5b16f0c4eee950f1feca2944.jpeg',
                height: 400,
                width: 600,
              },
              thumb: {
                download:
                  'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@@images/image-128-a1945a76099ea4db307ebc5bf4275d99.jpeg',
                height: 85,
                width: 128,
              },
              tile: {
                download:
                  'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@@images/image-64-fe5eaa8e956851464bae97cbabb4fabe.jpeg',
                height: 42,
                width: 64,
              },
            },
            size: 1195679,
            width: 6240,
          },
          image_caption: null,
          is_folderish: true,
          items: [
            {
              '@id':
                'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/multimedia',
              '@type': 'Folder',
              description: '',
              design_italia_meta_type: 'Cartella',
              has_children: false,
              id: 'multimedia',
              image_field: '',
              image_scales: null,
              review_state: 'private',
              title: 'Multimedia',
              url: '/vivi-il-comune/luoghi/il-castello-normanno-1/multimedia',
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
              '@id': 'http://localhost:3000/vivi-il-comune/luoghi/prova',
              '@type': 'Venue',
              circoscrizione: null,
              city: 'Roma',
              country: '380',
              description: 'Lorem ipsum',
              design_italia_meta_type: 'Luogo',
              effective: null,
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
          modalita_accesso: {
            blocks: {
              '4ad6dec6-3204-46c5-952a-831537d6aef3': {
                '@type': 'text',
                text: {
                  blocks: [
                    {
                      data: {},
                      depth: 0,
                      entityRanges: [],
                      inlineStyleRanges: [],
                      key: '7fa9c',
                      text: 'We were gold',
                      type: 'unstyled',
                    },
                  ],
                  entityMap: {},
                },
              },
            },
            blocks_layout: {
              items: ['4ad6dec6-3204-46c5-952a-831537d6aef3'],
            },
          },
          modified: '2023-03-13T10:57:43+00:00',
          next_item: {
            '@id':
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-2',
            '@type': 'PuntoDiContatto',
            description: '',
            title: 'Il castello normanno',
          },
          nome_alternativo: 'We were good',
          notes: {
            'content-type': 'text/html',
            data: '<p>Started to cry but then remembered I</p>',
            encoding: 'utf8',
          },
          opengraph_description: null,
          opengraph_image: null,
          opengraph_title: null,
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
          parent: {
            '@id': 'http://localhost:3000/vivi-il-comune/luoghi',
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
          preview_caption: null,
          preview_image: {
            'content-type': 'image/jpeg',
            download:
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@@images/preview_image-4203-f5d6f99964bcf513edad1096078123e8.jpeg',
            filename: 'tropical-beach.jpg',
            height: 2810,
            scales: {
              gallery: {
                download:
                  'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@@images/preview_image-250-c17c4e4a9710a69e5e461c557c079981.jpeg',
                height: 167,
                width: 250,
              },
              great: {
                download:
                  'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@@images/preview_image-1200-60ee5658b0e696e1d7fad070fc36a740.jpeg',
                height: 802,
                width: 1200,
              },
              huge: {
                download:
                  'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@@images/preview_image-1600-f2316767f029b72a7d2e01639a8f184b.jpeg',
                height: 1069,
                width: 1600,
              },
              icon: {
                download:
                  'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@@images/preview_image-32-bac43be4b2fab9a75f4ccb62fe74df4e.jpeg',
                height: 21,
                width: 32,
              },
              large: {
                download:
                  'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@@images/preview_image-800-023028fbcccc45565d92e8a2a6cb147c.jpeg',
                height: 534,
                width: 800,
              },
              larger: {
                download:
                  'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@@images/preview_image-1000-ae5f00615b10837bb10a40d7270e6ce8.jpeg',
                height: 668,
                width: 1000,
              },
              listing: {
                download:
                  'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@@images/preview_image-16-fdb430fc9376e5adff26981efbab5332.jpeg',
                height: 10,
                width: 16,
              },
              midi: {
                download:
                  'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@@images/preview_image-300-c6cf3a5df29c46a672b251c24afa3352.jpeg',
                height: 200,
                width: 300,
              },
              mini: {
                download:
                  'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@@images/preview_image-200-122ce78691587629647ced776eb06871.jpeg',
                height: 133,
                width: 200,
              },
              preview: {
                download:
                  'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@@images/preview_image-400-27ae825602bedf7738510c4c19503456.jpeg',
                height: 267,
                width: 400,
              },
              teaser: {
                download:
                  'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@@images/preview_image-600-332d769d74ed7f448775f3dc3545b3e8.jpeg',
                height: 401,
                width: 600,
              },
              thumb: {
                download:
                  'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@@images/preview_image-128-7c707309333748d7fe6e53413e8bdb8d.jpeg',
                height: 85,
                width: 128,
              },
              tile: {
                download:
                  'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@@images/preview_image-64-cd67fdea854e26ff01d0469250d698ed.jpeg',
                height: 42,
                width: 64,
              },
            },
            size: 10620773,
            width: 4203,
          },
          previous_item: {
            '@id':
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno',
            '@type': 'PuntoDiContatto',
            description: '',
            title: 'Il castello normanno',
          },
          quartiere: null,
          relatedItems: [],
          related_news: [],
          review_state: 'private',
          sede_di: [
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
            {
              '@id':
                'http://localhost:3000/amministrazione/uffici/ufficio-delle-attivita-produttive-1',
              '@type': 'UnitaOrganizzativa',
              address: '',
              circoscrizione: '',
              city: '',
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
              description: 'Prova',
              design_italia_meta_type: 'Unita Organizzativa',
              geolocation: {
                latitude: 0,
                longitude: 0,
              },
              has_children: true,
              id: 'ufficio-delle-attivita-produttive-1',
              image_field: null,
              image_scales: null,
              nome_sede: '',
              quartiere: '',
              review_state: 'published',
              street: '',
              tipologia_organizzazione: {
                title: 'Struttura amministrativa␟Ufficio',
                token: 'ufficio',
              },
              title: 'Ufficio delle Attività Produttive',
              zip_code: '',
            },
          ],
          seo_canonical_url: null,
          seo_description: null,
          seo_noindex: null,
          seo_title: null,
          street: 'Via Liszt, 21',
          struttura_responsabile: {
            blocks: {
              '763969e0-ca13-45ae-ab69-3ee718b67ea8': {
                '@type': 'text',
                text: {
                  blocks: [
                    {
                      data: {},
                      depth: 0,
                      entityRanges: [],
                      inlineStyleRanges: [],
                      key: 'c1n1b',
                      text: 'I can buy myself flowers',
                      type: 'unstyled',
                    },
                  ],
                  entityMap: {},
                },
              },
            },
            blocks_layout: {
              items: ['763969e0-ca13-45ae-ab69-3ee718b67ea8'],
            },
          },
          struttura_responsabile_correlati: [
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
              title: 'Architettura Militare e fortificata',
              token: 'architettura_militare_e_fortificata',
            },
          ],
          title: 'Il castello normanno',
          ulteriori_informazioni: {
            blocks: {
              '21e646ec-8d39-45a9-88b9-43ac2c82960b': {
                '@type': 'text',
                text: {
                  blocks: [
                    {
                      data: {},
                      depth: 0,
                      entityRanges: [],
                      inlineStyleRanges: [],
                      key: 'eeppk',
                      text: 'Write my name in the sand',
                      type: 'unstyled',
                    },
                  ],
                  entityMap: {},
                },
              },
            },
            blocks_layout: {
              items: ['21e646ec-8d39-45a9-88b9-43ac2c82960b'],
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
    screen.getByRole('heading', { name: /Mega Evento/i }),
  ).toBeInTheDocument();

  // // a chi è rivolto --> non appare
  // expect(screen.getByText(/Programmatori RedTurtle/i)).toBeInTheDocument();
  // //tipo evento --> non appare
  // expect(screen.getByText(/Evento culturale/i)).toBeInTheDocument();

  // date e orari
  expect(
    screen.getByRole('heading', { name: /Date e orari/i }),
  ).toBeInTheDocument();

  // !!!!!!!!!!!!!!!!!
  // non riesco a testare il campo inizio evento - fine evento, solo il blocco date e orari
  // // inizio evento - fine evento
  // await screen.findByText(/inizio evento/i);
  // screen.debug();
  // expect(screen.getByText(/Inizio evento/i)).toBeInTheDocument();

  // !!!!!!!!!!!!!!!!!
  //orari - sezione orari dovrebbe essere titolo della sezione "informazioni sugli orari" ma appare anche se sezione non è compilata
  // expect(
  //   screen.getByRole('heading', { name: /Orari/i }),
  // ).not.toBeInTheDocument();
  // !!!!!!!!!!!!!!!!!

  // contatti
  expect(
    screen.getByRole('heading', { name: /Contatti/i }),
  ).toBeInTheDocument();

  const cardContatti = document.querySelector('#contatti .card');
  expect(cardContatti).toBeInTheDocument();
});

it('expect to have all non-mandatory fields in page', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <EventoView content={mock_allfields} />
      </MemoryRouter>
    </Provider>,
  );

  // descrizione
  expect(screen.getByText('Descrizione del mega evento')).toBeInTheDocument();
  // immagine di testata + didascalia
  expect(
    screen.getByRole('img', { name: /Didascalia immagine testata/i }),
  ).toBeInTheDocument();
  // tassonomia argomenti
  expect(screen.getAllByText(/Muoversi/i)).toBeTruthy();
  // sottotitolo
  expect(
    screen.getByText(/sottotitolo del mega evento/i, { exact: false }),
  ).toBeInTheDocument();

  // parteciperanno persone
  expect(
    screen.getByRole('link', { name: /Valerio Alfio Boi/i }),
  ).toBeInTheDocument();

  // descrizione estesa
  expect(screen.getByText(/mega iniziative/i)).toBeInTheDocument();
  // descrizione destinatari
  expect(screen.getByText(/A chi è rivolto/i)).toBeInTheDocument();
  expect(
    screen.getByText(/I destinatari dovranno essere programmatori/i),
  ).toBeInTheDocument();

  // luoghi correlati
  expect(
    screen.getByRole('heading', { name: /Il castello normanno/i }),
  ).toBeInTheDocument();
  // nome sede
  expect(
    screen.getByRole('heading', { name: /Sede del mega evento/i }),
  ).toBeInTheDocument();
  // street
  expect(screen.getByText(/Via Cincillà 198/i)).toBeInTheDocument();
  // zip code
  expect(screen.getByText(/999999/i)).toBeInTheDocument();
  // città
  expect(screen.getByText(/Perugia/i)).toBeInTheDocument();
  // quartiere
  expect(screen.getByText(/Bello/i)).toBeInTheDocument();
  // circoscrizione
  expect(screen.getByText(/Arginone/i)).toBeInTheDocument();

  // tutta la giornata - non appare ma devono scomparire gli orari

  // expect(screen.getByText('10:00')).toBeInTheDocument();

  // !!!!!!!!!!!!!!!!!
  // !!!!!!!!!!!!!!!!!
  // fine aperta

  // await screen.findByText(
  //   'Questo evento ha una data di fine aperta/variabile.',
  // );
  // expect(
  //   screen.getByText('Questo evento ha una data di fine aperta/variabile.'),
  // ).toBeInTheDocument();
  // expect(
  //   screen.getByText(/fino a conclusione/, { exact: false, selector: 'h4' }),
  // ).toBeInTheDocument();
  // !!!!!!!!!!!!!!!!!
  // !!!!!!!!!!!!!!!!!

  // informazioni aggiuntive sugli orari
  expect(screen.getByText(/Ho inventato tutto/i)).toBeInTheDocument();

  // costi
  expect(screen.getByText('10€')).toBeInTheDocument();

  // organizzato da
  expect(
    screen.getByRole('heading', { name: /Organizzato da/i }),
  ).toBeInTheDocument();

  await screen.findByText(/assessorato al turismo/i);
  expect(screen.getByText(/assessorato al turismo/i)).toBeInTheDocument();

  // organizzato da - esterno
  expect(screen.getByText(/Batman/i)).toBeInTheDocument();

  // evento supportato da - campo non compare
  expect(
    screen.getByText(/Area impiantistica sportiva/i, { exact: false }),
  ).toBeInTheDocument();

  // evento patrocinato da --> non appare
  expect(
    screen.getByRole('heading', { name: /Patrocinato da/i }),
  ).toBeInTheDocument();
  expect(screen.getByText(/Regioni autonome/i)).toBeInTheDocument();

  // ulteriori informazioni
  expect(screen.getByText(/Magliette gratis/i)).toBeInTheDocument();

  // strutture politiche coinvolte
  expect(
    screen.getByText(/strutture politiche coinvolte/i),
  ).toBeInTheDocument();
  expect(screen.getByText(/ARST/i)).toBeInTheDocument();

  // correlati in evidenza
  expect(screen.getByText('Notizie')).toBeInTheDocument();
  // contenuti correlati
  expect(
    screen.getByRole('heading', { name: /contenuti correlati/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: /Torneo di beneficienza/i, exact: false }),
  ).toBeInTheDocument();
  screen.debug();
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
