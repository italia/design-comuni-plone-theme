.. This README is meant for consumption by humans and pypi. Pypi can render rst files so please do not use Sphinx features.
   If you want to learn more about writing documentation, please check out: http://docs.plone.org/about/documentation_styleguide.html
   This text does not appear on pypi or github. It is a comment.

==============================================================================
design.plone.theme
==============================================================================

Il primo tema Plone conforme a `Italia design system`__.

__ https://design-italia.readthedocs.io/it/stable/index.html

Questo tema si basa sulla versione 2017.1 delle linee guida.

|

This is the first Plone theme that is compliant with the `Italia design system`__ guidelines.

__ https://design-italia.readthedocs.io/it/stable/index.html

It is built on guidelines' version 2017.1.

This README is written in italian language because it's meant for Italian Public Administration websites.


Documentazione
--------------

La documentazione per l'utente finale è disponibile in `questo documento`__.

__ https://docs.google.com/document/d/1ncSgzj0JABBWR1Jt7sxtIH5qwjCVN10qBm7uA8uM5cw/export?format=pdf


Esempi
------

Questo tema può essere visto in azione nei seguenti siti web:

- `digitale.regione.emilia-romagna.it`__
- `regione.emilia-romagna.it`__
- `comune.santarcangelo.rn.it`__
- `comune.calderaradireno.bo.it`__
- `comune.verucchio.rn.it`__

__ http://digitale.regione.emilia-romagna.it
__ http://www.regione.emilia-romagna.it
__ http://www.comune.santarcangelo.rn.it
__ http://www.comune.calderaradireno.bo.it
__ http://www.comune.verucchio.rn.it


Traduzioni
-----------

Questo prodotto è stato tradotto nelle seguenti lingue:

- Italiano
- English


Installazione
-------------

Installa design.plone.theme aggiungendolo al tuo buildout::

    [buildout]

    ...

    eggs =
        design.plone.theme


e successivamente eseguendo ``bin/buildout``.

Al successivo avvio del sito troverete il tema disponibile tra i prodotti aggiuntivi del sito, con il nome "Tema: Italia design system".


Sviluppo
--------

Per prima cosa bisogna installare le dipendenze npm:

``npm install``


Per la compilazione del codice Sass e la build del bundle JavaScript, sono presenti alcuni script nel ``package.json``:

- ``npm run develop``: esegue la compilazione con grunt e lo lascia avviato in modalità watch
- ``npm run build``: compila con grunt e esegue prettier
- ``npm run test``: esegue il linting con stylelint.


Compatibilità
-------------

Questo prodotto è stato testato su Plone >= 5.0.7.


Riconoscimenti
--------------

Sviluppato con il supporto di `Regione Emilia-Romagna`__.

__ http://www.regione.emilia-romagna.it/



Autori
------

Questo prodotto è stato sviluppato dal team di RedTurtle Technology.

.. image:: http://www.redturtle.it/redturtle_banner.png
   :alt: RedTurtle Technology Site
   :target: http://www.redturtle.it/
