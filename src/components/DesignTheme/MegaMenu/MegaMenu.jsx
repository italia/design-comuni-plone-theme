/**
 * Navigation components.
 * @module components/theme/Navigation/Navigation
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isMatch } from 'lodash';
import { compose } from 'redux';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { defineMessages, injectIntl } from 'react-intl';
import { LinkList, LinkListItem } from '~/components/DesignTheme';
import { BITIcon, it_arrow_right } from '~/components/DesignTheme/Icons';
import { Nav, Dropdown, Row, Col } from 'react-bootstrap';

const messages = defineMessages({
  menu_selected: {
    id: 'Menu selezionato',
    defaultMessage: 'Menu selezionato',
  },
  view_all: {
    id: 'Vedi tutto',
    defaultMessage: 'Vedi tutto',
  },
});

const megamenu_max_rows = 6;
const megamenu_max_cols = 3;
/**
 * MegaMenu MegaMenu container class.
 * @class MegaMenu MegaMenu
 * @extends Component
 */
class MegaMenu extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    pathname: PropTypes.string.isRequired,
    item: PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          url: PropTypes.string,
        }),
      ),
    }).isRequired,
    intl: PropTypes.any,
  };

  /**
   * Check if menu is active
   * @method isActive
   * @param {string} url Url of the navigation item.
   * @returns {bool} Is menu active?
   */
  isActive = url => {
    var ret =
      (url === '' &&
        (this.props.pathname === '/' || this.props.pathname === '')) ||
      (url !== '' && isMatch(this.props.pathname.split('/'), url.split('/')));
    console.log('isActive ' + url, ret);
    return ret;
  };
  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    var content = null;
    var children = this.props.item.items;

    if (children && children.length) {
      //megamenu
      var childrenGroups = [];
      if (children.size < megamenu_max_rows) {
        childrenGroups.push(children);
      } else {
        var rows = Math.floor(children.length / megamenu_max_cols);
        for (var i = 0; i < children.length; i++) {
          var group = Math.floor(i % rows);
          if (!childrenGroups[i]) {
            childrenGroups.push([]);
          }
          childrenGroups[group].push(children[i]);
        }
      }

      content = (
        <Dropdown
          as="li"
          className={cx('nav-item megamenu', {
            active: this.isActive(this.props.item.url),
          })}
          key={this.props.item.url}
        >
          <Dropdown.Toggle
            as={Nav.Link}
            className={cx(null, {
              active: this.isActive(this.props.item.url),
            })}
          >
            <span>{this.props.item.title}</span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Row>
              {childrenGroups.map((group, index) => (
                <Col lg={4} key={'group_' + index}>
                  <LinkList>
                    {group.map(child => (
                      <LinkListItem
                        href={child.url}
                        title={child.title}
                        key={child.url}
                        className={cx(null, {
                          active: this.isActive(child.url),
                        })}
                      >
                        <span>{child.title}</span>
                      </LinkListItem>
                    ))}
                  </LinkList>
                </Col>
              ))}
            </Row>

            <div className="it-external bottom-right">
              <Row>
                <Col lg={8} />
                <Col lg={4}>
                  <LinkList>
                    <li className="it-more">
                      <Link
                        className="list-item medium"
                        to={this.props.item.url}
                      >
                        <span>
                          {this.props.intl.formatMessage(messages.view_all)}
                        </span>
                        <BITIcon name={it_arrow_right} />
                      </Link>
                    </li>
                  </LinkList>
                </Col>
              </Row>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      );
    } else {
      content = (
        <Nav.Item
          as="li"
          className={cx(null, {
            active: this.isActive(this.props.item.url),
          })}
          key={this.props.item.url}
        >
          <Nav.Link
            href={this.props.item.url === '' ? '/' : this.props.item.url}
            eventKey={this.props.item.url}
            active={this.isActive(this.props.item.url)}
          >
            <span>{this.props.item.title}</span>
            {this.isActive(this.props.item.url) ? (
              <span className="sr-only">
                {this.props.intl.formatMessage(messages.menu_selected)}
              </span>
            ) : null}
          </Nav.Link>
        </Nav.Item>
      );
    }
    return content;
  }
}

export default compose(injectIntl)(MegaMenu);
