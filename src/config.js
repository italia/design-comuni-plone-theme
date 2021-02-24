import React from 'react';

import * as config from '@plone/volto/config';

import ToHTMLRenderers from '@plone/volto/config/RichTextEditor/ToHTML';

import newsSVG from '@plone/volto/icons/news.svg';
import searchIcon from 'bootstrap-italia/src/svg/it-search.svg';
import NewsHomeView from '@italia/components/ItaliaTheme/Blocks/NewsHome/View';
import NewsHomeEdit from '@italia/components/ItaliaTheme/Blocks/NewsHome/Edit';
import noteSvg from 'bootstrap-italia/src/svg/it-note.svg';
import calendarSvg from 'bootstrap-italia/src/svg/it-calendar.svg';

import alertSVG from '@plone/volto/icons/alert.svg';
import AlertView from '@italia/components/ItaliaTheme/Blocks/Alert/View';
import AlertEdit from '@italia/components/ItaliaTheme/Blocks/Alert/Edit';

import divideHorizontalSVG from '@plone/volto/icons/divide-horizontal.svg';
import ViewBreak from '@italia/components/ItaliaTheme/Blocks/Break/View';
import EditBreak from '@italia/components/ItaliaTheme/Blocks/Break/Edit';

import SearchSectionsView from '@italia/components/ItaliaTheme/Blocks/SearchSections/View';
import SearchSectionsEdit from '@italia/components/ItaliaTheme/Blocks/SearchSections/Edit';
import ArgumentsInEvidenceEdit from '@italia/components/ItaliaTheme/Blocks/ArgumentsInEvidence/Edit';
import ArgumentsInEvidenceView from '@italia/components/ItaliaTheme/Blocks/ArgumentsInEvidence/View';

import CalendarView from '@italia/components/ItaliaTheme/Blocks/Calendar/View';
import CalendarEdit from '@italia/components/ItaliaTheme/Blocks/Calendar/Edit';

import EventSearchView from '@italia/components/ItaliaTheme/Blocks/EventSearch/View';
import EventSearchEdit from '@italia/components/ItaliaTheme/Blocks/EventSearch/Edit';

import titleSVG from '@plone/volto/icons/text.svg';
import ArgomentoTitleView from '@italia/components/ItaliaTheme/Blocks/ArgomentoTitle/View';
import ArgomentoTitleEdit from '@italia/components/ItaliaTheme/Blocks/ArgomentoTitle/Edit';

import TextCardView from '@italia/components/ItaliaTheme/Blocks/TextCard/SimpleCard/View';
import TextCardEdit from '@italia/components/ItaliaTheme/Blocks/TextCard/SimpleCard/Edit';
import TextCardWithImageView from '@italia/components/ItaliaTheme/Blocks/TextCard/CardWithImage/View';
import TextCardWithImageEdit from '@italia/components/ItaliaTheme/Blocks/TextCard/CardWithImage/Edit';

import listArrowsSVG from '@plone/volto/icons/list-arrows.svg';
import AccordionView from '@italia/components/ItaliaTheme/Blocks/Accordion/View';
import AccordionEdit from '@italia/components/ItaliaTheme/Blocks/Accordion/Edit';

import videoSVG from '@plone/volto/icons/video.svg';
import VideoGalleryView from '@italia/components/ItaliaTheme/Blocks/VideoGallery/View';
import VideoGalleryEdit from '@italia/components/ItaliaTheme/Blocks/VideoGallery/Edit';

import faTwitter from './icons/twitter-brands.svg';
import TwitterPostsView from '@italia/components/ItaliaTheme/Blocks/TwitterPosts/View';
import TwitterPostsEdit from '@italia/components/ItaliaTheme/Blocks/TwitterPosts/Edit';

import formSVG from '@plone/volto/icons/form.svg';
import FormView from '@italia/components/ItaliaTheme/Blocks/Form/View';
import FormEdit from '@italia/components/ItaliaTheme/Blocks/Form/Edit';

