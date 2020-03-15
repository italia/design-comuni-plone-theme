import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PersonaView from '../PersonaView';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import { MemoryRouter } from 'react-router-dom';
const mockStore = configureStore();

const mock = {
  '@id': 'aguzzoli-claudia-dana',
  '@type': 'Persona',
  UID: '9350535303014204bcfe9f5ac052c374',
  allow_discussion: false,
  atto_nomina: {
    'content-type': 'application/pdf',
    download: 'http://loremipsum.doc',
    filename: 'AttoNomina.pdf',
    size: 323279,
  },
  biografia: {
    'content-type': 'text/html',
    data:
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in pharetra nunc, in finibus sapien. Donec eu venenatis dolor, sit amet dignissim sem. Mauris vulputate, enim at vestibulum euismod, quam risus vulputate erat, a varius tortor tellus in metus. Nulla cursus lobortis metus. Pellentesque vehicula risus tincidunt, ornare nisl non, convallis turpis. Nam convallis nulla id neque condimentum hendrerit. Proin ac tincidunt eros, quis fringilla dolor. Duis vitae arcu nibh.</p>\n<p>Donec non urna enim. Nulla mattis accumsan mauris ut sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius lacus sed turpis mollis, in volutpat magna lobortis. Nam erat enim, placerat eget orci nec, consequat efficitur arcu. Nunc auctor, augue in egestas posuere, eros velit auctor dui, in lacinia urna dolor id libero. Proin ac tincidunt ligula. Ut dictum dignissim aliquet. Donec in quam fringilla, fringilla ante sit amet, faucibus libero. Pellentesque a metus ante. Mauris iaculis pellentesque nisl vel vehicula.</p>',
    encoding: 'utf-8',
  },
  collegamenti_organizzazione_l1: [
    {
      '@id': 'http://loremipsum.it',
      '@type': 'Unita organizzativa',
      description: "Questa è una descrcizione dell'unità organizzativa",
      review_state: 'published',
      title: 'Unità organizzativa di riferimento',
    },
  ],
  collegamenti_organizzazione_l2: [
    {
      '@id': 'http://loremipsum.it',
      '@type': 'Unita organizzativa',
      description: "Questa è una descrcizione dell'unità organizzativa",
      review_state: 'published',
      title: 'Unità organizzativa di riferimento',
    },
  ],
  competenze: {
    'content-type': 'text/html',
    data:
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in pharetra nunc, in finibus sapien. Donec eu venenatis dolor, sit amet dignissim sem. Mauris vulputate, enim at vestibulum euismod, quam risus vulputate erat, a varius tortor tellus in metus. Nulla cursus lobortis metus. Pellentesque vehicula risus tincidunt, ornare nisl non, convallis turpis. Nam convallis nulla id neque condimentum hendrerit. Proin ac tincidunt eros, quis fringilla dolor. Duis vitae arcu nibh.</p>\n<p>Donec non urna enim. Nulla mattis accumsan mauris ut sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius lacus sed turpis mollis, in volutpat magna lobortis. Nam erat enim, placerat eget orci nec, consequat efficitur arcu. Nunc auctor, augue in egestas posuere, eros velit auctor dui, in lacinia urna dolor id libero. Proin ac tincidunt ligula. Ut dictum dignissim aliquet. Donec in quam fringilla, fringilla ante sit amet, faucibus libero. Pellentesque a metus ante. Mauris iaculis pellentesque nisl vel vehicula.</p>',
    encoding: 'utf-8',
  },
  contributors: [],
  created: '2020-02-14T10:52:28+00:00',
  creators: ['admin'],
  curriculum_vitae: {
    'content-type': 'application/pdf',
    download: 'http://loremipsum.doc',
    filename: '907122.pdf',
    size: 57203,
  },
  data_conclusione_incarico: '2020-03-13',
  data_insediamento: '2020-03-12',
  deleghe: {
    'content-type': 'text/html',
    data:
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in pharetra nunc, in finibus sapien. Donec eu venenatis dolor, sit amet dignissim sem. Mauris vulputate, enim at vestibulum euismod, quam risus vulputate erat, a varius tortor tellus in metus. Nulla cursus lobortis metus. Pellentesque vehicula risus tincidunt, ornare nisl non, convallis turpis. Nam convallis nulla id neque condimentum hendrerit. Proin ac tincidunt eros, quis fringilla dolor. Duis vitae arcu nibh.</p>\n<p>Donec non urna enim. Nulla mattis accumsan mauris ut sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius lacus sed turpis mollis, in volutpat magna lobortis. Nam erat enim, placerat eget orci nec, consequat efficitur arcu. Nunc auctor, augue in egestas posuere, eros velit auctor dui, in lacinia urna dolor id libero. Proin ac tincidunt ligula. Ut dictum dignissim aliquet. Donec in quam fringilla, fringilla ante sit amet, faucibus libero. Pellentesque a metus ante. Mauris iaculis pellentesque nisl vel vehicula.</p>',
    encoding: 'utf-8',
  },
  description: 'Lorem ipsum description',
  effective: '2020-02-16T11:49:00',
  email: 'lucabel@gmail.com',
  exclude_from_nav: false,
  expires: null,
  foto_persona: {
    'content-type': 'image/png',
    download: 'http://loremipsum.png',
    filename: '301.png',
    height: 301,
    scales: {
      gallery: {
        download: 'http://loremipsum.png',
        height: 250,
        width: 250,
      },
      icon: {
        download: 'http://loremipsum.png',
        height: 32,
        width: 32,
      },
      large: {
        download: 'http://loremipsum.png',
        height: 301,
        width: 301,
      },
      listing: {
        download: 'http://loremipsum.png',
        height: 16,
        width: 16,
      },
      mini: {
        download: 'http://loremipsum.png',
        height: 200,
        width: 200,
      },
      preview: {
        download: 'http://loremipsum.png',
        height: 301,
        width: 301,
      },
      thumb: {
        download: 'http://loremipsum.png',
        height: 128,
        width: 128,
      },
      tile: {
        download: 'http://loremipsum.png',
        height: 64,
        width: 64,
      },
    },
    size: 140925,
    width: 301,
  },
  id: 'aguzzoli-claudia-dana',
  informazioni_di_contatto: {
    'content-type': 'text/html',
    data:
      '<p>Altre informazioni di contatto, consectetur adipiscing elit. In in pharetra nunc, in finibus sapien. Donec eu venenatis dolor, sit amet dignissim sem. Mauris vulputate, enim at vestibulum euismod, quam risus vulputate erat, a varius tortor tellus in metus. Nulla cursus lobortis metus. Pellentesque vehicula risus tincidunt, ornare nisl non, convallis turpis. Nam convallis nulla id neque condimentum hendrerit. Proin ac tincidunt eros, quis fringilla dolor. Duis vitae arcu nibh.</p>\n<p>Donec non urna enim. Nulla mattis accumsan mauris ut sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius lacus sed turpis mollis, in volutpat magna lobortis. Nam erat enim, placerat eget orci nec, consequat efficitur arcu. Nunc auctor, augue in egestas posuere, eros velit auctor dui, in lacinia urna dolor id libero. Proin ac tincidunt ligula. Ut dictum dignissim aliquet. Donec in quam fringilla, fringilla ante sit amet, faucibus libero. Pellentesque a metus ante. Mauris iaculis pellentesque nisl vel vehicula.</p>',
    encoding: 'utf-8',
  },
  is_folderish: true,
  items: [],
  items_total: 9,
  language: {
    title: 'Italiano',
    token: 'it',
  },
  layout: 'view',
  modified: '2020-03-13T14:14:29+00:00',
  organizzazione_riferimento: [
    {
      '@id': 'http://loremipsum.it',
      '@type': 'Unita organizzativa',
      description: "Questa è una descrcizione dell'unità organizzativa",
      review_state: 'published',
      title: 'Unità organizzativa di riferimento',
    },
  ],
  parent: {
    '@id': 'http://loremipsum.it',
    '@type': 'PersoneFolder',
    description: '',
    review_state: 'published',
    title: 'Persone',
  },
  responsabile_di: [
    {
      '@id': 'http://loremipsum.it',
      '@type': 'Unita organizzativa',
      description: "Questa è una descrcizione dell'unità organizzativa",
      review_state: 'published',
      title: 'Unità organizzativa di riferimento',
    },
  ],
  review_state: 'published',
  rights: null,
  ruolo: 'Consigliere comunale',
  subjects: [],
  telefono: '3459988767',
  tipologia_persona: {
    title: 'Politica',
    token: 'politica',
  },
  title: 'Aguzzoli Claudia Dana',
  ulteriori_informazioni: {
    'content-type': 'text/html',
    data:
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in pharetra nunc, in finibus sapien. Donec eu venenatis dolor, sit amet dignissim sem. Mauris vulputate, enim at vestibulum euismod, quam risus vulputate erat, a varius tortor tellus in metus. Nulla cursus lobortis metus. Pellentesque vehicula risus tincidunt, ornare nisl non, convallis turpis. Nam convallis nulla id neque condimentum hendrerit. Proin ac tincidunt eros, quis fringilla dolor. Duis vitae arcu nibh.</p>\n<p>Donec non urna enim. Nulla mattis accumsan mauris ut sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius lacus sed turpis mollis, in volutpat magna lobortis. Nam erat enim, placerat eget orci nec, consequat efficitur arcu. Nunc auctor, augue in egestas posuere, eros velit auctor dui, in lacinia urna dolor id libero. Proin ac tincidunt ligula. Ut dictum dignissim aliquet. Donec in quam fringilla, fringilla ante sit amet, faucibus libero. Pellentesque a metus ante. Mauris iaculis pellentesque nisl vel vehicula.</p>',
    encoding: 'utf-8',
  },
  version: 'current',
};

