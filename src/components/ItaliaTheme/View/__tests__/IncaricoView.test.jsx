import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IncaricoView from '../IncaricoView/IncaricoView';
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
        'http://localhost:3000/amministrazione/personale-amministrativo/gabriele-bianchi/incarichi/incarico-di-gabriele-bianchi/@actions',
    },
    aliases: {
      '@id':
        'http://localhost:3000/amministrazione/personale-amministrativo/gabriele-bianchi/incarichi/incarico-di-gabriele-bianchi/@aliases',
    },
    breadcrumbs: {
      '@id':
        'http://localhost:3000/amministrazione/personale-amministrativo/gabriele-bianchi/incarichi/incarico-di-gabriele-bianchi/@breadcrumbs',
    },
    contextnavigation: {
      '@id':
        'http://localhost:3000/amministrazione/personale-amministrativo/gabriele-bianchi/incarichi/incarico-di-gabriele-bianchi/@contextnavigation',
    },
    navigation: {
      '@id':
        'http://localhost:3000/amministrazione/personale-amministrativo/gabriele-bianchi/incarichi/incarico-di-gabriele-bianchi/@navigation',
    },
    subsite: {},
    translations: {
      '@id':
        'http://localhost:3000/amministrazione/personale-amministrativo/gabriele-bianchi/incarichi/incarico-di-gabriele-bianchi/@translations',
    },
    types: {
      '@id':
        'http://localhost:3000/amministrazione/personale-amministrativo/gabriele-bianchi/incarichi/incarico-di-gabriele-bianchi/@types',
    },
    workflow: {
      '@id':
        'http://localhost:3000/amministrazione/personale-amministrativo/gabriele-bianchi/incarichi/incarico-di-gabriele-bianchi/@workflow',
    },
  },
  '@id':
    'http://localhost:3000/amministrazione/personale-amministrativo/gabriele-bianchi/incarichi/incarico-di-gabriele-bianchi',
  '@type': 'Incarico',
  UID: 'd66401e19ea94b65825b3b03633c0f63',
  data_inizio_incarico: '2023-02-19',
  items: [],
  tipologia_incarico: {
    title: 'Politico',
    token: 'politico',
  },
  title: 'Incarico di Gabriele Bianchi',
};

