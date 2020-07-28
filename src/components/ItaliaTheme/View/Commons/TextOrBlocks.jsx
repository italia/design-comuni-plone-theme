import React from 'react';
import PropTypes from 'prop-types';
import { blocks } from '@italia/config';
import { map } from 'lodash';
import { defineMessages, useIntl } from 'react-intl';
import {
  flattenHTMLToAppURL,
  hasBlocksData,
  getBlocksFieldname,
  getBlocksLayoutFieldname,
  getBaseUrl,
} from '@plone/volto/helpers';

const messages = defineMessages({
  unknownBlock: {
    id: 'unknownBlock',
    defaultMessage: 'Blocco sconosciuto',
  },
});
/**
 * TextOrBlocks view component class.
 * @function TextOrBlocks
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const TextOrBlocks = ({ content, location }) => {
  const blocksFieldname = getBlocksFieldname(content);
  const blocksLayoutFieldname = getBlocksLayoutFieldname(content);
  const intl = useIntl();
  return (
    <>
      {hasBlocksData(content)
        ? map(content[blocksLayoutFieldname].items, (block) => {
            const blockType = content[blocksFieldname]?.[block]?.['@type'];

            if (['title', 'pageDescription'].indexOf(blockType) > -1)
              return null;

            const Block = blocks.blocksConfig[blockType]?.['view'] || null;
            if (Block != null) {
              return (
                <Block
                  key={block}
                  id={block}
                  properties={content}
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
          })
        : content.text?.data && (
            <div
              dangerouslySetInnerHTML={{
                __html: flattenHTMLToAppURL(content.text.data),
              }}
            />
          )}
    </>
  );
};

export default TextOrBlocks;

TextOrBlocks.propTypes = {
  content: PropTypes.any,
};
