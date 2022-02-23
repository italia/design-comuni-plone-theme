import React from 'react';

import { Attachments } from '@italia/components/ItaliaTheme/View';

const ServizioAllegati = ({ content }) => {
  return <Attachments content={content} folder_name={'allegati'} />;
};

export default ServizioAllegati;
