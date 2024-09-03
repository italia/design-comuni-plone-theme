import PropTypes from 'prop-types';
import { Metadata } from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const UOMetadati = ({ content }) => {
  return <Metadata content={content} showSectionTitle={false} />;
};

UOMetadati.propTypes = {
  content: PropTypes.object,
};

export default UOMetadati;
