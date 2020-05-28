import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'design-react-kit/dist/design-react-kit';

const HelpBox = ({ text }) => {
  return text ? (
    <div className="mt-5" id="help-box">
      <div className="callout">
        <div className="callout-title">
          <Icon icon={'it-info-circle'} />
        </div>
        <p>{text}</p>
      </div>
    </div>
  ) : null;
};
HelpBox.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HelpBox;
