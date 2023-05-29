import React from 'react';

import PropTypes from 'prop-types';
import cx from 'classnames';
import { flattenDeep, values } from 'lodash';
import { flattenHTMLToAppURL } from '@plone/volto/helpers';
import { hasBlocksData } from '@plone/volto/helpers';
import { RenderBlocks } from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const richTextHasContent = (content) => {
  if (hasBlocksData(content)) {
    //ReactDOMServer.renderToStaticMarkup(RenderBlocks({ content: content })),
    const renderedBlocks = RenderBlocks({ content: content });

    const textBlocks = values(content.blocks).filter(
      (b) => b['@type'] === 'text',
    );
    const noTextBlocks = values(content.blocks).filter(
      (b) => b['@type'] !== 'text',
    );

    const textContent = flattenDeep(
      textBlocks?.map((block) => block.text?.blocks?.map((b) => b.text) ?? []),
    )?.filter((b) => b != null && b.trim().length > 0)?.[0];

    return (
      renderedBlocks !== null &&
      ((textBlocks?.length > 0 && textContent && textContent !== '') ||
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
const RichTextRender = ({
  content,
  add_class,
  serif = true,
  lighthouseId = '',
  context,
}) => {
  let hasContent = richTextHasContent(content);

  return hasContent ? (
    hasBlocksData(content) ? (
      <div
        className={cx(`richtext-blocks ${add_class ?? ''}`, {
          'font-serif': serif,
        })}
        {...(lighthouseId && {
          'data-element': lighthouseId,
        })}
      >
        <RenderBlocks content={content} context={context} />
      </div>
    ) : (
      <div
        className={cx(add_class, { 'font-serif': serif })}
        dangerouslySetInnerHTML={{ __html: flattenHTMLToAppURL(content.data) }}
        {...(lighthouseId && {
          'data-element': lighthouseId,
        })}
      />
    )
  ) : null;
};

export { RichTextRender, richTextHasContent };

RichTextRender.propTypes = {
  content: PropTypes.string,
  add_class: PropTypes.string,
  lighthouseId: PropTypes.string,
  context: PropTypes.object,
};
