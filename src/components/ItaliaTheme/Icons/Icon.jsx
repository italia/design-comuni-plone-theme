/**
 * Icon component.
 * @module components/ItaliaTheme/Icons/SectionIcon
 */
import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DesignIcon from './DesignIcon';
import TelegramSVG from './svg/TelegramSVG';

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

    const parts = icon.split(' ');
    return icon.indexOf('it-') === 0 ? (
      <DesignIcon {...props} className={classes} />
    ) : icon === 'telegram' ? (
      <TelegramSVG className={classes} />
    ) : parts.length > 1 ? (
      <FontAwesomeIcon
        icon={[parts[0], parts[1]]}
        className={`fal ${classes}`}
      />
    ) : (
      <FontAwesomeIcon icon={icon} className={`fal ${classes}`} />
    );
  }
  return null;
};

export default Icon;
