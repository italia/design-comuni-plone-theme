import newsSVG from '@plone/volto/icons/news.svg';
import searchIcon from 'bootstrap-italia/src/svg/it-search.svg';
import HighlightedContentView from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/HighlightedContent/View';
import HighlightedContentEdit from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/HighlightedContent/Edit';
import noteSvg from 'bootstrap-italia/src/svg/it-note.svg';
import calendarSvg from 'bootstrap-italia/src/svg/it-calendar.svg';

import alertSVG from '@plone/volto/icons/alert.svg';
import AlertView from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Alert/View';
import AlertEdit from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Alert/Edit';

import infoSVG from '@plone/volto/icons/info.svg';
import InfoView from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Info/View';
import InfoEdit from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Info/Edit';

import divideHorizontalSVG from '@plone/volto/icons/divide-horizontal.svg';
import ViewBreak from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Break/View';
import EditBreak from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Break/Edit';

import SearchSectionsView from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/SearchSections/View';
import SearchSectionsEdit from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/SearchSections/Edit';
import ArgumentsInEvidenceEdit from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/ArgumentsInEvidence/Edit';
import ArgumentsInEvidenceView from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/ArgumentsInEvidence/View';

import CalendarView from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Calendar/View';
import CalendarEdit from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Calendar/Edit';

import EventSearchView from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/EventSearch/View';
import EventSearchEdit from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/EventSearch/Edit';

import simpleTextCardSVG from 'design-comuni-plone-theme/icons/card-semplice.svg';
import TextCardView from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/TextCard/SimpleCard/View';
import TextCardEdit from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/TextCard/SimpleCard/Edit';
import imageTextCardSVG from 'design-comuni-plone-theme/icons/card-immagine.svg';
import TextCardWithImageView from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/TextCard/CardWithImage/View';
import TextCardWithImageEdit from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/TextCard/CardWithImage/Edit';

import listArrowsSVG from '@plone/volto/icons/list-arrows.svg';
import AccordionView from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Accordion/View';
import AccordionEdit from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Accordion/Edit';

import videoSVG from '@plone/volto/icons/video.svg';
import VideoGalleryView from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/VideoGallery/View';
import VideoGalleryEdit from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/VideoGallery/Edit';

import iconBlocksSVG from 'design-comuni-plone-theme/icons/blocco-icone.svg';
import IconBlocksView from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/IconBlocks/View';
import IconBlocksEdit from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/IconBlocks/Edit';

import emailSVG from '@plone/volto/icons/email.svg';
import ContactsBlockView from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/ContactsBlock/View';
import ContactsBlockEdit from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/ContactsBlock/Edit';

import numbersBlockSVG from 'design-comuni-plone-theme/icons/numeri.svg';
import NumbersBlockView from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/NumbersBlock/View';
import NumbersBlockEdit from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/NumbersBlock/Edit';

import BandiSearchView from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/BandiSearch/View';
import BandiSearchEdit from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/BandiSearch/Edit';

import UOSearchView from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/UOSearch/View';
import UOSearchEdit from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/UOSearch/Edit';

import flashSVG from '@plone/volto/icons/flash.svg';
import CTABlockView from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/CTABlock/View';
import CTABlockEdit from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/CTABlock/Edit';

import countDownSVG from 'design-comuni-plone-theme/icons/count-down.svg';
import CountDownBlockView from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/CountDown/View';
import CountDownBlockEdit from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/CountDown/Edit';

import { cloneBlock } from 'design-comuni-plone-theme/config/Blocks/ListingOptions';

