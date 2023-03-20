import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MapTemplate from '../../Listing/MapTemplate';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const mock_fields = {
  items: [
    {
      '@id': '/vivi-il-comune/luoghi',
      '@type': 'Document',
      CreationDate: '2023-01-04T16:35:49+00:00',
      Creator: 'admin',
      Date: '2023-01-04T16:38:56+00:00',
      Description: '',
      EffectiveDate: 'None',
      ExpirationDate: 'None',
      ModificationDate: '2023-01-04T16:38:56+00:00',
      Subject: [],
      Subject_bando: null,
      Title: 'Luoghi',
      Type: 'Pagina',
      UID: '71afefc140f34f718a87f474e0100345',
      apertura_bando: null,
      author_name: null,
      chiusura_procedimento_bando: null,
      cmf_uid: 167,
      commentators: [],
      created: '2023-01-04T16:35:49+00:00',
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
      getId: 'luoghi',
      getObjSize: '1 KB',
      getPath: '/Plone/vivi-il-comune/luoghi',
      getRemoteUrl: null,
      getURL: 'http://localhost:3000/vivi-il-comune/luoghi',
      hasPreviewImage: null,
      head_title: null,
      icona: null,
      id: 'luoghi',
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
      modified: '2023-01-04T16:38:56+00:00',
      nav_title: null,
      open_end: null,
      parent: {
        '@id': 'http://localhost:3000/vivi-il-comune',
        UID: '333daa8fc7474c4faf7b58d0656c2ef5',
        title: 'Vivi il Comune',
      },
      portal_type: 'Document',
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
      tipologia_bando: null,
      tipologia_documento: null,
      tipologia_notizia: null,
      title: 'Luoghi',
      total_comments: 0,
      ufficio_responsabile_bando: null,
      update_note: null,
      whole_day: null,
    },
    {
      '@id': '/vivi-il-comune/luoghi/il-castello-normanno',
      '@type': 'PuntoDiContatto',
      CreationDate: '2023-01-04T16:37:04+00:00',
      Creator: 'admin',
      Date: '2023-01-04T16:37:05+00:00',
      Description: '',
      EffectiveDate: 'None',
      ExpirationDate: 'None',
      ModificationDate: '2023-01-04T16:37:05+00:00',
      Subject: [],
      Subject_bando: null,
      Title: 'Il castello normanno',
      Type: 'Punto di Contatto',
      UID: 'd3c78f4ef7db4030afd4800078cce09a',
      apertura_bando: null,
      author_name: null,
      chiusura_procedimento_bando: null,
      cmf_uid: null,
      commentators: [],
      created: '2023-01-04T16:37:04+00:00',
      data_conclusione_incarico: null,
      description: '',
      design_italia_meta_type: 'Punto di Contatto',
      destinatari_bando: null,
      effective: null,
      end: null,
      ente_bando: null,
      event_location: null,
      exclude_from_nav: false,
      expires: null,
      geolocation: null,
      getIcon: null,
      getId: 'il-castello-normanno',
      getObjSize: '0 KB',
      getPath: '/Plone/vivi-il-comune/luoghi/il-castello-normanno',
      getRemoteUrl: null,
      getURL:
        'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno',
      hasPreviewImage: null,
      head_title: null,
      icona: null,
      id: 'il-castello-normanno',
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
      modified: '2023-01-04T16:37:05+00:00',
      nav_title: null,
      open_end: null,
      parent: {
        '@id': 'http://localhost:3000/vivi-il-comune/luoghi',
        UID: '71afefc140f34f718a87f474e0100345',
        title: 'Luoghi',
      },
      portal_type: 'PuntoDiContatto',
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
      tipologia_bando: null,
      tipologia_documento: null,
      tipologia_notizia: null,
      title: 'Il castello normanno',
      total_comments: 0,
      ufficio_responsabile_bando: null,
      update_note: null,
      whole_day: null,
    },
    {
      '@id': '/vivi-il-comune/luoghi/il-castello-normanno-1',
      '@type': 'Venue',
      CreationDate: '2023-01-04T16:37:19+00:00',
      Creator: 'admin',
      Date: '2023-01-04T16:37:19+00:00',
      Description:
        'Sorta a metà Seicento come residenza di caccia di Carlo Emanuele II, che fece del centrale Salone di Diana uno snodo ideale fra palazzo e giardini.',
      EffectiveDate: 'None',
      ExpirationDate: 'None',
      ModificationDate: '2023-01-04T16:37:19+00:00',
      Subject: [],
      Subject_bando: null,
      Title: 'Il castello normanno',
      Type: 'Luogo',
      UID: '6d27d782beca40deb5c1d3cb8e7392c2',
      apertura_bando: null,
      author_name: null,
      chiusura_procedimento_bando: null,
      cmf_uid: 168,
      commentators: [],
      created: '2023-01-04T16:37:19+00:00',
      data_conclusione_incarico: null,
      description:
        'Sorta a metà Seicento come residenza di caccia di Carlo Emanuele II, che fece del centrale Salone di Diana uno snodo ideale fra palazzo e giardini.',
      design_italia_meta_type: 'Luogo',
      destinatari_bando: null,
      effective: null,
      end: null,
      ente_bando: null,
      event_location: null,
      exclude_from_nav: null,
      expires: null,
      geolocation: {
        latitude: 41.8337833,
        longitude: 12.4677863,
      },
      getIcon: true,
      getId: 'il-castello-normanno-1',
      getObjSize: '20.3 MB',
      getPath: '/Plone/vivi-il-comune/luoghi/il-castello-normanno-1',
      getRemoteUrl: null,
      getURL:
        'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1',
      hasPreviewImage: true,
      head_title: null,
      icona: null,
      id: 'il-castello-normanno-1',
      image: {
        scales: {
          gallery: {
            download:
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@@images/preview_image/gallery',
            height: 65536,
            width: 250,
          },
          great: {
            download:
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@@images/preview_image/great',
            height: 65536,
            width: 1200,
          },
          huge: {
            download:
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@@images/preview_image/huge',
            height: 65536,
            width: 1600,
          },
          icon: {
            download:
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@@images/preview_image/icon',
            height: 32,
            width: 32,
          },
          large: {
            download:
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@@images/preview_image/large',
            height: 65536,
            width: 800,
          },
          larger: {
            download:
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@@images/preview_image/larger',
            height: 65536,
            width: 1000,
          },
          listing: {
            download:
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@@images/preview_image/listing',
            height: 16,
            width: 16,
          },
          midi: {
            download:
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@@images/preview_image/midi',
            height: 65536,
            width: 300,
          },
          mini: {
            download:
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@@images/preview_image/mini',
            height: 65536,
            width: 200,
          },
          preview: {
            download:
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@@images/preview_image/preview',
            height: 65536,
            width: 400,
          },
          teaser: {
            download:
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@@images/preview_image/teaser',
            height: 65536,
            width: 600,
          },
          thumb: {
            download:
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@@images/preview_image/thumb',
            height: 65536,
            width: 128,
          },
          tile: {
            download:
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/@@images/preview_image/tile',
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
              '@@images/image-4203-5adb5a1051adf1fb1843ec145b59c4be.jpeg',
            filename: 'tropical-beach.jpg',
            height: 2810,
            scales: {
              gallery: {
                download:
                  '@@images/image-250-e59724489e4d0cefb284b3a9034a4c57.jpeg',
                height: 167,
                width: 250,
              },
              great: {
                download:
                  '@@images/image-1200-b195f892badc8422e20d27f91aaa11cd.jpeg',
                height: 802,
                width: 1200,
              },
              huge: {
                download:
                  '@@images/image-1600-d670d647f867034cee26004bca4b9036.jpeg',
                height: 1069,
                width: 1600,
              },
              icon: {
                download:
                  '@@images/image-32-1099f2b31f653fe2b5974e7323cc4c66.jpeg',
                height: 21,
                width: 32,
              },
              large: {
                download:
                  '@@images/image-800-6ba8e423369e07037c8766c0872fd658.jpeg',
                height: 534,
                width: 800,
              },
              larger: {
                download:
                  '@@images/image-1000-3e3ae11e0ad35fda2fb4af9704d3f10b.jpeg',
                height: 668,
                width: 1000,
              },
              listing: {
                download:
                  '@@images/image-16-1309806365d629a48482cace2b7f51e4.jpeg',
                height: 10,
                width: 16,
              },
              midi: {
                download:
                  '@@images/image-300-cbc207e9a9e7d7d87d136e934e121c68.jpeg',
                height: 200,
                width: 300,
              },
              mini: {
                download:
                  '@@images/image-200-755a5140a6c6751ae1b9f50222a0580f.jpeg',
                height: 133,
                width: 200,
              },
              preview: {
                download:
                  '@@images/image-400-11fb298670ff9627da4f075cdc34abb4.jpeg',
                height: 267,
                width: 400,
              },
              teaser: {
                download:
                  '@@images/image-600-9f7d822ebce1ef887e8750795e65b149.jpeg',
                height: 401,
                width: 600,
              },
              thumb: {
                download:
                  '@@images/image-128-b656b50774e9ebf117fc6d14ba2cdd3d.jpeg',
                height: 85,
                width: 128,
              },
              tile: {
                download:
                  '@@images/image-64-fc3b97ea98c65429af27d69669f6fd0d.jpeg',
                height: 42,
                width: 64,
              },
            },
            size: 10620773,
            width: 4203,
          },
        ],
        preview_image: [
          {
            'content-type': 'image/jpeg',
            download:
              '@@images/preview_image-4203-dc8e4990e88a781a4f993c38bf027885.jpeg',
            filename: 'tropical-beach.jpg',
            height: 2810,
            scales: {
              gallery: {
                download:
                  '@@images/preview_image-250-16f00a342d6d939e5786f3e5c104cbb9.jpeg',
                height: 167,
                width: 250,
              },
              great: {
                download:
                  '@@images/preview_image-1200-f2227153fe3bc676ca989a460bfe2669.jpeg',
                height: 802,
                width: 1200,
              },
              huge: {
                download:
                  '@@images/preview_image-1600-2c91627110a2095baf8c1987d6c10ad8.jpeg',
                height: 1069,
                width: 1600,
              },
              icon: {
                download:
                  '@@images/preview_image-32-4a7a6e5fe6c7206bf486266cd4ac3b3c.jpeg',
                height: 21,
                width: 32,
              },
              large: {
                download:
                  '@@images/preview_image-800-f69321e02f1a4587e776c228c9360555.jpeg',
                height: 534,
                width: 800,
              },
              larger: {
                download:
                  '@@images/preview_image-1000-c5b3165f21da311808e674d9761746e5.jpeg',
                height: 668,
                width: 1000,
              },
              listing: {
                download:
                  '@@images/preview_image-16-f50605db11ae215eed9306442bc57208.jpeg',
                height: 10,
                width: 16,
              },
              midi: {
                download:
                  '@@images/preview_image-300-bb4f97c012693b64ff6186a6c6732a75.jpeg',
                height: 200,
                width: 300,
              },
              mini: {
                download:
                  '@@images/preview_image-200-56f6c8f0b3ea502b49fd0053eae765f0.jpeg',
                height: 133,
                width: 200,
              },
              preview: {
                download:
                  '@@images/preview_image-400-61e433e074af604753dfbfe5c97c81d9.jpeg',
                height: 267,
                width: 400,
              },
              teaser: {
                download:
                  '@@images/preview_image-600-27ab28411de414d69a0a90e2cf691b2e.jpeg',
                height: 401,
                width: 600,
              },
              thumb: {
                download:
                  '@@images/preview_image-128-377d9050d49dfed0dca6b4c303c14ec6.jpeg',
                height: 85,
                width: 128,
              },
              tile: {
                download:
                  '@@images/preview_image-64-9ce90e826488daf3dddf91b399181d3a.jpeg',
                height: 42,
                width: 64,
              },
            },
            size: 10620773,
            width: 4203,
          },
        ],
      },
      in_response_to: null,
      is_folderish: true,
      last_comment_date: null,
      latitude: 41.8337833,
      listCreators: ['admin'],
      location: null,
      longitude: 12.4677863,
      mime_type: 'text/plain',
      modified: '2023-01-04T16:37:19+00:00',
      nav_title: null,
      open_end: null,
      parent: {
        '@id': 'http://localhost:3000/vivi-il-comune/luoghi',
        UID: '71afefc140f34f718a87f474e0100345',
        title: 'Luoghi',
      },
      portal_type: 'Venue',
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
      tipologia_bando: null,
      tipologia_documento: null,
      tipologia_notizia: null,
      title: 'Il castello normanno',
      total_comments: 0,
      ufficio_responsabile_bando: null,
      update_note: null,
      whole_day: null,
    },
    {
      '@id': '/vivi-il-comune/luoghi/il-castello-normanno-1/multimedia',
      '@type': 'Folder',
      CreationDate: '2023-01-04T16:37:19+00:00',
      Creator: 'admin',
      Date: '2023-01-04T16:37:19+00:00',
      Description: '',
      EffectiveDate: 'None',
      ExpirationDate: 'None',
      ModificationDate: '2023-01-04T16:37:19+00:00',
      Subject: [],
      Subject_bando: null,
      Title: 'Multimedia',
      Type: 'Cartella',
      UID: '2ff9de2af4f147419c1235d102067703',
      apertura_bando: null,
      author_name: null,
      chiusura_procedimento_bando: null,
      cmf_uid: null,
      commentators: [],
      created: '2023-01-04T16:37:19+00:00',
      data_conclusione_incarico: null,
      description: '',
      design_italia_meta_type: 'Cartella',
      destinatari_bando: null,
      effective: null,
      end: null,
      ente_bando: null,
      event_location: null,
      exclude_from_nav: false,
      expires: null,
      geolocation: null,
      getIcon: null,
      getId: 'multimedia',
      getObjSize: '0 KB',
      getPath: '/Plone/vivi-il-comune/luoghi/il-castello-normanno-1/multimedia',
      getRemoteUrl: null,
      getURL:
        'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1/multimedia',
      hasPreviewImage: null,
      head_title: null,
      icona: null,
      id: 'multimedia',
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
      modified: '2023-01-04T16:37:19+00:00',
      nav_title: null,
      open_end: null,
      parent: {
        '@id':
          'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-1',
        UID: '6d27d782beca40deb5c1d3cb8e7392c2',
        title: 'Il castello normanno',
      },
      portal_type: 'Folder',
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
      tipologia_bando: null,
      tipologia_documento: null,
      tipologia_notizia: null,
      title: 'Multimedia',
      total_comments: 0,
      ufficio_responsabile_bando: null,
      update_note: null,
      whole_day: null,
    },
    {
      '@id': '/vivi-il-comune/luoghi/il-castello-normanno-2',
      '@type': 'PuntoDiContatto',
      CreationDate: '2023-01-04T16:38:17+00:00',
      Creator: 'admin',
      Date: '2023-01-04T16:38:17+00:00',
      Description: '',
      EffectiveDate: 'None',
      ExpirationDate: 'None',
      ModificationDate: '2023-01-04T16:38:17+00:00',
      Subject: [],
      Subject_bando: null,
      Title: 'Il castello normanno',
      Type: 'Punto di Contatto',
      UID: '1897b2ce8c7f46c6ba55d3c152eba871',
      apertura_bando: null,
      author_name: null,
      chiusura_procedimento_bando: null,
      cmf_uid: null,
      commentators: [],
      created: '2023-01-04T16:38:17+00:00',
      data_conclusione_incarico: null,
      description: '',
      design_italia_meta_type: 'Punto di Contatto',
      destinatari_bando: null,
      effective: null,
      end: null,
      ente_bando: null,
      event_location: null,
      exclude_from_nav: false,
      expires: null,
      geolocation: null,
      getIcon: null,
      getId: 'il-castello-normanno-2',
      getObjSize: '0 KB',
      getPath: '/Plone/vivi-il-comune/luoghi/il-castello-normanno-2',
      getRemoteUrl: null,
      getURL:
        'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-2',
      hasPreviewImage: null,
      head_title: null,
      icona: null,
      id: 'il-castello-normanno-2',
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
      modified: '2023-01-04T16:38:17+00:00',
      nav_title: null,
      open_end: null,
      parent: {
        '@id': 'http://localhost:3000/vivi-il-comune/luoghi',
        UID: '71afefc140f34f718a87f474e0100345',
        title: 'Luoghi',
      },
      portal_type: 'PuntoDiContatto',
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
      tipologia_bando: null,
      tipologia_documento: null,
      tipologia_notizia: null,
      title: 'Il castello normanno',
      total_comments: 0,
      ufficio_responsabile_bando: null,
      update_note: null,
      whole_day: null,
    },
    {
      '@id': '/vivi-il-comune/luoghi/il-castello-normanno-3',
      '@type': 'Venue',
      CreationDate: '2023-01-04T16:38:47+00:00',
      Creator: 'admin',
      Date: '2023-01-04T16:40:01+00:00',
      Description:
        'Scopri il programma degli eventi dell’estate, fra feste, cultura, attività all’aperto e momenti di socializzazione.',
      EffectiveDate: 'None',
      ExpirationDate: 'None',
      ModificationDate: '2023-01-04T16:40:01+00:00',
      Subject: [],
      Subject_bando: null,
      Title: 'Il castello normanno',
      Type: 'Luogo',
      UID: '4d11d9ca2db34a3c92b60c1fd10b21fb',
      apertura_bando: null,
      author_name: null,
      chiusura_procedimento_bando: null,
      cmf_uid: 169,
      commentators: [],
      created: '2023-01-04T16:38:47+00:00',
      data_conclusione_incarico: null,
      description:
        'Scopri il programma degli eventi dell’estate, fra feste, cultura, attività all’aperto e momenti di socializzazione.',
      design_italia_meta_type: 'Luogo',
      destinatari_bando: null,
      effective: null,
      end: null,
      ente_bando: null,
      event_location: null,
      exclude_from_nav: null,
      expires: null,
      geolocation: {
        latitude: 41.8337833,
        longitude: 12.4677863,
      },
      getIcon: true,
      getId: 'il-castello-normanno-3',
      getObjSize: '20.3 MB',
      getPath: '/Plone/vivi-il-comune/luoghi/il-castello-normanno-3',
      getRemoteUrl: null,
      getURL:
        'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-3',
      hasPreviewImage: true,
      head_title: null,
      icona: null,
      id: 'il-castello-normanno-3',
      image: {
        scales: {
          gallery: {
            download:
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-3/@@images/preview_image/gallery',
            height: 65536,
            width: 250,
          },
          great: {
            download:
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-3/@@images/preview_image/great',
            height: 65536,
            width: 1200,
          },
          huge: {
            download:
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-3/@@images/preview_image/huge',
            height: 65536,
            width: 1600,
          },
          icon: {
            download:
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-3/@@images/preview_image/icon',
            height: 32,
            width: 32,
          },
          large: {
            download:
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-3/@@images/preview_image/large',
            height: 65536,
            width: 800,
          },
          larger: {
            download:
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-3/@@images/preview_image/larger',
            height: 65536,
            width: 1000,
          },
          listing: {
            download:
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-3/@@images/preview_image/listing',
            height: 16,
            width: 16,
          },
          midi: {
            download:
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-3/@@images/preview_image/midi',
            height: 65536,
            width: 300,
          },
          mini: {
            download:
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-3/@@images/preview_image/mini',
            height: 65536,
            width: 200,
          },
          preview: {
            download:
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-3/@@images/preview_image/preview',
            height: 65536,
            width: 400,
          },
          teaser: {
            download:
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-3/@@images/preview_image/teaser',
            height: 65536,
            width: 600,
          },
          thumb: {
            download:
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-3/@@images/preview_image/thumb',
            height: 65536,
            width: 128,
          },
          tile: {
            download:
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-3/@@images/preview_image/tile',
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
              '@@images/image-4203-fa974e7654a24de68a4eef8a3506fdc2.jpeg',
            filename: 'tropical-beach.jpg',
            height: 2810,
            scales: {
              gallery: {
                download:
                  '@@images/image-250-2b4de24284a4ce1ab11ba72ef1c67f81.jpeg',
                height: 167,
                width: 250,
              },
              great: {
                download:
                  '@@images/image-1200-6d1d891de5349e7c934091aafb12dd46.jpeg',
                height: 802,
                width: 1200,
              },
              huge: {
                download:
                  '@@images/image-1600-708e545aa79081d7c3292d05f88a1262.jpeg',
                height: 1069,
                width: 1600,
              },
              icon: {
                download:
                  '@@images/image-32-6abbc2b30a3addcee5f3af9c0f10a940.jpeg',
                height: 21,
                width: 32,
              },
              large: {
                download:
                  '@@images/image-800-bfb06aaa356fe6bcb1bba129cbe890ae.jpeg',
                height: 534,
                width: 800,
              },
              larger: {
                download:
                  '@@images/image-1000-1ddceee21b7cdbaceb1b1fd11246f2e2.jpeg',
                height: 668,
                width: 1000,
              },
              listing: {
                download:
                  '@@images/image-16-ca16df75a62ba0a46a22cd2b5e2bbb7a.jpeg',
                height: 10,
                width: 16,
              },
              midi: {
                download:
                  '@@images/image-300-e1af0d1a3c8c96e5bd38a0bfc5c945ca.jpeg',
                height: 200,
                width: 300,
              },
              mini: {
                download:
                  '@@images/image-200-f65e508d3e812a905dbf907822bb21bb.jpeg',
                height: 133,
                width: 200,
              },
              preview: {
                download:
                  '@@images/image-400-de2a848d48928ad3a1e9705ccdb164bc.jpeg',
                height: 267,
                width: 400,
              },
              teaser: {
                download:
                  '@@images/image-600-453d833503dc750fc8ae6fa64f64d397.jpeg',
                height: 401,
                width: 600,
              },
              thumb: {
                download:
                  '@@images/image-128-7ecaed9f4c742518ed01c96b67369fac.jpeg',
                height: 85,
                width: 128,
              },
              tile: {
                download:
                  '@@images/image-64-97a2eee6d2d68cdf656b5d149b3e1274.jpeg',
                height: 42,
                width: 64,
              },
            },
            size: 10620773,
            width: 4203,
          },
        ],
        preview_image: [
          {
            'content-type': 'image/jpeg',
            download:
              '@@images/preview_image-4203-1ea371aea816d8cd1b93aac22cf984cb.jpeg',
            filename: 'tropical-beach.jpg',
            height: 2810,
            scales: {
              gallery: {
                download:
                  '@@images/preview_image-250-568f666617017609fe0f8fa259b17e6b.jpeg',
                height: 167,
                width: 250,
              },
              great: {
                download:
                  '@@images/preview_image-1200-e52b0eb0a170f94a319a6fd732710376.jpeg',
                height: 802,
                width: 1200,
              },
              huge: {
                download:
                  '@@images/preview_image-1600-89d678d368e9cf958c5e90101cd3a48a.jpeg',
                height: 1069,
                width: 1600,
              },
              icon: {
                download:
                  '@@images/preview_image-32-a0a8c88f1ff54f83c539ff1d9aba9950.jpeg',
                height: 21,
                width: 32,
              },
              large: {
                download:
                  '@@images/preview_image-800-50efe324e9db2b74e3bf9eae73c27cee.jpeg',
                height: 534,
                width: 800,
              },
              larger: {
                download:
                  '@@images/preview_image-1000-7e7f92ec8a3fe196df384ddc2f529023.jpeg',
                height: 668,
                width: 1000,
              },
              listing: {
                download:
                  '@@images/preview_image-16-ff45d93477b570f4269c37e1c682f844.jpeg',
                height: 10,
                width: 16,
              },
              midi: {
                download:
                  '@@images/preview_image-300-f536725415d9ba401a2118ae370c8b89.jpeg',
                height: 200,
                width: 300,
              },
              mini: {
                download:
                  '@@images/preview_image-200-bdb3e50b28f5ed6ba3280c287ea305bb.jpeg',
                height: 133,
                width: 200,
              },
              preview: {
                download:
                  '@@images/preview_image-400-fecfe2ec5efe6aabce295951a0b5b19c.jpeg',
                height: 267,
                width: 400,
              },
              teaser: {
                download:
                  '@@images/preview_image-600-a197f01fdeee89d7542ac27759c96603.jpeg',
                height: 401,
                width: 600,
              },
              thumb: {
                download:
                  '@@images/preview_image-128-71c0088b31ce012445c042cb7bbb9e4f.jpeg',
                height: 85,
                width: 128,
              },
              tile: {
                download:
                  '@@images/preview_image-64-76f649a07053e808e42001207c5bbeca.jpeg',
                height: 42,
                width: 64,
              },
            },
            size: 10620773,
            width: 4203,
          },
        ],
      },
      in_response_to: null,
      is_folderish: true,
      last_comment_date: null,
      latitude: 41.8337833,
      listCreators: ['admin'],
      location: null,
      longitude: 12.4677863,
      mime_type: 'text/plain',
      modified: '2023-01-04T16:40:01+00:00',
      nav_title: null,
      open_end: null,
      parent: {
        '@id': 'http://localhost:3000/vivi-il-comune/luoghi',
        UID: '71afefc140f34f718a87f474e0100345',
        title: 'Luoghi',
      },
      portal_type: 'Venue',
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
      tipologia_bando: null,
      tipologia_documento: null,
      tipologia_notizia: null,
      title: 'Il castello normanno',
      total_comments: 0,
      ufficio_responsabile_bando: null,
      update_note: null,
      whole_day: null,
    },
    {
      '@id': '/vivi-il-comune/luoghi/il-castello-normanno-3/multimedia',
      '@type': 'Folder',
      CreationDate: '2023-01-04T16:38:48+00:00',
      Creator: 'admin',
      Date: '2023-01-04T16:38:48+00:00',
      Description: '',
      EffectiveDate: 'None',
      ExpirationDate: 'None',
      ModificationDate: '2023-01-04T16:38:48+00:00',
      Subject: [],
      Subject_bando: null,
      Title: 'Multimedia',
      Type: 'Cartella',
      UID: 'd926d3fa68c74603b3c7af7837b77456',
      apertura_bando: null,
      author_name: null,
      chiusura_procedimento_bando: null,
      cmf_uid: null,
      commentators: [],
      created: '2023-01-04T16:38:48+00:00',
      data_conclusione_incarico: null,
      description: '',
      design_italia_meta_type: 'Cartella',
      destinatari_bando: null,
      effective: null,
      end: null,
      ente_bando: null,
      event_location: null,
      exclude_from_nav: false,
      expires: null,
      geolocation: null,
      getIcon: null,
      getId: 'multimedia',
      getObjSize: '0 KB',
      getPath: '/Plone/vivi-il-comune/luoghi/il-castello-normanno-3/multimedia',
      getRemoteUrl: null,
      getURL:
        'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-3/multimedia',
      hasPreviewImage: null,
      head_title: null,
      icona: null,
      id: 'multimedia',
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
      modified: '2023-01-04T16:38:48+00:00',
      nav_title: null,
      open_end: null,
      parent: {
        '@id':
          'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-3',
        UID: '4d11d9ca2db34a3c92b60c1fd10b21fb',
        title: 'Il castello normanno',
      },
      portal_type: 'Folder',
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
      tipologia_bando: null,
      tipologia_documento: null,
      tipologia_notizia: null,
      title: 'Multimedia',
      total_comments: 0,
      ufficio_responsabile_bando: null,
      update_note: null,
      whole_day: null,
    },
    {
      '@id': '/vivi-il-comune/luoghi/il-castello-normanno-4',
      '@type': 'Venue',
      CreationDate: '2023-01-04T16:38:55+00:00',
      Creator: 'admin',
      Date: '2023-01-04T16:40:32+00:00',
      Description:
        'Scopri il programma degli eventi dell’estate, fra feste, cultura, attività all’aperto e momenti di socializzazione.',
      EffectiveDate: 'None',
      ExpirationDate: 'None',
      ModificationDate: '2023-01-04T16:40:32+00:00',
      Subject: [],
      Subject_bando: null,
      Title: 'Il castello normanno',
      Type: 'Luogo',
      UID: 'e1b6507b9024422f8d4e99dafe0dcbf9',
      apertura_bando: null,
      author_name: null,
      chiusura_procedimento_bando: null,
      cmf_uid: 170,
      commentators: [],
      created: '2023-01-04T16:38:55+00:00',
      data_conclusione_incarico: null,
      description:
        'Scopri il programma degli eventi dell’estate, fra feste, cultura, attività all’aperto e momenti di socializzazione.',
      design_italia_meta_type: 'Luogo',
      destinatari_bando: null,
      effective: null,
      end: null,
      ente_bando: null,
      event_location: null,
      exclude_from_nav: null,
      expires: null,
      geolocation: {
        latitude: 41.8337833,
        longitude: 12.4677863,
      },
      getIcon: true,
      getId: 'il-castello-normanno-4',
      getObjSize: '20.3 MB',
      getPath: '/Plone/vivi-il-comune/luoghi/il-castello-normanno-4',
      getRemoteUrl: null,
      getURL:
        'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-4',
      hasPreviewImage: true,
      head_title: null,
      icona: null,
      id: 'il-castello-normanno-4',
      image: {
        scales: {
          gallery: {
            download:
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-4/@@images/preview_image/gallery',
            height: 65536,
            width: 250,
          },
          great: {
            download:
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-4/@@images/preview_image/great',
            height: 65536,
            width: 1200,
          },
          huge: {
            download:
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-4/@@images/preview_image/huge',
            height: 65536,
            width: 1600,
          },
          icon: {
            download:
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-4/@@images/preview_image/icon',
            height: 32,
            width: 32,
          },
          large: {
            download:
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-4/@@images/preview_image/large',
            height: 65536,
            width: 800,
          },
          larger: {
            download:
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-4/@@images/preview_image/larger',
            height: 65536,
            width: 1000,
          },
          listing: {
            download:
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-4/@@images/preview_image/listing',
            height: 16,
            width: 16,
          },
          midi: {
            download:
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-4/@@images/preview_image/midi',
            height: 65536,
            width: 300,
          },
          mini: {
            download:
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-4/@@images/preview_image/mini',
            height: 65536,
            width: 200,
          },
          preview: {
            download:
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-4/@@images/preview_image/preview',
            height: 65536,
            width: 400,
          },
          teaser: {
            download:
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-4/@@images/preview_image/teaser',
            height: 65536,
            width: 600,
          },
          thumb: {
            download:
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-4/@@images/preview_image/thumb',
            height: 65536,
            width: 128,
          },
          tile: {
            download:
              'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-4/@@images/preview_image/tile',
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
              '@@images/image-4203-0291912462b165fa1a6bf711f6e0a6cd.jpeg',
            filename: 'tropical-beach.jpg',
            height: 2810,
            scales: {
              gallery: {
                download:
                  '@@images/image-250-fa67c5c9e96d4e9a95e0145e4b19a9c7.jpeg',
                height: 167,
                width: 250,
              },
              great: {
                download:
                  '@@images/image-1200-c63986d1f26d6024e102b13f927ab38d.jpeg',
                height: 802,
                width: 1200,
              },
              huge: {
                download:
                  '@@images/image-1600-ee0bd08d0218e33141fe8c8548376a10.jpeg',
                height: 1069,
                width: 1600,
              },
              icon: {
                download:
                  '@@images/image-32-9bf240ecee9bfaa57ca6303dee9cfc4a.jpeg',
                height: 21,
                width: 32,
              },
              large: {
                download:
                  '@@images/image-800-c46c09784bb2c42dfb1943b7896e759c.jpeg',
                height: 534,
                width: 800,
              },
              larger: {
                download:
                  '@@images/image-1000-4bfbc9c57ced361cdce1e4a52413c054.jpeg',
                height: 668,
                width: 1000,
              },
              listing: {
                download:
                  '@@images/image-16-ccfedcfadd0b38a4279597246d052695.jpeg',
                height: 10,
                width: 16,
              },
              midi: {
                download:
                  '@@images/image-300-52fd5babaaf529a2c315d282d03c32bc.jpeg',
                height: 200,
                width: 300,
              },
              mini: {
                download:
                  '@@images/image-200-7725a0591f50afc551b2b2b1aaef54bc.jpeg',
                height: 133,
                width: 200,
              },
              preview: {
                download:
                  '@@images/image-400-7c1c40bbb3026496bd51662fbf9ca08d.jpeg',
                height: 267,
                width: 400,
              },
              teaser: {
                download:
                  '@@images/image-600-967cab5af73f5058d0f0e1afbed89352.jpeg',
                height: 401,
                width: 600,
              },
              thumb: {
                download:
                  '@@images/image-128-04f773ef8e68838fce02cbc721d26d85.jpeg',
                height: 85,
                width: 128,
              },
              tile: {
                download:
                  '@@images/image-64-c793bd61534bf3425f7e1ced7f8056b7.jpeg',
                height: 42,
                width: 64,
              },
            },
            size: 10620773,
            width: 4203,
          },
        ],
        preview_image: [
          {
            'content-type': 'image/jpeg',
            download:
              '@@images/preview_image-4203-f0d5d724b4aa707e0ff9f5d16e064cae.jpeg',
            filename: 'tropical-beach.jpg',
            height: 2810,
            scales: {
              gallery: {
                download:
                  '@@images/preview_image-250-23767e62e82d6b0418ae13bccf1b6de9.jpeg',
                height: 167,
                width: 250,
              },
              great: {
                download:
                  '@@images/preview_image-1200-163764aa06054f2e678df0ab84049bff.jpeg',
                height: 802,
                width: 1200,
              },
              huge: {
                download:
                  '@@images/preview_image-1600-9c57dea17f8001bdb7af76154ba35a1e.jpeg',
                height: 1069,
                width: 1600,
              },
              icon: {
                download:
                  '@@images/preview_image-32-e3bb3e3b31a7890ab239276d6f3fc377.jpeg',
                height: 21,
                width: 32,
              },
              large: {
                download:
                  '@@images/preview_image-800-72ee2c1ab758e4c8528ccbab0b949db9.jpeg',
                height: 534,
                width: 800,
              },
              larger: {
                download:
                  '@@images/preview_image-1000-d2c7ca379afc467cb42843e907fa676a.jpeg',
                height: 668,
                width: 1000,
              },
              listing: {
                download:
                  '@@images/preview_image-16-e5f7da4d2c3ae65ff7da4e279245618b.jpeg',
                height: 10,
                width: 16,
              },
              midi: {
                download:
                  '@@images/preview_image-300-348e3c650aed79a5caaa38e73f4fd65c.jpeg',
                height: 200,
                width: 300,
              },
              mini: {
                download:
                  '@@images/preview_image-200-ba98f8e7a074d57d69bb45d178b01180.jpeg',
                height: 133,
                width: 200,
              },
              preview: {
                download:
                  '@@images/preview_image-400-022f6ecda4e645a0829fdbc59908a3c1.jpeg',
                height: 267,
                width: 400,
              },
              teaser: {
                download:
                  '@@images/preview_image-600-5f6dcd131ab49dbe6c47ce3e5cd53bf2.jpeg',
                height: 401,
                width: 600,
              },
              thumb: {
                download:
                  '@@images/preview_image-128-0c754cb8b0cc33b7480f415c63382063.jpeg',
                height: 85,
                width: 128,
              },
              tile: {
                download:
                  '@@images/preview_image-64-c44f00c7fa55ae02bb0ab3b66e97432f.jpeg',
                height: 42,
                width: 64,
              },
            },
            size: 10620773,
            width: 4203,
          },
        ],
      },
      in_response_to: null,
      is_folderish: true,
      last_comment_date: null,
      latitude: 41.8337833,
      listCreators: ['admin'],
      location: null,
      longitude: 12.4677863,
      mime_type: 'text/plain',
      modified: '2023-01-04T16:40:32+00:00',
      nav_title: null,
      open_end: null,
      parent: {
        '@id': 'http://localhost:3000/vivi-il-comune/luoghi',
        UID: '71afefc140f34f718a87f474e0100345',
        title: 'Luoghi',
      },
      portal_type: 'Venue',
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
      tipologia_bando: null,
      tipologia_documento: null,
      tipologia_notizia: null,
      title: 'Il castello normanno',
      total_comments: 0,
      ufficio_responsabile_bando: null,
      update_note: null,
      whole_day: null,
    },
    {
      '@id': '/vivi-il-comune/luoghi/il-castello-normanno-4/multimedia',
      '@type': 'Folder',
      CreationDate: '2023-01-04T16:38:55+00:00',
      Creator: 'admin',
      Date: '2023-01-04T16:38:55+00:00',
      Description: '',
      EffectiveDate: 'None',
      ExpirationDate: 'None',
      ModificationDate: '2023-01-04T16:38:55+00:00',
      Subject: [],
      Subject_bando: null,
      Title: 'Multimedia',
      Type: 'Cartella',
      UID: 'd7e1c13369a34bbe935474ddc68292de',
      apertura_bando: null,
      author_name: null,
      chiusura_procedimento_bando: null,
      cmf_uid: null,
      commentators: [],
      created: '2023-01-04T16:38:55+00:00',
      data_conclusione_incarico: null,
      description: '',
      design_italia_meta_type: 'Cartella',
      destinatari_bando: null,
      effective: null,
      end: null,
      ente_bando: null,
      event_location: null,
      exclude_from_nav: false,
      expires: null,
      geolocation: null,
      getIcon: null,
      getId: 'multimedia',
      getObjSize: '0 KB',
      getPath: '/Plone/vivi-il-comune/luoghi/il-castello-normanno-4/multimedia',
      getRemoteUrl: null,
      getURL:
        'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-4/multimedia',
      hasPreviewImage: null,
      head_title: null,
      icona: null,
      id: 'multimedia',
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
      modified: '2023-01-04T16:38:55+00:00',
      nav_title: null,
      open_end: null,
      parent: {
        '@id':
          'http://localhost:3000/vivi-il-comune/luoghi/il-castello-normanno-4',
        UID: 'e1b6507b9024422f8d4e99dafe0dcbf9',
        title: 'Il castello normanno',
      },
      portal_type: 'Folder',
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
      tipologia_bando: null,
      tipologia_documento: null,
      tipologia_notizia: null,
      title: 'Multimedia',
      total_comments: 0,
      ufficio_responsabile_bando: null,
      update_note: null,
      whole_day: null,
    },
  ],
  '@type': 'listing',
  block: 'd59596d3-31ac-4d6b-9ce0-c45be422aca7',
  headlineTag: 'h2',
  hide_dates: false,
  map_size: 'medium',
  query: [],
  querystring: {
    query: '[{…}]',
    sort_order: 'ascending',
  },
  show_description: true,
  show_detail_link: false,
  show_icon: true,
  show_path_filters: false,
  show_section: true,
  show_type: false,
  variation: 'mapTemplate',
  addFilters: 'ƒ addFilters() {}',
  additionalFilters: [],
  items_total: 9,
  loading: false,
  firstLoading: false,
  title: 'Is this the real life?',
  show_map_full_width: true,
  linkHref: [
    {
      '@id': '/vivi-il-comune',
      Description:
        'Tutti gli eventi, le iniziative e i luoghi d’interesse per scoprire e vivere il territorio comunale.',
      Title: 'Vivi il Comune',
      title: 'Vivi il Comune',
    },
  ],
  linkTitle: 'Is this just fantasy?',
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
        <MapTemplate
          data={mock_fields}
          items={mock_fields.items}
          title={mock_fields.title}
          linkHref={mock_fields.linkHref}
          linkTitle={mock_fields.linkTitle}
          show_map_full_width={mock_fields.show_map_full_width}
        />
      </MemoryRouter>
    </Provider>,
  );

  // titolo
  expect(
    screen.getByRole('heading', {
      name: /Is this the real life?/i,
    }),
  ).toBeInTheDocument();

  //mostra mappa a tutta larghezza
  const map = document.querySelector('.map-wrapper');
  expect(map).toHaveClass('full-width');

  //link more
  expect(
    screen.getByRole('link', { name: /Is this just fantasy?/i }),
  ).toBeInTheDocument();
});