import CharCounterDescriptionWidget from '@italia/components/ItaliaTheme/manage/Widgets/CharCounterDescriptionWidget';
import PageView from '@italia/components/ItaliaTheme/View/PageView/PageView';
import NewsItemView from '@italia/components/ItaliaTheme/View/NewsItemView/NewsItemView';
import UOView from '@italia/components/ItaliaTheme/View/UOView/UOView';
import PersonaView from '@italia/components/ItaliaTheme/View/PersonaView/PersonaView';
import VenueView from '@italia/components/ItaliaTheme/View/VenueView/VenueView';
import ServizioView from '@italia/components/ItaliaTheme/View/ServizioView/ServizioView';
import EventoView from '@italia/components/ItaliaTheme/View/EventoView/EventoView';
import PaginaArgomentoView from '@italia/components/ItaliaTheme/View/PaginaArgomentoView/PaginaArgomentoView';
import CartellaModulisticaView from '@italia/components/ItaliaTheme/View/CartellaModulisticaView/CartellaModulisticaView';
import DocumentoView from '@italia/components/ItaliaTheme/View/DocumentoView/DocumentoView';
import ModuloView from '@italia/components/ItaliaTheme/View/ModuloView/ModuloView';
import BandoView from '@italia/components/ItaliaTheme/View/BandoView/BandoView';
import TrasparenzaView from '@italia/components/ItaliaTheme/View/TrasparenzaView/TrasparenzaView';
import DettagliProcedimentiView from '@italia/components/ItaliaTheme/View/TrasparenzaView/DettagliProcedimentiView';

import CardWithImageTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/CardWithImageTemplate';
import CardWithImageTemplateSkeleton from '@italia/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/CardWithImageTemplateSkeleton';
import SmallBlockLinksTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/SmallBlockLinksTemplate';
import SmallBlockLinksTemplateSkeleton from '@italia/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/SmallBlockLinksTemplateSkeleton';

import CompleteBlockLinksTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/CompleteBlockLinksTemplate';
import CompleteBlockLinksTemplateSkeleton from '@italia/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/CompleteBlockLinksTemplateSkeleton';
import PhotogalleryTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/PhotogalleryTemplate';
import PhotogalleryTemplateSkeleton from '@italia/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/PhotogalleryTemplateSkeleton';
import InEvidenceTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/InEvidenceTemplate';
import InEvidenceTemplateSkeleton from '@italia/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/InEvidenceTemplateSkeleton';
import SimpleCardTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/SimpleCard/SimpleCardTemplate';
import GridGalleryTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/GridGalleryTemplate';
import GridGalleryTemplateSkeleton from '@italia/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/GridGalleryTemplateSkeleton';
import RibbonCardTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/RibbonCardTemplate';
import RibbonCardTemplateSkeleton from '@italia/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/RibbonCardTemplateSkeleton';
import MapTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/MapTemplate';
import MapTemplateSkeleton from '@italia/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/MapTemplateSkeleton';

import BandiInEvidenceTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/BandiInEvidenceTemplate';
import BandiInEvidenceTemplateSkeleton from '@italia/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/BandiInEvidenceTemplateSkeleton';
import AmministrazioneTrasparenteTablesTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/AmministrazioneTrasparenteTablesTemplate';
import AmministrazioneTrasparenteTablesTemplateSkeleton from '@italia/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/AmministrazioneTrasparenteTablesTemplateSkeleton';

import { rssBlock as customRssBlock } from '@italia/addons/volto-rss-block';
import CardWithImageRssTemplate from '@italia/components/ItaliaTheme/Blocks/RssBlock/CardWithImageRssTemplate';
import CardWithImageRssTemplateSkeleton from '@italia/components/ItaliaTheme/Blocks/RssBlock/TemplatesSkeleton/CardWithImageRssTemplateSkeleton';
import CardWithoutImageRssTemplate from '@italia/components/ItaliaTheme/Blocks/RssBlock/CardWithoutImageRssTemplate';
import CardWithoutImageRssTemplateSkeleton from '@italia/components/ItaliaTheme/Blocks/RssBlock/TemplatesSkeleton/CardWithoutImageRssTemplateSkeleton';
import { DatetimeWidget } from '@plone/volto/config/Widgets';

import { MultilingualWidget } from '@italia/addons/volto-multilingual-widget';
import IconWidget from '@italia/components/ItaliaTheme/manage/Widgets/IconWidget';
import SearchSectionsConfigurationWidget from '@italia/components/ItaliaTheme/manage/Widgets/SearchSectionsConfigurationWidget/SearchSectionsConfigurationWidget';
import { defaultIconWidgetOptions } from '@italia/helpers/index';
//import TinymceWidget from '@italia/components/ItaliaTheme/manage/Widgets/TinymceWidget';

