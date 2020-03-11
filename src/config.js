import React from 'react';

import {
  settings as defaultSettings,
  views as defaultViews,
  widgets as defaultWidgets,
  blocks as defaultBlocks,
} from '@plone/volto/config';

import createInlineStyleButton from 'draft-js-buttons/lib/utils/createInlineStyleButton';
import createBlockStyleButton from 'draft-js-buttons/lib/utils/createBlockStyleButton';
import { Separator } from 'draft-js-inline-toolbar-plugin';

import Icon from '@plone/volto/components/theme/Icon/Icon';
import underlineSVG from '@plone/volto/icons/underline.svg';
import alignCenterSVG from '@plone/volto/icons/align-center.svg';

import newsSVG from '@plone/volto/icons/news.svg';
import NewsHomeView from '@design/components/DesignTheme/Blocks/NewsHome/View';
import NewsHomeEdit from '@design/components/DesignTheme/Blocks/NewsHome/Edit';

import alertSVG from '@plone/volto/icons/alert.svg';
import AlertView from '@design/components/DesignTheme/Blocks/Alert/View';
import AlertEdit from '@design/components/DesignTheme/Blocks/Alert/Edit';
import { CharCounterDescriptionWidget } from '@design/components/DesignTheme';
import { NewsItemView } from '@design/components/DesignTheme';
import { UOView } from '@design/components/DesignTheme';

import NewsTemplate from '@design/components/DesignTheme/Blocks/Listing/NewsTemplate';

const extendedBlockRenderMap = defaultSettings.extendedBlockRenderMap.update(
  'align-center',
  (element = 'p') => element,
);

const blockStyleFn = contentBlock => {
  let r = defaultSettings.blockStyleFn(contentBlock);

  if (!r) {
    const type = contentBlock.getType();
    if (type === 'align-center') {
      r += 'align-center';
    }
  }

  return r;
};
const listBlockTypes = defaultSettings.listBlockTypes.concat(['align-center']);

const UnderlineButton = createInlineStyleButton({
  style: 'UNDERLINE',
  children: <Icon name={underlineSVG} size="24px" />,
});
const AlignCenterButton = createBlockStyleButton({
  blockType: 'align-center',
  children: <Icon name={alignCenterSVG} size="24px" />,
});

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
  alert: {
    id: 'alert',
    title: 'Alert',
    icon: alertSVG,
    group: 'text',
    view: AlertView,
    edit: AlertEdit,
    restricted: false,
    mostUsed: false,
    blockHasOwnFocusManagement: true,
    security: {
      addPermission: [],
      view: [],
    },
  },
  listing: {
    ...defaultBlocks.blocksConfig.listing,
    templates: {
      ...defaultBlocks.blocksConfig.listing.templates,
      newsTemplate: {
        label: 'Notizie',
        template: NewsTemplate,
      },
    },
  },
};

export const settings = {
  ...defaultSettings,
  richTextEditorInlineToolbarButtons: [
    AlignCenterButton,
    Separator,
    UnderlineButton,
    ...defaultSettings.richTextEditorInlineToolbarButtons,
  ],
  extendedBlockRenderMap: extendedBlockRenderMap,
  blockStyleFn: blockStyleFn,
  listBlockTypes: listBlockTypes,
};

export const views = {
  ...defaultViews,
  contentTypesViews: {
    ...defaultViews.contentTypesViews,
    'News Item': NewsItemView,
    'Unita organizzativa': UOView,
  },
};

export const widgets = {
  ...defaultWidgets,
  id: {
    ...defaultWidgets.id,
    description: CharCounterDescriptionWidget,
  },
};

const customBlocksOrder = [{ id: 'news', title: 'News' }];

export const blocks = {
  ...defaultBlocks,
  blocksConfig: { ...defaultBlocks.blocksConfig, ...customBlocks },
  groupBlocksOrder: defaultBlocks.groupBlocksOrder.concat(customBlocksOrder),
};
