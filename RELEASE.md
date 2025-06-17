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

- ...

### Fix

- ...
 -->

## Versione 12.2.0 (17/06/2025)

### Migliorie

- Le immagini negli slider vengono ora caricate in modalità 'lazy', in modo da alleggerire il caricamento iniziale della pagina.

### Novità

- Blocco form aggiornato, ora è possibile rendere visibili i vari campi solo quando vengono soddisfatte determinate condizioni create dal redattore.

### Fix

- Sistemata la dimensione delle card nella variazione Bandi del blocco elenco.

## Versione 12.1.4 (22/05/2025)

### Fix

- Spazio aggiunto tra le righe se la variazione "Blocco link completo" ha più di due righe di contenuto.

## Versione 12.1.3 (20/05/2025)

### Fix

- Corretta la descrizione per la didascalia per l'immagine di testata dentro al CT Argomento.
- Uniformato le varie spaziature e allineamenti dei blocchi Elenco.

## Versione 12.1.2 (07/05/2025)

### Fix

- L'altezza delle immagini all'interno del blocco "link solo immagini" è stata aumentata e non ha più un limite massimo. Ora tutte le card avranno la stessa altezza.
- Sistemato stile del blocco callout per la versione mobile.
- Sistemati i formati "A pieno schermo" e "Allineamento al centro" del blocco Video, l"immagine in anteprima dava problemi nella visualizzazione di video di YouTube.

## Versione 12.1.1 (14/04/2025)

### Fix

- Sistemato select di ordinamento dei risultati di ricerca nella pagina di ricerca generale del sito, ora tramite url se si inserisce il parametro sort_on con valore "Date", "relevance" o "sortable_title" risultati di ricerca sono ordinati correttamente.

## Versione 12.1.0 (04/04/2025)

### Migliorie

- Rimosso il limite al numero di persone collegabili nel campo "Assessori di riferimento" nel CT Unità Organizzativa.
- a11y: Migliorata la lettura dei lettori di schermo della dimensione di un file: il separatore dei decimali è ora una virgola.

### Novità

- Aggiunto alla persona le cartelle "Emolumenti complessivi percepiti a carico della finanza" e "Dichiarazione insussistenza cause di inconferibilità e incompatibilità" per la gestione dei suddetti allegati.
- È ora possibile nascondere il titolo nella testata del sito, spuntando l'apposita opzione del Pannello di controllo del Sito.
- Aggiunta una versione aggiornata del blocco Contenuto in primo piano più performante e consistente.

### Fix

- I campi link accettano url contenenti un "/" e altre parti di link dopo un carattere di tipo "#".
- Il filtro di testo dei blocchi ricerca è ora dotato di una label che lo rende accessibile.
- Risolti dei problemi nella ricorrenza mensile del widget delle ricorrenze all'interno del CT Evento.

## Versione 12.0.0 (31/03/2025)

### Migliorie

- Aggiornato l'editor predefinito del sito, ora usa un motore più performante.

## Versione 11.29.2 (26/03/2025)

### Fix

- Risolto un problema con l'aggiunta di un blocco di testo attraverso il selettore dei blocchi all'interno dei campi a blocchi delle form dei Content Type che li prevedono.
- Risolto un problema che impediva la visualizzazione della sidebar dei blocchi all'interno di alcuni campi a blocchi delle form dei Content Type che li prevedono, impattandone l'utilizzo e la modifica.

## Versione 11.29.1 (24/03/2025)

### Migliorie

- Il CT Collegamento identifica meglio i permessi dell'utente e di conseguenza il reindirizzamento automatico è più preciso.

### Fix

- Nel titolo e nel testo del campo "Data di fine dell'incarico" è stato rimosso il riferimento al nome dell'incarico.
- Risolto un problema con la validazione dei link inseriti nei campi url (ad es. URL del CT Collegamento).
- Risolto un problema con il template del blocco Elenco, variazione Card con testo animato.

## Versione 11.29.0 (07/03/2025)

### Migliorie