import { library } from '@fortawesome/fontawesome-svg-core';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import * as IconsRegular from '@fortawesome/free-regular-svg-icons';

// CTs icons
import faFileInvoiceSVG from './icons/file-invoice.svg';
import faFolderOpenSVG from './icons/folder-open.svg';
import faImageSVG from './icons/image.svg';
import faFileSVG from './icons/file.svg';
import faLinkSVG from './icons/link.svg';
import faBoxOpenSVG from './icons/box-open.svg';
import faArchiveSVG from './icons/archive.svg';
import faFileAltSVG from './icons/file-alt.svg';
import faCalendarAltSVG from './icons/calendar-alt.svg';
import faMapMarkedAltSVG from './icons/map-marked-alt.svg';
import faNewspaperSVG from './icons/newspaper.svg';
import faUserSVG from './icons/user.svg';
import faCogSVG from './icons/cog.svg';
import faSitemapSVG from './icons/sitemap.svg';
import faBuildingSVG from './icons/building.svg';
import faFileDownloadSVG from './icons/file-download.svg';

import {
  ItaliaRichTextEditorInlineToolbarButtons,
  ItaliaRichTextEditorPlugins,
  extendedBlockRenderMap,
  blockStyleFn,
  ItaliaBlocksHtmlRenderers,
  ItaliaFromHTMLCustomBlockFn,
} from '@italia/config/RichTextEditor/config';

const iconList = Object.keys(Icons.fas).map((icon) => Icons[icon]);
const iconListRegular = Object.keys(IconsRegular.far).map(
  (icon) => IconsRegular[icon],
);

library.add(...iconList, ...iconListRegular);

const rssBlock = {
  ...customRssBlock,
  templates: {
    ...customRssBlock.templates,
    default: {
      label: 'Card senza immagine',
      template: CardWithoutImageRssTemplate,
      skeleton: CardWithoutImageRssTemplateSkeleton,
    },
    card_without_image: {
      label: 'Card con immagine',
      template: CardWithImageRssTemplate,
      skeleton: CardWithImageRssTemplateSkeleton,
    },
  },
};

const listBlockTypes = config.settings.listBlockTypes; //config.settings.listBlockTypes.concat(['align-center']);
const voltoDefaultListingTemplates =
  config.blocks.blocksConfig.listing.templates;
