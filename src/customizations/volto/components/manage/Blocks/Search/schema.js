/* CUSTOMIZATIONS:
  - Customized schema
*/
import config from '@plone/volto/registry';
import { defineMessages } from 'react-intl';
import { cloneDeep } from 'lodash';
import {
  hasNonValueOperation,
  hasDateOperation,
} from '@plone/volto/components/manage/Blocks/Search/utils';

// TODO: sposta nella config se riesci
const messages = defineMessages({
  searchBlock: {
    id: 'Search block',
    defaultMessage: 'Search block',
  },
  controls: {
    id: 'Controls',
    defaultMessage: 'Controls',
  },
  baseSearchQuery: {
    id: 'Base search query',
    defaultMessage: 'Base search query',
  },
  sectionTitle: {
    id: 'Section title',
    defaultMessage: 'Section title',
  },
  headline: {
    id: 'Headline',
    defaultMessage: 'Headline',
  },
  searchInputPrompt: {
    id: 'Search input label',
    defaultMessage: 'Search input label',
  },
  showSearchInput: {
    id: 'Show search input?',
    defaultMessage: 'Show search input?',
  },
  showSearchButtonTitle: {
    id: 'Show search button?',
    defaultMessage: 'Show search button?',
  },
  showSearchButtonDescription: {
    id: 'The button presence disables the live search, the query is issued when you press ENTER',
    defaultMessage:
      'The button presence disables the live search, the query is issued when you press ENTER',
  },
  searchButtonLabel: {
    id: 'Search button label',
    defaultMessage: 'Search button label',
  },
  searchButtonPlaceholder: {
    id: 'Search',
    defaultMessage: 'Search',
  },
  facets: {
    id: 'Facets',
    defaultMessage: 'Facets',
  },
  facetsHelper: {
    id: 'facetsHelper',
    defaultMessage:
      'Filtri di ricerca aggiuntivi, configurabili e riordinabili, con la possibilità di utilizzare i seguenti widget: Menu a tendina (selezione singola o multipla), Checkbox (selezione singola o multipla), Selettore date, Toggle. Se aggiunti, verranno mostrati nella colonna (sinistra o destra a seconda della variazione scelta). Nel caso siano compilati i campi testuali da mostrare nella colonna, verranno mostrati sotto i suddetti.',
  },
  textColumn: {
    id: 'textColumn',
    defaultMessage: 'Testo della colonna laterale',
  },
  facet: {
    id: 'Facet',
    defaultMessage: 'Facet',
  },
  label: {
    id: 'Label',
    defaultMessage: 'Label',
  },
  labelHelper: {
    id: 'labelHelper',
    defaultMessage:
      'Etichetta del campo, se lasciato vuoto, verrà mostrato il nome del criterio di filtro selezionato.',
  },
  field: {
    id: 'Field',
    defaultMessage: 'Criterio',
  },
  fieldHelper: {
    id: 'fieldHelper',
    defaultMessage: 'Seleziona il criterio secondo cui filtrare.',
  },
  multipleChoices: {
    id: 'Multiple choices?',
    defaultMessage: 'Multiple choices?',
  },
  hideFacetTitle: {
    id: 'Hide facet?',
    defaultMessage: 'Hide facet?',
  },
  hideFacetDescription: {
    id: 'Hidden facets will still filter the results if proper parameters are passed in URLs',
    defaultMessage:
      'Hidden facets will still filter the results if proper parameters are passed in URLs',
  },
  facetWidget: {
    id: 'Facet widget',
    defaultMessage: 'Facet widget',
  },
  facetWidgetHelper: {
    id: 'facetWidgetHelper',
    defaultMessage: 'Tipologia di widget da utilizzare per il filtro',
  },
  listingTemplateOptions: {
    id: 'listingTemplateOptions',
    defaultMessage: 'Opzioni template',
  },
  availableViews: {
    id: 'availableViews',
    defaultMessage: 'Available views',
  },
  showTotalResults: {
    id: 'Show total results',
    defaultMessage: 'Show total results',
  },
  show_block_bg: {
    id: 'Mostra lo sfondo del blocco',
    defaultMessage: 'Mostra lo sfondo del blocco',
  },
  columnTextTitle: {
    id: 'columnTextTitle',
    defaultMessage: 'Intestazione della colonna',
  },
  columnTextTitleHelper: {
    id: 'columnTextTitleHelper',
    defaultMessage:
      'Intestazione della colonna, che viene mostrata come primo elemento della colonna laterale se compilato.',
  },
  columnText: {
    id: 'columnText',
    defaultMessage: 'Testo della colonna',
  },
  columnTextHelper: {
    id: 'columnTextHelper',
    defaultMessage:
      'Testo libero visibile nella colonna, che viene mostrato prima dei filtri (nel caso in cui siano configurati) se compilato.',
  },
  LinkTitle: {
    id: 'Link title',
    defaultMessage: 'Link Title',
  },
  LinkTo: {
    id: 'Link to',
    defaultMessage: 'Link to',
  },
  usePloneRanking: {
    id: "Usa l'ordinamento dei risultati di Plone",
    defaultMessage: "Usa l'ordinamento dei risultati di Plone",
  },
  usePloneRankingDescription: {
    id: "Usa l'ordinamento dei risultati di Plone - descrizione",
    defaultMessage:
      "Se impostato, nel momento in cui un utente effettua una ricerca testuale per parola chiave, non viene usato l'ordinamento di default impostato nella sezione 'Ricerca iniziale', ma l'ordinamento di Plone in base all'ordine di importanza dei risultati da esso stabilito.",
  },
});

