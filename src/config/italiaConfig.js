import loadable from '@loadable/component';
import menuSVG from '@plone/volto/icons/menu.svg';
import menuAltSVG from '@plone/volto/icons/menu-alt.svg';
import navSVG from '@plone/volto/icons/nav.svg';
import contentSVG from '@plone/volto/icons/content.svg';
import bookSVG from '@plone/volto/icons/book.svg';
import shareSVG from '@plone/volto/icons/share.svg';
import searchIcon from 'bootstrap-italia/src/svg/it-search.svg';
import { defineMessages } from 'react-intl';
import { Search } from '@plone/volto/components';
import ImageWithErrors from 'design-comuni-plone-theme/components/ImageWithErrors/ImageWithErrors';
import {
  getItaliaListingVariations,
  removeListingVariation,
} from 'design-comuni-plone-theme/config/Blocks/listingVariations.js';
import getItaliaBlocks from 'design-comuni-plone-theme/config/Blocks/blocks.js';
import getItaliaViews from 'design-comuni-plone-theme/config/Views/views';
import getItaliaWidgets from 'design-comuni-plone-theme/config/Widgets/widgets';

import { rssBlock as customRssBlock } from 'volto-rss-block';
import CardWithImageRssTemplate from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/RssBlock/CardWithImageRssTemplate';
import CardWithImageRssTemplateSkeleton from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/RssBlock/TemplatesSkeleton/CardWithImageRssTemplateSkeleton';
import CardWithoutImageRssTemplate from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/RssBlock/CardWithoutImageRssTemplate';
import CardWithoutImageRssTemplateSkeleton from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/RssBlock/TemplatesSkeleton/CardWithoutImageRssTemplateSkeleton';
import {
  AnswersStep,
  CommentsStep,
  LoginAgid,
} from 'design-comuni-plone-theme/components/ItaliaTheme';
import RightColumnFacets from '@plone/volto/components/manage/Blocks/Search/layout/RightColumnFacets';
import LeftColumnFacets from '@plone/volto/components/manage/Blocks/Search/layout/LeftColumnFacets';

import HandleAnchor from 'design-comuni-plone-theme/components/ItaliaTheme/AppExtras/HandleAnchor';
import GenericAppExtras from 'design-comuni-plone-theme/components/ItaliaTheme/AppExtras/GenericAppExtras';
import PageLoader from 'design-comuni-plone-theme/components/ItaliaTheme/AppExtras/PageLoader';
import TrackFocus from 'design-comuni-plone-theme/components/ItaliaTheme/AppExtras/TrackFocus';
import SiteSettingsExtras from 'design-comuni-plone-theme/components/ItaliaTheme/AppExtras/SiteSettingsExtras';

import { loadables as ItaliaLoadables } from 'design-comuni-plone-theme/config/loadables';

// CTs icons
import faFileInvoiceSVG from 'design-comuni-plone-theme/icons/file-invoice.svg';
import faFolderOpenSVG from 'design-comuni-plone-theme/icons/folder-open.svg';
import faImageSVG from 'design-comuni-plone-theme/icons/image.svg';
import faFileSVG from 'design-comuni-plone-theme/icons/file.svg';
import faLinkSVG from 'design-comuni-plone-theme/icons/link.svg';
import faBoxOpenSVG from 'design-comuni-plone-theme/icons/box-open.svg';
import faArchiveSVG from 'design-comuni-plone-theme/icons/archive.svg';
import faFileAltSVG from 'design-comuni-plone-theme/icons/file-alt.svg';
import faCalendarAltSVG from 'design-comuni-plone-theme/icons/calendar-alt.svg';
import faMapMarkedAltSVG from 'design-comuni-plone-theme/icons/map-marked-alt.svg';
import faNewspaperSVG from 'design-comuni-plone-theme/icons/newspaper.svg';
import faUserSVG from 'design-comuni-plone-theme/icons/user.svg';
import faCogSVG from 'design-comuni-plone-theme/icons/cog.svg';
import faSitemapSVG from 'design-comuni-plone-theme/icons/sitemap.svg';
import faBuildingSVG from 'design-comuni-plone-theme/icons/building.svg';
import faFileDownloadSVG from 'design-comuni-plone-theme/icons/file-download.svg';
import faQuestionSVG from 'design-comuni-plone-theme/icons/question-solid.svg';
import bandoSVG from 'design-comuni-plone-theme/icons/bando.svg';
import logSVG from 'design-comuni-plone-theme/icons/log.svg';

import applyItaliaSlateConfig from 'design-comuni-plone-theme/config/Slate/config';

import { schemaListing } from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/schema.js';