delete voltoDefaultListingTemplates.summary;

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
  calendar: {
    id: 'calendar',
    title: 'Calendario',
    icon: calendarSvg,
    group: 'homePage',
    view: CalendarView,
    edit: CalendarEdit,
    restricted: false,
    mostUsed: false,
    blockHasOwnFocusManagement: true,
    security: {
      addPermission: [],
      view: [],
    },
    sidebarTab: 1,
  },
  searchEvents: {
    id: 'searchEvents',
    title: 'Ricerca eventi',
    icon: searchIcon,
    group: 'homePage',
    view: EventSearchView,
    edit: EventSearchEdit,
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
  break: {
    id: 'break',
    title: 'Interruzione di pagina',
    icon: divideHorizontalSVG,
    group: 'text',
    view: ViewBreak,
    edit: EditBreak,
    restricted: false,
    mostUsed: false,
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
  testo_riquadro_semplice: {
    id: 'testo_riquadro_semplice',
    title: 'Testo in riquadro semplice',
    icon: titleSVG,
    group: 'text',
    view: TextCardView,
    edit: TextCardEdit,
    restricted: false,
    mostUsed: false,
    blockHasOwnFocusManagement: true,
    security: {
      addPermission: [],
      view: [],
    },
  },
  testo_riquadro_immagine: {
    id: 'testo_riquadro_immagine',
    title: 'Testo in riquadro immagine',
    icon: titleSVG,
    group: 'text',
    view: TextCardWithImageView,
    edit: TextCardWithImageEdit,
    restricted: false,
    mostUsed: false,
    blockHasOwnFocusManagement: true,
    security: {
      addPermission: [],
      view: [],
    },
    sidebarTab: 1,
  },
  accordion: {
    id: 'accordion',
    title: 'Accordion',
    icon: listArrowsSVG,
    group: 'text',
    view: AccordionView,
    edit: AccordionEdit,
    restricted: false,
    mostUsed: false,
    security: {
      addPermission: [],
      view: [],
    },
    sidebarTab: 1,
  },
  video_gallery: {
    id: 'video_gallery',
    title: 'Video Gallery',
    icon: videoSVG,
    group: 'media',
    view: VideoGalleryView,
    edit: VideoGalleryEdit,
    restricted: false,
    mostUsed: false,
    security: {
      addPermission: [],
      view: [],
    },
    sidebarTab: 1,
  },
  twitter_posts: {
    id: 'twitter_posts',
    title: 'Twitter posts',
    icon: faTwitter,
    group: 'media',
    view: TwitterPostsView,
    edit: TwitterPostsEdit,
    restricted: false,
    mostUsed: false,
    security: {
      addPermission: [],
      view: [],
    },
    sidebarTab: 1,
  },
  form: {
    id: 'form',
    title: 'Form',
    icon: formSVG,
    group: 'text',
    view: FormView,
    edit: FormEdit,
    restricted: false,
    mostUsed: true,
    security: {
      addPermission: [],
      view: [],
    },
    sidebarTab: 1,
  },
  listing: {
    ...config.blocks.blocksConfig.listing,
    templates: {
      ...voltoDefaultListingTemplates,

      default: {
        label: 'Card semplice',
        template: SimpleCardTemplate,
      },
      cardWithImageTemplate: {
        label: 'Card con immagine',
        template: CardWithImageTemplate,
        skeleton: CardWithImageTemplateSkeleton,
      },
      inEvidenceTemplate: {
        label: 'In evidenza',
        template: InEvidenceTemplate,
        skeleton: InEvidenceTemplateSkeleton,
      },
      ribbonCardTemplate: {
        label: 'Card con nastro',
        template: RibbonCardTemplate,
        skeleton: RibbonCardTemplateSkeleton,
      },
      mapTemplate: {
        label: 'Mappa',
        template: MapTemplate,
        skeleton: MapTemplateSkeleton,
      },
      smallBlockLinksTemplate: {
        label: 'Blocco link solo immagini',
        template: SmallBlockLinksTemplate,
        skeleton: SmallBlockLinksTemplateSkeleton,
      },
      completeBlockLinksTemplate: {
        label: 'Blocco link completo',
        template: CompleteBlockLinksTemplate,
        skeleton: CompleteBlockLinksTemplateSkeleton,
      },
      photogallery: {
        label: 'Photogallery',
        template: PhotogalleryTemplate,
        skeleton: PhotogalleryTemplateSkeleton,
      },
      gridGalleryTemplate: {
        label: 'Gallery a griglia',
        template: GridGalleryTemplate,
        skeleton: GridGalleryTemplateSkeleton,
      },
      bandiInEvidenceTemplate: {
        label: 'Bandi',
        template: BandiInEvidenceTemplate,
        skeleton: BandiInEvidenceTemplateSkeleton,
      },
      amministrazioneTrasparenteTablesTemplate: {
        label: 'Tabelle Amministrazione Trasparente',
        template: AmministrazioneTrasparenteTablesTemplate,
        skeleton: AmministrazioneTrasparenteTablesTemplateSkeleton,
      },
    },
    listing_bg_colors: [], //{name:'blue', label:'Blu'},{name:'light-blue', label:'Light blue'},{name:'sidebar-background', label:'Grey'}
    listing_items_colors: [], //{name:'blue', label:'Blu'},{name:'light-blue', label:'Light blue'},{name:'sidebar-background', label:'Grey'}
  },
  rssBlock,
};

export const settings = {
  ...config.settings,
  devProxyToApiPath: 'http://localhost:8080/Plone',

  richTextEditorInlineToolbarButtons: ItaliaRichTextEditorInlineToolbarButtons,
  richTextEditorPlugins: [
    ...config.settings.richTextEditorPlugins,
    ...ItaliaRichTextEditorPlugins,
  ],
  extendedBlockRenderMap: extendedBlockRenderMap,
  blockStyleFn: blockStyleFn,
  listBlockTypes: listBlockTypes,
  isMultilingual: false,
  supportedLanguages: ['it'],
  defaultLanguage: 'it',
  verticalFormTabs: true,
  //TODO: rimuovere questa customizzazione quando sistemano https://github.com/plone/volto/issues/1601
  ToHTMLRenderers: {
    ...ToHTMLRenderers,
    blocks: {
      ...ToHTMLRenderers.blocks,
      ...ItaliaBlocksHtmlRenderers,
    },
    inline: { ...ToHTMLRenderers.inline },
  },
  FromHTMLCustomBlockFn: ItaliaFromHTMLCustomBlockFn,
  contentIcons: {
    ...config.settings.contentIcons,
    Document: faFileInvoiceSVG,
    Folder: faFolderOpenSVG,
    'News Item': faNewspaperSVG,
    Event: faCalendarAltSVG,
    Image: faImageSVG,
    File: faFileSVG,
    Link: faLinkSVG,

    Argomento: faBoxOpenSVG,
    CartellaModulistica: faArchiveSVG,
    Documento: faFileAltSVG,
    Venue: faMapMarkedAltSVG,
    Persona: faUserSVG,
    Servizio: faCogSVG,
    Subsite: faSitemapSVG,
    UnitaOrganizzativa: faBuildingSVG,
    Modulo: faFileDownloadSVG,
  },
};

export const views = {
  ...config.views,
  contentTypesViews: {
    ...config.views.contentTypesViews,
    Document: PageView,
    'News Item': NewsItemView,
    UnitaOrganizzativa: UOView,
    Persona: PersonaView,
    Venue: VenueView,
    Servizio: ServizioView,
    Event: EventoView,
    'Pagina Argomento': PaginaArgomentoView,
    CartellaModulistica: CartellaModulisticaView,
    Documento: DocumentoView,
    Modulo: ModuloView,
    Bando: BandoView,
  },
  layoutViews: {
    ...config.views.layoutViews,
    document_view: PageView,
    trasparenza_view: TrasparenzaView,
    dettagli_procedimenti_view: DettagliProcedimentiView,
  },
};

export const siteConfig = {
  italiaThemeViewsConfig: {
    imagePosition: 'afterHeader', // possible values: afterHeader, documentBody
  },
  properties: {
    siteTitle: 'Nome del Comune',
    siteSubtitle: "Uno dei tanti Comuni d'Italia",
    parentSiteTitle: 'Nome della Regione',
    parentSiteURL: 'https://www.governo.it',
    subsiteParentSiteTitle: 'Nome del sito padre del sottosito',
    footerInfos:
      'Via Roma 0 - 00000 Lorem Ipsum Codice fiscale / P. IVA: 000000000',
    amministrazioneTrasparenteUrl: '/amministrazione-trasparente',
  },
};

export const widgets = {
  ...config.widgets,
  id: {
    ...config.widgets.id,
    description: CharCounterDescriptionWidget,
    icona: (props) => (
      <IconWidget {...props} defaultOptions={defaultIconWidgetOptions} />
    ),
    cookie_consent_configuration: MultilingualWidget(),
    data_conclusione_incarico: (props) => (
      <DatetimeWidget {...props} dateOnly={true} />
    ),
    data_insediamento: (props) => <DatetimeWidget {...props} dateOnly={true} />,
    search_sections: SearchSectionsConfigurationWidget,
  },
  widget: {
    ...config.widgets.widget,
    // richtext: TinymceWidget
  },
};

const customBlocksOrder = [
  { id: 'news', title: 'News' },
  { id: 'homePage', title: 'Home Page' },
];
const customInitialBlocks = {
  'Pagina Argomento': ['title', 'description', 'text'],
  'Bando Folder Deepening': ['title', 'description', 'listing'],
};
const customRequiredBlocks = ['description'];

// BUG#10398
// We chose to disallow leadimage block usage in editor. If you want it back someday,
// comment out the following line and add the leadimage behavior in Document.xml file
delete config.blocks.blocksConfig['leadimage'];

export const blocks = {
  ...config.blocks,
  blocksConfig: { ...config.blocks.blocksConfig, ...customBlocks },
  groupBlocksOrder: config.blocks.groupBlocksOrder.concat(customBlocksOrder),
  initialBlocks: { ...config.blocks.initialBlocks, ...customInitialBlocks },
  requiredBlocks: {
    ...config.blocks.requiredBlocks.concat(...customRequiredBlocks),
  },
};
delete blocks.blocksConfig.listing.templates.imageGallery; //removes imageGallery volto template, because we have our photoGallery template

export const addonReducers = { ...config.addonReducers };
export const addonRoutes = [...(config.addonRoutes || [])];
