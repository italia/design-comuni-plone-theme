/**
 * ViewBlock.
 * @module components/ItaliaTheme/Blocks/IconBlocks/Block/ViewBlock
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useIntl, defineMessages } from 'react-intl';
import { UniversalLink } from '@plone/volto/components';

import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { Card, CardBody, CardReadMore } from 'design-react-kit';

import { TextBlockView } from '@plone/volto-slate/blocks/Text';

const messages = defineMessages({
  vedi: {
    id: 'Vedi',
    defaultMessage: 'Vedi',
  },
});

/**
 * ViewBlock class.
 * @class ViewBlock
 * @extends Component
 */
const ViewBlock = ({ data, isOpen, toggle, id, index }) => {
  const intl = useIntl();

  return (
    <Card
      className="card-bg rounded subblock-view"
      noWrapper={false}
      space
      tag="div"
    >
      <CardBody tag="div">
        {data.icon?.length > 0 && (
          <div className="iconblock-icon">
            <Icon icon={data.icon} aria-hidden={true} title={data.title} />
          </div>
        )}

        {data.title && <div className="iconblock-title">{data.title}</div>}
        {data.text && (
          <div className="iconblock-text">
            <TextBlockView data={{ value: data.text }} />
          </div>
        )}
        {data.href && (
          <CardReadMore
            iconName="it-arrow-right"
            tag={UniversalLink}
            href={data.href ?? '#'}
            text={data.linkMoreTitle || intl.formatMessage(messages.vedi)}
            aria-label={`${
              data.linkMoreTitle || intl.formatMessage(messages.vedi)
            } ${data.title ?? ''}`}
          />
        )}
      </CardBody>
    </Card>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
ViewBlock.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ViewBlock;
