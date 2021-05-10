import React from 'react';

import PropTypes from 'prop-types';
import cx from 'classnames';
import { flattenHTMLToAppURL } from '@plone/volto/helpers';
import { hasBlocksData } from '@plone/volto/helpers';
import { RenderBlocks } from '@italia/components/ItaliaTheme/View';

const richTextHasContent = (content) => {
  if (hasBlocksData(content)) {
    //ReactDOMServer.renderToStaticMarkup(RenderBlocks({ content: content })),
    const renderedBlocks = RenderBlocks({ content: content });

    const textBlocks = Object.values(content.blocks).filter(
      (b) => b['@type'] === 'text',
    );
    const noTextBlocks = Object.values(content.blocks).filter(
      (b) => b['@type'] !== 'text',
    );

    const textContent = textBlocks
      ?.map((block) => block.text?.blocks?.map((b) => b.text))
      ?.flat(3)
      ?.filter((b) => b != null && b.trim().length > 0)?.[0];

    return (
      renderedBlocks !== null &&
      ((textBlocks?.length > 0 && textContent !== '') ||
        noTextBlocks.length > 0)
    );
  } else {
    const textToDisplay = content?.data?.replace(/(<([^>]+)>)/g, '') ?? '';
    return textToDisplay.length > 0 ? true : false;
  }
};

/**
 * RichTextRender view component class.
 * @function RichTextRender
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const RichTextRender = ({ content, add_class, serif = true }) => {
  let hasContent = richTextHasContent(content);

  return hasContent ? (
    hasBlocksData(content) ? (
      <div
        className={cx(`richtext-blocks ${add_class ?? ''}`, {
          'text-serif': serif,
        })}
      >
        <RenderBlocks content={content} />
      </div>
    ) : (
      <div
        className={cx(add_class, { 'text-serif': serif })}
        dangerouslySetInnerHTML={{ __html: flattenHTMLToAppURL(content.data) }}
      />
    )
  ) : null;
};

export { RichTextRender, richTextHasContent };

RichTextRender.propTypes = {
  content: PropTypes.string,
  add_class: PropTypes.string,
};
