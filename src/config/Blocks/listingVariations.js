import SimpleCardTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/SimpleCard/SimpleCardTemplate';

import CardWithImageTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/CardWithImageTemplate';
import CardWithImageTemplateSkeleton from '@italia/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/CardWithImageTemplateSkeleton';

import InEvidenceTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/InEvidenceTemplate';
import InEvidenceTemplateSkeleton from '@italia/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/InEvidenceTemplateSkeleton';

import ContentInEvidenceTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/ContentInEvidenceTemplate';
import ContentInEvidenceTemplateSkeleton from '@italia/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/ContentInEvidenceTemplateSkeleton';

import RibbonCardTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/RibbonCardTemplate';
import RibbonCardTemplateSkeleton from '@italia/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/RibbonCardTemplateSkeleton';

import MapTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/MapTemplate';
import MapTemplateSkeleton from '@italia/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/MapTemplateSkeleton';

import SmallBlockLinksTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/SmallBlockLinksTemplate';
import SmallBlockLinksTemplateSkeleton from '@italia/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/SmallBlockLinksTemplateSkeleton';

import CompleteBlockLinksTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/CompleteBlockLinksTemplate';
import CompleteBlockLinksTemplateSkeleton from '@italia/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/CompleteBlockLinksTemplateSkeleton';

import PhotogalleryTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/PhotogalleryTemplate';
import PhotogalleryTemplateSkeleton from '@italia/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/PhotogalleryTemplateSkeleton';

import SliderTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/SliderTemplate';
import SliderTemplateSkeleton from '@italia/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/SliderTemplateSkeleton';

import GridGalleryTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/GridGalleryTemplate';
import GridGalleryTemplateSkeleton from '@italia/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/GridGalleryTemplateSkeleton';

import BandiInEvidenceTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/BandiInEvidenceTemplate';
import BandiInEvidenceTemplateSkeleton from '@italia/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/BandiInEvidenceTemplateSkeleton';

import SquaresImageTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/SquaresImageTemplate';
import SquaresImageTemplateSkeleton from '@italia/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/SquaresImageTemplateSkeleton';

// import AmministrazioneTrasparenteTablesTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/AmministrazioneTrasparenteTablesTemplate';
// import AmministrazioneTrasparenteTablesTemplateSkeleton from '@italia/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/AmministrazioneTrasparenteTablesTemplateSkeleton';

import {
  addSimpleCardTemplateOptions,
  addCardWithImageTemplateOptions,
  addInEvidenceTemplateOptions,
  addRibbonCardTemplateOptions,
  addMapTemplateOptions,
  addCompleteBlockLinksTemplateOptions,
  addBandiInEvidenceTemplateOptions,
  addDefaultOptions,
  addSliderTemplateOptions,
} from '@italia/config/Blocks/ListingOptions';

