import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import {
  richTextHasContent,
  RichTextSection,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  dataset: {
    id: 'dataset',
    defaultMessage: 'Dataset',
  },
});

const NewsItemDataset = ({ content }) => {
  const intl = useIntl();
  return richTextHasContent(content.dataset) ? (
    <RichTextSection
      data={content.dataset}
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
