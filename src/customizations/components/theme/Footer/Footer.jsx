/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

import React, { Component } from 'react';

// import PropTypes from 'prop-types';
// import { isCmsUi } from '@plone/volto/helpers';
import { FooterMain, FooterSmall } from '@italia/components/ItaliaTheme/';
import { CookieBanner } from '@italia/addons/volto-cookie-banner';

/**
 * Footer component class.
 * @class Footer
 * @extends Component
 */
class Footer extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    //pathname: PropTypes.string.isRequired,
  };

  /**
   * Default properties.
   * @property {Object} defaultProps Default properties.
   * @static
   */
  static defaultProps = {};

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    const isCmsUI = false; //isCmsUi(this.props.pathname);
    let content = (
      <footer className="it-footer">
        <FooterMain />
        <FooterSmall />
        {__CLIENT__ && <CookieBanner />}
      </footer>
    );
    return isCmsUI ? <div className="public-ui">{content}</div> : content;
  }
}

export default Footer;
