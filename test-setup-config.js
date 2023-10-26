/*
 * This is the mocked config registry loader for tests.
 * It uses some of the default (real) configuration,
 * (mainly) DraftJS one, to not differ too much from reality
 * Ideally, we should mock this ones as well at some point.
 * Views, Widgets and Blocks are mocked already, to keep
 * snapshot consistency and readability.
 */

import '@plone/volto/config';
import config from '@plone/volto/registry';
import applyItaliaConfig from './src';
import TextBlockView from '@plone/volto-slate/blocks/Text/TextBlockView';
import TextBlockEdit from '@plone/volto-slate/blocks/Text/TextBlockEdit';
import TextBlockSchema from '@plone/volto-slate/blocks/Text/TextBlockSchema';

//slate config need to exists for italiaConfig
config.set('settings', {
  ...config.settings,
  slate: {
    elements: {
      default: ({ attributes, children }) => <p {...attributes}>{children}</p>,
    },
    leafs: {},
    persistentHelpers: [],
    contextToolbarButtons: [],
    textblockExtensions: [],
    extensions: [],
    elementToolbarButtons: {},
    buttons: {},
    toolbarButtons: [],
    expandedToolbarButtons: [],
    htmlTagsToSlate: {},
    topLevelTargetElements: [],
  },
});

applyItaliaConfig(config);

config.set('settings', {
  ...config.settings,
  apiPath: 'http://localhost:8080/Plone',
  lazyBundles: {
    cms: [
      'prettierStandalone',
      'prettierParserHtml',
      'prismCore',
      'toastify',
      'reactSelect',
      'reactSortableHOC',
      'moment',
      'rrule',
      // 'diffLib',
    ],
  },
  apiExpanders: [],
  publicURL: 'http://localhost:3000',
});

function BaseWidget(name) {
  return (props) => (
    <div id={`mocked-field-${props.id}`} className={`mocked-${name}-widget`}>
      {props.title || 'No title'} - {props.description || 'No description'}
    </div>
  );
}

config.set('widgets', {
  ...config.widgets,
  id: {
    schema: BaseWidget('schema'),
    subjects: BaseWidget('subjects'),
    query: BaseWidget('query'),
    recurrence: BaseWidget('recurrence'),
    remoteUrl: BaseWidget('remoteurl'),
  },
  widget: {
    richtext: BaseWidget('richtext'),
    textarea: BaseWidget('textarea'),
    datetime: BaseWidget('datetime'),
    date: BaseWidget('date'),
    password: BaseWidget('password'),
    file: BaseWidget('file'),
    align: BaseWidget('align'),
    url: BaseWidget('url'),
    email: BaseWidget('email'),
    object_browser: BaseWidget('object_browser'),
  },
  vocabulary: {},
  factory: {},
  choices: BaseWidget('choices'),
  type: {
    boolean: BaseWidget('boolean'),
    array: BaseWidget('array'),
    object: BaseWidget('object'),
    datetime: BaseWidget('datetime'),
    date: BaseWidget('date'),
    password: BaseWidget('password'),
    number: BaseWidget('number'),
    integer: BaseWidget('integer'),
  },
  default: BaseWidget('default'),
});

config.set('experimental', {
  addBlockButton: {
    enabled: false,
  },
});

const slateBlockConfig = {
  id: 'slate',
  view: TextBlockView,
  edit: TextBlockEdit,
  schema: TextBlockSchema,
  blockHasValue: (data) => {
    // TODO: this should be handled better
    return data && !!data.plaintext?.trim();
  },
  tocEntry: (block = {}) => {
    const { value, override_toc, entry_text, level, plaintext } = block;
    const type = value?.[0]?.type;
    return override_toc && level
      ? [parseInt(level.slice(1)), entry_text]
      : config.settings.slate.topLevelTargetElements.includes(type)
      ? [parseInt(type.slice(1)), plaintext]
      : null;
  },
};
config.set('blocks', {
  ...config.blocks,
  blocksConfig: {
    ...(config.blocks.blocksConfig ?? {}),
    slate: slateBlockConfig,
    gridBlock: {
      ...(config.blocks.blocksConfig?.gridBlock ?? {}),
      blocksConfig: {
        ...(config.blocks.blocksConfig?.gridBlock?.blocksConfig ?? {}),
        slate: slateBlockConfig,
      },
    },
  },
});
