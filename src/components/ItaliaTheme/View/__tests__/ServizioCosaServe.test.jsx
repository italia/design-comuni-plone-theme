import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ServizioCosaServe from '../ServizioView/ServizioCosaServe';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

// Warning: An update to Icon inside a test was not wrapped in act(...).
// When testing, code that causes React state updates should be wrapped into act(...):
jest.mock('design-comuni-plone-theme/components/ItaliaTheme/Icons/Icon');
// loadables.push('rrule');
jest.mock('@plone/volto/helpers/Loadable/Loadable');
beforeAll(
  async () =>
    await require('@plone/volto/helpers/Loadable/Loadable').__setLoadables(),
);

const mock_mandatory = {
  '@components': {
    actions: {
      '@id': 'http://localhost:3000/servizi/visita-veterinaria-gratis/@actions',
    },
    aliases: {
      '@id': 'http://localhost:3000/servizi/visita-veterinaria-gratis/@aliases',
    },
    breadcrumbs: {
      '@id':
        'http://localhost:3000/servizi/visita-veterinaria-gratis/@breadcrumbs',
    },
    contextnavigation: {
      '@id':
        'http://localhost:3000/servizi/visita-veterinaria-gratis/@contextnavigation',
    },
    navigation: {
      '@id':
        'http://localhost:3000/servizi/visita-veterinaria-gratis/@navigation',
    },
    subsite: {},
    translations: {
      '@id':
        'http://localhost:3000/servizi/visita-veterinaria-gratis/@translations',
    },
    types: {
      '@id': 'http://localhost:3000/servizi/visita-veterinaria-gratis/@types',
    },
    workflow: {
      '@id':
        'http://localhost:3000/servizi/visita-veterinaria-gratis/@workflow',
    },
  },
  '@id': 'http://localhost:3000/servizi/visita-veterinaria-gratis',
  '@type': 'Servizio',
  UID: '3643564b4346478d9d3de790943f3d03',
  id: 'visita-veterinaria-gratis',
};

