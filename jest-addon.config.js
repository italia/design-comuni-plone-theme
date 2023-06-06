module.exports = {
  verbose: true,
  transform: {
    '.+\\.[jt]sx?$': 'babel-jest',
    '^.+\\.png$': 'jest-file',
    '^.+\\.jpg$': 'jest-file',
    // '^.+\\.svg$':
    //   '<rootDir>/node_modules/@plone/volto/jest-svgsystem-transform.js',
  },
  testMatch: ['**/src/addons/**/?(*.)+(spec|test).[jt]s?(x)'],
  modulePathIgnorePatterns: [
    '<rootDir>/src/addons/design-comuni-plone-theme/addon-testing-project',
    '<rootDir>/src/addons/design-comuni-plone-theme/project',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(volto-slate|@plone/volto|design-react-kit|volto-))',
  ],
  moduleNameMapper: {
    '\\.(css|less|scss|sass|svg)$': 'identity-obj-proxy',
    '@plone/volto/components/theme/Image/Image':
      '<rootDir>/src/addons/design-comuni-plone-theme/src/components/Image/Image.jsx',
    '@plone/volto/helpers/Image/Image':
      '<rootDir>/src/addons/design-comuni-plone-theme/src/components/Image/helpers.js',
    '@plone/volto/cypress': '<rootDir>/node_modules/@plone/volto/cypress',
    '@plone/volto/babel': '<rootDir>/node_modules/@plone/volto/babel',
    '@plone/volto/(.*)$': '<rootDir>/node_modules/@plone/volto/src/$1',
    '@plone/volto-slate/(.*)$':
      '<rootDir>/node_modules/@plone/volto/packages/volto-slate/src/$1',
    '@package/(.*)$': '<rootDir>/src/$1',
    '@root/(.*)$': '<rootDir>/src/$1',
    '~/(.*)$': '<rootDir>/src/$1',
    'load-volto-addons':
      '<rootDir>/node_modules/@plone/volto/jest-addons-loader.js',
    '^design-comuni-plone-theme/icons/fontawesome-free-6.4.0-web/svgs/\\${prefixFolder}/\\${iconName}\\.svg':
      '<rootDir>/src/addons/design-comuni-plone-theme/src/icons/fontawesome-free-6.4.0-web/svgs/regular/moon.svg',
    '^design-comuni-plone-theme/(.*)$':
      '<rootDir>/src/addons/design-comuni-plone-theme/src/$1',
    '^volto-gdpr-privacy/(.*)$':
      '<rootDir>/node_modules/volto-gdpr-privacy/src/$1',
    '^volto-venue/(.*)$': '<rootDir>/node_modules/volto-venue/src/$1',
    '^volto-data-grid-widget/(.*)$':
      '<rootDir>/node_modules/volto-data-grid-widget/src/$1',
    '^volto-dropdownmenu/(.*)$':
      '<rootDir>/node_modules/volto-dropdownmenu/src/$1',
    '^volto-feedback/(.*)$': '<rootDir>/node_modules/volto-feedback/src/$1',
  },
  collectCoverage: false,
  collectCoverageFrom: [
    'src/addons/**/src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 5,
      functions: 5,
      lines: 5,
      statements: 5,
    },
  },
  setupFiles: [
    '@plone/volto/test-setup-globals.js',
    '@plone/volto/test-setup-config.js',
    './src/addons/design-comuni-plone-theme/test-setup-config.js',
  ],
  globalSetup: '@plone/volto/global-test-setup.js',
  globals: {
    __DEV__: true,
  },
};
