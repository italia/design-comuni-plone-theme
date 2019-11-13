/**
 * Brand component.
 * @module components/Brand/Brand
 */

import React, { Component } from 'react';

class Brand extends Component {
  render() {
    return (
      <div className="it-brand-text">
        <h2 className="no_toc">Nome del Comune</h2>
        <h3 className="no_toc d-none d-md-block">
          Uno dei tanti Comuni d'Italia
        </h3>
      </div>
    );
  }
}

export default Brand;
