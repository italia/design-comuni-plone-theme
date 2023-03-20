import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CardWithSlideUpTextTemplate from '../../Listing/CardWithSlideUpTextTemplate';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const mock_fields = {
  items: [
    {
      '@id': '/notizie/sport-nel-verde-le-iniziative-della-prossima-edizione',
      '@type': 'News Item',
      CreationDate: '2023-01-03T15:29:10+00:00',
      Creator: 'admin',
      Date: '2022-05-18T16:29:00+00:00',
      Description:
        'Le informazioni per partecipare all’iniziativa rivolta a tutte le fasce d’età per promuovere l’attività motoria nelle aree verdi della città.',
      EffectiveDate: '2022-05-18T16:29:00+00:00',
      ExpirationDate: 'None',
      ModificationDate: '2023-01-19T12:04:48+00:00',
      Subject: [],
      Subject_bando: null,
      Title: 'Sport nel verde: le iniziative della prossima edizione',
      Type: '\nNotizie e comunicati stampa',
      UID: 'acea00d12ebb475090ea0ddec52bea7b',
      apertura_bando: null,
      author_name: null,
      chiusura_procedimento_bando: null,
      cmf_uid: 10,
      commentators: [],
      created: '2023-01-03T15:29:10+00:00',
      data_conclusione_incarico: null,
      description:
        'Le informazioni per partecipare all’iniziativa rivolta a tutte le fasce d’età per promuovere l’attività motoria nelle aree verdi della città.',
      design_italia_meta_type: 'Notizia',
      destinatari_bando: null,
      effective: '2022-05-18T16:29:00+00:00',
      end: null,
      ente_bando: null,
      event_location: null,
      exclude_from_nav: false,
      expires: null,
      geolocation: null,
      getIcon: true,
      getId: 'sport-nel-verde-le-iniziative-della-prossima-edizione',
      getObjSize: '3.9 MB',
      getPath:
        '/Plone/notizie/sport-nel-verde-le-iniziative-della-prossima-edizione',
      getRemoteUrl: null,
      getURL:
        'http://localhost:3000/notizie/sport-nel-verde-le-iniziative-della-prossima-edizione',
      hasPreviewImage: true,
      head_title: null,
      icona: null,
      id: 'sport-nel-verde-le-iniziative-della-prossima-edizione',
      image: {
        scales: {
          gallery: {
            download:
              'http://localhost:3000/notizie/sport-nel-verde-le-iniziative-della-prossima-edizione/@@images/preview_image/gallery',
            height: 65536,
            width: 250,
          },
          great: {
            download:
              'http://localhost:3000/notizie/sport-nel-verde-le-iniziative-della-prossima-edizione/@@images/preview_image/great',
            height: 65536,
            width: 1200,
          },
          huge: {
            download:
              'http://localhost:3000/notizie/sport-nel-verde-le-iniziative-della-prossima-edizione/@@images/preview_image/huge',
            height: 65536,
            width: 1600,
          },
          icon: {
            download:
              'http://localhost:3000/notizie/sport-nel-verde-le-iniziative-della-prossima-edizione/@@images/preview_image/icon',
            height: 32,
            width: 32,
          },
          large: {
            download:
              'http://localhost:3000/notizie/sport-nel-verde-le-iniziative-della-prossima-edizione/@@images/preview_image/large',
            height: 65536,
            width: 800,
          },
          larger: {
            download:
              'http://localhost:3000/notizie/sport-nel-verde-le-iniziative-della-prossima-edizione/@@images/preview_image/larger',
            height: 65536,
            width: 1000,
          },
          listing: {
            download:
              'http://localhost:3000/notizie/sport-nel-verde-le-iniziative-della-prossima-edizione/@@images/preview_image/listing',
            height: 16,
            width: 16,
          },
          midi: {
            download:
              'http://localhost:3000/notizie/sport-nel-verde-le-iniziative-della-prossima-edizione/@@images/preview_image/midi',
            height: 65536,
            width: 300,
          },
          mini: {
            download:
              'http://localhost:3000/notizie/sport-nel-verde-le-iniziative-della-prossima-edizione/@@images/preview_image/mini',
            height: 65536,
            width: 200,
          },
          preview: {
            download:
              'http://localhost:3000/notizie/sport-nel-verde-le-iniziative-della-prossima-edizione/@@images/preview_image/preview',
            height: 65536,
            width: 400,
          },
          teaser: {
            download:
              'http://localhost:3000/notizie/sport-nel-verde-le-iniziative-della-prossima-edizione/@@images/preview_image/teaser',
            height: 65536,
            width: 600,
          },
          thumb: {
            download:
              'http://localhost:3000/notizie/sport-nel-verde-le-iniziative-della-prossima-edizione/@@images/preview_image/thumb',
            height: 65536,
            width: 128,
          },
          tile: {
            download:
              'http://localhost:3000/notizie/sport-nel-verde-le-iniziative-della-prossima-edizione/@@images/preview_image/tile',
            height: 64,
            width: 64,
          },
        },
      },
      image_field: 'preview_image',
      image_scales: {
        image: [
          {
            'content-type': 'image/jpeg',
            download:
              '@@images/image-5184-f5098a6120bf6d77120ade51613b2421.jpeg',
            filename: 'national-cancer-institute.jpeg',
            height: 3456,
            scales: {
              gallery: {
                download:
                  '@@images/image-250-49e5f5fa9627f9d116e937bd76654091.jpeg',
                height: 166,
                width: 250,
              },
              great: {
                download:
                  '@@images/image-1200-920af22d3d8bf83ea467faf60f9d1888.jpeg',
                height: 800,
                width: 1200,
              },
              huge: {
                download:
                  '@@images/image-1600-20c3c7b9940aabb51143abaa6e0e50a3.jpeg',
                height: 1066,
                width: 1600,
              },
              icon: {
                download:
                  '@@images/image-32-82fdf55155a2dd6ea29d4467222f2392.jpeg',
                height: 21,
                width: 32,
              },
              large: {
                download:
                  '@@images/image-800-6348765c039dd3268da9c9d829e7ec19.jpeg',
                height: 533,
                width: 800,
              },
              larger: {
                download:
                  '@@images/image-1000-e09f88650a7cbc0da9d4736b6d0d952c.jpeg',
                height: 666,
                width: 1000,
              },
              listing: {
                download:
                  '@@images/image-16-c6380d7d7b8b4afd993b24ac200bc230.jpeg',
                height: 10,
                width: 16,
              },
              midi: {
                download:
                  '@@images/image-300-8d4e411695d01225d8c6be3993ec3c30.jpeg',
                height: 200,
                width: 300,
              },
              mini: {
                download:
                  '@@images/image-200-14acaa28232fb3c8309da5c5f7933e1e.jpeg',
                height: 133,
                width: 200,
              },
              preview: {
                download:
                  '@@images/image-400-6e346e702da96058e48158d271e7043b.jpeg',
                height: 266,
                width: 400,
              },
              teaser: {
                download:
                  '@@images/image-600-3975f8c82120189ece436677f5b3e6a9.jpeg',
                height: 400,
                width: 600,
              },
              thumb: {
                download:
                  '@@images/image-128-f6ce4305a76b4511e1e10c50a1c1b4da.jpeg',
                height: 85,
                width: 128,
              },
              tile: {
                download:
                  '@@images/image-64-19669a6cef991ed40ef389ceb5da32fd.jpeg',
                height: 42,
                width: 64,
              },
            },
            size: 2026538,
            width: 5184,
          },
        ],
        preview_image: [
          {
            'content-type': 'image/jpeg',
            download:
              '@@images/preview_image-5184-3c6c2e4f0b75f9365405305f562fd0da.jpeg',
            filename: 'national-cancer-institute.jpeg',
            height: 3456,
            scales: {
              gallery: {
                download:
                  '@@images/preview_image-250-785408520e6d7b9d05af2fedfee78d2a.jpeg',
                height: 166,
                width: 250,
              },
              great: {
                download:
                  '@@images/preview_image-1200-d3de0810040f56632ddb5e9bbb96003b.jpeg',
                height: 800,
                width: 1200,
              },
              huge: {
                download:
                  '@@images/preview_image-1600-8ea0c1ee6cbde7232a7124d084c81a18.jpeg',
                height: 1066,
                width: 1600,
              },
              icon: {
                download:
                  '@@images/preview_image-32-d795572814924a541bee314c2c150084.jpeg',
                height: 21,
                width: 32,
              },
              large: {
                download:
                  '@@images/preview_image-800-8ab6a0ebc1f0a2385fb37c1d9849f9b4.jpeg',
                height: 533,
                width: 800,
              },
              larger: {
                download:
                  '@@images/preview_image-1000-427e67a155fac6e94a7a64a27f00a4dd.jpeg',
                height: 666,
                width: 1000,
              },
              listing: {
                download:
                  '@@images/preview_image-16-12a9a305b32c8dd7ccccccb73dcf187a.jpeg',
                height: 10,
                width: 16,
              },
              midi: {
                download:
                  '@@images/preview_image-300-ca5dac141c26dbfeda9ba058c401f76d.jpeg',
                height: 200,
                width: 300,
              },
              mini: {
                download:
                  '@@images/preview_image-200-3f6749e2cdff7873580b38b38f8fe5cf.jpeg',
                height: 133,
                width: 200,
              },
              preview: {
                download:
                  '@@images/preview_image-400-7973bb70be8915dd5731c5872144c2fc.jpeg',
                height: 266,
                width: 400,
              },
              teaser: {
                download:
                  '@@images/preview_image-600-6f040ff8785b40296d1148a89821f4f7.jpeg',
                height: 400,
                width: 600,
              },
              thumb: {
                download:
                  '@@images/preview_image-128-23aec0db095cf60152ee0eead83433d7.jpeg',
                height: 85,
                width: 128,
              },
              tile: {
                download:
                  '@@images/preview_image-64-da2dbe6b589040648dd782cc4196fb25.jpeg',
                height: 42,
                width: 64,
              },
            },
            size: 2026538,
            width: 5184,
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
      modified: '2023-01-19T12:04:48+00:00',
      nav_title: null,
      open_end: null,
      parent: {
        '@id': 'http://localhost:8080/Plone/notizie',
        UID: 'c68bc16e610e4a41a8a2578588298253',
        title: 'Notizie',
      },
      portal_type: 'News Item',
      recurrence: null,
      review_state: 'published',
      scadenza_bando: null,
      start: null,
      sync_uid: null,
      tassonomia_argomenti: [
        {
          '@id': 'http://localhost:3000/argomenti/sport',
          '@type': 'Pagina Argomento',
          CreationDate: '2023-01-03T15:22:39+00:00',
          Creator: 'admin',
          Date: '2023-01-26T11:36:08+00:00',
          Description:
            'Informazioni su eventi sportivi, impianti comunali, servizi dedicati allo sport',
          EffectiveDate: 'None',
          ExpirationDate: 'None',
          ModificationDate: '2023-01-26T11:36:08+00:00',
          Subject: [],
          Subject_bando: null,
          Title: 'Sport',
          Type: 'Argomento',
          UID: '90e54807ffe444f09fd59725fbfc557c',
          apertura_bando: null,
          author_name: null,
          chiusura_procedimento_bando: null,
          cmf_uid: 3,
          commentators: null,
          created: '2023-01-03T15:22:39+00:00',
          data_conclusione_incarico: null,
          description:
            'Informazioni su eventi sportivi, impianti comunali, servizi dedicati allo sport',
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
          getId: 'sport',
          getObjSize: null,
          getPath: '/Plone/argomenti/sport',
          getRemoteUrl: null,
          getURL: 'http://localhost:3000/argomenti/sport',
          hasPreviewImage: null,
          head_title: null,
          icona: 'child',
          id: 'sport',
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
          modified: '2023-01-26T11:36:08+00:00',
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
          title: 'Sport',
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
      tipologia_bando: null,
      tipologia_documento: null,
      tipologia_notizia: 'Notizia',
      title: 'Sport nel verde: le iniziative della prossima edizione',
      total_comments: 0,
      ufficio_responsabile_bando: null,
      update_note: null,
      whole_day: null,
    },
    {
      '@id': '/notizie/chiusa-per-ristrutturazione-la-piscina-minghetti',
      '@type': 'News Item',
      CreationDate: '2023-01-03T15:41:56+00:00',
      Creator: 'admin',
      Date: '2023-01-19T12:04:48+00:00',
      Description:
        'Partiti i lavori per l’adeguamento dell’impianto. La riapertura è prevista per giugno 2023.',
      EffectiveDate: 'None',
      ExpirationDate: 'None',
      ModificationDate: '2023-01-19T12:04:48+00:00',
      Subject: [],
      Subject_bando: null,
      Title: 'Chiusa per ristrutturazione la piscina Minghetti',
      Type: '\nNotizie e comunicati stampa',
      UID: '5c242d48e4d04e5caed192c213d9b5e7',
      apertura_bando: null,
      author_name: null,
      chiusura_procedimento_bando: null,
      cmf_uid: 18,
      commentators: [],
      created: '2023-01-03T15:41:56+00:00',
      data_conclusione_incarico: null,
      description:
        'Partiti i lavori per l’adeguamento dell’impianto. La riapertura è prevista per giugno 2023.',
      design_italia_meta_type: 'avviso',
      destinatari_bando: null,
      effective: null,
      end: null,
      ente_bando: null,
      event_location: null,
      exclude_from_nav: false,
      expires: null,
      geolocation: null,
      getIcon: false,
      getId: 'chiusa-per-ristrutturazione-la-piscina-minghetti',
      getObjSize: '0 KB',
      getPath:
        '/Plone/notizie/chiusa-per-ristrutturazione-la-piscina-minghetti',
      getRemoteUrl: null,
      getURL:
        'http://localhost:3000/notizie/chiusa-per-ristrutturazione-la-piscina-minghetti',
      hasPreviewImage: null,
      head_title: null,
      icona: null,
      id: 'chiusa-per-ristrutturazione-la-piscina-minghetti',
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
      modified: '2023-01-19T12:04:48+00:00',
      nav_title: null,
      open_end: null,
      parent: {
        '@id': 'http://localhost:8080/Plone/notizie',
        UID: 'c68bc16e610e4a41a8a2578588298253',
        title: 'Notizie',
      },
      portal_type: 'News Item',
      recurrence: null,
      review_state: 'private',
      scadenza_bando: null,
      start: null,
      sync_uid: null,
      tassonomia_argomenti: [
        {
          '@id': 'http://localhost:3000/argomenti/sport',
          '@type': 'Pagina Argomento',
          CreationDate: '2023-01-03T15:22:39+00:00',
          Creator: 'admin',
          Date: '2023-01-26T11:36:08+00:00',
          Description:
            'Informazioni su eventi sportivi, impianti comunali, servizi dedicati allo sport',
          EffectiveDate: 'None',
          ExpirationDate: 'None',
          ModificationDate: '2023-01-26T11:36:08+00:00',
          Subject: [],
          Subject_bando: null,
          Title: 'Sport',
          Type: 'Argomento',
          UID: '90e54807ffe444f09fd59725fbfc557c',
          apertura_bando: null,
          author_name: null,
          chiusura_procedimento_bando: null,
          cmf_uid: 3,
          commentators: null,
          created: '2023-01-03T15:22:39+00:00',
          data_conclusione_incarico: null,
          description:
            'Informazioni su eventi sportivi, impianti comunali, servizi dedicati allo sport',
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
          getId: 'sport',
          getObjSize: null,
          getPath: '/Plone/argomenti/sport',
          getRemoteUrl: null,
          getURL: 'http://localhost:3000/argomenti/sport',
          hasPreviewImage: null,
          head_title: null,
          icona: 'child',
          id: 'sport',
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
          modified: '2023-01-26T11:36:08+00:00',
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
          title: 'Sport',
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
      tipologia_bando: null,
      tipologia_documento: null,
      tipologia_notizia: 'avviso',
      title: 'Chiusa per ristrutturazione la piscina Minghetti',
      total_comments: 0,
      ufficio_responsabile_bando: null,
      update_note: null,
      whole_day: null,
    },
    {
      '@id': '/novita/notizie/osservatorio-sul-turismo',
      '@type': 'News Item',
      CreationDate: '2023-01-04T10:08:46+00:00',
      Creator: 'admin',
      Date: '2019-12-03T11:09:00+00:00',
      Description:
        'Donec in consequat nunc. Duis semper fermentum lacus, ac condimentum justo auctor a. Nam erat erat, porta vel pharetra in, ullamcorper vel turpis.',
      EffectiveDate: '2019-12-03T11:09:00+00:00',
      ExpirationDate: 'None',
      ModificationDate: '2023-01-19T12:04:48+00:00',
      Subject: [],
      Subject_bando: null,
      Title: 'Osservatorio sul turismo',
      Type: '\nNotizie e comunicati stampa',
      UID: '47289573edbc4a5087eea97d01a6c8bc',
      apertura_bando: null,
      author_name: null,
      chiusura_procedimento_bando: null,
      cmf_uid: 97,
      commentators: [],
      created: '2023-01-04T10:08:46+00:00',
      data_conclusione_incarico: null,
      description:
        'Donec in consequat nunc. Duis semper fermentum lacus, ac condimentum justo auctor a. Nam erat erat, porta vel pharetra in, ullamcorper vel turpis.',
      design_italia_meta_type: 'Notizia',
      destinatari_bando: null,
      effective: '2019-12-03T11:09:00+00:00',
      end: null,
      ente_bando: null,
      event_location: null,
      exclude_from_nav: false,
      expires: null,
      geolocation: null,
      getIcon: true,
      getId: 'osservatorio-sul-turismo',
      getObjSize: '2.5 MB',
      getPath: '/Plone/novita/notizie/osservatorio-sul-turismo',
      getRemoteUrl: null,
      getURL: 'http://localhost:3000/novita/notizie/osservatorio-sul-turismo',
      hasPreviewImage: true,
      head_title: null,
      icona: null,
      id: 'osservatorio-sul-turismo',
      image: {
        scales: {
          gallery: {
            download:
              'http://localhost:3000/novita/notizie/osservatorio-sul-turismo/@@images/preview_image/gallery',
            height: 65536,
            width: 250,
          },
          great: {
            download:
              'http://localhost:3000/novita/notizie/osservatorio-sul-turismo/@@images/preview_image/great',
            height: 65536,
            width: 1200,
          },
          huge: {
            download:
              'http://localhost:3000/novita/notizie/osservatorio-sul-turismo/@@images/preview_image/huge',
            height: 65536,
            width: 1600,
          },
          icon: {
            download:
              'http://localhost:3000/novita/notizie/osservatorio-sul-turismo/@@images/preview_image/icon',
            height: 32,
            width: 32,
          },
          large: {
            download:
              'http://localhost:3000/novita/notizie/osservatorio-sul-turismo/@@images/preview_image/large',
            height: 65536,
            width: 800,
          },
          larger: {
            download:
              'http://localhost:3000/novita/notizie/osservatorio-sul-turismo/@@images/preview_image/larger',
            height: 65536,
            width: 1000,
          },
          listing: {
            download:
              'http://localhost:3000/novita/notizie/osservatorio-sul-turismo/@@images/preview_image/listing',
            height: 16,
            width: 16,
          },
          midi: {
            download:
              'http://localhost:3000/novita/notizie/osservatorio-sul-turismo/@@images/preview_image/midi',
            height: 65536,
            width: 300,
          },
          mini: {
            download:
              'http://localhost:3000/novita/notizie/osservatorio-sul-turismo/@@images/preview_image/mini',
            height: 65536,
            width: 200,
          },
          preview: {
            download:
              'http://localhost:3000/novita/notizie/osservatorio-sul-turismo/@@images/preview_image/preview',
            height: 65536,
            width: 400,
          },
          teaser: {
            download:
              'http://localhost:3000/novita/notizie/osservatorio-sul-turismo/@@images/preview_image/teaser',
            height: 65536,
            width: 600,
          },
          thumb: {
            download:
              'http://localhost:3000/novita/notizie/osservatorio-sul-turismo/@@images/preview_image/thumb',
            height: 65536,
            width: 128,
          },
          tile: {
            download:
              'http://localhost:3000/novita/notizie/osservatorio-sul-turismo/@@images/preview_image/tile',
            height: 64,
            width: 64,
          },
        },
      },
      image_field: 'preview_image',
      image_scales: {
        image: [
          {
            'content-type': 'image/png',
            download:
              '@@images/image-1156-23a6d691013f38eef4da7c9070b860d5.png',
            filename: 'foto-ospedale.png',
            height: 940,
            scales: {
              gallery: {
                download:
                  '@@images/image-250-3f30dc5a4b324c2c81c729af40b7946a.png',
                height: 203,
                width: 250,
              },
              icon: {
                download:
                  '@@images/image-32-26f7b27a252798f783b662aa7e1cdb63.png',
                height: 26,
                width: 32,
              },
              large: {
                download:
                  '@@images/image-800-1b51f5a02768c18c02eb317738eee4a2.png',
                height: 650,
                width: 800,
              },
              larger: {
                download:
                  '@@images/image-1000-cd7ea607a71d3ffa94c5b612317bcfc2.png',
                height: 813,
                width: 1000,
              },
              listing: {
                download:
                  '@@images/image-16-45bfce0601794216b233cbf5615d4d1d.png',
                height: 13,
                width: 16,
              },
              midi: {
                download:
                  '@@images/image-300-3800583f32decd4246ffa329d0d934b6.png',
                height: 243,
                width: 300,
              },
              mini: {
                download:
                  '@@images/image-200-4592c49fa47d209224518c591edcd956.png',
                height: 162,
                width: 200,
              },
              preview: {
                download:
                  '@@images/image-400-948d0d5f2676802a905c31469aa0744d.png',
                height: 325,
                width: 400,
              },
              teaser: {
                download:
                  '@@images/image-600-8fe093861a4edcbf0ff7b79220b5e838.png',
                height: 487,
                width: 600,
              },
              thumb: {
                download:
                  '@@images/image-128-41b926e6735616e649d55d747c9c36a2.png',
                height: 104,
                width: 128,
              },
              tile: {
                download:
                  '@@images/image-64-aae52bf50eb77e0e934256a6974037a0.png',
                height: 52,
                width: 64,
              },
            },
            size: 1296882,
            width: 1156,
          },
        ],
        preview_image: [
          {
            'content-type': 'image/png',
            download:
              '@@images/preview_image-1156-ec9dea8625d8a5dfeb472feeeaf2b569.png',
            filename: 'foto-ospedale.png',
            height: 940,
            scales: {
              gallery: {
                download:
                  '@@images/preview_image-250-4b13c28cf0aca436a602cd984d040a69.png',
                height: 203,
                width: 250,
              },
              icon: {
                download:
                  '@@images/preview_image-32-cccba83547d44ee65113371774a6e9b2.png',
                height: 26,
                width: 32,
              },
              large: {
                download:
                  '@@images/preview_image-800-1c9b8e39510a6ef2bbe0806cc7c1818d.png',
                height: 650,
                width: 800,
              },
              larger: {
                download:
                  '@@images/preview_image-1000-be8bb924f3892cd2319c2e8a4503e850.png',
                height: 813,
                width: 1000,
              },
              listing: {
                download:
                  '@@images/preview_image-16-d93ca5f96a5a3c8a554475e267ea332e.png',
                height: 13,
                width: 16,
              },
              midi: {
                download:
                  '@@images/preview_image-300-b3daa8b10d5c2edf34e0378e811fc002.png',
                height: 243,
                width: 300,
              },
              mini: {
                download:
                  '@@images/preview_image-200-1e874d5503c99c483643f1ef72e02dac.png',
                height: 162,
                width: 200,
              },
              preview: {
                download:
                  '@@images/preview_image-400-27fb29056f75dbdab8252011dc243cd1.png',
                height: 325,
                width: 400,
              },
              teaser: {
                download:
                  '@@images/preview_image-600-967d14e77d8e5293d36c32ed24d2f908.png',
                height: 487,
                width: 600,
              },
              thumb: {
                download:
                  '@@images/preview_image-128-bcfbd8ee03a1e56a79ce1e557baec9ac.png',
                height: 104,
                width: 128,
              },
              tile: {
                download:
                  '@@images/preview_image-64-519a94460297b1ab1f06411fcec19842.png',
                height: 52,
                width: 64,
              },
            },
            size: 1296882,
            width: 1156,
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
      modified: '2023-01-19T12:04:48+00:00',
      nav_title: null,
      open_end: null,
      parent: {
        '@id': 'http://localhost:8080/Plone/novita/notizie',
        UID: 'e68b2da11b30468ba4b83807bc360c64',
        title: 'Notizie',
      },
      portal_type: 'News Item',
      recurrence: null,
      review_state: 'private',
      scadenza_bando: null,
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
        {
          '@id': 'http://localhost:3000/argomenti/muoversi',
          '@type': 'Pagina Argomento',
          CreationDate: '2023-01-04T10:08:11+00:00',
          Creator: 'admin',
          Date: '2023-01-04T16:06:09+00:00',
          Description: '',
          EffectiveDate: 'None',
          ExpirationDate: 'None',
          ModificationDate: '2023-01-04T16:06:09+00:00',
          Subject: [],
          Subject_bando: null,
          Title: 'Muoversi',
          Type: 'Argomento',
          UID: '8e2091fa73c74822ac3533aa71cef981',
          apertura_bando: null,
          author_name: null,
          chiusura_procedimento_bando: null,
          cmf_uid: 95,
          commentators: null,
          created: '2023-01-04T10:08:11+00:00',
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
          getId: 'muoversi',
          getObjSize: null,
          getPath: '/Plone/argomenti/muoversi',
          getRemoteUrl: null,
          getURL: 'http://localhost:3000/argomenti/muoversi',
          hasPreviewImage: null,
          head_title: null,
          icona: null,
          id: 'muoversi',
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
          modified: '2023-01-04T16:06:09+00:00',
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
          title: 'Muoversi',
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
      tipologia_bando: null,
      tipologia_documento: null,
      tipologia_notizia: 'Notizia',
      title: 'Osservatorio sul turismo',
      total_comments: 0,
      ufficio_responsabile_bando: null,
      update_note: null,
      whole_day: null,
    },
  ],
  isEditMode: true,
  headlineTag: 'h2',
  show_section: true,
  show_type: true,
  hide_dates: true,
  show_description: true,
  '@type': 'listing',
  block: '08472295-94aa-418b-aff6-961e4bfee02b',
  linkHref: [
    {
      '@id': '/novita',
      Description:
        'Tutte le novità comunali per i cittadini per restare aggiornati.',
      Title: 'Novità',
      title: 'Novità',
    },
  ],
  linkTitle: "I'll turn it inside out",
  query: [],
  querystring: {
    query: [
      {
        i: 'portal_type',
        o: 'plone.app.querystring.operation.selection.any',
        v: ['News Item'],
      },
    ],
    sort_order: 'ascending',
    limit: 3,
    b_size: 3,
  },
  show_detail_link: false,
  show_icon: true,
  show_path_filters: false,
  title: 'And the world',
  variation: 'cardSlideUpTextTemplate',
  additionalFilters: [],
  items_total: 3,
  loading: false,
  firstLoading: false,
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
        <CardWithSlideUpTextTemplate
          data={mock_fields}
          items={mock_fields.items}
          title={mock_fields.title}
          show_section={mock_fields.show_section}
          show_type={mock_fields.show_type}
          hide_dates={mock_fields.hide_dates}
          show_description={mock_fields.show_description}
          linkHref={mock_fields.linkHref}
          linkTitle={mock_fields.linkTitle}
        />
      </MemoryRouter>
    </Provider>,
  );

  // titolo
  expect(
    screen.getByRole('heading', {
      name: /And the world/i,
    }),
  ).toBeInTheDocument();

  // mostra la sezione
  expect(screen.getAllByText(/Notizie/i)).toHaveLength(mock_fields.items_total);

  // mostra il tipo
  expect(screen.getAllByText(/Notizia/i)).toBeTruthy();

  // nascondi le date
  // expect(screen.getByText('May 18, 2022')).not.toBeInTheDocument();

  // mostra descrizione
  expect(
    screen.getByText(
      /Le informazioni per partecipare all’iniziativa rivolta a tutte le fasce d’età per promuovere l’attività motoria nelle aree verdi della città./i,
    ),
  ).toBeInTheDocument();

  //risultati per pagina
  const card = document.querySelectorAll('.listing-item.box');
  expect(card.length).toBe(mock_fields.querystring.b_size);

  //link more
  expect(
    screen.getByRole('link', { name: /I'll turn it inside out/i }),
  ).toBeInTheDocument();
});
