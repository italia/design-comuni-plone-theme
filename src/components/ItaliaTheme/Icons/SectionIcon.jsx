/**
 * SectionIcon component.
 * @module components/ItaliaTheme/Icons/SectionIcon
 */
import React from 'react';

import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';

const section_icons = {
  amministrazione: 'it-pa',
  servizi: 'it-settings',
  novita: 'it-calendar',
  'documenti-e-dati': 'it-file',
};
const SectionIcon = ({ section, iconProps }) => {
  const section_name = section.startsWith('/')
    ? section.substring(1, section.length)
    : section;

  const icon = section_icons[section_name];

  return icon ? <Icon icon={icon} {...iconProps} /> : null;
};

export default SectionIcon;
