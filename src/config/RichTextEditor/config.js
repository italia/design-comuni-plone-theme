import React from 'react';
import { Separator } from 'draft-js-inline-toolbar-plugin';
import { Map } from 'immutable';

import * as config from '@plone/volto/config';

import {
  BlockquoteButton,
  BoldButton,
  CalloutButton,
  ItalicButton,
  OrderedListButton,
  UnorderedListButton,
} from '@plone/volto/config/RichTextEditor/Styles';

import createLinkPlugin from '@plone/volto/components/manage/AnchorPlugin';
import UnderlineButton from '@italia/config/RichTextEditor/ToolbarButtons/UnderlineButton';
import HeadingsButton from '@italia/config/RichTextEditor/ToolbarButtons/HeadingsButton';
import AlignButton from '@italia/config/RichTextEditor/ToolbarButtons/AlignButton';

const linkPlugin = createLinkPlugin();

export const ItaliaRichTextEditorInlineToolbarButtons = [
  AlignButton,
  Separator,
  BoldButton,
  ItalicButton,
  UnderlineButton,
  Separator,
  HeadingsButton,
  linkPlugin.LinkButton,
  Separator,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CalloutButton,
];

const blockRenderMap = Map({
  'align-center': {
    element: 'p',
  },
  'align-right': {
    element: 'p',
  },
  'align-justify': {
    element: 'p',
  },
});

export const extendedBlockRenderMap = config.settings.extendedBlockRenderMap
  .update('text-center', (element = 'p') => element)
  .merge(blockRenderMap);

export const blockStyleFn = (contentBlock) => {
  const type = contentBlock.getType();

  let r = config.settings.blockStyleFn(contentBlock) || '';
  r = r.length > 0 ? ' ' : r;

  if (type === 'align-center') {
    r += 'text-center';
  }

  if (type === 'align-right') {
    r += 'text-right';
  }

  if (type === 'align-justify') {
    r += 'text-justify';
  }
  return r;
};

export const ItaliaHtmlRenderers = {
  blockquote: (children, { keys }) =>
    children.map((child, i) => <blockquote key={keys[i]}>{child}</blockquote>),
  'align-center': (children, { keys }) =>
    children.map((child, i) => (
      <p id={keys[i]} key={keys[i]} className="text-center">
        {child}
      </p>
    )),
  'align-right': (children, { keys }) =>
    children.map((child, i) => (
      <p id={keys[i]} key={keys[i]} className="text-right">
        {child}
      </p>
    )),
  'align-justify': (children, { keys }) =>
    children.map((child, i) => (
      <p id={keys[i]} key={keys[i]} className="text-justify">
        {child}
      </p>
    )),
};
