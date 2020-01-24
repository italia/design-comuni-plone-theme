/**
 * LanguageSelector component.
 * @module components/DesignTheme/LanguageSelector/LanguageSelector
 */

import React, { Component } from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LinkList, LinkListItem } from '@design/components/DesignTheme/';
import { BITIcon, it_expand } from '@design/components/DesignTheme/Icons';
import { Dropdown, Row, Col } from 'react-bootstrap';

/**
 * LanguageSelector component class.
 * @class LanguageSelector
 * @extends Component
 */
class LanguageSelector extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    token: PropTypes.string,
    className: PropTypes.string,
    asNavItem: PropTypes.bool,
  };
  /**
   * Default properties.
   * @property {Object} defaultProps Default properties.
   * @static
   */
  static defaultProps = {
    token: null,
    asNavItem: false,
    className: null,
  };

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    return (
      <Dropdown
        className={cx(
          { 'nav-item': this.props.asNavItem },
          this.props.className,
        )}
      >
        <Dropdown.Toggle
          id="language-selector"
          as={Link}
          to="#"
          className={cx(
            { 'nav-link': this.props.asNavItem },
            this.props.className,
          )}
        >
          <span>ITA</span>
          <BITIcon
            name={it_expand}
            color="white"
            className="d-none d-lg-block"
          />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Row>
            <Col size={12}>
              <LinkList>
                <LinkListItem href="/to">
                  <span>ITA</span>
                </LinkListItem>
                <LinkListItem href="/en">
                  <span>ENG</span>
                </LinkListItem>
              </LinkList>
            </Col>
          </Row>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default connect(state => ({}))(LanguageSelector);
