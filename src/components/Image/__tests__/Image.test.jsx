import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Image from '../Image';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const store = mockStore({
  intl: {
    locale: 'en',
    messages: {},
  },
});

const mockedBrain = {
  '@id':
    'http://localhost:3000/Plone/test-martina/evento-test-rotto-nei-listing',
  '@type': 'Event',
  CreationDate: '2023-03-15T14:48:25+00:00',
  Creator: 'admin',
  Date: '2023-05-04T09:41:29+00:00',
  Description: 'sono rotto aggiustami',
  EffectiveDate: 'None',
  ExpirationDate: 'None',
  ModificationDate: '2023-05-04T09:41:29+00:00',
  Subject: [],
  Subject_bando: null,
  Title: 'Evento test rotto nei listing',
  Type: 'Evento',
  UID: '8304fd7c157d454fbb42af4cf76546f5',
  apertura_bando: null,
  author_name: null,
  business_events: [],
  chiusura_procedimento_bando: null,
  cmf_uid: 7185,
  commentators: [],
  created: '2023-03-15T14:48:25+00:00',
  data_conclusione_incarico: null,
  description: 'sono rotto aggiustami',
  design_italia_meta_type: 'Evento',
  destinatari_bando: null,
  effective: null,
  end: '2023-03-15T15:00:00+00:00',
  ente_bando: null,
  event_location: [],
  exclude_from_nav: false,
  expires: null,
  geolocation: null,
  getIcon: true,
  getId: 'evento-test-rotto-nei-listing',
  getObjSize: '134.6 KB',
  getPath: '/Plone/test-martina/evento-test-rotto-nei-listing',
  getRemoteUrl: null,
  getURL:
    'http://localhost:3000/Plone/test-martina/evento-test-rotto-nei-listing',
  hasPreviewImage: true,
  head_title: null,
  icona: null,
  id: 'evento-test-rotto-nei-listing',
  image: {
    scales: {
      gallery: {
        download:
          'http://localhost:3000/Plone/test-martina/evento-test-rotto-nei-listing/@@images/preview_image/gallery',
        height: 65536,
        width: 250,
      },
      great: {
        download:
          'http://localhost:3000/Plone/test-martina/evento-test-rotto-nei-listing/@@images/preview_image/great',
        height: 65536,
        width: 1200,
      },
      huge: {
        download:
          'http://localhost:3000/Plone/test-martina/evento-test-rotto-nei-listing/@@images/preview_image/huge',
        height: 65536,
        width: 1600,
      },
      icon: {
        download:
          'http://localhost:3000/Plone/test-martina/evento-test-rotto-nei-listing/@@images/preview_image/icon',
        height: 32,
        width: 32,
      },
      large: {
        download:
          'http://localhost:3000/Plone/test-martina/evento-test-rotto-nei-listing/@@images/preview_image/large',
        height: 65536,
        width: 800,
      },
      larger: {
        download:
          'http://localhost:3000/Plone/test-martina/evento-test-rotto-nei-listing/@@images/preview_image/larger',
        height: 65536,
        width: 1000,
      },
      listing: {
        download:
          'http://localhost:3000/Plone/test-martina/evento-test-rotto-nei-listing/@@images/preview_image/listing',
        height: 16,
        width: 16,
      },
      midi: {
        download:
          'http://localhost:3000/Plone/test-martina/evento-test-rotto-nei-listing/@@images/preview_image/midi',
        height: 65536,
        width: 300,
      },
      mini: {
        download:
          'http://localhost:3000/Plone/test-martina/evento-test-rotto-nei-listing/@@images/preview_image/mini',
        height: 65536,
        width: 200,
      },
      preview: {
        download:
          'http://localhost:3000/Plone/test-martina/evento-test-rotto-nei-listing/@@images/preview_image/preview',
        height: 65536,
        width: 400,
      },
      teaser: {
        download:
          'http://localhost:3000/Plone/test-martina/evento-test-rotto-nei-listing/@@images/preview_image/teaser',
        height: 65536,
        width: 600,
      },
      thumb: {
        download:
          'http://localhost:3000/Plone/test-martina/evento-test-rotto-nei-listing/@@images/preview_image/thumb',
        height: 65536,
        width: 128,
      },
      tile: {
        download:
          'http://localhost:3000/Plone/test-martina/evento-test-rotto-nei-listing/@@images/preview_image/tile',
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
        download: '@@images/image-1000-88003725ea27f4e9395171b3f7fb061b.jpeg',
        filename: 'meadow1080.jpeg',
        height: 562,
        scales: {
          gallery: {
            download:
              '@@images/image-250-e29ae01c8188a0c30af5dce0ea23f435.jpeg',
            height: 140,
            width: 250,
          },
          icon: {
            download: '@@images/image-32-d6d53f16ad3bc85d8bd4276f6b43d46d.jpeg',
            height: 17,
            width: 32,
          },
          large: {
            download:
              '@@images/image-800-938808b6d68de75fad4527401ec4c491.jpeg',
            height: 449,
            width: 800,
          },
          larger: {
            download:
              '@@images/image-1000-b53ea847c569a5838f2ac6985430e1da.jpeg',
            height: 562,
            width: 1000,
          },
          listing: {
            download: '@@images/image-16-b842d5d598384d975f63dcbe68d5c9c0.jpeg',
            height: 8,
            width: 16,
          },
          midi: {
            download:
              '@@images/image-300-21abb1f57e10d31e84e54690b376c740.jpeg',
            height: 168,
            width: 300,
          },
          mini: {
            download:
              '@@images/image-200-e904e66159773f5e67c196ae978ac0ec.jpeg',
            height: 112,
            width: 200,
          },
          preview: {
            download:
              '@@images/image-400-ad7546b24e8160942e65b18c316eebbc.jpeg',
            height: 224,
            width: 400,
          },
          teaser: {
            download:
              '@@images/image-600-17971ddb7bbf5d97508d7befbc0a0470.jpeg',
            height: 337,
            width: 600,
          },
          thumb: {
            download:
              '@@images/image-128-d4b5139668072bd4d9054c34cf9442bc.jpeg',
            height: 71,
            width: 128,
          },
          tile: {
            download: '@@images/image-64-0aefc657f4c78cb3bc36f32c03c4473d.jpeg',
            height: 35,
            width: 64,
          },
        },
        size: 68908,
        width: 1000,
      },
    ],
    preview_image: [
      {
        'content-type': 'image/jpeg',
        download:
          '@@images/preview_image-1000-9c393bce64a32768b190c63bfc79fa55.jpeg',
        filename: 'meadow1080.jpeg',
        height: 562,
        scales: {
          gallery: {
            download:
              '@@images/preview_image-250-b76480ebb6e6df577471db18da0304a7.jpeg',
            height: 140,
            width: 250,
          },
          icon: {
            download:
              '@@images/preview_image-32-6581e7f3a359e6de942d9c0a1b04bba9.jpeg',
            height: 17,
            width: 32,
          },
          large: {
            download:
              '@@images/preview_image-800-f6eb0865c7dc76f1eb01a14839ad727e.jpeg',
            height: 449,
            width: 800,
          },
          larger: {
            download:
              '@@images/preview_image-1000-9cbfc50181667116db1fff21ffb81fd5.jpeg',
            height: 562,
            width: 1000,
          },
          listing: {
            download:
              '@@images/preview_image-16-3fc4eea2c1c0b3d5edacea1989406db4.jpeg',
            height: 8,
            width: 16,
          },
          midi: {
            download:
              '@@images/preview_image-300-6547734235ba8fd0f09b0f52e044ed06.jpeg',
            height: 168,
            width: 300,
          },
          mini: {
            download:
              '@@images/preview_image-200-692e77b1dcefda79834718aa987705da.jpeg',
            height: 112,
            width: 200,
          },
          preview: {
            download:
              '@@images/preview_image-400-a35347d724b44b4d0760df82a4176875.jpeg',
            height: 224,
            width: 400,
          },
          teaser: {
            download:
              '@@images/preview_image-600-99069c7f388f292e2a93007cfd1dddf6.jpeg',
            height: 337,
            width: 600,
          },
          thumb: {
            download:
              '@@images/preview_image-128-a046b1dadd1731867373425bfa17ef4c.jpeg',
            height: 71,
            width: 128,
          },
          tile: {
            download:
              '@@images/preview_image-64-b76405e9ff1342fba999dabf91ac2ad2.jpeg',
            height: 35,
            width: 64,
          },
        },
        size: 68908,
        width: 1000,
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
  meta_type: 'Dexterity Container',
  mime_type: 'text/plain',
  modified: '2023-05-04T09:41:29+00:00',
  nav_title: null,
  open_end: false,
  parent: {
    '@id': 'http://localhost:3000/Plone/test-martina',
    UID: 'f1aa63e84b4249b1b5851328ffd53f44',
    title: 'Test Martina',
  },
  person_life_events: [],
  portal_type: 'Event',
  recurrence: null,
  review_state: 'private',
  ruolo: null,
  scadenza_bando: null,
  start: '2022-11-19T14:00:00+00:00',
  sync_uid: '8304fd7c157d454fbb42af4cf76546f5@v3.io-comune.redturtle.it',
  tassonomia_argomenti: [
    {
      '@id': 'http://localhost:3000/Plone/argomenti/comune',
      '@type': 'Pagina Argomento',
      CreationDate: '2022-01-10T06:26:48+00:00',
      Creator: 'admin',
      Date: '2022-01-25T06:42:57+00:00',
      Description: '',
      EffectiveDate: '2022-01-25T06:42:57+00:00',
      ExpirationDate: 'None',
      ModificationDate: '2022-08-30T15:08:13+00:00',
      Subject: [],
      Subject_bando: null,
      Title: 'Comune',
      Type: 'Argomento',
      UID: '2df29d32955c412dac59d2438a64cbbf',
      apertura_bando: null,
      author_name: null,
      business_events: null,
      chiusura_procedimento_bando: null,
      cmf_uid: 1784,
      commentators: null,
      created: '2022-01-10T06:26:48+00:00',
      data_conclusione_incarico: null,
      description: '',
      design_italia_meta_type: 'Argomento',
      destinatari_bando: null,
      effective: '2022-01-25T06:42:57+00:00',
      end: null,
      ente_bando: null,
      event_location: null,
      exclude_from_nav: false,
      expires: null,
      geolocation: null,
      getIcon: '',
      getId: 'comune',
      getObjSize: null,
      getPath: '/Plone/argomenti/comune',
      getRemoteUrl: null,
      getURL: 'http://localhost:3000/Plone/argomenti/comune',
      hasPreviewImage: null,
      head_title: null,
      icona: 'building',
      id: 'comune',
      image_field: null,
      image_scales: null,
      in_response_to: null,
      is_folderish: null,
      last_comment_date: null,
      latitude: null,
      listCreators: ['admin'],
      location: null,
      longitude: null,
      meta_type: 'Dexterity Container',
      mime_type: null,
      modified: '2022-08-30T15:08:13+00:00',
      nav_title: null,
      open_end: null,
      parent: null,
      person_life_events: null,
      portal_type: 'Pagina Argomento',
      recurrence: null,
      review_state: 'private',
      ruolo: null,
      scadenza_bando: null,
      start: null,
      sync_uid: null,
      tassonomia_argomenti: null,
      temi_dataset: null,
      tipologia_bando: null,
      tipologia_documenti_albopretorio: null,
      tipologia_documento: null,
      tipologia_evento: null,
      tipologia_frequenza_aggiornamento: null,
      tipologia_incarico: null,
      tipologia_licenze: null,
      tipologia_luogo: null,
      tipologia_notizia: null,
      tipologia_organizzazione: null,
      tipologia_pdc: null,
      tipologia_stati_pratica: null,
      title: 'Comune',
      total_comments: null,
      ufficio_responsabile_bando: null,
      update_note: null,
      whole_day: null,
    },
  ],
  temi_dataset: [],
  tipologia_bando: null,
  tipologia_documenti_albopretorio: [],
  tipologia_documento: [],
  tipologia_evento: [
    {
      title: 'Evento culturale',
      token: 'evento_culturale',
    },
  ],
  tipologia_frequenza_aggiornamento: [],
  tipologia_incarico: [],
  tipologia_licenze: [],
  tipologia_luogo: [],
  tipologia_notizia: [],
  tipologia_organizzazione: [],
  tipologia_pdc: [],
  tipologia_stati_pratica: [],
  title: 'Evento test rotto nei listing',
  total_comments: 0,
  ufficio_responsabile_bando: null,
  update_note: null,
  whole_day: false,
};

const mockedSummary = {
  '@id':
    'http://localhost:3000/Plone/amministrazione/personale-amministrativo/monica-rossini',
  '@type': 'Persona',
  description: '',
  design_italia_meta_type: 'Persona pubblica',
  effective: '2022-02-14T13:45:17+00:00',
  has_children: true,
  id: 'monica-rossini',
  image_field: 'foto_persona',
  image_scales: {
    foto_persona: [
      {
        'content-type': 'image/jpeg',
        download:
          'http://localhost:3000/Plone/amministrazione/personale-amministrativo/monica-rossini/@@images/foto_persona-424-b5ca77428064e1494bf321665ea28e65.jpeg',
        filename: 'mickeyeyes.jpg',
        height: 369,
        scales: {
          gallery: {
            download:
              'http://localhost:3000/Plone/amministrazione/personale-amministrativo/monica-rossini/@@images/foto_persona-250-cbac351505afca6dfd08fd706050cedb.jpeg',
            height: 217,
            width: 250,
          },
          great: {
            download:
              'http://localhost:3000/Plone/amministrazione/personale-amministrativo/monica-rossini/@@images/foto_persona-1200-c0a82d1866ff2d08a6c048bc7b7b1ca1.jpeg',
            height: 369,
            width: 424,
          },
          huge: {
            download:
              'http://localhost:3000/Plone/amministrazione/personale-amministrativo/monica-rossini/@@images/foto_persona-1600-3e45bb6dd52ae834965cda9e0718e475.jpeg',
            height: 369,
            width: 424,
          },
          icon: {
            download:
              'http://localhost:3000/Plone/amministrazione/personale-amministrativo/monica-rossini/@@images/foto_persona-32-36eebaae69826152f529b5385311744f.jpeg',
            height: 27,
            width: 32,
          },
          large: {
            download:
              'http://localhost:3000/Plone/amministrazione/personale-amministrativo/monica-rossini/@@images/foto_persona-800-4c19436e19a37296cdaf002d10affcd5.jpeg',
            height: 369,
            width: 424,
          },
          larger: {
            download:
              'http://localhost:3000/Plone/amministrazione/personale-amministrativo/monica-rossini/@@images/foto_persona-1000-736981d81319b5425ccdfec2963ebf80.jpeg',
            height: 369,
            width: 424,
          },
          listing: {
            download:
              'http://localhost:3000/Plone/amministrazione/personale-amministrativo/monica-rossini/@@images/foto_persona-16-5f902255ae498b09dbfa7b899ccd7392.jpeg',
            height: 13,
            width: 16,
          },
          midi: {
            download:
              'http://localhost:3000/Plone/amministrazione/personale-amministrativo/monica-rossini/@@images/foto_persona-300-65c648fc61aff577a05b3f18ed2819ad.jpeg',
            height: 261,
            width: 300,
          },
          mini: {
            download:
              'http://localhost:3000/Plone/amministrazione/personale-amministrativo/monica-rossini/@@images/foto_persona-200-ed95556be4df5284dfd93e123e4c5d94.jpeg',
            height: 174,
            width: 200,
          },
          preview: {
            download:
              'http://localhost:3000/Plone/amministrazione/personale-amministrativo/monica-rossini/@@images/foto_persona-400-bd95cd2ce1f2bfcb0c9c6402f79f69cc.jpeg',
            height: 348,
            width: 400,
          },
          teaser: {
            download:
              'http://localhost:3000/Plone/amministrazione/personale-amministrativo/monica-rossini/@@images/foto_persona-600-265c5da771163e59cf6282fbb473624e.jpeg',
            height: 369,
            width: 424,
          },
          thumb: {
            download:
              'http://localhost:3000/Plone/amministrazione/personale-amministrativo/monica-rossini/@@images/foto_persona-128-49a659bc174e4f7dfa87caeea577e2d7.jpeg',
            height: 111,
            width: 128,
          },
          tile: {
            download:
              'http://localhost:3000/Plone/amministrazione/personale-amministrativo/monica-rossini/@@images/foto_persona-64-9cc01bcb6a84f82987d0a64f24c6e3ab.jpeg',
            height: 55,
            width: 64,
          },
        },
        size: 21394,
        width: 424,
      },
    ],
  },
  incarichi: 'Responsabile',
  review_state: 'published',
  title: 'Monica Rossini',
};

describe('Image component', () => {
  it('shows image correctly when data is from Brain', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Image
            itemUrl={mockedBrain['@id']}
            image={
              mockedBrain.image_scales?.[mockedBrain.image_field]?.[0] ||
              mockedBrain['@id']
            }
            aria-hidden="true"
            alt={mockedBrain.title}
            title={mockedBrain.title}
            imageField={mockedBrain.image_field}
          />
        </MemoryRouter>
      </Provider>,
    );

    // Test correct rendering
    const component = document.getElementsByClassName(
      'volto-image responsive',
    )?.[0];
    expect(component).toBeInTheDocument();
    const source = component.getElementsByTagName('source')?.[0];
    expect(source).toBeInTheDocument();

    const image = screen.getByAltText('Evento test rotto nei listing');
    expect(image).toBeInTheDocument();

    // Test against #40248 regression, path should be present just once
    const regex = new RegExp(
      '/test-martina/evento-test-rotto-nei-listing',
      'gi',
    );
    // Test src is correct
    expect(image.src?.match(regex)?.length).toBe(1);
    // Test srcSet is correct
    const srcset = source.srcset.split(', ');
    srcset.forEach((src) => {
      expect(src.match(regex)?.length).toBe(1);
    });
  });
  it('shows image correctly when data is from Summary', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Image
            itemUrl={mockedSummary['@id']}
            image={
              mockedSummary.image_scales?.[mockedSummary.image_field]?.[0] ||
              mockedSummary['@id']
            }
            aria-hidden="true"
            alt={mockedSummary.title}
            title={mockedSummary.title}
            imageField={mockedSummary.image_field}
          />
        </MemoryRouter>
      </Provider>,
    );
    // Test correct rendering
    const component = document.getElementsByClassName(
      'volto-image responsive',
    )?.[0];
    expect(component).toBeInTheDocument();
    const source = component.getElementsByTagName('source')?.[0];
    expect(source).toBeInTheDocument();

    const image = screen.getByAltText('Monica Rossini');
    expect(image).toBeInTheDocument();

    // Test against #40248 regression, path should be present just once
    const regex = new RegExp(
      '/amministrazione/personale-amministrativo/monica-rossini',
      'gi',
    );
    // Test src is correct
    expect(image.src?.match(regex)?.length).toBe(1);
    // Test srcSet is correct
    const srcset = source.srcset.split(', ');
    srcset.forEach((src) => {
      expect(src.match(regex)?.length).toBe(1);
    });
  });
});
