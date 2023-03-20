import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DocumentoView from '../DocumentoView/DocumentoView';
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
        'http://localhost:3000/documenti-e-dati/is-this-the-real-life/@actions',
    },
    aliases: {
      '@id':
        'http://localhost:3000/documenti-e-dati/is-this-the-real-life/@aliases',
    },
    breadcrumbs: {
      '@id':
        'http://localhost:3000/documenti-e-dati/is-this-the-real-life/@breadcrumbs',
    },
    contextnavigation: {
      '@id':
        'http://localhost:3000/documenti-e-dati/is-this-the-real-life/@contextnavigation',
    },
    navigation: {
      '@id':
        'http://localhost:3000/documenti-e-dati/is-this-the-real-life/@navigation',
    },
    subsite: {},
    translations: {
      '@id':
        'http://localhost:3000/documenti-e-dati/is-this-the-real-life/@translations',
    },
    types: {
      '@id':
        'http://localhost:3000/documenti-e-dati/is-this-the-real-life/@types',
    },
    workflow: {
      '@id':
        'http://localhost:3000/documenti-e-dati/is-this-the-real-life/@workflow',
    },
  },
  '@id': 'http://localhost:3000/documenti-e-dati/is-this-the-real-life',
  '@type': 'Documento',
  UID: '0a3c6d1073ee424597e3c4aa590abfa9',
  description: 'Is this just fantasy?',
  descrizione_estesa: {
    blocks: {
      '9ab23fba-09c6-4574-80fe-a52f6a0969fd': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: '9mh9q',
              text: 'Open your eyes',
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['9ab23fba-09c6-4574-80fe-a52f6a0969fd'],
    },
  },
  formati_disponibili: {
    blocks: {
      'a5de5d87-f472-4745-ad5e-6ce4d119639a': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: '99esm',
              text: 'Caught in a landside',
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['a5de5d87-f472-4745-ad5e-6ce4d119639a'],
    },
  },
  items: [],
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
  tipologia_documento: [
    {
      title: 'Documenti albo pretorio',
      token: 'documenti_albo_pretorio',
    },
  ],
  tipologia_licenze: {
    title: 'Licenza aperta',
    token: 'licenza_aperta',
  },
  title: 'Is this the real life?',
  ufficio_responsabile: [
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
};

