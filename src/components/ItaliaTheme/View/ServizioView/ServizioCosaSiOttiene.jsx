import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';

import {
  RichTextSection,
  richTextHasContent,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const ServizioCosaSiOttiene = ({ content }) => {
  const intl = useIntl();

  return richTextHasContent(content.cosa_si_ottiene) ? (
    <RichTextSection
      content={content.cosa_si_ottiene}
      tag_id="obtain"
      title={intl.formatMessage(messages.cosa_si_ottiene)}
      show_title={true}
      title_tag="h4"
    />
  ) : null;
};

ServizioCosaSiOttiene.propTypes = {
  content: PropTypes.shape({
    cosa_si_ottiene: PropTypes.object,
  }),
};

export default ServizioCosaSiOttiene;

const messages = defineMessages({
  cosa_si_ottiene: {
    id: 'servizio_cosa_si_ottiene',
    defaultMessage: 'Cosa si ottiene',
  },
});
