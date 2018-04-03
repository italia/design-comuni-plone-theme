Changelog
=========


2.0.1 (unreleased)
------------------

- Don't show header viewlet if settings aren't set. Now default settings are set
  at install-time.
  [cekk]


2.0.0 (2018-03-15)
------------------

Docs on this release: `docs`__.

BREAKING CHANGES:

- Moved JS resources to theme/ folder [nzambello]
- Migrated icons and styles to FontAwesome 5 (import via JS, added its classes to templates) [nzambello]
- Added prettier and made it run on the code [nzambello]

Minor changes:

- Updated package.json to reflect current addon version [pnicolli]
- Fixed collection tile renderers layers, they won't show up when this theme is not installed anymore [pnicolli]
- Evitato lo scroll della pagina quando il menu o la ricerca sono aperti [nzambello]
- Cambiato selettore per il tile manager per l'uso senza pattern [nzambello]
- Fix nell'ordine degli elementi nel controlpanel [nzambello]
- Documentate meglio alcune viste per le tile collections [nzambello]
- Cambiato metodo di scaling di plone.app.imaging da scale() a tag() [nzambello]
- Cambiate le occorrenze del font-weight 700 a 600 (è quello di cui si fa l'import nel font) [nzambello]


__ https://github.com/PloneGov-IT/redturtle.agidtheme/blob/master/docs/migrationTo2.rst

1.1.7 (2018-02-07)
------------------

- Fix list-style rules to allow an override [nzambello]


1.1.6 (2018-02-07)
------------------

- Fix list-style rules to allow an override [nzambello]
- Removed useless flex in header which had issues with Safari on iOS [nzambello]
- Fix show_more in sights-collection view [nzambello]


1.1.5 (2018-02-02)
------------------

- Fixed backend searchbox [pnicolli]
- Added clearfix for static tile bg [nzambello]
- Fix gallery collection icon [nzambello]
- 'senza-titolo' CSS class applied to any tile [nzambello]
- Changed grunt-postcss sourcemap settings [nzambello]


1.1.4 (2018-01-25)
------------------

- Added title border to navigation static tile [nzambello]
- Added icon for newsletter [nzambello]
- Removed collapse button for tiles from templates, styles and js [nzambello]
- Removed tiles_page_view for folder [fdelia]
- Changed newshome miniature [nzambello]


1.1.3 (2018-01-18)
------------------

- Fix problem with mobile menu wrongly dependent on social container
  This could fix also problem with close menu button: javascript in
  rer.agidtheme.base seems to work properly
  [lucabel]
- Aggiunti stili per tile statica "menu navigazione" [nzambello]


1.1.2 (2018-01-12)
------------------

- Fix upgrade-step
  [cekk]

1.1.1 (2018-01-12)
------------------

- Improve follow us links: now is a list field with more flexibility
  [cekk]


1.1.0 (2018-01-12)
------------------

- Fix sights_renderer template
  [cekk]
- Add customizable social links in header viewlet
  [cekk]


1.0.9 (2018-01-11)
------------------

- Minor fix for responsive styles [nzambello]
- Fix plone styles for site setup portlets list [nzambello]
- Updated ellipsed [nzambello]
- Fix list in collective.tiles.advancedstatic.css_styles [fdelia]


1.0.8 (2018-01-05)
------------------

- Divided css and js resources and bundles for themes overriding


1.0.7 (2017-12-29)
------------------

- Added skiplinks [nzambello]
- Fix big photo tile container styles [nzambello]
- Added License and references to new repo [nzambello]


1.0.6 (2017-12-21)
------------------

- Fix redturtleagidtheme_rules.xml per inserire anche i tag <style> [cekk]
- Fixed menu styles to avoid affecting possible submenus [pnicolli]
- Refactored tiles page stiles to be more flexible about the number of columns [pnicolli]
- Removed h1 from logo viewlet [pnicolli]
- Stili carousel [nzambello]
- Stili gallery [nzambello]
- Renamed aree-tematiche to aree-tematiche-collection to prevent conflicts with site contents ids [nzambello]
- Removed ellipsed from public resources [pnicolli]
- Info in README [nzambello]
- Removed unused landing-aree-tematiche view [nzambello]
- Three columns pages collection tile [nzambello]
- Fix stili tile sfondo scuro/chiaro [nzambello]
- Fix JS compile rules in registry [nzambello]
- Moved theme styles to resource registry [nzambello]


1.0.5 (2017-10-25)
------------------

- Corretti stili collezioni e tile [nzambello]
- Aggiunta icona Instagram [nzambello]
- Aggiunti alcuni fix responsive [fdelia]
- Aggiornato ellipsed [nzambello]


1.0.4 (2017-10-04)
------------------

- Corrette indicazioni accessibilita' [nzambello]


1.0.3 (2017-10-03)
------------------

- Aggiornamento ellipsed per problemi di compatibilita' [nzambello]
- Aggiunta vista per collezione video [nzambello]
- Aggiunta vista per collezione gallery (folders) [nzambello]
- Aggiunti stili responsive per header (+ ricerca e menu) [nzambello]
- Aggiunte indicazioni accessibilita [nzambello]


1.0.2 (2017-09-28)
------------------

- Aggiunte indicazioni per accessibilita' bottone chiusura menu [nzambello]
- Fix posizione date collezione news [nzambello]


1.0.1 (2017-09-18)
------------------

- Fix import di ellipsed nel bundle [nzambello]
- Aggiornamento versioni npm [nzambello]
- Stili tiles testo statico con classe CSS e non entry nel menu a tendina [nzambello]
- Icona chiusura modale plone piÃ¹ visibile [nzambello]


1.0.0 (2017-09-14)
------------------

- fix backend css url in diazo rules
  [mamico]
- Initial release.
  [RedTurtle]