const mock_allfields = {
  ...mock_mandatory,
  allow_discussion: false,
  atto_nomina: [
    {
      '@id': 'http://localhost:3000/documenti-e-dati/is-this-the-real-life',
      '@type': 'Documento',
      business_events: [
        {
          title: 'Avvio impresa',
          token: 'avvio_impresa',
        },
      ],
      description: 'Is this just fantasy?',
      design_italia_meta_type: 'Documento',
      effective: '2023-02-17T13:45:57+00:00',
      has_children: true,
      id: 'is-this-the-real-life',
      image_field: null,
      image_scales: null,
      person_life_events: [
        {
          title: 'Iscrizione Scuola/Università e/o richiesta borsa di studio',
          token: 'iscrizione_scuola_universita_richiesta_borsa_di_studio',
        },
      ],
      review_state: 'published',
      tipologia_documenti_albopretorio: {
        title: 'Atto amministrativo␟Decreto␟Decreto del Sindaco',
        token: 'decreto_del_sindaco',
      },
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
    },
  ],
  changeNote: '',
  compensi: {
    blocks: {
      'f943ce1c-cc67-4568-8526-1281f01a9202': {
        '@type': 'slate',
        plaintext: "You don't ever say too much",
        value: [
          {
            children: [
              {
                text: "You don't ever say too much",
              },
            ],
            type: 'p',
          },
        ],
      },
    },
    blocks_layout: {
      items: ['f943ce1c-cc67-4568-8526-1281f01a9202'],
    },
  },
  contributors: [],
  created: '2023-01-19T12:04:41+00:00',
  creators: ['admin'],
  data_conclusione_incarico: '2023-03-31',
  data_insediamento: '2023-03-28',
  description: 'Staring at the ceiling with you',
  design_italia_meta_type: 'Incarico',
  effective: null,
  exclude_from_nav: false,
  expires: null,
  id: 'incarico-di-gabriele-bianchi',
  importi_viaggio_servizio: {
    blocks: {
      '2d2dd70c-3af5-4ff8-816b-46b34ea186b7': {
        '@type': 'slate',
        plaintext: "You don't really read into",
        value: [
          {
            children: [
              {
                text: "You don't really read into",
              },
            ],
            type: 'p',
          },
        ],
      },
    },
    blocks_layout: {
      items: ['2d2dd70c-3af5-4ff8-816b-46b34ea186b7'],
    },
  },
  is_folderish: true,
  items: [
    {
      '@id':
        'http://localhost:3000/amministrazione/personale-amministrativo/gabriele-bianchi/incarichi/incarico-di-gabriele-bianchi/compensi-file',
      '@type': 'Document',
      description: '',
      design_italia_meta_type: 'Pagina',
      has_children: false,
      id: 'compensi-file',
      image_field: '',
      image_scales: null,
      review_state: 'private',
      title: 'Compensi',
    },
    {
      '@id':
        'http://localhost:3000/amministrazione/personale-amministrativo/gabriele-bianchi/incarichi/incarico-di-gabriele-bianchi/importi-di-viaggio-e-o-servizi',
      '@type': 'Document',
      description: '',
      design_italia_meta_type: 'Pagina',
      has_children: false,
      id: 'importi-di-viaggio-e-o-servizi',
      image_field: '',
      image_scales: null,
      review_state: 'private',
      title: 'Importi di viaggio e/o servizi',
    },
  ],
  items_total: 2,
  language: '',
  layout: 'view',
  lock: {
    locked: false,
    stealable: true,
  },
  modified: '2023-03-14T16:30:25+00:00',
  next_item: {},
  opengraph_description: null,
  opengraph_image: null,
  opengraph_title: null,
  parent: {
    '@id':
      'http://localhost:3000/amministrazione/personale-amministrativo/gabriele-bianchi/incarichi',
    '@type': 'Document',
    description: '',
    design_italia_meta_type: 'Pagina',
    has_children: true,
    id: 'incarichi',
    image_field: null,
    image_scales: null,
    review_state: 'private',
    title: 'Incarichi',
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
  relatedItems: [],
  responsabile_struttura: [
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
  review_state: 'private',
  rights: '',
  seo_canonical_url: null,
  seo_description: null,
  seo_noindex: null,
  seo_title: null,
  subjects: [],
  ulteriori_informazioni: {
    blocks: {},
    blocks_layout: {
      items: [],
    },
  },
  unita_organizzativa: [
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
    subrequests: {},
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
  render(
    <Provider store={store}>
      <MemoryRouter>
        <IncaricoView content={mock_mandatory} />
      </MemoryRouter>
    </Provider>,
  );

  //title
  expect(
    screen.getByRole('heading', { name: /Incarico di Gabriele Bianchi/i }),
  ).toBeInTheDocument();

  // data inizio incarico --> non appare
  // expect(screen.getByText('2023-02-19')).toBeInTheDocument();

  // tipologia incarico
  expect(
    screen.getByRole('heading', { name: /Tipo di incarico/i }),
  ).toBeInTheDocument();
  expect(screen.getByText(/Politico/i)).toBeInTheDocument();
});

test('renders all non-mandatory fields in the page', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <IncaricoView content={mock_allfields} />
      </MemoryRouter>
    </Provider>,
  );

  //descrizione
  expect(
    screen.getByText(/Staring at the ceiling with you/i),
  ).toBeInTheDocument();

  //persona che ha carica e incarico
  expect(screen.getByRole('heading', { name: /Persona/i })).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: /Gabriele Bianchi/i }),
  ).toBeInTheDocument();

  // unità organizzativa
  expect(
    screen.getByRole('heading', { name: /Unita organizzativa/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', {
      name: /Giunta e consiglio/i,
    }),
  );

  //responsabile struttura
  expect(
    screen.getByRole('heading', { name: /Responsabile/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', {
      name: /Ufficio delle attività produttive/i,
    }),
  ).toBeInTheDocument();

  //compensi
  expect(
    screen.getByRole('heading', { name: /Compensi/i }),
  ).toBeInTheDocument();
  expect(screen.getByText(/You don't ever say too much/i)).toBeInTheDocument();

  // importi di viaggio e di servizio
  expect(
    screen.getByRole('heading', { name: 'Importi di viaggio e/o servizio' }),
  ).toBeInTheDocument();
  expect(screen.getByText(/You don't really read into/i)).toBeInTheDocument();

  // data inizio incarico --> non appare
  // expect(screen.getByText('31/03/2023')).toBeInTheDocument();
  // data insediamento  --> non appare
  // expect(screen.getByText('31/01/2023')).toBeInTheDocument();

  // Atto di nomina
  expect(
    screen.getByRole('heading', { name: 'Atto di nomina' }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: 'Is this the real life?' }),
  ).toBeInTheDocument();
});
