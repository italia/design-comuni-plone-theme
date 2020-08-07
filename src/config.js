import React from 'react';

import * as config from '@plone/volto/config';

import ToHTMLRenderers from '@plone/volto/config/RichTextEditor/ToHTML';

import createInlineStyleButton from 'draft-js-buttons/lib/utils/createInlineStyleButton';
import createBlockStyleButton from 'draft-js-buttons/lib/utils/createBlockStyleButton';
import { Separator } from 'draft-js-inline-toolbar-plugin';

import Icon from '@plone/volto/components/theme/Icon/Icon';
import underlineSVG from '@plone/volto/icons/underline.svg';
import alignCenterSVG from '@plone/volto/icons/align-center.svg';

import newsSVG from '@plone/volto/icons/news.svg';
import searchIcon from 'bootstrap-italia/src/svg/it-search.svg';
import NewsHomeView from '@italia/components/ItaliaTheme/Blocks/NewsHome/View';
import NewsHomeEdit from '@italia/components/ItaliaTheme/Blocks/NewsHome/Edit';
import noteSvg from 'bootstrap-italia/src/svg/it-note.svg';

import alertSVG from '@plone/volto/icons/alert.svg';
import AlertView from '@italia/components/ItaliaTheme/Blocks/Alert/View';
import AlertEdit from '@italia/components/ItaliaTheme/Blocks/Alert/Edit';

import SearchSectionsView from '@italia/components/ItaliaTheme/Blocks/SearchSections/View';
import SearchSectionsEdit from '@italia/components/ItaliaTheme/Blocks/SearchSections/Edit';
import ArgumentsInEvidenceEdit from '@italia/components/ItaliaTheme/Blocks/ArgumentsInEvidence/Edit';
import ArgumentsInEvidenceView from '@italia/components/ItaliaTheme/Blocks/ArgumentsInEvidence/View';

import titleSVG from '@plone/volto/icons/text.svg';
import ArgomentoTitleView from '@italia/components/ItaliaTheme/Blocks/ArgomentoTitle/View';
import ArgomentoTitleEdit from '@italia/components/ItaliaTheme/Blocks/ArgomentoTitle/Edit';

import { CharCounterDescriptionWidget } from '@italia/components/ItaliaTheme';
import { NewsItemView } from '@italia/components/ItaliaTheme';
import { UOView } from '@italia/components/ItaliaTheme';
import { PersonaView } from '@italia/components/ItaliaTheme';
import { ServizioView } from '@italia/components/ItaliaTheme';
import { PaginaArgomentoView } from '@italia/components/ItaliaTheme';
import NewsTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/NewsTemplate';
import SmallBlockLinksTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/SmallBlockLinksTemplate';
import CompleteBlockLinksTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/CompleteBlockLinksTemplate';
import PhotogalleryTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/PhotogalleryTemplate';
import InEvidenceTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/InEvidenceTemplate';
import ArgumentListingTemplate from  '@italia/components/ItaliaTheme/Blocks/Listing/ArgumentListingTemplate';

import { rssBlock as customRssBlock } from '@italia/addons/volto-rss-block';
import CardWithImageRssTemplate from '@italia/components/ItaliaTheme/Blocks/RssBlock/CardWithImageRssTemplate';
import CardWithoutImageRssTemplate from '@italia/components/ItaliaTheme/Blocks/RssBlock/CardWithoutImageRssTemplate';
import { DatetimeWidget } from '@plone/volto/config/Widgets';
import { MultilingualWidget } from '@italia/addons/volto-multilingual-widget';

const rssBlock = {
  ...customRssBlock,
  templates: {
    ...customRssBlock.templates,
    default: {
      label: 'Card senza immagine',
      template: CardWithoutImageRssTemplate,
    },
    card_without_image: {
      label: 'Card con immagine',
      template: CardWithImageRssTemplate,
    },
  },
};

const extendedBlockRenderMap = config.settings.extendedBlockRenderMap.update(
  'align-center',
  (element = 'p') => element,
);

