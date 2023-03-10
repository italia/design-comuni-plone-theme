import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';

import {
  RichTextSection,
  richTextHasContent,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  cosa_serve: {
    id: 'cosa_serve',
    defaultMessage: 'Cosa serve',
  },
});

const ServizioCosaServe = ({ content }) => {
  const intl = useIntl();
  return richTextHasContent(content.cosa_serve) ? (
    <RichTextSection
      content={content.cosa_serve}
      tag_id="needed"
      title={intl.formatMessage(messages.cosa_serve)}
      hasBg
      p="3"
      title_tag="h4"
    />
  ) : null;
};

ServizioCosaServe.propTypes = {
  content: PropTypes.shape({
    cosa_serve: PropTypes.shape({
      data: PropTypes.string,
    }),
  }),
};
export default ServizioCosaServe;