const italiaListingVariations = [
  {
    id: 'simpleCard',
    isDefault: true,
    title: 'Card semplice',
    template: SimpleCardTemplate,
    schemaEnhancer: ({ schema, formData, intl }) => {
      addSimpleCardTemplateOptions(schema, formData, intl);
      return schema;
    },
  },
  {
    id: 'cardWithImageTemplate',
    isDefault: false,
    title: 'Card con immagine',
    template: CardWithImageTemplate,
    skeleton: CardWithImageTemplateSkeleton,
    schemaEnhancer: ({ schema, formData, intl }) => {
      let pos = addDefaultOptions(schema, formData, intl);
      addCardWithImageTemplateOptions(schema, formData, intl, pos);
      return schema;
    },
  },
  {
    id: 'inEvidenceTemplate',
    isDefault: false,
    title: 'In evidenza',
    template: InEvidenceTemplate,
    skeleton: InEvidenceTemplateSkeleton,
    schemaEnhancer: ({ schema, formData, intl }) => {
      let pos = addDefaultOptions(schema, formData, intl);
      addInEvidenceTemplateOptions(schema, formData, intl, pos);
      return schema;
    },
  },
  {
    id: 'contentInEvidenceTemplate',
    isDefault: false,
    title: 'Contenuto in evidenza',
    template: ContentInEvidenceTemplate,
    skeleton: ContentInEvidenceTemplateSkeleton,
    schemaEnhancer: ({ schema, formData, intl }) => {
      /*let pos = */ addDefaultOptions(schema, formData, intl);
      return schema;
    },
  },
  {
    id: 'ribbonCardTemplate',
    isDefault: false,
    title: 'Card con nastro',
    template: RibbonCardTemplate,
    skeleton: RibbonCardTemplateSkeleton,
    schemaEnhancer: ({ schema, formData, intl }) => {
      let pos = addDefaultOptions(schema, formData, intl);
      addRibbonCardTemplateOptions(schema, formData, intl, pos);
      return schema;
    },
  },
  {
    id: 'quaresImageTemplate',
    isDefault: false,
    title: 'Quadratoni con immagine',
    template: SquaresImageTemplate,
    skeleton: SquaresImageTemplateSkeleton,
    schemaEnhancer: ({ schema, formData, intl }) => {
      /*let pos = */ addDefaultOptions(schema, formData, intl);
      return schema;
    },
  },
  {
    id: 'mapTemplate',
    isDefault: false,
    title: 'Mappa',
    template: MapTemplate,
    skeleton: MapTemplateSkeleton,
    schemaEnhancer: ({ schema, formData, intl }) => {
      let pos = addDefaultOptions(schema, formData, intl);
      addMapTemplateOptions(schema, formData, intl, pos);
      return schema;
    },
  },
  {
    id: 'smallBlockLinksTemplate',
    isDefault: false,
    title: 'Blocco link solo immagini',
    template: SmallBlockLinksTemplate,
    skeleton: SmallBlockLinksTemplateSkeleton,
    schemaEnhancer: ({ schema, formData, intl }) => {
      /*let pos = */ addDefaultOptions(schema, formData, intl);
      return schema;
    },
  },
  {
    id: 'completeBlockLinksTemplate',
    isDefault: false,
    title: 'Blocco link completo',
    template: CompleteBlockLinksTemplate,
    skeleton: CompleteBlockLinksTemplateSkeleton,
    schemaEnhancer: ({ schema, formData, intl }) => {
      let pos = addDefaultOptions(schema, formData, intl);
      addCompleteBlockLinksTemplateOptions(schema, formData, intl, pos);
      return schema;
    },
  },
  {
    id: 'photogallery',
    isDefault: false,
    title: 'Photogallery',
    template: PhotogalleryTemplate,
    skeleton: PhotogalleryTemplateSkeleton,
    schemaEnhancer: ({ schema, formData, intl }) => {
      /*let pos = */ addDefaultOptions(schema, formData, intl);
      return schema;
    },
  },
  {
    id: 'slider',
    isDefault: false,
    title: 'Slider',
    template: SliderTemplate,
    skeleton: SliderTemplateSkeleton,
    schemaEnhancer: ({ schema, formData, intl }) => {
      let pos = addDefaultOptions(schema, formData, intl);
      addSliderTemplateOptions(schema, formData, intl, pos);
      return schema;
    },
  },
  {
    id: 'gridGalleryTemplate',
    isDefault: false,
    title: 'Gallery a griglia',
    template: GridGalleryTemplate,
    skeleton: GridGalleryTemplateSkeleton,
    schemaEnhancer: ({ schema, formData, intl }) => {
      /*let pos = */ addDefaultOptions(schema, formData, intl);
      return schema;
    },
  },
  {
    id: 'bandiInEvidenceTemplate',
    isDefault: false,
    title: 'Bandi',
    template: BandiInEvidenceTemplate,
    skeleton: BandiInEvidenceTemplateSkeleton,
    schemaEnhancer: ({ schema, formData, intl }) => {
      let pos = addDefaultOptions(schema, formData, intl);
      addBandiInEvidenceTemplateOptions(schema, formData, intl, pos);
      return schema;
    },
  },
  //  {
  //    id: 'amministrazioneTrasparenteTablesTemplate',
  //    isDefault: false,
  //    title: 'Tabelle Amministrazione Trasparente',
  //    template: AmministrazioneTrasparenteTablesTemplate,
  //    skeleton: AmministrazioneTrasparenteTablesTemplateSkeleton,
  //    schemaEnhancer: ({ schema, formData, intl }) => {
  //      /*let pos = */ addDefaultOptions(schema, formData, intl);
  //      return schema;
  //    },
  // },

  // ****** Example: ******
  // { id:template_id,
  //   isDefault: false,
  //   title: 'Template label',
  //   template: TemplateComponent,
  //   skeleton: TemplateSkeletonComponent,
  //   schemaEnhancer: ({ schema, formData, intl }) => {
  //        let pos = addDefaultOptions(schema, formData, intl);
  //        return schema;
  //    },
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
