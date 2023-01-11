## Documentazione tecnica (in inglese)

A training on how to create your own website using Volto is available as part of the Plone training at [https://training.plone.org/volto/index.html](https://training.plone.org/volto/index.html).

## Quick Start

Below is a list of commands you will probably find useful.

### `yarn install`

Installs dependencies with [yarn](https://yarnpkg.com/).
If you are not installing new dependencies (after updating the package.json file), you may want to use `yarn install --immutable` instead to be sure the versions are the correct ones.

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

## Release

It is all configured for [release-it](https://github.com/release-it/release-it) and uses conventional changelog (see [COMMITLINT.md](./COMMITLINT.md)).
To run a release, just run:

```bash
yarn release-it
```

if you want to check the configuration, it is in [.release-it.json](./.release-it.json).

By default it will use the commits type and scope to determine the version following semantic versioning rules, but if you want to set a different version, you can add to the release command the version step: major, minor or step.
For example:

```bash
yarn release-it -- major
```

