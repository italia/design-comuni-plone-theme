import React from 'react';
import { useIntl, defineMessages } from 'react-intl';
import PropTypes from 'prop-types';
import { Callout, CalloutTitle } from 'design-react-kit';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { RichText } from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const HelpBox = ({ text }) => {
  const intl = useIntl();
  return text ? (
    <Callout color="">
      <CalloutTitle tag="div">
        <Icon
          color=""
          icon="it-info-circle"
          padding={false}
          size=""
          aria-hidden
          title={intl.formatMessage(messages.ulteriori_info)}
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

const messages = defineMessages({
  ulteriori_info: {
    id: 'ulteriori_info',
    defaultMessage: 'Icona ulteriori informazioni',
  },
});
export default HelpBox;
