import React from 'react';
import PropTypes from 'prop-types';

import {
  Metadata,
  HelpBox,
  richTextHasContent,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const BandoUlterioriInformazioni = ({ content }) => {
  return (
    <Metadata
      content={content}
      showSectionTitle={richTextHasContent(content?.riferimenti_bando)}
    >
      {richTextHasContent(content?.riferimenti_bando) && (
        <HelpBox text={content?.riferimenti_bando} />
      )}
    </Metadata>
  );
};

BandoUlterioriInformazioni.propTypes = {
  content: PropTypes.shape({
    riferimenti_bando: PropTypes.shape({
      data: PropTypes.string,
    }),
  }).isRequired,
};
export default BandoUlterioriInformazioni;
