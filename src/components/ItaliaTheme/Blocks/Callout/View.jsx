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
  const title = <TextBlockView id={id} data={{ value: data.title }} />;

  return (
    <div className="block callout_block" id={id}>
      <Callout>
        <CalloutTitle>
          {data.icon && <Icon icon={data.icon} padding={false} aria-hidden />}
          <span className="sr-only">{title}</span>
          {title}
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
