import newsSVG from '@plone/volto/icons/news.svg';
import searchIcon from 'bootstrap-italia/src/svg/it-search.svg';
import HighlightedContentView from '@italia/components/ItaliaTheme/Blocks/HighlightedContent/View';
import HighlightedContentEdit from '@italia/components/ItaliaTheme/Blocks/HighlightedContent/Edit';
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

import faTwitter from '@italia/icons/twitter-brands.svg';
import TwitterPostsView from '@italia/components/ItaliaTheme/Blocks/TwitterPosts/View';
import TwitterPostsEdit from '@italia/components/ItaliaTheme/Blocks/TwitterPosts/Edit';

import iconBlocksSVG from '@plone/volto/icons/apps.svg';
import IconBlocksView from '@italia/components/ItaliaTheme/Blocks/IconBlocks/View';
import IconBlocksEdit from '@italia/components/ItaliaTheme/Blocks/IconBlocks/Edit';

import emailSVG from '@plone/volto/icons/email.svg';
import ContactsBlockView from '@italia/components/ItaliaTheme/Blocks/ContactsBlock/View';
import ContactsBlockEdit from '@italia/components/ItaliaTheme/Blocks/ContactsBlock/Edit';

import numbersBlockSVG from '@plone/volto/icons/apps.svg';
import NumbersBlockView from '@italia/components/ItaliaTheme/Blocks/NumbersBlock/View';
import NumbersBlockEdit from '@italia/components/ItaliaTheme/Blocks/NumbersBlock/Edit';

import BandiSearchView from '@italia/components/ItaliaTheme/Blocks/BandiSearch/View';
import BandiSearchEdit from '@italia/components/ItaliaTheme/Blocks/BandiSearch/Edit';

import UOSearchView from '@italia/components/ItaliaTheme/Blocks/UOSearch/View';
import UOSearchEdit from '@italia/components/ItaliaTheme/Blocks/UOSearch/Edit';

import flashSVG from '@plone/volto/icons/flash.svg';
import CTABlockView from '@italia/components/ItaliaTheme/Blocks/CTABlock/View';
import CTABlockEdit from '@italia/components/ItaliaTheme/Blocks/CTABlock/Edit';

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

  testo_riquadro_semplice: {
    id: 'testo_riquadro_semplice',
    title: 'Testo Card semplice',
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
    title: 'Testo Card con immagine',
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
  numbersBlock: {
    id: 'numbersBlock',
    title: 'Blocco Numeri',
    icon: numbersBlockSVG,
    group: 'text',
    view: NumbersBlockView,
    edit: NumbersBlockEdit,
    restricted: false,
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
  cta_block: {
    id: 'cta_block',
    title: 'Blocco CTA',
    icon: flashSVG,
    group: 'common',
    view: CTABlockView,
    edit: CTABlockEdit,
    restricted: false,
    mostUsed: false,
    blockHasOwnFocusManagement: true,
    security: {
      addPermission: [],
      view: [],
    },
    sidebarTab: 1,
  },
};

const getItaliaBlocks = (config) => {
  return italiaBlocks;
};
export default getItaliaBlocks;
