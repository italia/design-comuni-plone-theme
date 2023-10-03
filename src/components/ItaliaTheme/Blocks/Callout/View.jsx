/**
 * View Callout block.
 * @module components/ItaliaTheme/Blocks/Callout/View
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Callout, CalloutTitle, CalloutText } from 'design-react-kit';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
/**
 * View Callout block class.
 * @class CalloutView
 * @extends Component
 */

const View = ({ data, id }) => {
  return (
    <div className="block callout_block" id={id}>
      <Callout>
        <CalloutTitle>
          <Icon icon="it-check-circle" padding={false} aria-hidden />
          <span className="sr-only">{data.title}</span>
          {data.title}
        </CalloutTitle>
        <CalloutText>
          Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Aenean non augue non purus
          vestibulum varius.
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
