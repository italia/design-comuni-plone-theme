import React from 'react';
import Styles from '@plone/volto/config/RichTextEditor/Styles';

import ToHTMLRenderers from '@plone/volto/config/RichTextEditor/ToHTML';
import FromHTML from '@plone/volto/config/RichTextEditor/FromHTML';
import Plugins from '@plone/volto/config/RichTextEditor/Plugins';
import Blocks from '@plone/volto/config/RichTextEditor/Blocks';
//import FromHTMLCustomBlockFn from '@plone/volto/config/RichTextEditor/FromHTML';

import UnderlineButton from 'design-comuni-plone-theme/config/RichTextEditor/ToolbarButtons/UnderlineButton';
import HeadingsButton from 'design-comuni-plone-theme/config/RichTextEditor/ToolbarButtons/HeadingsButton';
import AlignButton from 'design-comuni-plone-theme/config/RichTextEditor/ToolbarButtons/AlignButton';
import CalloutsButton from 'design-comuni-plone-theme/config/RichTextEditor/ToolbarButtons/CalloutsButton';
import ButtonsButton from 'design-comuni-plone-theme/config/RichTextEditor/ToolbarButtons/ButtonsButton';
import TextSizeButton from 'design-comuni-plone-theme/config/RichTextEditor/ToolbarButtons/TextSizeButton';

import LinkEntity from 'design-comuni-plone-theme/config/RichTextEditor/LinkEntity';

const ItaliaRichTextEditorPlugins = (props) => [];
const ItaliaRichTextEditorInlineToolbarButtons = (props, plugins) => {
  const linkPlugin = plugins.filter((p) => p.LinkButton != null)[0];
  const Separator = props.draftJsInlineToolbarPlugin.Separator;

  const buttons = Styles(props);
  const {
    BoldButton,
    ItalicButton,
    // HeadlineTwoButton,
    // HeadlineThreeButton,
    UnorderedListButton,
    OrderedListButton,
    BlockquoteButton,
    // CalloutButton,
  } = buttons;

  return [
    AlignButton,
    Separator,
    BoldButton,
    ItalicButton,
    UnderlineButton(props),
    TextSizeButton(props),
    Separator,
    HeadingsButton(props),
    linkPlugin.LinkButton,
    ButtonsButton(props),
    Separator,
    UnorderedListButton,
    OrderedListButton,
    BlockquoteButton,
    CalloutsButton(props),
  ];
};

const renderHTMLBlock = (child) => {
  return child.map((subchild) => {
    if (Array.isArray(subchild)) {
      return subchild.map((subchildren) => {
        if (typeof subchildren === 'string') {
          const last = subchildren.split('\n').length - 1;
          return subchildren.split('\n').map((item, index) => (
            <React.Fragment key={index}>
              {item}
              {index !== last && <br />}
            </React.Fragment>
          ));
        } else {
          return subchildren;
        }
      });
    } else {
      return subchild;
    }
  });
};
const ItaliaBlocksHtmlRenderers = {
  blockquote: (children, { keys }) =>
    children.map((child, i) => (
      <blockquote key={keys[i]}>{renderHTMLBlock(child)}</blockquote>
    )),
  'align-center': (children, { keys }) =>
    children.map((child, i) => (
      <p id={keys[i]} key={keys[i]} className="text-center">
        {renderHTMLBlock(child)}
      </p>
    )),
  'align-right': (children, { keys }) =>
    children.map((child, i) => (
      <p id={keys[i]} key={keys[i]} className="text-end">
        {renderHTMLBlock(child)}
      </p>
    )),
  'align-justify': (children, { keys }) =>
    children.map((child, i) => (
      <p id={keys[i]} key={keys[i]} className="text-justify">
        {renderHTMLBlock(child)}
      </p>
    )),
  callout: (children, { keys }) =>
    children.map((child, i) => (
      <p id={keys[i]} key={keys[i]} className="callout" role="note">
        {renderHTMLBlock(child)}
      </p>
    )),
  'callout-bg': (children, { keys }) =>
    children.map((child, i) => (
      <p id={keys[i]} key={keys[i]} className="callout-bg" role="note">
        {renderHTMLBlock(child)}
      </p>
    )),
  buttons: (children, { keys }) =>
    children.map((child, i) => (
      <p id={keys[i]} key={keys[i]} className="draftjs-buttons">
        {renderHTMLBlock(child)}
      </p>
    )),
};

