import React from 'react';

import {
  settings as defaultSettings,
  views as defaultViews,
  widgets as defaultWidgets,
  blocks as defaultBlocks,
  addonReducers as defaultAddonReducers,
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

import titleSVG from '@plone/volto/icons/text.svg';
import ArgomentoTitleView from '@design/components/DesignTheme/Blocks/ArgomentoTitle/View';
import ArgomentoTitleEdit from '@design/components/DesignTheme/Blocks/ArgomentoTitle/Edit';

import { CharCounterDescriptionWidget } from '@design/components/DesignTheme';
import { NewsItemView } from '@design/components/DesignTheme';
import { UOView } from '@design/components/DesignTheme';
import { PersonaView } from '@design/components/DesignTheme';
import { ServizioView } from '@design/components/DesignTheme';
import { PaginaArgomentoView } from '@design/components/DesignTheme';
import NewsTemplate from '@design/components/DesignTheme/Blocks/Listing/NewsTemplate';
import SmallBlockLinksTemplate from '@design/components/DesignTheme/Blocks/Listing/SmallBlockLinksTemplate';
import PhotogalleryTemplate from '@design/components/DesignTheme/Blocks/Listing/PhotogalleryTemplate';
import InEvidenceTemplate from '@design/components/DesignTheme/Blocks/Listing/InEvidenceTemplate';

import { rssBlock as customRssBlock } from 'volto-rss-block';
import CardWithImageRssTemplate from '@design/components/DesignTheme/Blocks/RssBlock/CardWithImageRssTemplate';
import CardWithoutImageRssTemplate from '@design/components/DesignTheme/Blocks/RssBlock/CardWithoutImageRssTemplate';

import MultilingualWidget from 'volto-multilingual-widget';

const rssBlock = {
  ...customRssBlock,
  templates: {
    ...customRssBlock.templates,
    default: {
      label: 'Card template without image',
      template: CardWithoutImageRssTemplate,
    },
    card_without_image: {
      label: 'Card template with image ',
      template: CardWithImageRssTemplate,
    },
  },
};

const extendedBlockRenderMap = defaultSettings.extendedBlockRenderMap.update(
  'align-center',
  (element = 'p') => element,
);

const blockStyleFn = (contentBlock) => {
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
    title: 'News con immagine in primo piano',
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
  pagina_argomento_title: {
    id: 'pagina_argomento_title',
    title: 'Titolo Pagina Argomento',
    icon: titleSVG,
    group: 'argomento',
    view: ArgomentoTitleView,
    edit: ArgomentoTitleEdit,
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
      smallBlockLinksTemplate: {
        label: 'Blocco di link con immagine',
        template: SmallBlockLinksTemplate,
      },
      photogallery: {
        label: 'Photogallery',
        template: PhotogalleryTemplate,
      },
      inEvidenceTemplate: {
        label: 'In evidenza',
        template: InEvidenceTemplate,
      },
    },
  },
  rssBlock,
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
  isMultilingual: false,
  supportedLanguages: ['it'],
  defaultLanguage: 'it',
};

export const views = {
  ...defaultViews,
  contentTypesViews: {
    ...defaultViews.contentTypesViews,
    'News Item': NewsItemView,
    'Unita organizzativa': UOView,
    Persona: PersonaView,
    Servizio: ServizioView,
    'Pagina Argomento': PaginaArgomentoView,
  },
};

export const widgets = {
  ...defaultWidgets,
  id: {
    ...defaultWidgets.id,
    description: CharCounterDescriptionWidget,
    cookie_consent_configuration: MultilingualWidget(),
  },
};

const customBlocksOrder = [{ id: 'news', title: 'News' }];
const customInitialBlocks = {
  'Pagina Argomento': ['pagina_argomento_title'],
};

export const blocks = {
  ...defaultBlocks,
  blocksConfig: { ...defaultBlocks.blocksConfig, ...customBlocks },
  groupBlocksOrder: defaultBlocks.groupBlocksOrder.concat(customBlocksOrder),
  initialBlocks: { ...defaultBlocks.initialBlocks, ...customInitialBlocks },
};

export const addonRoutes = [];

export const addonReducers = {
  ...defaultAddonReducers,
};
