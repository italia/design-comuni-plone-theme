const fs = require('fs');
const path = require('path');

const projectRootPath = fs.realpathSync('.'); // __dirname

let voltoPath = path.join(projectRootPath, 'node_modules/@plone/volto');

let configFile;
if (fs.existsSync(`${this.projectRootPath}/tsconfig.json`))
  configFile = `${this.projectRootPath}/tsconfig.json`;
else if (fs.existsSync(`${this.projectRootPath}/jsconfig.json`))
  configFile = `${this.projectRootPath}/jsconfig.json`;

if (configFile) {
  const jsConfig = require(configFile).compilerOptions;
  const pathsConfig = jsConfig.paths;
  if (pathsConfig['@plone/volto'])
    voltoPath = `./${jsConfig.baseUrl}/${pathsConfig['@plone/volto'][0]}`;
}

const AddonConfigurationRegistry = require(`${voltoPath}/addon-registry.js`);
const reg = new AddonConfigurationRegistry(projectRootPath);

// Extends ESlint configuration for adding the aliases to `src` directories in Volto addons
const addonAliases = Object.keys(reg.packages).map((o) => [
  o,
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
          ...addonAliases,
          ['@package', `${__dirname}/src`],
          ['@root', `${__dirname}/src`],
          ['~', `${__dirname}/src`],
        ],
        extensions: ['.js', '.jsx', '.json'],
      },
      'babel-plugin-root-import': {
        rootPathSuffix: 'src',
      },
    },
  },
};
