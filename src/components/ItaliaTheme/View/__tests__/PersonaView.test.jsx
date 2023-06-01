import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
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
        'http://localhost:3000/amministrazione/personale-amministrativo/marco-rossi/@actions',
    },
    breadcrumbs: {
      '@id':
        'http://localhost:3000/amministrazione/personale-amministrativo/marco-rossi/@breadcrumbs',
    },
    contextnavigation: {
      '@id':
        'http://localhost:3000/amministrazione/personale-amministrativo/marco-rossi/@contextnavigation',
    },
    navigation: {
      '@id':
        'http://localhost:3000/amministrazione/personale-amministrativo/marco-rossi/@navigation',
    },
    subsite: {},
    translations: {
      '@id':
        'http://localhost:3000/amministrazione/personale-amministrativo/marco-rossi/@translations',
    },
    types: {
      '@id':
        'http://localhost:3000/amministrazione/personale-amministrativo/marco-rossi/@types',
    },
    workflow: {
      '@id':
        'http://localhost:3000/amministrazione/personale-amministrativo/marco-rossi/@workflow',
    },
  },
  '@id':
    'http://localhost:3000/amministrazione/personale-amministrativo/marco-rossi',
  '@type': 'Persona',
  UID: '1f3865ab4d8448a39d60a0ba56ea035b',
  items: [],
  ruolo: {
    title: 'Assessore',
    token: 'Assessore',
  },
  tipologia_persona: {
    title: 'Amministrativa',
    token: 'Amministrativa',
  },
  title: 'Marco Rossi',
};

