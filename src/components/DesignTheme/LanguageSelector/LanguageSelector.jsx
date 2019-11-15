/**
 * LanguageSelector component.
 * @module components/DesignTheme/LanguageSelector/LanguageSelector
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Icon } from '@plone/volto/components';
import it_expand from 'bootstrap-italia/src/svg/it-expand.svg';

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
  };

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    let class_name = [];
    if (this.props.asNavItem) {
      class_name.push('nav-item');
    }
    class_name.push('dropdown');
    class_name.push(this.props.className);

    return (
      <div className={class_name.join(' ')}>
        <Link
          to="#"
          aria-expanded="false"
          className={
            (this.props.asNavItem ? 'nav-link ' : '') + 'dropdown-toggle'
          }
          data-toggle="dropdown"
        >
          <span>ITA</span>

          <Icon name={it_expand} className="icon-white d-none d-lg-block" />
        </Link>
        <div className="dropdown-menu">
          <div className="row">
            <div className="col-12">
              <div className="link-list-wrapper">
                <ul className="link-list">
                  <li>
                    <Link to="#" className="list-item">
                      <span>ITA</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="list-item">
                      <span>ENG</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({}))(LanguageSelector);
