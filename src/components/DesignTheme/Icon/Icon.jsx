import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string,
  padding: PropTypes.bool,
};

const defaultProps = {
  color: '',
  size: '',
  icon: '',
  padding: false,
};

const Icon = ({ color, size, icon, className, padding, ...attributes }) => {
  const classes = classNames(
    'icon',
    className,
    {
      [`icon-${color}`]: color,
      [`icon-${size}`]: size,
      'icon-padded': padding,
    },
    size,
  );
  /*<svg className={classes} {...attributes}>
      <use xlinkHref={`${iconSprite}#${icon}`} />
    </svg>*/

  return (
    <svg className={classes} {...attributes}>
      <use xlinkHref={`#${icon}`} />
    </svg>
  );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
