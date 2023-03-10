/**
 * Breadcrumbs components.
 * @module components/theme/Breadcrumbs/Breadcrumbs
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { Breadcrumbs as ItaliaBreadcrumbs } from 'design-comuni-plone-theme/components/ItaliaTheme';

const Breadcrumbs = ({ pathname }) => {
  let brdc = ItaliaBreadcrumbs({ pathname: pathname });

  const content = useSelector((state) => state.content?.data);

  const CT_CustomBreadcrumbs = ['Pagina Argomento']; //don't display breadcrumbs for this content-types. They will be displayed by content-type view if needed.
  if (CT_CustomBreadcrumbs?.indexOf(content?.['@type']) >= 0) {
    brdc = null;
  }
  return brdc ? (
    <div className="public-ui">
      <section id="briciole" className="container px-4 mt-4">
        <div className="">{brdc}</div>
      </section>
    </div>
  ) : null;
};

Breadcrumbs.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default Breadcrumbs;
