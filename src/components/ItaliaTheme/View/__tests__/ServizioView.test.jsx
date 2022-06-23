import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ServizioView from '../ServizioView';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import { MemoryRouter } from 'react-router-dom';

const mockStore = configureStore();

const mock_mandatory = {
  '@id': 'http://loremipsum.com/autocertificazione',
  '@type': 'Servizio',
  id: 'autocertificazione',
  title: 'Autocertificazione',
  tassonomia_argomenti: [
    {
      title: 'Tassonomia: Istruzione',
      token: 'istruzione',
    },
  ],
  description: 'Descrizione del servizio',
  a_chi_si_rivolge: {
    'content-type': 'text/html',
    data: '<p>Descrizione destinatari</p>',
    encoding: 'utf-8',
  },
  come_si_fa: {
    'content-type': 'text/html',
    data: '<p>Come si fa ad ottenere il servizio</p>',
    encoding: 'utf-8',
  },
  cosa_si_ottiene: {
    'content-type': 'text/html',
    data: '<p>Cosa si ottiene dal servizio</p>',
    encoding: 'utf-8',
  },
  procedure_collegate: {
    'content-type': 'text/html',
    data: '<p>Procedure collegate al servizio</p>',
    encoding: 'utf-8',
  },
  canale_fisico: {
    'content-type': 'text/html',
    data: '<p>Canale fisico per usufruire del servizio</p>',
    encoding: 'utf-8',
  },
  sedi_e_luoghi: [
    {
      '@id': 'http://loremipsum.com/ufficio-anagrafe-del-comune',
      '@type': 'Venue',
      description: 'Descrizione della sede/luogo',
      review_state: 'published',
      title: 'Ufficio anagrafe',
    },
  ],
  cosa_serve: {
    'content-type': 'text/html',
    data: "<p>Cosa serve per ottenere l'erogazione del servizio</p>",
    encoding: 'utf-8',
  },
  fasi_scadenze: {
    'content-type': 'text/html',
    data:
      '<p>Quali sono le fasi e le scadenze da rispettare per avere il servizio</p>',
    encoding: 'utf-8',
  },
  ufficio_responsabile: [
    {
      '@id': 'http://loremipsum.com/unita-organizzative/ufficio-responsabile',
      '@type': 'Unita organizzativa',
      description: 'Ufficio Responsabile',
      title: 'Ufficio responsabile del servizio',
    },
  ],
  rights: 'Diritti pagina, per mostrare i metadati',
  area: [
    {
      '@id': 'http://loremipsum.com/unita-organizzative/area',
      '@type': 'Unita organizzativa',
      description: 'Area del servizio',
      review_state: 'published',
      title: 'Area del servizio',
    },
  ],
};

const mock_other_fields = {
  ...mock_mandatory,
  altri_documenti: [
    {
      '@id': 'http://loremipsum.com/documento-1',
      '@type': 'Documento',
      description: '',
      review_state: 'published',
      title: 'documento allegato',
    },
  ],
  autenticazione: {
    'content-type': 'text/html',
    data:
      '<p>Tipi di autenticazione richiesti per usare il servizio on line</p>',
    encoding: 'utf-8',
  },
  ulteriori_informazioni: {
    'content-type': 'text/html',
    data: "<p>Indicazioni d'uso del servizio</p>",
    encoding: 'utf-8',
  },
  canale_digitale: 'https://www.loremipsum.com/canale_digitale',
  canale_fisico_prenotazione: 'Canale fisicio di prenotazione del servizio',
  casi_particolari: {
    'content-type': 'text/html',
    data: '<p>Casi particolari per usufruire del servizio</p>',
    encoding: 'utf-8',
  },
  chi_puo_presentare: {
    'content-type': 'text/html',
    data: '<p>Chi può presentare richiesta del servizio</p>',
    encoding: 'utf-8',
  },
  copertura_geografica: {
    'content-type': 'text/html',
    data: "<p>Qual'è la copertura geografica del servizio</p>",
    encoding: 'utf-8',
  },
  costi: {
    'content-type': 'text/html',
    data: '<p>Costi del servizio</p>',
    encoding: 'utf-8',
  },
  descrizione_estesa: {
    'content-type': 'text/html',
    data: '<p>Descrizione estesa</p>',
    encoding: 'utf-8',
  },
  image: {
    'content-type': 'image/jpeg',
    download:
      'http://loremipsum.com/autocertificazione/@@images/bf6af857-5fd1-4353-b270-830577b3bd6e.jpeg',
    filename: 'immagine-servizio.jpg',
    height: 1050,
    size: 193044,
    width: 1680,
  },
  image_caption: 'Caption del servizio',
  items: [
    {
      '@id': 'http://loremipsum.com/autocertificazione/modulistica',
      id: 'modulistica',
    },
    {
      '@id': 'http://loremipsum.com/autocertificazione/allegati',
      id: 'allegati',
    },
  ],
  link_siti_esterni: {
    'content-type': 'text/html',
    data:
      '<p><a href="https://www.loremipsum.it/agid">https://www.loremipsum.it/agid</a></p>',
    encoding: 'utf-8',
  },
  relatedItems: [
    {
      '@id': 'http://loremipsum.com/pagina1',
      '@type': 'Document',
      description: '',
      review_state: 'published',
      title: 'Pagina1',
    },
  ],
  related_news: [
    {
      '@id': 'http://loremipsum.com/notizia-numero-1',
      description: 'Descrizione della news collegata al servizio',
      effective: '2020-02-25',
      title: 'Una nuova notizia con delle informazioni relative al servizio',
      typology: 'Notizia',
    },
  ],
  servizi_collegati: [
    {
      '@id': 'http://loremipsum.com/servizio-di-potatura-e-sfalcio',
      '@type': 'Servizio',
      description:
        "Breve descrizione dell'elemento del servizio di potatura e sfalcio",
      review_state: 'published',
      title: 'Servizio collegato al servizio corrente',
    },
  ],
  settore_merceologico: 'Settore del servizio',
  subtitle: '#IoAutocertifico',
  vincoli: {
    'content-type': 'text/html',
    data: '<p>Per poter usufruire del servizio ci sono questi vingoli</p>',
    encoding: 'utf-8',
  },
};

