import React from 'react';
import { TrasparenzaFields } from 'design-volto-theme/components/ItaliaTheme/View';
import config from '@plone/volto/registry';

const ServizioTrasparenza = ({ content }) => {
  return config.settings.showTrasparenzaFields ? (
    <TrasparenzaFields content={content} />
  ) : (
    <></>
  );
};

export default ServizioTrasparenza;
