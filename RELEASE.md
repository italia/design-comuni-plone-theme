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

- Sistemato errore quando viene impostato "service-link" come ID lighthouse.

## Versione 10.4.1 (21/11/2023)

### Migliorie

- Migliorato l'allineamento delle informazioni dei bandi nelle card dei blocchi elenco

### Fix

- Nel blocco Cerca, quando viene selezionata la variazione "Colonna a destra" o "Colonna a sinistra" i blocchi si allineano correttamente, e i bottoni nella testata si vedono correttamente in modalità Edit.

## Versione 10.4.0 (14/11/2023)

### Novità

- Aggiunta la possibilità di selezionare la dimensione dell'immagine nel blocco Alert, inoltre è stato aggiornato anche il widget per la selezione del colore di sfondo.

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
