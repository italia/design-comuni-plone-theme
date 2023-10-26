import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import View from '../ArgumentsInEvidence/View';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const mock_fields = {
  '@type': 'argumentsInEvidence',
  arguments: [
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
      commentators: [],
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
      getIcon: true,
      getId: 'sport',
      getObjSize: '2.5 MB',
      getPath: '/Plone/argomenti/sport',
      getRemoteUrl: null,
      getURL: 'http://localhost:3000/argomenti/sport',
      hasPreviewImage: true,
      has_children: false,
      head_title: null,
      icona: 'child',
      id: 'sport',
      image: {
        scales: {
          gallery: {
            download:
              'http://localhost:3000/argomenti/sport/@@images/preview_image/gallery',
            height: 65536,
            width: 250,
          },
          great: {
            download:
              'http://localhost:3000/argomenti/sport/@@images/preview_image/great',
            height: 65536,
            width: 1200,
          },
          huge: {
            download:
              'http://localhost:3000/argomenti/sport/@@images/preview_image/huge',
            height: 65536,
            width: 1600,
          },
          icon: {
            download:
              'http://localhost:3000/argomenti/sport/@@images/preview_image/icon',
            height: 32,
            width: 32,
          },
          large: {
            download:
              'http://localhost:3000/argomenti/sport/@@images/preview_image/large',
            height: 65536,
            width: 800,
          },
          larger: {
            download:
              'http://localhost:3000/argomenti/sport/@@images/preview_image/larger',
            height: 65536,
            width: 1000,
          },
          listing: {
            download:
              'http://localhost:3000/argomenti/sport/@@images/preview_image/listing',
            height: 16,
            width: 16,
          },
          midi: {
            download:
              'http://localhost:3000/argomenti/sport/@@images/preview_image/midi',
            height: 65536,
            width: 300,
          },
          mini: {
            download:
              'http://localhost:3000/argomenti/sport/@@images/preview_image/mini',
            height: 65536,
            width: 200,
          },
          preview: {
            download:
              'http://localhost:3000/argomenti/sport/@@images/preview_image/preview',
            height: 65536,
            width: 400,
          },
          teaser: {
            download:
              'http://localhost:3000/argomenti/sport/@@images/preview_image/teaser',
            height: 65536,
            width: 600,
          },
          thumb: {
            download:
              'http://localhost:3000/argomenti/sport/@@images/preview_image/thumb',
            height: 65536,
            width: 128,
          },
          tile: {
            download:
              'http://localhost:3000/argomenti/sport/@@images/preview_image/tile',
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
              '@@images/image-1156-b363a31095bd7dd29e8db43034101930.png',
            filename: 'foto-ospedale.png',
            height: 940,
            scales: {
              gallery: {
                download:
                  '@@images/image-250-d36cb9d8b7eafe79e77aef1918d4d4ab.png',
                height: 203,
                width: 250,
              },
              icon: {
                download:
                  '@@images/image-32-20e31256d7bc9697496b43c87707a58c.png',
                height: 26,
                width: 32,
              },
              large: {
                download:
                  '@@images/image-800-024c87c429957f89cc73d756fc4746bd.png',
                height: 650,
                width: 800,
              },
              larger: {
                download:
                  '@@images/image-1000-98e368e27da73492cfc2ecf42677f3f9.png',
                height: 813,
                width: 1000,
              },
              listing: {
                download:
                  '@@images/image-16-a34d1052fce49ac8caa67dbc1c328957.png',
                height: 13,
                width: 16,
              },
              midi: {
                download:
                  '@@images/image-300-c0364b93c88c7d2cd05f39eed32396a5.png',
                height: 243,
                width: 300,
              },
              mini: {
                download:
                  '@@images/image-200-5f057e9697fec7513936c740038d37eb.png',
                height: 162,
                width: 200,
              },
              preview: {
                download:
                  '@@images/image-400-dbda504e6633b5bf5998d3209dbe0102.png',
                height: 325,
                width: 400,
              },
              teaser: {
                download:
                  '@@images/image-600-7c40680f994116ea9c91511397b02220.png',
                height: 487,
                width: 600,
              },
              thumb: {
                download:
                  '@@images/image-128-571ad1b0abb7e3470961cd7807eca5fa.png',
                height: 104,
                width: 128,
              },
              tile: {
                download:
                  '@@images/image-64-88e2d6e96e5c12465ca180a1cdd5943d.png',
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
              '@@images/preview_image-1156-87fee3f5d101f33673018e87daebf1a8.png',
            filename: 'foto-ospedale.png',
            height: 940,
            scales: {
              gallery: {
                download:
                  '@@images/preview_image-250-cc98c09dc0eeeeb3de41f53d0ee96f21.png',
                height: 203,
                width: 250,
              },
              icon: {
                download:
                  '@@images/preview_image-32-2f99948c70b433399b90ce469a53f705.png',
                height: 26,
                width: 32,
              },
              large: {
                download:
                  '@@images/preview_image-800-67aad10f4abe5184e21148474b9940af.png',
                height: 650,
                width: 800,
              },
              larger: {
                download:
                  '@@images/preview_image-1000-5eaba148e06c55ff188ca8375cf06525.png',
                height: 813,
                width: 1000,
              },
              listing: {
                download:
                  '@@images/preview_image-16-3ace9b0524eda7022d926bc2cc147189.png',
                height: 13,
                width: 16,
              },
              midi: {
                download:
                  '@@images/preview_image-300-e1baaea8b4add2bc955e56b1e6c6cf38.png',
                height: 243,
                width: 300,
              },
              mini: {
                download:
                  '@@images/preview_image-200-a39fb9422f295c924c9f3bd88c76c179.png',
                height: 162,
                width: 200,
              },
              preview: {
                download:
                  '@@images/preview_image-400-306c4a635ba84cf22d432ccce7fc02bc.png',
                height: 325,
                width: 400,
              },
              teaser: {
                download:
                  '@@images/preview_image-600-c2addb0848185f9512a4dabdba4a0efb.png',
                height: 487,
                width: 600,
              },
              thumb: {
                download:
                  '@@images/preview_image-128-09e6c8df0f7d6922c97c268aba2e9b61.png',
                height: 104,
                width: 128,
              },
              tile: {
                download:
                  '@@images/preview_image-64-4768877433b4d8d7b3f82c88c26db93d.png',
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
      modified: '2023-01-26T11:36:08+00:00',
      nav_title: null,
      open_end: null,
      parent: {
        '@id': 'http://localhost:3000/argomenti',
        UID: 'dea1123d8e734bd7b704354320ec20a7',
        title: 'Argomenti',
      },
      portal_type: 'Pagina Argomento',
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
      title: 'Sport',
      total_comments: 0,
      ufficio_responsabile_bando: null,
      update_note: null,
      whole_day: null,
    },
  ],
  lastChange: 1675259976943,
  subblocks: [
    {
      argument: [
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
          commentators: [],
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
          getIcon: true,
          getId: 'muoversi',
          getObjSize: '1.2 MB',
          getPath: '/Plone/argomenti/muoversi',
          getRemoteUrl: null,
          getURL: 'http://localhost:3000/argomenti/muoversi',
          hasPreviewImage: null,
          has_children: false,
          head_title: null,
          icona: null,
          id: 'muoversi',
          image: {
            scales: {
              gallery: {
                download:
                  'http://localhost:3000/argomenti/muoversi/@@images/image/gallery',
                height: 65536,
                width: 250,
              },
              great: {
                download:
                  'http://localhost:3000/argomenti/muoversi/@@images/image/great',
                height: 65536,
                width: 1200,
              },
              huge: {
                download:
                  'http://localhost:3000/argomenti/muoversi/@@images/image/huge',
                height: 65536,
                width: 1600,
              },
              icon: {
                download:
                  'http://localhost:3000/argomenti/muoversi/@@images/image/icon',
                height: 32,
                width: 32,
              },
              large: {
                download:
                  'http://localhost:3000/argomenti/muoversi/@@images/image/large',
                height: 65536,
                width: 800,
              },
              larger: {
                download:
                  'http://localhost:3000/argomenti/muoversi/@@images/image/larger',
                height: 65536,
                width: 1000,
              },
              listing: {
                download:
                  'http://localhost:3000/argomenti/muoversi/@@images/image/listing',
                height: 16,
                width: 16,
              },
              midi: {
                download:
                  'http://localhost:3000/argomenti/muoversi/@@images/image/midi',
                height: 65536,
                width: 300,
              },
              mini: {
                download:
                  'http://localhost:3000/argomenti/muoversi/@@images/image/mini',
                height: 65536,
                width: 200,
              },
              preview: {
                download:
                  'http://localhost:3000/argomenti/muoversi/@@images/image/preview',
                height: 65536,
                width: 400,
              },
              teaser: {
                download:
                  'http://localhost:3000/argomenti/muoversi/@@images/image/teaser',
                height: 65536,
                width: 600,
              },
              thumb: {
                download:
                  'http://localhost:3000/argomenti/muoversi/@@images/image/thumb',
                height: 65536,
                width: 128,
              },
              tile: {
                download:
                  'http://localhost:3000/argomenti/muoversi/@@images/image/tile',
                height: 64,
                width: 64,
              },
            },
          },
          image_field: 'image',
          image_scales: {
            image: [
              {
                'content-type': 'image/png',
                download:
                  '@@images/image-1156-72b3f858cd1c001e269a67e8bf7d0cf7.png',
                filename: 'foto-ospedale.png',
                height: 940,
                scales: {
                  gallery: {
                    download:
                      '@@images/image-250-330a92ec173db0c682c82fbf7e639da8.png',
                    height: 203,
                    width: 250,
                  },
                  icon: {
                    download:
                      '@@images/image-32-81271d112c4b1f894371d052e6e1e203.png',
                    height: 26,
                    width: 32,
                  },
                  large: {
                    download:
                      '@@images/image-800-f97375aa94b95c69d6ebcc4afaddae12.png',
                    height: 650,
                    width: 800,
                  },
                  larger: {
                    download:
                      '@@images/image-1000-401151cd1facf3736aeab4579b10743b.png',
                    height: 813,
                    width: 1000,
                  },
                  listing: {
                    download:
                      '@@images/image-16-3cfbee0d1f4dd1b9a9a0b7b5a19ad06a.png',
                    height: 13,
                    width: 16,
                  },
                  midi: {
                    download:
                      '@@images/image-300-5e42c7c6b5c92808c0f4a01c01177de7.png',
                    height: 243,
                    width: 300,
                  },
                  mini: {
                    download:
                      '@@images/image-200-1a64d7b3da449ea649c481f656076c14.png',
                    height: 162,
                    width: 200,
                  },
                  preview: {
                    download:
                      '@@images/image-400-7c2262a43ffdc2c13ed4e559bd788a0e.png',
                    height: 325,
                    width: 400,
                  },
                  teaser: {
                    download:
                      '@@images/image-600-b19eba826ce0e5d16955dd962b0fec3c.png',
                    height: 487,
                    width: 600,
                  },
                  thumb: {
                    download:
                      '@@images/image-128-f07275ef79466c0c5cb62d252eb5b34a.png',
                    height: 104,
                    width: 128,
                  },
                  tile: {
                    download:
                      '@@images/image-64-2528d6579e476859670028fa50903360.png',
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
          modified: '2023-01-04T16:06:09+00:00',
          nav_title: null,
          open_end: null,
          parent: {
            '@id': 'http://localhost:3000/argomenti',
            UID: 'dea1123d8e734bd7b704354320ec20a7',
            title: 'Argomenti',
          },
          portal_type: 'Pagina Argomento',
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
          title: 'Muoversi',
          total_comments: 0,
          ufficio_responsabile_bando: null,
          update_note: null,
          whole_day: null,
        },
      ],
      id: '1675259976943',
      title: [
        {
          type: 'p',
          children: [
            {
              text: 'Gunpowder',
            },
          ],
        },
      ],
    },
    {
      argument: [
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
          commentators: [],
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
          getIcon: true,
          getId: 'cultura',
          getObjSize: '1.2 MB',
          getPath: '/Plone/argomenti/cultura',
          getRemoteUrl: null,
          getURL: 'http://localhost:3000/argomenti/cultura',
          hasPreviewImage: null,
          has_children: false,
          head_title: null,
          icona: null,
          id: 'cultura',
          image: {
            scales: {
              gallery: {
                download:
                  'http://localhost:3000/argomenti/cultura/@@images/image/gallery',
                height: 65536,
                width: 250,
              },
              great: {
                download:
                  'http://localhost:3000/argomenti/cultura/@@images/image/great',
                height: 65536,
                width: 1200,
              },
              huge: {
                download:
                  'http://localhost:3000/argomenti/cultura/@@images/image/huge',
                height: 65536,
                width: 1600,
              },
              icon: {
                download:
                  'http://localhost:3000/argomenti/cultura/@@images/image/icon',
                height: 32,
                width: 32,
              },
              large: {
                download:
                  'http://localhost:3000/argomenti/cultura/@@images/image/large',
                height: 65536,
                width: 800,
              },
              larger: {
                download:
                  'http://localhost:3000/argomenti/cultura/@@images/image/larger',
                height: 65536,
                width: 1000,
              },
              listing: {
                download:
                  'http://localhost:3000/argomenti/cultura/@@images/image/listing',
                height: 16,
                width: 16,
              },
              midi: {
                download:
                  'http://localhost:3000/argomenti/cultura/@@images/image/midi',
                height: 65536,
                width: 300,
              },
              mini: {
                download:
                  'http://localhost:3000/argomenti/cultura/@@images/image/mini',
                height: 65536,
                width: 200,
              },
              preview: {
                download:
                  'http://localhost:3000/argomenti/cultura/@@images/image/preview',
                height: 65536,
                width: 400,
              },
              teaser: {
                download:
                  'http://localhost:3000/argomenti/cultura/@@images/image/teaser',
                height: 65536,
                width: 600,
              },
              thumb: {
                download:
                  'http://localhost:3000/argomenti/cultura/@@images/image/thumb',
                height: 65536,
                width: 128,
              },
              tile: {
                download:
                  'http://localhost:3000/argomenti/cultura/@@images/image/tile',
                height: 64,
                width: 64,
              },
            },
          },
          image_field: 'image',
          image_scales: {
            image: [
              {
                'content-type': 'image/png',
                download:
                  '@@images/image-1156-b994150900699e0093542e5d3db853c7.png',
                filename: 'foto-ospedale.png',
                height: 940,
                scales: {
                  gallery: {
                    download:
                      '@@images/image-250-bc201229e2abe7dd074f33a16e9599c5.png',
                    height: 203,
                    width: 250,
                  },
                  icon: {
                    download:
                      '@@images/image-32-c803ddd1891684356893ae702b62a439.png',
                    height: 26,
                    width: 32,
                  },
                  large: {
                    download:
                      '@@images/image-800-69230fb2559c9c1bf3aa7f9ca96f9bb9.png',
                    height: 650,
                    width: 800,
                  },
                  larger: {
                    download:
                      '@@images/image-1000-3dcdfd3aec2590085f72e91edbd3b7a8.png',
                    height: 813,
                    width: 1000,
                  },
                  listing: {
                    download:
                      '@@images/image-16-14c1cd57ff8a06abfb2b25a794e29b6f.png',
                    height: 13,
                    width: 16,
                  },
                  midi: {
                    download:
                      '@@images/image-300-0bc4a40507deea122d0fa5f286303b36.png',
                    height: 243,
                    width: 300,
                  },
                  mini: {
                    download:
                      '@@images/image-200-1e6f228cf348924321abac0440882748.png',
                    height: 162,
                    width: 200,
                  },
                  preview: {
                    download:
                      '@@images/image-400-93b62451d741c871f9c2411f07b34710.png',
                    height: 325,
                    width: 400,
                  },
                  teaser: {
                    download:
                      '@@images/image-600-64d3d5b35b1598fde9b1cede49254053.png',
                    height: 487,
                    width: 600,
                  },
                  thumb: {
                    download:
                      '@@images/image-128-65ac352356b4792886f4e00754f971f7.png',
                    height: 104,
                    width: 128,
                  },
                  tile: {
                    download:
                      '@@images/image-64-21717685e7bd8e4753bcc57a9174b3c1.png',
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
          modified: '2023-01-04T16:05:38+00:00',
          nav_title: null,
          open_end: null,
          parent: {
            '@id': 'http://localhost:3000/argomenti',
            UID: 'dea1123d8e734bd7b704354320ec20a7',
            title: 'Argomenti',
          },
          portal_type: 'Pagina Argomento',
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
          title: 'Cultura',
          total_comments: 0,
          ufficio_responsabile_bando: null,
          update_note: null,
          whole_day: null,
        },
      ],
      id: '1675262982489',
      title: [
        {
          type: 'p',
          children: [
            {
              text: 'Gelatine',
            },
          ],
        },
      ],
    },
  ],
  text: "She's a killer queen",
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

  //title
  expect(
    screen.getByRole('heading', { name: /She's a killer queen/i }),
  ).toBeInTheDocument();

  //altri argomenti
  expect(screen.getByText(/Altri argomenti/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Sport/i })).toBeInTheDocument();

  //argomenti
  expect(
    screen.getByRole('heading', { name: /Muoversi/i }),
  ).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Cultura/i })).toBeInTheDocument();
  expect(screen.getByText(/Gunpowder/i)).toBeInTheDocument();
  expect(screen.getByText(/Gelatine/i)).toBeInTheDocument();
  expect(
    screen.getAllByRole('link', { name: /Esplora argomento/i }),
  ).toBeTruthy();
  expect(
    screen.getAllByRole('link', { name: /Esplora argomento/i }),
  ).toHaveLength(2);
});

test('View renders all fields', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <View data={mock_fields} />
      </MemoryRouter>
    </Provider>,
  );

  //title
  expect(
    screen.getByRole('heading', { name: /She's a killer queen/i }),
  ).toBeInTheDocument();

  //argomenti
  expect(
    screen.getByRole('heading', { name: /Muoversi/i }),
  ).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Cultura/i })).toBeInTheDocument();
  expect(screen.getByText(/Gunpowder/i)).toBeInTheDocument();
  expect(screen.getByText(/Gelatine/i)).toBeInTheDocument();
  expect(
    screen.getAllByRole('link', { name: /Esplora argomento/i }),
  ).toBeTruthy();
  expect(
    screen.getAllByRole('link', { name: /Esplora argomento/i }),
  ).toHaveLength(2);

  //altri argomenti
  expect(screen.getByText(/Altri argomenti/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Sport/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Vedi tutti/i })).toBeInTheDocument();
});