- Nel CT Documento ora è possibile gestire anche il CT File tramite taglia/incolla, laddove serva spostare dei File dentro uno specifico documento.
- Correzione del testo visualizzato sul pulsante "Cancella tutti i commenti" per la Customer Satisfaction, migliorando la leggibilità e conformità.
- Migliorata l'accessibilità per il widget dei campi di tipo Slate che salvano i dati in formato HTML.
- Migliorata l'accessibilità per gli elementi di tipo blockquote.
- Migliorata la lettura delle timeline di date nel dettaglio di Bando e Evento.

### Fix

- Sistemata la visualizzazione su mobile dei blocchi elenco inseriti all'interno dei blocchi griglia.
- Il titolo della homepage del sito è ora accessibile.
- Risolto un problema con i link all'interno dei blocchi Accordion.

## Versione 11.28.0 (04/03/2025)

### Migliorie

- Tutti i bottoni della sezione "Accedi al servizio" hanno lo stesso font.
- Nel blocco 'Cerca' ora viene fatto lo scroll automatico nel punto dove iniziano i risultati di ricerca quando vengono modificati i filtri.

### Novità

- Nel campo "Assessori di riferimento" nel CT Unità Organizzativa è ora possibile collegare due CT Persona.
- Per caricare documenti per "Dichiarazioni di insussistenza e incompatibilità" e per "Emolumenti a carico della finanza pubblica" è ora possibile caricare anche documenti multipli dalle cartelle contenute nel CT Persona, non solo dai campi specifici.

### Fix

- I campi del CT Servizio - sezione Accedi al Servizio funzionano correttamente.
- Sistemato lo stile del focus nelle select del blocco 'Cerca'.

## Versione 11.27.0 (26/02/2025)

### Migliorie

- Migliorata l'accessibilità del blocco Accordion.

### Fix

- Se su un evento si imposta una ricorrenza mensile per eventi che avvengono in uno specifico giorno della settimana, la ricorrenza viene calcolata correttamente.
- Aggiunto correttamente il data-element ai link della card con testo animato del blocco Elenco.
- Aggiunta una nuova condizione per la corretta compilazione dell’attributo **alt** e **title** nelle immagini dei blocchi listing. Ora questi attributi utilizzano correttamente i testi delle didascalie dell'immagine di anteprima o testata se impostati. L'attributo **title** viene valorizzato solo se esiste una didascalia associata all’immagine.
- Rimosso l’attributo **showTitleAttr** dal componente _ListingImage_ utilizzato nei template del blocco listing: card con immagine, persona, blocco link completo, contenuto in evidenza, gallery a griglia, e in evidenza. Ora gli attributi **title** e **alt** vengono calcolati e impostati direttamente dal componente _ListingImage_.
- Condizione per la Label per i select ripristinata.
- Sistemata la visualizzazione del sottotitolo nel content-type Luogo (in alcuni casi non si vedeva).
- Rimosse le scrollbar dal widget 'Select' dei filtri di ricerca del blocco 'Cerca'.

## Versione 11.26.5 (06/02/2025)

### Migliorie

- La sezione contatti del CT Evento è stata riorganizzata per una maggiore chiarezza e coerenza.
- Nei blocchi elenco, gli stili dei testi nelle card che richiamano un CT persona sono conformi alle card che rappresentano gli altri CT.
- Impostando degli heading all'interno delle sezioni di testo nei vari CT, gli stili sono ora coerenti con l'ordine corretto dei titoli utilizzati.
- Aggiornate le traduzioni italiane.
- Nella sezione Documenti della vista dei tipi di contenuto Documento vengono ora mostrati sia i Moduli che i Collegamenti.

### Fix

- I bottoni del menu nel pannello di controllo dei cookies visualizzano correttamente le icone.
- Gli argomenti nelle card con immagine sono allineati correttamente.
- Sistemata l'opzione "Mostra i PDF in anteprima" dell template "Allegati" del blocco elenco, perchè non aveva alcun effetto.
- Sistemata la visualizzazione del blocco griglia su mobile: disposti verticalmente ogni blocco della griglia
- Sistemata l'opzione "Mostra i PDF in anteprima" dell template "Allegati" del blocco elenco, perchè non aveva alcun effetto.
- Sistemata la visualizzazione del blocco griglia su mobile: disposti verticalmente ogni blocco della griglia
- Sistemata la visualizzazione delle card con immagine in cui il contenuto rappresentato non ha un'immagine da mostrare.
- Migliorata l'accessibilità in modifica dei blocchi Contatti, Icone, Numeri.
- Sistemati alcuni problemi di visualizzazione delle card con avatar.

