/**
 * LanguageSelector component.
 * @module components/ItaliaTheme/LanguageSelector/LanguageSelector
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { BITIcon, it_expand } from '@italia/components/ItaliaTheme/Icons';
import {
  Row,
  Col,
  DropdownMenu,
  DropdownToggle,
  Icon,
  LinkList,
  LinkListItem,
  UncontrolledDropdown,
} from 'design-react-kit/dist/design-react-kit';

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
      <UncontrolledDropdown nav tag="div">
        <DropdownToggle aria-haspopup caret color="secondary" nav>
          ITA
          <Icon color="" icon="it-expand" padding={false} size="" />
        </DropdownToggle>
        <DropdownMenu flip tag="div">
          <Row tag="div">
            <Col size="12" tag="div" widths={['xs', 'sm', 'md', 'lg', 'xl']}>
              <LinkList tag="div">
                <LinkListItem to="/it" tag={Link}>
                  <span>ITA</span>
                </LinkListItem>
                <LinkListItem to="/en" tag={Link}>
                  <span>ENG</span>
                </LinkListItem>
              </LinkList>
            </Col>
          </Row>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}

export default LanguageSelector;
