import React from 'react';
import PropTypes from 'prop-types';
import {
  Icon,
  Callout,
  CalloutTitle,
} from 'design-react-kit/dist/design-react-kit';
import RichTextArticle from './RichTextArticle';

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

      <RichTextArticle
        content={text?.data.replace(/(<([^>]+)>)/g, '')}
        tag_id={'help-box'}
        title={null}
      />
    </Callout>
  ) : null;
};
HelpBox.propTypes = {
  text: PropTypes.object.isRequired,
};

export default HelpBox;
