/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

import React from 'react';
import { defineMessages, injectIntl } from 'react-intl';

import { FooterMain, FooterSmall } from '~/components/DesignTheme/';

const messages = defineMessages({});

/**
 * Component to display the footer.
 * @function Footer
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component
 */
const Footer = ({ intl }) => (
  <footer className="it-footer">
    <FooterMain />
    <FooterSmall />
  </footer>
);

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Footer.propTypes = {
  /**
   * i18n object
   */
};

export default injectIntl(Footer);
