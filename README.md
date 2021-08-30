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

### `yarn install`

Installs dependencies with [yarn](https://yarnpkg.com/).
If you aren't installing new dependencies (after updating the package.json file), you may want to use `yarn install --frozen-lockfile` instead to be sure the versions are the correct ones.

Otherwise, you can use `yarn install-full` to have a fresh istallation.

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

### mrs_developer

[mrs_developer](https://github.com/collective/mrs-developer) is a great tool
for developing multiple packages at the same time.

```bash
yarn develop
```

or

```bash
yarn develop:npx
```

(if you haven't installed mrs-developer yet)

Volto's latest razzle config will pay attention to your jsconfig.json file
for any customizations.

## Release

It's all configured for [release-it](https://github.com/release-it/release-it) and uses conventional changelog (see [COMMITLINT.md](./COMMITLINT.md)).
To run a release, just run:

```bash
yarn release-it
```

if you want to check the configuration, it's in [.release-it.json](./.release-it.json).

By default it will use the commits type and scope to determine the version following semamtic versioning rules, but if you want to set a different version, you can add to the release command the version step: major, minor or step.
For example:

```bash
yarn release-it -- major
```

## Deploy and prodution scripts

We have some scripts for that!

Our usual scripts are `yarn deploy:prod` or `yarn deploy:staging`.

These commands will build and restart a classical pm2 installation and this is an example of how they are configured:

```json
{
  "build:staging": "RAZZLE_PUBLIC_URL=https://staging.my.domain.it RAZZLE_API_PATH=https://staging.my.domain.it/api PORT=4000 razzle build",
  "build:prod": "RAZZLE_PUBLIC_URL=https://www.my.domain.it RAZZLE_API_PATH=https://www.my.domain.it/api RAZZLE_INTERNAL_API_PATH=http://127.0.0.1:8080/Plone PORT=4000 razzle build",
  "deploy:staging": "rm -rfd node_modules/ && yarn cache clean && yarn install --frozen-lockfile && yarn build:staging && pm2 restart myproject-volto",
  "deploy:prod": "rm -rfd node_modules/ && yarn cache clean && yarn install --frozen-lockfile && yarn build:prod && pm2 delete myproject-volto && pm2 start ecosystem.config.js"
}
```

If in a production environment, it may have two installations, to always have a running instance of the app while the other can be prepared for a new deployment, minimizing the downtime.
That's why we have `pm2 delete myproject-volto && pm2 start ecosystem.config.js` and not `pm2 restart myproject-volto`: the former is meant to be run in the installation that's not runnng.

## Update "child" themes

In order to update a "child" project, we have this handy script: [update-dvt](https://gist.github.com/nzambello/f5db6083635e1d641dbf863355cabff8).
