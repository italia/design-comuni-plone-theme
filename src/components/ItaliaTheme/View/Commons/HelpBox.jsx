import React from 'react';
import PropTypes from 'prop-types';
import {
  Icon,
  Callout,
  CalloutTitle,
} from 'design-react-kit/dist/design-react-kit';

const HelpBox = ({ text }) => {
  return text ? (
    <Callout color="" highlight={false} tag="div">
      <CalloutTitle tag="div">
        <Icon
          color=""
          icon="it-info-circle"
          padding={false}
          size=""
          style={{
            ariaHidden: true,
          }}
        />
      </CalloutTitle>

      <p>{text?.data.replace(/(<([^>]+)>)/g, '')}</p>
    </Callout>
  ) : null;
};
HelpBox.propTypes = {
  text: PropTypes.object.isRequired,
};

export default HelpBox;
