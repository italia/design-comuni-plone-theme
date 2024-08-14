import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ModuloView from '../ModuloView/ModuloView';
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
    'http://localhost:3000/documenti-e-dati/cartella-modulistica/doc-prova/im-just-a-poor-boy',
  '@type': 'Modulo',
  UID: 'b8efb0bf2df749c781549f3455a0b4e1',
  file_principale: {
    'content-type': 'application/pdf',
    download:
      'http://localhost:3000/documenti-e-dati/cartella-modulistica/doc-prova/im-just-a-poor-boy/@@download/file_principale',
    filename: 'doc-prova.pdf',
    size: 781,
  },
  title: "I'm just a poor boy",
};

const mock_allfields = {
  ...mock_mandatory,
  '@components': {
    actions: {
      '@id':
        'http://localhost:3000/documenti-e-dati/cartella-modulistica/doc-prova/im-just-a-poor-boy/@actions',
    },
    aliases: {
      '@id':
        'http://localhost:3000/documenti-e-dati/cartella-modulistica/doc-prova/im-just-a-poor-boy/@aliases',
    },
    breadcrumbs: {
      '@id':
        'http://localhost:3000/documenti-e-dati/cartella-modulistica/doc-prova/im-just-a-poor-boy/@breadcrumbs',
    },
    contextnavigation: {
      '@id':
        'http://localhost:3000/documenti-e-dati/cartella-modulistica/doc-prova/im-just-a-poor-boy/@contextnavigation',
    },
    navigation: {
      '@id':
        'http://localhost:3000/documenti-e-dati/cartella-modulistica/doc-prova/im-just-a-poor-boy/@navigation',
    },
    subsite: {},
    translations: {
      '@id':
        'http://localhost:3000/documenti-e-dati/cartella-modulistica/doc-prova/im-just-a-poor-boy/@translations',
    },
    types: {
      '@id':
        'http://localhost:3000/documenti-e-dati/cartella-modulistica/doc-prova/im-just-a-poor-boy/@types',
    },
    workflow: {
      '@id':
        'http://localhost:3000/documenti-e-dati/cartella-modulistica/doc-prova/im-just-a-poor-boy/@workflow',
    },
  },
  allow_discussion: false,
  contributors: [],
  created: '2023-01-31T10:12:50+00:00',
  creators: ['admin'],
  description: 'Nobody loves me',
  design_italia_meta_type: 'Modulo',
  effective: null,
  exclude_from_nav: false,
  expires: null,
  formato_alternativo_1: {
    'content-type': 'image/jpeg',
    download:
      'http://localhost:3000/documenti-e-dati/cartella-modulistica/doc-prova/im-just-a-poor-boy/@@download/formato_alternativo_1',
    filename: 'woman-having-online-meeting-work.jpg',
    size: 1195679,
  },
  formato_alternativo_2: {
    'content-type': 'image/png',
    download:
      'http://localhost:3000/documenti-e-dati/cartella-modulistica/doc-prova/im-just-a-poor-boy/@@download/formato_alternativo_2',
    filename: 'image.png',
    size: 319372,
  },
  id: 'im-just-a-poor-boy',
  is_folderish: false,
  language: {
    title: 'Italiano',
    token: 'it',
  },
  layout: 'view',
  lock: {
    locked: false,
    stealable: true,
  },
  modified: '2023-01-31T10:32:56+00:00',
  next_item: {},
  parent: {
    '@id':
      'http://localhost:3000/documenti-e-dati/cartella-modulistica/doc-prova',
    '@type': 'Documento',
    description: 'No escape from reality',
    design_italia_meta_type: 'Documento',
    has_children: true,
    id: 'doc-prova',
    image_field: null,
    image_scales: null,
    review_state: 'private',
    title: 'Doc prova',
  },
  previous_item: {
    '@id':
      'http://localhost:3000/documenti-e-dati/cartella-modulistica/doc-prova/multimedia',
    '@type': 'Document',
    description: '',
    title: 'Multimedia',
  },
  relatedItems: [],
  review_state: 'private',
  rights: '',
  subjects: [],
  version: 'current',
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
        <ModuloView content={mock_mandatory} />
      </MemoryRouter>
    </Provider>,
  );

  //title
  expect(
    screen.getByRole('heading', { name: /I'm just a poor boy/i }),
  ).toBeInTheDocument();

  //file principale
  expect(
    screen.getByRole('heading', { name: /File principale/i }),
  ).toBeInTheDocument();
  expect(screen.getByTitle(/doc-prova.pdf/i)).toBeInTheDocument();
});

test('renders all non-mandatory fields in the page', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <ModuloView content={mock_allfields} />
      </MemoryRouter>
    </Provider>,
  );

  //descrizione
  expect(screen.getByText(/Nobody loves me/i)).toBeInTheDocument();

  //formati alternativi
  expect(
    screen.getByRole('heading', { name: /Formati alternativi/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByTitle(/woman-having-online-meeting-work.jpg/i),
  ).toBeInTheDocument();
  expect(screen.getByTitle(/image.png/i)).toBeInTheDocument();
});
