import loadable from '@loadable/component';

/**
 * Add your components here.
 * @module components
 * @example
 * import Footer from 'design-comuni-plone-theme/components/ItaliaTheme/Footer/Footer';
 *
 * export {
 *   Footer,
 * };
 */

/********* WIDGETS ********* */
export {
  FileWidget,
  TextEditorWidget,
  LinkToWidget,
  ColorListWidget,
  PathFiltersWidget,
  LocationFiltersWidget,
  CanaleDigitaleWidget,
} from 'design-comuni-plone-theme/components/ItaliaTheme/manage/Widgets';

/********* ICONS ********* */
export getItemIcon from 'design-comuni-plone-theme/components/ItaliaTheme/Icons/common/common';
export const Icon = loadable(() =>
  import(
    /* webpackChunkName: "DCPTIcons" */ 'design-comuni-plone-theme/components/ItaliaTheme/Icons/Icon'
  ),
);
export SectionIcon from 'design-comuni-plone-theme/components/ItaliaTheme/Icons/SectionIcon';
export const FontAwesomeIcon = loadable(() =>
  import(
    /* webpackChunkName: "DCPTIcons" */ 'design-comuni-plone-theme/components/ItaliaTheme/Icons/FontAwesomeIcon'
  ),
);

/********* COMMONS ********* */
export CardCategory from 'design-comuni-plone-theme/components/ItaliaTheme/Cards/CardCategory';
export RemoveBodyClass from 'design-comuni-plone-theme/components/ItaliaTheme/RemoveBodyClass/RemoveBodyClass';
export CardPersona from 'design-comuni-plone-theme/components/ItaliaTheme/Cards/CardPersona';
export GalleryPreview from 'design-comuni-plone-theme/components/ItaliaTheme/GalleryPreview/GalleryPreview';

/********* LAYOUT ********* */
export LanguageSelector from 'design-comuni-plone-theme/components/ItaliaTheme/LanguageSelector/LanguageSelector';
export HeaderSlim from 'design-comuni-plone-theme/components/ItaliaTheme/Header/HeaderSlim/HeaderSlim';
export HeaderSlimRightZone from 'design-comuni-plone-theme/components/ItaliaTheme/Header/HeaderSlim/HeaderSlimRightZone';
export HeaderLogin from 'design-comuni-plone-theme/components/ItaliaTheme/Header/HeaderSlim/HeaderLogin';
export LoginButton from 'design-comuni-plone-theme/components/ItaliaTheme/Header/HeaderSlim/LoginButton';
export TertiaryMenu from 'design-comuni-plone-theme/components/ItaliaTheme/Header/HeaderSlim/TertiaryMenu';
export UserLoggedMenu from 'design-comuni-plone-theme/components/ItaliaTheme/Header/HeaderSlim/UserLoggedMenu';
export HeaderCenter from 'design-comuni-plone-theme/components/ItaliaTheme/Header/HeaderCenter';
export SocialHeader from 'design-comuni-plone-theme/components/ItaliaTheme/Header/SocialHeader';
export SubsiteHeader from 'design-comuni-plone-theme/components/ItaliaTheme/Header/SubsiteHeader';
export ParentSiteMenu from 'design-comuni-plone-theme/components/ItaliaTheme/Header/ParentSiteMenu';
export HeaderSearch from 'design-comuni-plone-theme/components/ItaliaTheme/Header/HeaderSearch/HeaderSearch';
export SearchModal from 'design-comuni-plone-theme/components/ItaliaTheme/Header/HeaderSearch/SearchModal';
export const SearchTopics = loadable(() =>
  import(
    /* webpackChunkName: "DCPTSearch" */ 'design-comuni-plone-theme/components/ItaliaTheme/Search/SearchTopics'
  ),
);
export const SearchCTs = loadable(() =>
  import(
    /* webpackChunkName: "DCPTSearch" */ 'design-comuni-plone-theme/components/ItaliaTheme/Search/SearchCTs'
  ),
);
export const SearchResultItem = loadable(() =>
  import(
    /* webpackChunkName: "DCPTSearch" */ 'design-comuni-plone-theme/components/ItaliaTheme/Search/ResultItem'
  ),
);
export const SearchSections = loadable(() =>
  import(
    /* webpackChunkName: "DCPTSearch" */ 'design-comuni-plone-theme/components/ItaliaTheme/Search/SearchSections'
  ),
);
export MegaMenu from 'design-comuni-plone-theme/components/ItaliaTheme/MegaMenu/MegaMenu';
export MenuSecondary from 'design-comuni-plone-theme/components/ItaliaTheme/MenuSecondary/MenuSecondary';
export LoginAgid from 'design-comuni-plone-theme/components/ItaliaTheme/LoginAgid/LoginAgid';
export LoginAgidButtons from 'design-comuni-plone-theme/components/ItaliaTheme/LoginAgid/LoginAgidButtons';
export Logo from 'design-comuni-plone-theme/components/ItaliaTheme/Logo/Logo';
export BrandText from 'design-comuni-plone-theme/components/ItaliaTheme/BrandText/BrandText';
export BrandTextFooter from 'design-comuni-plone-theme/components/ItaliaTheme/BrandTextFooter/BrandTextFooter';
export LogoFooter from 'design-comuni-plone-theme/components/ItaliaTheme/LogoFooter/LogoFooter';
export FooterPNRRLogo from 'design-comuni-plone-theme/components/ItaliaTheme/Footer/FooterPNRRLogo';
export FooterMain from 'design-comuni-plone-theme/components/ItaliaTheme/Footer/FooterMain';
export FooterInfos from 'design-comuni-plone-theme/components/ItaliaTheme/Footer/FooterInfos';
export FooterNavigation from 'design-comuni-plone-theme/components/ItaliaTheme/Footer/FooterNavigation';
export FooterSmall from 'design-comuni-plone-theme/components/ItaliaTheme/Footer/FooterSmall';
export FooterNewsletterSubscribe from 'design-comuni-plone-theme/components/ItaliaTheme/Footer/FooterNewsletterSubscribe';
export FooterSocials from 'design-comuni-plone-theme/components/ItaliaTheme/Footer/FooterSocials';
export SubsiteFooter from 'design-comuni-plone-theme/components/ItaliaTheme/Footer/SubsiteFooter';
export Pagination from 'design-comuni-plone-theme/components/ItaliaTheme/Pagination/Pagination';
export SkipLinks from 'design-comuni-plone-theme/components/ItaliaTheme/SkipLinks/SkipLinks';
export Breadcrumbs from 'design-comuni-plone-theme/components/ItaliaTheme/Breadcrumbs/Breadcrumbs';
export FeedbackForm from 'design-comuni-plone-theme/components/ItaliaTheme/CustomerSatisfaction/FeedbackForm';
export AnswersStep from 'design-comuni-plone-theme/components/ItaliaTheme/CustomerSatisfaction/Steps/AnswersStep';
export CommentsStep from 'design-comuni-plone-theme/components/ItaliaTheme/CustomerSatisfaction/Steps/CommentsStep';

