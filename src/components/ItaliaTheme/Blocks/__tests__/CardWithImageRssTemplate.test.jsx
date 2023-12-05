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
  template: 'card_without_image',
  title: 'Is this the real life',
  items: [
    {
      categories: ['Esteri'],
      contentSnippet:
        '<p><img alt="La giovane di Antakya  sfollata dopo il terremoto: «Ho perso tutto, anche i miei due gatti, ma ho salvato il pappagallo»" src="https://images2.corriereobjects.it/methode_image/2023/02/09/Esteri/Foto%20Esteri%20-%20Trattate/thumbnail_image001-kNyH-U34007951567520QF-656x492@Corriere-Web-Sezioni.jpg" title="La giovane di Antakya  sfollata dopo il terremoto: «Ho perso tutto, anche i miei due gatti, ma ho salvato il pappagallo»" /><p>L’intervista della nostra inviata a una sopravvissuta al sisma: «La mia famiglia per fortuna sta bene. Ma ho perso degli amici, sono giorni che non li sento»</p>',
      date: '2023-02-09T08:29:01+00:00',
      source: 'prova',
      title:
        'La giovane di Antakya  sfollata dopo il terremoto: «Ho perso tutto, anche i miei due gatti, ma ho salvato il pappagallo»',
      url: 'https://www.corriere.it/esteri/23_febbraio_09/giovane-antakya-sfollata-terremoto-intervista-4bfe5da8-a84a-11ed-b9c4-8c4ac5be6a91.shtml',
    },
    {
      categories: ['Economia'],
      contentSnippet:
        '<p><img alt="Riforma fiscale, piano Meloni sull’evasione: «E il debito pubblico resti agli italiani» " src="https://images2.corriereobjects.it/methode_image/2023/02/09/Economia/Foto%20Economia%20-%20Trattate/bc851c6bb169f725523b776a2d46c08c-kKgD-U3400797356006r0D-656x492@Corriere-Web-Sezioni.jpg" title="Riforma fiscale, piano Meloni sull’evasione: «E il debito pubblico resti agli italiani» " /><p>Dice la premier: «Punteremo di più sugli strumenti in grado di favorire l’adempimento spontaneo» e promette che la riforma «metterà al centro anche i dipendenti e i pensionati, con misure ad hoc»</p>',
      date: '2023-02-09T08:25:48+00:00',
      source: 'prova',
      title:
        'Riforma fiscale, piano Meloni sull’evasione: «E il debito pubblico resti agli italiani»',
      url: 'https://www.corriere.it/economia/tasse/23_febbraio_09/riforma-fiscale-piano-meloni-lotta-all-evasione-prima-che-si-realizzi-debito-pubblico-resti-italiani-99b4a020-a84a-11ed-b9c4-8c4ac5be6a91.shtml',
    },
    {
      categories: ['Economia'],
      contentSnippet:
        '<p><img alt="Smart working, salta la proroga per i fragili Canone Rai fuori dalla bolletta entro il 2024 Pronto soccorso, stop ai medici ai gettone" src="https://images2.corriereobjects.it/methode_image/2023/02/09/Economia/Foto%20Economia%20-%20Trattate/335.0.168528508-kSeB-U3400796069764cTE-656x492@Corriere-Web-Sezioni.jpg" title="Smart working, salta la proroga per i fragili Canone Rai fuori dalla bolletta entro il 2024 Pronto soccorso, stop ai medici ai gettone" /><p>Un emendamento a firma Lega istituisce un tavolo permanente sulle concessioni balneari. Sanità: i medici di medicina generale e i pediatri convenzionati con il servizio sanitario nazionale potranno andare in pensione a 72 anni anziché a 70 </p>',
      date: '2023-02-09T08:25:21+00:00',
      source: 'prova',
      title:
        'Smart working, salta la proroga per i fragili Canone Rai fuori dalla bolletta entro il 2024 Pronto soccorso, stop ai medici ai gettone',
      url: 'https://www.corriere.it/economia/aziende/23_febbraio_09/smart-working-salta-proroga-anche-fragili-canone-rai-fuori-bolletta-entro-anno-fee755b2-a847-11ed-b9c4-8c4ac5be6a91.shtml',
    },
    {
      categories: ['Cronache'],
      contentSnippet:
        '<p><img alt="«Io, indagato per Unabomber, sono un pensionato e ho paura che m’incastrino»" src="https://images2.corriereobjects.it/methode_image/2023/02/08/Interni/Foto%20Interni%20-%20Trattate/30int03f1a-ku3B-U3400774569671oLG-656x492@Corriere-Web-Sezioni.JPG" title="«Io, indagato per Unabomber, sono un pensionato e ho paura che m’incastrino»" /><p>Trieste, Fausto Muccin, ex perito chimico, è uno degli undici nomi sotto indagine: «Temo la fine di Zornitta». Un altro è Luigi Benedetti: «Uno choc, non so se darò il Dna». L’avvocato Devetag: «Un mio cliente ha perso 5 chili» </p>',
      date: '2023-02-09T08:21:39+00:00',
      source: 'prova',
      title:
        '«Io, indagato per Unabomber, sono un pensionato e ho paura che m’incastrino»',
      url: 'https://www.corriere.it/cronache/23_febbraio_09/io-indagato-unabomber-sono-pensionato-ho-paura-che-m-incastrino-bbebe932-a7e6-11ed-b9c4-8c4ac5be6a91.shtml',
    },
    {
      categories: ['Moda'],
      contentSnippet:
        '<p><img alt=" San Valentino: cosa regalare a lui di pratici e belli, con un budget non superiore a 50 euro" src="https://images2.corriereobjects.it/methode_image/2023/02/08/Moda/Foto%20Moda%20-%20Trattate/b20d5be2-f2fc-11e8-bf1c-39c2f2f9623f_ori_crop_MASTER__0x0.jpg" title=" San Valentino: cosa regalare a lui di pratici e belli, con un budget non superiore a 50 euro" /><p> Basta anche solo il tradizionale «pensierino». Purché sia anche utile e si possa poi utilizzare tutto l’anno. Come il kit per ripararsi gli Airpods, ma anche una giacca formale o la crema viso</p>',
      date: '2023-02-09T08:19:11+00:00',
      source: 'prova',
      title:
        'San Valentino: cosa regalare a lui di pratici e belli, con un budget non superiore a 50 euro',
      url: 'https://www.corriere.it/moda/cards/san-valentino-cosa-regalare-lui-pratici-belli-un-budget-non-superiore-50-euro/pratico-sofisticato_principale.shtml',
    },
    {
      categories: ['Economia'],
      contentSnippet:
        '<p><img alt="Canone Rai, il ministro Giorgetti: «Fuori dalla bolletta dall’anno prossimo»" src="https://images2.corriereobjects.it/methode_image/2023/02/08/Economia/Foto%20Economia%20-%20Trattate/Clipboard-0062-kgPC-U340078314149271F-656x492@Corriere-Web-Sezioni.jpg" title="Canone Rai, il ministro Giorgetti: «Fuori dalla bolletta dall’anno prossimo»" /><p>«Quest’anno - ha detto il ministro Giorgetti - mi sono preso la responsabilità di lasciarlo se no saltava tutto, ma diventa chiaro che dalla bolletta il canone Rai dovrà uscire e quindi l’anno prossimo bisognerà trovare un altro strumento»</p>',
      date: '2023-02-09T08:17:23+00:00',
      source: 'prova',
      title:
        'Canone Rai, il ministro Giorgetti: «Fuori dalla bolletta dall’anno prossimo»',
      url: 'https://www.corriere.it/economia/tasse/23_febbraio_08/canone-rai-ministro-giorgetti-fuori-bolletta-dall-anno-prossimo-e3e388c6-a7f7-11ed-b9c4-8c4ac5be6a91.shtml',
    },
    {
      categories: ['Sport'],
      contentSnippet:
        '<p><img alt="Dottore, quanto mi resta? Il valore del tempo per i malati di tumore" src="https://images2.corriereobjects.it/methode_image/2023/01/23/Salute/Foto%20Salute%20-%20Trattate/tumor1-kvZB-RB5hv4bCCjZYgUUW5ZoChYM-656x492@Corriere-Web-Sezioni.jpg" title="Dottore, quanto mi resta? Il valore del tempo per i malati di tumore" /><p>Non appena si riceve la diagnosi di cancro, compare il timore che la fine sia vicina: pazienti e familiari entrano in una nuova dimensione nella quale bisogna sia «fare in fretta» per iniziare le cure il prima possibile, sia sfruttare al massimo le giornate. Anche per chi guarisce, quasi nulla sarà più come prima. Ecco le domande più diffuse (spesso ancora tabù) e le risposte dell’esperto per comprendere e utilizzare al meglio il tempo residuo</p>',
      date: '2023-02-09T08:15:48+00:00',
      source: 'prova',
      title:
        'Dottore, quanto mi resta? Il valore del tempo per i malati di tumore',
      url: 'https://www.corriere.it/salute/sportello_cancro/cards/dottore-quanto-mi-resta-valore-tempo-malati-tumore/come-cambia-vita_principale.shtml',
    },
    {
      categories: ['Spettacoli'],
      contentSnippet:
        '<p><img alt="Pagelle Sanremo 2023 seconda serata: i voti a canzoni, cantanti e ospiti" src="https://images2.corriereobjects.it/methode_image/2023/02/08/Spettacoli/Foto%20Spettacoli%20-%20Trattate/moda2-kx9C-U3400772450020dmD-656x492@Corriere-Web-Sezioni.jpg" title="Pagelle Sanremo 2023 seconda serata: i voti a canzoni, cantanti e ospiti" /><p>I giudizi sugli ultimi 14 artisti che si sono esibiti nel corso della 73ma edizione del Festival della canzone italiana</p>',
      date: '2023-02-09T08:12:23+00:00',
      source: 'prova',
      title:
        'Pagelle Sanremo 2023 seconda serata: i voti a canzoni, cantanti e ospiti',
      url: 'https://www.corriere.it/spettacoli/festival-sanremo/cards/pagelle-sanremo-2023-seconda-serata-voti-canzoni-cantanti-ospiti/will-voto-5_principale.shtml',
    },
    {
      categories: ['Economia'],
      contentSnippet:
        '<p><img alt="Le banche più «solide» d’Europa (secondo la Bce), le italiane al top: ecco l’elenco completo" src="https://images2.corriereobjects.it/methode_image/2023/02/08/Economia/Foto%20Economia%20-%20Trattate/Clipboard-0043-krdF-U3400772669232Jf-656x492@Corriere-Web-Sezioni.jpg" title="Le banche più «solide» d’Europa (secondo la Bce), le italiane al top: ecco l’elenco completo" /><p>La Banca centrale europea promuove la solidità delle banche italiane: superate le criticità della guerra. Il capo della vigilanza Enria: «Possono ripartire le aggregazioni in Europa»</p>',
      date: '2023-02-09T08:07:42+00:00',
      source: 'prova',
      title:
        'Le banche più «solide» d’Europa (secondo la Bce), le italiane al top: ecco l’elenco completo',
      url: 'https://www.corriere.it/economia/finanza/23_febbraio_09/banche-piu-sicure-d-europa-secondo-bce-credem-altre-italiane-top-148d821c-a7d8-11ed-b9c4-8c4ac5be6a91.shtml',
    },
    {
      categories: ['Economia'],
      contentSnippet:
        '<p><img alt="Grafene, ecco come ci cambierà la vita (a partire dalle superbatterie) " src="https://images2.corriereobjects.it/methode_image/2023/02/07/Economia/Foto%20Economia%20-%20Trattate/graphene-3193185_1920-ktqh-u3400697597707fob-1224x916corriere-web-sezioni_656x492.jpg" title="Grafene, ecco come ci cambierà la vita (a partire dalle superbatterie) " /><p>Tessuti che conducono elettricità e materiali spessi come un atomo. Eni, Cdp e Merloni ci credono. Investimento da 10 milioni nella società BeDimensional del fisico Vittorio Pellegrini </p>',
      date: '2023-02-09T08:02:05+00:00',
      source: 'prova',
      title:
        'Grafene, ecco come ci cambierà la vita (a partire dalle superbatterie)',
      url: 'https://www.corriere.it/economia/finanza/23_febbraio_09/ecco-come-grafene-ci-cambiera-vita-partire-superbatterie-cdp-merloni-ed-eni-ci-credono-5aa874f6-a6ce-11ed-b9c4-8c4ac5be6a91.shtml',
    },
  ],
  linkMore: 'http://localhost:3000/eventi',
  linkMoreTitle: 'Is this just fantasy',
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
  const cards = document.querySelectorAll('.card');
  expect(cards.length).toBe(mock_fields.limit);

  //data card --> cambia in base a rss
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
