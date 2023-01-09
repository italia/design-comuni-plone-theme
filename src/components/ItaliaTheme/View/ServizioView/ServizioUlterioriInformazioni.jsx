import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';

import {
  RichTextSection,
  richTextHasContent,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const ServizioUlterioriInformazioni = ({ content }) => {
  const intl = useIntl();

  return richTextHasContent(content.ulteriori_informazioni) ? (
    <RichTextSection
      content={content.ulteriori_informazioni}
      tag_id="more-info"
      title={intl.formatMessage(messages.other_info)}
    />
  ) : null;
};

ServizioUlterioriInformazioni.propTypes = {
  content: PropTypes.shape({
    ulteriori_informazioni: PropTypes.shape({
      data: PropTypes.string,
    }),
  }),
};

export default ServizioUlterioriInformazioni;

const messages = defineMessages({
  other_info: {
    id: 'other_info',
    defaultMessage: 'Ulteriori informazioni',
  },
});