const mock_servizio_chiuso = {
  motivo_stato_servizio: {
    'content-type': 'text/html',
    data: '<p>Il servizio non è più erogato</p>',
    encoding: 'utf-8',
  },
  stato_servizio: true,
};

const store = mockStore({
  intl: {
    locale: 'en',
    messages: {},
  },
  content: {
    data: {
      is_folderish: true,
    },
    subrequests: {
      'http://loremipsum.com/unita-organizzative/area_office': {
        data: {
          '@id': 'http://office_link.it',
          title: 'Area legata al servizio',
          description: 'office description',
          city: 'office city',
          zipcode: 'office zip code',
          street: 'office street',
        },
      },
      'http://loremipsum.com/unita-organizzative/ufficio-responsabile_office': {
        data: {
          '@id': 'http://office_link.it',
          title: 'Ufficio responsabile del servizio',
          description: 'office description',
          city: 'office city',
          zipcode: 'office zip code',
          street: 'office street',
        },
      },
      'generic_card_http://loremipsum.com/documento-1': {
        data: {
          '@id': 'http://loremipsum.com/documento-1',
          title: 'Documento collegato',
          description: 'Documento collegato',
        },
      },
      'generic_card_http://loremipsum.com/servizio-di-potatura-e-sfalcio': {
        data: {
          '@id': 'http://loremipsum.com/servizio-di-potatura-e-sfalcio',
          title: 'Servizio di potatura e sfalcio',
          description: 'Servizio di potatura e sfalcio',
        },
      },
      'generic_card_http://loremipsum.com/pagina1': {
        data: {
          '@id': 'http://loremipsum.com/pagina1',
          title: 'Pagina1',
          description: 'Pagina allegata',
        },
      },
      'http://loremipsum.com/ufficio-anagrafe-del-comune_venue': {
        data: {
          '@id': 'http://loremipsum.com/ufficio-anagrafe-del-comune',
          title: 'Ufficio anagrafe',
          description: 'Ufficio anagrafe',
        },
      },
    },
  },
  search: {
    subrequests: {
      allegati: {
        items: [
          {
            '@id':
              'http://loremipsum.com/autocertificazione/allegati/file1.pdf',
            '@type': 'File',
            title: 'File1.pdf',
          },
        ],
      },
      modulistica: {
        items: [
          {
            '@id':
              'http://loremipsum.com/autocertificazione/modulistica/file1.pdf',
            '@type': 'File',
            title: 'File1.pdf',
          },
        ],
      },
    },
  },
});

