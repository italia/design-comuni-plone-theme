import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CartellaModulisticaView from '../CartellaModulisticaView/CartellaModulisticaView';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

// Warning: An update to Icon inside a test was not wrapped in act(...).
// When testing, code that causes React state updates should be wrapped into act(...):
jest.mock('design-comuni-plone-theme/components/ItaliaTheme/Icons/Icon');
jest.mock('@plone/volto/helpers/Loadable/Loadable');
beforeAll(
  async () =>
    await require('@plone/volto/helpers/Loadable/Loadable').__setLoadables(),
);

const mock_mandatory = {
  '@components': {
    actions: {
      '@id':
        'http://localhost:3000/documenti-e-dati/cartella-modulistica/@actions',
    },
    aliases: {
      '@id':
        'http://localhost:3000/documenti-e-dati/cartella-modulistica/@aliases',
    },
    breadcrumbs: {
      '@id':
        'http://localhost:3000/documenti-e-dati/cartella-modulistica/@breadcrumbs',
    },
    contextnavigation: {
      '@id':
        'http://localhost:3000/documenti-e-dati/cartella-modulistica/@contextnavigation',
    },
    'modulistica-items': {
      '@id':
        'http://localhost:3000/documenti-e-dati/cartella-modulistica/@modulistica-items',
    },
    navigation: {
      '@id':
        'http://localhost:3000/documenti-e-dati/cartella-modulistica/@navigation',
    },
    subsite: {},
    translations: {
      '@id':
        'http://localhost:3000/documenti-e-dati/cartella-modulistica/@translations',
    },
    types: {
      '@id':
        'http://localhost:3000/documenti-e-dati/cartella-modulistica/@types',
    },
    workflow: {
      '@id':
        'http://localhost:3000/documenti-e-dati/cartella-modulistica/@workflow',
    },
  },
  '@id': 'http://localhost:3000/documenti-e-dati/cartella-modulistica',
  '@type': 'CartellaModulistica',
  UID: '830cf10073274489b7dc836b2f7ceaa5',
  title: 'Cartella modulistica',
  items: [],
};

