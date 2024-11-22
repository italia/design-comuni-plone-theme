/**
 * Modules view component.
 * @module components/theme/View/DocumentoView/Modules
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  RichTextSection,
  Module,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

/**
 * Modules view component class.
 * @function Modules
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const Modules = ({ content, title, id = 'documenti' }) => {
  const moduli =
    content.moduli_del_documento ??
    content.items?.filter((item) => item.id !== 'multimedia') ??
    [];

  return moduli.length > 0 ? (
    <RichTextSection tag_id={id} title={title}>
      <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal modules">
        {moduli.map((modulo) => (
          <Module key={modulo['@id']} item={modulo} />
        ))}
      </div>
    </RichTextSection>
  ) : null;
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Modules.propTypes = {
  content: PropTypes.shape({
    items: PropTypes.array,
  }).isRequired,
};

export default Modules;