const blockStyleFn = contentBlock => {
  let r = config.settings.blockStyleFn(contentBlock);

  if (!r) {
    const type = contentBlock.getType();
    if (type === 'align-center') {
      r += 'align-center';
    }
  }

  return r;
};
const listBlockTypes = config.settings.listBlockTypes.concat(['align-center']);

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
    sidebarTab: 1,
  },
  searchSections: {
    id: 'searchSections',
    title: 'Ricerca nelle sezioni',
    icon: searchIcon,
    group: 'homePage',
    view: SearchSectionsView,
    edit: SearchSectionsEdit,
    restricted: false,
    mostUsed: false,
    blockHasOwnFocusManagement: true,
    security: {
      addPermission: [],
      view: [],
    },
    sidebarTab: 1,
  },
  argumentsInEvidence: {
    id: 'argumentsInEvidence',
    title: 'Argomenti in evidenza',
    icon: noteSvg,
    group: 'homePage',
    view: ArgumentsInEvidenceView,
    edit: ArgumentsInEvidenceEdit,
    restricted: false,
    mostUsed: false,
    blockHasOwnFocusManagement: true,
    security: {
      addPermission: [],
      view: [],
    },
    sidebarTab: 1,
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
    sidebarTab: 1,
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
    sidebarTab: 1,
  },
  listing: {
    ...config.blocks.blocksConfig.listing,
    templates: {
      ...config.blocks.blocksConfig.listing.templates,
      newsTemplate: {
        label: 'Notizie',
        template: NewsTemplate,
      },
      smallBlockLinksTemplate: {
        label: 'Blocco link solo immagini',
        template: SmallBlockLinksTemplate,
      },
      completeBlockLinksTemplate: {
        label: 'Blocco link completo',
        template: CompleteBlockLinksTemplate,
      },
      photogallery: {
        label: 'Photogallery',
        template: PhotogalleryTemplate,
      },
      inEvidenceTemplate: {
        label: 'In evidenza',
        template: InEvidenceTemplate,
      },
      argumentListingTemplate: {
        label: 'Lista argomenti',
        template: ArgumentListingTemplate,
      }
    },
  },
  rssBlock,
};

export const settings = {
  ...config.settings,
  richTextEditorInlineToolbarButtons: [
    AlignCenterButton,
    Separator,
    UnderlineButton,
    ...config.settings.richTextEditorInlineToolbarButtons,
  ],
  extendedBlockRenderMap: extendedBlockRenderMap,
  blockStyleFn: blockStyleFn,
  listBlockTypes: listBlockTypes,
  isMultilingual: false,
  supportedLanguages: ['it'],
  defaultLanguage: 'it',
  //TODO: rimuovere questa customizzazione quando sistemano https://github.com/plone/volto/issues/1601
  ToHTMLRenderers: {
    ...ToHTMLRenderers,
    blocks: {
      ...ToHTMLRenderers.blocks,
      blockquote: (children, { keys }) =>
        children.map((child, i) => (
          <blockquote key={keys[i]}>{child}</blockquote>
        )),
    },
  },
};

export const views = {
  ...config.views,
  contentTypesViews: {
    ...config.views.contentTypesViews,
    'News Item': NewsItemView,
    UnitaOrganizzativa: UOView,
    Persona: PersonaView,
    Servizio: ServizioView,
    'Pagina Argomento': PaginaArgomentoView,
  },
};

export const widgets = {
  ...config.widgets,
  id: {
    ...config.widgets.id,
    description: CharCounterDescriptionWidget,
    cookie_consent_configuration: MultilingualWidget(),
    data_conclusione_incarico: props => (
      <DatetimeWidget {...props} dateOnly={true} />
    ),
    data_insediamento: props => <DatetimeWidget {...props} dateOnly={true} />,
  },
};

const customBlocksOrder = [{ id: 'news', title: 'News' }, {id: 'homePage', title: 'Home Page'}];
const customInitialBlocks = {
  'Pagina Argomento': ['title', 'description', 'text'],
};
const customRequiredBlocks = ['description']

// BUG#10398
// We chose to disallow leadimage block usage in editor. If you want it back someday,
// comment out the following line and add the leadimage behavior in Document.xml file
delete config.blocks.blocksConfig['leadimage'];

export const blocks = {
  ...config.blocks,
  blocksConfig: { ...config.blocks.blocksConfig, ...customBlocks },
  groupBlocksOrder: config.blocks.groupBlocksOrder.concat(customBlocksOrder),
  initialBlocks: { ...config.blocks.initialBlocks, ...customInitialBlocks },
  requiredBlocks: { ...config.blocks.requiredBlocks.concat(...customRequiredBlocks) },
};

export const addonReducers = { ...config.addonReducers };
export const addonRoutes = [...(config.addonRoutes || [])];
