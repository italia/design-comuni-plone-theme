import React from 'react';
import PropTypes from 'prop-types';
import {
  Metadata,
  HelpBox,
  richTextHasContent,
} from 'design-volto-theme/components/ItaliaTheme/View';

const ServizioUlterioriInformazioni = ({ content }) => {
  return (
    <Metadata
      content={content}
      showSectionTitle={richTextHasContent(content.ulteriori_informazioni)}
    >
      {richTextHasContent(content.ulteriori_informazioni) && (
        <HelpBox text={content.ulteriori_informazioni} />
      )}
    </Metadata>
  );
};

ServizioUlterioriInformazioni.propTypes = {
  content: PropTypes.shape({
    ulteriori_informazioni: PropTypes.shape({
      data: PropTypes.string,
    }),
  }),
};
export default ServizioUlterioriInformazioni;
