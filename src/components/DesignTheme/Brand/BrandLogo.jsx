/**
 * Brand component.
 * @module components/DesignTheme/Brand/BrandLogo
 */

import React, { Component } from 'react';
import { BITIcon, it_pa } from '~/components/DesignTheme/Icons';

class BrandLogo extends Component {
  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    return <BITIcon name={it_pa} />;
  }
}

export default BrandLogo;
