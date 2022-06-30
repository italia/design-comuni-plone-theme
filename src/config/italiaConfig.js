import menuSVG from '@plone/volto/icons/menu.svg';
import menuAltSVG from '@plone/volto/icons/menu-alt.svg';
import navSVG from '@plone/volto/icons/nav.svg';
import contentSVG from '@plone/volto/icons/content.svg';
import bookSVG from '@plone/volto/icons/book.svg';
import shareSVG from '@plone/volto/icons/share.svg';

import {
  getItaliaListingVariations,
  removeListingVariation,
} from '@italia/config/Blocks/listingVariations.js';
import getItaliaBlocks from '@italia/config/Blocks/blocks.js';
import getItaliaViews from '@italia/config/Views/views';
import getItaliaWidgets from '@italia/config/Widgets/widgets';

import { rssBlock as customRssBlock } from '@italia/addons/volto-rss-block';
import CardWithImageRssTemplate from '@italia/components/ItaliaTheme/Blocks/RssBlock/CardWithImageRssTemplate';
import CardWithImageRssTemplateSkeleton from '@italia/components/ItaliaTheme/Blocks/RssBlock/TemplatesSkeleton/CardWithImageRssTemplateSkeleton';
import CardWithoutImageRssTemplate from '@italia/components/ItaliaTheme/Blocks/RssBlock/CardWithoutImageRssTemplate';
import CardWithoutImageRssTemplateSkeleton from '@italia/components/ItaliaTheme/Blocks/RssBlock/TemplatesSkeleton/CardWithoutImageRssTemplateSkeleton';

import HandleAnchor from '@italia/components/ItaliaTheme/HandleAnchor/HandleAnchor';

// CTs icons
import faFileInvoiceSVG from '@italia/icons/file-invoice.svg';
import faFolderOpenSVG from '@italia/icons/folder-open.svg';
import faImageSVG from '@italia/icons/image.svg';
import faFileSVG from '@italia/icons/file.svg';
import faLinkSVG from '@italia/icons/link.svg';
import faBoxOpenSVG from '@italia/icons/box-open.svg';
import faArchiveSVG from '@italia/icons/archive.svg';
import faFileAltSVG from '@italia/icons/file-alt.svg';
import faCalendarAltSVG from '@italia/icons/calendar-alt.svg';
import faMapMarkedAltSVG from '@italia/icons/map-marked-alt.svg';
import faNewspaperSVG from '@italia/icons/newspaper.svg';
import faUserSVG from '@italia/icons/user.svg';
import faCogSVG from '@italia/icons/cog.svg';
import faSitemapSVG from '@italia/icons/sitemap.svg';
import faBuildingSVG from '@italia/icons/building.svg';
import faFileDownloadSVG from '@italia/icons/file-download.svg';
import faQuestionSVG from '@italia/icons/question-solid.svg';
import bandoSVG from '@italia/icons/bando.svg';

import applyRichTextConfig from '@italia/config/RichTextEditor/config';

import gdprPrivacyPanelConfig from '@italia/config/volto-gdpr-privacy-defaultPanelConfig.js';
import { loadables } from '@italia/config/loadables';

