/**
 * Icon component.
 * @module components/ItaliaTheme/Icons/SectionIcon
 */
import React from 'react';
import classNames from 'classnames';
import { Icon as DesignIcon } from 'design-react-kit/dist/design-react-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = (props) => {
  const { icon, className, color, size, padding } = props;
  if (icon) {
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

    return icon.indexOf('it-') === 0 ? (
      <DesignIcon {...props} />
    ) : (
      <FontAwesomeIcon icon={icon} className={`fal ${classes}`} />
    );
  }
  return null;
};

export default Icon;