const enhanceSchema = (originalSchema, formData) => {
  const extensionName = 'facetWidgets';
  const extensionType = 'type'; // property name in stored block data
  // TODO: decidere se li vogliamo tutti questi facet, alcuni non hanno
  // i corrispettivi di componenti per design-react-kit e son da fare a mano
  const variations =
    config.blocks.blocksConfig.search.extensions[extensionName].types;

  const activeItemName = formData?.[extensionType];
  let activeItem = variations?.find((item) => item.id === activeItemName);
  if (!activeItem) activeItem = variations?.find((item) => item.isDefault);

  const schemaEnhancer = activeItem?.['schemaEnhancer'];

  let schema = schemaEnhancer
    ? schemaEnhancer({ schema: cloneDeep(originalSchema), formData })
    : cloneDeep(originalSchema);

  return schema;
};

const FacetSchema = ({ intl }) => ({
  title: intl.formatMessage(messages.facet),
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['title', 'field', 'type', 'hidden'],
    },
  ],
  properties: {
    title: {
      title: intl.formatMessage(messages.label),
      description: intl.formatMessage(messages.labelHelper),
    },
    field: {
      title: intl.formatMessage(messages.field),
      description: intl.formatMessage(messages.fieldHelper),
      widget: 'select_querystring_field',
      vocabulary: { '@id': 'plone.app.vocabularies.MetadataFields' },
      filterOptions: (options) => {
        // Only allows indexes that provide simple, fixed vocabularies.
        // This should be improved, together with the facets. The querystring
        // widget implementation should serve as inspiration for those dynamic
        // types of facets.
        return Object.assign(
          {},
          ...Object.keys(options).map((k) =>
            Object.keys(options[k].values || {}).length ||
            hasNonValueOperation(options[k].operations) ||
            hasDateOperation(options[k].operations)
              ? { [k]: options[k] }
              : {},
          ),
        );
      },
    },
    multiple: {
      type: 'boolean',
      title: intl.formatMessage(messages.multipleChoices),
      default: false,
    },
    hidden: {
      type: 'boolean',
      title: intl.formatMessage(messages.hideFacetTitle),
      default: false,
      description: intl.formatMessage(messages.hideFacetDescription),
    },
    type: {
      title: intl.formatMessage(messages.facetWidget),
      description: intl.formatMessage(messages.facetWidgetHelper),
      choices:
        config.blocks.blocksConfig.search.extensions.facetWidgets.types.map(
          ({ id, title }) => [
            id,
            `${intl.formatMessage({ id: id, defaultMessage: title })}`,
          ],
        ),
      defaultValue:
        config.blocks.blocksConfig.search.extensions.facetWidgets.types.find(
          ({ isDefault }) => isDefault,
        ).id,
    },
  },
  required: ['field'],
});

