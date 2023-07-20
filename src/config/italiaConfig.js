import menuSVG from '@plone/volto/icons/menu.svg';
import menuAltSVG from '@plone/volto/icons/menu-alt.svg';
import navSVG from '@plone/volto/icons/nav.svg';
import contentSVG from '@plone/volto/icons/content.svg';
import bookSVG from '@plone/volto/icons/book.svg';
import shareSVG from '@plone/volto/icons/share.svg';
import searchIcon from 'bootstrap-italia/src/svg/it-search.svg';

import { Search } from '@plone/volto/components';

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
import redraft from 'redraft';
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

import applyRichTextConfig from 'design-comuni-plone-theme/config/RichTextEditor/config';

import gdprPrivacyPanelConfig from 'design-comuni-plone-theme/config/volto-gdpr-privacy-defaultPanelConfig.js';

import { schemaListing } from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/schema.js';

import reducers from 'design-comuni-plone-theme/reducers';

export default function applyConfig(voltoConfig) {
  let config = applyRichTextConfig(voltoConfig);

  /******************************************************************************
   * SETTINGS
   ******************************************************************************/
  const voltoSentryOptions = voltoConfig.settings.sentryOptions;

  config.settings = {
    ...config.settings,
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
    isFooterCollapsed: false, // false(default) -> vedere il footer automatico esploso | true -> implodere il footer menu automatico
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
      //criticalCssPath: 'node_modules/design-comuni-plone-theme/public/critical.css', //valido solo per i siti figli. Rimosso temporaneamente perchè fa un brutto effetto al caricamento della pagina
      extractScripts: {
        ...config.settings.serverConfig.extractScripts,
        errorPages: true,
      },
    },
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
    controlPanelsIcons: {
      ...config.settings.controlPanelsIcons,
      'dropdown-menu-settings': menuSVG,
      'secondary-menu-settings': menuAltSVG,
      'subsites-settings': navSVG,
      'design-plone-settings': contentSVG,
      'bandi-settings': bookSVG,
      'social-settings': shareSVG,
    },
    defaultBlockType: 'text',
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
      enableFeedbackFormCaptcha: false,
      enableVoltoFormBlockCaptcha: true,
      splitMegamenuColumns: true, //se impostato a false, non spezza le colonne con intestazioni nel megamenu
      footerNavigationDepth: 2, //valori possibili: [1,2]. Se impostato ad 1 non verranno mostrati nel footer i link agli elementi contenuti nelle sezioni di primo livello.
      markSpecialLinks: true, // se impostato a false, non marca con icona i link esterni
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
    ],
    maxFileUploadSize: null,
    'volto-blocks-widget': {
      allowedBlocks: [
        ...(config.settings['volto-blocks-widget']?.allowedBlocks ?? []).filter(
          (block) => block.id !== 'maps',
        ),
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
    },
    videoAllowExternalsDefault: false,
    showTrasparenzaFields: false,
  };

  config.settings.nonContentRoutes = config.settings.nonContentRoutes.filter(
    (route) => route !== '/contact-form',
  );

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
      sidebarTab: 1,
    },
    html: {
      ...config.blocks.blocksConfig.html,
      sidebarTab: 1,
    },
    rssBlock,
    text: {
      ...config.blocks.blocksConfig.text,
      restricted: false,
    },
    slate: {
      ...config.blocks.blocksConfig.slate,
      restricted: true,
    },
    table: {
      ...config.blocks.blocksConfig.table,
      restricted: false,
    },
    slateTable: {
      ...config.blocks.blocksConfig.slateTable,
      restricted: true,
    },
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

  // TOC block anchors not working, customizing tocEntry
  // to also return draftJS block id
  config.settings.slate = {
    ...(config.settings.slate ?? {}),
    topLevelTargetElements: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  };
  config.blocks.blocksConfig.text = {
    ...config.blocks.blocksConfig.text,
    tocEntry: (block = {}) => {
      const draft = redraft(
        block.text,
        config.settings.richtextViewSettings.ToHTMLRenderers,
        config.settings.richtextViewSettings.ToHTMLOptions,
      );
      const type = draft?.[0]?.[0]?.type;

      return config.settings.slate.topLevelTargetElements.includes(type)
        ? [
            parseInt(type.slice(1)),
            block.text.blocks[0].text,
            block.text.blocks[0].key,
          ]
        : null;
    },
  };
  // Remove Horizontal Menu variation of TOC Block
  config.blocks.blocksConfig.toc.variations = config.blocks.blocksConfig.toc.variations.filter(
    (v) => v.id !== 'horizontalMenu',
  );

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
    },
    {
      path: ['/login', '/**/login'],
      component: LoginAgid,
    },
  ];

  return config;
}
