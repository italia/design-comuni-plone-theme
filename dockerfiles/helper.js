const fs = require('fs');
const path = require('path');

const ADDON_NAME = process.env.ADDON_NAME || '';
const ADDON_PATH = process.env.ADDON_PATH || '';

const appFolder = path.resolve('/app');
const packageJsonPath = path.resolve(appFolder, 'package.json');

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath));

packageJson.scripts = {
  ...packageJson.scripts,
  test: `RAZZLE_JEST_CONFIG=src/addons/${ADDON_PATH}/jest-addon.config.js razzle test --passWithNoTests`,
  'cypress:open': `make test-acceptance-addon ADDONPATH=src/addons/${ADDON_PATH}`,
  'cypress:run': `make test-acceptance-addon-headless ADDONPATH=src/addons/${ADDON_PATH}`,
  'cypress:ci:full': `make full-test-acceptance-addon ADDONPATH=src/addons/${ADDON_PATH}`,
};

packageJson.theme = ADDON_NAME;

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
