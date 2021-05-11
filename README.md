# design-volto-theme

Volto Theme for [Italia design guidelines](https://docs.italia.it/italia/designers-italia/design-linee-guida-docs/it/stabile/index.html) using [bootstrap-italia](https://italia.github.io/bootstrap-italia/).

It is built on guidelines' version 2020.1 and it's the successor on Volto of Plone's [design.plone.theme](https://github.com/italia/design.plone.theme/).


## Examples

- [Comune di Modena](https://www.comune.modena.it/)
- [CCIAA Umbria](https://www.umbria.camcom.it/)
- [Comune di Medolla](https://www.comune.medolla.mo.it/)
- [Comune di Mirandola](https://www.comune.mirandola.mo.it/)
- [Comune di San Possidonio](https://www.comune.sanpossidonio.mo.it/)
- [ASP Comuni Modenesi Area Nord](https://www.aspareanord.it/)


## Documentation

A training on how to create your own website using Volto is available as part of the Plone training at [https://training.plone.org/5/volto/index.html](https://training.plone.org/5/volto/index.html).

## Quick Start

Below is a list of commands you will probably find useful.

### `yarn start`

Runs the project in development mode.  
You can view your application at `http://localhost:3000`

The page will reload if you make edits.

### `yarn build`

Builds the app for production to the build folder.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

### `yarn start:prod`

Runs the compiled app in production.

You can again view your application at `http://localhost:3000`

### `yarn test`

Runs the test watcher (Jest) in an interactive mode.
By default, runs tests related to files changed since the last commit.

### `yarn i18n`

Runs the test i18n runner which extracts all the translation strings and
generates the needed files.


### mr_developer

[mr_developer](https://www.npmjs.com/package/mr-developer) is a great tool
for developing multiple packages at the same time.

mr_developer should work with this project by using the `--config` config option:

```bash
mrdeveloper --config=jsconfig.json
```

Volto's latest razzle config will pay attention to your jsconfig.json file
for any customizations.
