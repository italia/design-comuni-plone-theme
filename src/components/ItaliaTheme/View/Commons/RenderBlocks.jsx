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
/**
 * RenderBlocks view component class.
 * @function RenderBlocks
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const RenderBlocks = ({
  content,
  exclude = ['title', 'description'],
  context = {},
}) => {
  /* Render text or blocks in view, skip title and description blocks by default*/
  const blocksFieldname = getBlocksFieldname(content);
  const blocksLayoutFieldname = getBlocksLayoutFieldname(content);
  const intl = useIntl();
  const location = useLocation();

  const items =
    content[blocksLayoutFieldname]?.items?.length > 0
      ? content[blocksLayoutFieldname].items.filter((block) => {
          const blockType = content[blocksFieldname]?.[block]?.['@type'];
          return exclude.indexOf(blockType) < 0;
        })
      : null;

  //è il caso in cui c'è solo il primo blocco di testo vuoto. Non si vuole renderizzare il <br/>
  if (items?.length === 1) {
    const block = content[blocksFieldname][items[0]];
    if (block['@type'] === 'text' && !block.text) {
      return null;
    }
  }
  return items?.length > 0 ? (
    <>
      {map(items, (block) => {
        const blockType = content[blocksFieldname]?.[block]?.['@type'];
        const Block = config.blocks.blocksConfig[blockType]?.['view'] || null;
        if (Block != null) {
          return (
            <Block
              key={block}
              id={block}
              properties={context}
              data={content[blocksFieldname][block]}
              path={getBaseUrl(location?.pathname || '')}
            />
          );
        } else {
          return (
            <div key={block}>
              {intl.formatMessage(messages.unknownBlock, {
                block: content[blocksFieldname]?.[block]?.['@type'],
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
  content: PropTypes.any,
};
