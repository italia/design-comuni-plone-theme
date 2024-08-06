import loadable from '@loadable/component';

export RenderBlocks from 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/RenderBlocks';

export {
  RichTextRender,
  richTextHasContent,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/RichTextRender';

export const RichTextSection = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/RichTextSection'
    ),
);
export const RichText = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/RichText'
    ),
);

export const RelatedNewsArticles = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/RelatedNewsArticles'
    ),
);
export const RelatedArticles = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/RelatedArticles'
    ),
);
export const ArgumentIcon = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/Argument/ArgumentIcon'
    ),
);
export const ContactLink = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/ContactLink'
    ),
);

export const TextOrBlocks = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/TextOrBlocks'
    ),
);

export const Sharing = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/Sharing'
    ),
);
export const Actions = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/Actions'
    ),
);
export const SideMenu = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/SideMenu'
    ),
);
export const Gallery = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/Gallery'
    ),
);
export const Dates = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/Dates'
    ),
);
export const HelpBox = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/HelpBox'
    ),
);
export const EmbeddedVideo = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/EmbeddedVideo'
    ),
);
export const Events = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/Events'
    ),
);
export const Venue = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/Venue'
    ),
);
export const ContentTypeViewSections = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/ContentTypeViewSections'
    ),
);

export const PageHeader = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/PageHeader/PageHeader'
    ),
);
export const PageHeaderDates = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/PageHeader/PageHeaderDates'
    ),
);
export const PageHeaderExtend = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/PageHeader/PageHeaderExtend'
    ),
);
export const PageHeaderEventDates = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Evento" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/PageHeader/PageHeaderEventDates'
    ),
);
export const PageHeaderPersona = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Persona" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/PageHeader/PageHeaderPersona'
    ),
);
export const PageHeaderBando = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Bando" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/PageHeader/PageHeaderBando'
    ),
);
export const PageHeaderNewsItem = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Notizia" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/PageHeader/PageHeaderNewsItem'
    ),
);
export const PageHeaderStatoServizio = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Servizio" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/PageHeader/PageHeaderStatoServizio'
    ),
);
export const PageHeaderLinkServizio = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Servizio" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/PageHeader/PageHeaderLinkServizio'
    ),
);
export const PageHeaderTassonomiaArgomenti = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/PageHeader/PageHeaderTassonomiaArgomenti'
    ),
);
export const PageHeaderDocumento = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Documento" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/PageHeader/PageHeaderDocumento'
    ),
);
export const Attachment = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/Attachment'
    ),
);
export const Attachments = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/Attachments'
    ),
);
export const CuredBy = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/CuredBy'
    ),
);
export const Metadata = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/Metadata'
    ),
);
export const PageMetadata = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/PageMetadata'
    ),
);
export const SearchSectionForm = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Page" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/SearchSectionForm'
    ),
);
export const PageHeaderNav = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Page" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/PageHeaderNav'
    ),
);
export const SkipToMainContent = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/SkipToMainContent'
    ),
);
export const TrasparenzaFields = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Servizio" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/TrasparenzaFields'
    ),
);

export const Modules = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/Modules'
    ),
);
export const Module = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/Module'
    ),
);

export const GenericCard = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/GenericCard'
    ),
);
export const NewsCard = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/NewsCard'
    ),
);
export const OfficeCard = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/OfficeCard'
    ),
);
export const ContactsCard = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/ContactsCard'
    ),
);

export const RelatedNews = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/RelatedNews'
    ),
);
export const WideImage = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/WideImage'
    ),
);
export const ContentImage = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/ContentImage'
    ),
);
export const VenuesSmall = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/VenuesSmall'
    ),
);
export const Locations = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/Locations'
    ),
);
export const LocationItem = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/LocationItem'
    ),
);
export const LocationsMap = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/LocationsMap'
    ),
);
export const SmallVenue = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/SmallVenue'
    ),
);
export const Sponsors = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/Sponsors'
    ),
);
export const RelatedItems = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/RelatedItems'
    ),
);
export const RelatedItemInEvidence = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/RelatedItemInEvidence/RelatedItemInEvidence'
    ),
);
export const DownloadFileFormat = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/DownloadFileFormat'
    ),
);
export const BandoStatus = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViewsCommons" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/BandoStatus'
    ),
);
export const BandoDates = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Bando" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/BandoDates'
    ),
);
