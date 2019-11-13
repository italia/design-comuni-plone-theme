/**
 * Header component.
 * @module components/theme/Header/Header
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from '../Icon/Icon';
/**
 * Header component class.
 * @class Header
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
          <div className="nav-item dropdown">
            <a
              aria-expanded="false"
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
            >
              <span>ITA</span>
              <Icon
                color="white"
                icon="it-expand"
                className="d-none d-lg-block"
              />
            </a>
            <div className="dropdown-menu">
              <div className="row">
                <div className="col-12">
                  <div className="link-list-wrapper">
                    <ul className="link-list">
                      <li>
                        <a className="list-item" href="#">
                          <span>ITA</span>
                        </a>
                      </li>
                      <li>
                        <a className="list-item" href="#">
                          <span>ENG</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="btn btn-primary btn-icon btn-full"
            href="#"
            title="Accedi all'area personale"
          >
            <span className="rounded-icon">
              <Icon color="primary" icon="it-user" />
            </span>
            <span className="d-none d-lg-block">Accedi all'area personale</span>
          </a>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  token: state.userSession.token,
}))(HeaderSlim);
