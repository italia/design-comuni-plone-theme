/**
 * View Callout block.
 * @module components/ItaliaTheme/Blocks/Callout/View
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Callout, CalloutTitle, CalloutText } from 'design-react-kit';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { TextBlockView } from '@plone/volto-slate/blocks/Text';
/**
 * View Callout block class.
 * @class CalloutView
 * @extends Component
 */

const View = ({ data, id }) => {
  return (
    <div className="block callout_block" id={id}>
      <Callout
        highlight={data.style === 'highlight'}
        color={data.color?.replace('callout_', '')}
      >
        <CalloutTitle>
          {data.icon && <Icon icon={data.icon} padding={false} aria-hidden />}
          <span className="text">{data.title}</span>
          {data.style !== 'highlight' && <span className="text-line"></span>}
        </CalloutTitle>
        <CalloutText>
          <TextBlockView id={id} data={{ value: data.text }} />
        </CalloutText>
      </Callout>
    </div>
  );
};
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
View.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default View;
