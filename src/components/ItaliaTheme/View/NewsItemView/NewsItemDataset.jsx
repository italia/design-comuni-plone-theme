import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import {
  richTextHasContent,
  RichTextArticle,
} from '@italia/components/ItaliaTheme/View';

const messages = defineMessages({
  dataset: {
    id: 'dataset',
    defaultMessage: 'Dataset',
  },
});

const NewsItemDataset = ({ content }) => {
  const intl = useIntl();
  return richTextHasContent(content.dataset) ? (
    <RichTextArticle
      content={content.dataset}
      tag_id="dataset"
      title={intl.formatMessage(messages.dataset)}
    />
  ) : (
    <></>
  );
};

NewsItemDataset.propTypes = {
  content: PropTypes.shape({
    dataset: PropTypes.shape({
      data: PropTypes.string,
    }),
  }).isRequired,
};

export default NewsItemDataset;