/********* BLOCKS ********* */
export { Sidebar as AlertSidebar } from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Alert'; //serve per retrocompatibilità di eventuali customizzazioni del componente di edit
export { Sidebar as BlockSearchSectionsSidebar } from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/SearchSections'; //serve per retrocompatibilità di eventuali customizzazioni del componente di edit
export BlockSearchSectionsBody from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/SearchSections/Body';
export ArgumentsInEvidenceBackground from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/ArgumentsInEvidence/Background';
export SearchSectionsBackground from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/SearchSections/Background';
export BackgroundUser from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/SearchSections/BackgroundUser';
export Skeleton from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/Skeleton';
export CardCalendar from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/Commons/CardCalendar';
export RassegnaInfo from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/Commons/RassegnaInfo';
export ListingCategory from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/Commons/ListingCategory';
export ListingText from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/Commons/ListingText';
export ListingLinkMore from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/Commons/ListingLinkMore';

export ListingImage, {
  getListingImageBackground,
} from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/Commons/ListingImage';

/*Slider*/
export SingleSlideWrapper from 'design-comuni-plone-theme/components/ItaliaTheme/Slider/SingleSlideWrapper';
export CarouselWrapper from 'design-comuni-plone-theme/components/ItaliaTheme/Slider/CarouselWrapper';
export ButtonPlayPause from 'design-comuni-plone-theme/components/ItaliaTheme/Slider/ButtonPlayPause';
export NextArrow from 'design-comuni-plone-theme/components/ItaliaTheme/Slider/NextArrow';
export PrevArrow from 'design-comuni-plone-theme/components/ItaliaTheme/Slider/PrevArrow';
/********* ERROR PAGES ********* */
export Unauthorized from 'design-comuni-plone-theme/components/ItaliaTheme/Unauthorized/Unauthorized';
