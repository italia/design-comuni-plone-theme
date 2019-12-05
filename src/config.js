/**
 * Add your config changes here.
 * @module config
 * @example
 * export const settings = {
 *   ...defaultSettings,
 *   port: 4300,
 *   listBlockTypes: {
 *     ...defaultSettings.listBlockTypes,
 *     'my-list-item',
 *   }
 * }
 */

import {
  settings as defaultSettings,
  views as defaultViews,
  widgets as defaultWidgets,
  blocks as defaultBlocks,
} from '@plone/volto/config';

import newsSVG from '@plone/volto/icons/news.svg';
import NewsHomeView from '@package/components/DesignTheme/Blocks/NewsHome/View';
import NewsHomeEdit from '@package/components/DesignTheme/Blocks/NewsHome/Edit';

export const settings = {
  ...defaultSettings,
};

export const views = {
  ...defaultViews,
};

export const widgets = {
  ...defaultWidgets,
};

const customBlocks = {
  newsHome: {
    id: 'newsHome',
    title: 'News Home',
    icon: newsSVG,
    group: 'news',
    view: NewsHomeView,
    edit: NewsHomeEdit,
    restricted: false,
    mostUsed: true,
    security: {
      addPermission: [],
      view: [],
    },
  },
};

const customBlocksOrder = [{ id: 'news', title: 'News' }];

export const blocks = {
  ...defaultBlocks,
  blocksConfig: { ...defaultBlocks.blocksConfig, ...customBlocks },
  groupBlocksOrder: defaultBlocks.groupBlocksOrder.concat(customBlocksOrder),
};
