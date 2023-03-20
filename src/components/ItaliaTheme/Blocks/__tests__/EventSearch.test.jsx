import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import View from '../EventSearch/View';
import Body from '../EventSearch/Body';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const mock_fields = {
  '@type': 'searchEvents',
  filter_one: 'text_filter',
  filter_three: 'date_filter',
  filter_two: 'venue_filter',
  location: [
    {
      '@id': 'http://localhost:3000/eventi',
      '@type': 'Document',
      CreationDate: '2023-01-03T15:37:39+00:00',
      Creator: 'admin',
      Date: '2023-01-03T15:37:54+00:00',
      Description: '',
      EffectiveDate: '2023-01-03T15:37:54+00:00',
      ExpirationDate: 'None',
      ModificationDate: '2023-01-25T14:30:42+00:00',
      Subject: [],
      Subject_bando: null,
      Title: 'Eventi',
      Type: 'Pagina',
      UID: 'd973c55883254c118dc0ccba067329b8',
      apertura_bando: null,
      author_name: null,
      chiusura_procedimento_bando: null,
      cmf_uid: 12,
      commentators: [],
      created: '2023-01-03T15:37:39+00:00',
      data_conclusione_incarico: null,
      description: '',
      design_italia_meta_type: 'Pagina',
      destinatari_bando: null,
      effective: '2023-01-03T15:37:54+00:00',
      end: null,
      ente_bando: null,
      event_location: null,
      exclude_from_nav: false,
      expires: null,
      geolocation: null,
      getIcon: false,
      getId: 'eventi',
      getObjSize: '1 KB',
      getPath: '/Plone/eventi',
      getRemoteUrl: null,
      getURL: 'http://localhost:3000/eventi',
      hasPreviewImage: null,
      has_children: true,
      head_title: null,
      icona: null,
      id: 'eventi',
      image_field: '',
      image_scales: null,
      in_response_to: null,
      is_folderish: true,
      last_comment_date: null,
      latitude: null,
      listCreators: ['admin'],
      location: null,
      longitude: null,
      mime_type: 'text/plain',
      modified: '2023-01-25T14:30:42+00:00',
      nav_title: null,
      open_end: null,
      parent: {
        '@id': 'http://localhost:3000',
        UID: '0a8f653a6d4a496ebce1063ddb8efe70',
        title: 'Benvenuto in Volto!!',
      },
      portal_type: 'Document',
      recurrence: null,
      review_state: 'published',
      scadenza_bando: null,
      start: null,
      sync_uid: null,
      tassonomia_argomenti: [],
      taxonomy_business_events: [],
      taxonomy_person_life_events: [],
      taxonomy_temi_dataset: [],
      taxonomy_tipologia_documenti_albopretorio: [],
      taxonomy_tipologia_documento: [],
      taxonomy_tipologia_evento: [],
      taxonomy_tipologia_frequenza_aggiornamento: [],
      taxonomy_tipologia_incarico: [],
      taxonomy_tipologia_licenze: [],
      taxonomy_tipologia_luogo: [],
      taxonomy_tipologia_notizia: [],
      taxonomy_tipologia_organizzazione: [],
      taxonomy_tipologia_pdc: [],
      taxonomy_tipologia_stati_pratica: [],
      tipologia_bando: null,
      tipologia_documento: null,
      tipologia_notizia: null,
      title: 'Eventi',
      total_comments: 0,
      ufficio_responsabile_bando: null,
      update_note: null,
      whole_day: null,
    },
  ],
  show_default_results: true,
};

const store = mockStore({
  intl: {
    locale: 'en',
    messages: {},
  },
});

test('View renders all fields', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <View data={mock_fields} />
      </MemoryRouter>
    </Provider>,
  );

  //barra di ricerca
  expect(
    screen.getByPlaceholderText(/Cerca per parola chiave/i),
  ).toBeInTheDocument();
  //select filters
  const selectFilters = document.getElementsByClassName('select-filter');
  expect(selectFilters).toHaveLength(1);
  // const dateFilters = document.querySelector('.date-filter');
  // expect(dateFilters).toHaveLength(1);

  //bottone cerca
  expect(screen.getByRole('button', { name: /Cerca/i })).toBeInTheDocument();
});

// date filter non viene renderizzato
// test('date filter renders', async () => {
//   render(
//     <Provider store={store}>
//       <MemoryRouter>
//         <Body data={mock_fields} />
//       </MemoryRouter>
//     </Provider>,
//   );

//   await screen.findByPlaceholderText(/Data inizio/i);
//   screen.debug();
// });
