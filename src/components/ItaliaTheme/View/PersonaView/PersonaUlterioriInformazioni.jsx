import React from 'react';
import {
  Metadata,
  richTextHasContent,
  HelpBox,
} from '@italia/components/ItaliaTheme/View';

const PersonaUlterioriInformazioni = ({ content }) => {
  return (
    <Metadata content={content}>
      {richTextHasContent(content?.ulteriori_informazioni) && (
        <HelpBox text={content?.ulteriori_informazioni} />
      )}
    </Metadata>
  );
};

export default PersonaUlterioriInformazioni;
