import React from 'react';
import PropTypes from 'prop-types';
import { Callout, CalloutTitle } from 'design-react-kit';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { RichText } from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const HelpBox = ({ text }) => {
  return text ? (
    <Callout color="">
      <CalloutTitle tag="div">
        <Icon
          color=""
          icon="it-info-circle"
          padding={false}
          size=""
          aria-hidden
        />
        <span className="text"></span>
      </CalloutTitle>

      <div>
        <RichText data={text} />
      </div>
    </Callout>
  ) : null;
};
HelpBox.propTypes = {
  text: PropTypes.object.isRequired,
};

export default HelpBox;