const mock_all_fields = {
  ...mock_mandatory,
  a_chi_si_rivolge: {
    blocks: {
      '2851114d-2489-4ea3-9b46-062cf6437418': {
        '@type': 'slate',
        plaintext: 'Animaletti',
        value: [
          {
            children: [
              {
                text: 'Animaletti',
              },
            ],
            type: 'p',
          },
        ],
      },
    },
    blocks_layout: {
      items: ['2851114d-2489-4ea3-9b46-062cf6437418'],
    },
  },
  allow_discussion: false,
  altri_documenti: [
    {
      '@id':
        'http://localhost:3000/documenti-e-dati/documenti-albo-pretorio/piano-lavori-2023',
      '@type': 'Documento',
      description:
        'Deliberazione del Consiglio comunale per piano lavori previsto per il 2023',
      design_italia_meta_type: 'Documento',
      effective: null,
      has_children: true,
      id: 'piano-lavori-2023',
      image_field: null,
      image_scales: null,
      review_state: 'private',
      title: 'Piano lavori 2023',
    },
  ],
  area: [
    {
      '@id':
        'http://localhost:3000/amministrazione/aree-di-competenza/area-impiantistica-sportiva-e-manifestazioni-sportive',
      '@type': 'UnitaOrganizzativa',
      address: '',
      circoscrizione: '',
      city: '',
      contact_info: [],
      description: 'Dirigente Arch. M. Alessandra Verdi',
      design_italia_meta_type: 'Unita Organizzativa',
      effective: null,
      geolocation: {
        latitude: 0,
        longitude: 0,
      },
      has_children: true,
      id: 'area-impiantistica-sportiva-e-manifestazioni-sportive',
      image_field: null,
      image_scales: null,
      nome_sede: '',
      quartiere: '',
      review_state: 'private',
      street: '',
      tipologia_organizzazione: {
        title: 'Struttura amministrativa',
        token: 'struttura_amministrativa',
      },
      title: 'Area impiantistica sportiva e manifestazioni sportive',
      zip_code: '',
    },
  ],
  business_events: ['avvio_impresa'],
  canale_digitale: {
    blocks: {
      '7bebaf7f-40fd-4274-82a4-59180e9dff0b': {
        '@type': 'slate',
        plaintext: 'Open yout eyes',
        value: [
          {
            children: [
              {
                text: 'Open yout eyes',
              },
            ],
            type: 'p',
          },
        ],
      },
    },
    blocks_layout: {
      items: ['7bebaf7f-40fd-4274-82a4-59180e9dff0b'],
    },
  },
  canale_digitale_link: 'http://www.google.it',
  canale_fisico: [
    {
      '@id':
        'http://localhost:3000/amministrazione/uffici/assessorato-al-turismo',
      '@type': 'UnitaOrganizzativa',
      address: '',
      circoscrizione: '',
      city: 'Roma',
      contact_info: [],
      description: '',
      design_italia_meta_type: 'Unita Organizzativa',
      effective: null,
      geolocation: {
        latitude: 0,
        longitude: 0,
      },
      has_children: true,
      id: 'assessorato-al-turismo',
      image_field: null,
      image_scales: null,
      nome_sede: '',
      quartiere: '',
      review_state: 'private',
      street: 'Via Roma 1',
      tipologia_organizzazione: {
        title: 'Struttura amministrativa',
        token: 'struttura_amministrativa',
      },
      title: 'Assessorato al Turismo',
      zip_code: '00100',
    },
    {
      '@id': 'http://localhost:3000/amministrazione/uffici/giunta-e-consiglio',
      '@type': 'UnitaOrganizzativa',
      address: '',
      circoscrizione: '',
      city: '',
      contact_info: [
        {
          '@id':
            'http://localhost:3000/amministrazione/punti-di-contatto/is-this-the-real-life',
          '@type': 'PuntoDiContatto',
          description: 'Is this just fantasy',
          design_italia_meta_type: 'Punto di Contatto',
          has_children: false,
          id: 'is-this-the-real-life',
          image_field: null,
          image_scales: null,
          review_state: 'private',
          title: 'Is this the real life',
          value_punto_contatto: [
            {
              pdc_type: 'email',
              pdc_value: 'freddymercury@gmail.com',
            },
          ],
        },
      ],
      description: 'Pierced through the heart but never killed',
      design_italia_meta_type: 'Unita Organizzativa',
      effective: null,
      geolocation: {
        latitude: 0,
        longitude: 0,
      },
      has_children: true,
      id: 'giunta-e-consiglio',
      image_field: null,
      image_scales: null,
      nome_sede: '',
      quartiere: '',
      review_state: 'private',
      street: '',
      tipologia_organizzazione: {
        title: 'Struttura amministrativa',
        token: 'struttura_amministrativa',
      },
      title: 'Giunta e consiglio',
      zip_code: '',
    },
  ],
  casi_particolari: {
    blocks: {
      '02eda6cd-04cf-471e-b002-a0759264c4d9': {
        '@type': 'slate',
        plaintext: 'Mama, just killed a man',
        value: [
          {
            children: [
              {
                text: 'Mama, just killed a man',
              },
            ],
            type: 'p',
          },
        ],
      },
    },
    blocks_layout: {
      items: ['02eda6cd-04cf-471e-b002-a0759264c4d9'],
    },
  },
  changeNote: '',
  chi_puo_presentare: {
    blocks: {
      '3e317fff-a0a6-49c8-85a6-8d415fbc3568': {
        '@type': 'slate',
        plaintext: 'Is this just fantasy?',
        value: [
          {
            children: [
              {
                text: 'Is this just fantasy?',
              },
            ],
            type: 'p',
          },
        ],
      },
    },
    blocks_layout: {
      items: ['3e317fff-a0a6-49c8-85a6-8d415fbc3568'],
    },
  },
  codice_ipa: null,
  come_si_fa: {
    blocks: {
      'dd7c859c-8053-4c16-b753-161c438b32ce': {
        '@type': 'slate',
        plaintext: "There's a lady who's sure",
        value: [
          {
            children: [
              {
                text: "There's a lady who's sure",
              },
            ],
            type: 'p',
          },
        ],
      },
    },
    blocks_layout: {
      items: ['dd7c859c-8053-4c16-b753-161c438b32ce'],
    },
  },
  condizioni_di_servizio: {
    'content-type': 'application/pdf',
    download:
      'http://localhost:3000/servizi/visita-veterinaria-gratis/@@download/condizioni_di_servizio',
    filename: 'doc-prova (1).pdf',
    size: 781,
  },
  contact_info: [
    {
      '@id':
        'http://localhost:3000/amministrazione/personale-amministrativo/marco-murgia',
      '@type': 'PuntoDiContatto',
      description: '',
      design_italia_meta_type: 'Punto di Contatto',
      effective: null,
      has_children: false,
      id: 'marco-murgia',
      image_field: null,
      image_scales: null,
      review_state: 'private',
      title: 'Marco Murgia',
      value_punto_contatto: [
        {
          pdc_type: 'phone',
          pdc_value: '+393333333333',
        },
      ],
    },
  ],
  contributors: [],
  copertura_geografica: {
    blocks: {
      'a04413ee-4676-41b4-9155-6310d8e6ad49': {
        '@type': 'slate',
        plaintext: 'Caught in a landside',
        value: [
          {
            children: [
              {
                text: 'Caught in a landside',
              },
            ],
            type: 'p',
          },
        ],
      },
    },
    blocks_layout: {
      items: ['a04413ee-4676-41b4-9155-6310d8e6ad49'],
    },
  },
  correlato_in_evidenza: [
    {
      '@id':
        'http://localhost:3000/notizie/sport-nel-verde-le-iniziative-della-prossima-edizione',
      '@type': 'News Item',
      description:
        'Le informazioni per partecipare all’iniziativa rivolta a tutte le fasce d’età per promuovere l’attività motoria nelle aree verdi della città.',
      design_italia_meta_type: null,
      effective: '2022-05-18T16:29:00+00:00',
      has_children: true,
      id: 'sport-nel-verde-le-iniziative-della-prossima-edizione',
      image_field: null,
      image_scales: null,
      review_state: 'published',
      tipologia_notizia: {
        title: null,
        token: 'Notizia',
      },
      title: 'Sport nel verde: le iniziative della prossima edizione',
    },
  ],
  cosa_serve: {
    blocks: {
      'acfa657c-fbab-45ee-859f-21bb62b7c661': {
        '@type': 'slate',
        plaintext: "And she's buying a stairway to heaven",
        value: [
          {
            children: [
              {
                text: "And she's buying a stairway to heaven",
              },
            ],
            type: 'p',
          },
        ],
      },
    },
    blocks_layout: {
      items: ['acfa657c-fbab-45ee-859f-21bb62b7c661'],
    },
  },
  cosa_si_ottiene: {
    blocks: {
      'bb4db7e4-0a27-41c9-8f34-512eff06aa86': {
        '@type': 'slate',
        plaintext: 'All that glitters is gold',
        value: [
          {
            children: [
              {
                text: 'All that glitters is gold',
              },
            ],
            type: 'p',
          },
        ],
      },
    },
    blocks_layout: {
      items: ['bb4db7e4-0a27-41c9-8f34-512eff06aa86'],
    },
  },
  costi: {
    blocks: {
      'fb4ab549-4d60-4a24-a5c4-960e7151b28e': {
        '@type': 'slate',
        plaintext: '345',
        value: [
          {
            children: [
              {
                text: '345',
              },
            ],
            type: 'p',
          },
        ],
      },
    },
    blocks_layout: {
      items: ['fb4ab549-4d60-4a24-a5c4-960e7151b28e'],
    },
  },
  created: '2023-01-26T14:59:04+00:00',
  creators: ['admin'],
  description: 'Fai visitare il tuo cucciolo',
  descrizione_estesa: {
    blocks: {
      '038eb313-2c32-4db4-adae-888197220fd9': {
        '@type': 'slate',
        plaintext: 'Is this the real life?',
        value: [
          {
            children: [
              {
                text: 'Is this the real life?',
              },
            ],
            type: 'p',
          },
        ],
      },
    },
    blocks_layout: {
      items: ['038eb313-2c32-4db4-adae-888197220fd9'],
    },
  },
  design_italia_meta_type: 'Servizio',
  dove_rivolgersi: [
    {
      '@id':
        'http://localhost:3000/amministrazione/uffici/ufficio-delle-attivita-produttive-1',
      '@type': 'UnitaOrganizzativa',
      address: '',
      circoscrizione: '',
      city: '',
      contact_info: [
        {
          '@id':
            'http://localhost:3000/amministrazione/uffici/ufficio-delle-attivita-produttive',
          '@type': 'PuntoDiContatto',
          description: '',
          design_italia_meta_type: 'Punto di Contatto',
          has_children: false,
          id: 'ufficio-delle-attivita-produttive',
          image_field: null,
          image_scales: null,
          review_state: 'private',
          title: 'Ufficio delle Attività Produttive',
          value_punto_contatto: [
            {
              pdc_type: 'email',
              pdc_value: 'produttive@comune.cagliari.it',
            },
            {
              pdc_type: 'fax',
              pdc_value: '+393333333333',
            },
            {
              pdc_type: 'url',
              pdc_value: 'www.festadisantelfisio.com',
            },
            {
              pdc_type: 'pec',
              pdc_value: 'contatto@pec.it',
            },
            {
              pdc_type: 'account',
              pdc_value: 'Account',
            },
            {
              pdc_type: 'whatsapp',
              pdc_value: 'Whatsapp',
            },
            {
              pdc_type: 'telegram',
              pdc_value: 'Telegram',
            },
            {
              pdc_type: 'skype',
              pdc_value: 'Skype',
            },
            {
              pdc_type: 'linkedin',
              pdc_value: 'LinkedIn',
            },
            {
              pdc_type: 'twitter',
              pdc_value: 'Twitter',
            },
            {
              pdc_type: 'telefono',
              pdc_value: '+39 070 6776430',
            },
          ],
        },
      ],
      description: 'Prova',
      design_italia_meta_type: 'Unita Organizzativa',
      effective: '2023-02-20T16:12:24+00:00',
      geolocation: {
        latitude: 0,
        longitude: 0,
      },
      has_children: true,
      id: 'ufficio-delle-attivita-produttive-1',
      image_field: null,
      image_scales: null,
      nome_sede: '',
      quartiere: '',
      review_state: 'published',
      street: '',
      tipologia_organizzazione: {
        title: 'Struttura amministrativa␟Ufficio',
        token: 'ufficio',
      },
      title: 'Ufficio delle Attività Produttive',
      zip_code: '',
    },
  ],
  dove_rivolgersi_extra: {
    blocks: {
      '894e9d1d-1c20-4ed6-a4d0-5e25adbfbd9c': {
        '@type': 'slate',
        plaintext: 'I need no sympathy',
        value: [
          {
            children: [
              {
                text: 'I need no sympathy',
              },
            ],
            type: 'p',
          },
        ],
      },
    },
    blocks_layout: {
      items: ['894e9d1d-1c20-4ed6-a4d0-5e25adbfbd9c'],
    },
  },
  effective: null,
  exclude_from_nav: false,
  expires: null,
  id: 'visita-veterinaria-gratis',
  identificativo: null,
  image: {
    'content-type': 'image/jpeg',
    download:
      'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/image-6240-2ad076715e87221b948922fce0e233b7.jpeg',
    filename: 'woman-having-online-meeting-work.jpg',
    height: 4160,
    scales: {
      gallery: {
        download:
          'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/image-250-c8afc5d5252efa1d73cf4ed739c5ec58.jpeg',
        height: 166,
        width: 250,
      },
      great: {
        download:
          'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/image-1200-75abd08aff628b1569b1f0b195f12a9a.jpeg',
        height: 800,
        width: 1200,
      },
      huge: {
        download:
          'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/image-1600-915d78453626f34b2ba2f66c16ba7574.jpeg',
        height: 1066,
        width: 1600,
      },
      icon: {
        download:
          'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/image-32-c03390ef60ee85723150344abac7642a.jpeg',
        height: 21,
        width: 32,
      },
      large: {
        download:
          'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/image-800-0f8a1a3de6be16e7d49c035942013a84.jpeg',
        height: 533,
        width: 800,
      },
      larger: {
        download:
          'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/image-1000-f19bb179e68dc98ba0b92f677b918a65.jpeg',
        height: 666,
        width: 1000,
      },
      listing: {
        download:
          'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/image-16-8f0acc69cdc81779c04a384dc87f1fc4.jpeg',
        height: 10,
        width: 16,
      },
      midi: {
        download:
          'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/image-300-f0de15b8e8770fa872ab31ff00af429c.jpeg',
        height: 200,
        width: 300,
      },
      mini: {
        download:
          'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/image-200-8268df05c644acd1c3de79321f76676e.jpeg',
        height: 133,
        width: 200,
      },
      preview: {
        download:
          'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/image-400-389669cf2b52ab747d89b2a9fe260502.jpeg',
        height: 266,
        width: 400,
      },
      teaser: {
        download:
          'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/image-600-1eb7d62c08824b71786c52b658d6cc25.jpeg',
        height: 400,
        width: 600,
      },
      thumb: {
        download:
          'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/image-128-2d4b7fd80e131940509322905df06ebe.jpeg',
        height: 85,
        width: 128,
      },
      tile: {
        download:
          'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/image-64-ff43e77cf57c828a5af27e39906f40dd.jpeg',
        height: 42,
        width: 64,
      },
    },
    size: 1195679,
    width: 6240,
  },
  image_caption: 'woman working',
  is_folderish: true,
  items: [
    {
      '@id':
        'http://localhost:3000/servizi/visita-veterinaria-gratis/modulistica',
      '@type': 'Document',
      description: '',
      design_italia_meta_type: 'Pagina',
      has_children: false,
      id: 'modulistica',
      image_field: '',
      image_scales: null,
      review_state: 'private',
      title: 'Modulistica',
    },
    {
      '@id': 'http://localhost:3000/servizi/visita-veterinaria-gratis/allegati',
      '@type': 'Document',
      description: '',
      design_italia_meta_type: 'Pagina',
      has_children: false,
      id: 'allegati',
      image_field: '',
      image_scales: null,
      review_state: 'private',
      title: 'Allegati',
    },
  ],
  items_total: 2,
  language: {
    title: 'Italiano',
    token: 'it',
  },
  layout: 'view',
  link_siti_esterni: {
    blocks: {
      'ff02a375-2be1-4a43-b758-dbb1fae8fa71': {
        '@type': 'slate',
        plaintext: 'Put a gun against his head',
        value: [
          {
            children: [
              {
                text: 'Put a gun against his head',
              },
            ],
            type: 'p',
          },
        ],
      },
    },
    blocks_layout: {
      items: ['ff02a375-2be1-4a43-b758-dbb1fae8fa71'],
    },
  },
  lock: {
    locked: false,
    stealable: true,
  },
  modified: '2023-03-15T15:56:43+00:00',
  motivo_stato_servizio: {
    blocks: {
      'c19f982c-ce7a-4050-aa60-65a92723db34': {
        '@type': 'slate',
        plaintext: 'Motivazione',
        value: [
          {
            children: [
              {
                text: 'Motivazione',
              },
            ],
            type: 'p',
          },
        ],
      },
    },
    blocks_layout: {
      items: ['c19f982c-ce7a-4050-aa60-65a92723db34'],
    },
  },
  next_item: {},
  opengraph_description: null,
  opengraph_image: null,
  opengraph_title: null,
  parent: {
    '@id': 'http://localhost:3000/servizi',
    '@type': 'Document',
    description:
      'Tutti i servizi comunali per i cittadini, disponibili online o a sportello, per richiedere documenti e permessi, iscriversi a graduatorie ed effettuare pagamenti.',
    design_italia_meta_type: 'Pagina',
    has_children: true,
    id: 'servizi',
    image_field: null,
    image_scales: null,
    review_state: 'published',
    title: 'Servizi',
  },
  person_life_events: ['possesso_cura_smarrimento_animale_da_compagnia'],
  prenota_appuntamento: {
    blocks: {
      'e26f97de-e008-40a1-929f-315a362f7107': {
        '@type': 'slate',
        plaintext: "Because I'm easy come, easy go",
        value: [
          {
            children: [
              {
                text: "Because I'm easy come, easy go",
              },
            ],
            type: 'p',
          },
        ],
      },
    },
    blocks_layout: {
      items: ['e26f97de-e008-40a1-929f-315a362f7107'],
    },
  },
  preview_caption: 'veterinario',
  preview_image: {
    'content-type': 'image/webp',
    download:
      'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/preview_image-2000-452abf4abe0a486b24c37f972f1008b8.webp',
    filename: 'doctor-with-stethoscope-hands-hospital-background_1423-1.webp',
    height: 1333,
    scales: {
      gallery: {
        download:
          'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/preview_image-250-991bdae7d7d0aa8146a42d36732e0fe5.webp',
        height: 166,
        width: 250,
      },
      great: {
        download:
          'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/preview_image-1200-08cb7845737dfc724cf958dace170b26.webp',
        height: 799,
        width: 1200,
      },
      huge: {
        download:
          'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/preview_image-1600-94397910f58fe856e7c0f8886d7cef4f.webp',
        height: 1066,
        width: 1600,
      },
      icon: {
        download:
          'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/preview_image-32-8e7bdd7cdb86dd676cf8a46bdd8303c7.webp',
        height: 21,
        width: 32,
      },
      large: {
        download:
          'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/preview_image-800-cd273a856764ba9e4040655b60cf7f1f.webp',
        height: 533,
        width: 800,
      },
      larger: {
        download:
          'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/preview_image-1000-a05a4aceb0b6719f15f2902ea64387cc.jpeg',
        height: 666,
        width: 1000,
      },
      listing: {
        download:
          'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/preview_image-16-b4ffbc515fa2589647e9f4a14cbc4734.jpeg',
        height: 10,
        width: 16,
      },
      midi: {
        download:
          'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/preview_image-300-ef245aefac982a915a56b46029524aa2.webp',
        height: 199,
        width: 300,
      },
      mini: {
        download:
          'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/preview_image-200-84aa8a2cb57ec00e25b0e80068af1538.webp',
        height: 133,
        width: 200,
      },
      preview: {
        download:
          'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/preview_image-400-026865d13499ea9d05b2bb08c56a6de0.webp',
        height: 266,
        width: 400,
      },
      teaser: {
        download:
          'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/preview_image-600-fd5f6bbc43581c184b621b9aac163f9e.jpeg',
        height: 399,
        width: 600,
      },
      thumb: {
        download:
          'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/preview_image-128-9e57ee33f29de8820baedcde27c413c7.webp',
        height: 85,
        width: 128,
      },
      tile: {
        download:
          'http://localhost:3000/servizi/visita-veterinaria-gratis/@@images/preview_image-64-a6a6405d70d5c2b90298692dce2ffd8f.webp',
        height: 42,
        width: 64,
      },
    },
    size: 199994,
    width: 2000,
  },
  previous_item: {
    '@id': 'http://localhost:3000/servizi/appalti-pubblici',
    '@type': 'Document',
    description: '',
    title: 'Appalti pubblici',
  },
  procedure_collegate: {
    blocks: {
      '3ab3b686-ab6e-4a85-bd7b-361e091c05b3': {
        '@type': 'slate',
        plaintext: 'No escape from reality',
        value: [
          {
            children: [
              {
                text: 'No escape from reality',
              },
            ],
            type: 'p',
          },
        ],
      },
    },
    blocks_layout: {
      items: ['3ab3b686-ab6e-4a85-bd7b-361e091c05b3'],
    },
  },
  relatedItems: [
    {
      '@id':
        'http://localhost:3000/notizie/chiusa-per-ristrutturazione-la-piscina-minghetti',
      '@type': 'News Item',
      description:
        'Partiti i lavori per l’adeguamento dell’impianto. La riapertura è prevista per giugno 2023.',
      design_italia_meta_type: 'Avviso',
      effective: null,
      has_children: true,
      id: 'chiusa-per-ristrutturazione-la-piscina-minghetti',
      image_field: null,
      image_scales: null,
      review_state: 'private',
      tipologia_notizia: {
        title: 'Avviso',
        token: 'avviso',
      },
      title: 'Chiusa per ristrutturazione la piscina Minghetti',
    },
  ],
  related_news: [],
  review_state: 'private',
  rights: '',
  seo_canonical_url: null,
  seo_description: null,
  seo_noindex: null,
  seo_title: null,
  servizi_collegati: [
    {
      '@id':
        'http://localhost:3000/servizi/appalti-pubblici/concessione-degli-impianti-sportivi',
      '@type': 'Servizio',
      canale_digitale: {
        blocks: {
          '33545c64-eadf-429d-9a20-0ab4451bbf2c': {
            '@type': 'slate',
            plaintext: '',
            value: [
              {
                children: [
                  {
                    text: '',
                  },
                ],
                type: 'p',
              },
            ],
          },
        },
        blocks_layout: {
          items: ['33545c64-eadf-429d-9a20-0ab4451bbf2c'],
        },
      },
      description: 'Domanda per la concessione degli impianti sportivi',
      design_italia_meta_type: 'Servizio',
      effective: null,
      has_children: true,
      id: 'concessione-degli-impianti-sportivi',
      image_field: null,
      image_scales: null,
      parent_title: 'Appalti pubblici',
      parent_url: 'http://localhost:3000/servizi/appalti-pubblici',
      review_state: 'private',
      title: 'Concessione degli impianti sportivi',
    },
  ],
  settore_merceologico: null,
  sottotitolo: 'Visite gratuite per tutti',
  stato_servizio: false,
  subjects: [],
  tassonomia_argomenti: [
    {
      '@id': 'http://localhost:3000/argomenti/vivere-la-citta',
      '@type': 'Pagina Argomento',
      description: '',
      design_italia_meta_type: 'Argomento',
      effective: null,
      has_children: false,
      id: 'vivere-la-citta',
      image_field: null,
      image_scales: null,
      review_state: 'private',
      title: 'Vivere la città',
    },
  ],
  tempi_e_scadenze: {
    blocks: {
      'e0c64130-00d4-4747-bc21-b58733cb1b7f': {
        '@type': 'slate',
        plaintext: 'Dopodomani',
        value: [
          {
            children: [
              {
                text: 'Dopodomani',
              },
            ],
            type: 'p',
          },
        ],
      },
    },
    blocks_layout: {
      items: ['e0c64130-00d4-4747-bc21-b58733cb1b7f'],
    },
  },
  timeline_tempi_scadenze: [
    {
      data_scadenza: '2023-01-28',
      interval_qt: '',
      interval_type: '',
      milestone: 'Tra due giorni',
      milestone_description: "Any way the wind blows doesn't really matter to",
    },
  ],
  title: 'Visita veterinaria gratis',
  ufficio_responsabile: [
    {
      '@id': 'http://localhost:3000/amministrazione/uffici/giunta-e-consiglio',
      '@type': 'UnitaOrganizzativa',
      address: '',
      circoscrizione: '',
      city: '',
      contact_info: [
        {
          '@id':
            'http://localhost:3000/amministrazione/punti-di-contatto/is-this-the-real-life',
          '@type': 'PuntoDiContatto',
          description: 'Is this just fantasy',
          design_italia_meta_type: 'Punto di Contatto',
          has_children: false,
          id: 'is-this-the-real-life',
          image_field: null,
          image_scales: null,
          review_state: 'private',
          title: 'Is this the real life',
          value_punto_contatto: [
            {
              pdc_type: 'email',
              pdc_value: 'freddymercury@gmail.com',
            },
          ],
        },
      ],
      description: 'Pierced through the heart but never killed',
      design_italia_meta_type: 'Unita Organizzativa',
      effective: null,
      geolocation: {
        latitude: 0,
        longitude: 0,
      },
      has_children: true,
      id: 'giunta-e-consiglio',
      image_field: null,
      image_scales: null,
      nome_sede: '',
      quartiere: '',
      review_state: 'private',
      street: '',
      tipologia_organizzazione: {
        title: 'Struttura amministrativa',
        token: 'struttura_amministrativa',
      },
      title: 'Giunta e consiglio',
      zip_code: '',
    },
  ],
  ulteriori_informazioni: {
    blocks: {
      '89f08a66-9c6a-4a30-86d8-d403475eba6e': {
        '@type': 'slate',
        plaintext: 'pulled my trigger',
        value: [
          {
            children: [
              {
                text: 'pulled my trigger',
              },
            ],
            type: 'p',
          },
        ],
      },
    },
    blocks_layout: {
      items: ['89f08a66-9c6a-4a30-86d8-d403475eba6e'],
    },
  },
  version: 'current',
  versioning_enabled: true,
  vincoli: {
    blocks: {
      'b3206125-d0d6-474e-935e-09d28602beca': {
        '@type': 'slate',
        plaintext: 'Little high, little low',
        value: [
          {
            children: [
              {
                text: 'Little high, little low',
              },
            ],
            type: 'p',
          },
        ],
      },
    },
    blocks_layout: {
      items: ['b3206125-d0d6-474e-935e-09d28602beca'],
    },
  },
  working_copy: null,
  working_copy_of: null,
};

