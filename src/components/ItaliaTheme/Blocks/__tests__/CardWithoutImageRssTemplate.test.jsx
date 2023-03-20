import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CardWithImageRssTemplate from '../RssBlock/CardWithImageRssTemplate';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const mock_fields = {
  '@type': 'rssBlock',
  feeds: [
    {
      source: 'Corriere',
      url: 'http://xml2.corriereobjects.it/rss/homepage.xml',
    },
  ],
  limit: 10,
  linkMore: 'http://localhost:3000/eventi',
  linkMoreTitle: 'Is this just fantasy',
  template: 'default',
  title: 'Is this the real life',
  items: [
    {
      categories: ['Economia'],
      contentSnippet:
        '<p><img alt="Smart working, salta la proroga per i fragili Canone Rai fuori dalla bolletta entro il 2024 Pronto soccorso, stop ai medici «a gettone»" src="https://images2.corriereobjects.it/methode_image/2023/02/09/Economia/Foto%20Economia%20-%20Trattate/335.0.168528508-kSeB-U3400796069764cTE-656x492@Corriere-Web-Sezioni.jpg" title="Smart working, salta la proroga per i fragili Canone Rai fuori dalla bolletta entro il 2024 Pronto soccorso, stop ai medici «a gettone»" /><p>Un emendamento a firma Lega istituisce un tavolo permanente sulle concessioni balneari. Sanità: i medici di medicina generale e i pediatri convenzionati con il servizio sanitario nazionale potranno andare in pensione a 72 anni anziché a 70 </p>',
      date: '2023-02-09T09:02:35+00:00',
      source: 'Corriere',
      title:
        'Smart working, salta la proroga per i fragili Canone Rai fuori dalla bolletta entro il 2024 Pronto soccorso, stop ai medici «a gettone»',
      url: 'https://www.corriere.it/economia/aziende/23_febbraio_09/smart-working-salta-proroga-anche-fragili-canone-rai-fuori-bolletta-entro-anno-fee755b2-a847-11ed-b9c4-8c4ac5be6a91.shtml',
    },
    {
      categories: ['Sport'],
      contentSnippet:
        '<p><img alt="I test sul sangue per scoprire in anticipo i tumori funzionano davvero?" src="https://images2.corriereobjects.it/methode_image/2022/12/15/Salute/Foto%20Salute%20-%20Trattate/images-ksMB-RmWdAqpchpHoS9W4tv3NsCM-656x492@Corriere-Web-Sezioni.jpg" title="I test sul sangue per scoprire in anticipo i tumori funzionano davvero?" /><p>Sempre più spesso pubblicizzati e sponsorizzati come rivoluzionari, ma quanto sono efficaci? Ecco il principio su cui si basano e per chi sono davvero già in uso oggi (anche in Italia)</p>',
      date: '2023-02-09T08:57:31+00:00',
      source: 'Corriere',
      title:
        'I test sul sangue per scoprire in anticipo i tumori funzionano davvero?',
      url: 'https://www.corriere.it/salute/sportello_cancro/23_febbraio_09/test-sangue-scoprire-anticipo-tumori-8387ef64-7c76-11ed-b482-79712297dc2c.shtml',
    },
    {
      categories: ['Cronache'],
      contentSnippet:
        '<p><img alt="«Io, indagato per Unabomber, sono un pensionato e ho paura che m’incastrino»" src="https://images2.corriereobjects.it/methode_image/2023/02/08/Interni/Foto%20Interni%20-%20Trattate/30int03f1a-ku3B-U3400774569671oLG-656x492@Corriere-Web-Sezioni.JPG" title="«Io, indagato per Unabomber, sono un pensionato e ho paura che m’incastrino»" /><p>Trieste, Fausto Muccin, ex perito chimico, è uno degli undici nomi sotto indagine: «Temo la fine di Zornitta». Un altro è Luigi Benedetti: «Uno choc, non so se darò il Dna». L’avvocato Devetag: «Un mio cliente ha perso 5 chili» </p>',
      date: '2023-02-09T08:48:07+00:00',
      source: 'Corriere',
      title:
        '«Io, indagato per Unabomber, sono un pensionato e ho paura che m’incastrino»',
      url: 'https://www.corriere.it/cronache/23_febbraio_09/io-indagato-unabomber-sono-pensionato-ho-paura-che-m-incastrino-bbebe932-a7e6-11ed-b9c4-8c4ac5be6a91.shtml',
    },
    {
      categories: ['Esteri'],
      contentSnippet:
        '<p><img alt="La giovane di Antakya  sfollata dopo il terremoto: «Ho perso tutto, anche i miei due gatti, ma ho salvato il pappagallo»" src="https://images2.corriereobjects.it/methode_image/2023/02/09/Esteri/Foto%20Esteri%20-%20Trattate/thumbnail_image001-kNyH-U34007951567520QF-656x492@Corriere-Web-Sezioni.jpg" title="La giovane di Antakya  sfollata dopo il terremoto: «Ho perso tutto, anche i miei due gatti, ma ho salvato il pappagallo»" /><p>L’intervista della nostra inviata a una sopravvissuta al sisma: «La mia famiglia per fortuna sta bene. Ma ho perso degli amici, sono giorni che non li sento»</p>',
      date: '2023-02-09T08:40:55+00:00',
      source: 'Corriere',
      title:
        'La giovane di Antakya  sfollata dopo il terremoto: «Ho perso tutto, anche i miei due gatti, ma ho salvato il pappagallo»',
      url: 'https://www.corriere.it/esteri/23_febbraio_09/giovane-antakya-sfollata-terremoto-intervista-4bfe5da8-a84a-11ed-b9c4-8c4ac5be6a91.shtml',
    },
    {
      categories: ['Esteri'],
      contentSnippet:
        '<p><img alt="Erdogan tra le rovine del terremoto: «Era impossibile prepararsi»" src="https://images2.corriereobjects.it/methode_image/2023/02/08/Esteri/Foto%20Esteri%20-%20Trattate/AFP_338T38D-0029-kNM-U3400783556075FOE-656x492@Corriere-Web-Sezioni.jpg" title="Erdogan tra le rovine del terremoto: «Era impossibile prepararsi»" /><p>Ritardi, code, rabbia. Il presidente accusa i «provocatori» che protestano per la lentezza dei soccorsi</p>',
      date: '2023-02-09T08:39:44+00:00',
      source: 'Corriere',
      title:
        'Erdogan tra le rovine del terremoto: «Era impossibile prepararsi»',
      url: 'https://www.corriere.it/esteri/23_febbraio_08/erdogan-le-rovine-terremoto-era-impossibile-prepararsi-278ed5ee-a7f8-11ed-b9c4-8c4ac5be6a91.shtml',
    },
    {
      categories: ['Economia'],
      contentSnippet:
        '<p><img alt="Le banche più «solide» d’Europa (secondo la Bce), le italiane al top: ecco l’elenco completo" src="https://images2.corriereobjects.it/methode_image/2023/02/08/Economia/Foto%20Economia%20-%20Trattate/Clipboard-0043-krdF-U3400772669232Jf-656x492@Corriere-Web-Sezioni.jpg" title="Le banche più «solide» d’Europa (secondo la Bce), le italiane al top: ecco l’elenco completo" /><p>La Banca centrale europea promuove la solidità delle banche italiane: superate le criticità della guerra. Il capo della vigilanza Enria: «Possono ripartire le aggregazioni in Europa»</p>',
      date: '2023-02-09T08:38:20+00:00',
      source: 'Corriere',
      title:
        'Le banche più «solide» d’Europa (secondo la Bce), le italiane al top: ecco l’elenco completo',
      url: 'https://www.corriere.it/economia/finanza/23_febbraio_09/banche-piu-sicure-d-europa-secondo-bce-credem-altre-italiane-top-148d821c-a7d8-11ed-b9c4-8c4ac5be6a91.shtml',
    },
    {
      categories: ['Economia'],
      contentSnippet:
        '<p><img alt="Alla Sanità 4 miliardi in più. Il ministro Schillaci: stop ai medici a gettone" src="https://images2.corriereobjects.it/methode_image/2023/02/08/Economia/Foto%20Economia%20-%20Trattate/1441bf70fc144b82455881b6b27d3107-0057-kSWH-U3400772303837KqG-656x492@Corriere-Web-Sezioni.jpg" title="Alla Sanità 4 miliardi in più. Il ministro Schillaci: stop ai medici a gettone" /><p>Via libera dal Cipess al Fondo sanitario del 2022: alle Regioni destinati in totale 125 miliardi di euro. Serviranno alle assunzioni di personale, per l’acquisto di farmaci innovativi e per le indennità di chi lavora nei Pronto soccorso. Via libera anche alla Pedemontana piemontese e alla nuova stazione ferroviaria di Bari </p>',
      date: '2023-02-09T08:37:03+00:00',
      source: 'Corriere',
      title:
        'Alla Sanità 4 miliardi in più. Il ministro Schillaci: stop ai medici a gettone',
      url: 'https://www.corriere.it/economia/lavoro/23_febbraio_08/alla-sanita-4-miliardi-piu-ministro-schillaci-stop-medici-gettone-c4025d52-a7e3-11ed-b9c4-8c4ac5be6a91.shtml',
    },
    {
      categories: ['Economia'],
      contentSnippet:
        '<p><img alt="Riforma fiscale, piano Meloni sull’evasione: «E il debito pubblico resti agli italiani» " src="https://images2.corriereobjects.it/methode_image/2023/02/09/Economia/Foto%20Economia%20-%20Trattate/bc851c6bb169f725523b776a2d46c08c-kKgD-U3400797356006r0D-656x492@Corriere-Web-Sezioni.jpg" title="Riforma fiscale, piano Meloni sull’evasione: «E il debito pubblico resti agli italiani» " /><p>Dice la premier: «Punteremo di più sugli strumenti in grado di favorire l’adempimento spontaneo» e promette che la riforma «metterà al centro anche i dipendenti e i pensionati, con misure ad hoc»</p>',
      date: '2023-02-09T08:34:03+00:00',
      source: 'Corriere',
      title:
        'Riforma fiscale, piano Meloni sull’evasione: «E il debito pubblico resti agli italiani»',
      url: 'https://www.corriere.it/economia/tasse/23_febbraio_09/riforma-fiscale-piano-meloni-lotta-all-evasione-prima-che-si-realizzi-debito-pubblico-resti-italiani-99b4a020-a84a-11ed-b9c4-8c4ac5be6a91.shtml',
    },
    {
      categories: ['Moda'],
      contentSnippet:
        '<p><img alt=" San Valentino: cosa regalare a lui di pratici e belli, con un budget non superiore a 50 euro" src="https://images2.corriereobjects.it/methode_image/2023/02/08/Moda/Foto%20Moda%20-%20Trattate/b20d5be2-f2fc-11e8-bf1c-39c2f2f9623f_ori_crop_MASTER__0x0.jpg" title=" San Valentino: cosa regalare a lui di pratici e belli, con un budget non superiore a 50 euro" /><p> Basta anche solo il tradizionale «pensierino». Purché sia anche utile e si possa poi utilizzare tutto l’anno. Come il kit per ripararsi gli Airpods, ma anche una giacca formale o la crema viso</p>',
      date: '2023-02-09T08:19:11+00:00',
      source: 'Corriere',
      title:
        'San Valentino: cosa regalare a lui di pratici e belli, con un budget non superiore a 50 euro',
      url: 'https://www.corriere.it/moda/cards/san-valentino-cosa-regalare-lui-pratici-belli-un-budget-non-superiore-50-euro/pratico-sofisticato_principale.shtml',
    },
    {
      categories: ['Economia'],
      contentSnippet:
        '<p><img alt="Canone Rai, il ministro Giorgetti: «Fuori dalla bolletta dall’anno prossimo»" src="https://images2.corriereobjects.it/methode_image/2023/02/08/Economia/Foto%20Economia%20-%20Trattate/Clipboard-0062-kgPC-U340078314149271F-656x492@Corriere-Web-Sezioni.jpg" title="Canone Rai, il ministro Giorgetti: «Fuori dalla bolletta dall’anno prossimo»" /><p>«Quest’anno - ha detto il ministro Giorgetti - mi sono preso la responsabilità di lasciarlo se no saltava tutto, ma diventa chiaro che dalla bolletta il canone Rai dovrà uscire e quindi l’anno prossimo bisognerà trovare un altro strumento»</p>',
      date: '2023-02-09T08:17:23+00:00',
      source: 'Corriere',
      title:
        'Canone Rai, il ministro Giorgetti: «Fuori dalla bolletta dall’anno prossimo»',
      url: 'https://www.corriere.it/economia/tasse/23_febbraio_08/canone-rai-ministro-giorgetti-fuori-bolletta-dall-anno-prossimo-e3e388c6-a7f7-11ed-b9c4-8c4ac5be6a91.shtml',
    },
  ],
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
        <CardWithImageRssTemplate
          data={mock_fields}
          items={mock_fields.items}
        />
      </MemoryRouter>
    </Provider>,
  );

  //titolo
  expect(
    screen.getByRole('heading', { name: /Is this the real life/i }),
  ).toBeInTheDocument();
  //numero massimo elementi da mostrare
  const cards = document.querySelectorAll('.card-img');
  expect(cards.length).toBe(mock_fields.limit);

  //data card --> data cambia in base a rss
  // expect(screen.getAllByText('09-Feb-2023').length).toBeGreaterThan(0);

  //testo card
  expect(
    screen.getByText(/Riforma fiscale, piano Meloni sull’evasione:/i),
  ).toBeInTheDocument();

  //link card
  expect(
    screen.getAllByRole('link', { name: /Read more/i }).length,
  ).toBeGreaterThan(0);

  //link ad altro
  expect(
    screen.getByRole('link', { name: /Is this just fantasy/i }),
  ).toBeInTheDocument();
});
