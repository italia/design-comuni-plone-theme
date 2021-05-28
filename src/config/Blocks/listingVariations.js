import SimpleCardTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/SimpleCard/SimpleCardTemplate';

import CardWithImageTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/CardWithImageTemplate';
import CardWithImageTemplateSkeleton from '@italia/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/CardWithImageTemplateSkeleton';
import CardWithImageTemplateOptions from '@italia/components/ItaliaTheme/Blocks/Listing/Options/CardWithImageTemplateOptions';

import InEvidenceTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/InEvidenceTemplate';
import InEvidenceTemplateSkeleton from '@italia/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/InEvidenceTemplateSkeleton';
import InEvidenceTemplateOptions from '@italia/components/ItaliaTheme/Blocks/Listing/Options/InEvidenceTemplateOptions';

import ContentInEvidenceTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/ContentInEvidenceTemplate';
import ContentInEvidenceTemplateSkeleton from '@italia/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/ContentInEvidenceTemplateSkeleton';

import RibbonCardTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/RibbonCardTemplate';
import RibbonCardTemplateSkeleton from '@italia/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/RibbonCardTemplateSkeleton';
import RibbonCardTemplateOptions from '@italia/components/ItaliaTheme/Blocks/Listing/Options/RibbonCardTemplateOptions';

import MapTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/MapTemplate';
import MapTemplateSkeleton from '@italia/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/MapTemplateSkeleton';
import MapTemplateOptions from '@italia/components/ItaliaTheme/Blocks/Listing/Options/MapTemplateOptions';

import SmallBlockLinksTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/SmallBlockLinksTemplate';
import SmallBlockLinksTemplateSkeleton from '@italia/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/SmallBlockLinksTemplateSkeleton';

import CompleteBlockLinksTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/CompleteBlockLinksTemplate';
import CompleteBlockLinksTemplateSkeleton from '@italia/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/CompleteBlockLinksTemplateSkeleton';
import CompleteBlockLinksTemplateTemplateOptions from '@italia/components/ItaliaTheme/Blocks/Listing/Options/CompleteBlockLinksTemplateTemplateOptions';

import PhotogalleryTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/PhotogalleryTemplate';
import PhotogalleryTemplateSkeleton from '@italia/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/PhotogalleryTemplateSkeleton';

import SliderTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/SliderTemplate';
import SliderTemplateSkeleton from '@italia/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/SliderTemplateSkeleton';

import GridGalleryTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/GridGalleryTemplate';
import GridGalleryTemplateSkeleton from '@italia/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/GridGalleryTemplateSkeleton';

import BandiInEvidenceTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/BandiInEvidenceTemplate';
import BandiInEvidenceTemplateSkeleton from '@italia/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/BandiInEvidenceTemplateSkeleton';
import BandiInEvidenceTemplateOptions from '@italia/components/ItaliaTheme/Blocks/Listing/Options/BandiInEvidenceTemplateOptions';

import AmministrazioneTrasparenteTablesTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/AmministrazioneTrasparenteTablesTemplate';
import AmministrazioneTrasparenteTablesTemplateSkeleton from '@italia/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/AmministrazioneTrasparenteTablesTemplateSkeleton';

const italiaListingVariations = [
  {
    id: 'simpleCard',
    isDefault: true,
    title: 'Card semplice',
    template: SimpleCardTemplate,
  },
  {
    id: 'cardWithImageTemplate',
    isDefault: false,
    title: 'Card con immagine',
    template: CardWithImageTemplate,
    skeleton: CardWithImageTemplateSkeleton,
    templateOptions: CardWithImageTemplateOptions,
  },
  {
    id: 'inEvidenceTemplate',
    isDefault: false,
    title: 'In evidenza',
    template: InEvidenceTemplate,
    skeleton: InEvidenceTemplateSkeleton,
    templateOptions: InEvidenceTemplateOptions,
  },
  {
    id: 'contentInEvidenceTemplate',
    isDefault: false,
    title: 'Contenuto in evidenza',
    template: ContentInEvidenceTemplate,
    skeleton: ContentInEvidenceTemplateSkeleton,
  },
  {
    id: 'ribbonCardTemplate',
    isDefault: false,
    title: 'Card con nastro',
    template: RibbonCardTemplate,
    skeleton: RibbonCardTemplateSkeleton,
    templateOptions: RibbonCardTemplateOptions,
  },
  {
    id: 'mapTemplate',
    isDefault: false,
    title: 'Mappa',
    template: MapTemplate,
    skeleton: MapTemplateSkeleton,
    templateOptions: MapTemplateOptions,
  },
  {
    id: 'smallBlockLinksTemplate',
    isDefault: false,
    title: 'Blocco link solo immagini',
    template: SmallBlockLinksTemplate,
    skeleton: SmallBlockLinksTemplateSkeleton,
  },
  {
    id: 'completeBlockLinksTemplate',
    isDefault: false,
    title: 'Blocco link completo',
    template: CompleteBlockLinksTemplate,
    skeleton: CompleteBlockLinksTemplateSkeleton,
    templateOptions: CompleteBlockLinksTemplateTemplateOptions,
  },
  {
    id: 'photogallery',
    isDefault: false,
    title: 'Photogallery',
    template: PhotogalleryTemplate,
    skeleton: PhotogalleryTemplateSkeleton,
  },
  {
    id: 'slider',
    isDefault: false,
    title: 'Slider',
    template: SliderTemplate,
    skeleton: SliderTemplateSkeleton,
  },
  {
    id: 'gridGalleryTemplate',
    isDefault: false,
    title: 'Gallery a griglia',
    template: GridGalleryTemplate,
    skeleton: GridGalleryTemplateSkeleton,
  },
  {
    id: 'bandiInEvidenceTemplate',
    isDefault: false,
    title: 'Bandi',
    template: BandiInEvidenceTemplate,
    skeleton: BandiInEvidenceTemplateSkeleton,
    templateOptions: BandiInEvidenceTemplateOptions,
  },
  {
    id: 'amministrazioneTrasparenteTablesTemplate',
    isDefault: false,
    title: 'Tabelle Amministrazione Trasparente',
    template: AmministrazioneTrasparenteTablesTemplate,
    skeleton: AmministrazioneTrasparenteTablesTemplateSkeleton,
  },

  // ****** Example: ******
  // { id:template_id,
  //   isDefault: false,
  //   title: 'Template label',
  //   template: TemplateComponent,
  //   skeleton: TemplateSkeletonComponent,
  //   templateOptions: TemplateSidebarOptionsComponent
  // },
];

export const getItaliaListingVariations = (config) => {
  return italiaListingVariations;
};
export const removeListingVariation = (config, id) => {
  let indexOfVariation = -1;
  indexOfVariation = config.blocks?.blocksConfig?.listing?.variations?.findIndex(
    (x) => x.id === id,
  );
  if (indexOfVariation >= 0) {
    config.blocks.blocksConfig.listing.variations.splice(indexOfVariation, 1);
  }
};
