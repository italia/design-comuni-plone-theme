import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';

import {
  RichTextArticle,
  richTextHasContent,
  HelpBox,
} from '@italia/components/ItaliaTheme/View';

const messages = defineMessages({
  cosa_serve: {
    id: 'cosa_serve',
    defaultMessage: 'Cosa serve',
  },
});

const ServizioCosaServe = ({ content }) => {
  const intl = useIntl();
  return richTextHasContent(content.cosa_serve) ? (
    <RichTextArticle
      tag_id={'text-cosa_serve'}
      title={intl.formatMessage(messages.cosa_serve)}
      field="cosa_serve"
    >
      <HelpBox text={content.cosa_serve} />
    </RichTextArticle>
  ) : (
    <></>
  );
};

ServizioCosaServe.propTypes = {
  content: PropTypes.shape({
    cosa_serve: PropTypes.shape({
      data: PropTypes.string,
    }),
  }),
};
export default ServizioCosaServe;
