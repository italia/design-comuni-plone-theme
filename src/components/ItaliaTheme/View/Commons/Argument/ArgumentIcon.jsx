import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@italia/components/ItaliaTheme';

/**
 * Dates view component class.
 * @function ArgumentIcon
 * @params {object} Dates: object.
 * @returns {string} Markup of the component.
 */
const ArgumentIcon = ({ icon }) => {
  return icon ? (
    <div className="icon-argument-container d-flex align-items-center justify-content-center mb-2 lightgrey-bg-c2">
      <Icon icon={icon} />
    </div>
  ) : null;
};

export default ArgumentIcon;

ArgumentIcon.propTypes = {
  icon: PropTypes.string,
};
