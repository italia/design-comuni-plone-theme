import React from 'react';
import PropTypes from 'prop-types';

import {
  Metadata,
  HelpBox,
  richTextHasContent,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const NewsItemMetadata = ({ content }) => {
  return (
    <Metadata
      content={content}
      showSectionTitle={richTextHasContent(content?.ulteriori_informazioni)}
    >
      {richTextHasContent(content?.ulteriori_informazioni) && (
        <HelpBox text={content?.ulteriori_informazioni} />
      )}
    </Metadata>
  );
};

NewsItemMetadata.propTypes = {
  content: PropTypes.object.isRequired,
};

export default NewsItemMetadata;
