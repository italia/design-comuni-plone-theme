/**
 * Brand component.
 * @module components/DesignTheme/Brand/Brand
 */

import React, { Component } from 'react';

import { BrandLogo, BrandText } from '~/components/DesignTheme';

class Brand extends Component {
  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    return (
      <>
        <BrandLogo />
        <BrandText />
      </>
    );
  }
}

export default Brand;