## Versione 11.26.3 (15/01/2025)

### Fix

- E' possibile caricare moduli in maniera massiva nei documenti all'interno delle aree corrette dentro Documenti e Dati > Modulistica

## Versione 11.26.1 (27/12/2024)

### Fix

- Risolto un problema riguardante la visualizzazione delle estensioni dei file quando si utilizza un link ad un documento nei blocchi di testo.

## Versione 11.26.0 (20/12/2024)

### Migliorie

- Se vengono aggiunte o rimosse date dalla ricorrenza di un CT evento, nel sottotitolo viene aggiunta l'indicazione di controllare le eccezioni nella sezione apposita.
- Il sottotitolo del CT Evento mostra il range di date per tutti gli eventi con ricorrenza o con una data di fine diversa dalla data di inizio.
- Sistemata l'accessibilità riguardante il focus lato operatore.

### Novità

- Nel blocco 'Cerca' è stata aggiunta l'opzione "Usa l'ordinamento dei risultati di Plone" nella sezione 'Controlli'.

### Fix

- Il menu a tendina da cui è possibile filtrare i luoghi nel blocco Ricerca Eventi mostra tutti i luoghi collegati agli eventi presenti nel percorso selezionato dalla Sidebar, senza limitarne il numero.
- Risolto un problema con il colore del testo del bottone nell'editor.
- Rimossa l'opzione non selezionabile "nessun valore" dal widget ricorrenza.
- La pagina non dà più errore quando si imposta una ricorrenza con impostazione "Termina dopo tot. ricorrenze".

## Versione 11.25.3 (12/12/2024)

### Migliorie

- Aggiornate diverse traduzioni italiane.

## Versione 11.25.1 (28/11/2024)

### Fix

- Aggiustato il collegamento alla UO nella pagina Argomento.

## Versione 11.25.0 (26/11/2024)

### Migliorie

- Rimossa dal CT Evento la data di scadenza del CT per evitare confusione con le date effettive dell'evento
- Durante la ricerca nel sito dalla popup che compare cliccando sul bottone 'Cerca' nella testa del sito, viene mostrato un loader in overlay durante il caricamento della pagina dei risultati perchè questo potrebbe richiedere un po' di tempo. Prima di questa modifica non era chiaro se la ricerca fosse iniziata.
- Nel CT Evento per una rassegna, se gli eventi figli hanno una ricorrenza o un periodo di date impostato, il range di date verrà mostrato nella card all'interno dell'evento padre.
- Se l'url di una immagine è rotto, viene mostrato un avviso al posto dell'immagine rotta.

### Novità

- E' ora possibile decidere se mostrare l'immagine di anteprima per tutte le card nel blocco di ricerca Evento e Unità Organizzativa.

## Versione 11.24.5 (22/11/2024)

### Migliorie

- Inserito messaggio di avviso quando si tenta di caricare un file dalla cartella Modulistica all'interno di un Servizio per segnalare limitazione sull'upload

### Fix

- L'impostazione "Solo cookie tecnici" non causa problemi nell'apertura del cookie banner.
- [WebKit, Safari, iOS] Risolto un problema di visualizzazione grafica di alcuni bottoni che contengono al loro interno un link ad un sito esterno.
- Quando un evento ha impostata l'opzione "Tutta la giornata", le date sotto il titolo vengono visualizzate in maniera corretta.

## Versione 11.24.4 (07/11/2024)

### Fix

- Risolto un problema di visualizzazione grafica per il bottone di login all'area personale per alcune specifiche dimensioni di schermi

## Versione 11.24.3 (24/10/2024)

### Migliorie

- Quando viene impostata una ricorrenza, nel tipo di contenuto Evento viene mostrata la data di fine della ricorrenza invece che del singolo evento

### Fix

- Risolto problema con i video esterni che puntano a degli mp4: ora non vengono più erroneamente visti come link interni.