const SearchSchema = ({ data = {}, intl }) => {
  return {
    title: intl.formatMessage(messages.searchBlock),
    id: 'search',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['headline', 'show_block_bg'],
      },
      {
        id: 'searchquery',
        title: intl.formatMessage(messages.baseSearchQuery),
        fields: ['query'],
      },
      {
        id: 'listingTemplateOptions',
        title: intl.formatMessage(messages.listingTemplateOptions),
        fields: [],
      },
      {
        id: 'columnText',
        title: intl.formatMessage(messages.textColumn),
        fields: [
          'columnTextTitle',
          'columnText',
          'linkTitleColumn',
          'linkHrefColumn',
        ],
      },
      {
        id: 'facets',
        title: intl.formatMessage(messages.facets),
        fields: ['facetsTitle', 'facets'],
      },
      {
        id: 'controls',
        title: intl.formatMessage(messages.controls),
        fields: [
          'showSearchInput',
          ...(data.showSearchInput ?? true ? ['showSearchButton'] : []),
          // ...(data.showSearchInput ? ['searchInputPrompt'] : []),
          // ...(data.showSearchButton ? ['searchButtonLabel'] : []),
          'usePloneRanking',
          'showTotalResults',
        ],
      },
    ],
    properties: {
      headline: {
        title: intl.formatMessage(messages.headline),
      },
      show_block_bg: {
        title: intl.formatMessage(messages.show_block_bg),
        type: 'boolean',
        default: false,
      },
      searchInputPrompt: {
        title: intl.formatMessage(messages.searchInputPrompt),
      },
      showSearchInput: {
        type: 'boolean',
        title: intl.formatMessage(messages.showSearchInput),
        default: true,
      },
      showSearchButton: {
        type: 'boolean',
        title: intl.formatMessage(messages.showSearchButtonTitle),
        description: intl.formatMessage(messages.showSearchButtonDescription),
      },
      showTotalResults: {
        type: 'boolean',
        title: intl.formatMessage(messages.showTotalResults),
        default: true,
      },
      usePloneRanking: {
        type: 'boolean',
        title: intl.formatMessage(messages.usePloneRanking),
        description: intl.formatMessage(messages.usePloneRankingDescription),
        default: false,
      },
      searchButtonLabel: {
        title: intl.formatMessage(messages.searchButtonLabel),
        placeholder: intl.formatMessage(messages.searchButtonPlaceholder),
      },
      facets: {
        title: intl.formatMessage(messages.facets),
        widget: 'object_list',
        schema: FacetSchema({ intl }),
        schemaExtender: enhanceSchema,
        description: intl.formatMessage(messages.facetsHelper),
      },
      facetsTitle: {
        title: intl.formatMessage(messages.sectionTitle),
      },
      columnTextTitle: {
        title: intl.formatMessage(messages.columnTextTitle),
        description: intl.formatMessage(messages.columnTextTitleHelper),
      },
      columnText: {
        title: intl.formatMessage(messages.columnText),
        description: intl.formatMessage(messages.columnTextHelper),
        type: 'string',
        widget: 'richtext',
      },
      linkTitleColumn: {
        title: intl.formatMessage(messages.LinkTitle),
      },
      linkHrefColumn: {
        title: intl.formatMessage(messages.LinkTo),
        widget: 'object_browser',
        mode: 'link',
        selectedItemAttrs: ['Title', 'Description'],
        allowExternals: false,
      },
      query: {
        title: 'Query',
      },
    },
    required: [],
  };
};

export default SearchSchema;
