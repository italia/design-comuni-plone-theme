import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import View from '../HighlightedContent/View';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('design-comuni-plone-theme/components/ItaliaTheme/Icons/Icon');
jest.mock('@plone/volto/helpers/Loadable/Loadable');
beforeAll(
  async () =>
    await require('@plone/volto/helpers/Loadable/Loadable').__setLoadables(),
);

const mock_fields = {
  '@type': 'highlitedContent',
  bg_color: 'primary',
  href: 'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista',
  moreHref: 'http://localhost:3000/servizi',
  moreTitle: 'Met a man from China',
  natural_image_size: true,
  show_date: true,
  show_section: true,
  show_type: true,
};

const store = mockStore({
  intl: {
    locale: 'en',
    messages: {},
  },
  content: {
    subrequests: {
      '3b978157-94d1-4b74-a231-12ce77134c7f': {
        loading: false,
        loaded: true,
        error: null,
        data: {
          '@components': {
            actions: {
              '@id':
                'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@actions',
            },
            aliases: {
              '@id':
                'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@aliases',
            },
            breadcrumbs: {
              '@id':
                'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@breadcrumbs',
            },
            contextnavigation: {
              '@id':
                'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@contextnavigation',
            },
            navigation: {
              '@id':
                'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@navigation',
            },
            subsite: {},
            translations: {
              '@id':
                'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@translations',
            },
            types: {
              '@id':
                'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@types',
            },
            workflow: {
              '@id':
                'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@workflow',
            },
          },
          '@id':
            'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista',
          '@type': 'Event',
          UID: 'c9443cc746ba49c4adda298ad0080643',
          a_chi_si_rivolge: {
            blocks: {},
            blocks_layout: {
              items: [],
            },
          },
          allow_discussion: false,
          changeNote: '',
          circoscrizione: null,
          city: null,
          contact_info: [],
          contributors: [],
          correlato_in_evidenza: [],
          country: null,
          created: '2023-01-03T15:39:57+00:00',
          creators: ['admin'],
          description:
            'Dal 2 al 3 giugno torna il torneo di beneficienza “Tutti in pista”. La raccolta fondi finanzierà progetti sportivi per ragazzi e ragazze.',
          descrizione_destinatari: {
            blocks: {
              'ad5016d1-11b4-43db-b4ef-f21aa9381700': {
                '@type': 'text',
              },
            },
            blocks_layout: {
              items: ['ad5016d1-11b4-43db-b4ef-f21aa9381700'],
            },
          },
          descrizione_estesa: {
            blocks: {
              '2839c176-6d34-49e0-b756-49b28ef9ea73': {
                '@type': 'text',
              },
            },
            blocks_layout: {
              items: ['2839c176-6d34-49e0-b756-49b28ef9ea73'],
            },
          },
          design_italia_meta_type: 'Evento',
          effective: '2023-01-03T15:40:33+00:00',
          end: '2023-06-03T15:00:00+00:00',
          exclude_from_nav: false,
          expires: null,
          geolocation: {
            latitude: 0,
            longitude: 0,
          },
          id: 'torneo-di-beneficienza-tutti-in-pista',
          image: {
            'content-type': 'image/jpeg',
            download:
              'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/image-5184-32d92bd5ca50d12645bd19521f617a1e.jpeg',
            filename: 'national-cancer-institute.jpeg',
            height: 3456,
            scales: {
              gallery: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/image-250-b0dc15fe14239fd6540a8ec0b69b90a1.jpeg',
                height: 166,
                width: 250,
              },
              great: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/image-1200-f2783d495fc42002a30a66621a5f1d42.jpeg',
                height: 800,
                width: 1200,
              },
              huge: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/image-1600-125af2d574d162bcfcba6d736263475b.jpeg',
                height: 1066,
                width: 1600,
              },
              icon: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/image-32-758138967f0d3ac6d281334aa62fb9a1.jpeg',
                height: 21,
                width: 32,
              },
              large: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/image-800-04f6a50efe9ba09785f13efbe81cc835.jpeg',
                height: 533,
                width: 800,
              },
              larger: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/image-1000-c3bf6f131bc3d7186cfb6212474a64bd.jpeg',
                height: 666,
                width: 1000,
              },
              listing: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/image-16-364cc86aaee3918aff2580668562e366.jpeg',
                height: 10,
                width: 16,
              },
              midi: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/image-300-a55537091b4b5dbdd0e7ca968771c435.jpeg',
                height: 200,
                width: 300,
              },
              mini: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/image-200-5c020550114a11c536aa692e4ab528cd.jpeg',
                height: 133,
                width: 200,
              },
              preview: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/image-400-748b5b91d8abe2ac088995ebaf74173c.jpeg',
                height: 266,
                width: 400,
              },
              teaser: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/image-600-0c36e26ba473bcb77673e1c844e2aa79.jpeg',
                height: 400,
                width: 600,
              },
              thumb: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/image-128-3c50593d9eab746a9d675921afd7d63e.jpeg',
                height: 85,
                width: 128,
              },
              tile: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/image-64-202ea134831e1be47e2c2a961fe9f5c5.jpeg',
                height: 42,
                width: 64,
              },
            },
            size: 2026538,
            width: 5184,
          },
          image_caption: null,
          is_folderish: true,
          items: [
            {
              '@id':
                'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/multimedia',
              '@type': 'Document',
              description: '',
              design_italia_meta_type: 'Pagina',
              has_children: false,
              id: 'multimedia',
              image_field: '',
              image_scales: null,
              review_state: 'published',
              title: 'Multimedia',
              url: '/eventi/torneo-di-beneficienza-tutti-in-pista/multimedia',
            },
            {
              '@id':
                'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/sponsor_evento',
              '@type': 'Document',
              description: '',
              design_italia_meta_type: 'Pagina',
              has_children: false,
              id: 'sponsor_evento',
              image_field: '',
              image_scales: null,
              review_state: 'published',
              title: 'Sponsor Evento',
              url: '/eventi/torneo-di-beneficienza-tutti-in-pista/sponsor_evento',
            },
            {
              '@id':
                'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/documenti',
              '@type': 'Document',
              description: '',
              design_italia_meta_type: 'Pagina',
              has_children: false,
              id: 'documenti',
              image_field: '',
              image_scales: null,
              review_state: 'published',
              title: 'Documenti',
              url: '/eventi/torneo-di-beneficienza-tutti-in-pista/documenti',
            },
          ],
          items_total: 3,
          language: {
            title: 'Italiano',
            token: 'it',
          },
          layout: 'event_view',
          lock: {
            locked: false,
            stealable: true,
          },
          luoghi_correlati: [],
          modified: '2023-01-03T15:40:33+00:00',
          next_item: {
            '@id': 'http://localhost:3000/eventi/363-festa-di-santefisio',
            '@type': 'Event',
            description:
              "Il 1° maggio 2019 Cagliari e tutta la Sardegna festeggiano la 363ª Festa di Sant'Efisio. Un intenso momento di devozione, fede, cultura e tradizioni centenarie che si fondono in una processione che non ha eguali.",
            title: "363^ Festa di Sant'Efisio",
          },
          nome_sede: null,
          open_end: false,
          opengraph_description: null,
          opengraph_image: null,
          opengraph_title: null,
          orari: {
            blocks: {
              'ac4b6614-854c-4f32-87b7-8bcaa70df3e3': {
                '@type': 'text',
              },
            },
            blocks_layout: {
              items: ['ac4b6614-854c-4f32-87b7-8bcaa70df3e3'],
            },
          },
          organizzato_da_esterno: {
            blocks: {},
            blocks_layout: {
              items: [],
            },
          },
          organizzato_da_interno: [],
          parent: {
            '@id': 'http://localhost:3000/eventi',
            '@type': 'Document',
            description: '',
            design_italia_meta_type: 'Pagina',
            has_children: true,
            id: 'eventi',
            image_field: null,
            image_scales: null,
            review_state: 'published',
            title: 'Eventi',
          },
          parteciperanno: [],
          patrocinato_da: null,
          persone_amministrazione: [],
          preview_caption: null,
          preview_image: {
            'content-type': 'image/jpeg',
            download:
              'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/preview_image-5184-74c3e55aa69d3eec7332cb8028f247f0.jpeg',
            filename: 'national-cancer-institute.jpeg',
            height: 3456,
            scales: {
              gallery: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/preview_image-250-bd9d757f9bab5f7fe8ae1ac4fbb1adc5.jpeg',
                height: 166,
                width: 250,
              },
              great: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/preview_image-1200-502b536559cea66d298e6857671cfaec.jpeg',
                height: 800,
                width: 1200,
              },
              huge: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/preview_image-1600-cef7453cc7e5539995203acfd0fd67af.jpeg',
                height: 1066,
                width: 1600,
              },
              icon: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/preview_image-32-3e9daca363c77b93aed78e17d721a3bc.jpeg',
                height: 21,
                width: 32,
              },
              large: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/preview_image-800-7e93626815d089878e6ce731efd8561e.jpeg',
                height: 533,
                width: 800,
              },
              larger: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/preview_image-1000-fddf730aa0c1379ad7251efebf48808f.jpeg',
                height: 666,
                width: 1000,
              },
              listing: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/preview_image-16-b792a861a9f3fe0dec3a5689c648bbbd.jpeg',
                height: 10,
                width: 16,
              },
              midi: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/preview_image-300-f5465a4e5f233f8d2a63880b6a8d8eea.jpeg',
                height: 200,
                width: 300,
              },
              mini: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/preview_image-200-f9542fccc1ed011fde2c79b43b0927be.jpeg',
                height: 133,
                width: 200,
              },
              preview: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/preview_image-400-a7b07ee75a650233ddb8a659ca0bbe27.jpeg',
                height: 266,
                width: 400,
              },
              teaser: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/preview_image-600-cf3e72563ace502a8b9e75ade4f6ca49.jpeg',
                height: 400,
                width: 600,
              },
              thumb: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/preview_image-128-e40ea7e792fbba0a30bd5c22cdb1a3a4.jpeg',
                height: 85,
                width: 128,
              },
              tile: {
                download:
                  'http://localhost:3000/eventi/torneo-di-beneficienza-tutti-in-pista/@@images/preview_image-64-8c3cf625de779a0bc3c0a28d2e3cc4be.jpeg',
                height: 42,
                width: 64,
              },
            },
            size: 2026538,
            width: 5184,
          },
          previous_item: {},
          prezzo: {
            blocks: {},
            blocks_layout: {
              items: [],
            },
          },
          quartiere: null,
          recurrence: null,
          relatedItems: [],
          review_state: 'published',
          rights: '',
          seo_canonical_url: null,
          seo_description: null,
          seo_noindex: null,
          seo_title: null,
          sottotitolo: null,
          start: '2023-06-02T14:39:39+00:00',
          street: null,
          strutture_politiche: [],
          subjects: [],
          supportato_da: [],
          sync_uid: null,
          tassonomia_argomenti: [
            {
              '@id': 'http://localhost:3000/argomenti/sport',
              '@type': 'Pagina Argomento',
              description:
                'Informazioni su eventi sportivi, impianti comunali, servizi dedicati allo sport',
              design_italia_meta_type: 'Argomento',
              effective: null,
              has_children: false,
              icona: 'child',
              id: 'sport',
              image_field: null,
              image_scales: null,
              review_state: 'private',
              title: 'Sport',
            },
          ],
          tipologia_evento: null,
          title: 'Torneo di beneficienza "Tutti in pista"',
          ulteriori_informazioni: {
            blocks: {},
            blocks_layout: {
              items: [],
            },
          },
          version: 'current',
          versioning_enabled: true,
          whole_day: false,
          working_copy: null,
          working_copy_of: null,
          zip_code: null,
        },
      },
    },
  },
});

test('View renders all fields', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <View data={mock_fields} id="3b978157-94d1-4b74-a231-12ce77134c7f" />
      </MemoryRouter>
    </Provider>,
  );

  //titolo
  expect(screen.getByRole('heading')).toBeInTheDocument();

  //non modificare dimensione immagini
  const image = document.querySelector('.item-image');
  expect(image).toHaveClass('natural-image-size');

  //mostra sezione
  expect(screen.getByText(/Eventi/)).toBeInTheDocument();
  //mostra tipo
  expect(screen.getByText(/Evento/i)).toBeInTheDocument();

  //mostra data
  expect(screen.getByText(/Jan 3, 2023/i)).toBeInTheDocument();

  // colore sfondo
  const blocco = document.querySelector('.highlitedContent div');
  expect(blocco).toHaveClass('bg-primary');

  //link more
  expect(screen.getByText(/Met a man from china/i)).toBeInTheDocument();
});
