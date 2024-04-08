import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import { useLocation } from 'react-router-dom';
import { defineMessages, useIntl } from 'react-intl';
import {
  getBlocksFieldname,
  getBlocksLayoutFieldname,
  getBaseUrl,
} from '@plone/volto/helpers';
import config from '@plone/volto/registry';

const messages = defineMessages({
  unknownBlock: {
    id: 'unknownBlock',
    defaultMessage: 'Blocco sconosciuto',
  },
});
const Wrapper = ({ block, id, children }) => {
  return block['@type'] === 'listing' && block.variation === 'slider' ? (
    <div id={`outside-slider-${id}`}>{children}</div>
  ) : (
    <>{children}</>
  );
};
/**
 * RenderBlocks view component class.
 * @function RenderBlocks
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const RenderBlocks = ({
  data,
  content,
  exclude = ['title', 'description'],
}) => {
  /* Render text or blocks in view, skip title and description blocks by default*/
  const blockContent = data ?? content; // For backwards compatibility of old blocks
  const blocksFieldname = getBlocksFieldname(blockContent);
  const blocksLayoutFieldname = getBlocksLayoutFieldname(blockContent);
  const intl = useIntl();
  const location = useLocation();

  const items =
    blockContent[blocksLayoutFieldname]?.items?.length > 0
      ? blockContent[blocksLayoutFieldname].items.filter((block) => {
          const blockType = blockContent[blocksFieldname]?.[block]?.['@type'];
          return exclude.indexOf(blockType) < 0;
        })
      : null;

  //è il caso in cui c'è solo il primo blocco di testo vuoto. Non si vuole renderizzare il <br/>
  if (items?.length === 1) {
    const block = blockContent[blocksFieldname][items[0]];
    if (block['@type'] === 'text' && !block.text) {
      return null;
    }
    if (block['@type'] === 'slate' && block.plaintext?.length === 0) {
      return null;
    }
  }
  return items?.length > 0 ? (
    <>
      {map(items, (block) => {
        const blockType = blockContent[blocksFieldname]?.[block]?.['@type'];
        const Block = config.blocks.blocksConfig[blockType]?.['view'] || null;

        if (Block != null) {
          return (
            <Wrapper block={blockContent[blocksFieldname]?.[block]} id={block}>
              <Block
                key={block}
                id={block}
                properties={content ?? data}
                data={{
                  ...blockContent[blocksFieldname][block],
                  block: block,
                }}
                path={getBaseUrl(location?.pathname || '')}
              />
            </Wrapper>
          );
        } else {
          return (
            <div key={block}>
              {intl.formatMessage(messages.unknownBlock, {
                block: blockContent[blocksFieldname]?.[block]?.['@type'],
              })}
            </div>
          );
        }
      })}
    </>
  ) : null;
};

export default RenderBlocks;

RenderBlocks.propTypes = {
  data: PropTypes.any,
};
