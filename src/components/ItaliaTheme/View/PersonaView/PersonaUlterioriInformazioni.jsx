import React from 'react';
import {
  Metadata,
  richTextHasContent,
  HelpBox,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const PersonaUlterioriInformazioni = ({ content }) => {
  return (
    <Metadata
      content={content}
      showSectionTitle={richTextHasContent(content?.ulteriori_informazioni)}
    >
      {richTextHasContent(content?.ulteriori_informazioni) && (
        <HelpBox text={content?.ulteriori_informazioni} />
      )}
    </Metadata>
  );
};

export default PersonaUlterioriInformazioni;
