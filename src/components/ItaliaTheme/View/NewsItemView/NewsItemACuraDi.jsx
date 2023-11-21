/*
 * NewsItemACuraDi component class, used in `NewsItemView`.
 */
import React from 'react';
import PropTypes from 'prop-types';

import { CuredBy } from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const NewsItemACuraDi = ({ content }) => {
  return (content.a_cura_di && content.a_cura_di.length > 0) ||
    (content.a_cura_di_persone && content.a_cura_di_persone.length > 0) ? (
    <CuredBy
      office={content.a_cura_di ? content.a_cura_di[0] : null}
      people={content.a_cura_di_persone}
    />
  ) : (
    <></>
  );
};

NewsItemACuraDi.propTypes = {
  content: PropTypes.shape({
    a_cura_di: PropTypes.array.isRequired,
    a_cura_di_persone: PropTypes.array,
  }).isRequired,
};

export default NewsItemACuraDi;