const italiaBlocks = {
  highlitedContent: {
    id: 'highlitedContent',
    title: 'Contenuto in primo piano',
    icon: newsSVG,
    group: 'homePage',
    view: HighlightedContentView,
    edit: HighlightedContentEdit,
    restricted: false,
    cloneData: cloneBlock,
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
    group: 'search',
    view: SearchSectionsView,
    edit: SearchSectionsEdit,
    restricted: false,
    cloneData: cloneBlock,
    mostUsed: false,
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
    cloneData: cloneBlock,
    mostUsed: false,
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
    group: 'search',
    view: EventSearchView,
    edit: EventSearchEdit,
    restricted: false,
    cloneData: cloneBlock,
    mostUsed: false,
    security: {
      addPermission: [],
      view: [],
    },
    sidebarTab: 1,
  },
  searchBandi: {
    id: 'searchBandi',
    title: 'Ricerca bandi',
    icon: searchIcon,
    group: 'search',
    view: BandiSearchView,
    edit: BandiSearchEdit,
    restricted: false,
    cloneData: cloneBlock,
    mostUsed: false,
    security: {
      addPermission: [],
      view: [],
    },
    sidebarTab: 1,
  },
  searchUO: {
    id: 'searchUO',
    title: 'Ricerca Unità Organizzative',
    icon: searchIcon,
    group: 'search',
    view: UOSearchView,
    edit: UOSearchEdit,
    restricted: false,
    cloneData: cloneBlock,
    mostUsed: false,
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
    cloneData: cloneBlock,
    mostUsed: false,
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
    cloneData: cloneBlock,
    mostUsed: false,
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
    cloneData: cloneBlock,
    mostUsed: false,
    blockHasOwnFocusManagement: true,
    security: {
      addPermission: [],
      view: [],
    },
    sidebarTab: 1,
  },

  info: {
    id: 'info',
    title: 'Informazioni',
    icon: infoSVG,
    group: 'text',
    view: InfoView,
    edit: InfoEdit,
    restricted: false,
    cloneData: cloneBlock,
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
    title: 'Card semplice',
    icon: simpleTextCardSVG,
    group: 'text',
    view: TextCardView,
    edit: TextCardEdit,
    restricted: false,
    cloneData: cloneBlock,
    mostUsed: false,
    blockHasOwnFocusManagement: true,
    security: {
      addPermission: [],
      view: [],
    },
  },
  testo_riquadro_immagine: {
    id: 'testo_riquadro_immagine',
    title: 'Card con immagine',
    icon: imageTextCardSVG,
    group: 'text',
    view: TextCardWithImageView,
    edit: TextCardWithImageEdit,
    restricted: false,
    cloneData: cloneBlock,
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
    cloneData: cloneBlock,
    mostUsed: false,
    security: {
      addPermission: [],
      view: [],
    },
    sidebarTab: 1,
    blockHasOwnFocusManagement: true,
  },
  numbersBlock: {
    id: 'numbersBlock',
    title: 'Blocco Numeri',
    icon: numbersBlockSVG,
    group: 'text',
    view: NumbersBlockView,
    edit: NumbersBlockEdit,
    restricted: false,
    cloneData: cloneBlock,
    mostUsed: true,
    security: {
      addPermission: [],
      view: [],
    },
    sidebarTab: 1,
  },
  iconBlocks: {
    id: 'iconBlocks',
    title: 'Blocchi con icone',
    icon: iconBlocksSVG,
    group: 'text',
    view: IconBlocksView,
    edit: IconBlocksEdit,
    restricted: false,
    cloneData: cloneBlock,
    mostUsed: true,
    security: {
      addPermission: [],
      view: [],
    },
    sidebarTab: 1,
  },
  contacts: {
    id: 'contacts',
    title: 'Contatti',
    icon: emailSVG,
    group: 'text',
    view: ContactsBlockView,
    edit: ContactsBlockEdit,
    restricted: false,
    cloneData: cloneBlock,
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
    cloneData: cloneBlock,
    mostUsed: false,
    security: {
      addPermission: [],
      view: [],
    },
    sidebarTab: 1,
  },
  cta_block: {
    id: 'cta_block',
    title: 'Blocco CTA',
    icon: flashSVG,
    group: 'common',
    view: CTABlockView,
    edit: CTABlockEdit,
    restricted: false,
    cloneData: cloneBlock,
    mostUsed: false,
    blockHasOwnFocusManagement: true,
    security: {
      addPermission: [],
      view: [],
    },
    sidebarTab: 1,
  },
  count_down: {
    id: 'count_down',
    title: 'Count Down',
    icon: countDownSVG,
    group: 'common',
    view: CountDownBlockView,
    edit: CountDownBlockEdit,
    restricted: false,
    cloneData: cloneBlock,
    mostUsed: false,
    security: {
      addPermission: [],
      view: [],
    },
    sidebarTab: 1,
  },
};

const getItaliaBlocks = (config) => {
  delete config.blocks.blocksConfig.search;
  delete config.blocks.blocksConfig.teaser;
  return italiaBlocks;
};
export default getItaliaBlocks;
