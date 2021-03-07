import React from 'react';
import { Separator } from 'draft-js-inline-toolbar-plugin';
import { Map } from 'immutable';

import {
  BlockquoteButton,
  BoldButton,
  ItalicButton,
  OrderedListButton,
  UnorderedListButton,
} from '@plone/volto/config/RichTextEditor/Styles';

import ToHTMLRenderers from '@plone/volto/config/RichTextEditor/ToHTML';

import FromHTML from '@plone/volto/config/RichTextEditor/FromHTML';
import createLinkPlugin from '@plone/volto/components/manage/AnchorPlugin';
import UnderlineButton from '@italia/config/RichTextEditor/ToolbarButtons/UnderlineButton';
import HeadingsButton from '@italia/config/RichTextEditor/ToolbarButtons/HeadingsButton';
import AlignButton from '@italia/config/RichTextEditor/ToolbarButtons/AlignButton';
import CalloutsButton from '@italia/config/RichTextEditor/ToolbarButtons/CalloutsButton';
import ButtonsButton from '@italia/config/RichTextEditor/ToolbarButtons/ButtonsButton';

const linkPlugin = createLinkPlugin();

const ItaliaRichTextEditorPlugins = [];
const ItaliaRichTextEditorInlineToolbarButtons = [
  AlignButton,
  Separator,
  BoldButton,
  ItalicButton,
  UnderlineButton,
  Separator,
  HeadingsButton,
  linkPlugin.LinkButton,
  ButtonsButton,
  Separator,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CalloutsButton,
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
  'callout-bg': {
    element: 'p',
  },
  buttons: {
    element: 'p',
  },
});

const ItaliaBlocksHtmlRenderers = {
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
  'callout-bg': (children, { keys }) =>
    children.map((child, i) => (
      <p id={keys[i]} key={keys[i]} className="callout-bg">
        {child}
      </p>
    )),
  buttons: (children, { keys }) =>
    children.map((child, i) => (
      <p id={keys[i]} key={keys[i]} className="draftjs-buttons">
        {child}
      </p>
    )),
};

const ItaliaFromHTMLCustomBlockFn = (element) => {
  let ret = FromHTML(element); //get default from plone/volto

  if (!ret) {
    if (element.className === 'callout-bg') {
      ret = {
        type: 'callout-bg',
      };
    }
    if (element.className === 'draftjs-buttons') {
      ret = {
        type: 'buttons',
      };
    }
  }
  return ret;
};

export default function applyConfig(config) {
  config.settings.richTextEditorPlugins = [
    ...config.settiings.richTextEditorPlugins,
    ...ItaliaRichTextEditorPlugins,
  ];

  config.settings.richTextEditorInlineToolbarButtons = ItaliaRichTextEditorInlineToolbarButtons;

  config.settings.extendedBlockRenderMap = config.settings.extendedBlockRenderMap
    .update('text-center', (element = 'p') => element)
    .merge(blockRenderMap);

  config.settings.blockStyleFn = (contentBlock) => {
    const type = contentBlock.getType();

    let r = config.settings.blockStyleFn(contentBlock) || '';
    r = r.length > 0 ? ' ' : r;

    const styles = {
      'align-center': 'text-center',
      'align-right': 'text-right',
      'align-justify': 'text-justify',
      callout: 'callout',
      'callout-bg': 'callout-bg',
      buttons: 'draftjs-buttons',
    };

    r += styles[type] ?? '';

    return r;
  };

  // TODO: rimuovere questa customizzazione quando sistemano https://github.com/plone/volto/issues/1601
  config.settings.ToHTMLRenderers = {
    ...config.settings.ToHTMLRenderers,
    blocks: {
      ...ToHTMLRenderers.blocks,
      ...ItaliaBlocksHtmlRenderers,
    },
    inline: { ...ToHTMLRenderers.inline },
  };

  config.settings.FromHTMLCustomBlockFn = ItaliaFromHTMLCustomBlockFn;

  return config;
}