const store = mockStore({
  intl: {
    locale: 'en',
    messages: {},
  },
  content: {
    subrequests: {
      '/amministrazione/personale-amministrativo/marco-murgia': {
        loading: false,
        loaded: true,
        error: null,
        data: {
          '@components': {
            actions: {
              '@id':
                'http://localhost:3000/amministrazione/personale-amministrativo/marco-murgia/@actions',
            },
            aliases: {
              '@id':
                'http://localhost:3000/amministrazione/personale-amministrativo/marco-murgia/@aliases',
            },
            breadcrumbs: {
              '@id':
                'http://localhost:3000/amministrazione/personale-amministrativo/marco-murgia/@breadcrumbs',
            },
            contextnavigation: {
              '@id':
                'http://localhost:3000/amministrazione/personale-amministrativo/marco-murgia/@contextnavigation',
            },
            navigation: {
              '@id':
                'http://localhost:3000/amministrazione/personale-amministrativo/marco-murgia/@navigation',
            },
            subsite: {},
            translations: {
              '@id':
                'http://localhost:3000/amministrazione/personale-amministrativo/marco-murgia/@translations',
            },
            types: {
              '@id':
                'http://localhost:3000/amministrazione/personale-amministrativo/marco-murgia/@types',
            },
            workflow: {
              '@id':
                'http://localhost:3000/amministrazione/personale-amministrativo/marco-murgia/@workflow',
            },
          },
          '@id':
            'http://localhost:3000/amministrazione/personale-amministrativo/marco-murgia',
          '@type': 'PuntoDiContatto',
          UID: '9dfa6d1a686544a4b93b7e4c739530c0',
          allow_discussion: false,
          changeNote: '',
          contributors: [],
          created: '2023-01-04T14:19:47+00:00',
          creators: ['admin'],
          description: '',
          design_italia_meta_type: 'Punto di Contatto',
          effective: null,
          exclude_from_nav: false,
          expires: null,
          id: 'marco-murgia',
          is_folderish: true,
          items: [],
          items_total: 0,
          language: {
            title: 'Italiano',
            token: 'it',
          },
          layout: 'view',
          lock: {
            locked: false,
            stealable: true,
          },
          modified: '2023-01-04T14:19:47+00:00',
          next_item: {
            '@id':
              'http://localhost:3000/amministrazione/personale-amministrativo/marco-murgia-1',
            '@type': 'Persona',
            description: '',
            title: 'Marco Murgia',
          },
          opengraph_description: null,
          opengraph_image: null,
          opengraph_title: null,
          parent: {
            '@id':
              'http://localhost:3000/amministrazione/personale-amministrativo',
            '@type': 'Document',
            description: '',
            design_italia_meta_type: 'Pagina',
            has_children: true,
            id: 'personale-amministrativo',
            image_field: null,
            image_scales: null,
            review_state: 'private',
            title: 'Personale Amministrativo',
          },
          persona: [],
          persone_correlate: [
            {
              '@id':
                'http://localhost:3000/amministrazione/personale-amministrativo/marco-murgia-1',
              '@type': 'Persona',
              description: '',
              design_italia_meta_type: 'Persona pubblica',
              has_children: true,
              id: 'marco-murgia-1',
              image_field: 'foto_persona',
              image_scales: {
                foto_persona: [null],
              },
              incarichi: 'Incarico di Marco Murgia',
              review_state: 'private',
              title: 'Marco Murgia',
            },
          ],
          previous_item: {
            '@id':
              'http://localhost:3000/amministrazione/personale-amministrativo/valerio-alfio-boi-1',
            '@type': 'Persona',
            description: '',
            title: 'Valerio Alfio Boi',
          },
          relatedItems: [],
          related_news: [
            {
              '@id':
                'http://localhost:3000/notizie/so-you-think-you-can-stop-me-and-spit-in-my-eye',
              '@type': 'News Item',
              description: 'So you think you can love me and leave me to die',
              design_italia_meta_type: 'Notizia',
              effective: '2023-01-26T12:28:00+00:00',
              has_children: true,
              id: 'so-you-think-you-can-stop-me-and-spit-in-my-eye',
              image_field: 'preview_image',
              image_scales: {
                image: [
                  {
                    'content-type': 'image/jpeg',
                    download:
                      '@@images/image-6240-71da431c0d9c95248f540d51dfb68fed.jpeg',
                    filename: 'woman-having-online-meeting-work.jpg',
                    height: 4160,
                    scales: {
                      gallery: {
                        download:
                          '@@images/image-250-9689c314e86d6b6dce893d0018087c27.jpeg',
                        height: 166,
                        width: 250,
                      },
                      great: {
                        download:
                          '@@images/image-1200-87df243c43d1f9f9d84c1f1062f931f3.jpeg',
                        height: 800,
                        width: 1200,
                      },
                      huge: {
                        download:
                          '@@images/image-1600-9e3807f4782d0e8b5b95214046f6c8f8.jpeg',
                        height: 1066,
                        width: 1600,
                      },
                      icon: {
                        download:
                          '@@images/image-32-e8b928b39b37725125239faf3ceaf161.jpeg',
                        height: 21,
                        width: 32,
                      },
                      large: {
                        download:
                          '@@images/image-800-1c55ef8cdb42a08b1e9e5a960b033e72.jpeg',
                        height: 533,
                        width: 800,
                      },
                      larger: {
                        download:
                          '@@images/image-1000-56b3e34b0b7efbaa41a59ac807a2387b.jpeg',
                        height: 666,
                        width: 1000,
                      },
                      listing: {
                        download:
                          '@@images/image-16-0bcd9fbfdc057cf8ebc5e231395e5d34.jpeg',
                        height: 10,
                        width: 16,
                      },
                      midi: {
                        download:
                          '@@images/image-300-22f007ac656483637616ef48a91d1460.jpeg',
                        height: 200,
                        width: 300,
                      },
                      mini: {
                        download:
                          '@@images/image-200-007fbea0600dc46cbbcf2e856242d34c.jpeg',
                        height: 133,
                        width: 200,
                      },
                      preview: {
                        download:
                          '@@images/image-400-eaf194f10746432871f09ed3d07ed292.jpeg',
                        height: 266,
                        width: 400,
                      },
                      teaser: {
                        download:
                          '@@images/image-600-9b9c36cf016b1a29b37e6c0c2e99623c.jpeg',
                        height: 400,
                        width: 600,
                      },
                      thumb: {
                        download:
                          '@@images/image-128-a5f1102b033775b9b1cef99929ae188d.jpeg',
                        height: 85,
                        width: 128,
                      },
                      tile: {
                        download:
                          '@@images/image-64-64e7e2600864a53f7217f3b311307416.jpeg',
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
                      '@@images/preview_image-2000-fe838f52b9eb0ced276d0f393ba4e2de.webp',
                    filename:
                      'business-teamwork-join-hands-together-business-teamwork-concept_1150-1804.webp',
                    height: 1333,
                    scales: {
                      gallery: {
                        download:
                          '@@images/preview_image-250-995bbcf1f1946de58f84e18d63dae1eb.webp',
                        height: 166,
                        width: 250,
                      },
                      great: {
                        download:
                          '@@images/preview_image-1200-d37cc717cb905ea8b6122c2bfa79610d.webp',
                        height: 799,
                        width: 1200,
                      },
                      huge: {
                        download:
                          '@@images/preview_image-1600-9b6626c97db8159392d81c7bd3179f8a.webp',
                        height: 1066,
                        width: 1600,
                      },
                      icon: {
                        download:
                          '@@images/preview_image-32-1202b3108041f21e426824d31ff8f31e.webp',
                        height: 21,
                        width: 32,
                      },
                      large: {
                        download:
                          '@@images/preview_image-800-60c57a8c74c21c289ef969d0f792b5ff.jpeg',
                        height: 533,
                        width: 800,
                      },
                      larger: {
                        download:
                          '@@images/preview_image-1000-fd1d78cac12899a019ba4ca8525bbf31.jpeg',
                        height: 666,
                        width: 1000,
                      },
                      listing: {
                        download:
                          '@@images/preview_image-16-3ed212ed2808128b22aae7159c0ddd00.jpeg',
                        height: 10,
                        width: 16,
                      },
                      midi: {
                        download:
                          '@@images/preview_image-300-e669b19856bc23a0b8b364e2accd65a7.webp',
                        height: 199,
                        width: 300,
                      },
                      mini: {
                        download:
                          '@@images/preview_image-200-b97f3a3dfded69f5b8974c8a4e1847d2.webp',
                        height: 133,
                        width: 200,
                      },
                      preview: {
                        download:
                          '@@images/preview_image-400-e019b42a66bf2b15825f79071876a762.webp',
                        height: 266,
                        width: 400,
                      },
                      teaser: {
                        download:
                          '@@images/preview_image-600-4e55af059198a0f440d21500a699070b.jpeg',
                        height: 399,
                        width: 600,
                      },
                      thumb: {
                        download:
                          '@@images/preview_image-128-60708835dd4069e0f00577a759f35e82.webp',
                        height: 85,
                        width: 128,
                      },
                      tile: {
                        download:
                          '@@images/preview_image-64-cd986e11711f44e4ac6fe7d036017447.webp',
                        height: 42,
                        width: 64,
                      },
                    },
                    size: 202972,
                    width: 2000,
                  },
                ],
              },
              review_state: 'private',
              tipologia_notizia: [
                {
                  title: null,
                  token: 'n',
                },
                {
                  title: null,
                  token: 'o',
                },
                {
                  title: null,
                  token: 't',
                },
                {
                  title: null,
                  token: 'i',
                },
                {
                  title: null,
                  token: 'z',
                },
                {
                  title: null,
                  token: 'i',
                },
                {
                  title: null,
                  token: 'a',
                },
              ],
              title: 'So you think you can stop me and spit in my eye',
              typology: 'notizia',
            },
            {
              '@id':
                'http://localhost:3000/notizie/sport-nel-verde-le-iniziative-della-prossima-edizione',
              '@type': 'News Item',
              description:
                'Le informazioni per partecipare all’iniziativa rivolta a tutte le fasce d’età per promuovere l’attività motoria nelle aree verdi della città.',
              design_italia_meta_type: null,
              effective: '2022-05-18T16:29:00+00:00',
              has_children: true,
              id: 'sport-nel-verde-le-iniziative-della-prossima-edizione',
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
              review_state: 'published',
              tipologia_notizia: [
                {
                  title: null,
                  token: 'N',
                },
                {
                  title: null,
                  token: 'o',
                },
                {
                  title: null,
                  token: 't',
                },
                {
                  title: null,
                  token: 'i',
                },
                {
                  title: null,
                  token: 'z',
                },
                {
                  title: null,
                  token: 'i',
                },
                {
                  title: null,
                  token: 'a',
                },
              ],
              title: 'Sport nel verde: le iniziative della prossima edizione',
              typology: 'Notizia',
            },
            {
              '@id':
                'http://localhost:3000/novita/notizie/osservatorio-sul-turismo',
              '@type': 'News Item',
              description:
                'Donec in consequat nunc. Duis semper fermentum lacus, ac condimentum justo auctor a. Nam erat erat, porta vel pharetra in, ullamcorper vel turpis.',
              design_italia_meta_type: null,
              effective: '2019-12-03T11:09:00+00:00',
              has_children: true,
              id: 'osservatorio-sul-turismo',
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
              review_state: 'private',
              tipologia_notizia: [
                {
                  title: null,
                  token: 'N',
                },
                {
                  title: null,
                  token: 'o',
                },
                {
                  title: null,
                  token: 't',
                },
                {
                  title: null,
                  token: 'i',
                },
                {
                  title: null,
                  token: 'z',
                },
                {
                  title: null,
                  token: 'i',
                },
                {
                  title: null,
                  token: 'a',
                },
              ],
              title: 'Osservatorio sul turismo',
              typology: 'Notizia',
            },
          ],
          review_state: 'private',
          rights: '',
          seo_canonical_url: null,
          seo_description: null,
          seo_noindex: null,
          seo_title: null,
          servizi_correlati: [
            {
              '@id': 'http://localhost:3000/servizi/visita-veterinaria-gratis',
              '@type': 'Servizio',
              business_events: [
                {
                  title: 'Avvio impresa',
                  token: 'avvio_impresa',
                },
              ],
              canale_digitale: {
                blocks: {
                  '7bebaf7f-40fd-4274-82a4-59180e9dff0b': {
                    '@type': 'slate',
                    plaintext: 'Open your eyes',
                    value: [
                      {
                        children: [
                          {
                            text: 'Open your eyes',
                          },
                        ],
                        type: 'p',
                      },
                    ],
                  },
                },
                blocks_layout: {
                  items: ['7bebaf7f-40fd-4274-82a4-59180e9dff0b'],
                },
              },
              description: 'Fai visitare il tuo cucciolo',
              design_italia_meta_type: 'Servizio',
              has_children: true,
              id: 'visita-veterinaria-gratis',
              image_field: null,
              image_scales: null,
              parent_title: 'Servizi',
              parent_url: 'http://localhost:3000/servizi',
              person_life_events: [
                {
                  title: 'Possesso, cura, smarrimento animale da compagnia',
                  token: 'possesso_cura_smarrimento_animale_da_compagnia',
                },
              ],
              review_state: 'private',
              title: 'Visita veterinaria gratis',
            },
          ],
          subjects: [],
          title: 'Marco Murgia',
          value_punto_contatto: [
            {
              pdc_type: 'phone',
              pdc_value: '+393333333333',
            },
          ],
          version: 'current',
          versioning_enabled: true,
          working_copy: null,
          working_copy_of: null,
        },
      },
    },
  },
  search: {
    error: null,
    items: [
      {
        '@id': '/servizi/visita-veterinaria-gratis/modulistica',
        '@type': 'Document',
        CreationDate: '2023-01-26T14:59:04+00:00',
        Creator: 'admin',
        Date: '2023-01-26T14:59:04+00:00',
        Description: '',
        EffectiveDate: 'None',
        ExpirationDate: 'None',
        ModificationDate: '2023-01-26T14:59:04+00:00',
        Subject: [],
        Subject_bando: null,
        Title: 'Modulistica',
        Type: 'Pagina',
        UID: 'c6c4112520784e38a4636eb720208783',
        apertura_bando: null,
        author_name: null,
        chiusura_procedimento_bando: null,
        cmf_uid: 215,
        commentators: [],
        created: '2023-01-26T14:59:04+00:00',
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
        getId: 'modulistica',
        getObjSize: '0 KB',
        getPath: '/Plone/servizi/visita-veterinaria-gratis/modulistica',
        getRemoteUrl: null,
        getURL:
          'http://localhost:3000/servizi/visita-veterinaria-gratis/modulistica',
        hasPreviewImage: null,
        head_title: null,
        icona: null,
        id: 'modulistica',
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
        modified: '2023-01-26T14:59:04+00:00',
        nav_title: null,
        open_end: null,
        parent: {
          '@id':
            'http://localhost:8080/Plone/servizi/visita-veterinaria-gratis',
          UID: '3643564b4346478d9d3de790943f3d03',
          title: 'Visita veterinaria gratis',
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
        title: 'Modulistica',
        total_comments: 0,
        ufficio_responsabile_bando: null,
        update_note: null,
        whole_day: null,
      },
      {
        '@id': '/servizi/visita-veterinaria-gratis/allegati',
        '@type': 'Document',
        CreationDate: '2023-01-26T14:59:04+00:00',
        Creator: 'admin',
        Date: '2023-01-26T14:59:04+00:00',
        Description: '',
        EffectiveDate: 'None',
        ExpirationDate: 'None',
        ModificationDate: '2023-01-26T14:59:04+00:00',
        Subject: [],
        Subject_bando: null,
        Title: 'Allegati',
        Type: 'Pagina',
        UID: '564cc9da01234be48a68477afd79ef41',
        apertura_bando: null,
        author_name: null,
        chiusura_procedimento_bando: null,
        cmf_uid: 217,
        commentators: [],
        created: '2023-01-26T14:59:04+00:00',
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
        getId: 'allegati',
        getObjSize: '0 KB',
        getPath: '/Plone/servizi/visita-veterinaria-gratis/allegati',
        getRemoteUrl: null,
        getURL:
          'http://localhost:3000/servizi/visita-veterinaria-gratis/allegati',
        hasPreviewImage: null,
        head_title: null,
        icona: null,
        id: 'allegati',
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
        modified: '2023-01-26T14:59:04+00:00',
        nav_title: null,
        open_end: null,
        parent: {
          '@id':
            'http://localhost:8080/Plone/servizi/visita-veterinaria-gratis',
          UID: '3643564b4346478d9d3de790943f3d03',
          title: 'Visita veterinaria gratis',
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
        title: 'Allegati',
        total_comments: 0,
        ufficio_responsabile_bando: null,
        update_note: null,
        whole_day: null,
      },
    ],
    total: 2,
    loaded: true,
    loading: false,
    batching: {},
    subrequests: {},
  },
});

test('expect to render fields in page', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <ServizioCosaServe content={mock_all_fields} />
      </MemoryRouter>
    </Provider>,
  );

  expect(
    screen.getByRole('heading', { name: /Cosa serve/i }),
  ).toBeInTheDocument();

  expect(
    screen.getByText(/And she's buying a stairway to heaven/i),
  ).toBeInTheDocument();
});

test('todo', () => {
  expect(store).toBeDefined();
  expect(true).toBe(true);
});
