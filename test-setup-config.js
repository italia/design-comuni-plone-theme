/*
 * This is the mocked config registry loader for tests.
 * It uses some of the default (real) configuration,
 * (mainly) DraftJS one, to not differ too much from reality
 * Ideally, we should mock this ones as well at some point.
 * Views, Widgets and Blocks are mocked already, to keep
 * snapshot consistency and readability.
 */

import config from '@plone/volto/registry';
import { loadables } from 'design-comuni-plone-theme/config/loadables';

config.set('settings', {
  ...config.settings,
  publicURL: 'http://localhost:3000',
  italiaThemeViewsConfig: {
    imagePosition: 'afterHeader', // possible values: afterHeader, documentBody
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
});
config.set('blocks', {
  ...config.blocks,
});
config.set('views', {
  ...config.views,
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

config.set('components', {
  ...config.components,
});
config.set('experimental', {
  addBlockButton: {
    enabled: false,
  },
});