export default function applyConfig(voltoConfig) {
  let config = applyRichTextConfig(voltoConfig);

  /******************************************************************************
   * SETTINGS
   ******************************************************************************/

  config.settings = {
    ...config.settings,
    sentryOptions: {
      ...(config.settings.sentryOptions ?? {}),
      ignoreErrors: [
        'ChunkLoadError',
        'Loading CSS chunk',
        'Timeout (n)', //errori di recaptcha nella customer satisfaction
        'Uncaught (in promise) Timeout (n)', //errori di recaptcha nella customer satisfaction
      ],
      // https://docs.sentry.io/platforms/javascript/data-management/sensitive-data/
      // beforeSend(event) {
      //   // Modify the event here (e.g.)
      //   // if (event.user) {
      //   //   delete event.user.email;
      //   // }
      //  return event;
      // },
    },
    isMultilingual: false,
    supportedLanguages: ['it'],
    defaultLanguage: 'it',
    verticalFormTabs: true,
    showTags: false,
    showSelfRegistration: false,
    useEmailAsLogin: false,
    defaultPageSize: 24,
    cookieExpires: 15552000, //6 month
    serverConfig: {
      ...config.settings.serverConfig,
      extractScripts: {
        ...config.settings.serverConfig.extractScripts,
        errorPages: true,
      },
    },
    querystringAdditionalFields: [],
    contentIcons: {
      ...config.settings.contentIcons,
      Document: faFileInvoiceSVG,
      Bando: bandoSVG,
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
      Faq: faQuestionSVG,
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
    controlPanelsIcons: {
      ...config.settings.controlPanelsIcons,
      'dropdown-menu-settings': menuSVG,
      'secondary-menu-settings': menuAltSVG,
      'subsites-settings': navSVG,
      'design-plone-settings': contentSVG,
      'bandi-settings': bookSVG,
      'social-settings': shareSVG,
    },
    defaultExcludedFromSearch: {
      portalTypes: ['Image', 'File'],
    },

    italiaThemeViewsConfig: {
      imagePosition: 'afterHeader', // possible values: afterHeader, documentBody
      // Venue: {
      //   sections: [
      //     //sections order for Venue content-type view. See components/ItaliaTheme/View/VenueView/VenueView.jsx for default VenueViewSectionsOrder
      //   ],
      // },
    },
    siteProperties: {
      siteTitle: 'Nome del Comune', //può essere una stringa, o un oggetto nel caso di multilingua: {'it':'Nome del Comune', 'en':'Site name'}. Se multilingua il default è comunque la stringa.
      siteSubtitle: "Uno dei tanti Comuni d'Italia", //può essere una stringa, o un oggetto nel caso di multilingua: {'it':'Uno dei tanti Comuni d'Italia', 'en':'Uno dei tanti Comuni d'Italia'}. Se multilingua il default è comunque la stringa.
      parentSiteTitle: 'Nome della Regione', //può essere una stringa, o un oggetto nel caso di multilingua: {'it':'Nome della Regione', 'en':'Region name'}.Se multilingua il default è comunque la stringa.
      parentSiteURL: 'https://www.governo.it', //può essere una stringa, o un oggetto nel caso di multilingua: {'it':'https://www.governo.it', 'en':'https://www.governo.it/en'}. Se multilingua il default è comunque la stringa.
      subsiteParentSiteTitle: 'Nome del sito padre del sottosito', //può essere una stringa, o un oggetto nel caso di multilingua: {'it':'Nome del sito padre', 'en':'Parent site name'}. Se multilingua il default è comunque la stringa.
      amministrazioneTrasparenteUrl: '/amministrazione-trasparente',
      //arLoginUrl: 'https://io-comune.agamar.redturtle.it/login',
      // arLogoutUrl: 'https://io-comune.agamar.redturtle.it/logout',
      //spidLogin: true, //se true, nella pagina di errore Unauthorized, mostra il pulsante per il login a Spid.
      headerslimTertiaryMenu: {
        it: [
          //{ title: 'Contatti', url: '/it/contatti' },
          //{ title: 'Novità', url: '/it/novita' },
        ],
        en: [
          //{ title: 'Contacts', url: '/en/contacts' },
          //{ title: 'News', url: '/en/news' },
        ],
      },
      smallFooterLinks: {
        default: [
          // { title: 'Media policy', url: '/media-policy' },
          // { title: 'Note legali', url: '/note-legali' },
          // { title: 'Privacy policy', url: '/privacy-policy' },
          // { title: 'Mappa del sito', url: '/sitemap' },
          // { title: 'Credits', url: 'https://www.redturtle.it/' },
        ],
        it: [
          // { title: 'Media policy', url: '/it/media-policy' },
          // { title: 'Note legali', url: '/it/note-legali' },
          // { title: 'Privacy policy', url: '/it/privacy-policy' },
          // { title: 'Mappa del sito', url: '/sitemap' },
          // { title: 'Credits', url: 'https://www.redturtle.it/' },
        ],
        en: [
          // { title: 'Media policy', url: '/en/media-policy' },
          // { title: 'Legal notes', url: '/en/legal-notes' },
          // { title: 'Privacy policy', url: '/en/privacy-policy' },
          // { title: 'Sitemap', url: '/sitemap' },
          // { title: 'Credits', url: 'https://www.redturtle.it/' },
        ],
      },
      enableCustomerSatisfaction: true,
      enableVoltoFormBlockCaptcha: true,
      splitMegamenuColumns: true, //se impostato a false, non spezza le colonne con intestazioni nel megamenu
      footerNavigationDepth: 2, //valori possibili: [1,2]. Se impostato ad 1 non verranno mostrati nel footer i link agli elementi contenuti nelle sezioni di primo livello.
    },
    appExtras: [
      ...config.settings.appExtras,
      {
        match: '',
        component: HandleAnchor,
      },
    ],
    'volto-blocks-widget': {
      allowedBlocks: [
        'text',
        'image',
        'video',
        'html',
        'table',
        'maps',
        'break',
        'testo_riquadro_semplice',
        'testo_riquadro_immagine',
        'rssBlock',
        //se si aggiunge un nuovo blocco, verificare che in edit non ci siano bottoni che provocano il submit della form. Se succede, gestirli con e.prevenDefault() e.stopPropagation().
      ],

      showRestricted: false,
    },

    'volto-gdpr-privacy': {
      ...config.settings['volto-gdpr-privacy'],
      defaultPanelConfig: gdprPrivacyPanelConfig,
    },

    'volto-editablefooter': {
      ...config.settings['volto-editablefooter'],
      options: { socials: true, newsletterSubscribe: true },
    },
    videoAllowExternalsDefault: false,
    showTrasparenzaFields: false,
  };

  /******************************************************************************
   * VIEWS
   ******************************************************************************/
  config.views = {
    ...config.views,
    ...getItaliaViews(config),
  };

  /******************************************************************************
   * WIDGETS
   ******************************************************************************/
  config.widgets = {
    ...config.widgets,
    ...getItaliaWidgets(config),
  };

  /******************************************************************************
   * BLOCKS
   ******************************************************************************/
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

  const customBlocksOrder = [
    { id: 'news', title: 'News' },
    { id: 'homePage', title: 'Home Page' },
    { id: 'search', title: 'Ricerca' },
  ];
  const customInitialBlocks = {
    'Pagina Argomento': ['title', 'description', 'text'],
    'Bando Folder Deepening': ['title', 'description', 'listing'],
  };
  const customRequiredBlocks = ['description'];

  const customBlocks = {
    ...getItaliaBlocks(config),
    listing: {
      ...config.blocks.blocksConfig.listing,
      showLinkMore: true,
      variations: [
        ...config.blocks.blocksConfig.listing.variations,
        ...getItaliaListingVariations(config),
      ],
      listing_bg_colors: [], //{name:'blue', label:'Blu'},{name:'light-blue', label:'Light blue'},{name:'sidebar-background', label:'Grey'}
      listing_items_colors: [], //{name:'blue', label:'Blu'},{name:'light-blue', label:'Light blue'},{name:'sidebar-background', label:'Grey'}
      getAsyncData: null, // questo disabilita il ssr dei listing perché rallenta vistosamente la pagina (per ora continuiamo con rendertron)
    },
    hero: {
      ...config.blocks.blocksConfig.hero,
      sidebarTab: 1,
    },
    html: {
      ...config.blocks.blocksConfig.html,
      sidebarTab: 1,
    },
    rssBlock,
  };

  config.blocks = {
    ...config.blocks,
    blocksConfig: { ...config.blocks.blocksConfig, ...customBlocks },
    groupBlocksOrder: config.blocks.groupBlocksOrder.concat(customBlocksOrder),
    initialBlocks: { ...config.blocks.initialBlocks, ...customInitialBlocks },
    requiredBlocks: {
      ...config.blocks.requiredBlocks.concat(...customRequiredBlocks),
    },
    showEditBlocksInBabelView: true,
  };

  removeListingVariation(config, 'default'); // removes default volto template, because it will be overrided
  removeListingVariation(config, 'summary'); // removes summary volto template, because is unused
  removeListingVariation(config, 'imageGallery'); // removes imageGallery volto template, because we have our photoGallery template

  // BUG#10398
  // We chose to disallow leadimage block usage in editor. If you want it back someday,
  // comment out the following line and add the leadimage behavior in Document.xml file
  delete config.blocks.blocksConfig['leadimage'];

  return config;
}