const mock_allfields = {
  ...mock_mandatory,
  '@components': {
    actions: {
      '@id':
        'http://localhost:3000/documenti-e-dati/cartella-modulistica/@actions',
    },
    aliases: {
      '@id':
        'http://localhost:3000/documenti-e-dati/cartella-modulistica/@aliases',
    },
    breadcrumbs: {
      '@id':
        'http://localhost:3000/documenti-e-dati/cartella-modulistica/@breadcrumbs',
    },
    contextnavigation: {
      '@id':
        'http://localhost:3000/documenti-e-dati/cartella-modulistica/@contextnavigation',
    },
    'modulistica-items': {
      '@id':
        'http://localhost:3000/documenti-e-dati/cartella-modulistica/@modulistica-items',
    },
    navigation: {
      '@id':
        'http://localhost:3000/documenti-e-dati/cartella-modulistica/@navigation',
    },
    subsite: {},
    translations: {
      '@id':
        'http://localhost:3000/documenti-e-dati/cartella-modulistica/@translations',
    },
    types: {
      '@id':
        'http://localhost:3000/documenti-e-dati/cartella-modulistica/@types',
    },
    workflow: {
      '@id':
        'http://localhost:3000/documenti-e-dati/cartella-modulistica/@workflow',
    },
  },
  '@id': 'http://localhost:3000/documenti-e-dati/cartella-modulistica',
  '@type': 'CartellaModulistica',
  UID: '830cf10073274489b7dc836b2f7ceaa5',
  allow_discussion: false,
  blocks: {
    '7030f852-c6c6-4d8b-a8a7-924eca8425ec': {
      '@type': 'title',
    },
    'd2043aa9-157f-4393-a51c-05811f6e760e': {
      '@type': 'text',
    },
  },
  blocks_layout: {
    items: [
      '7030f852-c6c6-4d8b-a8a7-924eca8425ec',
      'd2043aa9-157f-4393-a51c-05811f6e760e',
    ],
  },
  changeNote: '',
  contributors: [],
  created: '2023-01-30T11:13:06+00:00',
  creators: ['admin'],
  description: 'Is this the real life?',
  design_italia_meta_type: 'Cartella Modulistica',
  effective: null,
  exclude_from_nav: false,
  expires: null,
  id: 'cartella-modulistica',
  image: {
    'content-type': 'image/jpeg',
    download:
      'http://localhost:3000/documenti-e-dati/cartella-modulistica/@@images/image-6240-55d3b20593dd0bc7b5896078c8f4e719.jpeg',
    filename: 'woman-having-online-meeting-work.jpg',
    height: 4160,
    scales: {
      gallery: {
        download:
          'http://localhost:3000/documenti-e-dati/cartella-modulistica/@@images/image-250-898d9ffd0bdf76c03897db43d1d80ba5.jpeg',
        height: 166,
        width: 250,
      },
      great: {
        download:
          'http://localhost:3000/documenti-e-dati/cartella-modulistica/@@images/image-1200-e3403535d4a8b98393402557d99a3f12.jpeg',
        height: 800,
        width: 1200,
      },
      huge: {
        download:
          'http://localhost:3000/documenti-e-dati/cartella-modulistica/@@images/image-1600-c31b2feb3804a05fe8eedfdd536ca70a.jpeg',
        height: 1066,
        width: 1600,
      },
      icon: {
        download:
          'http://localhost:3000/documenti-e-dati/cartella-modulistica/@@images/image-32-48a104f43dc2b16330e806641b07f361.jpeg',
        height: 21,
        width: 32,
      },
      large: {
        download:
          'http://localhost:3000/documenti-e-dati/cartella-modulistica/@@images/image-800-324468051a4489ebeac4f3c03efdd291.jpeg',
        height: 533,
        width: 800,
      },
      larger: {
        download:
          'http://localhost:3000/documenti-e-dati/cartella-modulistica/@@images/image-1000-9a448d55ba29e463db28ec120d491c18.jpeg',
        height: 666,
        width: 1000,
      },
      listing: {
        download:
          'http://localhost:3000/documenti-e-dati/cartella-modulistica/@@images/image-16-420ee82391b08ac55d735d1192b64b42.jpeg',
        height: 10,
        width: 16,
      },
      midi: {
        download:
          'http://localhost:3000/documenti-e-dati/cartella-modulistica/@@images/image-300-0374c5018e056a5a83a3e98beac34704.jpeg',
        height: 200,
        width: 300,
      },
      mini: {
        download:
          'http://localhost:3000/documenti-e-dati/cartella-modulistica/@@images/image-200-a20acc18f89df7c54c69096e388a93ef.jpeg',
        height: 133,
        width: 200,
      },
      preview: {
        download:
          'http://localhost:3000/documenti-e-dati/cartella-modulistica/@@images/image-400-dfb422c8d44f096f0bfc8920cbbbf639.jpeg',
        height: 266,
        width: 400,
      },
      teaser: {
        download:
          'http://localhost:3000/documenti-e-dati/cartella-modulistica/@@images/image-600-d5b9935df00ef8309478ec1e79efd5b0.jpeg',
        height: 400,
        width: 600,
      },
      thumb: {
        download:
          'http://localhost:3000/documenti-e-dati/cartella-modulistica/@@images/image-128-4376443d1a6699dd63b79faa0df6e67c.jpeg',
        height: 85,
        width: 128,
      },
      tile: {
        download:
          'http://localhost:3000/documenti-e-dati/cartella-modulistica/@@images/image-64-bc00e470a493a3df12d97ddae2a1173b.jpeg',
        height: 42,
        width: 64,
      },
    },
    size: 1195679,
    width: 6240,
  },
  image_caption: 'Is this just fantasy?',
  is_folderish: true,
  items: [
    {
      '@id':
        'http://localhost:3000/documenti-e-dati/cartella-modulistica/doc-prova',
      '@type': 'Documento',
      business_events: [],
      description: 'No escape from reality',
      design_italia_meta_type: 'Documento',
      has_children: true,
      id: 'doc-prova',
      image_field: 'preview_image',
      image_scales: {
        image: [
          {
            'content-type': 'image/jpeg',
            download:
              '@@images/image-6240-a65c6f82307f37b81e146e5e61ba203f.jpeg',
            filename: 'woman-having-online-meeting-work.jpg',
            height: 4160,
            scales: {
              gallery: {
                download:
                  '@@images/image-250-6a5599683e5272a9c2b3406416db435c.jpeg',
                height: 166,
                width: 250,
              },
              great: {
                download:
                  '@@images/image-1200-46e8da2eecfa391f283375859a1171eb.jpeg',
                height: 800,
                width: 1200,
              },
              huge: {
                download:
                  '@@images/image-1600-f6033932536f78a690dc456e9fe01a4d.jpeg',
                height: 1066,
                width: 1600,
              },
              icon: {
                download:
                  '@@images/image-32-fdbdae10fbcb1eed333cee956f73fe32.jpeg',
                height: 21,
                width: 32,
              },
              large: {
                download:
                  '@@images/image-800-61c8739f1e5e560880f30ec753de6eb5.jpeg',
                height: 533,
                width: 800,
              },
              larger: {
                download:
                  '@@images/image-1000-0af8d002a9a20dde2e0fcf3902ad2fc7.jpeg',
                height: 666,
                width: 1000,
              },
              listing: {
                download:
                  '@@images/image-16-a797ac9c839f3babd263674e08ee5392.jpeg',
                height: 10,
                width: 16,
              },
              midi: {
                download:
                  '@@images/image-300-b5240a7c79b51553f529602279561979.jpeg',
                height: 200,
                width: 300,
              },
              mini: {
                download:
                  '@@images/image-200-7ca3e15f788f7684d49cedae8efc2ca1.jpeg',
                height: 133,
                width: 200,
              },
              preview: {
                download:
                  '@@images/image-400-4e51014ff9369144951cebea3a4ad33b.jpeg',
                height: 266,
                width: 400,
              },
              teaser: {
                download:
                  '@@images/image-600-454cd96fce374b8dec6cb5c035eceb0d.jpeg',
                height: 400,
                width: 600,
              },
              thumb: {
                download:
                  '@@images/image-128-d620d4f6efdf795d9f8b597a2d33f94f.jpeg',
                height: 85,
                width: 128,
              },
              tile: {
                download:
                  '@@images/image-64-6ef84d7fb93fa8a39fd514dfb9e1874d.jpeg',
                height: 42,
                width: 64,
              },
            },
            size: 1195679,
            width: 6240,
          },
        ],
        preview_image: [
          {
            'content-type': 'image/webp',
            download:
              '@@images/preview_image-2000-cd69d903e06a8531f8c68c89163c6dd6.webp',
            filename:
              'business-teamwork-join-hands-together-business-teamwork-concept_1150-1804.webp',
            height: 1333,
            scales: {
              gallery: {
                download:
                  '@@images/preview_image-250-b1556af446e2bca56d92087bd9a57388.webp',
                height: 166,
                width: 250,
              },
              great: {
                download:
                  '@@images/preview_image-1200-5e0f4529949354c1c5486dcef01e0db1.webp',
                height: 799,
                width: 1200,
              },
              huge: {
                download:
                  '@@images/preview_image-1600-9225b68cf97d3653ed94e83e7aadb484.webp',
                height: 1066,
                width: 1600,
              },
              icon: {
                download:
                  '@@images/preview_image-32-0247442c6e23f4b80e402cbcb6df7c3f.webp',
                height: 21,
                width: 32,
              },
              large: {
                download:
                  '@@images/preview_image-800-10fd9096700f70d487ee1712160b7e4b.webp',
                height: 533,
                width: 800,
              },
              larger: {
                download:
                  '@@images/preview_image-1000-f41265ecfb2320d72f4adab433f71651.webp',
                height: 666,
                width: 1000,
              },
              listing: {
                download:
                  '@@images/preview_image-16-ac88967591003206f1241177bb0ac4e3.webp',
                height: 10,
                width: 16,
              },
              midi: {
                download:
                  '@@images/preview_image-300-d1ed4bb32219243b6384fa8887a6215f.webp',
                height: 199,
                width: 300,
              },
              mini: {
                download:
                  '@@images/preview_image-200-93848aaaf3131eaf0d5df79a5f1cde21.webp',
                height: 133,
                width: 200,
              },
              preview: {
                download:
                  '@@images/preview_image-400-2547f99542de25dcd037de5828cd85b7.webp',
                height: 266,
                width: 400,
              },
              teaser: {
                download:
                  '@@images/preview_image-600-17cea6331cfbfcf2f5ea7a574a29f3c6.webp',
                height: 399,
                width: 600,
              },
              thumb: {
                download:
                  '@@images/preview_image-128-8a1589423c0625739b1b137a77d6165c.webp',
                height: 85,
                width: 128,
              },
              tile: {
                download:
                  '@@images/preview_image-64-05bdc96e1f46e364ef617157998f55db.webp',
                height: 42,
                width: 64,
              },
            },
            size: 202972,
            width: 2000,
          },
        ],
      },
      person_life_events: [],
      review_state: 'private',
      tipologia_documenti_albopretorio: [],
      tipologia_documento: [
        {
          title: 'Modulistica',
          token: 'modulistica',
        },
      ],
      tipologia_licenze: [],
      title: 'Doc prova',
    },
    {
      '@id':
        'http://localhost:3000/documenti-e-dati/cartella-modulistica/prova',
      '@type': 'Documento',
      business_events: [],
      description: 'prova',
      design_italia_meta_type: 'Documento',
      has_children: true,
      id: 'prova',
      image_field: '',
      image_scales: null,
      person_life_events: [],
      review_state: 'private',
      tipologia_documenti_albopretorio: [],
      tipologia_documento: [
        {
          title: 'Modulistica',
          token: 'modulistica',
        },
      ],
      tipologia_licenze: [],
      title: 'prova',
    },
  ],
  items_total: 2,
  language: {
    title: 'Italiano',
    token: 'it',
  },
  layout: 'modulistica_view',
  lock: {
    locked: false,
    stealable: true,
  },
  modified: '2023-01-31T10:11:20+00:00',
  next_item: {
    '@id': 'http://localhost:3000/documenti-e-dati/is-this-the-real-life',
    '@type': 'Documento',
    description: 'Is this just fantasy?',
    title: 'Is this the real life?',
  },
  opengraph_description: null,
  opengraph_image: null,
  opengraph_title: null,
  parent: {
    '@id': 'http://localhost:3000/documenti-e-dati',
    '@type': 'Document',
    description:
      'Donec in consequat nunc. Duis semper fermentum lacus, ac condimentum justo auctor a. Nam erat erat, porta vel pharetra in, ullamcorper vel turpis.',
    design_italia_meta_type: 'Pagina',
    has_children: true,
    id: 'documenti-e-dati',
    image_field: null,
    image_scales: null,
    review_state: 'published',
    title: 'Documenti e dati',
  },
  preview_caption: 'Caught in a landside',
  preview_image: {
    'content-type': 'image/webp',
    download:
      'http://localhost:3000/documenti-e-dati/cartella-modulistica/@@images/preview_image-2000-572d5ecfff7696e453467f9e5164e679.webp',
    filename:
      'business-teamwork-join-hands-together-business-teamwork-concept_1150-1804.webp',
    height: 1333,
    scales: {
      gallery: {
        download:
          'http://localhost:3000/documenti-e-dati/cartella-modulistica/@@images/preview_image-250-4d09368f8368f2bfd1d75c5693dc0ea7.webp',
        height: 166,
        width: 250,
      },
      great: {
        download:
          'http://localhost:3000/documenti-e-dati/cartella-modulistica/@@images/preview_image-1200-11ec0d383bc2e7999782218717c99822.webp',
        height: 799,
        width: 1200,
      },
      huge: {
        download:
          'http://localhost:3000/documenti-e-dati/cartella-modulistica/@@images/preview_image-1600-bca54ed4106261e894052dcd790b8e11.webp',
        height: 1066,
        width: 1600,
      },
      icon: {
        download:
          'http://localhost:3000/documenti-e-dati/cartella-modulistica/@@images/preview_image-32-aca49bebc2ae05c935f2f36b0c6f9fd7.webp',
        height: 21,
        width: 32,
      },
      large: {
        download:
          'http://localhost:3000/documenti-e-dati/cartella-modulistica/@@images/preview_image-800-4cf47716d0646ec6b60553a82e63160b.webp',
        height: 533,
        width: 800,
      },
      larger: {
        download:
          'http://localhost:3000/documenti-e-dati/cartella-modulistica/@@images/preview_image-1000-e0b36037bdc5ac25784ee172a1099d1a.webp',
        height: 666,
        width: 1000,
      },
      listing: {
        download:
          'http://localhost:3000/documenti-e-dati/cartella-modulistica/@@images/preview_image-16-b48adbbc7d4de74d815925a445927247.webp',
        height: 10,
        width: 16,
      },
      midi: {
        download:
          'http://localhost:3000/documenti-e-dati/cartella-modulistica/@@images/preview_image-300-2d5eada7ace351952da1db0cccb211d2.webp',
        height: 199,
        width: 300,
      },
      mini: {
        download:
          'http://localhost:3000/documenti-e-dati/cartella-modulistica/@@images/preview_image-200-0b63f7585a27e697e3316eb752152db9.webp',
        height: 133,
        width: 200,
      },
      preview: {
        download:
          'http://localhost:3000/documenti-e-dati/cartella-modulistica/@@images/preview_image-400-10ed9460347118f2301a5b5903447096.webp',
        height: 266,
        width: 400,
      },
      teaser: {
        download:
          'http://localhost:3000/documenti-e-dati/cartella-modulistica/@@images/preview_image-600-db8f43c2f04b303ed3d395eca213eb9f.webp',
        height: 399,
        width: 600,
      },
      thumb: {
        download:
          'http://localhost:3000/documenti-e-dati/cartella-modulistica/@@images/preview_image-128-899f8c7d07df0896f6b8a5292a2149fa.webp',
        height: 85,
        width: 128,
      },
      tile: {
        download:
          'http://localhost:3000/documenti-e-dati/cartella-modulistica/@@images/preview_image-64-3d0f4f921523383cfa03f92d446bee33.webp',
        height: 42,
        width: 64,
      },
    },
    size: 202972,
    width: 2000,
  },
  previous_item: {
    '@id': 'http://localhost:3000/documenti-e-dati/bandi',
    '@type': 'Document',
    description: '',
    title: 'Bandi',
  },
  related_news: [],
  review_state: 'private',
  rights: '',
  seo_canonical_url: null,
  seo_description: null,
  seo_noindex: null,
  seo_title: null,
  servizi_collegati: [],
  subjects: [],
  title: 'Cartella modulistica',
  version: 'current',
  versioning_enabled: true,
  working_copy: null,
  working_copy_of: null,
};

