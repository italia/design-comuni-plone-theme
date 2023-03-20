import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import View from '../CTABlock/View';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const mock_fields = {
  '@type': 'cta_block',
  ctaImage: [
    {
      '@id':
        'http://localhost:3000/is-this-the-real-life/business-teamwork-join-hands-together-business-teamwork-concept_1150-1804.webp',
      '@type': 'Image',
      CreationDate: '2023-02-02T11:18:22+00:00',
      Creator: 'admin',
      Date: '2023-02-02T11:18:22+00:00',
      Description: '',
      EffectiveDate: 'None',
      ExpirationDate: 'None',
      ModificationDate: '2023-02-02T11:18:22+00:00',
      Subject: [],
      Subject_bando: null,
      Title: 'Business',
      Type: 'Immagine',
      UID: 'c5f4fadef4104ee784bf6818c424fb1e',
      apertura_bando: null,
      author_name: null,
      chiusura_procedimento_bando: null,
      cmf_uid: null,
      commentators: [],
      created: '2023-02-02T11:18:22+00:00',
      data_conclusione_incarico: null,
      description: '',
      design_italia_meta_type: 'Immagine',
      destinatari_bando: null,
      effective: null,
      end: null,
      ente_bando: null,
      event_location: null,
      exclude_from_nav: false,
      expires: null,
      geolocation: null,
      getIcon: true,
      getId:
        'business-teamwork-join-hands-together-business-teamwork-concept_1150-1804.webp',
      getObjSize: '198.2 KB',
      getPath:
        '/Plone/is-this-the-real-life/business-teamwork-join-hands-together-business-teamwork-concept_1150-1804.webp',
      getRemoteUrl: null,
      getURL:
        'http://localhost:3000/is-this-the-real-life/business-teamwork-join-hands-together-business-teamwork-concept_1150-1804.webp',
      hasPreviewImage: null,
      has_children: false,
      head_title: null,
      icona: null,
      id: 'business-teamwork-join-hands-together-business-teamwork-concept_1150-1804.webp',
      image: {
        scales: {
          gallery: {
            download:
              'http://localhost:3000/is-this-the-real-life/business-teamwork-join-hands-together-business-teamwork-concept_1150-1804.webp/@@images/image/gallery',
            height: 65536,
            width: 250,
          },
          great: {
            download:
              'http://localhost:3000/is-this-the-real-life/business-teamwork-join-hands-together-business-teamwork-concept_1150-1804.webp/@@images/image/great',
            height: 65536,
            width: 1200,
          },
          huge: {
            download:
              'http://localhost:3000/is-this-the-real-life/business-teamwork-join-hands-together-business-teamwork-concept_1150-1804.webp/@@images/image/huge',
            height: 65536,
            width: 1600,
          },
          icon: {
            download:
              'http://localhost:3000/is-this-the-real-life/business-teamwork-join-hands-together-business-teamwork-concept_1150-1804.webp/@@images/image/icon',
            height: 32,
            width: 32,
          },
          large: {
            download:
              'http://localhost:3000/is-this-the-real-life/business-teamwork-join-hands-together-business-teamwork-concept_1150-1804.webp/@@images/image/large',
            height: 65536,
            width: 800,
          },
          larger: {
            download:
              'http://localhost:3000/is-this-the-real-life/business-teamwork-join-hands-together-business-teamwork-concept_1150-1804.webp/@@images/image/larger',
            height: 65536,
            width: 1000,
          },
          listing: {
            download:
              'http://localhost:3000/is-this-the-real-life/business-teamwork-join-hands-together-business-teamwork-concept_1150-1804.webp/@@images/image/listing',
            height: 16,
            width: 16,
          },
          midi: {
            download:
              'http://localhost:3000/is-this-the-real-life/business-teamwork-join-hands-together-business-teamwork-concept_1150-1804.webp/@@images/image/midi',
            height: 65536,
            width: 300,
          },
          mini: {
            download:
              'http://localhost:3000/is-this-the-real-life/business-teamwork-join-hands-together-business-teamwork-concept_1150-1804.webp/@@images/image/mini',
            height: 65536,
            width: 200,
          },
          preview: {
            download:
              'http://localhost:3000/is-this-the-real-life/business-teamwork-join-hands-together-business-teamwork-concept_1150-1804.webp/@@images/image/preview',
            height: 65536,
            width: 400,
          },
          teaser: {
            download:
              'http://localhost:3000/is-this-the-real-life/business-teamwork-join-hands-together-business-teamwork-concept_1150-1804.webp/@@images/image/teaser',
            height: 65536,
            width: 600,
          },
          thumb: {
            download:
              'http://localhost:3000/is-this-the-real-life/business-teamwork-join-hands-together-business-teamwork-concept_1150-1804.webp/@@images/image/thumb',
            height: 65536,
            width: 128,
          },
          tile: {
            download:
              'http://localhost:3000/is-this-the-real-life/business-teamwork-join-hands-together-business-teamwork-concept_1150-1804.webp/@@images/image/tile',
            height: 64,
            width: 64,
          },
        },
      },
      image_field: 'image',
      image_scales: {
        image: [
          {
            'content-type': 'image/webp',
            download:
              '@@images/image-2000-7d300845b28c407363d6e0f57c615056.webp',
            filename:
              'business-teamwork-join-hands-together-business-teamwork-concept_1150-1804.webp',
            height: 1333,
            scales: {
              gallery: {
                download:
                  '@@images/image-250-6cdb492772999c27941f274eecdc92a9.webp',
                height: 166,
                width: 250,
              },
              great: {
                download:
                  '@@images/image-1200-cc034dce5545aab69b8b9683d72bfe16.webp',
                height: 799,
                width: 1200,
              },
              huge: {
                download:
                  '@@images/image-1600-58c6dbe07e86086da50e781f02d0028a.webp',
                height: 1066,
                width: 1600,
              },
              icon: {
                download:
                  '@@images/image-32-b7e94eb4deadc431c49332ea0aee11af.webp',
                height: 21,
                width: 32,
              },
              large: {
                download:
                  '@@images/image-800-8b71d79e3399ac88ed48d49045276dc0.webp',
                height: 533,
                width: 800,
              },
              larger: {
                download:
                  '@@images/image-1000-2a447b7b82343d846aacea605bbf4b0f.webp',
                height: 666,
                width: 1000,
              },
              listing: {
                download:
                  '@@images/image-16-06104e571f80182eb20ae30dd69638e0.webp',
                height: 10,
                width: 16,
              },
              midi: {
                download:
                  '@@images/image-300-3f3e10a6d8f7819caedd759e43066f96.webp',
                height: 199,
                width: 300,
              },
              mini: {
                download:
                  '@@images/image-200-68774779600a6eb307ac9e48635ceb38.webp',
                height: 133,
                width: 200,
              },
              preview: {
                download:
                  '@@images/image-400-b23aeb6a294a600d014c76edbb956f45.webp',
                height: 266,
                width: 400,
              },
              teaser: {
                download:
                  '@@images/image-600-a07683a8a620d198f5d623c11f0aff9f.webp',
                height: 399,
                width: 600,
              },
              thumb: {
                download:
                  '@@images/image-128-16fa3091347b99780ee1ec4a8c77b58e.webp',
                height: 85,
                width: 128,
              },
              tile: {
                download:
                  '@@images/image-64-1eecd43ff5d88b81bc24a410a67f7839.webp',
                height: 42,
                width: 64,
              },
            },
            size: 202972,
            width: 2000,
          },
        ],
      },
      in_response_to: null,
      is_folderish: false,
      last_comment_date: null,
      latitude: null,
      listCreators: ['admin'],
      location: null,
      longitude: null,
      mime_type: 'image/webp',
      modified: '2023-02-02T11:18:22+00:00',
      nav_title: null,
      open_end: null,
      parent: {
        '@id': 'http://localhost:3000/is-this-the-real-life',
        UID: '007550891b9f4ce9b59ce07e78695eb3',
        title: 'Is this the real life',
      },
      portal_type: 'Image',
      recurrence: null,
      review_state: null,
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
      title: 'Business',
      total_comments: 0,
      ufficio_responsabile_bando: null,
      update_note: null,
      whole_day: null,
    },
  ],
  ctaLink: 'http://localhost:3000/eventi',
  ctaLinkTitle: 'In conversation',
  cta_content: {
    blocks: [
      {
        data: {},
        depth: 0,
        entityRanges: [],
        inlineStyleRanges: [],
        key: '2urs0',
        text: 'She never kept the same address',
        type: 'unstyled',
      },
    ],
    entityMap: {},
  },
  cta_title: {
    blocks: [
      {
        data: {},
        depth: 0,
        entityRanges: [],
        inlineStyleRanges: [],
        key: 'd77m6',
        text: 'To avoid complications',
        type: 'unstyled',
      },
    ],
    entityMap: {},
  },
  showFullWidth: true,
  showImage: true,
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
    screen.getByRole('heading', { name: /To avoid complications/i }),
  ).toBeInTheDocument();

  //descrizione
  expect(
    screen.getByText(/She never kept the same address/i),
  ).toBeInTheDocument();

  //immagine di sfondo
  const block = document.querySelector('.cta-block-wrapper');
  expect(block).toHaveClass('has-image');

  //full width
  expect(block).toHaveClass('full-width');

  //cta button
  expect(
    screen.getByRole('link', { name: /in conversation/i }),
  ).toBeInTheDocument();
});
