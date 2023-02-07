import React from 'react';
import { render, screen /*, waitFor */ } from '@testing-library/react';
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
  '@type': 'Persona',
  // tipologia_persona: {
  //   title: 'Tipologia di persona: Politica',
  //   token: 'politica',
  // },
  title: 'Aguzzoli Claudia Dana',
  // ruolo: {
  //   title: 'Consigliere comunale',
  // },
  items: [],
  incarichi: [],
  contact_info: [],
  organizzazione_riferimento: [
    {
      '@id': 'http://loremipsum.it/siet',
      '@type': 'Unita organizzativa',
      description: "Questa è una descrcizione dell'unità organizzativa",
      review_state: 'published',
      title: 'SIET',
    },
  ],
  // collegamenti_organizzazione_l1: [
  //   {
  //     '@id': 'http://loremipsum.it/collegamenti_organizzazione_l1',
  //     '@type': 'Unita organizzativa',
  //     description: "Questa è una descrcizione dell'unità organizzativa",
  //     review_state: 'published',
  //     title: 'Unità organizzativa di primo livello',
  //   },
  // ],
  // collegamenti_organizzazione_l2: [
  //   {
  //     '@id': 'http://loremipsum.it/collegamenti_organizzazione_l2',
  //     '@type': 'Unita organizzativa',
  //     description: "Questa è una descrcizione dell'unità organizzativa",
  //     review_state: 'published',
  //     title: 'Unità organizzativa di secondo livello',
  //   },
  // ],
  ulteriori_informazioni: {
    'content-type': 'text/html',
    data: '<p>Ulteriori informazioni text</p>',
    encoding: 'utf-8',
  },
};
const mock_allfields = {
  ...mock_mandatory,
  '@id': 'http://loremipsum.it/aguzzoli-claudia-dana',
  atto_nomina: null,
  biografia: {
    'content-type': 'text/html',
    data: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in pharetra nunc, in finibus sapien. Donec eu venenatis dolor, sit amet dignissim sem. Mauris vulputate, enim at vestibulum euismod, quam risus vulputate erat, a varius tortor tellus in metus. Nulla cursus lobortis metus. Pellentesque vehicula risus tincidunt, ornare nisl non, convallis turpis. Nam convallis nulla id neque condimentum hendrerit. Proin ac tincidunt eros, quis fringilla dolor. Duis vitae arcu nibh.</p>\n<p>Donec non urna enim. Nulla mattis accumsan mauris ut sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius lacus sed turpis mollis, in volutpat magna lobortis. Nam erat enim, placerat eget orci nec, consequat efficitur arcu. Nunc auctor, augue in egestas posuere, eros velit auctor dui, in lacinia urna dolor id libero. Proin ac tincidunt ligula. Ut dictum dignissim aliquet. Donec in quam fringilla, fringilla ante sit amet, faucibus libero. Pellentesque a metus ante. Mauris iaculis pellentesque nisl vel vehicula.</p>',
    encoding: 'utf-8',
  },
  competenze: {
    'content-type': 'text/html',
    data: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in pharetra nunc, in finibus sapien. Donec eu venenatis dolor, sit amet dignissim sem. Mauris vulputate, enim at vestibulum euismod, quam risus vulputate erat, a varius tortor tellus in metus. Nulla cursus lobortis metus. Pellentesque vehicula risus tincidunt, ornare nisl non, convallis turpis. Nam convallis nulla id neque condimentum hendrerit. Proin ac tincidunt eros, quis fringilla dolor. Duis vitae arcu nibh.</p>\n<p>Donec non urna enim. Nulla mattis accumsan mauris ut sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius lacus sed turpis mollis, in volutpat magna lobortis. Nam erat enim, placerat eget orci nec, consequat efficitur arcu. Nunc auctor, augue in egestas posuere, eros velit auctor dui, in lacinia urna dolor id libero. Proin ac tincidunt ligula. Ut dictum dignissim aliquet. Donec in quam fringilla, fringilla ante sit amet, faucibus libero. Pellentesque a metus ante. Mauris iaculis pellentesque nisl vel vehicula.</p>',
    encoding: 'utf-8',
  },
  curriculum_vitae: null,
  // data_conclusione_incarico: '2020-03-13',
  // data_insediamento: '2020-03-12',
  deleghe: {
    'content-type': 'text/html',
    data: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in pharetra nunc, in finibus sapien. Donec eu venenatis dolor, sit amet dignissim sem. Mauris vulputate, enim at vestibulum euismod, quam risus vulputate erat, a varius tortor tellus in metus. Nulla cursus lobortis metus. Pellentesque vehicula risus tincidunt, ornare nisl non, convallis turpis. Nam convallis nulla id neque condimentum hendrerit. Proin ac tincidunt eros, quis fringilla dolor. Duis vitae arcu nibh.</p>\n<p>Donec non urna enim. Nulla mattis accumsan mauris ut sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius lacus sed turpis mollis, in volutpat magna lobortis. Nam erat enim, placerat eget orci nec, consequat efficitur arcu. Nunc auctor, augue in egestas posuere, eros velit auctor dui, in lacinia urna dolor id libero. Proin ac tincidunt ligula. Ut dictum dignissim aliquet. Donec in quam fringilla, fringilla ante sit amet, faucibus libero. Pellentesque a metus ante. Mauris iaculis pellentesque nisl vel vehicula.</p>',
    encoding: 'utf-8',
  },
  description: 'Lorem ipsum description',
  effective: '2020-02-16T11:49:00',
  email: ['lucabel@redturtle.it'],
  exclude_from_nav: false,
  expires: null,
  foto_persona: {
    'content-type': 'image/png',
    download: 'http://loremipsum.png',
    filename: '301.png',
    height: 301,
    scales: {
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
  // informazioni_di_contatto: {
  //   'content-type': 'text/html',
  //   data: '<p>Altre informazioni di contatto, consectetur adipiscing elit. In in pharetra nunc, in finibus sapien. Donec eu venenatis dolor, sit amet dignissim sem. Mauris vulputate, enim at vestibulum euismod, quam risus vulputate erat, a varius tortor tellus in metus. Nulla cursus lobortis metus. Pellentesque vehicula risus tincidunt, ornare nisl non, convallis turpis. Nam convallis nulla id neque condimentum hendrerit. Proin ac tincidunt eros, quis fringilla dolor. Duis vitae arcu nibh.</p>\n<p>Donec non urna enim. Nulla mattis accumsan mauris ut sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius lacus sed turpis mollis, in volutpat magna lobortis. Nam erat enim, placerat eget orci nec, consequat efficitur arcu. Nunc auctor, augue in egestas posuere, eros velit auctor dui, in lacinia urna dolor id libero. Proin ac tincidunt ligula. Ut dictum dignissim aliquet. Donec in quam fringilla, fringilla ante sit amet, faucibus libero. Pellentesque a metus ante. Mauris iaculis pellentesque nisl vel vehicula.</p>',
  //   encoding: 'utf-8',
  // },
  language: {
    title: 'Italiano',
    token: 'it',
  },
  modified: '2020-03-13T14:14:29+00:00',
  organizzazione_riferimento: [
    {
      '@id': 'http://loremipsum.it/organizzazione_riferimento',
      '@type': 'Unita organizzativa',
      description: "Questa è una descrcizione dell'unità organizzativa",
      review_state: 'published',
      title: 'Organizzazione di riferimento',
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
  // telefono: ['3459988767'],
  items: [
    {
      '@id':
        'http://loremipsum.it/aguzzoli-claudia-dana/foto-e-attivita-politica',
      id: 'foto-e-attivita-politica',
    },
    {
      '@id': 'http://loremipsum.it/aguzzoli-claudia-dana/compensi',
      id: 'compensi',
      has_children: true,
    },
    {
      '@id':
        'http://loremipsum.it/aguzzoli-claudia-dana/importi-di-viaggio-e-o-servizi',
      id: 'importi-di-viaggio-e-o-servizi',
      has_children: true,
    },
    {
      '@id': 'http://loremipsum.it/aguzzoli-claudia-dana/altre-cariche',
      id: 'altre-cariche',
      has_children: true,
    },
    {
      '@id':
        'http://loremipsum.it/aguzzoli-claudia-dana/situazione-patrimoniale',
      id: 'situazione-patrimoniale',
    },
    {
      '@id':
        'http://loremipsum.it/aguzzoli-claudia-dana/dichiarazione-dei-redditi',
      id: 'dichiarazione-dei-redditi',
    },
    {
      '@id': 'http://loremipsum.it/aguzzoli-claudia-dana/spese-elettorali',
      id: 'spese-elettorali',
    },
    {
      '@id':
        'http://loremipsum.it/aguzzoli-claudia-dana/valutazione-situazione-patrimoniale',
      id: 'valutazione-situazione-patrimoniale',
    },
  ],
};

const mock_allfields_and_fine_rapporto = {
  ...mock_allfields,
  // data_conclusione_incarico: '2020-03-13',
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
      // 'http://loremipsum.it/collegamenti_organizzazione_l1_office': {
      //   data: {
      //     '@id': 'http://office_link.it',
      //     title: 'Unità organizzativa di primo livello',
      //     description: 'office description',
      //     city: 'office city',
      //     zipcode: 'office zip code',
      //     street: 'office street',
      //   },
      // },
      // 'http://loremipsum.it/collegamenti_organizzazione_l2_office': {
      //   data: {
      //     '@id': 'http://office_link.it',
      //     title: 'Unità organizzativa di secondo livello',
      //     description: 'office description',
      //     city: 'office city',
      //     zipcode: 'office zip code',
      //     street: 'office street',
      //   },
      // },
      'http://loremipsum.it/siet_office': {
        data: {
          '@id': 'http://office_link.it',
          title: 'SIET',
          description: 'office description',
          city: 'office city',
          zipcode: 'office zip code',
          street: 'office street',
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
  const { getByText } = render(
    <Provider store={store}>
      <MemoryRouter>
        <PersonaView content={mock_mandatory} />
      </MemoryRouter>
    </Provider>,
  );
  // title
  expect(getByText(/Aguzzoli Claudia Dana/i)).toBeInTheDocument();

  // role
  // expect(getByText(/Consigliere comunale/i)).toBeInTheDocument();

  // tipologia persona
  // expect(getByText(/Tipologia di persona: Politica/i)).toBeInTheDocument();

  // organizzazione di riferimento
  // const organizzazione_riferimento = await waitFor(
  //   async () => await getByText(/SIET/i),
  // );
  // expect(organizzazione_riferimento).toBeInTheDocument();

  // expect(
  //   await screen.findByText('Unità organizzativa di primo livello'),
  // ).toBeInTheDocument();

  // expect(
  //   await screen.findByText('Unità organizzativa di secondo livello'),
  // ).toBeInTheDocument();
});

test('Checks all field when we have filled up mock', async () => {
  const { getByText, getByAltText } = render(
    <Provider store={store}>
      <MemoryRouter>
        <PersonaView content={mock_allfields} />
      </MemoryRouter>
    </Provider>,
  );

  // atto_nomina
  // expect(getByText(/Atto di nomina/i)).toBeInTheDocument();

  // biografia
  // expect(getByText(/Ruolo\/Biografia/i)).toBeInTheDocument();

  // competenze
  // expect(getByText(/Competenze/i)).toBeInTheDocument();

  // curriculum_vitae
  // expect(getByText(/Curriculum vitae/i)).toBeInTheDocument();

  // data_insediamento
  // expect(getByText(/Data di insediamento/i)).toBeInTheDocument();
  // expect(getByText(/12-03-2020/i)).toBeInTheDocument();

  // deleghe
  // expect(getByText(/Deleghe/i)).toBeInTheDocument();

  // description
  expect(getByText(/Lorem ipsum description/i)).toBeInTheDocument();

  // contatti: email, telefono, Contatti, informazioni_di_contatto
  // expect(getByText(/Contatti/i)).toBeInTheDocument();
  // expect(getByText(/lucabel@redturtle.it/i)).toBeInTheDocument();
  // expect(getByText(/3459988767/i)).toBeInTheDocument();
  // expect(getByText(/Altre informazioni di contatto/i)).toBeInTheDocument();

  // foto_persona
  expect(getByAltText(/Aguzzoli Claudia Dana/i)).toBeInTheDocument();

  //   // responsabile_di
  //   expect(getByText(/Responsabile di/i)).toBeInTheDocument();

  // ulteriori_informazioni
  expect(getByText(/Ulteriori informazioni text/i)).toBeInTheDocument();
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

test('Check parts loaded from child folders', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <PersonaView content={mock_allfields} />
      </MemoryRouter>
    </Provider>,
  );
  // Gallery
  // const gallery = await waitForElement(() =>
  //   getByText(/Galleria di immagini/i),
  // );
  // expect(gallery).toBeInTheDocument();

  // compensi
  // expect(await screen.findByText('Compensi')).toBeInTheDocument();

  // importi_di_viaggio_e_o_servizi
  // expect(
  //   await screen.findByText('Importi di viaggio e/o servizi'),
  // ).toBeInTheDocument();

  // altre-cariche
  // expect(await screen.findByText('Altre cariche')).toBeInTheDocument();

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
});

test('todo', () => {
  expect(store).toBeDefined();
  expect(mock_allfields_and_fine_rapporto).toBeDefined();
  expect(true).toBe(true);
});
