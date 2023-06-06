# io-Comune: il tema di Plone per la Pubblica Amministrazione

Crea con semplicità il nuovo sito del tuo Comune o Ente Pubblico:\
conforme alle nuove linee guida AgID, accessibile a tutti ed usabile da smartphone e da PC.

![io-comune](/docs/01-io-comune.png)

### Pensato per i cittadini, costruito con i redattori

io-Comune è la soluzione versatile e facile da usare per garantire ai cittadini un rapido accesso ai contenuti e ai servizi del tuo Comune, sia dal PC che da mobile.

### AgID 2.0

io-Comune segue le linee guida ufficiali per il design dei siti web dei Comuni italiani: layout grafico, architettura informativa, struttura dei contenuti e flussi di navigazione rispecchiano gli standard definiti da AgID.

### Trovabilità dei contenuti

io-Comune integra componenti e flussi di navigazione suggeriti da AgID, con l'esperienza ventennale di [RedTurtle](https://www.redturtle.it/) nella gestione di complesse basi informative per darti la migliore esperienza di fruizione e portarti velocemente al contenuto desiderato.

### La porta per i servizi online

io-Comune supporta nativamente le piattaforme abilitanti, come la componente di autenticazione SPID e il sistema di pagamento pagoPA.\
Inoltre, io-Comune permetterà l’integrazione con IO, l'app ufficiale dei servizi pubblici, per poter dialogare con i cittadini anche dal telefono.

### Certificato e sicuro, si affida ad un CMS open source

Puoi utilizzare io-Comune in totale sicurezza perché ha seguito con successo il [percorso di qualificazione per i fornitori di Software as a Service](https://catalogocloud.agid.gov.it/service/1085) della PA (SaaS).

Questo ti garantisce un servizio di qualità e libertà di cambiare piattaforma senza vincoli di lock-in.

io-Comune è una piattaforma disponibile nel cloud certificato della PA. In particolare il servizio viene erogato sulla piattaforma certificata IaaS (Infrastructure as a Service) Amazon Web Services presso la server farm di Milano, offrendo tutta la robustezza e sicurezza necessaria.

[io-Comune](https://www.io-comune.it/) è il tema Volto per il CMS [Plone](https://plone.org/) che permette di aderire al [modello di sito istituzionale dei Comuni Italiani](https://designers.italia.it/modello/comuni/).

Quindi non solo un semplice tema grafico, gestisce ed implementa anche tutte le tipologia di contenuto (Content Type) delle linee guida: di fatto consente la realizzazione di un sito istituzionale di un Comune (ma anche di altri tipi di Enti Pubblici) conforme alle linee guida di design.

Usato da piccoli Enti e anche da grandi PA come la **Regione Emilia Romagna**, l’**Università di Bologna** e la **Guardia di Finanza** per centinaia di siti.

![io-comune](/docs/04-io-comune.png)

## Installazione e supporto

Nel progetto è presente una configurazione docker compose per testare un sito Io-Comune semplicemente usando il comando::

```bash
% make demo
```

## Sottositi

Il sistema implementa anche un tipo di contenuto ad hoc per la gestione di sottositi, in linee con le indicazioni generali.

Si veda ad esempio:
[Comune di Modena: Informagiovani](https://www.comune.modena.it/informagiovani)

## Autenticazione SPID

L'integrazione dell'autenticazione con SPID, viene fatta generalmente tramite addon plone come
[pas.plugins.oidc](https://pypi.org/project/pas.plugins.oidc),
[pas.plugins.headers](https://pypi.org/project/pas.plugins.headers), ...
insieme a sistemi di integrazione SPID verificati con SPID o con federatori di autenticazione
(Shibboleth, Keycloak, ...).

Il tema prevede la possibilità di definire due environment `RAZZLE_SPID_LOGIN_URL` e `RAZZLE_SPID_LOGOUT_URL`
su cui impostare rispettivamente la url di login e di logout, eventualmente esterne al sito, per l'integrazione.

## Esempi di siti che usano questo tema/sistema

- [ASP Comuni Modenesi Area Nord](https://www.aspareanord.it/)
- [Azienda Ospedaliero-Universitaria di Ferrara](https://www.ospfe.it/)
- [Azienda USL di Ferrara](https://www.ausl.fe.it/)
- [Azienda USL di Piacenza](https://www.ausl.pc.it/)
- [Biblioteche Pianura Est](https://bibest.it)
- [Camera di Commercio dell'Umbria](https://www.umbria.camcom.it/)
- [Camera di Commercio di Reggio Emilia](https://www.re.camcom.gov.it/)
- [Comune di Bibbiano](https://www.comune.bibbiano.re.it/)
- [Comune di Campegine](https://www.comune.campegine.re.it/)
- [Comune di Camposanto](https://www.comune.camposanto.mo.it/)
- [Comune di Canossa](https://www.comune.canossa.re.it/)
- [Comune di Cantagallo](https://www.comune.cantagallo.po.it/)
- [Comune di Imola](https://www.comune.imola.bo.it)
- [Comune di Medolla](https://www.comune.medolla.mo.it/)
- [Comune di Mirandola](https://www.comune.mirandola.mo.it/)
- [Comune di Modena](https://www.comune.modena.it/)
- [Comune di Montecchio Emilia](https://www.comune.montecchio-emilia.re.it/)
- [Comune di Novellara](https://www.comune.novellara.re.it/)
- [Comune di Parma](https://www.comune.parma.it/)
- [Comune di Piacenza](https://www.comune.piacenza.it/)
- [Comune di Reggio Emilia](https://www.comune.re.it/)
- [Comune di San Lazzaro di Savena](https://www.comune.sanlazzaro.bo.it)
- [Comune di San Polo d'Enza](https://www.comune.sanpolodenza.re.it/)
- [Comune di San Possidonio](https://www.comune.sanpossidonio.mo.it/)
- [Comune di Santilario d'Enza](https://www.comune.santilariodenza.re.it/)
- [Comune di Vaiano](https://www.comune.vaiano.po.it/)
- [Comune di Vernio](https://www.comune.vernio.po.it/)
- [Comando Generale della Guardia di Finanza](https://www.gdf.gov.it/it)
- [NNB Ispra Ambiente](https://www.nnb.isprambiente.it)
- [Nuovo Circondario Imolese](https://www.nuovocircondarioimolese.it)
- [Ospedali Galliera - Bilancio Sociale](https://bilanciosociale.galliera.it)
- [Provincia di Pisa](https://www.provincia.pisa.it/)
- [UCMAN (Unione dei Comuni Modenesi Area Nord)](https://www.unioneareanord.mo.it/)
- [Unione Val d'Enza](https://www.unionevaldenza.it/)
- [Unione Val di Bisenzio](https://www.bisenzio.it/)

## Riferimenti

- [Documentazione tecnica per lo sviluppo del tema](DEVELOPMENT.md)
- [Documentazione tecnica CMS Plone](https://6.docs.plone.org)
- [Sito web progetto io-Comune](https://www.io-comune.it/)
- [Modello di sito istituzionale dei Comuni Italiani](https://designers.italia.it/modello/comuni/)
