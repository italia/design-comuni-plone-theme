/**
 * HeaderCenter component.
 * @module components/Header/HeaderCenter
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Icon from '../Icon/Icon';
import Brand from '../Brand/Brand';

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
      <div className="it-header-center-content-wrapper">
        <div className="it-brand-wrapper">
          <Link to="/">
            <Icon icon="it-pa" />
            <Brand />
          </Link>
        </div>
        <div className="it-right-zone">
          <div className="it-socials d-none d-md-flex">
            <span>Seguici su</span>
            <ul>
              <li>
                <a aria-label="Facebook" href="#" target="_blank">
                  <Icon icon="it-facebook" />
                </a>
              </li>
              <li>
                <a aria-label="Twitter" href="#" target="_blank">
                  <Icon icon="it-twitter" />
                </a>
              </li>
            </ul>
          </div>
          <div className="it-search-wrapper">
            <span className="d-none d-md-block">Cerca</span>
            <a aria-label="Cerca" className="search-link rounded-icon" href="#">
              <Icon icon="it-search" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  token: state.userSession.token,
}))(HeaderCenter);
