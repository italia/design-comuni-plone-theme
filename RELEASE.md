<!--- RELEASE file. La cura di questo file è in carico ai dev.
 Qui vanno inserite tutte le novità e bugfix, spiegati in un linguaggio comprensibile anche ai non dev.
 Se ci sono delle migliorie/novità per cui è stato aggiunto qualcosa nel manuale, linkarlo come nell'esempio sotto.
 -->

<!--- -----------------------------------------------------------------
  Esempio:
  ---------------------------------------------------------------------

## Versione 7.10.9 (12/09/2023)

### Migliorie

- Fissato il layout di stampa per pagine con Accordion

### Novità

- Nuovo blocco "Informazioni" [`Istruzioni`](https://docs.google.com/document/d/1SThuxa_ah0BuNXukWs564kKPfprK41WLQE8Mome-0xg/edit#heading=h.7ty110jumgmd)

### Fix

- il numero di telefono dentro card ufficio adesso è visibile anche senza indirizzo
-->

<!--- -----------------------------------------------------------------
 TEMPLATE PER RELEASE
 ----------------------------------------------------------------------

## Versione X.X.X (dd/mm/yyyy)

### Migliorie

- ...

### Novità

- ...  [`Istruzioni`](url della documentazione relativa alla novità)

### Fix

- ...
-->

## Versione X.X.X (dd/mm/yyyy)

### Fix

- Migliorata l'accessibilità e aggiunto elementi per migliorare l'esperienza d'uso degli utenti che utilizzano screen reader nella vista Cartella FAQ
- Sistemato lo skiplink "Vai al contenuto" nella pagina principale di ricerca del sito
- Risolto un problema relativo alla navigazione da tastiera e di gestione del focus nei menu a tendina "Condividi" e "Azioni" nelle testate delle viste dei Content Type che le implementano.
- Reso il link ai diversi social elencati parlante, ora viene riportato "Seguici su nome_del_social"
- Rimossi gli heading per alcuni blocchi nel caso il titolo non sia presente al fine di migliorare l'esperienza con l'uso di screen reader
- Migliorata l'accessibilità per il blocco Contenuti in Evidenza e per i bottoni nei sottositi
- Sistemato l'html semantico degli heading per i template del Blocco Listing variazione RSS, migliorata l'esperienza d'uso per gli utenti che utilizzano screen reader

## Versione 11.4.0 (06/02/2024)

### Novità

- Aggiunta l'icona per il formato di file CSV
- Nel pannello di controllo di 'Design plone' è stata aggiunta la possibilità di mostrare o meno il footer autogenerato.

### Fix

- Sistemata la gerarchia per i titoli dentro al blocco semplice

## Versione 11.3.4 (31/01/2024)

### Migliorie

- Migliorata l'esperienza redattore per il blocco Immagine con allineamenti laterali rispetto al corpo del testo nell'editor a blocchi
- Migliorata la resa e la responsività di alcune immagini nel corpo della pagina per diversi content type

## Versione 11.3.3 (30/01/2024)

### Migliorie

- Migliorato il focus sulle immagini in edit del blocco Immagine quando queste sono allineate a sinistra o a destra.

### Fix

- Sistemato il layout del blocco elenco per i Bandi
- Sistemato il layout del template Galliery a griglia per il blocco elenco, le immagini più piccole ora sono correttamente contenute dentro il loro riquadro e il titolo non fuoriesce più
- Sistemati problemi negli stili per i sottositi
- Risolto un problema di visualizzazione degli argomenti indicati come altri argomenti nel blocco Argomenti quando il loro numero è esiguo
- Sistemato il layout e la visualizzazione della vista del CT Cartella Modulistica per gestire al meglio gli elementi
  titolo, titolo del modulo e link al download in caso di testi lunghi, specialmente su mobile
- Colore di sfondo per il blocco icone impostato sul colore primario. Sistemato il contrasto tra descrizione e lo sfondo
- Sistemata la visualizzazione delle card Uffici (card Unità Organizzativa) nelle risoluzioni tablet più comuni
- Layout delle card per i luoghi migliorato per dispositivi tablet
- Risolto un problema di visualizzazione e allineamento delle immagini per le card dei blocchi elenco che rappresentano Persone,
  migliorata la visualizzazione e il layout su dispositivi tablet (intervallo dimensioni: 992px-1199px)

## Versione 11.3.2 (19/01/2024)

### Fix

- Risolto un problema di visualizzazione di alcune icone social.
- Risolto un problema con il menù di navigazione del footer, in cui a volte scomparivano le voci di secondo livello.
- Risolto problema di sovrapposizione del bottone "Chiudi" del menu laterale su mobile quando il menu è chiuso.

## Versione 11.3.0 (16/01/2024)

### Novità

- Aggiunto un campo descrizione nei punti di contatto per aiutare nella disambiguazione.
- Ora per gli eventi è obbligatorio inserire il campo "Luoghi correlati" oppure compilare i campi dell'indirizzo.

### Fix

- Migliorati gli stili per i sottositi.
- Risolto un problema con i filtri per data nel blocco Calendario.

## Versione 11.2.1 (15/01/2024)

### Migliorie

- Migliorata il testo della ricorrenza di un evento.

### Fix

- Risolto un problema nell'edit della ricorrenza di un evento.
- Risolto problema con lo stile "callout", icona megafono dell'editor di testo con sfondo bianco e bordo grigio

## Versione 11.2.0 (11/01/2024)

### Migliorie

- Migliorata l'accessibilità nella pagina di Ricerca.
- Diminuita la larghezza del testo nelle card che indicano i luoghi.

### Fix

- Risolto un problema nel blocco Video Gallery, per cui alcuni video di youtube non erano riproducibili.
- Risolto problema nel funzionamento della toolbar per il blocco HTML.
- Sistemate spaziature e font su mobile del blocco Card con Immagine e Card Semplice, migliorato il layout di quest'ultimo.
- È stato migliorato il contrasto minimo necessario tra sfondo e testo nei blocchi numeri, countdown e galleria a griglia.

## Versione 11.1.4 (05/01/2024)

### Fix

- Risolto il problema di layout nelle card che indicano dei luoghi.

## Versione 11.1.1 (22/12/2023)

### Fix

- Risolto un problema con la dimensione delle immagini, che risultava in alcuni casi troppo piccola causando immagini sgranate

## Versione 11.0.1 (19/12/2023)

### Fix

- Risolto un problema con le anteprime dei video embeddati da youtube.

## Versione 11.0.0 (18/12/2023)

### Novità

- Modificata l'altezza delle immagini delle card, per essere in linea con i template agid.

### Fix

- Sistemati gli stili per i sottositi per l'accessibilità.

## Versione 10.6.4 (18/12/2023)

### Fix

- Colori delle icone che specificano che un link è esterno che in alcuni casi erano errati.

## Versione 10.6.3 (15/12/2023)

### Fix

- Sistemati alcuni problemi di visualizzazione nei template disponibili per il blocco Cerca. Ora tutti i template disponibili per questo blocco rispecchiano graficamente quelli per il blocco Elenco sia in visualizzazione che in modifica.

## Versione 10.6.2 (14/12/2023)

### Fix

- Ora si vedono correttamente gli stili di allineamento del testo in alcuni editor di testo, ad esempio header e footer dei sottositi.

## Versione 10.6.1 (13/12/2023)

### Novità

- I seguenti campi sono ora riordinabili liberamente: "Timeline tempi e scadenze" per il tipo di contenuto _Servizio_ e "Valore punto di contatto" del tipo di contenuto _Punto di contatto_.

### Fix

- Rimosso pager-link automatico dal paginatore perché non riconosciuto dal validatore. È ora possibile inserire a mano il data-element pager-link nei blocchi di testo.

## Versione 10.5.0 (06/12/2023)

### Novità

- Nel blocco elenco, nel criterio di configurazione 'Posizione', è ora presente uno strumento per facilitare la ricerca dei contenuti nel sito, senza dover scrivere il percorso a mano.

### Fix

- Le immagini nelle card dei contenuti correlati sono centrate verticalmente.
- Il feedback form ora richiede necessariamente una risposta oltre al voto in stelle.
- Dimensione del titolo del blocco calendario uniformata ai titoli degli altri blocchi elenco.

## Versione 10.4.3 (28/11/2023)

### Migliorie

- Ora nella pagina 404 "Questa pagina non esiste" viene suggerito il proseguimento della navigazione verso la homepage invece che verso la ricerca.

### Fix

- Migliorata l'accessibilità del modulo di valutazione del sito che si trova in fondo ad ogni pagina.
- Il blocco Elenco con variazione Bandi viene visualizzato correttamente anche su tablet.

## Versione 10.4.2 (23/11/2023)

### Fix

- Sistemato il layout della card nella variazione Bandi del Blocco Elenco per la modalità tablet
- Sistemata accessibilità del read-more nel blocco elenco con variazione "Card con testo animato" quando si è in un sottosito con uno stile applicato.
- Sistemato errore quando viene impostato "service-link" come ID lighthouse.

## Versione 10.4.1 (21/11/2023)

### Migliorie

- Migliorato l'allineamento delle informazioni dei bandi nelle card dei blocchi elenco

### Fix

- Nel blocco Cerca, quando viene selezionata la variazione "Colonna a destra" o "Colonna a sinistra" i blocchi si allineano correttamente, e i bottoni nella testata si vedono correttamente in modalità Edit.

## Versione 10.4.0 (14/11/2023)

### Novità

- Aggiunta la possibilità di selezionare la dimensione dell'immagine nel blocco Alert, inoltre è stato aggiornato anche il widget per la selezione del colore di sfondo.
- Aggiunte le breadcrumbs nella pagina dei risultati della ricerca

### Fix

- Quando viene effettuata una ricerca dalla barra di ricerca nelle sezioni Amministrazione, Servizi, Novità, o Documenti e Dati, viene automaticamente impostato il filtro sulla sezione stessa così da mostrare solo i contenuti corrispondenti.
- Le icone del Blocco Numeri, del Blocco Icone e della Sidebar si aggiornano istantaneamente quando vengono cambiate
- Sistemato un bug nell'header dei sottositi che mostrava le voci del menu del sito padre anche se queste erano indicate come non visibili nella configurazione del menu.

## Versione 10.3.0 (08/11/2023)

### Fix

- Sistemata la visualizzazione della tipologia del bando nel template del blocco elenco 'Bandi'
- Rimosso titolo della pagina nei sottositi senza nessuno stile applicato

## Versione 10.2.0 (06/11/2023)

### Novità

- Aggiunto data-element pager-link al paginatore per il blocco Cerca per i quali viene impostata l'opzione service-link.

## Versione 9.0.1 (03/11/2023)

### Migliorie

- Migliorata l'accessibilità dei titoli dei contenuti

## Versione 8.9.0 (03/11/2023)

### Novità

- Aggiunto data-element pager-link al paginatore per i blocchi Elenco per i quali viene impostata l'opzione service-link.

## Versione 8.8.1 (03/11/2023)

### Fix

- Nei template dei feed RSS ora viene mostrata la sorgente se presente.

## Versione 8.7.12 (27/10/2023)

### Fix

- Migliorato il dimensionamento dell'icona del menù su dispositivi mobile
- Sistemata dimensione logo e bottone di ricerca su dispositivi mobile
- Migliorato il comportamento del menu laterale dei contenuti quando si aggiungono file nelle cartelle al loro interno
- Sistemata sovrapposizione della finestra di selezione blocchi con l'header del sito per alcune dimensioni dello schermo

## Versione 8.7.10 (19/10/2023)

## Fix

- Sistemata validazione del campo Timeline tempi e scadenze

## Versione 8.7.9 (18/10/2023)

### Migliorie

- Migliorato il comportamento per la selezione/deselezione degli elementi multipli nel menù laterale a scomparsa

### Fix

- Eliminata la sovrapposizione tra immagine e testo nel tipo documento Pagina quando l'immagine è verticale
- Cambiato il colore del bordo dell'icona Ricerca nell'header dei sottositi per garantire il contrasto per accessibilità
- Nascosta la fascia colorata del footer di un sottosito quando questo non è compilato
- Risolto un bug nel selettore dei link nel menù laterale a scomparsa, che permetteva di selezionare più elementi di quelli consentiti
- Alcune icone mancanti nel widget di selezione delle icone di fontawesome sono state rese nuovamente visibili
- Sistemate inconsistenze nella visualizzazione di alcuni tipi di elementi della lista degli allegati in Cartella Modulistica
- Visualizzazione sidebar in edit del blocco Numeri: sistemata la visualizzazione del testo di aiuto
- Sistemate le dimensioni dei risultati del blocco search con colonne laterali, rimosso overflow sopra ad altri elementi della pagina

## Versione 8.7.8 (12/10/2023)

### Fix

- Nel blocco Calendario, è stata sistemata la sovrapposizione dei pallini di navigazione con il pulsante per il link agli approfondimenti

## Versione 8.7.7 (12/10/2023)

### Migliorie

- Aggiornata nuova icona di Twitter

## Versione 8.7.6 (06/10/2023)

### Fix

- Uniformato e impostato a sinistra l'allineamento del testo nel blocco Elenco nella variazione Quadratoni con immagine

## Versione 8.7.3 (26/09/2023)

### Fix

- Sistemato margine del blocco Alert quando è allineato a sinistra.
- Sistemato il template degli Rss Card con immagine per mostrare la data corretta di pubblicazione della notizia

## Versione 8.7.0 (20/09/2023)

### Migliorie

- Nel template Blocco link solo immagini con link esterni, l'icona per i link esterni (richiesta dall'accessibilità) ora è disattivabile attraverso opzione del template
- Migliorata l'accessibilità e il supporto Screen Reader per il menu a tendina "Ordina Per" nella pagina di ricerca
- Migliorata la navigazione da tastiera quando si è in modifica dei blocchi Alert, Card Semplice, Card con Immagine, Accordion

### Fix

- sistemati gli oggetti link che puntano a file nella Cartella Modulistica
- Sistemato l'allineamento degli elementi nel blocco Contatti: se ci sono meno di tre elementi l'allineamento è centrato, se ce ne sono più di 3 l'allineamento è a sinistra.
- Migliorata accessibilità del calendario nel blocco ricerca Eventi e ricerca Bandi
- Fissato il layout del template Blocco link solo immagini con link esterni, posizionata l'icona di accessibilità per link esterni in overlay (se presente)
