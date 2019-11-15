/**
 * HeaderCenter component.
 * @module components/Header/HeaderCenter
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { defineMessages, injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { Brand } from '~/components/DesignTheme';

import {
  BITIcon,
  it_pa,
  it_facebook,
  it_twitter,
  it_search,
} from '~/components/DesignTheme/Icons';

const messages = defineMessages({
  followUs: {
    id: 'Seguici su',
    defaultMessage: 'Seguici su',
  },
  search: {
    id: 'Cerca',
    defaultMessage: 'Cerca',
  },
});

/**
 * HeaderCenter component class.
 * @class HeaderCenter
 * @extends Component
 */
class HeaderCenter extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    token: PropTypes.string,
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
      <div className="it-header-center-content-wrapper">
        <div className="it-brand-wrapper">
          <Link to="/">
            <BITIcon name={it_pa} />
            <Brand
              brand="Nome del Comune"
              subBrand="Uno dei tanti Comuni d'Italia"
            />
          </Link>
        </div>
        <div className="it-right-zone">
          <div className="it-socials d-none d-md-flex">
            <span>{this.props.intl.formatMessage(messages.followUs)}</span>
            <ul>
              <li>
                <Link to="#" aria-label="Facebook" target="_blank">
                  <BITIcon name={it_facebook} />
                </Link>
              </li>
              <li>
                <Link to="#" aria-label="Twitter" target="_blank">
                  <BITIcon name={it_twitter} />
                </Link>
              </li>
            </ul>
          </div>
          <div className="it-search-wrapper">
            <span className="d-none d-md-block">
              {this.props.intl.formatMessage(messages.search)}
            </span>
            <Link
              to="#"
              aria-label={this.props.intl.formatMessage(messages.search)}
              className="search-link rounded-icon"
            >
              <BITIcon name={it_search} />
            </Link>
          </div>
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
)(HeaderCenter);
