import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BandoView from '../BandoView/BandoView';
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
    'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-ironman',
  '@type': 'Bando',
  UID: 'ff82688a5a5f4484a8d2eec481e10c7c',
  bando_state: ['inProgress', 'In progress'],
  tipologia_bando: {
    title: 'Acquisizione beni e servizi',
    token: 'beni_servizi',
  },
  title: 'Bando per diventare Ironman',
};

const mock_allfields = {
  ...mock_mandatory,
  '@components': {
    actions: {
      '@id':
        'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-ironman/@actions',
    },
    aliases: {
      '@id':
        'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-ironman/@aliases',
    },
    breadcrumbs: {
      '@id':
        'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-ironman/@breadcrumbs',
    },
    contextnavigation: {
      '@id':
        'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-ironman/@contextnavigation',
    },
    navigation: {
      '@id':
        'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-ironman/@navigation',
    },
    subsite: {},
    translations: {
      '@id':
        'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-ironman/@translations',
    },
    types: {
      '@id':
        'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-ironman/@types',
    },
    workflow: {
      '@id':
        'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-ironman/@workflow',
    },
  },
  '@id':
    'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-ironman',
  '@type': 'Bando',
  UID: 'ff82688a5a5f4484a8d2eec481e10c7c',
  allow_discussion: false,
  apertura_bando: '2023-01-01T09:00:00',
  approfondimento: [],
  area_responsabile: [
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
  bando_state: ['inProgress', 'In progress'],
  changeNote: '',
  chiusura_procedimento_bando: '2023-03-15',
  contributors: [],
  correlato_in_evidenza: [
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
  created: '2023-01-27T15:17:10+00:00',
  creators: ['admin'],
  description: 'Is this the real life?',
  design_italia_meta_type: 'Bando',
  destinatari: [
    {
      title: 'Cittadini',
      token: 'Cittadini',
    },
  ],
  effective: null,
  ente_bando: ['Marvel'],
  exclude_from_nav: false,
  expires: null,
  id: 'bando-per-diventare-ironman',
  is_folderish: true,
  items: [
    {
      '@id':
        'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-ironman/documenti',
      '@type': 'Bando Folder Deepening',
      description: '',
      design_italia_meta_type: 'Cartella Approfondimento',
      has_children: false,
      id: 'documenti',
      image_field: '',
      image_scales: null,
      review_state: 'private',
      title: 'Documenti',
    },
    {
      '@id':
        'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-ironman/comunicazioni',
      '@type': 'Bando Folder Deepening',
      description: '',
      design_italia_meta_type: 'Cartella Approfondimento',
      has_children: false,
      id: 'comunicazioni',
      image_field: '',
      image_scales: null,
      review_state: 'private',
      title: 'Comunicazioni',
    },
    {
      '@id':
        'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-ironman/esiti',
      '@type': 'Bando Folder Deepening',
      description: '',
      design_italia_meta_type: 'Cartella Approfondimento',
      has_children: false,
      id: 'esiti',
      image_field: '',
      image_scales: null,
      review_state: 'private',
      title: 'Esiti',
    },
  ],
  items_total: 3,
  language: {
    title: 'Italiano',
    token: 'it',
  },
  layout: 'view',
  lock: {
    locked: false,
    stealable: true,
  },
  modified: '2023-01-30T11:07:30+00:00',
  next_item: {
    '@id':
      'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-spiderman',
    '@type': 'Bando',
    description: '',
    title: 'Bando per diventare Spiderman',
  },
  opengraph_description: null,
  opengraph_image: null,
  opengraph_title: null,
  parent: {
    '@id': 'http://localhost:3000/documenti-e-dati/bandi',
    '@type': 'Document',
    description: '',
    design_italia_meta_type: 'Pagina',
    has_children: true,
    id: 'bandi',
    image_field: null,
    image_scales: null,
    review_state: 'private',
    title: 'Bandi',
  },
  preview_caption: 'immagine preview',
  preview_image: {
    'content-type': 'image/jpeg',
    download:
      'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-ironman/@@images/preview_image-6240-fd26b03b3e447160d6fbe18c66b6f65c.jpeg',
    filename: 'woman-having-online-meeting-work.jpg',
    height: 4160,
    scales: {
      gallery: {
        download:
          'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-ironman/@@images/preview_image-250-65852bdbdb6c29e64a6daa0caa689b0c.jpeg',
        height: 166,
        width: 250,
      },
      great: {
        download:
          'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-ironman/@@images/preview_image-1200-b1b7d0ce7d2df16a10e2a479ccbe293d.jpeg',
        height: 800,
        width: 1200,
      },
      huge: {
        download:
          'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-ironman/@@images/preview_image-1600-bdd0c8546bee630402d1834b547ae89f.jpeg',
        height: 1066,
        width: 1600,
      },
      icon: {
        download:
          'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-ironman/@@images/preview_image-32-727ad120bb64e874c84a87f96ab37cd7.jpeg',
        height: 21,
        width: 32,
      },
      large: {
        download:
          'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-ironman/@@images/preview_image-800-8b15a4b0b0509bda828431ff5d185661.jpeg',
        height: 533,
        width: 800,
      },
      larger: {
        download:
          'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-ironman/@@images/preview_image-1000-870b8896876edc5e4062b41df533c945.jpeg',
        height: 666,
        width: 1000,
      },
      listing: {
        download:
          'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-ironman/@@images/preview_image-16-57854085b918473ea28dffa7e67f01a5.jpeg',
        height: 10,
        width: 16,
      },
      midi: {
        download:
          'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-ironman/@@images/preview_image-300-6e58bec63227d91becf1fe9b9bf8ebec.jpeg',
        height: 200,
        width: 300,
      },
      mini: {
        download:
          'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-ironman/@@images/preview_image-200-16b058f634abefc39274d2ed5ae3d447.jpeg',
        height: 133,
        width: 200,
      },
      preview: {
        download:
          'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-ironman/@@images/preview_image-400-18f1c7ad193e51291ae8d5d64ac8be77.jpeg',
        height: 266,
        width: 400,
      },
      teaser: {
        download:
          'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-ironman/@@images/preview_image-600-6446e66e69e4752d92782865de498b23.jpeg',
        height: 400,
        width: 600,
      },
      thumb: {
        download:
          'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-ironman/@@images/preview_image-128-75768755b675beedff8fbd2226cce5f4.jpeg',
        height: 85,
        width: 128,
      },
      tile: {
        download:
          'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-ironman/@@images/preview_image-64-5b765bf5245c10a53d64498ee8fd8f46.jpeg',
        height: 42,
        width: 64,
      },
    },
    size: 1195679,
    width: 6240,
  },
  previous_item: {},
  relatedItems: [
    {
      '@id': 'http://localhost:3000/novita/notizie/osservatorio-sul-turismo',
      '@type': 'News Item',
      description:
        'Donec in consequat nunc. Duis semper fermentum lacus, ac condimentum justo auctor a. Nam erat erat, porta vel pharetra in, ullamcorper vel turpis.',
      design_italia_meta_type: null,
      effective: '2019-12-03T11:09:00+00:00',
      has_children: true,
      id: 'osservatorio-sul-turismo',
      image_field: null,
      image_scales: null,
      review_state: 'private',
      tipologia_notizia: {
        title: null,
        token: 'Notizia',
      },
      title: 'Osservatorio sul turismo',
    },
  ],
  review_state: 'private',
  riferimenti_bando: {
    blocks: {
      'cb1ede9e-0f81-46c2-a5e2-cd83f69357d4': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: '59c66',
              text: 'Caught in a landside',
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['cb1ede9e-0f81-46c2-a5e2-cd83f69357d4'],
    },
  },
  rights: '',
  scadenza_bando: '2023-02-28T10:07:03+00:00',
  scadenza_domande_bando: '2023-01-31T10:00:44',
  seo_canonical_url: null,
  seo_description: null,
  seo_noindex: null,
  seo_title: null,
  subjects: [],
  table_of_contents: null,
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
  text: {
    blocks: {
      '92c8c380-c65d-4cfa-bb3f-4276124731ae': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: '6onam',
              text: 'Is this just fantasy?',
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['92c8c380-c65d-4cfa-bb3f-4276124731ae'],
    },
  },
  tipologia_bando: {
    title: 'Acquisizione beni e servizi',
    token: 'beni_servizi',
  },
  title: 'Bando per diventare Ironman',
  ufficio_responsabile: [
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
  update_note: 'No escape from reality',
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
      'generic_card_/novita/notizie/osservatorio-sul-turismo': {
        data: null,
        loading: false,
        loaded: false,
        error: {
          original: null,
          response: {
            req: {
              method: 'GET',
              url: 'http://localhost:3000/++api++/novita/notizie/osservatorio-sul-turismo?expand=subsite',
              headers: {
                authorization:
                  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY3ODg0NTk2OSwiZnVsbG5hbWUiOm51bGx9.8AzoIXH8pHTF9AcEOHqn61BSxpcxYiH3qNLzOZNyYmk',
                accept: 'application/json',
              },
            },
            xhr: {},
            text: '{\n  "message": "\'NoneType\' object has no attribute \'startswith\'",\n  "traceback": [\n    "File \\"/app/lib/python3.11/site-packages/ZPublisher/WSGIPublisher.py\\", line 172, in transaction_pubevents",\n    "    yield",\n    "",\n    "  File \\"/app/lib/python3.11/site-packages/ZPublisher/WSGIPublisher.py\\", line 381, in publish_module",\n    "    response = _publish(request, new_mod_info)",\n    "               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^",\n    "",\n    "  File \\"/app/lib/python3.11/site-packages/ZPublisher/WSGIPublisher.py\\", line 276, in publish",\n    "    result = mapply(obj,",\n    "             ^^^^^^^^^^^",\n    "",\n    "  File \\"/app/lib/python3.11/site-packages/ZPublisher/mapply.py\\", line 85, in mapply",\n    "    return debug(object, args, context)",\n    "           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^",\n    "",\n    "  File \\"/app/lib/python3.11/site-packages/ZPublisher/WSGIPublisher.py\\", line 68, in call_object",\n    "    return obj(*args)",\n    "           ^^^^^^^^^^",\n    "",\n    "  File \\"/app/lib/python3.11/site-packages/plone/rest/service.py\\", line 22, in __call__",\n    "    return self.render()",\n    "           ^^^^^^^^^^^^^",\n    "",\n    "  File \\"/app/lib/python3.11/site-packages/plone/restapi/services/__init__.py\\", line 19, in render",\n    "    content = self.reply()",\n    "              ^^^^^^^^^^^^",\n    "",\n    "  File \\"/app/lib/python3.11/site-packages/plone/restapi/services/content/get.py\\", line 16, in reply",\n    "    return serializer(version=self.request.get(\\"version\\"))",\n    "           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^",\n    "",\n    "  File \\"/app/src/design.plone.contenttypes/src/design/plone/contenttypes/restapi/serializers/dxcontent.py\\", line 51, in __call__",\n    "    result = super(SerializeFolderToJson, self).__call__(",\n    "             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^",\n    "",\n    "  File \\"/app/src/design.plone.contenttypes/src/design/plone/contenttypes/patches/baseserializer.py\\", line 61, in design_italia_serialize_folder_to_json_call",\n    "    folder_metadata = super(SerializeFolderToJson, self).__call__(",\n    "                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^",\n    "",\n    "  File \\"/app/src/design.plone.contenttypes/src/design/plone/contenttypes/patches/baseserializer.py\\", line 46, in design_italia_serialize_to_json_call",\n    "    if title.startswith(PATH_SEPARATOR):",\n    "       ^^^^^^^^^^^^^^^^"\n  ],\n  "type": "AttributeError"\n}',
            statusText: 'Internal Server Error',
            statusCode: 500,
            status: 500,
            statusType: 5,
            info: false,
            ok: false,
            redirect: false,
            clientError: false,
            serverError: true,
            error: {
              status: 500,
              method: 'GET',
              url: 'http://localhost:3000/++api++/novita/notizie/osservatorio-sul-turismo?expand=subsite',
            },
            accepted: false,
            noContent: false,
            badRequest: false,
            unauthorized: false,
            notAcceptable: false,
            forbidden: false,
            notFound: false,
            headers: {
              'cache-control': 'max-age=0, must-revalidate, private',
              connection: 'close',
              'content-length': '2457',
              'content-type': 'application/json',
              date: 'Tue, 14 Mar 2023 14:10:05 GMT',
              expires: 'Sat, 16 Mar 2013 14:10:05 GMT',
              server: 'waitress',
              via: 'waitress',
              'x-cache-operation': 'plone.app.caching.terseCaching',
              'x-cache-rule': 'plone.content.dynamic',
              'x-frame-options': 'SAMEORIGIN',
              'x-ids-involved': '#47289573edbc4a5087eea97d01a6c8bc#',
              'x-powered-by': 'Zope (www.zope.dev), Python (www.python.org)',
            },
            header: {
              'cache-control': 'max-age=0, must-revalidate, private',
              connection: 'close',
              'content-length': '2457',
              'content-type': 'application/json',
              date: 'Tue, 14 Mar 2023 14:10:05 GMT',
              expires: 'Sat, 16 Mar 2013 14:10:05 GMT',
              server: 'waitress',
              via: 'waitress',
              'x-cache-operation': 'plone.app.caching.terseCaching',
              'x-cache-rule': 'plone.content.dynamic',
              'x-frame-options': 'SAMEORIGIN',
              'x-ids-involved': '#47289573edbc4a5087eea97d01a6c8bc#',
              'x-powered-by': 'Zope (www.zope.dev), Python (www.python.org)',
            },
            type: 'application/json',
            links: {},
            body: {
              message: "'NoneType' object has no attribute 'startswith'",
              traceback: [
                'File "/app/lib/python3.11/site-packages/ZPublisher/WSGIPublisher.py", line 172, in transaction_pubevents',
                '    yield',
                '',
                '  File "/app/lib/python3.11/site-packages/ZPublisher/WSGIPublisher.py", line 381, in publish_module',
                '    response = _publish(request, new_mod_info)',
                '               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^',
                '',
                '  File "/app/lib/python3.11/site-packages/ZPublisher/WSGIPublisher.py", line 276, in publish',
                '    result = mapply(obj,',
                '             ^^^^^^^^^^^',
                '',
                '  File "/app/lib/python3.11/site-packages/ZPublisher/mapply.py", line 85, in mapply',
                '    return debug(object, args, context)',
                '           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^',
                '',
                '  File "/app/lib/python3.11/site-packages/ZPublisher/WSGIPublisher.py", line 68, in call_object',
                '    return obj(*args)',
                '           ^^^^^^^^^^',
                '',
                '  File "/app/lib/python3.11/site-packages/plone/rest/service.py", line 22, in __call__',
                '    return self.render()',
                '           ^^^^^^^^^^^^^',
                '',
                '  File "/app/lib/python3.11/site-packages/plone/restapi/services/__init__.py", line 19, in render',
                '    content = self.reply()',
                '              ^^^^^^^^^^^^',
                '',
                '  File "/app/lib/python3.11/site-packages/plone/restapi/services/content/get.py", line 16, in reply',
                '    return serializer(version=self.request.get("version"))',
                '           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^',
                '',
                '  File "/app/src/design.plone.contenttypes/src/design/plone/contenttypes/restapi/serializers/dxcontent.py", line 51, in __call__',
                '    result = super(SerializeFolderToJson, self).__call__(',
                '             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^',
                '',
                '  File "/app/src/design.plone.contenttypes/src/design/plone/contenttypes/patches/baseserializer.py", line 61, in design_italia_serialize_folder_to_json_call',
                '    folder_metadata = super(SerializeFolderToJson, self).__call__(',
                '                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^',
                '',
                '  File "/app/src/design.plone.contenttypes/src/design/plone/contenttypes/patches/baseserializer.py", line 46, in design_italia_serialize_to_json_call',
                '    if title.startswith(PATH_SEPARATOR):',
                '       ^^^^^^^^^^^^^^^^',
              ],
              type: 'AttributeError',
            },
          },
          status: 500,
        },
      },
    },
  },
});

