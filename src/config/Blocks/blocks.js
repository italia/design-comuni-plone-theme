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

import faTwitter from 'design-comuni-plone-theme/icons/twitter-brands.svg';
import TwitterPostsView from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/TwitterPosts/View';
import TwitterPostsEdit from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/TwitterPosts/Edit';

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
import { defineMessages } from 'react-intl';

const messages = defineMessages({
  highlited_content: {
    id: 'Contenuto in primo piano',
    defaultMessage: 'Contenuto in primo piano',
  },
  search_sections: {
    id: 'Ricerca nelle sezioni',
    defaultMessage: 'Ricerca nelle sezioni',
  },
  calendar: {
    id: 'Calendario',
    defaultMessage: 'Calendario',
  },
  search_events: {
    id: 'Ricerca eventi',
    defaultMessage: 'Ricerca eventi',
  },
  search_bandi: {
    id: 'Ricerca bandi',
    defaultMessage: 'Ricerca bandi',
  },
  search_UO: {
    id: 'Ricerca Unità Organizzative',
    defaultMessage: 'Ricerca Unità Organizzative',
  },
  arguments_in_evidence: {
    id: 'Argomenti in evidenza',
    defaultMessage: 'Argomenti in evidenza',
  },
  break: {
    id: 'Interruzione di pagina',
    defaultMessage: 'Interruzione di pagina',
  },
  alert: {
    id: 'Alert',
    defaultMessage: 'Alert',
  },
  info: {
    id: 'Informazioni',
    defaultMessage: 'Informazioni',
  },
  testo_riquadro_semplice: {
    id: 'Card semplice',
    defaultMessage: 'Card semplice',
  },
  testo_riquadro_immagine: {
    id: 'Card con immagine',
    defaultMessage: 'Card con immagine',
  },
  accordion: {
    id: 'Accordion',
    defaultMessage: 'Accordion',
  },
  numbers_block: {
    id: 'Blocco Numeri',
    defaultMessage: 'Blocco Numeri',
  },
  icon_blocks: {
    id: 'Blocchi con icone',
    defaultMessage: 'Blocchi con icone',
  },
  contacts: {
    id: 'Contatti',
    defaultMessage: 'Contatti',
  },
  video_gallery: {
    id: 'Video Gallery',
    defaultMessage: 'Video Gallery',
  },
  twitter_posts: {
    id: 'Twitter posts',
    defaultMessage: 'Twitter posts',
  },
  cta_block: {
    id: 'Blocco CTA',
    defaultMessage: 'Blocco CTA',
  },
  count_down: {
    id: 'Count Down',
    defaultMessage: 'Count Down',
  },
});

const italiaBlocks = ({ intl }) => ({
  highlitedContent: {
    id: 'highlitedContent',
    title: intl.formatMessage(messages.highlited_content),
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
    title: intl.formatMessage(messages.search_sections),
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
    title: intl.formatMessage(messages.calendar),
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
    title: intl.formatMessage(messages.search_events),
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
    title: intl.formatMessage(messages.search_bandi),
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
    title: intl.formatMessage(messages.search_UO),
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
    title: intl.formatMessage(messages.arguments_in_evidence),
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
    title: intl.formatMessage(messages.break),
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
    title: intl.formatMessage(messages.alert),
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
    title: intl.formatMessage(messages.info),
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
    title: intl.formatMessage(messages.testo_riquadro_semplice),
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
    title: intl.formatMessage(messages.testo_riquadro_immagine),
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
    title: intl.formatMessage(messages.accordion),
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
    title: intl.formatMessage(messages.numbers_block),
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
    title: intl.formatMessage(messages.icon_blocks),
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
    title: intl.formatMessage(messages.contacts),
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
    title: intl.formatMessage(messages.video_gallery),
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
  twitter_posts: {
    id: 'twitter_posts',
    title: intl.formatMessage(messages.twitter_posts),
    icon: faTwitter,
    group: 'media',
    view: TwitterPostsView,
    edit: TwitterPostsEdit,
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
    title: intl.formatMessage(messages.cta_block),
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
    title: intl.formatMessage(messages.count_down),
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
});

const getItaliaBlocks = (config) => {
  delete config.blocks.blocksConfig.search;
  delete config.blocks.blocksConfig.teaser;
  return italiaBlocks;
};
export default getItaliaBlocks;