## Versione 11.24.0 (03/10/2024)

### Migliorie

- Cambiato il titolo della sezione "fine incarico" nel CT Persona.

### Fix

- Risolto un problema con il blocco Form che in alcuni casi poteva dare problemi di validazione dei campi di tipo 'testo statico'.
- Sistemate diverse incogruenze e errori generati dal widget per la creazione delle ricorrenze nel CT Evento.

## Versione 11.23.2 (24/09/2024)

### Migliorie

- Gli utenti SPID vengono ora direttamente rediretti al link finale quando viene utilizzato un CT di tipo Collegamento

### Fix

- L'assegnazione dei ruoli nella vista gruppi funziona correttamente per tutti i gruppi di utenti.

## Versione 11.23.1 (19/09/2024)

### Migliorie

- Il colore del focus da tastiera sugli elementi della pagina è ora bianco e nero per garantire sempre un contrasto ottimale su tutti gli sfondi.

## Versione 11.23.0 (19/09/2024)

### Migliorie

- Migliorato il layout della galleria immagini nei CT.
- Nel blocco Cerca Evento, nel caso di un Evento Rassegna, tra i risultati vengono ora visualizzati solo gli appuntamenti della rassegna e non l'evento contenitore.

### Novità

- Aggiunto campo per l'inserimento del titolo e della descrizione nel blocco Accordion.

### Fix

- Rimosso il campo "ID lighthouse" dal blocco elenco con variazione Card con Testo Animato perchè entra in contrasto con asseveratore

## Versione 11.22.0 (05/09/2024)

### Migliorie

- Modificata la lista dei Luoghi per filtrare la ricerca degli eventi. Si prendevano tutti i luoghi, ora solo quelli legati agli eventi per avere una lista più corta.
- Migliorato l'ordinamento della ricerca nel blocco cerca: la ricerca iniziale rispetta l'eventuale selezione del redattore; nel momento in cui si cerca inserendo un testo allora si ordina per ranking.
- Mostrato il numero di risultati della ricerca nel blocco cerca.

### Novità

- Il blocco Form ha nuove funzionalità come il limite di iscrizioni e la possibilità di impostare un campo come univoco.
- Aggiunti al CT Persona i campi per la gestione della Trasparenza per allegare i file sugli emolumenti a carico della finanza pubblica e le dichiarazioni di insussistenza e incompatibilità.

### Fix

- Ripristinata l'informazione sull'ultimo aggiornamento nel CT Unità Organizzativa.
- Risolto un problema con la spaziatura nel testo di presentazione dei risultati di ricerca nel blocco cerca.

## Versione 11.21.0 (14/08/2024)

### Fix

- Le date delle card nella Ricerca Eventi vengono mostrate correttamente come impostate nell'evento.

## Versione 11.20.2 (12/08/2024)

### Fix

- Risolto un problema per cui veniva mostrato temporaneamente un messaggio di errore quando si visitava un indirizzo alternativo creato con lo strumento Gestione URL.

## Versione 11.20.1 (09/08/2024)

### Fix

- Il testo che descrive la ricorrenza mensile è stato corretto per coprire tutti i casi.

## Versione 11.18.2 (25/07/2024)

### Fix

- Nel CT Persona, tutte le sezioni Incarico appaiono ora nel menu

## Versione 11.18.1 (25/07/2024)

### Fix

- Migliorata la visualizzazione delle card risultato nella ricerca Eventi e Unità Organizzativa.

## Versione 11.18.0 (19/07/2024)

### Migliorie

- Aggiunta la paginazione per le card presenti sotto i campi "Sede di" e "Servizi presenti nel luogo", ora verranno mostrati solo 4 elementi alla volta.

## Versione 11.17.0 (16/07/2024)

### Novità

- Ora il titolo, sottotitolo, favicon, logo e logo del footer sono editabili dal pannello di controllo del Sito. Se non impostati, verranno usati quelli definiti dagli sviluppatori.

### Fix

- Ripristinato il funzionamento del filtro luogo nella ricerca eventi.

### Migliorie

- Viene ora mostrato un errore parlante nel caso si tenti di caricare un file che superi le dimensioni massime consentite, di default 100mb, come già esplicitato sul manuale utente.

