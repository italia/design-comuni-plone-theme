import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'design-volto-theme/components/ItaliaTheme';

/**
 * Dates view component class.
 * @function ArgumentIcon
 * @params {object} Dates: object.
 * @returns {string} Markup of the component.
 */
const ArgumentIcon = ({ icon }) => {
  return icon ? (
    <div className="icon-argument-container mb-2">
      <Icon icon={icon} />
    </div>
  ) : null;
};

export default ArgumentIcon;

ArgumentIcon.propTypes = {
  icon: PropTypes.string,
};
