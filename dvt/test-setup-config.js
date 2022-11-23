/*
 * This is the mocked config registry loader for tests.
 * It uses some of the default (real) configuration,
 * (mainly) DraftJS one, to not differ too much from reality
 * Ideally, we should mock this ones as well at some point.
 * Views, Widgets and Blocks are mocked already, to keep
 * snapshot consistency and readability.
 */

import config from '@plone/volto/registry';
import { loadables } from 'design-volto-theme/config/loadables';

config.set('settings', {
  ...config.settings,
  publicURL: 'http://localhost:3000',
  italiaThemeViewsConfig: {
    imagePosition: 'afterHeader', // possible values: afterHeader, documentBody
  },
  loadables: { ...config.settings.loadables, ...loadables },
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
