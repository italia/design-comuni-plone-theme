import React from 'react';
import createInlineStyleButton from 'draft-js-buttons/lib/utils/createInlineStyleButton';
import createBlockStyleButton from 'draft-js-buttons/lib/utils/createBlockStyleButton';
import { Separator } from 'draft-js-inline-toolbar-plugin';

import * as config from '@plone/volto/config';
import Icon from '@plone/volto/components/theme/Icon/Icon';
import underlineSVG from '@plone/volto/icons/underline.svg';
import alignCenterSVG from '@plone/volto/icons/align-center.svg';

import {
  BlockquoteButton,
  BoldButton,
  CalloutButton,
  ItalicButton,
  OrderedListButton,
  UnorderedListButton,
} from '@plone/volto/config/RichTextEditor/Styles';

import createLinkPlugin from '@plone/volto/components/manage/AnchorPlugin';
import HeadingsButton from '@italia/config/RichTextEditor/ToolbarButtons/HeadingsButton';

const AlignCenterButton = createBlockStyleButton({
  blockType: 'align-center',
  children: <Icon name={alignCenterSVG} size="24px" />,
});

const UnderlineButton = createInlineStyleButton({
  style: 'UNDERLINE',
  children: <Icon name={underlineSVG} size="24px" />,
});

const linkPlugin = createLinkPlugin();

export const ItaliaRichTextEditorInlineToolbarButtons = [
  AlignCenterButton,
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

export const extendedBlockRenderMap = config.settings.extendedBlockRenderMap.update(
  'align-center',
  (element = 'p') => element,
);

export const blockStyleFn = (contentBlock) => {
  let r = config.settings.blockStyleFn(contentBlock);

  if (!r) {
    const type = contentBlock.getType();
    if (type === 'align-center') {
      r += 'align-center';
    }
  }
  return r;
};
