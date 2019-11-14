/**
 * Brand component.
 * @module components/DesignTheme/Brand/Brand
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Brand extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    brand: PropTypes.string.isRequired,
    subBrand: PropTypes.string,
  };

  /**
   * Default properties.
   * @property {Object} defaultProps Default properties.
   * @static
   */
  static defaultProps = {
    brand: 'Nome comune',
  };

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    return (
      <div className="it-brand-text">
        <h2 className="no_toc">{this.props.brand}</h2>
        {this.props.subBrand ? (
          <h3 className="no_toc d-none d-md-block">{this.props.subBrand}</h3>
        ) : null}
      </div>
    );
  }
}

export default Brand;
