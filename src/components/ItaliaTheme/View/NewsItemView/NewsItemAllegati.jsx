import React from 'react';
import PropTypes from 'prop-types';

import { Attachments } from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const NewsItemAllegati = ({ content }) => {
  return <Attachments content={content} folder_name={'documenti-allegati'} />;
};

NewsItemAllegati.propTypes = {
  content: PropTypes.object.isRequired,
};

export default NewsItemAllegati;