test('expect to have all mandatory fields in page', async () => {
  const { getByText, queryAllByText } = render(
    <Provider store={store}>
      <MemoryRouter>
        <ServizioView content={mock_mandatory} />
      </MemoryRouter>
    </Provider>,
  );
  // title
  expect(getByText(/Autocertificazione/i)).toBeInTheDocument();
  // tassonomia_argomenti
  expect(getByText(/Tassonomia: Istruzione/i)).toBeInTheDocument();
  // description
  expect(getByText(/Descrizione del servizio/i)).toBeInTheDocument();
  // descrizione_destinatari
  expect(getByText(/Descrizione destinatari/i)).toBeInTheDocument();
  // come_si_fa
  expect(getByText(/Come si fa ad ottenere il servizio/i)).toBeInTheDocument();
  // cosa_si_ottiene
  expect(queryAllByText(/Cosa si ottiene dal servizio/i)).toHaveLength(2);
  // procedure_collegate
  expect(getByText(/Procedure collegate al servizio/i)).toBeInTheDocument();
  // canale_fisico
  expect(
    getByText(/Canale fisico per usufruire del servizio/i),
  ).toBeInTheDocument();
  // sedi_e_luoghi
  const sedi_e_luoghi = await waitForElement(() =>
    getByText(/Ufficio anagrafe/i),
  );
  expect(sedi_e_luoghi).toBeInTheDocument();
  // cosa_serve
  expect(
    getByText(/Cosa serve per ottenere l'erogazione del servizio/i),
  ).toBeInTheDocument();
  // fasi_scadenze
  expect(getByText(/Quali sono le fasi e le scadenze da/i)).toBeInTheDocument();
  // ufficio_responsabile
  const ufficio_responsabile = await waitForElement(() =>
    getByText(/Ufficio responsabile del servizio/i),
  );
  expect(ufficio_responsabile).toBeInTheDocument();
  // rights
  expect(
    getByText(/Diritti pagina, per mostrare i metadati/i),
  ).toBeInTheDocument();
  // area
  const area = await waitForElement(() =>
    getByText(/Area legata al servizio/i),
  );
  expect(area).toBeInTheDocument();
});

test('expect to have all fields in page', async () => {
  const { getByText, getByAltText } = render(
    <Provider store={store}>
      <MemoryRouter>
        <ServizioView content={mock_other_fields} />
      </MemoryRouter>
    </Provider>,
  );
  // altri_documenti
  const altri_documenti = await waitForElement(() =>
    getByText(/Documenti correlati/i),
  );
  expect(altri_documenti).toBeInTheDocument();
  // autenticazione
  expect(getByText(/Tipi di autenticazione richiesti/i)).toBeInTheDocument();
  // ulteriori_informazioni
  expect(getByText(/Indicazioni d'uso del servizio/i)).toBeInTheDocument();
  // canale_digitale
  expect(
    getByText(/https:\/\/www.loremipsum.com\/canale_digitale/i),
  ).toBeInTheDocument();
  // canale_fisico_prenotazione
  expect(
    getByText(/Canale fisicio di prenotazione del servizio/i),
  ).toBeInTheDocument();
  // casi_particolari
  expect(
    getByText(/Casi particolari per usufruire del servizio/i),
  ).toBeInTheDocument();
  // chi_puo_presentare
  expect(
    getByText(/Chi può presentare richiesta del servizio/i),
  ).toBeInTheDocument();
  // copertura_geografica
  expect(
    getByText(/Qual'è la copertura geografica del servizio/i),
  ).toBeInTheDocument();
  // costi
  expect(getByText(/Costi del servizio/i)).toBeInTheDocument();
  // descrizione_estesa
  expect(getByText(/Descrizione estesa/i)).toBeInTheDocument();
  // image
  expect(getByAltText(/Caption del servizio/i)).toBeInTheDocument();
  // image_caption
  expect(getByText(/Caption del servizio/i)).toBeInTheDocument();
  // link_siti_esterni
  expect(getByText(/https:\/\/www.loremipsum.it\/agid/i)).toBeInTheDocument();
  // relatedItems
  const related_iteems = await waitForElement(() =>
    getByText(/Pagina allegata/i),
  );
  expect(related_iteems).toBeInTheDocument();
  // related_news
  expect(
    getByText(/Descrizione della news collegata al servizio/i),
  ).toBeInTheDocument();
  // servizi_collegati
  const servizi_collegati = await waitForElement(() =>
    getByText(/Servizi collegati/i),
  );
  expect(servizi_collegati).toBeInTheDocument();
  // subtitle
  expect(getByText(/IoAutocertifico/i)).toBeInTheDocument();
  // vincoli
  expect(
    getByText(/Per poter usufruire del servizio ci sono/i),
  ).toBeInTheDocument();
});

test('Check parts loaded from child folders', async () => {
  const { getByText } = render(
    <Provider store={store}>
      <MemoryRouter>
        <ServizioView content={mock_other_fields} />
      </MemoryRouter>
    </Provider>,
  );
  // compensi
  const modulistica = await waitForElement(() => getByText(/Modulistica/i));
  expect(modulistica).toBeInTheDocument();
  // compensi
  const allegati = await waitForElement(() => getByText(/Allegati/i));
  expect(allegati).toBeInTheDocument();
});

test('Check servizio sospeso', async () => {
  const { getByText } = render(
    <Provider store={store}>
      <MemoryRouter>
        <ServizioView content={mock_servizio_chiuso} />
      </MemoryRouter>
    </Provider>,
  );
  // motivo_stato_servizio
  expect(getByText(/Il servizio non è più erogato/i)).toBeInTheDocument();
});