test('renders all mandatory fields in the page', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <BandoView content={mock_mandatory} />
      </MemoryRouter>
    </Provider>,
  );

  //title
  expect(
    screen.getByRole('heading', { name: /Bando per diventare Ironman/i }),
  ).toBeInTheDocument();

  //tipologia del bando
  expect(
    screen.getByRole('heading', { name: /Tipologia del bando/i }),
  ).toBeInTheDocument();
  expect(screen.getByText(/Acquisizione beni e servizi/i)).toBeInTheDocument();

  //stato del bando
  expect(screen.getByText(/Bando in corso/i)).toBeInTheDocument();
});

test('renders all non-mandatory fields in the page', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <BandoView content={mock_allfields} />
      </MemoryRouter>
    </Provider>,
  );

  //descrizione
  expect(
    screen.getByRole('heading', { name: /Descrizione/i }),
  ).toBeInTheDocument();
  expect(screen.getByText(/Is this the real life?/i)).toBeInTheDocument();

  //testo
  expect(screen.getByText(/Is this just fantasy?/i)).toBeInTheDocument();

  //destinatari del bando
  expect(
    screen.getByRole('heading', { name: /Destinatari del bando/i }),
  ).toBeInTheDocument();
  expect(screen.getByText(/Cittadini/i)).toBeInTheDocument();

  //autorità
  expect(
    screen.getByRole('heading', { name: /Ente erogatore/i }),
  ).toBeInTheDocument();
  expect(screen.getByText(/Marvel/i)).toBeInTheDocument();

  // apertura bando --> non appare se non sono compilati sia apertura che termine del bando
  expect(screen.getByText(/Apertura del bando/i)).toBeInTheDocument();

  // termine per la richiesta
  expect(
    screen.getByText(/Termine per le richieste di chiarimenti/i, {
      exact: false,
    }),
  ).toBeInTheDocument();

  //scadenza bando
  expect(
    screen.getByText(/Scadenza dei termini per partecipare al bando/i, {
      exact: false,
    }),
  ).toBeInTheDocument();

  //chiusura procedure
  expect(screen.getByText(/Chiusura del procedimento/i)).toBeInTheDocument();

  //ulteriori informazioni
  expect(screen.getByText(/Caught in a landside/i)).toBeInTheDocument();

  // note di aggiornamento --> compare solo aggiornando bando
  // expect(screen.getByText(/No escape from reality/i)).toBeInTheDocument();

  //area responsabile
  expect(
    screen.getByRole('heading', { name: /Area responsabile/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', {
      name: /Area impiantistica sportiva/i,
      exact: false,
    }),
  ).toBeInTheDocument();

  //ufficio responsabile
  expect(
    screen.getByRole('heading', { name: /Ufficio responsabile/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: /Giunta e consiglio/i }),
  ).toBeInTheDocument();

  //contenuti correlati
  expect(
    screen.getByRole('heading', { name: /Contenuti correlati/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: /Osservatorio sul turismo/i }),
  ).toBeInTheDocument();

  //argomenti
  expect(screen.getAllByRole('link', { name: /Cultura/i })).toBeTruthy();

  //correlati in evidenza
  expect(
    screen.getByText(/Chiusa per ristrutturazione la piscina Minghetti/i),
  ).toBeInTheDocument();
});
