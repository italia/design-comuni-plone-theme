import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PersonaView from '../PersonaView/PersonaView';
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
        'http://localhost:3000/amministrazione/personale-amministrativo/gianluca-luchetti/@actions',
    },
    aliases: {
      '@id':
        'http://localhost:3000/amministrazione/personale-amministrativo/gianluca-luchetti/@aliases',
    },
    breadcrumbs: {
      '@id':
        'http://localhost:3000/amministrazione/personale-amministrativo/gianluca-luchetti/@breadcrumbs',
    },
    contextnavigation: {
      '@id':
        'http://localhost:3000/amministrazione/personale-amministrativo/gianluca-luchetti/@contextnavigation',
    },
    navigation: {
      '@id':
        'http://localhost:3000/amministrazione/personale-amministrativo/gianluca-luchetti/@navigation',
    },
    subsite: {},
    translations: {
      '@id':
        'http://localhost:3000/amministrazione/personale-amministrativo/gianluca-luchetti/@translations',
    },
    types: {
      '@id':
        'http://localhost:3000/amministrazione/personale-amministrativo/gianluca-luchetti/@types',
    },
    workflow: {
      '@id':
        'http://localhost:3000/amministrazione/personale-amministrativo/gianluca-luchetti/@workflow',
    },
  },
  '@id':
    'http://localhost:3000/amministrazione/personale-amministrativo/gianluca-luchetti',
  '@type': 'Persona',
  UID: '7c44aadc618442dda119259aabbd634a',
  contact_info: [
    {
      '@id':
        'http://localhost:3000/amministrazione/enti-e-fondazioni/arciconfraternita-del-gonfalone-sotto-linvocazione-di-santefisio-martire',
      '@type': 'PuntoDiContatto',
      description: '',
      design_italia_meta_type: 'Punto di Contatto',
      effective: null,
      has_children: false,
      id: 'arciconfraternita-del-gonfalone-sotto-linvocazione-di-santefisio-martire',
      image_field: null,
      image_scales: null,
      review_state: 'private',
      title:
        "Arciconfraternita del Gonfalone sotto l’invocazione di Sant'Efisio martire",
      value_punto_contatto: [
        {
          pdc_type: 'phone',
          pdc_value: '+39 070 668632',
        },
        {
          pdc_type: 'web',
          pdc_value: 'www.festadisantelfisio.com',
        },
        {
          pdc_type: 'email',
          pdc_value: 'arcisantefisio@tiscali.it',
        },
      ],
    },
  ],
  items: [],
  organizzazione_riferimento: [
    {
      '@id':
        'http://localhost:3000/amministrazione/politici/provincia-di-cagliari-1',
      '@type': 'UnitaOrganizzativa',
      address: '',
      circoscrizione: '',
      city: '',
      contact_info: [
        {
          '@id':
            'http://localhost:3000/amministrazione/politici/provincia-di-cagliari',
          '@type': 'PuntoDiContatto',
          description: '',
          design_italia_meta_type: 'Punto di Contatto',
          has_children: false,
          id: 'provincia-di-cagliari',
          image_field: null,
          image_scales: null,
          review_state: 'private',
          title: 'Provincia di Cagliari',
          value_punto_contatto: [
            {
              pdc_type: 'web',
              pdc_value: 'https://cittametropolitanacagliari.it/',
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
      id: 'provincia-di-cagliari-1',
      image_field: null,
      image_scales: null,
      nome_sede: '',
      quartiere: '',
      review_state: 'private',
      street: '',
      title: 'Provincia di Cagliari',
      zip_code: '',
    },
  ],
  title: 'Gianluca Luchetti',
};

const mock_allfields = {
  ...mock_mandatory,
  allow_discussion: false,
  biografia: {
    blocks: {
      '49066162-9327-4aa7-930c-ebc24971bfef': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: 'att33',
              text: 'No escape from reality',
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['49066162-9327-4aa7-930c-ebc24971bfef'],
    },
  },
  changeNote: '',
  competenze: {
    blocks: {
      '353a16e6-e4c0-4305-a19d-2638b720881a': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: '6923e',
              text: 'Is this just fantasy?',
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['353a16e6-e4c0-4305-a19d-2638b720881a'],
    },
  },
  contributors: [],
  created: '2023-01-26T14:28:09+00:00',
  creators: ['admin'],
  curriculum_vitae: {
    'content-type': 'application/pdf',
    download:
      'http://localhost:3000/amministrazione/personale-amministrativo/gianluca-luchetti/@@download/curriculum_vitae',
    filename: 'doc-prova.pdf',
    size: 781,
  },
  deleghe: {
    blocks: {
      '792eac6b-5110-4878-9c11-31ef3de20c45': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: '5hop7',
              text: 'Caught in a landside',
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['792eac6b-5110-4878-9c11-31ef3de20c45'],
    },
  },
  description: 'Is this the real life?',
  design_italia_meta_type: 'Persona pubblica',
  effective: null,
  exclude_from_nav: false,
  expires: null,
  foto_persona: {
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
  id: 'gianluca-luchetti',
  incarichi_persona: [
    {
      '@id':
        'http://localhost:3000/amministrazione/personale-amministrativo/gianluca-luchetti/incarichi/incaricone',
      '@type': 'Incarico',
      atto_di_nomina:
        'http://localhost:3000/amministrazione/personale-amministrativo/gabriele-bianchi/incarichi/incarico-di-gabriele-bianchi/atto-nomina',
      compensi: {
        blocks: {},
        blocks_layout: {
          items: [],
        },
      },
      data_inizio_incarico: '2023-01-01',
      description: '',
      design_italia_meta_type: 'Incarico',
      effective: null,
      has_children: true,
      id: 'incaricone',
      image_field: null,
      image_scales: null,
      review_state: 'private',
      tipologia_incarico: {
        title: 'Politico',
        token: 'politico',
      },
      title: 'Incaricone',
    },
  ],
  is_folderish: true,
  items: [
    {
      '@id':
        'http://localhost:3000/amministrazione/personale-amministrativo/gianluca-luchetti/foto-e-attivita-politica',
      '@type': 'Document',
      description: '',
      design_italia_meta_type: 'Pagina',
      has_children: false,
      id: 'foto-e-attivita-politica',
      image_field: '',
      image_scales: null,
      review_state: 'private',
      title: 'Foto e attività politica',
    },
    {
      '@id':
        'http://localhost:3000/amministrazione/personale-amministrativo/gianluca-luchetti/curriculum-vitae',
      '@type': 'Document',
      description: '',
      design_italia_meta_type: 'Pagina',
      has_children: false,
      id: 'curriculum-vitae',
      image_field: '',
      image_scales: null,
      review_state: 'private',
      title: 'Curriculum vitae',
    },
    {
      '@id':
        'http://localhost:3000/amministrazione/personale-amministrativo/gianluca-luchetti/situazione-patrimoniale',
      '@type': 'Document',
      description: '',
      design_italia_meta_type: 'Pagina',
      has_children: false,
      id: 'situazione-patrimoniale',
      image_field: '',
      image_scales: null,
      review_state: 'private',
      title: 'Situazione patrimoniale',
    },
    {
      '@id':
        'http://localhost:3000/amministrazione/personale-amministrativo/gianluca-luchetti/dichiarazione-dei-redditi',
      '@type': 'Document',
      description: '',
      design_italia_meta_type: 'Pagina',
      has_children: false,
      id: 'dichiarazione-dei-redditi',
      image_field: '',
      image_scales: null,
      review_state: 'private',
      title: 'Dichiarazione dei redditi',
    },
    {
      '@id':
        'http://localhost:3000/amministrazione/personale-amministrativo/gianluca-luchetti/spese-elettorali',
      '@type': 'Document',
      description: '',
      design_italia_meta_type: 'Pagina',
      has_children: false,
      id: 'spese-elettorali',
      image_field: '',
      image_scales: null,
      review_state: 'private',
      title: 'Spese elettorali',
    },
    {
      '@id':
        'http://localhost:3000/amministrazione/personale-amministrativo/gianluca-luchetti/variazione-situazione-patrimoniale',
      '@type': 'Document',
      description: '',
      design_italia_meta_type: 'Pagina',
      has_children: false,
      id: 'variazione-situazione-patrimoniale',
      image_field: '',
      image_scales: null,
      review_state: 'private',
      title: 'Variazione situazione patrimoniale',
    },
    {
      '@id':
        'http://localhost:3000/amministrazione/personale-amministrativo/gianluca-luchetti/altre-cariche',
      '@type': 'Document',
      description: '',
      design_italia_meta_type: 'Pagina',
      has_children: false,
      id: 'altre-cariche',
      image_field: '',
      image_scales: null,
      review_state: 'private',
      title: 'Altre cariche',
    },
    {
      '@id':
        'http://localhost:3000/amministrazione/personale-amministrativo/gianluca-luchetti/incarichi',
      '@type': 'Document',
      description: '',
      design_italia_meta_type: 'Pagina',
      has_children: true,
      id: 'incarichi',
      image_field: '',
      image_scales: null,
      review_state: 'private',
      title: 'Incarichi',
    },
  ],
  items_total: 8,
  language: {
    title: 'Italiano',
    token: 'it',
  },
  layout: 'view',
  lock: {
    locked: false,
    stealable: true,
  },
  modified: '2023-01-27T14:45:43+00:00',
  next_item: {},
  opengraph_description: null,
  opengraph_image: null,
  opengraph_title: null,
  parent: {
    '@id': 'http://localhost:3000/amministrazione/personale-amministrativo',
    '@type': 'Document',
    description: '',
    design_italia_meta_type: 'Pagina',
    has_children: true,
    id: 'personale-amministrativo',
    image_field: null,
    image_scales: null,
    review_state: 'private',
    title: 'Personale Amministrativo',
  },
  previous_item: {
    '@id':
      'http://localhost:3000/amministrazione/personale-amministrativo/franco-franchini',
    '@type': 'Persona',
    description: '',
    title: 'Franco Franchini',
  },
  relatedItems: [
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
      effective: null,
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
  ],
  related_news: [],
  responsabile_di: [
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
  ],
  subjects: [],
  ulteriori_informazioni: {
    blocks: {
      'f11ecf5a-7248-49d5-95d8-970c05577860': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: '71kmg',
              text: 'Open your eyes',
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['f11ecf5a-7248-49d5-95d8-970c05577860'],
    },
  },
  version: 'current',
  versioning_enabled: true,
  working_copy: null,
  working_copy_of: null,
};

// const mock_allfields_and_fine_rapporto = {
//   ...mock_allfields,
//   // data_conclusione_incarico: '2020-03-13',
// };

const store = mockStore({
  intl: {
    locale: 'en',
    messages: {},
  },
  content: {
    subrequests: {
      '/amministrazione/politici/provincia-di-cagliari-1_office': {
        loading: false,
        loaded: true,
        error: null,
        data: {
          '@components': {
            actions: {
              '@id':
                'http://localhost:3000/amministrazione/politici/provincia-di-cagliari-1/@actions',
            },
            aliases: {
              '@id':
                'http://localhost:3000/amministrazione/politici/provincia-di-cagliari-1/@aliases',
            },
            breadcrumbs: {
              '@id':
                'http://localhost:3000/amministrazione/politici/provincia-di-cagliari-1/@breadcrumbs',
            },
            contextnavigation: {
              '@id':
                'http://localhost:3000/amministrazione/politici/provincia-di-cagliari-1/@contextnavigation',
            },
            navigation: {
              '@id':
                'http://localhost:3000/amministrazione/politici/provincia-di-cagliari-1/@navigation',
            },
            subsite: {},
            translations: {
              '@id':
                'http://localhost:3000/amministrazione/politici/provincia-di-cagliari-1/@translations',
            },
            types: {
              '@id':
                'http://localhost:3000/amministrazione/politici/provincia-di-cagliari-1/@types',
            },
            workflow: {
              '@id':
                'http://localhost:3000/amministrazione/politici/provincia-di-cagliari-1/@workflow',
            },
          },
          '@id':
            'http://localhost:3000/amministrazione/politici/provincia-di-cagliari-1',
          '@type': 'UnitaOrganizzativa',
          UID: '8e5816f3af494716bb909ab1dd42761f',
          allow_discussion: false,
          assessore_riferimento: [],
          changeNote: '',
          competenze: {
            blocks: {},
            blocks_layout: {
              items: [],
            },
          },
          contact_info: [
            {
              '@id':
                'http://localhost:3000/amministrazione/politici/provincia-di-cagliari',
              '@type': 'PuntoDiContatto',
              description: '',
              design_italia_meta_type: 'Punto di Contatto',
              effective: null,
              has_children: false,
              id: 'provincia-di-cagliari',
              image_field: null,
              image_scales: null,
              review_state: 'private',
              title: 'Provincia di Cagliari',
              value_punto_contatto: [
                {
                  pdc_type: 'web',
                  pdc_value: 'https://cittametropolitanacagliari.it/',
                },
              ],
            },
          ],
          contributors: [],
          correlato_in_evidenza: [],
          created: '2023-01-04T13:48:28+00:00',
          creators: ['admin'],
          description: '',
          design_italia_meta_type: 'Unita Organizzativa',
          documenti_pubblici: [],
          effective: null,
          exclude_from_nav: false,
          expires: null,
          id: 'provincia-di-cagliari-1',
          image: null,
          image_caption: null,
          is_folderish: true,
          items: [
            {
              '@id':
                'http://localhost:3000/amministrazione/politici/provincia-di-cagliari-1/allegati',
              '@type': 'Document',
              description: '',
              design_italia_meta_type: 'Pagina',
              has_children: false,
              id: 'allegati',
              image_field: '',
              image_scales: null,
              review_state: 'private',
              title: 'Allegati',
              url: '/amministrazione/politici/provincia-di-cagliari-1/allegati',
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
              'http://localhost:3000/amministrazione/politici/sogaer-aeroporto-di-cagliari',
            '@type': 'PuntoDiContatto',
            description: '',
            title: 'Sogaer - Aeroporto di Cagliari',
          },
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
            '@id': 'http://localhost:3000/amministrazione/politici',
            '@type': 'Document',
            description: '',
            design_italia_meta_type: 'Pagina',
            has_children: true,
            id: 'politici',
            image_field: null,
            image_scales: null,
            review_state: 'private',
            title: 'Politici',
          },
          persone_struttura: [],
          prestazioni: [],
          preview_caption: null,
          preview_image: null,
          previous_item: {
            '@id':
              'http://localhost:3000/amministrazione/politici/provincia-di-cagliari',
            '@type': 'PuntoDiContatto',
            description: '',
            title: 'Provincia di Cagliari',
          },
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
          subjects: [],
          tassonomia_argomenti: [],
          tipologia_organizzazione: null,
          title: 'Provincia di Cagliari',
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
      '/amministrazione/enti-e-fondazioni/arciconfraternita-del-gonfalone-sotto-linvocazione-di-santefisio-martire':
        {
          loading: false,
          loaded: true,
          error: null,
          data: {
            '@components': {
              actions: {
                '@id':
                  'http://localhost:3000/amministrazione/enti-e-fondazioni/arciconfraternita-del-gonfalone-sotto-linvocazione-di-santefisio-martire/@actions',
              },
              aliases: {
                '@id':
                  'http://localhost:3000/amministrazione/enti-e-fondazioni/arciconfraternita-del-gonfalone-sotto-linvocazione-di-santefisio-martire/@aliases',
              },
              breadcrumbs: {
                '@id':
                  'http://localhost:3000/amministrazione/enti-e-fondazioni/arciconfraternita-del-gonfalone-sotto-linvocazione-di-santefisio-martire/@breadcrumbs',
              },
              contextnavigation: {
                '@id':
                  'http://localhost:3000/amministrazione/enti-e-fondazioni/arciconfraternita-del-gonfalone-sotto-linvocazione-di-santefisio-martire/@contextnavigation',
              },
              navigation: {
                '@id':
                  'http://localhost:3000/amministrazione/enti-e-fondazioni/arciconfraternita-del-gonfalone-sotto-linvocazione-di-santefisio-martire/@navigation',
              },
              subsite: {},
              translations: {
                '@id':
                  'http://localhost:3000/amministrazione/enti-e-fondazioni/arciconfraternita-del-gonfalone-sotto-linvocazione-di-santefisio-martire/@translations',
              },
              types: {
                '@id':
                  'http://localhost:3000/amministrazione/enti-e-fondazioni/arciconfraternita-del-gonfalone-sotto-linvocazione-di-santefisio-martire/@types',
              },
              workflow: {
                '@id':
                  'http://localhost:3000/amministrazione/enti-e-fondazioni/arciconfraternita-del-gonfalone-sotto-linvocazione-di-santefisio-martire/@workflow',
              },
            },
            '@id':
              'http://localhost:3000/amministrazione/enti-e-fondazioni/arciconfraternita-del-gonfalone-sotto-linvocazione-di-santefisio-martire',
            '@type': 'PuntoDiContatto',
            UID: '148e587018dc453aaefa9d04895b18a4',
            allow_discussion: false,
            changeNote: '',
            contributors: [],
            created: '2023-01-04T13:22:45+00:00',
            creators: ['admin'],
            description: '',
            design_italia_meta_type: 'Punto di Contatto',
            effective: null,
            exclude_from_nav: false,
            expires: null,
            id: 'arciconfraternita-del-gonfalone-sotto-linvocazione-di-santefisio-martire',
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
            modified: '2023-01-04T13:22:45+00:00',
            next_item: {
              '@id':
                'http://localhost:3000/amministrazione/enti-e-fondazioni/arciconfraternita-del-gonfalone-sotto-linvocazione-di-santefisio-martire-1',
              '@type': 'PuntoDiContatto',
              description: '',
              title:
                "Arciconfraternita del Gonfalone sotto l’invocazione di Sant'Efisio martire",
            },
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
            persona: [],
            persone_correlate: [
              {
                '@id':
                  'http://localhost:3000/amministrazione/personale-amministrativo/gianluca-luchetti',
                '@type': 'Persona',
                description: 'Is this the real life?',
                design_italia_meta_type: 'Persona pubblica',
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
            previous_item: {},
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
                  'http://localhost:3000/amministrazione/enti-e-fondazioni/copy_of_arciconfraternita-del-gonfalone-sotto-linvocazione-di-santefisio-martire',
                '@type': 'UnitaOrganizzativa',
                address: '',
                circoscrizione: '',
                city: '',
                contact_info: [
                  {
                    '@id':
                      'http://localhost:3000/amministrazione/enti-e-fondazioni/arciconfraternita-del-gonfalone-sotto-linvocazione-di-santefisio-martire',
                    '@type': 'PuntoDiContatto',
                    description: '',
                    design_italia_meta_type: 'Punto di Contatto',
                    has_children: false,
                    id: 'arciconfraternita-del-gonfalone-sotto-linvocazione-di-santefisio-martire',
                    image_field: null,
                    image_scales: null,
                    review_state: 'private',
                    title:
                      "Arciconfraternita del Gonfalone sotto l’invocazione di Sant'Efisio martire",
                    value_punto_contatto: [
                      {
                        pdc_type: 'phone',
                        pdc_value: '+39 070 668632',
                      },
                      {
                        pdc_type: 'web',
                        pdc_value: 'www.festadisantelfisio.com',
                      },
                      {
                        pdc_type: 'email',
                        pdc_value: 'arcisantefisio@tiscali.it',
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
                id: 'copy_of_arciconfraternita-del-gonfalone-sotto-linvocazione-di-santefisio-martire',
                image_field: null,
                image_scales: null,
                nome_sede: '',
                quartiere: '',
                review_state: 'private',
                street: "Via Sant'Efisio, 14",
                title:
                  "Arciconfraternita del Gonfalone sotto l’invocazione di Sant'Efisio martire",
                zip_code: '09124',
              },
            ],
            subjects: [],
            title:
              "Arciconfraternita del Gonfalone sotto l’invocazione di Sant'Efisio martire",
            value_punto_contatto: [
              {
                pdc_type: 'phone',
                pdc_value: '+39 070 668632',
              },
              {
                pdc_type: 'web',
                pdc_value: 'www.festadisantelfisio.com',
              },
              {
                pdc_type: 'email',
                pdc_value: 'arcisantefisio@tiscali.it',
              },
            ],
            version: 'current',
            versioning_enabled: true,
            working_copy: null,
            working_copy_of: null,
          },
        },
      'generic_card_/amministrazione/uffici/gestione-impianti-sportivi': {
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
          competenze: {
            blocks: {
              'd1cb20b4-1adb-4475-9ac5-2aa3c01679be': {
                '@type': 'text',
                text: {
                  blocks: [
                    {
                      data: {},
                      depth: 0,
                      entityRanges: [],
                      inlineStyleRanges: [],
                      key: '9n2eu',
                      text: 'Prova',
                      type: 'unstyled',
                    },
                  ],
                  entityMap: {},
                },
              },
            },
            blocks_layout: {
              items: ['d1cb20b4-1adb-4475-9ac5-2aa3c01679be'],
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
          created: '2023-01-03T15:25:37+00:00',
          creators: ['admin'],
          description: 'Prova prova prova',
          design_italia_meta_type: 'Unita Organizzativa',
          documenti_pubblici: [],
          effective: null,
          exclude_from_nav: false,
          expires: null,
          id: 'gestione-impianti-sportivi',
          image: {
            'content-type': 'image/png',
            download:
              'http://localhost:3000/amministrazione/uffici/gestione-impianti-sportivi/@@images/image-512-99965ec85fa52204fe8be3b2f00c8717.png',
            filename: 'dog.png',
            height: 512,
            scales: {
              gallery: {
                download:
                  'http://localhost:3000/amministrazione/uffici/gestione-impianti-sportivi/@@images/image-250-a9168945d0aca017c77692440f49e61e.png',
                height: 250,
                width: 250,
              },
              great: {
                download:
                  'http://localhost:3000/amministrazione/uffici/gestione-impianti-sportivi/@@images/image-1200-bfa8b45c7e30562f6825de53b0d60c57.png',
                height: 512,
                width: 512,
              },
              huge: {
                download:
                  'http://localhost:3000/amministrazione/uffici/gestione-impianti-sportivi/@@images/image-1600-f67fbddbd9e187a209745dbfc974c37f.png',
                height: 512,
                width: 512,
              },
              icon: {
                download:
                  'http://localhost:3000/amministrazione/uffici/gestione-impianti-sportivi/@@images/image-32-7bd447e456aa302973847c0a063f3847.png',
                height: 32,
                width: 32,
              },
              large: {
                download:
                  'http://localhost:3000/amministrazione/uffici/gestione-impianti-sportivi/@@images/image-800-e2da1cd0a10455eb0b2203582da938cd.png',
                height: 512,
                width: 512,
              },
              larger: {
                download:
                  'http://localhost:3000/amministrazione/uffici/gestione-impianti-sportivi/@@images/image-1000-69da7ca9bcc4385ed39a0b5e78fbf40c.png',
                height: 512,
                width: 512,
              },
              listing: {
                download:
                  'http://localhost:3000/amministrazione/uffici/gestione-impianti-sportivi/@@images/image-16-46a3f0b4d4d76aad42135f2dae20c956.png',
                height: 16,
                width: 16,
              },
              midi: {
                download:
                  'http://localhost:3000/amministrazione/uffici/gestione-impianti-sportivi/@@images/image-300-fe8fb60729db8bc3ee334d03ffbf0fd6.png',
                height: 300,
                width: 300,
              },
              mini: {
                download:
                  'http://localhost:3000/amministrazione/uffici/gestione-impianti-sportivi/@@images/image-200-15a29c3c1648c3b539c41d9fbf6072f4.png',
                height: 200,
                width: 200,
              },
              preview: {
                download:
                  'http://localhost:3000/amministrazione/uffici/gestione-impianti-sportivi/@@images/image-400-2eaff701003563295c39cd86a8ee78c6.png',
                height: 400,
                width: 400,
              },
              teaser: {
                download:
                  'http://localhost:3000/amministrazione/uffici/gestione-impianti-sportivi/@@images/image-600-d4d62ed2063a6c18f099244107d96a46.png',
                height: 512,
                width: 512,
              },
              thumb: {
                download:
                  'http://localhost:3000/amministrazione/uffici/gestione-impianti-sportivi/@@images/image-128-bcf4f7e794bfc9be77bccdc222ff3a7e.png',
                height: 128,
                width: 128,
              },
              tile: {
                download:
                  'http://localhost:3000/amministrazione/uffici/gestione-impianti-sportivi/@@images/image-64-5095cfc75ce410147ca7a76ffbac6103.png',
                height: 64,
                width: 64,
              },
            },
            size: 13663,
            width: 512,
          },
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
          modified: '2023-03-13T11:09:04+00:00',
          next_item: {
            '@id':
              'http://localhost:3000/amministrazione/uffici/giunta-e-consiglio',
            '@type': 'UnitaOrganizzativa',
            description: 'Pierced through the heart but never killed',
            title: 'Giunta e consiglio',
          },
          opengraph_description: null,
          opengraph_image: null,
          opengraph_title: null,
          orario_pubblico: {
            blocks: {
              '006b939d-cb64-4e40-b585-a352c666847c': {
                '@type': 'text',
              },
            },
            blocks_layout: {
              items: ['006b939d-cb64-4e40-b585-a352c666847c'],
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
          prestazioni: [],
          preview_caption: null,
          preview_image: {
            'content-type': 'image/webp',
            download:
              'http://localhost:3000/amministrazione/uffici/gestione-impianti-sportivi/@@images/preview_image-2000-8d41420b3ab8b610e4c971cc1238dfde.webp',
            filename:
              'business-teamwork-join-hands-together-business-teamwork-concept_1150-1804.webp',
            height: 1333,
            scales: {
              gallery: {
                download:
                  'http://localhost:3000/amministrazione/uffici/gestione-impianti-sportivi/@@images/preview_image-250-0e293da67773f3da1b36756c24359bda.webp',
                height: 166,
                width: 250,
              },
              great: {
                download:
                  'http://localhost:3000/amministrazione/uffici/gestione-impianti-sportivi/@@images/preview_image-1200-98acfa6e3a902760194acc721bf5d274.webp',
                height: 799,
                width: 1200,
              },
              huge: {
                download:
                  'http://localhost:3000/amministrazione/uffici/gestione-impianti-sportivi/@@images/preview_image-1600-05775c76a8c5db71cc3909d6ad6a5979.jpeg',
                height: 1066,
                width: 1600,
              },
              icon: {
                download:
                  'http://localhost:3000/amministrazione/uffici/gestione-impianti-sportivi/@@images/preview_image-32-3a1845f6305db276ef9cb6c210075406.webp',
                height: 21,
                width: 32,
              },
              large: {
                download:
                  'http://localhost:3000/amministrazione/uffici/gestione-impianti-sportivi/@@images/preview_image-800-d7ad3dc7d42a31ed92708911435e6469.jpeg',
                height: 533,
                width: 800,
              },
              larger: {
                download:
                  'http://localhost:3000/amministrazione/uffici/gestione-impianti-sportivi/@@images/preview_image-1000-9a2b0b07da71f6bdb688b3ef0699f427.webp',
                height: 666,
                width: 1000,
              },
              listing: {
                download:
                  'http://localhost:3000/amministrazione/uffici/gestione-impianti-sportivi/@@images/preview_image-16-1bd393efb2d5407b2afe614af59991b9.jpeg',
                height: 10,
                width: 16,
              },
              midi: {
                download:
                  'http://localhost:3000/amministrazione/uffici/gestione-impianti-sportivi/@@images/preview_image-300-03127ee5a67386dc242487a41b9b939d.webp',
                height: 199,
                width: 300,
              },
              mini: {
                download:
                  'http://localhost:3000/amministrazione/uffici/gestione-impianti-sportivi/@@images/preview_image-200-60f0a7f3d859c64e0fa5c99ec14e745d.webp',
                height: 133,
                width: 200,
              },
              preview: {
                download:
                  'http://localhost:3000/amministrazione/uffici/gestione-impianti-sportivi/@@images/preview_image-400-0ebbee631766381ce44378fff9b5bef1.webp',
                height: 266,
                width: 400,
              },
              teaser: {
                download:
                  'http://localhost:3000/amministrazione/uffici/gestione-impianti-sportivi/@@images/preview_image-600-e83bd8e8768e86adf747188b9aa4912b.webp',
                height: 399,
                width: 600,
              },
              thumb: {
                download:
                  'http://localhost:3000/amministrazione/uffici/gestione-impianti-sportivi/@@images/preview_image-128-786da85990340481344f2b3701cd4a97.webp',
                height: 85,
                width: 128,
              },
              tile: {
                download:
                  'http://localhost:3000/amministrazione/uffici/gestione-impianti-sportivi/@@images/preview_image-64-f39aa58a112e2ed3548b72f4d600ab89.webp',
                height: 42,
                width: 64,
              },
            },
            size: 202972,
            width: 2000,
          },
          previous_item: {},
          relatedItems: [],
          related_news: [],
          responsabile: [
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
          review_state: 'private',
          rights: '',
          sede: [
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
          title: 'Gestione impianti sportivi',
          ulteriori_informazioni: {
            blocks: {
              'e4d319e0-0b67-449e-b625-1bcfbb267117': {
                '@type': 'text',
              },
            },
            blocks_layout: {
              items: ['e4d319e0-0b67-449e-b625-1bcfbb267117'],
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
    },
  },
  search: {
    subrequests: {
      'foto-e-attivita-politica': {
        '@id':
          'http://loremipsum.it/aguzzoli-claudia-dana/foto-e-attivita-politica/@search?path.depth=1&metadata_fields=_all&fullobjects=1',
        items: [
          {
            '@id':
              'http://loremipsum.it/aguzzoli-claudia-dana/foto-e-attivita-politica/download-5.jpeg',
            '@type': 'Image',
            image: {
              scales: {
                gallery: {
                  download:
                    'http://loremipsum.it/aguzzoli-claudia-dana/foto-e-attivita-politica/download-5.jpeg/@@images/5f9e35e1-405e-43d4-96b1-0fd3113b3fa7.jpeg',
                  height: 175,
                  width: 250,
                },
              },
              title: 'download (5).jpeg',
            },
          },
        ],
      },
      compensi: {
        items: [
          {
            '@id':
              'http://loremipsum.it/aguzzoli-claudia-dana/compensi/file1.pdf',
            '@type': 'File',
            title: 'File1.pdf',
          },
        ],
      },
      'importi-di-viaggio-e-o-servizi': {
        items: [
          {
            '@id':
              'http://loremipsum.it/aguzzoli-claudia-dana/importi-di-viaggio-e-o-servizi/file1.pdf',
            '@type': 'File',
            title: 'File1.pdf',
          },
        ],
      },
      'altre-cariche': {
        items: [
          {
            '@id':
              'http://loremipsum.it/aguzzoli-claudia-dana/altre-cariche/file1.pdf',
            '@type': 'File',
            title: 'File1.pdf',
          },
        ],
      },
      'situazione-patrimoniale': {
        items: [
          {
            '@id':
              'http://loremipsum.it/aguzzoli-claudia-dana/situazione-patrimoniale/file1.pdf',
            '@type': 'File',
            title: 'File1.pdf',
          },
        ],
      },
      'dichiarazione-dei-redditi': {
        items: [
          {
            '@id':
              'http://loremipsum.it/aguzzoli-claudia-dana/dichiarazione-dei-redditi/file1.pdf',
            '@type': 'File',
            title: 'File1.pdf',
          },
        ],
      },
      'spese-elettorali': {
        items: [
          {
            '@id':
              'http://loremipsum.it/aguzzoli-claudia-dana/spese-elettorali/file1.pdf',
            '@type': 'File',
            title: 'File1.pdf',
          },
        ],
      },
      'valutazione-situazione-patrimoniale': {
        items: [
          {
            '@id':
              'http://loremipsum.it/aguzzoli-claudia-dana/valutazione-situazione-patrimoniale/file1.pdf',
            '@type': 'File',
            title: 'File1.pdf',
          },
        ],
      },
    },
  },
});

test('expect to have all mandatory fields in page', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <PersonaView content={mock_mandatory} />
      </MemoryRouter>
    </Provider>,
  );

  // title
  expect(
    screen.getByRole('heading', { name: /Gianluca Luchetti/i }),
  ).toBeInTheDocument();

  // punto di contatto
  expect(
    screen.getByRole('heading', { name: /Contatti/i }),
  ).toBeInTheDocument();

  const cardContatti = document.querySelector('#contacts .card');
  expect(cardContatti).toBeInTheDocument();
});

test('expect to have all non-mandatory fields in page', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <PersonaView content={mock_allfields} />
      </MemoryRouter>
    </Provider>,
  );

  // descrizione
  expect(screen.getByText(/Is this the real life?/i)).toBeInTheDocument();

  //immagine di testata
  expect(screen.getByRole('img', { name: '' })).toBeInTheDocument();

  //incarico
  expect(screen.getByRole('heading', { name: /Incarico/ })).toBeInTheDocument();
  expect(screen.getByText(/Incaricone/i)).toBeInTheDocument();
  expect(screen.getByText(/Atto di nomina/i)).toBeInTheDocument();

  // tipo di incarico
  expect(
    screen.getByRole('heading', { name: /Tipo di incarico/ }),
  ).toBeInTheDocument();
  expect(screen.getByText(/Politico/i)).toBeInTheDocument();

  // data di insediamento
  expect(
    screen.getByRole('heading', { name: /Data di insediamento/ }),
  ).toBeInTheDocument();
  expect(screen.getByText(/01 January 2023/i)).toBeInTheDocument();

  // competenze
  expect(
    screen.getByRole('heading', { name: /Competenze/i }),
  ).toBeInTheDocument();
  expect(screen.getByText(/Is this just fantasy?/i)).toBeInTheDocument();

  // deleghe
  expect(screen.getByRole('heading', { name: /Deleghe/i })).toBeInTheDocument();
  expect(screen.getByText(/Caught in a landside/i)).toBeInTheDocument();

  // deleghe
  expect(
    screen.getByRole('heading', { name: /Biografia/i }),
  ).toBeInTheDocument();
  expect(screen.getByText(/No escape from reality/i)).toBeInTheDocument();

  //cv
  expect(
    screen.getByRole('heading', { name: /Curriculum vitae/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: /doc-prova.pdf/i }),
  ).toBeInTheDocument();

  //ulteriori informazioni
  expect(screen.getByText(/Open your eyes/i)).toBeInTheDocument();
});

// test('Check parts loaded from child folders', async () => {
//   render(
//     <Provider store={store}>
//       <MemoryRouter>
//         <PersonaView content={mock_allfields} />
//       </MemoryRouter>
//     </Provider>,
//   );
//   // Gallery
//   // const gallery = await waitForElement(() =>
//   //   getByText(/Galleria di immagini/i),
//   // );
//   // expect(gallery).toBeInTheDocument();

//   // compensi
//   // expect(await screen.findByText('Compensi')).toBeInTheDocument();

//   // importi_di_viaggio_e_o_servizi
//   expect(
//     await screen.findByText('Importi di viaggio e/o servizi'),
//   ).toBeInTheDocument();

//   // altre-cariche
//   expect(await screen.findByText('Altre cariche')).toBeInTheDocument();
// });

// situazione-patrimoniale
// const situazione_patrimoniale = await waitForElement(() =>
//   getByText(/Situazione patrimoniale/),
// );
// expect(situazione_patrimoniale).toBeInTheDocument();

// dichiarazione-dei-redditi
// const dichiarazione_dei_redditi = await waitForElement(() =>
//   getByText(/Dichiarazione dei redditi/i),
// );
// expect(dichiarazione_dei_redditi).toBeInTheDocument();

// spese-elettorali
// const spese_elettorali = await waitForElement(() =>
//   getByText(/Spese elettorali/i),
// );
// expect(spese_elettorali).toBeInTheDocument();

// situazione-patrimoniale
// const valutazione_situazione_patrimoniale = await waitForElement(() =>
//   getByText(/Valutazione situazione patrimoniale/i),
// );
// expect(valutazione_situazione_patrimoniale).toBeInTheDocument();
// });

test('todo', () => {
  expect(store).toBeDefined();
  expect(true).toBe(true);
});