const mock_allfields = {
  ...mock_mandatory,
  allow_discussion: false,
  area_responsabile: [
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
  autori: [
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
  business_events: [
    {
      title: 'Avvio impresa',
      token: 'avvio_impresa',
    },
  ],
  changeNote: '',
  contributors: [],
  correlato_in_evidenza: [],
  created: '2023-02-15T13:13:58+00:00',
  creators: ['admin'],
  data_protocollo: '2023-02-15',
  dataset: [],
  descrizione_estesa: {
    blocks: {
      'e7955b94-2359-4bcc-8af5-983961637cbe': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: '8nomj',
              text: "You don't really read into my melancholia",
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['e7955b94-2359-4bcc-8af5-983961637cbe'],
    },
  },
  design_italia_meta_type: 'Documento',
  documenti_allegati: [
    {
      '@id':
        'http://localhost:3000/documenti-e-dati/cartella-modulistica/prova',
      '@type': 'Documento',
      description: 'prova',
      design_italia_meta_type: 'Documento',
      effective: null,
      has_children: true,
      id: 'prova',
      image_field: null,
      image_scales: null,
      review_state: 'private',
      tipologia_documento: [
        {
          title: 'Modulistica',
          token: 'modulistica',
        },
      ],
      tipologia_licenze: {
        title: 'Licenza aperta␟Attribuzione',
        token: 'attribuzione',
      },
      title: 'prova',
    },
  ],
  effective: '2023-02-17T13:45:57+00:00',
  exclude_from_nav: false,
  expires: null,
  id: 'is-this-the-real-life',
  identificativo: 'Staring at the ceiling with you',
  image: {
    'content-type': 'image/jpeg',
    download:
      'http://localhost:3000/documenti-e-dati/is-this-the-real-life/@@images/image-6240-51226dac133945973780f0975f4989c5.jpeg',
    filename: 'woman-having-online-meeting-work.jpg',
    height: 4160,
    scales: {
      gallery: {
        download:
          'http://localhost:3000/documenti-e-dati/is-this-the-real-life/@@images/image-250-0ad95c833e11876134d35f4264d0946f.jpeg',
        height: 166,
        width: 250,
      },
      great: {
        download:
          'http://localhost:3000/documenti-e-dati/is-this-the-real-life/@@images/image-1200-fcc6efed66011ab5d85f5124985537e9.jpeg',
        height: 800,
        width: 1200,
      },
      huge: {
        download:
          'http://localhost:3000/documenti-e-dati/is-this-the-real-life/@@images/image-1600-1501f8aba6d5cce3a3e582d1a52750b7.jpeg',
        height: 1066,
        width: 1600,
      },
      icon: {
        download:
          'http://localhost:3000/documenti-e-dati/is-this-the-real-life/@@images/image-32-8586ac934a214d4325954bf886fb3861.jpeg',
        height: 21,
        width: 32,
      },
      large: {
        download:
          'http://localhost:3000/documenti-e-dati/is-this-the-real-life/@@images/image-800-759e110ab8e3e94e11719e7fd99bf2fe.jpeg',
        height: 533,
        width: 800,
      },
      larger: {
        download:
          'http://localhost:3000/documenti-e-dati/is-this-the-real-life/@@images/image-1000-5e709912b23feadf2237b15f6b20ee51.jpeg',
        height: 666,
        width: 1000,
      },
      listing: {
        download:
          'http://localhost:3000/documenti-e-dati/is-this-the-real-life/@@images/image-16-451730a29bd86d15ae087852321a5b76.jpeg',
        height: 10,
        width: 16,
      },
      midi: {
        download:
          'http://localhost:3000/documenti-e-dati/is-this-the-real-life/@@images/image-300-357c68da15bcc3e210493958a4a5c9cf.jpeg',
        height: 200,
        width: 300,
      },
      mini: {
        download:
          'http://localhost:3000/documenti-e-dati/is-this-the-real-life/@@images/image-200-829e54d35ede7432559ac111c970d2b8.jpeg',
        height: 133,
        width: 200,
      },
      preview: {
        download:
          'http://localhost:3000/documenti-e-dati/is-this-the-real-life/@@images/image-400-4cc3450335d541ec40f95a04f588138f.jpeg',
        height: 266,
        width: 400,
      },
      teaser: {
        download:
          'http://localhost:3000/documenti-e-dati/is-this-the-real-life/@@images/image-600-ec6786a3e315f7ce099b8f086194addf.jpeg',
        height: 400,
        width: 600,
      },
      thumb: {
        download:
          'http://localhost:3000/documenti-e-dati/is-this-the-real-life/@@images/image-128-7c2e6b8f6db804fdf0febab65f3d8fd3.jpeg',
        height: 85,
        width: 128,
      },
      tile: {
        download:
          'http://localhost:3000/documenti-e-dati/is-this-the-real-life/@@images/image-64-f3548f4c0b56303e08baedf0ed53a107.jpeg',
        height: 42,
        width: 64,
      },
    },
    size: 1195679,
    width: 6240,
  },
  image_caption: "You don't ever say too much",
  is_folderish: true,
  items: [
    {
      '@id':
        'http://localhost:3000/documenti-e-dati/is-this-the-real-life/multimedia',
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
  ],
  items_total: 1,
  language: {
    title: 'Italiano',
    token: 'it',
  },
  layout: 'view',
  licenza_distribuzione: 'I need no sympathy',
  lock: {
    locked: false,
    stealable: true,
  },
  modified: '2023-02-17T14:20:04+00:00',
  next_item: {
    '@id': 'http://localhost:3000/documenti-e-dati/is-this-the-real-life-1',
    '@type': 'Bando',
    description: '',
    title: 'Is this the real life?',
  },
  opengraph_description: null,
  opengraph_image: null,
  opengraph_title: null,
  parent: {
    '@id': 'http://localhost:3000/documenti-e-dati',
    '@type': 'Document',
    description:
      'Donec in consequat nunc. Duis semper fermentum lacus, ac condimentum justo auctor a. Nam erat erat, porta vel pharetra in, ullamcorper vel turpis.',
    design_italia_meta_type: 'Pagina',
    has_children: true,
    id: 'documenti-e-dati',
    image_field: null,
    image_scales: null,
    review_state: 'published',
    title: 'Documenti e dati',
  },
  person_life_events: [
    {
      title: 'Iscrizione Scuola/Università e/o richiesta borsa di studio',
      token: 'iscrizione_scuola_universita_richiesta_borsa_di_studio',
    },
  ],
  preview_caption: null,
  preview_image: null,
  previous_item: {
    '@id': 'http://localhost:3000/documenti-e-dati/cartella-modulistica',
    '@type': 'CartellaModulistica',
    description: 'Is this the real life?',
    title: 'Cartella modulistica',
  },
  protocollo: 'Open your eyes',
  relatedItems: [
    {
      '@id': 'http://localhost:3000/servizi/visita-veterinaria-gratis',
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
      effective: null,
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
  review_state: 'published',
  riferimenti_normativi: {
    blocks: {
      '0a6a038a-3152-4c49-8e63-5d268acf7200': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: 'fcbl7',
              text: "I've been under scrutiny",
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['0a6a038a-3152-4c49-8e63-5d268acf7200'],
    },
  },
  rights: '',
  seo_canonical_url: null,
  seo_description: null,
  seo_noindex: null,
  seo_title: null,
  servizi_collegati: [],
  subjects: [],
  tipologia_documenti_albopretorio: {
    title: 'Atto amministrativo » Decreto » Decreto del Sindaco',
    token: 'decreto_del_sindaco',
  },
  ulteriori_informazioni: {
    blocks: {
      '66e3ee74-c7e5-4254-8640-af6585bd2f0d': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: '5mkl',
              text: 'You handed it beautifully',
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['66e3ee74-c7e5-4254-8640-af6585bd2f0d'],
    },
  },
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
      '/amministrazione/uffici/giunta-e-consiglio_office': {
        loading: false,
        loaded: true,
        error: null,
        data: {
          '@components': {
            actions: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/giunta-e-consiglio/@actions',
            },
            aliases: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/giunta-e-consiglio/@aliases',
            },
            breadcrumbs: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/giunta-e-consiglio/@breadcrumbs',
            },
            contextnavigation: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/giunta-e-consiglio/@contextnavigation',
            },
            navigation: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/giunta-e-consiglio/@navigation',
            },
            subsite: {},
            translations: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/giunta-e-consiglio/@translations',
            },
            types: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/giunta-e-consiglio/@types',
            },
            workflow: {
              '@id':
                'http://localhost:3000/amministrazione/uffici/giunta-e-consiglio/@workflow',
            },
          },
          '@id':
            'http://localhost:3000/amministrazione/uffici/giunta-e-consiglio',
          '@type': 'UnitaOrganizzativa',
          UID: '4b56678a54884616aa8b7cb230d27794',
          allow_discussion: false,
          assessore_riferimento: [],
          changeNote: '',
          competenze: {
            blocks: {
              '84a4a7af-5b14-4161-84c0-008b501a4dc7': {
                '@type': 'text',
                text: {
                  blocks: [
                    {
                      data: {},
                      depth: 0,
                      entityRanges: [],
                      inlineStyleRanges: [],
                      key: '7srp8',
                      text: 'Prova',
                      type: 'unstyled',
                    },
                  ],
                  entityMap: {},
                },
              },
            },
            blocks_layout: {
              items: ['84a4a7af-5b14-4161-84c0-008b501a4dc7'],
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
          correlato_in_evidenza: [],
          created: '2023-01-03T15:47:46+00:00',
          creators: ['admin'],
          description: 'Pierced through the heart but never killed',
          design_italia_meta_type: 'Unita Organizzativa',
          documenti_pubblici: [],
          effective: null,
          exclude_from_nav: false,
          expires: null,
          id: 'giunta-e-consiglio',
          image: null,
          image_caption: null,
          is_folderish: true,
          items: [
            {
              '@id':
                'http://localhost:3000/amministrazione/uffici/giunta-e-consiglio/allegati',
              '@type': 'Document',
              description: '',
              design_italia_meta_type: 'Pagina',
              has_children: false,
              id: 'allegati',
              image_field: '',
              image_scales: null,
              review_state: 'private',
              title: 'Allegati',
              url: '/amministrazione/uffici/giunta-e-consiglio/allegati',
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
          modified: '2023-02-13T13:58:29+00:00',
          next_item: {
            '@id':
              'http://localhost:3000/amministrazione/uffici/assessorato-al-turismo',
            '@type': 'UnitaOrganizzativa',
            description: '',
            title: 'Assessorato al Turismo',
          },
          opengraph_description: null,
          opengraph_image: null,
          opengraph_title: null,
          orario_pubblico: {
            blocks: {
              'fbe2077b-d934-437b-b5ac-894ad6901bbc': {
                '@type': 'text',
              },
            },
            blocks_layout: {
              items: ['fbe2077b-d934-437b-b5ac-894ad6901bbc'],
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
          persone_struttura: [
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
          prestazioni: [],
          preview_caption: null,
          preview_image: null,
          previous_item: {
            '@id':
              'http://localhost:3000/amministrazione/uffici/gestione-impianti-sportivi',
            '@type': 'UnitaOrganizzativa',
            description: 'Prova prova prova',
            title: 'Gestione impianti sportivi',
          },
          relatedItems: [],
          related_news: [],
          responsabile: [],
          review_state: 'private',
          rights: '',
          sede: [
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
          sedi_secondarie: [],
          seo_canonical_url: null,
          seo_description: null,
          seo_noindex: null,
          seo_title: null,
          servizi_offerti: [
            {
              '@id': 'http://localhost:3000/servizi/visita-veterinaria-gratis',
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
          tassonomia_argomenti: [],
          tipologia_organizzazione: {
            title: 'Struttura amministrativa',
            token: 'struttura_amministrativa',
          },
          title: 'Giunta e consiglio',
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
        },
      },
      'generic_card_/servizi/visita-veterinaria-gratis': {
        loading: false,
        loaded: true,
        error: null,
        data: {
          '@components': {
            actions: {
              '@id':
                'http://localhost:3000/servizi/visita-veterinaria-gratis/@actions',
            },
            aliases: {
              '@id':
                'http://localhost:3000/servizi/visita-veterinaria-gratis/@aliases',
            },
            breadcrumbs: {
              '@id':
                'http://localhost:3000/servizi/visita-veterinaria-gratis/@breadcrumbs',
            },
            contextnavigation: {
              '@id':
                'http://localhost:3000/servizi/visita-veterinaria-gratis/@contextnavigation',
            },
            navigation: {
              '@id':
                'http://localhost:3000/servizi/visita-veterinaria-gratis/@navigation',
            },
            subsite: {},
            translations: {
              '@id':
                'http://localhost:3000/servizi/visita-veterinaria-gratis/@translations',
            },
            types: {
              '@id':
                'http://localhost:3000/servizi/visita-veterinaria-gratis/@types',
            },
            workflow: {
              '@id':
                'http://localhost:3000/servizi/visita-veterinaria-gratis/@workflow',
            },
          },
          '@id': 'http://localhost:3000/servizi/visita-veterinaria-gratis',
          '@type': 'Servizio',
          UID: '3643564b4346478d9d3de790943f3d03',
          a_chi_si_rivolge: {
            blocks: {
              '2851114d-2489-4ea3-9b46-062cf6437418': {
                '@type': 'text',
                text: {
                  blocks: [
                    {
                      data: {},
                      depth: 0,
                      entityRanges: [],
                      inlineStyleRanges: [],
                      key: 'f5rrc',
                      text: 'Animaletti',
                      type: 'unstyled',
                    },
                  ],
                  entityMap: {},
                },
              },
            },
            blocks_layout: {
              items: ['2851114d-2489-4ea3-9b46-062cf6437418'],
            },
          },
          allow_discussion: false,
          altri_documenti: [
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
          area: [
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
          business_events: ['avvio_impresa'],
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
          canale_digitale_link: 'http://www.google.it',
          canale_fisico: [
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
              effective: '2023-02-20T16:12:24+00:00',
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
          casi_particolari: {
            blocks: {
              '02eda6cd-04cf-471e-b002-a0759264c4d9': {
                '@type': 'text',
                text: {
                  blocks: [
                    {
                      data: {},
                      depth: 0,
                      entityRanges: [],
                      inlineStyleRanges: [],
                      key: '743f8',
                      text: 'Mama, Just killed a man',
                      type: 'unstyled',
                    },
                  ],
                  entityMap: {},
                },
              },
            },
            blocks_layout: {
              items: ['02eda6cd-04cf-471e-b002-a0759264c4d9'],
            },
          },
          changeNote: '',
          chi_puo_presentare: {
            blocks: {
              '3e317fff-a0a6-49c8-85a6-8d415fbc3568': {
                '@type': 'text',
                text: {
                  blocks: [
                    {
                      data: {},
                      depth: 0,
                      entityRanges: [],
                      inlineStyleRanges: [],
                      key: '5gmg4',
                      text: 'Is this just fantasy?',
                      type: 'unstyled',
                    },
                  ],
                  entityMap: {},
                },
              },
            },
            blocks_layout: {
              items: ['3e317fff-a0a6-49c8-85a6-8d415fbc3568'],
            },
          },
          codice_ipa: null,
          come_si_fa: {
            blocks: {
              'dd7c859c-8053-4c16-b753-161c438b32ce': {
                '@type': 'text',
                text: {
                  blocks: [
                    {
                      data: {},
                      depth: 0,
                      entityRanges: [],
                      inlineStyleRanges: [],
                      key: '1mlqd',
                      text: "There's a lady who's sure",
                      type: 'unstyled',
                    },
                  ],
                  entityMap: {},
                },
              },
            },
            blocks_layout: {
              items: ['dd7c859c-8053-4c16-b753-161c438b32ce'],
            },
          },
          condizioni_di_servizio: {
            'content-type': 'image/jpeg',
            download:
              'http://localhost:3000/servizi/visita-veterinaria-gratis/@@download/condizioni_di_servizio',
            filename: 'woman-having-online-meeting-work.jpg',
            size: 1195679,
          },
          contact_info: [
            {
              '@id':
                'http://localhost:3000/amministrazione/personale-amministrativo/marco-murgia',
              '@type': 'PuntoDiContatto',
              description: '',
              design_italia_meta_type: 'Punto di Contatto',
              effective: null,
              has_children: false,
              id: 'marco-murgia',
              image_field: null,
              image_scales: null,
              review_state: 'private',
              title: 'Marco Murgia',
              value_punto_contatto: [
                {
                  pdc_type: 'phone',
                  pdc_value: '+393333333333',
                },
              ],
            },
          ],
          contributors: [],
          copertura_geografica: {
            blocks: {
              'a04413ee-4676-41b4-9155-6310d8e6ad49': {
                '@type': 'text',
                text: {
                  blocks: [
                    {
                      data: {},
                      depth: 0,
                      entityRanges: [],
                      inlineStyleRanges: [],
                      key: 'em5i1',
                      text: 'Caught in a landside',
                      type: 'unstyled',
                    },
                  ],
                  entityMap: {},
                },
              },
            },
            blocks_layout: {
              items: ['a04413ee-4676-41b4-9155-6310d8e6ad49'],
            },
          },
          correlato_in_evidenza: [
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
              image_field: null,
              image_scales: null,
              review_state: 'published',
              tipologia_notizia: {
                title: null,
                token: 'Notizia',
              },
              title: 'Sport nel verde: le iniziative della prossima edizione',
            },
          ],
          cosa_serve: {
            blocks: {
              'acfa657c-fbab-45ee-859f-21bb62b7c661': {
                '@type': 'text',
                text: {
                  blocks: [
                    {
                      data: {},
                      depth: 0,
                      entityRanges: [],
                      inlineStyleRanges: [],
                      key: '2sdeq',
                      text: "And she's buying a stairway to heaven",
                      type: 'unstyled',
                    },
                  ],
                  entityMap: {},
                },
              },
            },
            blocks_layout: {
              items: ['acfa657c-fbab-45ee-859f-21bb62b7c661'],
            },
          },
          cosa_si_ottiene: {
            blocks: {
              'bb4db7e4-0a27-41c9-8f34-512eff06aa86': {
                '@type': 'text',
                text: {
                  blocks: [
                    {
                      data: {},
                      depth: 0,
                      entityRanges: [],
                      inlineStyleRanges: [],
                      key: 'pru2',
                      text: 'All that glitters is gold',
                      type: 'unstyled',
                    },
                  ],
                  entityMap: {},
                },
              },
            },
            blocks_layout: {
              items: ['bb4db7e4-0a27-41c9-8f34-512eff06aa86'],
            },
          },
          costi: {
            blocks: {
              'fb4ab549-4d60-4a24-a5c4-960e7151b28e': {
                '@type': 'text',
                text: {
                  blocks: [
                    {
                      data: {},
                      depth: 0,
                      entityRanges: [],
                      inlineStyleRanges: [],
                      key: 'foiq2',
                      text: '345',
                      type: 'unstyled',
                    },
                  ],
                  entityMap: {},
                },
              },
            },
            blocks_layout: {
              items: ['fb4ab549-4d60-4a24-a5c4-960e7151b28e'],
            },
          },
          created: '2023-01-26T14:59:04+00:00',
          creators: ['admin'],
          description: 'Fai visitare il tuo cucciolo',
          descrizione_estesa: {
            blocks: {
              '038eb313-2c32-4db4-adae-888197220fd9': {
                '@type': 'text',
                text: {
                  blocks: [
                    {
                      data: {},
                      depth: 0,
                      entityRanges: [],
                      inlineStyleRanges: [],
                      key: 'c0a5j',
                      text: 'Is this the real life?',
                      type: 'unstyled',
                    },
                  ],
                  entityMap: {},
                },
              },
            },
            blocks_layout: {
              items: ['038eb313-2c32-4db4-adae-888197220fd9'],
            },
          },
          design_italia_meta_type: 'Servizio',
          dove_rivolgersi: [
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
              effective: '2023-02-20T16:12:24+00:00',
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
          dove_rivolgersi_extra: {
            blocks: {
              '894e9d1d-1c20-4ed6-a4d0-5e25adbfbd9c': {
                '@type': 'text',
                text: {
                  blocks: [
                    {
                      data: {},
                      depth: 0,
                      entityRanges: [],
                      inlineStyleRanges: [],
                      key: '8h4ue',
                      text: 'I need no sympathy',
                      type: 'unstyled',
                    },
                  ],
                  entityMap: {},
                },
              },
            },
            blocks_layout: {
              items: ['894e9d1d-1c20-4ed6-a4d0-5e25adbfbd9c'],
            },
          },
          effective: null,
          exclude_from_nav: false,
          expires: null,
          id: 'visita-veterinaria-gratis',
          identificativo: null,
          image: {
            'content-type': 'image/jpeg',
            download:
              'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/image-6240-2ad076715e87221b948922fce0e233b7.jpeg',
            filename: 'woman-having-online-meeting-work.jpg',
            height: 4160,
            scales: {
              gallery: {
                download:
                  'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/image-250-c8afc5d5252efa1d73cf4ed739c5ec58.jpeg',
                height: 166,
                width: 250,
              },
              great: {
                download:
                  'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/image-1200-75abd08aff628b1569b1f0b195f12a9a.jpeg',
                height: 800,
                width: 1200,
              },
              huge: {
                download:
                  'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/image-1600-915d78453626f34b2ba2f66c16ba7574.jpeg',
                height: 1066,
                width: 1600,
              },
              icon: {
                download:
                  'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/image-32-c03390ef60ee85723150344abac7642a.jpeg',
                height: 21,
                width: 32,
              },
              large: {
                download:
                  'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/image-800-0f8a1a3de6be16e7d49c035942013a84.jpeg',
                height: 533,
                width: 800,
              },
              larger: {
                download:
                  'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/image-1000-f19bb179e68dc98ba0b92f677b918a65.jpeg',
                height: 666,
                width: 1000,
              },
              listing: {
                download:
                  'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/image-16-8f0acc69cdc81779c04a384dc87f1fc4.jpeg',
                height: 10,
                width: 16,
              },
              midi: {
                download:
                  'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/image-300-f0de15b8e8770fa872ab31ff00af429c.jpeg',
                height: 200,
                width: 300,
              },
              mini: {
                download:
                  'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/image-200-8268df05c644acd1c3de79321f76676e.jpeg',
                height: 133,
                width: 200,
              },
              preview: {
                download:
                  'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/image-400-389669cf2b52ab747d89b2a9fe260502.jpeg',
                height: 266,
                width: 400,
              },
              teaser: {
                download:
                  'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/image-600-1eb7d62c08824b71786c52b658d6cc25.jpeg',
                height: 400,
                width: 600,
              },
              thumb: {
                download:
                  'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/image-128-2d4b7fd80e131940509322905df06ebe.jpeg',
                height: 85,
                width: 128,
              },
              tile: {
                download:
                  'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/image-64-ff43e77cf57c828a5af27e39906f40dd.jpeg',
                height: 42,
                width: 64,
              },
            },
            size: 1195679,
            width: 6240,
          },
          image_caption: 'woman working',
          is_folderish: true,
          items: [
            {
              '@id':
                'http://localhost:3000/servizi/visita-veterinaria-gratis/modulistica',
              '@type': 'Document',
              description: '',
              design_italia_meta_type: 'Pagina',
              has_children: false,
              id: 'modulistica',
              image_field: '',
              image_scales: null,
              review_state: 'private',
              title: 'Modulistica',
              url: '/servizi/visita-veterinaria-gratis/modulistica',
            },
            {
              '@id':
                'http://localhost:3000/servizi/visita-veterinaria-gratis/allegati',
              '@type': 'Document',
              description: '',
              design_italia_meta_type: 'Pagina',
              has_children: false,
              id: 'allegati',
              image_field: '',
              image_scales: null,
              review_state: 'private',
              title: 'Allegati',
              url: '/servizi/visita-veterinaria-gratis/allegati',
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
              'ff02a375-2be1-4a43-b758-dbb1fae8fa71': {
                '@type': 'text',
                text: {
                  blocks: [
                    {
                      data: {},
                      depth: 0,
                      entityRanges: [],
                      inlineStyleRanges: [],
                      key: 'f14ja',
                      text: 'Put a gun against his head',
                      type: 'unstyled',
                    },
                  ],
                  entityMap: {},
                },
              },
            },
            blocks_layout: {
              items: ['ff02a375-2be1-4a43-b758-dbb1fae8fa71'],
            },
          },
          lock: {
            locked: false,
            stealable: true,
          },
          modified: '2023-03-13T11:57:27+00:00',
          motivo_stato_servizio: {
            blocks: {
              'c19f982c-ce7a-4050-aa60-65a92723db34': {
                '@type': 'text',
                text: {
                  blocks: [
                    {
                      data: {},
                      depth: 0,
                      entityRanges: [],
                      inlineStyleRanges: [],
                      key: '3d3cq',
                      text: 'Motivazione',
                      type: 'unstyled',
                    },
                  ],
                  entityMap: {},
                },
              },
            },
            blocks_layout: {
              items: ['c19f982c-ce7a-4050-aa60-65a92723db34'],
            },
          },
          next_item: {},
          opengraph_description: null,
          opengraph_image: null,
          opengraph_title: null,
          parent: {
            '@id': 'http://localhost:3000/servizi',
            '@type': 'Document',
            description:
              'Tutti i servizi comunali per i cittadini, disponibili online o a sportello, per richiedere documenti e permessi, iscriversi a graduatorie ed effettuare pagamenti.',
            design_italia_meta_type: 'Pagina',
            has_children: true,
            id: 'servizi',
            image_field: null,
            image_scales: null,
            review_state: 'published',
            title: 'Servizi',
          },
          person_life_events: [
            'possesso_cura_smarrimento_animale_da_compagnia',
          ],
          prenota_appuntamento: {
            blocks: {
              'e26f97de-e008-40a1-929f-315a362f7107': {
                '@type': 'text',
                text: {
                  blocks: [
                    {
                      data: {},
                      depth: 0,
                      entityRanges: [],
                      inlineStyleRanges: [],
                      key: 'btarf',
                      text: "Because I'm easy come, easy go",
                      type: 'unstyled',
                    },
                  ],
                  entityMap: {},
                },
              },
            },
            blocks_layout: {
              items: ['e26f97de-e008-40a1-929f-315a362f7107'],
            },
          },
          preview_caption: 'veterinario',
          preview_image: {
            'content-type': 'image/webp',
            download:
              'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/preview_image-2000-452abf4abe0a486b24c37f972f1008b8.webp',
            filename:
              'doctor-with-stethoscope-hands-hospital-background_1423-1.webp',
            height: 1333,
            scales: {
              gallery: {
                download:
                  'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/preview_image-250-991bdae7d7d0aa8146a42d36732e0fe5.webp',
                height: 166,
                width: 250,
              },
              great: {
                download:
                  'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/preview_image-1200-08cb7845737dfc724cf958dace170b26.webp',
                height: 799,
                width: 1200,
              },
              huge: {
                download:
                  'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/preview_image-1600-94397910f58fe856e7c0f8886d7cef4f.webp',
                height: 1066,
                width: 1600,
              },
              icon: {
                download:
                  'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/preview_image-32-8e7bdd7cdb86dd676cf8a46bdd8303c7.webp',
                height: 21,
                width: 32,
              },
              large: {
                download:
                  'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/preview_image-800-cd273a856764ba9e4040655b60cf7f1f.webp',
                height: 533,
                width: 800,
              },
              larger: {
                download:
                  'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/preview_image-1000-a05a4aceb0b6719f15f2902ea64387cc.jpeg',
                height: 666,
                width: 1000,
              },
              listing: {
                download:
                  'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/preview_image-16-b4ffbc515fa2589647e9f4a14cbc4734.jpeg',
                height: 10,
                width: 16,
              },
              midi: {
                download:
                  'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/preview_image-300-ef245aefac982a915a56b46029524aa2.webp',
                height: 199,
                width: 300,
              },
              mini: {
                download:
                  'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/preview_image-200-84aa8a2cb57ec00e25b0e80068af1538.webp',
                height: 133,
                width: 200,
              },
              preview: {
                download:
                  'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/preview_image-400-026865d13499ea9d05b2bb08c56a6de0.webp',
                height: 266,
                width: 400,
              },
              teaser: {
                download:
                  'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/preview_image-600-fd5f6bbc43581c184b621b9aac163f9e.jpeg',
                height: 399,
                width: 600,
              },
              thumb: {
                download:
                  'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/preview_image-128-9e57ee33f29de8820baedcde27c413c7.webp',
                height: 85,
                width: 128,
              },
              tile: {
                download:
                  'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/preview_image-64-a6a6405d70d5c2b90298692dce2ffd8f.webp',
                height: 42,
                width: 64,
              },
            },
            size: 199994,
            width: 2000,
          },
          previous_item: {
            '@id': 'http://localhost:3000/servizi/appalti-pubblici',
            '@type': 'Document',
            description: '',
            title: 'Appalti pubblici',
          },
          procedure_collegate: {
            blocks: {
              '3ab3b686-ab6e-4a85-bd7b-361e091c05b3': {
                '@type': 'text',
                text: {
                  blocks: [
                    {
                      data: {},
                      depth: 0,
                      entityRanges: [],
                      inlineStyleRanges: [],
                      key: 'ba4oq',
                      text: 'No escape from reality',
                      type: 'unstyled',
                    },
                  ],
                  entityMap: {},
                },
              },
            },
            blocks_layout: {
              items: ['3ab3b686-ab6e-4a85-bd7b-361e091c05b3'],
            },
          },
          relatedItems: [
            {
              '@id':
                'http://localhost:3000/notizie/chiusa-per-ristrutturazione-la-piscina-minghetti',
              '@type': 'News Item',
              description:
                'Partiti i lavori per l’adeguamento dell’impianto. La riapertura è prevista per giugno 2023.',
              design_italia_meta_type: 'Avviso',
              effective: null,
              has_children: true,
              id: 'chiusa-per-ristrutturazione-la-piscina-minghetti',
              image_field: null,
              image_scales: null,
              review_state: 'private',
              tipologia_notizia: {
                title: 'Avviso',
                token: 'avviso',
              },
              title: 'Chiusa per ristrutturazione la piscina Minghetti',
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
                'http://localhost:3000/servizi/appalti-pubblici/concessione-degli-impianti-sportivi',
              '@type': 'Servizio',
              canale_digitale: {
                blocks: {
                  '33545c64-eadf-429d-9a20-0ab4451bbf2c': {
                    '@type': 'text',
                  },
                },
                blocks_layout: {
                  items: ['33545c64-eadf-429d-9a20-0ab4451bbf2c'],
                },
              },
              description: 'Domanda per la concessione degli impianti sportivi',
              design_italia_meta_type: 'Servizio',
              effective: null,
              has_children: true,
              id: 'concessione-degli-impianti-sportivi',
              image_field: null,
              image_scales: null,
              parent_title: 'Appalti pubblici',
              parent_url: 'http://localhost:3000/servizi/appalti-pubblici',
              review_state: 'private',
              title: 'Concessione degli impianti sportivi',
            },
          ],
          settore_merceologico: null,
          sottotitolo: 'Visite gratuite per tutti',
          stato_servizio: false,
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
          tempi_e_scadenze: {
            blocks: {
              'e0c64130-00d4-4747-bc21-b58733cb1b7f': {
                '@type': 'text',
                text: {
                  blocks: [
                    {
                      data: {},
                      depth: 0,
                      entityRanges: [],
                      inlineStyleRanges: [],
                      key: 'b6mg7',
                      text: 'Dopodomani',
                      type: 'unstyled',
                    },
                  ],
                  entityMap: {},
                },
              },
            },
            blocks_layout: {
              items: ['e0c64130-00d4-4747-bc21-b58733cb1b7f'],
            },
          },
          timeline_tempi_scadenze: [
            {
              data_scadenza: '2023-01-28',
              interval_qt: '',
              interval_type: '',
              milestone: 'Tra due giorni',
              milestone_description:
                "Any way the wind blows doesn't really matter to",
            },
          ],
          title: 'Visita veterinaria gratis',
          ufficio_responsabile: [
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
          ulteriori_informazioni: {
            blocks: {
              '89f08a66-9c6a-4a30-86d8-d403475eba6e': {
                '@type': 'text',
                text: {
                  blocks: [
                    {
                      data: {},
                      depth: 0,
                      entityRanges: [],
                      inlineStyleRanges: [],
                      key: '72f2h',
                      text: 'pulled my trigger',
                      type: 'unstyled',
                    },
                  ],
                  entityMap: {},
                },
              },
            },
            blocks_layout: {
              items: ['89f08a66-9c6a-4a30-86d8-d403475eba6e'],
            },
          },
          version: 'current',
          versioning_enabled: true,
          vincoli: {
            blocks: {
              'b3206125-d0d6-474e-935e-09d28602beca': {
                '@type': 'text',
                text: {
                  blocks: [
                    {
                      data: {},
                      depth: 0,
                      entityRanges: [],
                      inlineStyleRanges: [],
                      key: '2hlds',
                      text: 'Little high, little low',
                      type: 'unstyled',
                    },
                  ],
                  entityMap: {},
                },
              },
            },
            blocks_layout: {
              items: ['b3206125-d0d6-474e-935e-09d28602beca'],
            },
          },
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
        <DocumentoView content={mock_mandatory} />
      </MemoryRouter>
    </Provider>,
  );

  //title
  expect(
    screen.getByRole('heading', { name: /Is this the real life?/i }),
  ).toBeInTheDocument();

  //descrizione
  expect(screen.getByText(/Is this just fantasy?/i)).toBeInTheDocument();

  // formati disponibili
  expect(
    screen.getByRole('heading', { name: /Formati disponibili/i }),
  ).toBeInTheDocument();
  expect(screen.getByText(/Caught in a landside/i)).toBeInTheDocument();

  //argomenti
  expect(
    screen.getByRole('link', { name: /Vivere la città/i }),
  ).toBeInTheDocument();

  // tipologia del documento
  expect(
    screen.getByRole('heading', { name: /Tipo di documento/i }),
  ).toBeInTheDocument();
  expect(screen.getByText(/Documenti albo pretorio/i)).toBeInTheDocument();

  //ufficio responsabile
  expect(
    screen.getByRole('heading', { name: /Ufficio responsabile/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: /Assessorato al turismo/i }),
  ).toBeInTheDocument();

  // licenza di distribuzione
  expect(
    screen.getByRole('heading', { name: /Licenza di distribuzione/i }),
  ).toBeInTheDocument();
  expect(screen.getByText(/Licenza aperta/i)).toBeInTheDocument();
});

test('renders all non-mandatory fields in the page', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <DocumentoView content={mock_allfields} />
      </MemoryRouter>
    </Provider>,
  );

  // identificativo del documento --> non appare
  expect(
    screen.getByRole('heading', { name: /Identificativo del documento/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByText(/Staring at the ceiling with you/i),
  ).toBeInTheDocument();

  // numero di protocollo
  expect(screen.getByText(/Protocollo Open your eyes/i)).toBeInTheDocument();

  // data di protocollo
  expect(screen.getByText(/15 February 2023/i)).toBeInTheDocument();

  // immagine di testata
  expect(
    screen.getByAltText(/You don't ever say too much/i),
  ).toBeInTheDocument();
  expect(screen.getByText(/You don't ever say too much/i)).toBeInTheDocument();

  //tipologia di documento albo pretorio
  expect(screen.getByText(/Decreto del Sindaco/i)).toBeInTheDocument();

  //area responsabile
  expect(
    screen.getByRole('heading', { name: /Area responsabile/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', {
      name: /Giunta e consiglio/i,
    }),
  ).toBeInTheDocument();

  //autori
  expect(screen.getByRole('heading', { name: /Autore/i })).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: /Gabriele Bianchi/i }),
  ).toBeInTheDocument();

  //licenza di distribuzione
  expect(
    screen.getByRole('heading', { name: /Licenza di distribuzione/i }),
  ).toBeInTheDocument();
  expect(screen.getByText(/I need no sympathy/i)).toBeInTheDocument();

  //descrizione estesa
  expect(
    screen.getByRole('heading', { name: /Descrizione/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByText(/You don't really read into my melancholia/i),
  ).toBeInTheDocument();

  //riferimenti normativi
  expect(screen.getByText(/Riferimenti normativi/i)).toBeInTheDocument();
  expect(screen.getByText(/I've been under scrutiny/i)).toBeInTheDocument();

  //documenti allegati
  expect(
    screen.getByRole('heading', { name: /Documenti collegati/i }),
  ).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /prova/i })).toBeInTheDocument();

  //ulteriori informazioni
  expect(screen.getByText(/You handed it beautifully/i)).toBeInTheDocument();
});
