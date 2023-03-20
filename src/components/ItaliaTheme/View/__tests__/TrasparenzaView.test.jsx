import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TrasparenzaView from '../TrasparenzaView/TrasparenzaView';
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
      '@id': 'http://localhost:3000/vivi-il-comune/trasparenza/@actions',
    },
    aliases: {
      '@id': 'http://localhost:3000/vivi-il-comune/trasparenza/@aliases',
    },
    breadcrumbs: {
      '@id': 'http://localhost:3000/vivi-il-comune/trasparenza/@breadcrumbs',
    },
    contextnavigation: {
      '@id':
        'http://localhost:3000/vivi-il-comune/trasparenza/@contextnavigation',
    },
    navigation: {
      '@id': 'http://localhost:3000/vivi-il-comune/trasparenza/@navigation',
    },
    subsite: {},
    translations: {
      '@id': 'http://localhost:3000/vivi-il-comune/trasparenza/@translations',
    },
    types: {
      '@id': 'http://localhost:3000/vivi-il-comune/trasparenza/@types',
    },
    workflow: {
      '@id': 'http://localhost:3000/vivi-il-comune/trasparenza/@workflow',
    },
  },
  '@id': 'http://localhost:3000/vivi-il-comune/trasparenza',
  '@type': 'Document',
  UID: '542f7b7e8b554f978c729d84b88db175',
  title: 'Trasparenza',
};

const mock_allfields = {
  ...mock_mandatory,
  allow_discussion: false,
  blocks: {
    'd872f558-3d24-4ce2-a75d-7c6b12918ca9': {
      '@type': 'title',
    },
    'fbd627d2-46a1-4d32-b610-6aed2a142b36': {
      '@type': 'text',
    },
  },
  blocks_layout: {
    items: [
      'd872f558-3d24-4ce2-a75d-7c6b12918ca9',
      'fbd627d2-46a1-4d32-b610-6aed2a142b36',
    ],
  },
  changeNote: '',
  contributors: [],
  correlato_in_evidenza: [],
  created: '2023-03-16T14:07:53+00:00',
  creators: ['admin'],
  description: 'I have this thing where I get older',
  design_italia_meta_type: 'Pagina',
  effective: null,
  exclude_from_nav: false,
  expires: null,
  id: 'trasparenza',
  image: {
    'content-type': 'image/jpeg',
    download:
      'http://localhost:3000/vivi-il-comune/trasparenza/@@images/image-6240-2a0888197ea6da24471a4916100aafaa.jpeg',
    filename: 'woman-having-online-meeting-work.jpg',
    height: 4160,
    scales: {
      gallery: {
        download:
          'http://localhost:3000/vivi-il-comune/trasparenza/@@images/image-250-42bc2883c2f57fe4dbbec907ad5a7807.jpeg',
        height: 166,
        width: 250,
      },
      great: {
        download:
          'http://localhost:3000/vivi-il-comune/trasparenza/@@images/image-1200-8f9148df0fa5e672f85d4e3dd228edda.jpeg',
        height: 800,
        width: 1200,
      },
      huge: {
        download:
          'http://localhost:3000/vivi-il-comune/trasparenza/@@images/image-1600-3f930d9aa8634f1ec59f497ad316f315.jpeg',
        height: 1066,
        width: 1600,
      },
      icon: {
        download:
          'http://localhost:3000/vivi-il-comune/trasparenza/@@images/image-32-b1f3f55497c1fefd2d1a9c4a60fa149e.jpeg',
        height: 21,
        width: 32,
      },
      large: {
        download:
          'http://localhost:3000/vivi-il-comune/trasparenza/@@images/image-800-2bd6cc909fa5176ae209162923ca125c.jpeg',
        height: 533,
        width: 800,
      },
      larger: {
        download:
          'http://localhost:3000/vivi-il-comune/trasparenza/@@images/image-1000-7dc50e5e48a890d36bd0b5a71139c2e5.jpeg',
        height: 666,
        width: 1000,
      },
      listing: {
        download:
          'http://localhost:3000/vivi-il-comune/trasparenza/@@images/image-16-7f0564e02d82aa374b90295ab02004b9.jpeg',
        height: 10,
        width: 16,
      },
      midi: {
        download:
          'http://localhost:3000/vivi-il-comune/trasparenza/@@images/image-300-1b69ca8a7e79e874854d25a564c2efb2.jpeg',
        height: 200,
        width: 300,
      },
      mini: {
        download:
          'http://localhost:3000/vivi-il-comune/trasparenza/@@images/image-200-e5df700d235ff5218d4eb35ed2a01b03.jpeg',
        height: 133,
        width: 200,
      },
      preview: {
        download:
          'http://localhost:3000/vivi-il-comune/trasparenza/@@images/image-400-3d480bd67e775d66be15669224b6c0df.jpeg',
        height: 266,
        width: 400,
      },
      teaser: {
        download:
          'http://localhost:3000/vivi-il-comune/trasparenza/@@images/image-600-ad252357846a0fba5e3a3cb809e1f12a.jpeg',
        height: 400,
        width: 600,
      },
      thumb: {
        download:
          'http://localhost:3000/vivi-il-comune/trasparenza/@@images/image-128-8f8264f9c8922db9fe23306d1069b21c.jpeg',
        height: 85,
        width: 128,
      },
      tile: {
        download:
          'http://localhost:3000/vivi-il-comune/trasparenza/@@images/image-64-dcb36f22d89f75cc0a7c2d516feb5227.jpeg',
        height: 42,
        width: 64,
      },
    },
    size: 1195679,
    width: 6240,
  },
  image_caption: 'but just never wiser',
  info_testata: {
    'content-type': 'text/html',
    data: '<p>Midnights become my afternoon</p>',
    encoding: 'utf8',
  },
  is_folderish: true,
  items: [],
  items_total: 0,
  language: {
    title: 'Italiano',
    token: 'it',
  },
  layout: 'trasparenza_view',
  lock: {
    locked: false,
    stealable: true,
  },
  modified: '2023-03-16T14:09:04+00:00',
  mostra_bottoni_condivisione: false,
  mostra_navigazione: false,
  next_item: {},
  opengraph_description: null,
  opengraph_image: null,
  opengraph_title: null,
  parent: {
    '@id': 'http://localhost:3000/vivi-il-comune',
    '@type': 'Document',
    description:
      'Tutti gli eventi, le iniziative e i luoghi d’interesse per scoprire e vivere il territorio comunale.',
    design_italia_meta_type: 'Pagina',
    has_children: true,
    id: 'vivi-il-comune',
    image_field: null,
    image_scales: null,
    review_state: 'private',
    title: 'Vivi il Comune',
  },
  preview_caption: null,
  preview_image: null,
  previous_item: {
    '@id': 'http://localhost:3000/vivi-il-comune/luoghi',
    '@type': 'Document',
    description: '',
    title: 'Luoghi',
  },
  relatedItems: [],
  review_state: 'private',
  ricerca_in_testata: false,
  rights: '',
  seo_canonical_url: null,
  seo_description: null,
  seo_noindex: null,
  seo_title: null,
  show_modified: true,
  subjects: [],
  table_of_contents: null,
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
  title: 'Trasparenza',
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
});