const store = mockStore({
  intl: {
    locale: 'en',
    messages: {},
  },
  modulisticaItems: {
    error: null,
    data: {
      items: [
        {
          '@id':
            'http://localhost:3000/documenti-e-dati/cartella-modulistica/doc-prova',
          '@type': 'Documento',
          description: 'No escape from reality',
          design_italia_meta_type: 'Documento',
          id: 'doc-prova',
          image_field: null,
          image_scales: null,
          review_state: 'private',
          title: 'Doc prova',
        },
      ],
    },
    loading: false,
    loaded: true,
  },
});

test('renders all mandatory fields in the page', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <CartellaModulisticaView content={mock_mandatory} />
      </MemoryRouter>
    </Provider>,
  );

  //title
  expect(
    screen.getByRole('heading', { name: /Cartella modulistica/i }),
  ).toBeInTheDocument();
});

test('renders all non-mandatory fields in the page', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <CartellaModulisticaView content={mock_allfields} />
      </MemoryRouter>
    </Provider>,
  );

  //titolo
  expect(
    screen.getByRole('heading', { name: /Cartella modulistica/i }),
  ).toBeInTheDocument();
  //descrizione
  expect(screen.getByText(/Is this the real life?/i)).toBeInTheDocument();
  //immagine di testata
  expect(screen.getByAltText(/Cartella modulistica/i)).toBeInTheDocument();

  //items
  expect(screen.getByRole('link', { name: /Doc prova/i })).toBeInTheDocument();
});
