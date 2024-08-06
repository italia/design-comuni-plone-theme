import searchIcon from 'bootstrap-italia/src/svg/it-search.svg';

import listArrowsSVG from '@plone/volto/icons/list-arrows.svg';
import {
  AccordionView,
  AccordionEdit,
} from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Accordion';

import alertSVG from '@plone/volto/icons/alert.svg';
import {
  AlertView,
  AlertEdit,
} from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Alert';

import noteSvg from 'bootstrap-italia/src/svg/it-note.svg';
import {
  ArgumentsInEvidenceView,
  ArgumentsInEvidenceEdit,
} from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/ArgumentsInEvidence';

import {
  BandiSearchView,
  BandiSearchEdit,
} from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/BandiSearch';

import divideHorizontalSVG from '@plone/volto/icons/divide-horizontal.svg';
import {
  ViewBreak,
  EditBreak,
} from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Break';

import calendarSvg from 'bootstrap-italia/src/svg/it-calendar.svg';
import {
  CalendarView,
  CalendarEdit,
} from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Calendar';

import emailSVG from '@plone/volto/icons/email.svg';
import {
  ContactsBlockView,
  ContactsBlockEdit,
} from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/ContactsBlock';

import { countDownSVG } from 'design-comuni-plone-theme/icons';
import {
  CountDownBlockView,
  CountDownBlockEdit,
} from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/CountDown';

import flashSVG from '@plone/volto/icons/flash.svg';
import {
  CTABlockView,
  CTABlockEdit,
} from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/CTABlock';

import {
  EventSearchView,
  EventSearchEdit,
} from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/EventSearch';

import newsSVG from '@plone/volto/icons/news.svg';
import {
  HighlightedContentView,
  // getHiglitedContentAsyncData,
  HighlightedContentEdit,
} from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/HighlightedContent';

import { iconBlocksSVG } from 'design-comuni-plone-theme/icons';
import {
  IconBlocksView,
  IconBlocksEdit,
} from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/IconBlocks';

import { numbersBlockSVG } from 'design-comuni-plone-theme/icons';
import {
  NumbersBlockView,
  NumbersBlockEdit,
} from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/NumbersBlock';

import {
  SearchSectionsView,
  SearchSectionsEdit,
} from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/SearchSections';

import { simpleTextCardSVG } from 'design-comuni-plone-theme/icons';
import { imageTextCardSVG } from 'design-comuni-plone-theme/icons';
import {
  TextCardView,
  TextCardEdit,
  TextCardWithImageView,
  TextCardWithImageEdit,
} from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/TextCard';

import {
  UOSearchView,
  UOSearchEdit,
} from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/UOSearch';

import videoSVG from '@plone/volto/icons/video.svg';
import {
  VideoGalleryView,
  VideoGalleryEdit,
} from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/VideoGallery';

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
    mostUsed: true,
    security: {
      addPermission: [],
      view: [],
    },
    sidebarTab: 1,
    // getAsyncData: getHiglitedContentAsyncData,
  },
  searchSections: {
    id: 'searchSections',
    title: 'Ricerca nelle sezioni',
    icon: searchIcon,
    group: 'search',
    view: SearchSectionsView,
    edit: SearchSectionsEdit,
    restricted: false,
    mostUsed: false,
    cloneData: cloneBlock,
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
    cloneData: cloneBlock,
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
    mostUsed: false,
    cloneData: cloneBlock,
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
    mostUsed: false,
    cloneData: cloneBlock,
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
    mostUsed: false,
    cloneData: cloneBlock,
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
    cloneData: cloneBlock,
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
    cloneData: cloneBlock,
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
    cloneData: cloneBlock,
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
    mostUsed: false,
    cloneData: cloneBlock,
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
    mostUsed: false,
    cloneData: cloneBlock,
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
    cloneData: cloneBlock,
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
    mostUsed: true,
    cloneData: cloneBlock,
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
    mostUsed: false,
    cloneData: cloneBlock,
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
    cloneData: cloneBlock,
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
    mostUsed: false,
    cloneData: cloneBlock,
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
    mostUsed: false,
    cloneData: cloneBlock,
    security: {
      addPermission: [],
      view: [],
    },
    sidebarTab: 1,
  },
};

const getItaliaBlocks = (config) => {
  delete config.blocks.blocksConfig.teaser;
  config.blocks.blocksConfig.gridBlock.allowedBlocks =
    config.blocks.blocksConfig.gridBlock.allowedBlocks
      .filter((item) => !['slate', 'teaser'].includes(item))
      .concat(['text']);
  return italiaBlocks;
};
export default getItaliaBlocks;
