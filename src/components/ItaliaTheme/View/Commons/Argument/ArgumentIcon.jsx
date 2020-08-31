import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/**
 * Dates view component class.
 * @function ArgumentIcon
 * @params {object} Dates: object.
 * @returns {string} Markup of the component.
 */
const ArgumentIcon = ({ icon }) => {
  return (
    <div className="icon-argument-container d-flex align-items-center justify-content-center mb-2 lightgrey-bg-c2">
      <FontAwesomeIcon icon={icon} className="show-icon"/>
    </div>
  );
};

export default ArgumentIcon;

ArgumentIcon.propTypes = {
  icon: PropTypes.string,
};
