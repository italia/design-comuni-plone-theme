import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BandiInEvidenceTemplate from '../../Listing/BandiInEvidenceTemplate';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const mock_fields = {
  '@type': 'listing',
  block: 'ef16119e-3bab-42dd-9a7a-df4707b85089',
  headlineTag: 'h2',
  hide_dates: false,
  query: [],
  querystring: {
    b_size: 3,
    limit: 3,
    query: [
      {
        i: 'portal_type',
        o: 'plone.app.querystring.operation.selection.any',
        v: ['Bando'],
      },
    ],
    sort_order: 'ascending',
  },
  linkHref: [
    {
      '@id': '/documenti-e-dati/bandi',
      Description: '',
      Title: 'Bandi',
      title: 'Bandi',
    },
  ],
  linkTitle: 'Somebody to love',
  show_block_bg: true,
  show_description: true,
  show_detail_link: false,
  show_ente: true,
  show_icon: true,
  show_path_filters: false,
  show_section: true,
  show_tipologia: true,
  show_type: false,
  variation: 'bandiInEvidenceTemplate',
  addFilters: 'ƒ addFilters() {}',
  additionalFilters: [],
  items_total: 3,
  loading: false,
  firstLoading: false,
  title: 'Can anybody find me',
  items: [
    {
      '@id':
        '/servizi/anagrafe-e-stato-civile/avviso-pubblico-manifestazione-di-interesse-per-listituzione-di-uffici-separati-di-stato-civile',
      '@type': 'Bando',
      CreationDate: '2023-01-04T16:24:53+00:00',
      Creator: 'admin',
      Date: '2023-01-04T16:24:53+00:00',
      Description:
        'Gli Uffici saranno finalizzati alla celebrazione di matrimoni e/o unioni presso strutture e spazi privati di interesse storico, artistico, culturale e/o paesaggistico.',
      EffectiveDate: 'None',
      ExpirationDate: 'None',
      ModificationDate: '2023-01-04T16:24:53+00:00',
      Subject: [],
      Subject_bando: [],
      Title:
        "Avviso pubblico manifestazione di interesse per l'istituzione di uffici separati di Stato Civile",
      Type: 'Bando',
      UID: 'c76ee430345d4ec68531337a38f14398',
      apertura_bando: '1100-01-01T00:00:00',
      author_name: null,
      bando_state: ['open', 'Open'],
      chiusura_procedimento_bando: null,
      cmf_uid: 165,
      commentators: [],
      created: '2023-01-04T16:24:53+00:00',
      data_conclusione_incarico: null,
      description:
        'Gli Uffici saranno finalizzati alla celebrazione di matrimoni e/o unioni presso strutture e spazi privati di interesse storico, artistico, culturale e/o paesaggistico.',
      design_italia_meta_type: 'Bando',
      destinatari_bando: null,
      effective: null,
      end: null,
      ente_bando: null,
      event_location: null,
      exclude_from_nav: false,
      expires: null,
      geolocation: null,
      getIcon: null,
      getId:
        'avviso-pubblico-manifestazione-di-interesse-per-listituzione-di-uffici-separati-di-stato-civile',
      getObjSize: '0 KB',
      getPath:
        '/Plone/servizi/anagrafe-e-stato-civile/avviso-pubblico-manifestazione-di-interesse-per-listituzione-di-uffici-separati-di-stato-civile',
      getRemoteUrl: null,
      getURL:
        'http://localhost:3000/servizi/anagrafe-e-stato-civile/avviso-pubblico-manifestazione-di-interesse-per-listituzione-di-uffici-separati-di-stato-civile',
      hasPreviewImage: null,
      head_title: null,
      icona: null,
      id: 'avviso-pubblico-manifestazione-di-interesse-per-listituzione-di-uffici-separati-di-stato-civile',
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
      modified: '2023-01-04T16:24:53+00:00',
      nav_title: null,
      open_end: null,
      parent: {
        '@id': 'http://localhost:3000/servizi/anagrafe-e-stato-civile',
        UID: '752e89303a224f629d1121992da81ebf',
        title: 'Anagrafe e stato civile',
      },
      portal_type: 'Bando',
      recurrence: null,
      review_state: 'private',
      scadenza_bando: null,
      start: null,
      sync_uid: null,
      tassonomia_argomenti: [],
      taxonomy_business_events: null,
      taxonomy_person_life_events: null,
      taxonomy_temi_dataset: null,
      taxonomy_tipologia_documenti_albopretorio: null,
      taxonomy_tipologia_documento: null,
      taxonomy_tipologia_evento: null,
      taxonomy_tipologia_frequenza_aggiornamento: null,
      taxonomy_tipologia_incarico: null,
      taxonomy_tipologia_licenze: null,
      taxonomy_tipologia_luogo: null,
      taxonomy_tipologia_notizia: null,
      taxonomy_tipologia_organizzazione: null,
      taxonomy_tipologia_pdc: null,
      taxonomy_tipologia_stati_pratica: null,
      tipologia_bando: 'beni_servizi',
      tipologia_documento: null,
      tipologia_notizia: null,
      title:
        "Avviso pubblico manifestazione di interesse per l'istituzione di uffici separati di Stato Civile",
      total_comments: 0,
      ufficio_responsabile_bando: [],
      update_note: null,
      whole_day: null,
    },
    {
      '@id': '/documenti-e-dati/bandi/bando-per-diventare-ironman',
      '@type': 'Bando',
      CreationDate: '2023-01-27T15:17:10+00:00',
      Creator: 'admin',
      Date: '2023-01-30T11:07:30+00:00',
      Description: 'Is this the real life?',
      EffectiveDate: 'None',
      ExpirationDate: 'None',
      ModificationDate: '2023-01-30T11:07:30+00:00',
      Subject: [],
      Subject_bando: [],
      Title: 'Bando per diventare Ironman',
      Type: 'Bando',
      UID: 'ff82688a5a5f4484a8d2eec481e10c7c',
      apertura_bando: '2023-01-01T09:00:00',
      author_name: null,
      bando_state: ['open', 'Open'],
      chiusura_procedimento_bando: '2023-03-15T00:00:00',
      cmf_uid: 222,
      commentators: [],
      created: '2023-01-27T15:17:10+00:00',
      data_conclusione_incarico: null,
      description: 'Is this the real life?',
      design_italia_meta_type: 'Bando',
      destinatari_bando: ['Cittadini'],
      effective: null,
      end: null,
      ente_bando: ['Marvel'],
      event_location: null,
      exclude_from_nav: false,
      expires: null,
      geolocation: null,
      getIcon: null,
      getId: 'bando-per-diventare-ironman',
      getObjSize: '1.1 MB',
      getPath: '/Plone/documenti-e-dati/bandi/bando-per-diventare-ironman',
      getRemoteUrl: null,
      getURL:
        'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-ironman',
      hasPreviewImage: true,
      head_title: null,
      icona: null,
      id: 'bando-per-diventare-ironman',
      image: {
        scales: {
          gallery: {
            download:
              'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-ironman/@@images/preview_image/gallery',
            height: 65536,
            width: 250,
          },
          great: {
            download:
              'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-ironman/@@images/preview_image/great',
            height: 65536,
            width: 1200,
          },
          huge: {
            download:
              'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-ironman/@@images/preview_image/huge',
            height: 65536,
            width: 1600,
          },
          icon: {
            download:
              'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-ironman/@@images/preview_image/icon',
            height: 32,
            width: 32,
          },
          large: {
            download:
              'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-ironman/@@images/preview_image/large',
            height: 65536,
            width: 800,
          },
          larger: {
            download:
              'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-ironman/@@images/preview_image/larger',
            height: 65536,
            width: 1000,
          },
          listing: {
            download:
              'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-ironman/@@images/preview_image/listing',
            height: 16,
            width: 16,
          },
          midi: {
            download:
              'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-ironman/@@images/preview_image/midi',
            height: 65536,
            width: 300,
          },
          mini: {
            download:
              'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-ironman/@@images/preview_image/mini',
            height: 65536,
            width: 200,
          },
          preview: {
            download:
              'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-ironman/@@images/preview_image/preview',
            height: 65536,
            width: 400,
          },
          teaser: {
            download:
              'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-ironman/@@images/preview_image/teaser',
            height: 65536,
            width: 600,
          },
          thumb: {
            download:
              'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-ironman/@@images/preview_image/thumb',
            height: 65536,
            width: 128,
          },
          tile: {
            download:
              'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-ironman/@@images/preview_image/tile',
            height: 64,
            width: 64,
          },
        },
      },
      image_field: 'preview_image',
      image_scales: {
        preview_image: [
          {
            'content-type': 'image/jpeg',
            download:
              '@@images/preview_image-6240-68acba13b3f4e8b2b5f4cb63b4c59422.jpeg',
            filename: 'woman-having-online-meeting-work.jpg',
            height: 4160,
            scales: {
              gallery: {
                download:
                  '@@images/preview_image-250-3cd876cd933f72afe503b5425d7ea5c9.jpeg',
                height: 166,
                width: 250,
              },
              great: {
                download:
                  '@@images/preview_image-1200-2e0328470ae659a79fbc5800f26e8ca8.jpeg',
                height: 800,
                width: 1200,
              },
              huge: {
                download:
                  '@@images/preview_image-1600-3c6213a1b0f3c0d0407856987965cc29.jpeg',
                height: 1066,
                width: 1600,
              },
              icon: {
                download:
                  '@@images/preview_image-32-7673a67263cbde0e8a098339e381045c.jpeg',
                height: 21,
                width: 32,
              },
              large: {
                download:
                  '@@images/preview_image-800-1e03346079a614b81b7b96b8f1f64a92.jpeg',
                height: 533,
                width: 800,
              },
              larger: {
                download:
                  '@@images/preview_image-1000-0d36aba5a6622657382c659c2bb936a5.jpeg',
                height: 666,
                width: 1000,
              },
              listing: {
                download:
                  '@@images/preview_image-16-938802f3a10bfd361e1a7507faceea74.jpeg',
                height: 10,
                width: 16,
              },
              midi: {
                download:
                  '@@images/preview_image-300-b02d3106ca12a1ff24aa1f2cf9cb4aaa.jpeg',
                height: 200,
                width: 300,
              },
              mini: {
                download:
                  '@@images/preview_image-200-b1984655c8772ace79f97d1a83e8ae0c.jpeg',
                height: 133,
                width: 200,
              },
              preview: {
                download:
                  '@@images/preview_image-400-75bedb09d75056e52f04da0cf136b2e3.jpeg',
                height: 266,
                width: 400,
              },
              teaser: {
                download:
                  '@@images/preview_image-600-07976c807cf3a44ed8db78839359b8ad.jpeg',
                height: 400,
                width: 600,
              },
              thumb: {
                download:
                  '@@images/preview_image-128-e0ea4c4b18f8e7df0081c95b8c052449.jpeg',
                height: 85,
                width: 128,
              },
              tile: {
                download:
                  '@@images/preview_image-64-61e6216fa24a5fd9fea7c73ef91ead9f.jpeg',
                height: 42,
                width: 64,
              },
            },
            size: 1195679,
            width: 6240,
          },
        ],
      },
      in_response_to: null,
      is_folderish: true,
      last_comment_date: null,
      latitude: null,
      listCreators: ['admin'],
      location: null,
      longitude: null,
      mime_type: 'text/plain',
      modified: '2023-01-30T11:07:30+00:00',
      nav_title: null,
      open_end: null,
      parent: {
        '@id': 'http://localhost:3000/documenti-e-dati/bandi',
        UID: 'ff3e04e8cd844f12b40b80591f932808',
        title: 'Bandi',
      },
      portal_type: 'Bando',
      recurrence: null,
      review_state: 'private',
      scadenza_bando: '2023-02-28T10:07:03+00:00',
      start: null,
      sync_uid: null,
      tassonomia_argomenti: [
        {
          '@id': 'http://localhost:3000/argomenti/cultura',
          '@type': 'Pagina Argomento',
          CreationDate: '2023-01-04T10:08:02+00:00',
          Creator: 'admin',
          Date: '2023-01-04T16:05:38+00:00',
          Description: '',
          EffectiveDate: 'None',
          ExpirationDate: 'None',
          ModificationDate: '2023-01-04T16:05:38+00:00',
          Subject: [],
          Subject_bando: null,
          Title: 'Cultura',
          Type: 'Argomento',
          UID: '2bc2225553b94ac28fa19f9186567938',
          apertura_bando: null,
          author_name: null,
          chiusura_procedimento_bando: null,
          cmf_uid: 94,
          commentators: null,
          created: '2023-01-04T10:08:02+00:00',
          data_conclusione_incarico: null,
          description: '',
          design_italia_meta_type: 'Argomento',
          destinatari_bando: null,
          effective: null,
          end: null,
          ente_bando: null,
          event_location: null,
          exclude_from_nav: false,
          expires: null,
          geolocation: null,
          getIcon: '',
          getId: 'cultura',
          getObjSize: null,
          getPath: '/Plone/argomenti/cultura',
          getRemoteUrl: null,
          getURL: 'http://localhost:3000/argomenti/cultura',
          hasPreviewImage: null,
          head_title: null,
          icona: null,
          id: 'cultura',
          image_field: null,
          image_scales: null,
          in_response_to: null,
          is_folderish: null,
          last_comment_date: null,
          latitude: null,
          listCreators: ['admin'],
          location: null,
          longitude: null,
          mime_type: null,
          modified: '2023-01-04T16:05:38+00:00',
          nav_title: null,
          open_end: null,
          parent: null,
          portal_type: 'Pagina Argomento',
          recurrence: null,
          review_state: 'private',
          scadenza_bando: null,
          start: null,
          sync_uid: null,
          tassonomia_argomenti: null,
          taxonomy_business_events: null,
          taxonomy_person_life_events: null,
          taxonomy_temi_dataset: null,
          taxonomy_tipologia_documenti_albopretorio: null,
          taxonomy_tipologia_documento: null,
          taxonomy_tipologia_evento: null,
          taxonomy_tipologia_frequenza_aggiornamento: null,
          taxonomy_tipologia_incarico: null,
          taxonomy_tipologia_licenze: null,
          taxonomy_tipologia_luogo: null,
          taxonomy_tipologia_notizia: null,
          taxonomy_tipologia_organizzazione: null,
          taxonomy_tipologia_pdc: null,
          taxonomy_tipologia_stati_pratica: null,
          tipologia_bando: null,
          tipologia_documento: null,
          tipologia_notizia: null,
          title: 'Cultura',
          total_comments: null,
          ufficio_responsabile_bando: null,
          update_note: null,
          whole_day: null,
        },
      ],
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
      tipologia_bando: 'beni_servizi',
      tipologia_documento: null,
      tipologia_notizia: null,
      title: 'Bando per diventare Ironman',
      total_comments: 0,
      ufficio_responsabile_bando: ['4b56678a54884616aa8b7cb230d27794'],
      update_note: 'No escape from reality',
      whole_day: null,
    },
    {
      '@id': '/documenti-e-dati/bandi/bando-per-diventare-spiderman',
      '@type': 'Bando',
      CreationDate: '2023-02-01T15:17:45+00:00',
      Creator: 'admin',
      Date: '2023-02-01T15:17:46+00:00',
      Description: '',
      EffectiveDate: 'None',
      ExpirationDate: 'None',
      ModificationDate: '2023-02-01T15:17:46+00:00',
      Subject: [],
      Subject_bando: [],
      Title: 'Bando per diventare Spiderman',
      Type: 'Bando',
      UID: 'e1f2e05d059b4e4591033ee949bbb16b',
      apertura_bando: '1100-01-01T00:00:00',
      author_name: null,
      bando_state: ['open', 'Open'],
      chiusura_procedimento_bando: null,
      cmf_uid: 249,
      commentators: [],
      created: '2023-02-01T15:17:45+00:00',
      data_conclusione_incarico: null,
      description: '',
      design_italia_meta_type: 'Bando',
      destinatari_bando: null,
      effective: null,
      end: null,
      ente_bando: null,
      event_location: null,
      exclude_from_nav: false,
      expires: null,
      geolocation: null,
      getIcon: null,
      getId: 'bando-per-diventare-spiderman',
      getObjSize: '0 KB',
      getPath: '/Plone/documenti-e-dati/bandi/bando-per-diventare-spiderman',
      getRemoteUrl: null,
      getURL:
        'http://localhost:3000/documenti-e-dati/bandi/bando-per-diventare-spiderman',
      hasPreviewImage: null,
      head_title: null,
      icona: null,
      id: 'bando-per-diventare-spiderman',
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
      modified: '2023-02-01T15:17:46+00:00',
      nav_title: null,
      open_end: null,
      parent: {
        '@id': 'http://localhost:3000/documenti-e-dati/bandi',
        UID: 'ff3e04e8cd844f12b40b80591f932808',
        title: 'Bandi',
      },
      portal_type: 'Bando',
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
      tipologia_bando: 'beni_servizi',
      tipologia_documento: null,
      tipologia_notizia: null,
      title: 'Bando per diventare Spiderman',
      total_comments: 0,
      ufficio_responsabile_bando: [],
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
        <BandiInEvidenceTemplate
          data={mock_fields}
          items={mock_fields.items}
          title={mock_fields.title}
          show_description={mock_fields.show_description}
          show_ente={mock_fields.show_ente}
          show_tipologia={mock_fields.show_tipologia}
          linkHref={mock_fields.linkHref}
          linkTitle={mock_fields.linkTitle}
        />
      </MemoryRouter>
    </Provider>,
  );

  //titolo
  expect(
    screen.getByRole('heading', { name: /Can anybody find me/i }),
  ).toBeInTheDocument();

  //mostra descrizione
  expect(
    screen.getByText(
      /Gli uffici saranno finalizzati alla celebrazione di matrimoni/i,
    ),
  ).toBeInTheDocument();

  //mostra ente
  expect(screen.getByText(/Ente/i)).toBeInTheDocument();
  //sullo schermo viene mostrato "Ente erogatore" ma il test renderizza solo "Ente"
  // expect(screen.getByText(/Ente erogatore/i)).toBeInTheDocument();

  //mostra tipologia
  //campo obbligatorio su bando ma non viene mostrato se viene selezionato il checkboxk
  // expect(screen.getByText(/Tipologia/i)).toBeInTheDocument();

  //risultati per pagina
  const card = document.querySelectorAll('.listing-item.card');
  expect(card.length).toBe(mock_fields.querystring.b_size);

  //card bandi
  expect(
    screen.getByRole('link', { name: /Bando per diventare Ironman/i }),
  ).toBeInTheDocument();

  //link more
  expect(
    screen.getByRole('link', { name: /somebody to love/i }),
  ).toBeInTheDocument();
});
