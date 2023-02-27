import React from 'react';
import { render, waitFor } from '@testing-library/react';
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
  '@id': 'http://loremipsum.com/events/altro-eventone',
  '@type': 'Event',
  title: 'Altro eventone',
  description: 'Eventone di inaugurazione',
  start: '2020-05-25T12:00:00+00:00',
  end: '2020-05-27T16:00:00+00:00',
  UID: 'ce4e5d4f2c3a45f1b541e80ea71da3fc',
  allow_discussion: false,
  parent: {
    '@type': 'Folder',
  },
  ulteriori_informazioni: {
    'content-type': 'text/html',
    data: '<p>aiutati</p>',
    encoding: 'utf-8',
  },
  cap: 'sfd',
  changeNote: '',
  circoscrizione: null,
  contact_email: 'martina.bustacchini@redturtle.it',
  contact_name: 'redturtle',
  contact_phone: '03468492433',
  contatto_reperibilita: null,
  contributors: [],
  created: '2020-05-25T12:39:13+00:00',
  creators: ['admin'],
  date_significative: {
    'content-type': 'text/html',
    data: '<p>poche</p>',
    encoding: 'utf-8',
  },
  a_chi_si_rivolge: {
    'content-type': 'text/html',
    data: '<p>no</p>',
    encoding: 'utf-8',
  },
  contact_info: [],
  effective: '2020-05-25T14:41:00',
  evento_genitore: false,
  evento_supportato_da: [
    {
      '@id':
        'http://loremipsum.com/amministrazione/enti-e-fondazioni/ente-svago',
      '@type': 'Unita organizzativa',
      description: '',
      review_state: 'private',
      title: 'Ente svago',
    },
  ],
  exclude_from_nav: false,
  expires: null,
  id: 'altro-eventone',
  identifier: 'qerwq2131',
  image: {
    'content-type': 'image/png',
    download:
      'http://loremipsum.com/events/altro-eventone/@@images/44d804b8-0944-4c7b-9fb2-2d55a04dc7b8.png',
    filename: 'Screenshot 2020-03-16 at 15.48.04 (2).png',
    height: 1080,
    size: 297007,
    width: 1920,
  },
  image_caption: null,
  indirizzo: 'asdas',
  introduzione: {
    'content-type': 'text/html',
    data: '<p>cose a caso ciao</p>',
    encoding: 'utf-8',
  },
  is_folderish: true,
  items: [
    {
      '@id': 'http://loremipsum.com/events/altro-eventone/multimedia',
      '@type': 'Folder',
      UID: 'f662bebcf0d6459fb83c6652b9ef26d6',
      created: '2020-05-25T12:39:13+00:00',
      description: '',
      effective: '2020-05-25T14:41:24',
      id: 'multimedia',
      review_state: 'published',
      title: 'Multimedia',
    },
    {
      '@id': 'http://loremipsum.com/events/altro-eventone/documenti',
      '@type': 'Folder',
      UID: 'f97641e8fec44a3e8aea9a753183995e',
      created: '2020-05-25T12:39:13+00:00',
      description: '',
      effective: '2020-05-25T14:41:24',
      id: 'documenti',
      review_state: 'published',
      title: 'Documenti',
    },
    {
      '@id': 'http://loremipsum.com/events/altro-eventone/subevento',
      '@type': 'Event',
      title: 'SubEvento',
      start: '2020-05-25T14:00:00+00:00',
      luogo_event: [
        {
          '@id': 'http://localhost:9080/Plone/amministrazione/luoghi/ravenna',
          '@type': 'Venue',
          description: '',
          review_state: 'published',
          title: 'Lugo',
        },
      ],
      image: {
        'content-type': 'image/png',
        download:
          'http://loremipsum.com/events/altro-eventone/…@@images/94795d4a-bc37-4319-acd6-37287aab0b32.png',
        filename: 'Screenshot 2020-05-25 at 14.45.26.png',
        height: 2100,
        scales: {
          gallery: {
            download:
              'http://loremipsum.com/events/altro-eventone/…@@images/3c2a3bf7-67a4-4420-9df3-830e15b97d09.png',
            height: 156,
            width: 250,
          },
          icon: {
            download:
              'http://loremipsum.com/events/altro-eventone/…@@images/9a07e334-c4f4-4764-8c32-5635a6ad670b.png',
            height: 20,
            width: 32,
          },
          large: {
            download:
              'http://loremipsum.com/events/altro-eventone/…@@images/154727c5-76d8-4a78-b66f-c5d162dfe795.png',
            height: 480,
            width: 768,
          },
          listing: {
            download:
              'http://loremipsum.com/events/altro-eventone/…@@images/3be5dd0e-25ac-4977-8b9d-920286e9ef75.png',
            height: 10,
            width: 16,
          },
          mini: {
            download:
              'http://loremipsum.com/events/altro-eventone/…@@images/a99d74ae-ee9c-4fac-b544-6d34e9d9dcba.png',
            height: 125,
            width: 200,
          },
          preview: {
            download:
              'http://loremipsum.com/events/altro-eventone/…@@images/5eae397d-3985-41e4-82f5-0eee1533615a.png',
            height: 250,
            width: 400,
          },
          thumb: {
            download:
              'http://loremipsum.com/events/altro-eventone/…@@images/9c3b3e36-44dc-4a8a-b921-73540bbf403c.png',
            height: 80,
            width: 128,
          },
          tile: {
            download:
              'http://loremipsum.com/events/altro-eventone/…@@images/7ece4a00-b844-4136-b6e6-e5139413b21c.png',
            height: 40,
            width: 64,
          },
        },
      },
    },
  ],
  items_total: 3,
  language: { title: 'Italiano', token: 'it' },
  layout: 'event_view',
  lista_eventi_figli: [],
  luogo_event: [
    {
      '@id': 'http://loremipsum.com/amministrazione/luoghi/ravenna-1',
      '@type': 'Venue',
      description: '',
      review_state: 'private',
      title: 'Ravenna',
    },
  ],
  modified: '2020-05-26T08:31:28+00:00',
  next_item: {},
  open_end: false,
  orari: { 'content-type': 'text/html', data: '<p>no</p>', encoding: 'utf-8' },
  organizzato_da_esterno: {
    'content-type': 'text/html',
    data: '<p>nessuno</p>',
    encoding: 'utf-8',
  },
  organizzato_da_interno: [],
  patrocinato_da: {
    'content-type': 'text/html',
    data: '<p>Comune di io-Comune</p>',
    encoding: 'utf-8',
  },
  persone_amministrazione: [
    {
      '@id':
        'http://localhost:9080/Plone/amministrazione/politici/giorgio-giorgi',
      '@type': 'Persona',
      description: '',
      review_state: 'private',
      title: 'Giorgio Giorgi',
    },
    {
      '@id':
        'http://localhost:9080/Plone/amministrazione/politici/giovanni-giovanni',
      '@type': 'Persona',
      description: '',
      review_state: 'private',
      title: 'Giovanni Giovanni',
    },
  ],
  previous_item: {},
  prezzo: {
    'content-type': 'text/html',
    data: '<p>TRIBUNA 1 E 4</p>\n<h5 id="b6el">€ 30</h5>\n<p>Tribune coperte site nella via Roma lato Palazzo Vivanet (tribuna n. 1) e nella via Roma fronte palazzo Civico (tribuna n. 4), per circa 770 posti a sedere.</p>\n<p/>\n<p>TRIBUNA 5</p>\n<h5 id="1rkjt">€ 25</h5>\n<p>Tribuna coperta fronte largo Carlo Felice, dislocata nell\'incrocio, nello spazio compreso tra i due semafori della via Roma, per circa 400 posti a sedere.</p>',
    encoding: 'utf-8',
  },
  quartiere: null,
  recurrence: null,
  relatedItems: [],
  review_state: 'published',
  rights: null,
  sponsor: {
    'content-type': 'text/html',
    data: '<p>Parmigiao reggiao</p>\n<p>Trattore blu</p>\n<p>Figurine di Harry Potter</p>',
    encoding: 'utf-8',
  },
  strutture_politiche: [],
  subjects: [],
  sync_uid: null,
  tassonomia_argomenti: [
    {
      '@id': 'http://localhost:8080/Plone/fanciullo',
      title: 'Fanciullo',
      token: 'fanciullo',
    },
    {
      '@id': 'http://localhost:8080/Plone/animale-domestico',
      title: 'Animale domestico',
      token: 'animale-domestico',
    },
  ],
  version: 'current',
  video_evento: 'https://youtu.be/eIZkVaM-0K8',
  versioning_enabled: true,
  whole_day: false,
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
      'luogohttp://loremipsum.com/amministrazione/luoghi/ravenna-1': {
        data: {
          '@id': 'http://loremipsum.com/amministrazione/luoghi/ravenna-1',
          '@type': 'Venue',
          description: '',
          review_state: 'private',
          title: 'Ravenna',
        },
      },
      'http://loremipsum.com/amministrazione/enti-e-fondazioni/ente-svago_office':
        {
          data: {
            '@id':
              'http://loremipsum.com/amministrazione/enti-e-fondazioni/ente-svago',
            '@type': 'Unita organizzativa',
            UID: 'c5ee7af923204be484ffd329f91f3de2',
            city: 'Lugo',
            email: 'martina.bustacchini@redturtle.it',
            phone: '03468492433',
            street: 'Ravegnana 158a',
            title: 'Ente svago',
            website: null,
            zip_code: null,
          },
          'http://loremipsum.com/amministrazione/luoghi/ravenna-1_venue': {
            data: {
              '@id': 'http://loremipsum.com/amministrazione/luoghi/ravenna-1',
              '@type': 'Venue',
              UID: '42abd9ce876f4eea9bca32b6845d3a71',
              id: 'ravenna-1',
              title: 'Ravenna',
            },
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
  const { getByText, getAllByText } = render(
    <Provider store={store}>
      <MemoryRouter>
        <EventoView content={mock_mandatory} />
      </MemoryRouter>
    </Provider>,
  );
  // title
  expect(getByText('Altro eventone')).toBeInTheDocument();
  // description
  expect(getByText('Eventone di inaugurazione')).toBeInTheDocument();
  // expect(getByText('Date e orari')).toBeInTheDocument();
  // expect(getByText('Costi')).toBeInTheDocument();
  // contatti: <span> + <h4>
  expect(getAllByText('Contatti')).toHaveLength(2);
  // contatti: <span> + <h4>
  expect(getAllByText('Appuntamenti')).toHaveLength(2);
  // expect(getAllByText(/Ulteriori informazioni/i)).toHaveLength(2);
  expect(getByText('Patrocinato da')).toBeInTheDocument();
  // expect(getByText('Sponsor')).toBeInTheDocument();
  // expect(getByText(/Altre informazioni/i)).toBeInTheDocument();

  // // const people = await waitForElement(() =>
  // const people = document.querySelector('#attending-vips');
  // // );
  // expect(people).toBeInTheDocument();

  // luoghi e contatti/supporto
  // const luoghi = await waitForElement(() => getByText(/Ravenna/i));
  // expect(luoghi).toBeInTheDocument();

  const contatti = await waitFor(async () => await getByText(/nessuno/i));
  expect(contatti).toBeInTheDocument();

  // const supporto = await waitForElement(() => getByText(/Ente svago/i));
  // expect(supporto).toBeInTheDocument();
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

// test('todo', () => {
//   expect(mock_mandatory).toBeDefined();
//   expect(store).toBeDefined();
//   expect(true).toBe(true);
// });
