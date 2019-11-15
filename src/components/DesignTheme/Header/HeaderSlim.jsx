/**
 * HeaderSlim component.
 * @module components/DesignTheme/Header/HeaderSlim
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { defineMessages, injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { LanguageSelector } from '~/components/DesignTheme';
import { BITIcon, ITUser } from '~/components/DesignTheme/Icons';

const messages = defineMessages({
  arLogin: {
    id: "Accedi all'area personale",
    defaultMessage: "Accedi all'area personale",
  },
});
/**
 * HeaderSlim component class.
 * @class HeaderSlim
 * @extends Component
 */
class HeaderSlim extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    token: PropTypes.string,
    pathname: PropTypes.string.isRequired,
  };

  /**
   * Default properties.
   * @property {Object} defaultProps Default properties.
   * @static
   */
  static defaultProps = {
    token: null,
  };

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    return (
      <div className="it-header-slim-wrapper-content">
        <Link to="/" key="brand-link" className="d-lg-block navbar-brand">
          Nome della Regione
        </Link>

        <div className="header-slim-right-zone">
          <LanguageSelector asNavItem={true} />

          <Link
            to="#"
            className="btn btn-primary btn-icon btn-full"
            title={this.props.intl.formatMessage(messages.arLogin)}
          >
            <span className="rounded-icon">
              <BITIcon name={ITUser} color="primary" />
            </span>
            <span className="d-none d-lg-block">
              {this.props.intl.formatMessage(messages.arLogin)}
            </span>
          </Link>
        </div>
      </div>
    );
  }
}

export default compose(
  injectIntl,
  connect(state => ({
    token: state.userSession.token,
  })),
)(HeaderSlim);
