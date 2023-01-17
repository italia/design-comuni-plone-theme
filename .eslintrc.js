const fs = require('fs');
const path = require('path');
const projectRootPath = __dirname;
const packageJson = require(path.join(projectRootPath, 'package.json'));

let voltoPath = './node_modules/@plone/volto';

let configFile;
if (fs.existsSync(`${projectRootPath}/tsconfig.json`))
  configFile = `${projectRootPath}/tsconfig.json`;
else if (fs.existsSync(`${projectRootPath}/jsconfig.json`))
  configFile = `${projectRootPath}/jsconfig.json`;

if (configFile) {
  const jsConfig = require(configFile).compilerOptions;
  const pathsConfig = jsConfig.paths;
  if (pathsConfig['@plone/volto'])
    voltoPath = `./${jsConfig.baseUrl}/${pathsConfig['@plone/volto'][0]}`;
}

const AddonConfigurationRegistry = require(`${voltoPath}/addon-registry.js`);
const reg = new AddonConfigurationRegistry(__dirname);

// Extends ESlint configuration for adding the aliases to `src` directories in Volto addons
const addonAliases = Object.keys(reg.packages).map((o) => [
  o,
  reg.packages[o].modulePath,
]);

// TODO deprecated: remove in version 8
const italiaAddonAliases = Object.keys(reg.packages).map((o) => [
  `@italia/addons/${o}`,
  reg.packages[o].modulePath,
]);

module.exports = {
  extends: `${voltoPath}/.eslintrc`,
  settings: {
    'import/resolver': {
      alias: {
        map: [
          // TODO remove the next two when implemented in core
          [
            '@plone/volto/components/theme/Image/Image',
            path.resolve(`${projectRootPath}/src/components/Image/Image.jsx`),
          ],
          [
            '@plone/volto/helpers/Image/Image',
            path.resolve(`${projectRootPath}/src/components/Image/helpers.js`),
          ],

          ['@plone/volto', '@plone/volto/src'],
          ['@plone/volto-slate', '@plone/volto/packages/volto-slate/src'],
          ['design-comuni-plone-theme', `${__dirname}/src`],
          ...addonAliases,
          ...italiaAddonAliases,
          ['@package', `${__dirname}/src`],
          ['@italia', `${__dirname}/src`], // TODO deprecated: remove in version 8
        ],
        extensions: ['.js', '.jsx', '.json'],
      },
      'babel-plugin-root-import': {
        rootPathSuffix: 'src',
      },
    },
  },
};