import reducers from 'design-comuni-plone-theme/reducers';
import {
  FALLBACK_IMAGE_SRC,
  FALLBACK_IMAGE_SRC_MAX_W,
} from 'design-comuni-plone-theme/helpers/images';
import ItaliaTeaserBody from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Teaser/ItaliaTeaserBody';

const ReleaseLog = loadable(
  () => import('design-comuni-plone-theme/components/ReleaseLog/ReleaseLog'),
);

const messages = defineMessages({
  search_brdc: {
    id: 'search_brdc',
    defaultMessage: 'Ricerca',
  },
  auth_ft: {
    id: 'auth_ft',
    defaultMessage: 'Login/Logout',
  },
  sitemap_ft: {
    id: 'sitemap_ft',
    defaultMessage: 'Sitemap',
  },
});

export default function applyConfig(voltoConfig) {
  let config = applyItaliaSlateConfig(voltoConfig);

  /******************************************************************************
   * SETTINGS
   ******************************************************************************/
  const voltoSentryOptions = voltoConfig.settings.sentryOptions;
  config.experimental.addBlockButton.enabled = true; //per spostare il bottone di aggiunta dei blocchi in basso, e fare in modo che i bottoni di edit dei blocchi siano usabili anche da tablet/mobile
  config.settings = {
    ...config.settings,
    contextualVocabularies: config.settings.contextualVocabularies || [],
    openExternalLinkInNewTab: true,
    sentryOptions: (libraries) => ({
      ...voltoSentryOptions(libraries),
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
    }),
    isMultilingual: false,
    // DEPRECATED: isFooterCollapsed to be removed in version 12. Use siteProperties.footerNavigationDepth instead.
    isFooterCollapsed: false, // false(default) -> vedere il footer automatico esploso | true -> implodere il footer menu automatico
    supportedLanguages: ['it'],
    defaultLanguage: 'it',
    verticalFormTabs: true,
    showTags: false,
    showSelfRegistration: false,
    useEmailAsLogin: false,
    defaultPageSize: 24,
    navDepth: 2,
    cookieExpires: 15552000, //6 month
    serverConfig: {
      ...config.settings.serverConfig,
      //criticalCssPath: 'node_modules/design-comuni-plone-theme/public/critical.css', //valido solo per i siti figli. Rimosso temporaneamente perchè fa un brutto effetto al caricamento della pagina
      extractScripts: {
        ...config.settings.serverConfig.extractScripts,
        errorPages: true,
      },
    },
    /*
      Set to 100mb in BINARY bytes, not decimal, see volto/helpers/FormValidation.js.validateFileUploadSize error message
      ...
      messages.fileTooLarge, {
        limit: `${Math.floor(
          config.settings.maxFileUploadSize / 1024 / 1024,
        )}MB`,
      }
    */
    maxFileUploadSize: 104857600,
    querystringAdditionalFields: [],
    searchBlockTemplates: [
      'simpleCard',
      'cardWithImageTemplate',
      'inEvidenceTemplate',
      'cardSlideUpTextTemplate',
      'bandiInEvidenceTemplate',
      'simpleListTemplate',
    ],
    loadables: { ...config.settings.loadables, ...ItaliaLoadables },
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
    controlpanels: [
      ...(config.settings.controlpanels ?? []),
      {
        '@id': '/release-log',
        group: 'General',
        title: 'Novità ultimi rilasci',
        id: 'release-log',
      },
    ],
    controlPanelsIcons: {
      ...config.settings.controlPanelsIcons,
      'dropdown-menu-settings': menuSVG,
      'secondary-menu-settings': menuAltSVG,
      'subsites-settings': navSVG,
      'design-plone-settings': contentSVG,
      'bandi-settings': bookSVG,
      'social-settings': shareSVG,
      'release-log': logSVG,
    },
    //defaultBlockType: 'text',
    defaultExcludedFromSearch: {
      portalTypes: ['Image', 'File'],
    },
    italiaThemeViewsConfig: {
      ...(config.settings.italiaThemeViewsConfig ?? {}),
      imagePosition: 'afterHeader', // possible values: afterHeader, documentBody
      // Venue: {
      //   sections: [
      //     //sections order for Venue content-type view. See components/ItaliaTheme/View/VenueView/VenueView.jsx for default VenueViewSectionsOrder
      //   ],
      //   updateSideMenuOnLoadingBlocks:false, //serve se si vuole fare in modo che il sideMenu si aggiorni con i titli dei blocchi presenti nel testo
      //   sideMenu:null // qui va messo il component da usare per fare il SideMenu, se non è impostato viene usato quello di default
      // },
    },
    siteProperties: {
      siteTitle: 'io-Comune', //può essere una stringa, o un oggetto nel caso di multilingua: {'it':'Nome del Comune', 'en':'Site name'}. Se multilingua il default è comunque la stringa.
      siteSubtitle: '', //può essere una stringa, o un oggetto nel caso di multilingua: {'it':'Uno dei tanti Comuni d'Italia', 'en':'Uno dei tanti Comuni d'Italia'}. Se multilingua il default è comunque la stringa.
      parentSiteTitle: 'Regione Emilia-Romagna', //può essere una stringa, o un oggetto nel caso di multilingua: {'it':'Nome della Regione', 'en':'Region name'}.Se multilingua il default è comunque la stringa.
      parentSiteURL: 'https://www.regione.emilia-romagna.it', //può essere una stringa, o un oggetto nel caso di multilingua: {'it':'https://www.governo.it', 'en':'https://www.governo.it/en'}. Se multilingua il default è comunque la stringa.
      subsiteParentSiteTitle: 'io-Comune', //può essere una stringa, o un oggetto nel caso di multilingua: {'it':'Nome del sito padre', 'en':'Parent site name'}. Se multilingua il default è comunque la stringa.
      amministrazioneTrasparenteUrl: '/amministrazione-trasparente',
      showNextGenerationEU: true,
      // arLoginUrl: '/login?e=1',
      // arLogoutUrl: '/logout?e=1',
      // spidLogin: true, //se true, nella pagina di errore Unauthorized, mostra il pulsante per il login a Spid.
      headerslimTertiaryMenu: {
        default: [
          //{ title: 'Contatti', url: '/it/contatti' },
          //{ title: 'Novità', url: '/it/novita' },
        ],
        it: [
          //{ title: 'Contatti', url: '/it/contatti' },
          //{ title: 'Novità', url: '/it/novita' },
        ],
        en: [
          //{ title: 'Contacts', url: '/en/contacts' },
          //{ title: 'News', url: '/en/news' },
        ],
        es: [
          //{ title: 'Contactos', url: '/es/contacts' },
          //{ title: 'Noticias', url: '/es/news' },
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
        es: [
          // { title: 'Política de medios', url: '/es/media-policy' },
          // { title: 'Notas legales', url: '/es/legal-notes' },
          // { title: 'Política de privacidad', url: '/es/privacy-policy' },
          // { title: 'Mapa del sitio', url: '/sitemap' },
          // { title: 'Créditos', url: 'https://www.redturtle.it/' },
        ],
      },
      enableFeedbackForm: true,
      noFeedbackFormFor: ['ModelloPratica'],
      enableNoFeedbackFormFor: false,
      enableFeedbackFormCaptcha: false,
      enableVoltoFormBlockCaptcha: true,
      splitMegamenuColumns: true, //se impostato a false, non spezza le colonne con intestazioni nel megamenu
      footerNavigationDepth: 2, //valori possibili: [1,2]. Se impostato ad 1 non verranno mostrati nel footer i link agli elementi contenuti nelle sezioni di primo livello.
      markSpecialLinks: true, // se impostato a false, non marca con icona i link esterni
      markFooterLinks: true, // se impostato a true, viene aggiunta un'icona ai link del footer per renderli riconoscibili
      showContentDateInListingFor: ['Modulo', 'Documento'], // elenco dei content types per i quali mostrare la data di pubblicazione/modifica in listing
      fallbackImageSrc: FALLBACK_IMAGE_SRC,
      fallbackImageSrcMaxW: FALLBACK_IMAGE_SRC_MAX_W,
    },
    apiExpanders: [
      ...config.settings.apiExpanders,
      {
        match: '',
        GET_CONTENT: ['breadcrumbs', 'navigation', 'actions', 'types'],
      },
    ],
    appExtras: [
      ...config.settings.appExtras,
      {
        match: '',
        component: HandleAnchor,
      },
      {
        match: '',
        component: GenericAppExtras,
      },
      {
        match: '',
        component: PageLoader,
      },
      {
        match: '',
        component: TrackFocus,
      },
      {
        match: '',
        component: SiteSettingsExtras,
      },
    ],

    'volto-editablefooter': {
      ...config.settings['volto-editablefooter'],
      options: { socials: true, newsletterSubscribe: true },
    },
    'volto-feedback': {
      ...config.settings['volto-feedback'],
      formSteps: [
        {
          step: 0,
          pane: AnswersStep,
        },
        {
          step: 1,
          pane: CommentsStep,
        },
      ],
      // Enable Feedback component in your CMS/Non content routes
      feedbackEnabledNonContentRoutes: [
        ...(config.settings['volto-feedback']
          ?.feedbackEnabledNonContentRoutes ?? []),
        {
          path: '/login',
          feedbackTitle: messages.auth_ft,
        },
        // { path: '/logout', feedbackTitle: messages.auth_ft },
        { path: '/sitemap', feedbackTitle: messages.sitemap_ft },
        { path: '/search', feedbackTitle: messages.search_brdc },
      ],
    },
    videoAllowExternalsDefault: false,
    showTrasparenzaFields: false,
  };
  // Moved outside as config.settings.defaultBlockType keeps default value (slate) until object spread is concluded
  config.settings['volto-blocks-widget'] = {
    ...config.settings['volto-blocks-widget'],
    allowedBlocks: [
      ...(config.settings['volto-blocks-widget']?.allowedBlocks ?? []).filter(
        (block) => !['maps', 'text', 'slate'].includes(block),
      ),
      'break',
      'testo_riquadro_semplice',
      'testo_riquadro_immagine',
      'rssBlock',
      config.settings.defaultBlockType,
      //se si aggiunge un nuovo blocco, verificare che in edit non ci siano bottoni che provocano il submit della form. Se succede, gestirli con e.prevenDefault() e.stopPropagation().
      // Se sono bottoni semantic basta mettere type="button"
    ],

    showRestricted: false,
  };

  config.settings.nonContentRoutes = config.settings.nonContentRoutes.filter(
    (route) => route !== '/contact-form' && route !== '/diff',
  );
  config.settings.nonContentRoutes.push(/\/diff$/);
  config.settings.nonContentRoutes.push('/diff\\?');
  config.settings.nonContentRoutes.push('/release-log');

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
      blockSchema: schemaListing,
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
      hasOwnFocusManagement: true,
      sidebarTab: 1,
    },
    html: {
      ...config.blocks.blocksConfig.html,
      sidebarTab: 1,
    },
    rssBlock,
    maps: {
      ...config.blocks.blocksConfig.maps,
      restricted: true,
    },
    search: {
      ...config.blocks.blocksConfig.search,
      icon: searchIcon,
      variations: [
        {
          id: 'facetsRightSide',
          title: 'Colonna a destra',
          view: RightColumnFacets,
          isDefault: true,
        },
        {
          id: 'facetsLeftSide',
          title: 'Colonna a sinistra',
          view: LeftColumnFacets,
          isDefault: false,
        },
      ],
    },
  };
  config.blocks = {
    ...config.blocks,
    blocksConfig: { ...config.blocks.blocksConfig, ...customBlocks },
    groupBlocksOrder: config.blocks.groupBlocksOrder.concat(customBlocksOrder),
    initialBlocks: { ...config.blocks.initialBlocks, ...customInitialBlocks },
    requiredBlocks: [...config.blocks.requiredBlocks, ...customRequiredBlocks],
    showEditBlocksInBabelView: true,
  };

  //per avere la conf dei blocchi anche nel blocco grid, altrimenti nel blocco grid prende la conf base di volto.
  config.blocks.blocksConfig.gridBlock = {
    ...config.blocks.blocksConfig.gridBlock,
    blocksConfig: config.blocks.blocksConfig,
  };

  removeListingVariation(config, 'default'); // removes default volto template, because it will be overrided
  removeListingVariation(config, 'summary'); // removes summary volto template, because is unused
  removeListingVariation(config, 'imageGallery'); // removes imageGallery volto template, because we have our photoGallery template

  // BUG#10398
  // We chose to disallow leadimage block usage in editor. If you want it back someday,
  // comment out the following line and add the leadimage behavior in Document.xml file
  delete config.blocks.blocksConfig['leadimage'];

  // Remove Horizontal Menu variation of TOC Block
  config.blocks.blocksConfig.toc.variations =
    config.blocks.blocksConfig.toc.variations.filter(
      (v) => v.id !== 'horizontalMenu',
    );

  // COMPONENTS
  config.components = {
    ...config.components,
    BlockExtraTags: { component: () => null },
    Image: {
      component: ImageWithErrors,
    },
    Teaser: {
      component: ItaliaTeaserBody,
    },
  };
  config.registerComponent({
    name: 'SiteSettingsExtras',
    component: SiteSettingsExtras,
  });

  // REDUCERS
  config.addonReducers = {
    ...config.addonReducers,
    ...reducers,
  };

  // ROUTES
  config.addonRoutes = [
    ...config.addonRoutes,
    {
      path: '/**/search',
      component: Search,
      breadcrumbs_title: messages.search_brdc,
    },
    {
      path: ['/login', '/**/login'],
      component: LoginAgid,
    },
    {
      path: ['/controlpanel/release-log', '/release-log'],
      component: ReleaseLog,
    },
  ];

  return config;
}
