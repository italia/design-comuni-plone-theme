/**
 * Navigation components.
 * @module components/theme/Navigation/Navigation
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isMatch } from 'lodash';
import { connect } from 'react-redux';
import { compose } from 'redux';
import cx from 'classnames';
import { defineMessages, injectIntl } from 'react-intl';
import { getBaseUrl } from '@plone/volto/helpers';
import { getNavigation } from '@plone/volto/actions';
import {
  BITIcon,
  it_burger,
  it_close_circle,
} from '~/components/DesignTheme/Icons';
import { Navbar, Nav } from 'react-bootstrap';

const messages = defineMessages({
  menu_selected: {
    id: 'Menu selezionato',
    defaultMessage: 'Menu selezionato',
  },
  close: {
    id: 'close',
    defaultMessage: 'Chiudi',
  },
});

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
      (url === '' &&
        (this.props.pathname === '/' || this.props.pathname === '')) ||
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
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    return (
      <Navbar expand="lg" className="has-megamenu">
        <Navbar.Toggle
          aria-controls="nav10"
          expanded="false"
          className="custom-navbar-toggler"
        >
          <BITIcon name={it_burger} />
        </Navbar.Toggle>
        <Navbar.Collapse
          id="nav10"
          bsPrefix="navbar-collapsable"
          dimension="width"
        >
          <Navbar.Toggle as="div" aria-controls="nav10" bsPrefix="overlay" />
          <div className="close-div">
            <Navbar.Toggle
              as="button"
              aria-controls="nav10"
              bsPrefix="btn"
              className="close-menu"
            >
              <span className="it-close" />
              <BITIcon name={it_close_circle} />
              <span className="sr-only">
                {this.props.intl.formatMessage(messages.close)}
              </span>
            </Navbar.Toggle>
          </div>

          <div className="menu-wrapper">
            <Nav as="ul">
              {this.props.items.map(item => (
                <Nav.Item
                  as="li"
                  className={this.isActive(item.url) ? 'active' : ''}
                  key={item.url}
                >
                  <Nav.Link
                    href={item.url === '' ? '/' : item.url}
                    eventKey={item.url}
                    active={this.isActive(item.url)}
                  >
                    <span>{item.title}</span>
                    {this.isActive(item.url) ? (
                      <span className="sr-only">
                        {this.props.intl.formatMessage(messages.menu_selected)}
                      </span>
                    ) : null}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>

            {/*Arguments menu*/}
            <Nav as="ul" className="navbar-secondary">
              {this.argumentsItems.map(item => (
                <Nav.Item
                  as="li"
                  className={this.isActive(item.url) ? 'active' : ''}
                  key={item.url}
                >
                  <Nav.Link
                    href={item.url === '' ? '/' : item.url}
                    eventKey={item.url}
                    active={this.isActive(item.url)}
                  >
                    <span
                      className={item.type == 'all' ? 'font-weight-bold' : ''}
                    >
                      {item.title}
                    </span>
                    {this.isActive(item.url) ? (
                      <span className="sr-only">
                        {this.props.intl.formatMessage(messages.menu_selected)}
                      </span>
                    ) : null}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
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
