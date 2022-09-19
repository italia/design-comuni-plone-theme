import React from 'react';
import {
  HelpBox,
  Metadata,
  richTextHasContent,
} from '@italia/components/ItaliaTheme/View';

const UOMoreInfos = ({ content }) => {
  return (
    <Metadata
      content={content}
      showTags={false}
      showSectionTitle={richTextHasContent(content?.ulteriori_informazioni)}
    >
      {richTextHasContent(content?.ulteriori_informazioni) && (
        <HelpBox text={content.ulteriori_informazioni} />
      )}
    </Metadata>
  );
};

export default UOMoreInfos;
