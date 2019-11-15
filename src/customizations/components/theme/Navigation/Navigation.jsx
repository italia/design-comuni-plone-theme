/**
 * Navigation components.
 * @module components/theme/Navigation/Navigation
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isMatch } from 'lodash';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { defineMessages, injectIntl } from 'react-intl';
import { getBaseUrl } from '@plone/volto/helpers';
import { getNavigation } from '@plone/volto/actions';
import { BITIcon, ITBurger } from '~/components/DesignTheme/Icons';
/*
const messages = defineMessages({
  closeMobileMenu: {
    id: 'Close menu',
    defaultMessage: 'Close menu',
  },
  openMobileMenu: {
    id: 'Open menu',
    defaultMessage: 'Open menu',
  },
});*/

/**
 * Navigation container class.
 * @class Navigation
 * @extends Component
 */
class Navigation extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    getNavigation: PropTypes.func.isRequired,
    pathname: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        url: PropTypes.string,
      }),
    ).isRequired,
    argumentsItems: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        url: PropTypes.string,
      }),
    ),
  };

  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs Navigation
   */
  constructor(props) {
    super(props);
    /* this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.closeMobileMenu = this.closeMobileMenu.bind(this);
    this.state = {
      isMobileMenuOpen: false,
    };*/
    this.argumentsItems = [
      { title: 'Argomento 1', url: '/argomenti/argomento-1' },
      { title: 'Argomento 2', url: '/argomenti/argomento-2' },
      { title: 'Tutti gli argomenti...', url: '/argomenti', type: 'all' },
    ];
  }

  /**
   * Component will mount
   * @method componentWillMount
   * @returns {undefined}
   */
  componentWillMount() {
    this.props.getNavigation(getBaseUrl(this.props.pathname));
  }

  /**
   * Component will receive props
   * @method componentWillReceiveProps
   * @param {Object} nextProps Next properties
   * @returns {undefined}
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps.pathname !== this.props.pathname) {
      this.props.getNavigation(getBaseUrl(nextProps.pathname));
    }
  }

  /**
   * Check if menu is active
   * @method isActive
   * @param {string} url Url of the navigation item.
   * @returns {bool} Is menu active?
   */
  isActive(url) {
    return (
      (url === '' && this.props.pathname === '/') ||
      (url !== '' && isMatch(this.props.pathname.split('/'), url.split('/')))
    );
  }

  /**
   * Check if section is active
   * @method isActiveSection
   * @param {string} url Url of the navigation item.
   * @returns {bool} Is section active?
   */
  isActiveSection(url) {
    return (
      (url === '' && this.props.pathname === '/') ||
      (url !== '' && isMatch(this.props.pathname.split('/'), url.split('/')))
    );
  }

  /**
   * Toggle mobile menu's open state
   * @method toggleMobileMenu
   * @returns {undefined}
  
  toggleMobileMenu() {
    this.setState({ isMobileMenuOpen: !this.state.isMobileMenuOpen });
  } */

  /**
   * Close mobile menu
   * @method closeMobileMenu
   * @returns {undefined}
   
  closeMobileMenu() {
    if (!this.state.isMobileMenuOpen) {
      return;
    }
    this.setState({ isMobileMenuOpen: false });
  }*/

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    return (
      <nav className="navbar navbar-expand-lg has-megamenu">
        <button
          aria-controls="nav10"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="custom-navbar-toggler"
          data-target="#nav10"
          type="button"
        >
          <BITIcon name={ITBurger} />
        </button>
        <div className="navbar-collapsable" id="nav10">
          <div className="overlay" />
          <div className="close-div sr-only">
            <button className="btn close-menu" type="button">
              <span className="it-close" />
              close
            </button>
          </div>
          <div className="menu-wrapper">
            <ul className="navbar-nav">
              {this.props.items.map(item => (
                <li
                  key={item.url}
                  className={
                    this.isActive(item.url) ? 'nav-item active' : 'nav-item'
                  }
                >
                  <Link
                    to={item.url === '' ? '/' : item.url}
                    className={
                      this.isActive(item.url) ? 'nav-link active' : 'nav-link'
                    }
                  >
                    <span>{item.title}</span>
                    {this.isActive(item.url) ? (
                      <span className="sr-only">menu selezionato</span>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="navbar-nav navbar-secondary">
              {this.argumentsItems.map(arg => (
                <li className="nav-item" key={arg.url}>
                  {/* section == 'argomento' ?'active':null*/}
                  <Link
                    to={arg.url}
                    className={
                      this.isActiveSection(arg.url)
                        ? 'nav-link active'
                        : 'nav-link'
                    }
                  >
                    {arg.type == 'all' ? (
                      <span className="font-weight-bold">{arg.title}</span>
                    ) : (
                      arg.title
                    )}

                    {this.isActiveSection(arg.url) ? (
                      <span className="sr-only">menu selezionato</span>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default compose(
  injectIntl,
  connect(
    state => ({
      items: state.navigation.items,
    }),
    { getNavigation },
  ),
)(Navigation);
