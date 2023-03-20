import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SimpleCardTemplate from '../../../Listing/SimpleCard/SimpleCardTemplate';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const mock_fields = {
  appearance: 'undefined',
  items: [
    {
      '@id': '/eventi/torneo-di-beneficienza-tutti-in-pista',
      '@type': 'Event',
      CreationDate: '2023-01-03T15:39:57+00:00',
      Creator: 'admin',
      Date: '2023-01-03T15:40:33+00:00',
      Description:
        'Dal 2 al 3 giugno torna il torneo di beneficienza “Tutti in pista”. La raccolta fondi finanzierà progetti sportivi per ragazzi e ragazze.',
      EffectiveDate: '2023-01-03T15:40:33+00:00',
      ExpirationDate: 'None',
      ModificationDate: '2023-01-03T15:40:33+00:00',
      Subject: [],
      Subject_bando: null,
      Title: 'Torneo di beneficienza "Tutti in pista"',
      Type: 'Evento',
      UID: 'c9443cc746ba49c4adda298ad0080643',
      apertura_bando: null,
      author_name: null,
      chiusura_procedimento_bando: null,
      cmf_uid: 14,
      commentators: [],
      created: '2023-01-03T15:39:57+00:00',
      data_conclusione_incarico: null,
      description:
        'Dal 2 al 3 giugno torna il torneo di beneficienza “Tutti in pista”. La raccolta fondi finanzierà progetti sportivi per ragazzi e ragazze.',
      design_italia_meta_type: 'Evento',
      destinatari_bando: null,
      effective: '2023-01-03T15:40:33+00:00',
      end: '2023-06-03T15:00:00+00:00',
      ente_bando: null,
      event_location: [],
      exclude_from_nav: false,
      expires: null,
      geolocation: null,
      getIcon: true,
      getId: 'torneo-di-beneficienza-tutti-in-pista',
      getObjSize: '3.9 MB',
      getPath: '/Plone/eventi/torneo-di-beneficienza-tutti-in-pista',
      getRemoteUrl: null,
      getURL:
        'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista',
      hasPreviewImage: true,
      head_title: null,
      icona: null,
      id: 'torneo-di-beneficienza-tutti-in-pista',
      image: {
        scales: {
          gallery: {
            download:
              'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/preview_image/gallery',
            height: 65536,
            width: 250,
          },
          great: {
            download:
              'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/preview_image/great',
            height: 65536,
            width: 1200,
          },
          huge: {
            download:
              'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/preview_image/huge',
            height: 65536,
            width: 1600,
          },
          icon: {
            download:
              'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/preview_image/icon',
            height: 32,
            width: 32,
          },
          large: {
            download:
              'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/preview_image/large',
            height: 65536,
            width: 800,
          },
          larger: {
            download:
              'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/preview_image/larger',
            height: 65536,
            width: 1000,
          },
          listing: {
            download:
              'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/preview_image/listing',
            height: 16,
            width: 16,
          },
          midi: {
            download:
              'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/preview_image/midi',
            height: 65536,
            width: 300,
          },
          mini: {
            download:
              'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/preview_image/mini',
            height: 65536,
            width: 200,
          },
          preview: {
            download:
              'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/preview_image/preview',
            height: 65536,
            width: 400,
          },
          teaser: {
            download:
              'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/preview_image/teaser',
            height: 65536,
            width: 600,
          },
          thumb: {
            download:
              'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/preview_image/thumb',
            height: 65536,
            width: 128,
          },
          tile: {
            download:
              'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/preview_image/tile',
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
              '@@images/image-5184-40c7eaa33c6c54aa29dedac49e94df89.jpeg',
            filename: 'national-cancer-institute.jpeg',
            height: 3456,
            scales: {
              gallery: {
                download:
                  '@@images/image-250-7b0e56e988604eea439fa33ffeb8550a.jpeg',
                height: 166,
                width: 250,
              },
              great: {
                download:
                  '@@images/image-1200-3ce6f15e8ecb14ff7f8cc2212ff8466f.jpeg',
                height: 800,
                width: 1200,
              },
              huge: {
                download:
                  '@@images/image-1600-0e8d74773520f196e3a3a024901c2459.jpeg',
                height: 1066,
                width: 1600,
              },
              icon: {
                download:
                  '@@images/image-32-12137579b4452eac919248d0a4f016b0.jpeg',
                height: 21,
                width: 32,
              },
              large: {
                download:
                  '@@images/image-800-12943fd32b1636c8809a0fbb551a3e39.jpeg',
                height: 533,
                width: 800,
              },
              larger: {
                download:
                  '@@images/image-1000-f835c3eb1ef0543023d1cc70870bd9c1.jpeg',
                height: 666,
                width: 1000,
              },
              mini: {
                download:
                  '@@images/image-200-01545d595ae8b4fe34b81d884e9707d7.jpeg',
                height: 133,
                width: 200,
              },
              preview: {
                download:
                  '@@images/image-400-c8f88b078f0c31df1d931e6ebf975549.jpeg',
                height: 266,
                width: 400,
              },
              teaser: {
                download:
                  '@@images/image-600-530df8bed590a10142ff8af7d0e280fc.jpeg',
                height: 400,
                width: 600,
              },
              thumb: {
                download:
                  '@@images/image-128-cbb1c85e4089c061b5dac2a27ae3ff5d.jpeg',
                height: 85,
                width: 128,
              },
              tile: {
                download:
                  '@@images/image-64-0e97272d5a8b4a796d08a7f055345bbd.jpeg',
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
              '@@images/preview_image-5184-7ecfd1173eff751c8d1cb7914c7518d8.jpeg',
            filename: 'national-cancer-institute.jpeg',
            height: 3456,
            scales: {
              gallery: {
                download:
                  '@@images/preview_image-250-c96a676e655ec293a54e8d0f3f3b2f2f.jpeg',
                height: 166,
                width: 250,
              },
              great: {
                download:
                  '@@images/preview_image-1200-9c8c7d44877ac3a0f73bbca89a5394e5.jpeg',
                height: 800,
                width: 1200,
              },
              huge: {
                download:
                  '@@images/preview_image-1600-1675145136aabae9ff1d522b548308bc.jpeg',
                height: 1066,
                width: 1600,
              },
              icon: {
                download:
                  '@@images/preview_image-32-b253a826ca285a0bf1bdaf017bccd712.jpeg',
                height: 21,
                width: 32,
              },
              large: {
                download:
                  '@@images/preview_image-800-460a4d552e7f6daacd4405cea33f8799.jpeg',
                height: 533,
                width: 800,
              },
              larger: {
                download:
                  '@@images/preview_image-1000-952437d4893daef993e664fd2514d046.jpeg',
                height: 666,
                width: 1000,
              },
              mini: {
                download:
                  '@@images/preview_image-200-5abca393768d0a22c1ade849537f8746.jpeg',
                height: 133,
                width: 200,
              },
              preview: {
                download:
                  '@@images/preview_image-400-15eea7738a74beb28e506e20fa788a38.jpeg',
                height: 266,
                width: 400,
              },
              teaser: {
                download:
                  '@@images/preview_image-600-85d77ae4fb15ddb33f911f00ba274db8.jpeg',
                height: 400,
                width: 600,
              },
              thumb: {
                download:
                  '@@images/preview_image-128-d86aa5ea16e923b7646c48e2159d2d40.jpeg',
                height: 85,
                width: 128,
              },
              tile: {
                download:
                  '@@images/preview_image-64-5ab5c9fdc31755ff65aa52e7c76ede62.jpeg',
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
      latitude: 0,
      listCreators: ['admin'],
      location: null,
      longitude: 0,
      mime_type: 'text/plain',
      modified: '2023-01-03T15:40:33+00:00',
      nav_title: null,
      open_end: false,
      parent: {
        '@id': 'http://localhost:3000/eventi',
        UID: 'd973c55883254c118dc0ccba067329b8',
        title: 'Eventi',
      },
      portal_type: 'Event',
      recurrence: null,
      review_state: 'published',
      scadenza_bando: null,
      start: '2023-06-02T14:39:39+00:00',
      sync_uid: 'c9443cc746ba49c4adda298ad0080643@localhost:3000',
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
      title: 'Torneo di beneficienza "Tutti in pista"',
      total_comments: 0,
      ufficio_responsabile_bando: null,
      update_note: null,
      whole_day: false,
    },
    {
      '@id': '/eventi/363-festa-di-santefisio/il-ballo-dellisola-in-festa',
      '@type': 'Event',
      CreationDate: '2023-01-04T11:40:36+00:00',
      Creator: 'admin',
      Date: '2023-01-04T11:42:10+00:00',
      Description: '',
      EffectiveDate: 'None',
      ExpirationDate: 'None',
      ModificationDate: '2023-01-04T11:42:10+00:00',
      Subject: [],
      Subject_bando: null,
      Title: "Il ballo dell'isola in festa",
      Type: 'Evento',
      UID: 'b2dcc4e5048d4284af8aa8e4bbc130ea',
      apertura_bando: null,
      author_name: null,
      chiusura_procedimento_bando: null,
      cmf_uid: 122,
      commentators: [],
      created: '2023-01-04T11:40:36+00:00',
      data_conclusione_incarico: null,
      description: '',
      design_italia_meta_type: 'Evento',
      destinatari_bando: null,
      effective: null,
      end: '2019-12-31T22:59:59+00:00',
      ente_bando: null,
      event_location: [],
      exclude_from_nav: false,
      expires: null,
      geolocation: null,
      getIcon: true,
      getId: 'il-ballo-dellisola-in-festa',
      getObjSize: '2.5 MB',
      getPath:
        '/Plone/eventi/363-festa-di-santefisio/il-ballo-dellisola-in-festa',
      getRemoteUrl: null,
      getURL:
        'http://localhost:3000/eventi/363-festa-di-santefisio/il-ballo-dellisola-in-festa',
      hasPreviewImage: true,
      head_title: null,
      icona: null,
      id: 'il-ballo-dellisola-in-festa',
      image: {
        scales: {
          gallery: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/il-ballo-dellisola-in-festa/@@images/preview_image/gallery',
            height: 65536,
            width: 250,
          },
          great: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/il-ballo-dellisola-in-festa/@@images/preview_image/great',
            height: 65536,
            width: 1200,
          },
          huge: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/il-ballo-dellisola-in-festa/@@images/preview_image/huge',
            height: 65536,
            width: 1600,
          },
          icon: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/il-ballo-dellisola-in-festa/@@images/preview_image/icon',
            height: 32,
            width: 32,
          },
          large: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/il-ballo-dellisola-in-festa/@@images/preview_image/large',
            height: 65536,
            width: 800,
          },
          larger: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/il-ballo-dellisola-in-festa/@@images/preview_image/larger',
            height: 65536,
            width: 1000,
          },
          listing: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/il-ballo-dellisola-in-festa/@@images/preview_image/listing',
            height: 16,
            width: 16,
          },
          midi: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/il-ballo-dellisola-in-festa/@@images/preview_image/midi',
            height: 65536,
            width: 300,
          },
          mini: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/il-ballo-dellisola-in-festa/@@images/preview_image/mini',
            height: 65536,
            width: 200,
          },
          preview: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/il-ballo-dellisola-in-festa/@@images/preview_image/preview',
            height: 65536,
            width: 400,
          },
          teaser: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/il-ballo-dellisola-in-festa/@@images/preview_image/teaser',
            height: 65536,
            width: 600,
          },
          thumb: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/il-ballo-dellisola-in-festa/@@images/preview_image/thumb',
            height: 65536,
            width: 128,
          },
          tile: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/il-ballo-dellisola-in-festa/@@images/preview_image/tile',
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
              '@@images/image-1156-d86151b7a5390d87c0ef43b0246780ca.png',
            filename: 'foto-ospedale.png',
            height: 940,
            scales: {
              icon: {
                download:
                  '@@images/image-32-2d47f13a6d9238232f2a41c99d817974.png',
                height: 26,
                width: 32,
              },
              large: {
                download:
                  '@@images/image-800-7ae8442d1ad89dbdf9f82b2829cc7688.png',
                height: 650,
                width: 800,
              },
              larger: {
                download:
                  '@@images/image-1000-6488106e70e5965903897ce3c864bc32.png',
                height: 813,
                width: 1000,
              },
              listing: {
                download:
                  '@@images/image-16-671a38ab44c33a0d9d58d9452ca1f7c7.png',
                height: 13,
                width: 16,
              },
              midi: {
                download:
                  '@@images/image-300-9ea7b3006df5e23b804e43e8e1d96c1c.png',
                height: 243,
                width: 300,
              },
              mini: {
                download:
                  '@@images/image-200-66bb8391b2a57622fea52a960e982a5a.png',
                height: 162,
                width: 200,
              },
              preview: {
                download:
                  '@@images/image-400-77967fd4667f7e99036d4c27f99bc12e.png',
                height: 325,
                width: 400,
              },
              teaser: {
                download:
                  '@@images/image-600-c12ecb637e2f763f3a14b33756b912e0.png',
                height: 487,
                width: 600,
              },
              thumb: {
                download:
                  '@@images/image-128-3b32ba105227aeebe9b2b323c78813ca.png',
                height: 104,
                width: 128,
              },
              tile: {
                download:
                  '@@images/image-64-84722736f4d301f0f924de9778b945d2.png',
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
              '@@images/preview_image-1156-3e8aa501e3655a100b57d16e421d1385.png',
            filename: 'foto-ospedale.png',
            height: 940,
            scales: {
              icon: {
                download:
                  '@@images/preview_image-32-7eb940d37b70755715d85b9edc084c80.png',
                height: 26,
                width: 32,
              },
              large: {
                download:
                  '@@images/preview_image-800-b5e679c45a60489823c63ca2dd618dd1.png',
                height: 650,
                width: 800,
              },
              larger: {
                download:
                  '@@images/preview_image-1000-a987b390a03f90ccd95a9361b5bb37e4.png',
                height: 813,
                width: 1000,
              },
              listing: {
                download:
                  '@@images/preview_image-16-718cc884dfbf5a4ab2326b782f117a0f.png',
                height: 13,
                width: 16,
              },
              midi: {
                download:
                  '@@images/preview_image-300-1bb8fff886c63199b4b000f1c49a8030.png',
                height: 243,
                width: 300,
              },
              mini: {
                download:
                  '@@images/preview_image-200-bf0cb63e3d864df0f293b26efe3914bb.png',
                height: 162,
                width: 200,
              },
              preview: {
                download:
                  '@@images/preview_image-400-e86c1ea3c60de96ba9b5a4eaa5d77f2d.png',
                height: 325,
                width: 400,
              },
              teaser: {
                download:
                  '@@images/preview_image-600-8a58f3b9f71ad370d5c7ef61aa139918.png',
                height: 487,
                width: 600,
              },
              thumb: {
                download:
                  '@@images/preview_image-128-7723f5b04c74748db97bdaee7b1fb8ad.png',
                height: 104,
                width: 128,
              },
              tile: {
                download:
                  '@@images/preview_image-64-aa2357e6b9b00ed4c3e838904d4c6e9c.png',
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
      latitude: 0,
      listCreators: ['admin'],
      location: null,
      longitude: 0,
      mime_type: 'text/plain',
      modified: '2023-01-04T11:42:10+00:00',
      nav_title: null,
      open_end: true,
      parent: {
        '@id': 'http://localhost:3000/eventi/363-festa-di-santefisio',
        UID: '797e8784ca0241af9ec737ed081bd0cc',
        title: "363^ Festa di Sant'Efisio",
      },
      portal_type: 'Event',
      recurrence: null,
      review_state: 'private',
      scadenza_bando: null,
      start: '2019-12-30T23:00:00+00:00',
      sync_uid: 'b2dcc4e5048d4284af8aa8e4bbc130ea@localhost:3000',
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
      tipologia_bando: null,
      tipologia_documento: null,
      tipologia_notizia: null,
      title: "Il ballo dell'isola in festa",
      total_comments: 0,
      ufficio_responsabile_bando: null,
      update_note: null,
      whole_day: true,
    },
    {
      '@id': '/eventi/363-festa-di-santefisio/la-coralita-sarda-per-santefisio',
      '@type': 'Event',
      CreationDate: '2023-01-04T11:42:57+00:00',
      Creator: 'admin',
      Date: '2023-01-04T11:42:57+00:00',
      Description: '',
      EffectiveDate: 'None',
      ExpirationDate: 'None',
      ModificationDate: '2023-01-04T11:42:57+00:00',
      Subject: [],
      Subject_bando: null,
      Title: "La coralità sarda per Sant'Efisio",
      Type: 'Evento',
      UID: '1c1f1d5c3daa410ebc85380bb46f3279',
      apertura_bando: null,
      author_name: null,
      chiusura_procedimento_bando: null,
      cmf_uid: 126,
      commentators: [],
      created: '2023-01-04T11:42:57+00:00',
      data_conclusione_incarico: null,
      description: '',
      design_italia_meta_type: 'Evento',
      destinatari_bando: null,
      effective: null,
      end: '2023-01-04T22:59:59+00:00',
      ente_bando: null,
      event_location: [],
      exclude_from_nav: false,
      expires: null,
      geolocation: null,
      getIcon: true,
      getId: 'la-coralita-sarda-per-santefisio',
      getObjSize: '2.5 MB',
      getPath:
        '/Plone/eventi/363-festa-di-santefisio/la-coralita-sarda-per-santefisio',
      getRemoteUrl: null,
      getURL:
        'http://localhost:3000/eventi/363-festa-di-santefisio/la-coralita-sarda-per-santefisio',
      hasPreviewImage: true,
      head_title: null,
      icona: null,
      id: 'la-coralita-sarda-per-santefisio',
      image: {
        scales: {
          gallery: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/la-coralita-sarda-per-santefisio/@@images/preview_image/gallery',
            height: 65536,
            width: 250,
          },
          great: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/la-coralita-sarda-per-santefisio/@@images/preview_image/great',
            height: 65536,
            width: 1200,
          },
          huge: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/la-coralita-sarda-per-santefisio/@@images/preview_image/huge',
            height: 65536,
            width: 1600,
          },
          icon: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/la-coralita-sarda-per-santefisio/@@images/preview_image/icon',
            height: 32,
            width: 32,
          },
          large: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/la-coralita-sarda-per-santefisio/@@images/preview_image/large',
            height: 65536,
            width: 800,
          },
          larger: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/la-coralita-sarda-per-santefisio/@@images/preview_image/larger',
            height: 65536,
            width: 1000,
          },
          listing: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/la-coralita-sarda-per-santefisio/@@images/preview_image/listing',
            height: 16,
            width: 16,
          },
          midi: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/la-coralita-sarda-per-santefisio/@@images/preview_image/midi',
            height: 65536,
            width: 300,
          },
          mini: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/la-coralita-sarda-per-santefisio/@@images/preview_image/mini',
            height: 65536,
            width: 200,
          },
          preview: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/la-coralita-sarda-per-santefisio/@@images/preview_image/preview',
            height: 65536,
            width: 400,
          },
          teaser: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/la-coralita-sarda-per-santefisio/@@images/preview_image/teaser',
            height: 65536,
            width: 600,
          },
          thumb: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/la-coralita-sarda-per-santefisio/@@images/preview_image/thumb',
            height: 65536,
            width: 128,
          },
          tile: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/la-coralita-sarda-per-santefisio/@@images/preview_image/tile',
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
              '@@images/image-1156-b95cd9947e12550f258bbec5543b71f6.png',
            filename: 'foto-ospedale.png',
            height: 940,
            scales: {
              icon: {
                download:
                  '@@images/image-32-994f066f5d21a51d8f8cf40892a053ae.png',
                height: 26,
                width: 32,
              },
              large: {
                download:
                  '@@images/image-800-009072cf63b18e235581f743f8f41fda.png',
                height: 650,
                width: 800,
              },
              larger: {
                download:
                  '@@images/image-1000-880446d68a9c4fccf4fa7014856f315f.png',
                height: 813,
                width: 1000,
              },
              listing: {
                download:
                  '@@images/image-16-c56c2a0c4383c074deda415ef56d50b1.png',
                height: 13,
                width: 16,
              },
              midi: {
                download:
                  '@@images/image-300-65025a16b00339046a20a0aebc7c45fe.png',
                height: 243,
                width: 300,
              },
              mini: {
                download:
                  '@@images/image-200-cfff7d3fc228bcc05f5855915132be4e.png',
                height: 162,
                width: 200,
              },
              preview: {
                download:
                  '@@images/image-400-f83431d79ff5c71f15d134863f4d8fad.png',
                height: 325,
                width: 400,
              },
              teaser: {
                download:
                  '@@images/image-600-c48b608958d4d5bfbaf40078d9ebdcd8.png',
                height: 487,
                width: 600,
              },
              thumb: {
                download:
                  '@@images/image-128-f353cf95a3332e025b0edd327513b4e2.png',
                height: 104,
                width: 128,
              },
              tile: {
                download:
                  '@@images/image-64-31dcf5be3dae0c1a03901609f5904a15.png',
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
              '@@images/preview_image-1156-d7055fd4b5de8bfeaca327c831b421d4.png',
            filename: 'foto-ospedale.png',
            height: 940,
            scales: {
              icon: {
                download:
                  '@@images/preview_image-32-c0c2ec5c52f1f2495fd294366398cbed.png',
                height: 26,
                width: 32,
              },
              large: {
                download:
                  '@@images/preview_image-800-8c75e3f6913892daef9964566b81bfb8.png',
                height: 650,
                width: 800,
              },
              larger: {
                download:
                  '@@images/preview_image-1000-21cc02b0efeb7d921d707f437276d585.png',
                height: 813,
                width: 1000,
              },
              listing: {
                download:
                  '@@images/preview_image-16-0fe709a50be848e0c0a644786a07a254.png',
                height: 13,
                width: 16,
              },
              midi: {
                download:
                  '@@images/preview_image-300-822a0bc4312e8fb1f54e9a9e9656301f.png',
                height: 243,
                width: 300,
              },
              mini: {
                download:
                  '@@images/preview_image-200-586cde6be261d174f7516346db8ee81d.png',
                height: 162,
                width: 200,
              },
              preview: {
                download:
                  '@@images/preview_image-400-d047b0e16953316c519b58d06beffbcb.png',
                height: 325,
                width: 400,
              },
              teaser: {
                download:
                  '@@images/preview_image-600-eb98ef9ffebeb5f21220535beb9b21a0.png',
                height: 487,
                width: 600,
              },
              thumb: {
                download:
                  '@@images/preview_image-128-3a93a57ed40bf218e398794df4890568.png',
                height: 104,
                width: 128,
              },
              tile: {
                download:
                  '@@images/preview_image-64-0820dcd2e2fb89fdcf0fbb83d892fa41.png',
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
      modified: '2023-01-04T11:42:57+00:00',
      nav_title: null,
      open_end: false,
      parent: {
        '@id': 'http://localhost:3000/eventi/363-festa-di-santefisio',
        UID: '797e8784ca0241af9ec737ed081bd0cc',
        title: "363^ Festa di Sant'Efisio",
      },
      portal_type: 'Event',
      recurrence: null,
      review_state: 'private',
      scadenza_bando: null,
      start: '2019-12-30T23:00:00+00:00',
      sync_uid: '1c1f1d5c3daa410ebc85380bb46f3279@localhost:3000',
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
      tipologia_bando: null,
      tipologia_documento: null,
      tipologia_notizia: null,
      title: "La coralità sarda per Sant'Efisio",
      total_comments: 0,
      ufficio_responsabile_bando: null,
      update_note: null,
      whole_day: true,
    },
    {
      '@id':
        '/eventi/363-festa-di-santefisio/copy_of_il-ballo-dellisola-in-festa',
      '@type': 'Event',
      CreationDate: '2023-01-04T11:40:36+00:00',
      Creator: 'admin',
      Date: '2023-01-04T11:43:28+00:00',
      Description: '',
      EffectiveDate: 'None',
      ExpirationDate: 'None',
      ModificationDate: '2023-01-04T11:43:28+00:00',
      Subject: [],
      Subject_bando: null,
      Title: "Il ballo dell'isola in festa",
      Type: 'Evento',
      UID: 'fb0f4858c1cf43f7b9c19086500d4c5a',
      apertura_bando: null,
      author_name: null,
      chiusura_procedimento_bando: null,
      cmf_uid: null,
      commentators: [],
      created: '2023-01-04T11:40:36+00:00',
      data_conclusione_incarico: null,
      description: '',
      design_italia_meta_type: 'Evento',
      destinatari_bando: null,
      effective: null,
      end: '2019-12-31T22:59:59+00:00',
      ente_bando: null,
      event_location: [],
      exclude_from_nav: false,
      expires: null,
      geolocation: null,
      getIcon: true,
      getId: 'copy_of_il-ballo-dellisola-in-festa',
      getObjSize: '2.5 MB',
      getPath:
        '/Plone/eventi/363-festa-di-santefisio/copy_of_il-ballo-dellisola-in-festa',
      getRemoteUrl: null,
      getURL:
        'http://localhost:3000/eventi/363-festa-di-santefisio/copy_of_il-ballo-dellisola-in-festa',
      hasPreviewImage: true,
      head_title: null,
      icona: null,
      id: 'copy_of_il-ballo-dellisola-in-festa',
      image: {
        scales: {
          gallery: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/copy_of_il-ballo-dellisola-in-festa/@@images/preview_image/gallery',
            height: 65536,
            width: 250,
          },
          great: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/copy_of_il-ballo-dellisola-in-festa/@@images/preview_image/great',
            height: 65536,
            width: 1200,
          },
          huge: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/copy_of_il-ballo-dellisola-in-festa/@@images/preview_image/huge',
            height: 65536,
            width: 1600,
          },
          icon: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/copy_of_il-ballo-dellisola-in-festa/@@images/preview_image/icon',
            height: 32,
            width: 32,
          },
          large: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/copy_of_il-ballo-dellisola-in-festa/@@images/preview_image/large',
            height: 65536,
            width: 800,
          },
          larger: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/copy_of_il-ballo-dellisola-in-festa/@@images/preview_image/larger',
            height: 65536,
            width: 1000,
          },
          listing: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/copy_of_il-ballo-dellisola-in-festa/@@images/preview_image/listing',
            height: 16,
            width: 16,
          },
          midi: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/copy_of_il-ballo-dellisola-in-festa/@@images/preview_image/midi',
            height: 65536,
            width: 300,
          },
          mini: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/copy_of_il-ballo-dellisola-in-festa/@@images/preview_image/mini',
            height: 65536,
            width: 200,
          },
          preview: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/copy_of_il-ballo-dellisola-in-festa/@@images/preview_image/preview',
            height: 65536,
            width: 400,
          },
          teaser: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/copy_of_il-ballo-dellisola-in-festa/@@images/preview_image/teaser',
            height: 65536,
            width: 600,
          },
          thumb: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/copy_of_il-ballo-dellisola-in-festa/@@images/preview_image/thumb',
            height: 65536,
            width: 128,
          },
          tile: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/copy_of_il-ballo-dellisola-in-festa/@@images/preview_image/tile',
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
              '@@images/image-1156-df8f80bf09602fb53ccc700f897ec537.png',
            filename: 'foto-ospedale.png',
            height: 940,
            scales: {
              icon: {
                download:
                  '@@images/image-32-93d4452f8edf6664b53b3f7617a170e6.png',
                height: 26,
                width: 32,
              },
              large: {
                download:
                  '@@images/image-800-87e4af79c9a0f6fb63355ca6b05edc0f.png',
                height: 650,
                width: 800,
              },
              larger: {
                download:
                  '@@images/image-1000-726b7dda823fff20a6d14a98e93bce67.png',
                height: 813,
                width: 1000,
              },
              listing: {
                download:
                  '@@images/image-16-4c5548ed2f111bdd07c5a324f3b0647d.png',
                height: 13,
                width: 16,
              },
              midi: {
                download:
                  '@@images/image-300-f3cdc12ee7edc4388752123e03de2e1f.png',
                height: 243,
                width: 300,
              },
              mini: {
                download:
                  '@@images/image-200-c0de84b376d2b409ba41842ddda8f40b.png',
                height: 162,
                width: 200,
              },
              preview: {
                download:
                  '@@images/image-400-dff863310e56b5d754d0f840b4c16081.png',
                height: 325,
                width: 400,
              },
              teaser: {
                download:
                  '@@images/image-600-6b5255fc399afedc995cdf1ace0753ba.png',
                height: 487,
                width: 600,
              },
              thumb: {
                download:
                  '@@images/image-128-bafc908a0202e68979d78ef68590ffe3.png',
                height: 104,
                width: 128,
              },
              tile: {
                download:
                  '@@images/image-64-6ba4fed3019340a15373923f7078834d.png',
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
              '@@images/preview_image-1156-a2cdb5a425a7ea6ae9da7d578ab6090d.png',
            filename: 'foto-ospedale.png',
            height: 940,
            scales: {
              icon: {
                download:
                  '@@images/preview_image-32-2e82f409fd2fa52413d4d2583455efff.png',
                height: 26,
                width: 32,
              },
              large: {
                download:
                  '@@images/preview_image-800-10d352bce01ad7b5d924f37ee8e67216.png',
                height: 650,
                width: 800,
              },
              larger: {
                download:
                  '@@images/preview_image-1000-b25f3b4b80cf1cbcc311cca53c63e587.png',
                height: 813,
                width: 1000,
              },
              listing: {
                download:
                  '@@images/preview_image-16-fb73ade6ff160b9bfdcb317a76511099.png',
                height: 13,
                width: 16,
              },
              midi: {
                download:
                  '@@images/preview_image-300-48cd0d95454587aedde26487e10d0ffc.png',
                height: 243,
                width: 300,
              },
              mini: {
                download:
                  '@@images/preview_image-200-ff3523d87af7c454d6798570bfb064d3.png',
                height: 162,
                width: 200,
              },
              preview: {
                download:
                  '@@images/preview_image-400-d5ebd311251342231a10824bad43f7de.png',
                height: 325,
                width: 400,
              },
              teaser: {
                download:
                  '@@images/preview_image-600-a293f65df0d28a5a15643b00a699bde4.png',
                height: 487,
                width: 600,
              },
              thumb: {
                download:
                  '@@images/preview_image-128-451eaf1a527ddf7388a6e2d0b85b0250.png',
                height: 104,
                width: 128,
              },
              tile: {
                download:
                  '@@images/preview_image-64-d1d475c3e1d2a5e0938c5c4af8e7418c.png',
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
      latitude: 0,
      listCreators: ['admin'],
      location: null,
      longitude: 0,
      mime_type: 'text/plain',
      modified: '2023-01-04T11:43:28+00:00',
      nav_title: null,
      open_end: true,
      parent: {
        '@id': 'http://localhost:3000/eventi/363-festa-di-santefisio',
        UID: '797e8784ca0241af9ec737ed081bd0cc',
        title: "363^ Festa di Sant'Efisio",
      },
      portal_type: 'Event',
      recurrence: null,
      review_state: 'private',
      scadenza_bando: null,
      start: '2019-12-30T23:00:00+00:00',
      sync_uid: 'fb0f4858c1cf43f7b9c19086500d4c5a@localhost:3000',
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
      tipologia_bando: null,
      tipologia_documento: null,
      tipologia_notizia: null,
      title: "Il ballo dell'isola in festa",
      total_comments: 0,
      ufficio_responsabile_bando: null,
      update_note: null,
      whole_day: true,
    },
    {
      '@id': '/eventi/363-festa-di-santefisio',
      '@type': 'Event',
      CreationDate: '2023-01-04T10:43:19+00:00',
      Creator: 'admin',
      Date: '2023-01-19T14:05:30+00:00',
      Description:
        "Il 1° maggio 2019 Cagliari e tutta la Sardegna festeggiano la 363ª Festa di Sant'Efisio. Un intenso momento di devozione, fede, cultura e tradizioni centenarie che si fondono in una processione che non ha eguali.",
      EffectiveDate: 'None',
      ExpirationDate: 'None',
      ModificationDate: '2023-01-19T14:05:30+00:00',
      Subject: [],
      Subject_bando: null,
      Title: "363^ Festa di Sant'Efisio",
      Type: 'Evento',
      UID: '797e8784ca0241af9ec737ed081bd0cc',
      apertura_bando: null,
      author_name: null,
      chiusura_procedimento_bando: null,
      cmf_uid: 104,
      commentators: [],
      created: '2023-01-04T10:43:19+00:00',
      data_conclusione_incarico: null,
      description:
        "Il 1° maggio 2019 Cagliari e tutta la Sardegna festeggiano la 363ª Festa di Sant'Efisio. Un intenso momento di devozione, fede, cultura e tradizioni centenarie che si fondono in una processione che non ha eguali.",
      design_italia_meta_type: 'Evento',
      destinatari_bando: null,
      effective: null,
      end: '2023-05-04T16:00:00+00:00',
      ente_bando: null,
      event_location: [],
      exclude_from_nav: false,
      expires: null,
      geolocation: {
        latitude: 39.219000017838084,
        longitude: 9.112740004953338,
      },
      getIcon: true,
      getId: '363-festa-di-santefisio',
      getObjSize: '2.7 MB',
      getPath: '/Plone/eventi/363-festa-di-santefisio',
      getRemoteUrl: null,
      getURL: 'http://localhost:3000/eventi/363-festa-di-santefisio',
      hasPreviewImage: true,
      head_title: null,
      icona: null,
      id: '363-festa-di-santefisio',
      image: {
        scales: {
          gallery: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/@@images/preview_image/gallery',
            height: 65536,
            width: 250,
          },
          great: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/@@images/preview_image/great',
            height: 65536,
            width: 1200,
          },
          huge: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/@@images/preview_image/huge',
            height: 65536,
            width: 1600,
          },
          icon: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/@@images/preview_image/icon',
            height: 32,
            width: 32,
          },
          large: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/@@images/preview_image/large',
            height: 65536,
            width: 800,
          },
          larger: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/@@images/preview_image/larger',
            height: 65536,
            width: 1000,
          },
          listing: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/@@images/preview_image/listing',
            height: 16,
            width: 16,
          },
          midi: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/@@images/preview_image/midi',
            height: 65536,
            width: 300,
          },
          mini: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/@@images/preview_image/mini',
            height: 65536,
            width: 200,
          },
          preview: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/@@images/preview_image/preview',
            height: 65536,
            width: 400,
          },
          teaser: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/@@images/preview_image/teaser',
            height: 65536,
            width: 600,
          },
          thumb: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/@@images/preview_image/thumb',
            height: 65536,
            width: 128,
          },
          tile: {
            download:
              'http://localhost:3000/eventi/363-festa-di-santefisio/@@images/preview_image/tile',
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
              '@@images/image-5184-450c772936948b6de2316bd23117a107.jpeg',
            filename: 'vaccini.jpeg',
            height: 3456,
            scales: {
              gallery: {
                download:
                  '@@images/image-250-2e45e00059ca3528da4dab9a0879881b.jpeg',
                height: 166,
                width: 250,
              },
              great: {
                download:
                  '@@images/image-1200-30a3083107dd6b23fa7b93a0b5635caa.jpeg',
                height: 800,
                width: 1200,
              },
              huge: {
                download:
                  '@@images/image-1600-adfb1f3e91b013f11b5014e0231f97b3.jpeg',
                height: 1066,
                width: 1600,
              },
              icon: {
                download:
                  '@@images/image-32-7d90e7af6e5d90571fa294215db7a360.jpeg',
                height: 21,
                width: 32,
              },
              large: {
                download:
                  '@@images/image-800-2c3288f674576af857c28119af0b9650.jpeg',
                height: 533,
                width: 800,
              },
              larger: {
                download:
                  '@@images/image-1000-9e025a86c83de9be91fe59419426b293.jpeg',
                height: 666,
                width: 1000,
              },
              listing: {
                download:
                  '@@images/image-16-14a3367d5e9960f4540fe06849e39b79.jpeg',
                height: 10,
                width: 16,
              },
              midi: {
                download:
                  '@@images/image-300-5a09c091e41b2327edc809126c8e4d34.jpeg',
                height: 200,
                width: 300,
              },
              mini: {
                download:
                  '@@images/image-200-ed2ead88e7a375da4e45c9acf0762360.jpeg',
                height: 133,
                width: 200,
              },
              preview: {
                download:
                  '@@images/image-400-533f6e633d950ef73bad86be6f5e594b.jpeg',
                height: 266,
                width: 400,
              },
              teaser: {
                download:
                  '@@images/image-600-088a4d3c644521df2dfb22342b2f3e72.jpeg',
                height: 400,
                width: 600,
              },
              thumb: {
                download:
                  '@@images/image-128-3ff8021940b90cf2795b3b546618d435.jpeg',
                height: 85,
                width: 128,
              },
              tile: {
                download:
                  '@@images/image-64-cdeacb86cedc123214b4562960291a6e.jpeg',
                height: 42,
                width: 64,
              },
            },
            size: 1437659,
            width: 5184,
          },
        ],
        preview_image: [
          {
            'content-type': 'image/jpeg',
            download:
              '@@images/preview_image-5184-8060e350a48fa004050e86398f5e2a38.jpeg',
            filename: 'vaccini.jpeg',
            height: 3456,
            scales: {
              gallery: {
                download:
                  '@@images/preview_image-250-93dcf4c16b2bd83e28d10d800f12c109.jpeg',
                height: 166,
                width: 250,
              },
              great: {
                download:
                  '@@images/preview_image-1200-a5f1fb71c597abe4c431def4a38ed722.jpeg',
                height: 800,
                width: 1200,
              },
              huge: {
                download:
                  '@@images/preview_image-1600-4cfcf97a411d1d8505b74cdac0362f83.jpeg',
                height: 1066,
                width: 1600,
              },
              icon: {
                download:
                  '@@images/preview_image-32-6cfe33efe44f2edebe2405a69b2d4f62.jpeg',
                height: 21,
                width: 32,
              },
              large: {
                download:
                  '@@images/preview_image-800-a91c98480e44488c603ff752ef94e883.jpeg',
                height: 533,
                width: 800,
              },
              larger: {
                download:
                  '@@images/preview_image-1000-bff659993bf0c90bd1207e9ce0d46d53.jpeg',
                height: 666,
                width: 1000,
              },
              listing: {
                download:
                  '@@images/preview_image-16-07fee2e428270b3d076a746032870238.jpeg',
                height: 10,
                width: 16,
              },
              midi: {
                download:
                  '@@images/preview_image-300-2e5cfc1ff179461f57d9033d2d85b347.jpeg',
                height: 200,
                width: 300,
              },
              mini: {
                download:
                  '@@images/preview_image-200-b96a439dd095dc60ca90c6b3edbc9566.jpeg',
                height: 133,
                width: 200,
              },
              preview: {
                download:
                  '@@images/preview_image-400-13c142578289238168fcf64bc3dfe569.jpeg',
                height: 266,
                width: 400,
              },
              teaser: {
                download:
                  '@@images/preview_image-600-5691ea2bb727fb5b428d39f79a3251ae.jpeg',
                height: 400,
                width: 600,
              },
              thumb: {
                download:
                  '@@images/preview_image-128-b93bca18787a9c2933a96d46c73e51d7.jpeg',
                height: 85,
                width: 128,
              },
              tile: {
                download:
                  '@@images/preview_image-64-36becc9d7bbf5090839f9910bf929425.jpeg',
                height: 42,
                width: 64,
              },
            },
            size: 1437659,
            width: 5184,
          },
        ],
      },
      in_response_to: null,
      is_folderish: true,
      last_comment_date: null,
      latitude: 39.219000017838084,
      listCreators: ['admin'],
      location: null,
      longitude: 9.112740004953338,
      mime_type: 'text/plain',
      modified: '2023-01-19T14:05:30+00:00',
      nav_title: null,
      open_end: false,
      parent: {
        '@id': 'http://localhost:3000/eventi',
        UID: 'd973c55883254c118dc0ccba067329b8',
        title: 'Eventi',
      },
      portal_type: 'Event',
      recurrence: null,
      review_state: 'private',
      scadenza_bando: null,
      start: '2019-05-01T07:00:00+00:00',
      sync_uid: '797e8784ca0241af9ec737ed081bd0cc@localhost:3000',
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
          '@id': 'http://localhost:3000/argomenti/vivere-la-citta',
          '@type': 'Pagina Argomento',
          CreationDate: '2023-01-04T10:44:40+00:00',
          Creator: 'admin',
          Date: '2023-01-04T16:06:22+00:00',
          Description: '',
          EffectiveDate: 'None',
          ExpirationDate: 'None',
          ModificationDate: '2023-01-04T16:06:22+00:00',
          Subject: [],
          Subject_bando: null,
          Title: 'Vivere la città',
          Type: 'Argomento',
          UID: '72ff83b127b54800b25d01c1b46b8660',
          apertura_bando: null,
          author_name: null,
          chiusura_procedimento_bando: null,
          cmf_uid: 107,
          commentators: null,
          created: '2023-01-04T10:44:40+00:00',
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
          getId: 'vivere-la-citta',
          getObjSize: null,
          getPath: '/Plone/argomenti/vivere-la-citta',
          getRemoteUrl: null,
          getURL: 'http://localhost:3000/argomenti/vivere-la-citta',
          hasPreviewImage: null,
          head_title: null,
          icona: null,
          id: 'vivere-la-citta',
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
          modified: '2023-01-04T16:06:22+00:00',
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
          title: 'Vivere la città',
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
      tipologia_notizia: null,
      title: "363^ Festa di Sant'Efisio",
      total_comments: 0,
      ufficio_responsabile_bando: null,
      update_note: null,
      whole_day: false,
    },
    {
      '@id': '/eventi/mega-evento',
      '@type': 'Event',
      CreationDate: '2023-01-20T08:12:40+00:00',
      Creator: 'admin',
      Date: '2023-01-25T15:23:08+00:00',
      Description: 'Descrizione del mega evento',
      EffectiveDate: 'None',
      ExpirationDate: 'None',
      ModificationDate: '2023-01-25T15:23:08+00:00',
      Subject: [],
      Subject_bando: null,
      Title: 'Mega Evento',
      Type: 'Evento',
      UID: '3a046f1b374d465abaea77175ab20cce',
      apertura_bando: null,
      author_name: null,
      chiusura_procedimento_bando: null,
      cmf_uid: 190,
      commentators: [],
      created: '2023-01-20T08:12:40+00:00',
      data_conclusione_incarico: null,
      description: 'Descrizione del mega evento',
      design_italia_meta_type: 'Evento',
      destinatari_bando: null,
      effective: null,
      end: '2023-01-20T22:59:59+00:00',
      ente_bando: null,
      event_location: ['6d27d782beca40deb5c1d3cb8e7392c2'],
      exclude_from_nav: false,
      expires: null,
      geolocation: {
        latitude: 39.21252001040267,
        longitude: 9.115209984181092,
      },
      getIcon: true,
      getId: 'mega-evento',
      getObjSize: '3.2 MB',
      getPath: '/Plone/eventi/mega-evento',
      getRemoteUrl: null,
      getURL: 'http://localhost:3000/eventi/mega-evento',
      hasPreviewImage: true,
      head_title: null,
      icona: null,
      id: 'mega-evento',
      image: {
        scales: {
          gallery: {
            download:
              'http://localhost:3000/eventi/mega-evento/@@images/preview_image/gallery',
            height: 65536,
            width: 250,
          },
          great: {
            download:
              'http://localhost:3000/eventi/mega-evento/@@images/preview_image/great',
            height: 65536,
            width: 1200,
          },
          huge: {
            download:
              'http://localhost:3000/eventi/mega-evento/@@images/preview_image/huge',
            height: 65536,
            width: 1600,
          },
          icon: {
            download:
              'http://localhost:3000/eventi/mega-evento/@@images/preview_image/icon',
            height: 32,
            width: 32,
          },
          large: {
            download:
              'http://localhost:3000/eventi/mega-evento/@@images/preview_image/large',
            height: 65536,
            width: 800,
          },
          larger: {
            download:
              'http://localhost:3000/eventi/mega-evento/@@images/preview_image/larger',
            height: 65536,
            width: 1000,
          },
          listing: {
            download:
              'http://localhost:3000/eventi/mega-evento/@@images/preview_image/listing',
            height: 16,
            width: 16,
          },
          midi: {
            download:
              'http://localhost:3000/eventi/mega-evento/@@images/preview_image/midi',
            height: 65536,
            width: 300,
          },
          mini: {
            download:
              'http://localhost:3000/eventi/mega-evento/@@images/preview_image/mini',
            height: 65536,
            width: 200,
          },
          preview: {
            download:
              'http://localhost:3000/eventi/mega-evento/@@images/preview_image/preview',
            height: 65536,
            width: 400,
          },
          teaser: {
            download:
              'http://localhost:3000/eventi/mega-evento/@@images/preview_image/teaser',
            height: 65536,
            width: 600,
          },
          thumb: {
            download:
              'http://localhost:3000/eventi/mega-evento/@@images/preview_image/thumb',
            height: 65536,
            width: 128,
          },
          tile: {
            download:
              'http://localhost:3000/eventi/mega-evento/@@images/preview_image/tile',
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
              '@@images/image-1156-2f7d3e0155375c7425fa36b96a9e81ed.png',
            filename: 'foto-ospedale.png',
            height: 940,
            scales: {
              gallery: {
                download:
                  '@@images/image-250-6075fcd9926835a1e0e2d08560237321.png',
                height: 203,
                width: 250,
              },
              icon: {
                download:
                  '@@images/image-32-03345d45736c4f95a0a9a97a3b8c4589.png',
                height: 26,
                width: 32,
              },
              large: {
                download:
                  '@@images/image-800-f85baa88982b2f3084994deb2ff943ef.png',
                height: 650,
                width: 800,
              },
              larger: {
                download:
                  '@@images/image-1000-a681dd2ec11fa21fa9ca115d321c9449.png',
                height: 813,
                width: 1000,
              },
              listing: {
                download:
                  '@@images/image-16-a9ee58673fd31065834e3a092bec599f.png',
                height: 13,
                width: 16,
              },
              midi: {
                download:
                  '@@images/image-300-ab78d88eceba6080e08e75c19ddcfefb.png',
                height: 243,
                width: 300,
              },
              mini: {
                download:
                  '@@images/image-200-fde347ff2cf346a3bfdcda9c12bf2d1d.png',
                height: 162,
                width: 200,
              },
              preview: {
                download:
                  '@@images/image-400-366d87093f173877fe90ac594fac414f.png',
                height: 325,
                width: 400,
              },
              teaser: {
                download:
                  '@@images/image-600-4f3d389e50ed6b8f22667a993135ce52.png',
                height: 487,
                width: 600,
              },
              thumb: {
                download:
                  '@@images/image-128-660fac272fe20b21aabef8aab9c4edc1.png',
                height: 104,
                width: 128,
              },
              tile: {
                download:
                  '@@images/image-64-8579a96cc486ed73e77e8c5bc899e878.png',
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
            'content-type': 'image/jpeg',
            download:
              '@@images/preview_image-5184-4f952739520f0a86838a7ce4eef221a3.jpeg',
            filename: 'national-cancer-institute.jpeg',
            height: 3456,
            scales: {
              gallery: {
                download:
                  '@@images/preview_image-250-68713626eab4ffddff93163a853a8cfd.jpeg',
                height: 166,
                width: 250,
              },
              great: {
                download:
                  '@@images/preview_image-1200-dfa4e2d9c26671b7da32fdb4564dbd1b.jpeg',
                height: 800,
                width: 1200,
              },
              huge: {
                download:
                  '@@images/preview_image-1600-4e3064c0752d070d19f34a7191f2252f.jpeg',
                height: 1066,
                width: 1600,
              },
              icon: {
                download:
                  '@@images/preview_image-32-abee06766ab8d2124b9d71734be03a76.jpeg',
                height: 21,
                width: 32,
              },
              large: {
                download:
                  '@@images/preview_image-800-5607d72e9f5c2149a78dc09922b96793.jpeg',
                height: 533,
                width: 800,
              },
              larger: {
                download:
                  '@@images/preview_image-1000-ed3962a9959037f8586ba67a34b75028.jpeg',
                height: 666,
                width: 1000,
              },
              listing: {
                download:
                  '@@images/preview_image-16-9b383f53ccbe169873e3eb92da5b6d43.jpeg',
                height: 10,
                width: 16,
              },
              midi: {
                download:
                  '@@images/preview_image-300-9c59b6708bbd1d09c231e37ca62c4a63.jpeg',
                height: 200,
                width: 300,
              },
              mini: {
                download:
                  '@@images/preview_image-200-2973a3f4aaaf00bda1ac8e1589ed0279.jpeg',
                height: 133,
                width: 200,
              },
              preview: {
                download:
                  '@@images/preview_image-400-0648f4b7e4bfc866b4cdbff82b4bc8d7.jpeg',
                height: 266,
                width: 400,
              },
              teaser: {
                download:
                  '@@images/preview_image-600-540cea607644797faaa656fb3775ba37.jpeg',
                height: 400,
                width: 600,
              },
              thumb: {
                download:
                  '@@images/preview_image-128-1befc6713b7b327cf06f535399b5dd54.jpeg',
                height: 85,
                width: 128,
              },
              tile: {
                download:
                  '@@images/preview_image-64-4bfdfc5e6aafdbd3504de851ee1bb398.jpeg',
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
      latitude: 39.21252001040267,
      listCreators: ['admin'],
      location: null,
      longitude: 9.115209984181092,
      mime_type: 'text/plain',
      modified: '2023-01-25T15:23:08+00:00',
      nav_title: null,
      open_end: true,
      parent: {
        '@id': 'http://localhost:3000/eventi',
        UID: 'd973c55883254c118dc0ccba067329b8',
        title: 'Eventi',
      },
      portal_type: 'Event',
      recurrence: null,
      review_state: 'private',
      scadenza_bando: null,
      start: '2023-01-19T23:00:00+00:00',
      sync_uid: '3a046f1b374d465abaea77175ab20cce@localhost:3000',
      tassonomia_argomenti: [
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
      tipologia_notizia: null,
      title: 'Mega Evento',
      total_comments: 0,
      ufficio_responsabile_bando: null,
      update_note: null,
      whole_day: true,
    },
  ],
  isEditMode: true,
  headlineTag: 'h2',
  show_icon: true,
  hide_dates: false,
  show_section: true,
  show_type: false,
  show_description: true,
  show_detail_link: false,
  show_path_filters: false,
  variation: 'compact',
  '@type': 'listing',
  query: [],
  block: 'f928ff41-bc83-4526-aec8-9f81dc06da83',
  additionalFilters: [],
  loading: false,
  firstLoading: true,
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
        <SimpleCardTemplate
          data={mock_fields}
          items={mock_fields.items}
          appearance={mock_fields.appearance}
        />
      </MemoryRouter>
    </Provider>,
  );

  // tipo template
  const simpleCard = document.querySelector('.simple-card-default');
  expect(simpleCard).toBeInTheDocument();
  // titolo
  // expect(
  //   screen.getByRole('heading', {
  //     name: /Is this the real life?/i,
  //   }),
  // ).toBeInTheDocument();

  // //risultati per pagina
  // const cards = document.querySelectorAll('.center-image-card');
  // expect(cards.length).toBe(mock_fields.querystring.b_size);

  // //link more
  // expect(
  //   screen.getByRole('link', { name: /Is this just fantasy?/i }),
  // ).toBeInTheDocument();
});
