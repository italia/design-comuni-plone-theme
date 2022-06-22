import config from '@plone/volto/registry';

config.set('settings', {
  ...config.settings,
  publicURL: 'http://localhost:3000',
  italiaThemeViewsConfig: {
    imagePosition: 'afterHeader', // possible values: afterHeader, documentBody
  },
  imageScales: {
    listing: 16,
    icon: 32,
    tile: 64,
    thumb: 128,
    mini: 200,
    midi: 300,
    preview: 400,
    teaser: 600,
    large: 800,
    larger: 1000,
    great: 1200,
    huge: 1600,
  },
});
