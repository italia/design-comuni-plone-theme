/**
 * @module components/theme/Unauthorized/Unauthorized
 */

/*
 *
 * CUSTOMIZATIONS:
 * - Replaced the whole default Volto markup (Container, FormattedMessage
 *   messages, login link, site administration link, "Thank you." message
 *   and the withServerErrorCode(401) wrapper) with the Italia Design theme
 *   Unauthorized component
 * - Delegates rendering entirely to `Unauthorized` imported from
 *   `design-comuni-plone-theme/components/ItaliaTheme`
 */

import React from 'react';

import { Unauthorized as UnauthorizedItalia } from 'design-comuni-plone-theme/components/ItaliaTheme';

/**
 * unauthorized function.
 * @function Unauthorized
 * @param {Object} props Props passed by Volto's View (staticContext, error, ...)
 * @returns {string} Markup of the unauthorized page.
 */
const Unauthorized = (props) => {
  return <UnauthorizedItalia {...props} />;
};

export default Unauthorized;