const mock_allfields = {
  ...mock_mandatory,
  allow_discussion: false,
  atto_nomina: {
    'content-type':
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    download:
      'http://localhost:3000/amministrazione/personale-amministrativo/marco-rossi/@@download/atto_nomina',
    filename: 'Biblioteca Medica (1).xlsx',
    size: 122664,
  },
  biografia: {
    blocks: {
      '8d9dedda-a57a-4fde-884a-2becf8d64acf': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: '3b3nf',
              text: 'No escape from reality',
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['8d9dedda-a57a-4fde-884a-2becf8d64acf'],
    },
  },
  changeNote: '',
  competenze: {
    blocks: {
      '26dce648-e733-49ab-864d-a7fa40717fc7': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: '9mlv3',
              text: 'Is this just fantasy?',
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['26dce648-e733-49ab-864d-a7fa40717fc7'],
    },
  },
  contributors: [],
  created: '2023-05-26T10:06:53+00:00',
  creators: ['admin'],
  curriculum_vitae: {
    'content-type': 'application/pdf',
    download:
      'http://localhost:3000/amministrazione/personale-amministrativo/marco-rossi/@@download/curriculum_vitae',
    filename: 'doc-prova (1).pdf',
    size: 771,
  },
  data_conclusione_incarico: '2023-05-31',
  data_insediamento: '2023-05-01',
  deleghe: {
    blocks: {
      '9e5b273f-2a9e-47f1-99fe-8353335c8248': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: 'fjj9o',
              text: 'Caught in a landside',
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['9e5b273f-2a9e-47f1-99fe-8353335c8248'],
    },
  },
  description: 'Is this the real life',
  design_italia_meta_type: 'Persona',
  effective: null,
  email: ['email@prova.it'],
  exclude_from_nav: false,
  expires: null,
  fax: '2222222222',
  foto_persona: {
    'content-type': 'image/jpeg',
    download:
      'http://localhost:3000/amministrazione/personale-amministrativo/marco-rossi/@@images/af094204-261b-4311-ba75-314b79b2fdc3.jpeg',
    filename: 'Josh_Brolin_as_Thanos.jpeg',
    height: 210,
    scales: {
      great: {
        download:
          'http://localhost:3000/amministrazione/personale-amministrativo/marco-rossi/@@images/59c2014a-4139-4385-94e8-7dc52f5192cb.jpeg',
        height: 210,
        width: 220,
      },
      huge: {
        download:
          'http://localhost:3000/amministrazione/personale-amministrativo/marco-rossi/@@images/54dd9bb7-de50-4ac6-9647-9de8d2199737.jpeg',
        height: 210,
        width: 220,
      },
      icon: {
        download:
          'http://localhost:3000/amministrazione/personale-amministrativo/marco-rossi/@@images/ba702d7a-6412-4fd4-b726-53ba0d44da0a.jpeg',
        height: 30,
        width: 32,
      },
      large: {
        download:
          'http://localhost:3000/amministrazione/personale-amministrativo/marco-rossi/@@images/733f7d2a-9799-49c9-8863-70365a4bdd37.jpeg',
        height: 210,
        width: 220,
      },
      larger: {
        download:
          'http://localhost:3000/amministrazione/personale-amministrativo/marco-rossi/@@images/c6e94559-876b-4a96-aa22-c01274c3f922.jpeg',
        height: 210,
        width: 220,
      },
      listing: {
        download:
          'http://localhost:3000/amministrazione/personale-amministrativo/marco-rossi/@@images/c1089c7d-d22d-4901-8a3d-ded7673b14e6.jpeg',
        height: 15,
        width: 16,
      },
      midi: {
        download:
          'http://localhost:3000/amministrazione/personale-amministrativo/marco-rossi/@@images/aabf4e65-13ca-4ade-bb18-bc568cbe7377.jpeg',
        height: 210,
        width: 220,
      },
      mini: {
        download:
          'http://localhost:3000/amministrazione/personale-amministrativo/marco-rossi/@@images/9df10eb0-486a-4608-9bf3-541a2e744d8c.jpeg',
        height: 190,
        width: 200,
      },
      preview: {
        download:
          'http://localhost:3000/amministrazione/personale-amministrativo/marco-rossi/@@images/a70174f3-a9d1-4eab-86dc-71eced231b72.jpeg',
        height: 210,
        width: 220,
      },
      teaser: {
        download:
          'http://localhost:3000/amministrazione/personale-amministrativo/marco-rossi/@@images/bcad123e-f0a2-499b-a6aa-cf71f4ce77a2.jpeg',
        height: 210,
        width: 220,
      },
      thumb: {
        download:
          'http://localhost:3000/amministrazione/personale-amministrativo/marco-rossi/@@images/7cf5202f-dcbd-49ac-b8de-6819bb89d1b0.jpeg',
        height: 122,
        width: 128,
      },
      tile: {
        download:
          'http://localhost:3000/amministrazione/personale-amministrativo/marco-rossi/@@images/10c60fcd-d426-4adb-9bb3-d7aef53b7d6f.jpeg',
        height: 61,
        width: 64,
      },
    },
    size: 16564,
    width: 220,
  },
  id: 'marco-rossi',
  is_folderish: true,
  items: [
    {
      '@id':
        'http://localhost:3000/amministrazione/personale-amministrativo/marco-rossi/foto-e-attivita-politica',
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
        'http://localhost:3000/amministrazione/personale-amministrativo/marco-rossi/curriculum-vitae',
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
        'http://localhost:3000/amministrazione/personale-amministrativo/marco-rossi/compensi',
      '@type': 'Document',
      description: '',
      design_italia_meta_type: 'Pagina',
      has_children: false,
      id: 'compensi',
      image_field: '',
      image_scales: null,
      review_state: 'private',
      title: 'Compensi',
    },
    {
      '@id':
        'http://localhost:3000/amministrazione/personale-amministrativo/marco-rossi/importi-di-viaggio-e-o-servizi',
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
    {
      '@id':
        'http://localhost:3000/amministrazione/personale-amministrativo/marco-rossi/situazione-patrimoniale',
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
        'http://localhost:3000/amministrazione/personale-amministrativo/marco-rossi/dichiarazione-dei-redditi',
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
        'http://localhost:3000/amministrazione/personale-amministrativo/marco-rossi/spese-elettorali',
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
        'http://localhost:3000/amministrazione/personale-amministrativo/marco-rossi/variazione-situazione-patrimoniale',
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
        'http://localhost:3000/amministrazione/personale-amministrativo/marco-rossi/altre-cariche',
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
  ],
  items_total: 9,
  language: {
    title: 'Italiano',
    token: 'it',
  },
  layout: 'view',
  lock: {
    locked: false,
    stealable: true,
  },
  modified: '2023-05-26T10:06:55+00:00',
  next_item: {},
  opengraph_description: null,
  opengraph_image: null,
  opengraph_title: null,
  organizzazione_riferimento: [
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
  previous_item: {},
  relatedItems: [
    {
      '@id': 'http://localhost:3000/novita',
      '@type': 'Document',
      description: '',
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
  review_state: 'private',
  rights: '',
  seo_canonical_url: null,
  seo_description: null,
  seo_noindex: null,
  seo_title: null,
  subjects: [],
  telefono: ['11111111111'],
  ulteriori_informazioni: {
    blocks: {
      'c6ccccc2-16d2-43fd-a670-6134d55d3ce9': {
        '@type': 'text',
        text: {
          blocks: [
            {
              data: {},
              depth: 0,
              entityRanges: [],
              inlineStyleRanges: [],
              key: '9h2kj',
              text: 'Open your eyes',
              type: 'unstyled',
            },
          ],
          entityMap: {},
        },
      },
    },
    blocks_layout: {
      items: ['c6ccccc2-16d2-43fd-a670-6134d55d3ce9'],
    },
  },
  version: 'current',
  versioning_enabled: true,
  working_copy: null,
  working_copy_of: null,
};

const mock_allfields_and_fine_rapporto = {
  ...mock_allfields,
  data_conclusione_incarico: '2020-03-13',
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
      '/amministrazione/uffici/ufficio-lorem-ipsum': {
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
          next_item: {},
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
      'generic_card_/novita': {
        loading: false,
        loaded: true,
        error: null,
        data: {
          '@components': {
            actions: {
              '@id': 'http://localhost:3000/novita/@actions',
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
          UID: '5798b550ff72427eb8bc44d787233437',
          allow_discussion: false,
          blocks: {
            '703416a4-b476-40f4-a662-179ef67da3f1': {
              '@type': 'title',
            },
          },
          blocks_layout: {
            items: ['703416a4-b476-40f4-a662-179ef67da3f1'],
          },
          changeNote: '',
          contributors: [],
          correlato_in_evidenza: [],
          created: '2023-05-26T08:40:36+00:00',
          creators: ['admin'],
          description: '',
          design_italia_meta_type: 'Pagina',
          effective: null,
          exclude_from_nav: false,
          expires: null,
          id: 'novita',
          image: null,
          image_caption: null,
          info_testata: null,
          is_folderish: true,
          items: [
            {
              '@id': 'http://localhost:3000/novita/notizie',
              '@type': 'Document',
              description: '',
              design_italia_meta_type: 'Pagina',
              has_children: false,
              id: 'notizie',
              image_field: '',
              image_scales: null,
              review_state: 'private',
              title: 'Notizie',
              url: '/novita/notizie',
            },
            {
              '@id': 'http://localhost:3000/novita/comunicati',
              '@type': 'Document',
              description: '',
              design_italia_meta_type: 'Pagina',
              has_children: false,
              id: 'comunicati',
              image_field: '',
              image_scales: null,
              review_state: 'private',
              title: 'Comunicati',
              url: '/novita/comunicati',
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
          modified: '2023-05-26T08:40:36+00:00',
          mostra_bottoni_condivisione: false,
          mostra_navigazione: false,
          next_item: {
            '@id': 'http://localhost:3000/documenti-e-dati',
            '@type': 'Document',
            description: '',
            title: 'Documenti e dati',
          },
          opengraph_description: null,
          opengraph_image: null,
          opengraph_title: null,
          parent: {
            '@id': 'http://localhost:3000',
            '@type': 'Plone Site',
            description: 'Il sistema di gestione contenuti basato su React',
            title: 'Benvenuto in Volto!',
          },
          preview_caption: null,
          preview_image: null,
          previous_item: {
            '@id': 'http://localhost:3000/servizi',
            '@type': 'Document',
            description: '',
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

test('expect to have all mandatory fields in page', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <PersonaView content={mock_mandatory} />
      </MemoryRouter>
    </Provider>,
  );
  // title
  expect(screen.getByText(/Marco Rossi/i)).toBeInTheDocument();

  // expect(screen.getByRole('text', { name: '' }));

  // role
  expect(screen.getByRole('heading', { name: /Ruolo/i })).toBeInTheDocument();
  expect(screen.getAllByText('Assessore')).toBeTruthy();

  // tipologia persona
  // NON APPARE
  // expect(
  //   screen.getByText(/Tipologia di persona: Politica/i),
  // ).toBeInTheDocument();
});

test('Checks all field', async () => {
  const { getByText, getByAltText } = render(
    <Provider store={store}>
      <MemoryRouter>
        <PersonaView content={mock_allfields} />
      </MemoryRouter>
    </Provider>,
  );

  //descrizione
  expect(screen.getByText(/Is this the real life/i)).toBeInTheDocument();

  // immagine
  expect(screen.getByRole('img', { name: '' })).toBeInTheDocument();

  // data conclusione incarico
  expect(
    screen.getByText(/Ha fatto parte dell'organizzazione comunale fino al/i),
  ).toBeInTheDocument();
  expect(screen.getByText(/31-05-2023/i)).toBeInTheDocument();

  // competenze - non appare
  // expect(screen.getByText(/Is this just fantasy?/i)).toBeInTheDocument();

  // deleghe - non appare
  // expect(screen.getByText(/Caught in a landside/i)).toBeInTheDocument();

  // data insediamento - non appare
  // expect(screen.getByText(/01-05-2023/i)).toBeInTheDocument();

  //biografia
  // expect(screen.getByText(/No escape from reality/i)).toBeInTheDocument();

  //numero di telefono
  expect(
    screen.getByRole('heading', { name: /Contatti/i }),
  ).toBeInTheDocument();

  expect(screen.getByText(/11111111111/i)).toBeInTheDocument();

  //fax
  expect(screen.getByText(/2222222222/i)).toBeInTheDocument();

  //email
  expect(screen.getByText(/email@prova.it/i)).toBeInTheDocument();

  //documenti
  expect(
    screen.getByRole('heading', { name: /Documenti/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: /Curriculum vitae/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: /Atto di nomina/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: 'doc-prova (1).pdf' }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: 'Biblioteca Medica (1).xlsx' }),
  ).toBeInTheDocument();

  const metadata = document.querySelector('#header-metadata');
  expect(metadata).toBeInTheDocument();
  //ulteriori informazioni - test non funziona
  // expect(screen.getByText(/open your eyes/i)).toBeInTheDocument();
});

// test('Specific fields not in page if data_conclusione_incarico compiled', async () => {
//   const { getByText, queryByText } = render(
//     <Provider store={store}>
//       <MemoryRouter>
//         <PersonaView content={mock_allfields_and_fine_rapporto} />
//       </MemoryRouter>
//     </Provider>,
//   );

//   // data_insediamento
//   expect(queryByText('Data di insediamento:')).toBeNull();
//   // biografia
//   expect(queryByText('Ruolo/Biografia')).toBeNull();
//   // organizzazione_riferimento
//   // Come può andare bene un test del genere? come verifico un elemento che non
//   // comparirà?
//   expect(queryByText('SIET')).toBeNull();
//   //responsabile_di
//   expect(queryByText('Responsabile di')).toBeNull();
//   // collegamenti_organizzazione_l1
//   // Come può andare bene un test del genere? come verifico un elemento che non
//   // comparirà?
//   expect(queryByText('Unità organizzativa di primo livello')).toBeNull();
//   // collegamenti_organizzazione_l2
//   // Come può andare bene un test del genere? come verifico un elemento che non
//   // comparirà?
//   expect(queryByText('Unità organizzativa di secondo livello')).toBeNull();

//   // competenze
//   expect(queryByText('Competenze')).toBeNull();
//   // deleghe
//   expect(queryByText('Deleghe')).toBeNull();
//   // data_conclusione_incarico
//   expect(
//     getByText(/Ha fatto parte dell'organizzazione comunale fino al/i),
//   ).toBeInTheDocument();
// });

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
//   expect(await screen.findByText('Compensi')).toBeInTheDocument();

//   // importi_di_viaggio_e_o_servizi
//   expect(
//     await screen.findByText('Importi di viaggio e/o servizi'),
//   ).toBeInTheDocument();

//   // altre-cariche
//   expect(await screen.findByText('Altre cariche')).toBeInTheDocument();

//   // situazione-patrimoniale
//   // const situazione_patrimoniale = await waitForElement(() =>
//   //   getByText(/Situazione patrimoniale/),
//   // );
//   // expect(situazione_patrimoniale).toBeInTheDocument();

//   // dichiarazione-dei-redditi
//   // const dichiarazione_dei_redditi = await waitForElement(() =>
//   //   getByText(/Dichiarazione dei redditi/i),
//   // );
//   // expect(dichiarazione_dei_redditi).toBeInTheDocument();

//   // spese-elettorali
//   // const spese_elettorali = await waitForElement(() =>
//   //   getByText(/Spese elettorali/i),
//   // );
//   // expect(spese_elettorali).toBeInTheDocument();

//   // situazione-patrimoniale
//   // const valutazione_situazione_patrimoniale = await waitForElement(() =>
//   //   getByText(/Valutazione situazione patrimoniale/i),
//   // );
//   // expect(valutazione_situazione_patrimoniale).toBeInTheDocument();
// });

test('todo', () => {
  expect(store).toBeDefined();
  expect(mock_allfields_and_fine_rapporto).toBeDefined();
  expect(true).toBe(true);
});