const ItaliaInlineHtmlRenderers = {
  TEXT_LARGER: (children, { key }) => (
    <span key={key} className="draftjs-text-larger">
      {children}
    </span>
  ),
};

const ItaliaFromHTMLCustomBlockFn = (element) => {
  let ret = FromHTML(element); //get default from plone/volto

  if (!ret) {
    if (element.className === 'callout-bg') {
      ret = {
        type: 'callout-bg',
      };
    } else if (element.className === 'draftjs-buttons') {
      ret = {
        type: 'buttons',
      };
    } else if (element.className === 'text-center') {
      ret = {
        type: 'align-center',
      };
    } else if (element.className === 'text-end') {
      ret = {
        type: 'align-right',
      };
    } else if (element.className === 'text-justify') {
      ret = {
        type: 'align-justify',
      };
    }
  }
  return ret;
};

const ItaliaFromHTMLCustomInlineFn = (element, { Style }) => {
  if (element.tagName === 'SPAN') {
    if (element.className === 'draftjs-text-larger') {
      return Style('TEXT_LARGER');
    }
  }
};

export default function applyConfig(config) {
  config.settings.richtextEditorSettings = (props) => {
    const { plugins /*, inlineToolbarButtons*/ } = Plugins(props); // volto plugins
    const { extendedBlockRenderMap, blockStyleFn, listBlockTypes } = Blocks(
      props,
    );

    const { immutableLib } = props;
    const { Map } = immutableLib;

    const blockRenderMap = Map({
      'align-center': {
        element: (props) => <p {...props} style={{ textAlign: 'center' }} />,
      },
      'align-right': {
        element: (props) => <p {...props} style={{ textAlign: 'right' }} />,
      },
      'align-justify': {
        element: (props) => <p {...props} style={{ textAlign: 'justify' }} />,
      },
      'callout-bg': {
        element: 'p',
      },
      buttons: {
        element: 'p',
      },
    });

    const italiaBlockStyleFunction = (contentBlock) => {
      const type = contentBlock.getType();

      let r = blockStyleFn(contentBlock) || '';
      r = r.length > 0 ? ' ' : r;

      const styles = {
        callout: 'callout',
        'callout-bg': 'callout-bg',
        buttons: 'draftjs-buttons',
      };

      r += styles[type] ?? '';

      return r;
    };

    return {
      extendedBlockRenderMap: extendedBlockRenderMap
        .update('text-center', (element = 'p') => element)
        .merge(blockRenderMap),
      voltoBlockStyleFn: blockStyleFn,
      blockStyleFn: italiaBlockStyleFunction,
      listBlockTypes: listBlockTypes,
      richTextEditorPlugins: [
        ...plugins,
        ...ItaliaRichTextEditorPlugins(props),
      ],
      richTextEditorInlineToolbarButtons: ItaliaRichTextEditorInlineToolbarButtons(
        props,
        plugins,
      ), //[inlineToolbarButtons,...ItaliaRichTextEditorInlineToolbarButtons(props)]
      FromHTMLCustomBlockFn: ItaliaFromHTMLCustomBlockFn,
      FromHTMLCustomInlineFn: ItaliaFromHTMLCustomInlineFn,
      customStyleMap: {
        TEXT_LARGER: { fontSize: '1.75rem' },
      },
    };
  };

  // TODO: rimuovere questa customizzazione quando sistemano https://github.com/plone/volto/issues/1601
  config.settings.richtextViewSettings.ToHTMLRenderers = {
    ...config.settings.richtextViewSettings.ToHTMLRenderers,
    entities: {
      ...config.settings.richtextViewSettings.ToHTMLRenderers.entities,
      LINK: (children, props, other) => {
        return (
          <LinkEntity key={other.key} {...props}>
            {children}
          </LinkEntity>
        );
      },
    },
    blocks: {
      ...ToHTMLRenderers.blocks,
      ...ItaliaBlocksHtmlRenderers,
    },
    inline: { ...ToHTMLRenderers.inline, ...ItaliaInlineHtmlRenderers },
  };

  return config;
}