test('renders all mandatory fields in the page', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <TrasparenzaView content={mock_mandatory} />
      </MemoryRouter>
    </Provider>,
  );

  //title
  expect(
    screen.getByRole('heading', { name: /Trasparenza/i }),
  ).toBeInTheDocument();
});

test('renders all non-mandatory fields in the page', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <TrasparenzaView content={mock_allfields} />
      </MemoryRouter>
    </Provider>,
  );

  // descrizione
  expect(
    screen.getByText(/I have this thing where I get older/i),
  ).toBeInTheDocument();

  // //immagine di testata --> non compare
  // expect(screen.getByAltText(/Is this just fantasy?/i)).toBeInTheDocument();
  // expect(screen.getByText(/but just never wiser/i)).toBeInTheDocument();

  // //ricerca in testata --> non compare
  // expect(
  //   screen.getByText(/Cerca contenuti/i, { exact: false }),
  // ).toBeInTheDocument();
  // // mostra i bottoni --> compaiono sempre a prescindere dal checkbox
  // expect(
  //   screen.getByRole('button', { name: /Condividi/i }),
  // ).not.toBeInTheDocument();

  // //informazioni aggiuntive --> non compare
  // expect(
  //   screen.getByText(/Midnights become my afternoon/i),
  // ).toBeInTheDocument();
  // //navigazione in testata --> non compare
  // expect(screen.getByText(/In questa sezione/i)).toBeInTheDocument();

  //tassonomia argomenti
  expect(screen.getByText(/Argomenti/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Sport/i })).toBeInTheDocument();
});
