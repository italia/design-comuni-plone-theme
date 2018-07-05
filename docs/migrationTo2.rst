==============================================================================
design.plone.theme
==============================================================================

Documentazione per la migrazione di sottotemi rispetto alla versione v2.0.0 di ``design.plone.theme``.


Cambiamenti minori
------------------

Riferimento a quanto scritto in `CHANGES.rst`__.

- Aggiornate le versioni dei pacchetti npm (importante: `prettier`__).
- Configurazione di prettier (con l'hook per il commit con ``git``), stylelint e eslint.

__ https://github.com/italia/design.plone.theme/blob/master/CHANGES.rst#200-2018-03-15
__ https://github.com/prettier/prettier


Cambiamenti radicali
--------------------

- Spostate le risorse JavaScript nella directory ``theme/``, con annesso cambiamento dei path per il resource registry (aggiornato ``registry.xml`` e aggiunto il relativo upgrade step)
- Sostituite le icone di FontAwesome importate via font da CDN con l'import via JS di FontAwesome 5. Questo impatta le risorse JS, i template e chiaramente gli stili CSS.


Operazioni fatte per l'aggiornamento di sottotemi
-------------------------------------------------

Per aggiornare temi che si basano su questo, ho fatto queste operazioni:

- Ho cercato ogni occorrenza negli stili del mixin Sass usato: ``make-fa``, rimuovendolo (occhio ad eventuali stili associati: posizione, dimensione, ...)
- Se avevo accesso al template, ho aggiunto l'icona con il tag ``<i>`` e la classe di FontAwesome 5
- Se non avevo accesso al template, per non fare l'override, ho aggiunto i tag ``<i>`` via JavaScript esattamente come in ``design.plone.theme`` (vedi ``theme/js/src/index.js``). Se l'icona è presente nel set di quelle importate in questo tema, vengono comunque aggiunte (il caricamento è asincrono)
- Se invece gli oggetti del DOM in cui dovevo aggiungere icone erano caricati via JavaScript in maniera asincrona (come le tiles), ho aggiunto le icone come nel caso precedente, e poi ho importato ``fontawesome`` come in ``theme/js/src/fa.js`` per chiamare quindi le API::

    fontawesome.dom.i2svg()