## Versione 11.16.0 (10/07/2024)

### Migliorie

- Tutti i campi compilabili nel CT Incarico vengono ora visualizzati nella vista corrispondente.

### Novità

- Aggiunti due campi nel blocco Form che permettono di configurare un testo per l'intestazione e uno a piè di pagina nella mail inviata.

## Versione 11.15.0 (05/07/2024)

### Novità

- Le informazioni sulla data di inizio e fine incarico sul CT persona vengono ora mostrate subito dopo l'incarico.

## Versione 11.14.0 (21/06/2024)

### Migliorie

- Il pulsante di aggiunta dei blocchi è stato spostato nella parte bassa del blocco (non si trova più alla sua sinistra), per migliorare l'usabilità della gestione dei blocchi anche su mobile/tablet.

## Versione 11.13.0 (12/06/2024)

### Migliorie

- Nel CT Persona viene visualizzato anche il testo del campo "Importi di viaggio e/o servizi" impostato nel CT Incarico collegato e, se presente più di un Incarico collegato, vengono mostrati i link a ciascun Incarico nella sezione "Altri incarichi".

### Novità

- Aggiunte informazioni sulle rassegne di eventi nei blocchi elenco.

### Fix

- Il bottone "callout con sfondo" della barra degli strumenti per il testo è nuovamente visibile.
- Il blocco Ricerca Eventi permette di eliminare il filtro date.

## Versione 11.12.9 (06/06/2024)

### Fix

- La pagina di login e di reset della password usano il font corretto.

## Versione 11.12.6 (30/05/2024)

### Fix

- Il layout delle card con immagini rimane corretto anche selezionando l'opzione "Non alterare le dimensioni naturali dell'immagine".

## Versione 11.12.5 (30/05/2024)

### Novità

- Per ragioni di conformità alle linee guida Agid, inibito l'inserimento di CT File nella cartella modulistica.

### Fix

- Sistemato il layout "Card con immagine" dei blocchi elenco quando gli elementi non hanno immagine.

## Versione 11.12.4 (30/05/2024)

### Fix

- Aggiustato il layout dei campi nel widget delle ricorrenze.

## Versione 11.12.1 (21/05/2024)

### Migliorie

- Migliorate le performance di navigazione per alcuni link agli argomenti nella testata delle pagine.

## Versione 11.12.0 (21/05/2024)

### Migliorie

- Se una Unità Organizzativa è collegata a più di 4 servizi, le card dei servizi collegati verranno divise in diverse pagine navigabili da uno strumento di paginazione per rendere lo scorrimento della pagina più semplice.
- Cambiato il layout delle immagini all'interno del blocco Griglia.
- Migliorata la visualizzazione delle parole evidenziate nella pagina di Ricerca.
- Rinominato il contenitore "Altri allegati" dentro i contenuti di tipo Persona in "Altri documenti".

### Novità

- Le immagini delle Card con Immagine del blocco Elenco sono ora cliccabili. Cliccandole si apre il contenuto della Card.

### Fix

- Corretto il testo per la ricorrenza eventi nel CT Eventi.

## Versione 11.11.1 (02/05/2024)

### Migliorie

- Il campo tipologia è ora mostrato all'interno della pagina del CT Evento, se compilato.

## Versione 11.11.0 (29/04/2024)

### Migliorie

- Aggiunte le date degli eventi figli nel caso questi non presentino immagini nella card.

### Novità

- Modificato vista del tipo di contenuto Persona per mostrare anche la cartella interna "Altri allegati".

### Fix

- Aggiustato problema per il blocco elenco, variazione card con Immagine, per gli eventi con ricorrenza.

## Versione 11.10.0 (17/04/2024)

### Migliorie

- Nel blocco Argomenti in Evidenza, è stata rimossa l'obbligatorietà di aggiungere una card argomento, ora si possono inserire anche solo le etichette.
- Aggiunta la possibilità di inserire testo nel filtro luogo nel blocco Ricerca Eventi.
- Le opzioni del menu a tendina per il filtro luogo nel blocco Ricerca Eventi sono ordinate alfabeticamente.
- Il focus quando un elemento (link o pulsante) è cliccato con il mouse non ha più il bordo giallo/arancione.
- Migliorati gli stili per la stampa del CT pagina.

