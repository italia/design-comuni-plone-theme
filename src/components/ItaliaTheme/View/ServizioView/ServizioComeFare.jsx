import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';

import {
  RichTextSection,
  richTextHasContent,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const ServizioComeFare = ({ content }) => {
  const intl = useIntl();

  return richTextHasContent(content.come_si_fa) ? (
    <RichTextSection
      content={content.come_si_fa}
      tag_id="how-to"
      title={intl.formatMessage(messages.come_fare)}
      show_title={true}
    />
  ) : null;
};

ServizioComeFare.propTypes = {
  content: PropTypes.shape({
    come_si_fa: PropTypes.object,
  }),
};

export default ServizioComeFare;

const messages = defineMessages({
  come_fare: {
    id: 'servizio_come_fare',
    defaultMessage: 'Come fare',
  },
});
