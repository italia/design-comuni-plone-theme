import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Body from '../UOSearch/Body';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const mock_fields = {
  '@type': 'searchUO',
  bg_color: 'primary',
  button_color: 'tertiary',
  filter_one: 'text_filter',
  filter_three: 'uo_type_filter',
  filter_two: 'venue_filter',
  location: [
    {
      '@id': 'http://localhost:3000/amministrazione/enti-e-fondazioni',
      '@type': 'Document',
      CreationDate: '2023-01-03T16:14:59+00:00',
      Creator: 'admin',
      Date: '2023-01-31T14:54:57+00:00',
      Description: '',
      EffectiveDate: 'None',
      ExpirationDate: 'None',
      ModificationDate: '2023-01-31T14:54:57+00:00',
      Subject: [],
      Subject_bando: null,
      Title: 'Enti e fondazioni',
      Type: 'Pagina',
      UID: '6773a7187c4040f694caa7d29cdf8807',
      apertura_bando: null,
      author_name: null,
      chiusura_procedimento_bando: null,
      cmf_uid: 40,
      commentators: [],
      created: '2023-01-03T16:14:59+00:00',
      data_conclusione_incarico: null,
      description: '',
      design_italia_meta_type: 'Pagina',
      destinatari_bando: null,
      effective: null,
      end: null,
      ente_bando: null,
      event_location: null,
      exclude_from_nav: false,
      expires: null,
      geolocation: null,
      getIcon: false,
      getId: 'enti-e-fondazioni',
      getObjSize: '0 KB',
      getPath: '/Plone/amministrazione/enti-e-fondazioni',
      getRemoteUrl: null,
      getURL: 'http://localhost:3000/amministrazione/enti-e-fondazioni',
      hasPreviewImage: null,
      has_children: true,
      head_title: null,
      icona: null,
      id: 'enti-e-fondazioni',
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
      modified: '2023-01-31T14:54:57+00:00',
      nav_title: null,
      open_end: null,
      parent: {
        '@id': 'http://localhost:3000/amministrazione',
        UID: '0af0cc387e024824a1b896c4db408688',
        title: 'Amministrazione',
      },
      portal_type: 'Document',
      recurrence: null,
      review_state: 'private',
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
      title: 'Enti e fondazioni',
      total_comments: 0,
      ufficio_responsabile_bando: null,
      update_note: null,
      whole_day: null,
    },
  ],
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
        <Body data={mock_fields} />
      </MemoryRouter>
    </Provider>,
  );

  //barra di ricerca
  expect(
    screen.getByPlaceholderText(/Cerca una struttura/i),
  ).toBeInTheDocument();

  //select filters
  const selectFilters = document.querySelectorAll('.select-filter');
  expect(selectFilters.length).toBeGreaterThan(0);

  //bottone cerca
  expect(screen.getByRole('button', { name: /Cerca/i })).toBeInTheDocument();

  //sfondo blocco
  const block = document.querySelector('div.rounded');
  expect(block).toHaveClass('bg-primary');

  //sfondo bottone
  const button = document.querySelector('button.btn');
  expect(button).toHaveClass('btn-tertiary');
});