### Novità

- Ora i link in testata nell'header slim sono configurabili da pannello di controllo.
- Nel template Slider del blocco elenco, ora è possibile scegliere l'aspetto degli elementi dello slider (default: slide semplice con immagine e titolo cliccabile, Card semplice, Card con immagine).
- Nel blocco Argomenti in Evidenza sono state aggiunte due nuove proprietà, una permette di allineare gli "Altri argomenti" al centro e la seconda serve a nascondere o meno il bottone "Vedi tutti" che punta alla pagina argomenti.

### Fix

- Nel blocco Argomenti in Evidenza se non ci sono card ma etichette argomento, il blocco non renderizza più lo sfondo per un maggiore contrasto con le etichette, di conseguenza il titolo del blocco rimane nero e non bianco.
- Aggiunto il titolo per la sezione "Organizzatore esterno" quando il campo è compilato nel tipo di contenuto Evento.
- I chip che non hanno collegamenti non si comportano più come link al posizionamento del mouse.
- Sistemato un problema nella vista del CT Evento, che mostrava tra le date aggiuntive della ricorrenza anche le date escluse.
- Sistemato un problema per cui la visualizzazione della sitemap in presenza di un sito multilingua generava errore.
- Migliorata l'accessibilità dei link nel footer.
- Migliorata l'accessibilità del blocco elenco nella variazione Slider.
- Migliorati gli stili del blocco accordion.

## Versione 11.9.1 (03/04/2024)

### Fix

- Risolto un problema dovuto all'assenza di una id specifico nelle traduzioni.

## Versione 11.9.0 (03/04/2024)

### Migliorie

- Effettuate diverse migliorie di accessibilità.

### Novità

- Aggiunta una nuova variazione del blocco elenco "Allegati" che permette di scaricare oggetti di tipo File o aprire l'anteprima di file PDF.

### Fix

- Sistemata la visualizzazione dei blocchi elenco all'interno del blocco griglia.
- L'etichetta della Card con Nastro (Blocco Elenco) non si sovrappone più all'icona del nastro.
- Aggiustato il layout della card per le persone quando è impostata un'immagine.
- Sistemato bug su blocchi di ricerca Bandi, Eventi e UO nei quali rimanevano memorizzati i risultati di ricerca anche abbandonando la pagina.
- Tradotto il messaggio per Screen Reader del bottone per aprire e chiudere il menu in mobile.

## Versione 11.8.0 (19/03/2024)

### Migliorie

- Gli stili del tipo di contenuto Unità Organizzativa sono stati ottimizzati per la stampa.

### Novità

- È possibile scaricare il file o l'immagine caricata dal widget di upload file cliccando sul nome del file stesso.
- È possibile aggiungere un testo alternativo per l'immagine del blocco Card con Immagine.

### Fix

- Nel blocco con icone, se era impostata una immagine di sfondo non si vedeva.

## Versione 11.7.0 (15/03/2024)

### Novità

- Ora la fascia del footer contenente il logo e il nome del sito è configurabile da pannello di controllo.
- Nel pannello di controllo dei Feedback, ora gli utenti con permesso di eliminare elementi da questa sezione, possono eliminare i feedback.

### Migliorie

- Nel blocco form, se in fase di compilazione ci sono degli errori, viene mostrato un messaggio di errore specifico per ogni campo con errori.

### Fix

- Il bordo destro della variazione Link solo immagine del blocco Elenco è stato ripristinato.
- Se si mettono due blocchi Form nella stessa pagina, ora funzionano correttamente.
- Aggiustato il modulo di Feedback quando si cambia valutazione dopo averne già selezionata un'altra.

## Versione 11.6.1 (06/03/2024)

### Fix

- Quando si imposta una ricorrenza per giorni feriali negli Eventi, viene visualizzato il testo corretto "ogni giorno feriale".
- Le icone social nel menu laterale mobile sono tutte dello stesso colore.

## Versione 11.6.0 (05/03/2024)

### Migliorie