test('loads and displays greeting', async () => {
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
        'http://loremipsum.it_curedby': {
          data: {
            '@id': 'http://office_link.it',
            title: 'office title',
            description: 'office description',
            city: 'office city',
            zipcode: 'office zip code',
            street: 'office street',
          },
        },
      },
    },
  });
  const { getByText, getByRole } = render(
    <Provider store={store}>
      <MemoryRouter>
        <PersonaView content={mock} />
      </MemoryRouter>
    </Provider>,
  );
  console.log(getByText)
  expect(getByText('Aguzzoli Claudia Dana')).toBeInTheDocument();
  expect(getByText('Consigliere comunale')).toBeInTheDocument();
  expect(getByText('Ruolo/Biografia')).toBeInTheDocument();
  expect(getByText('Contatti')).toBeInTheDocument();
  expect(getByText('Telefono:')).toBeInTheDocument();
  expect(getByText('Email:')).toBeInTheDocument();
  expect(getByText('Altre informazioni di contatto,')).toBeInTheDocument();
  expect(getByText('Organizzazione di riferimento')).toBeInTheDocument();
  expect(getByText('Responsabile di')).toBeInTheDocument();
  expect(
    getByText("Collegamenti all'organizzazione (I Livello)"),
  ).toBeInTheDocument();
  expect(
    getByText("Collegamenti all'organizzazione (II Livello)"),
  ).toBeInTheDocument();
  expect(getByText('Competenze')).toBeInTheDocument();
  expect(getByText('Deleghe')).toBeInTheDocument();
  // expect(getByText('Galleria di immagini')).toBeInTheDocument();
  // expect(getByText('Compensi')).toBeInTheDocument();
  expect(getByText('Importi di viaggio e/o servizi')).toBeInTheDocument();
  expect(getByText('Altre cariche')).toBeInTheDocument();
  expect(getByText('Situazione patrimoniale')).toBeInTheDocument();
  expect(getByText('Dichiarazione dei redditi')).toBeInTheDocument();
  expect(getByText('Spese elettorali')).toBeInTheDocument();
  expect(getByText('Ulteriori informazioni')).toBeInTheDocument();
  expect(getByText('Altre informazioni')).toBeInTheDocument();
});
