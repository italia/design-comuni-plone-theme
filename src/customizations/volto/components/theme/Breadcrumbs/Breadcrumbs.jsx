/**
 * Breadcrumbs components.
 * @module components/theme/Breadcrumbs/Breadcrumbs
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { Breadcrumbs as ItaliaBreadcrumbs } from '@italia/components/ItaliaTheme';
import { Container } from 'design-react-kit/dist/design-react-kit';

const Breadcrumbs = ({ pathname }) => {
  let brdc = ItaliaBreadcrumbs({ pathname: pathname });

  const content = useSelector((state) => state.content?.data);

  const CT_CustomBreadcrumbs = ['Pagina Argomento']; //don't display breadcrumbs for this content-types. They will be displayed by content-type view if needed.
  if (CT_CustomBreadcrumbs?.indexOf(content?.['@type']) >= 0) {
    brdc = null;
  }
  return brdc ? (
    <div className="public-ui">
      <Container as="section" id="briciole" className="px-4 my-4">
        <div className="px-lg-4">{brdc}</div>
      </Container>
    </div>
  ) : null;
};

Breadcrumbs.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default Breadcrumbs;