- Nel blocco form è stata aggiunta una legenda per i campi obbligatori.

### Novità

- Rimosso i contatti dalle card che rappresentano Unità Organizzative nelle varie viste dei diversi content type in cui sono implementate.
  La lista delle viste comprende i CT: Persona, Unità Organizzativa, Documento, Bando, Servizio, Notizia, Evento, Incarico, Luogo, Argomento.
- Aggiornato il plugin del blocco Form, adesso si ha la possibilità di aggiungere un pulsante per resettare i campi e nella sidebar è presente un nuovo campo per creare un messaggio personalizzato dopo l'invio della form, i campi di tipo: testo, email, data e textarea hanno un identificativo che può essere utilizzato per restituire il valore di quei campi nel messaggio personalizzato.

### Fix

- L'icona per aprire il menu in mobile è ora visibile anche quando l'header del sito è bianca.
- La descrizione nelle card per i punti di contatto non mostrano più tutte le iniziali in maiuscolo.
- Il colore dei link nel menu mobile è ora accessibile per tutti i temi.
- Titolo e descrizione sistemati su blocco icone. Adesso quando il loro contenuto è cancellato non resta lo spazio vuoto sopra le icone.
- Migliorata l'accessibilità della sezione dedicata al feedback utente per tutti i contenuti del sito.
- Rimosso il title dall'immagine di apertura dei contenuti.
- Rimosso attributo title dall'immagine delle card: card con immagine, persona, blocco link completo, contenuto in evidenza, gallery a griglia, in evidenza.
- Migliorata l'accessibilità del menu in versione mobile.
- Il layout dei campi di input "in errore" del blocco Form è stato uniformato.
- La tendina delle select nel blocco Form non si sovrappone più ai campi sottostanti.
- Sistemato alert di errore nel blocco Form che nascondeva il form quando un campo non era valido, ora continua a visualizzarsi anche la form.
- Migliorato il testo alternativo per il logo NextGenerationEU nel footer.
- Migliorata l'accessibilità del blocco Cerca.
- Sistemato il contrasto delle icone nei pulsanti "primary" quando si attiva il focus col tab da tastiera.

## Versione 11.5.1 (19/02/2024)

### Migliorie

- Il campo "Note aggiornamento" nel Tipo di Contenuto Bandi viene ora mostrato in pagina, se compilato.

## Versione 11.5.0 (16/02/2024)

### Migliorie

- Rimosso il campo "Risultati per pagina" che non agiva sulle impostazioni del blocco Calendario.

### Fix

- Risolto un problema riguardante la visualizzazione delle date nelle card che rappresentano un CT Evento nei vari listati nel caso in cui l'evento si sviluppi su anni diversi
- Risolto un problema di visualizzazione per la sezione Date e Orari nel CT Evento quando l'evento si sviluppa su anni diversi, ora viene mostrato anche l'anno se si rientra in questa casistica
- Nel blocco elenco, sono stati sistemati i filtri per percorso quando si clicca sul bottone configurato.

## Versione 11.4.1 (08/02/2024)

### Fix

- Migliorata l'accessibilità e aggiunto elementi per migliorare l'esperienza d'uso degli utenti che utilizzano screen reader nella vista Cartella FAQ
- Sistemato lo skiplink "Vai al contenuto" nella pagina principale di ricerca del sito
- Risolto un problema relativo alla navigazione da tastiera e di gestione del focus nei menu a tendina "Condividi" e "Azioni" nelle testate delle viste dei Content Type che le implementano.
- Reso il link ai diversi social elencati parlante, ora viene riportato "Seguici su nome_del_social"
- Rimossi gli heading per alcuni blocchi nel caso il titolo non sia presente al fine di migliorare l'esperienza con l'uso di screen reader
- Migliorata l'accessibilità per il blocco Contenuti in Evidenza e per i bottoni nei sottositi
- Sistemato l'html semantico degli heading per i template del Blocco Listing variazione RSS, migliorata l'esperienza d'uso per gli utenti che utilizzano screen reader
- Migliorata l'accessibilità per i contatti, lo screen reader ora legge anche il tipo di contatto oltre al testo (ad es. Telefono: numero di telefono)

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
