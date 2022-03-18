import React from 'react';
import { defineMessages, useIntl } from 'react-intl';

import {
  richTextHasContent,
  Metadata,
  RelatedArticles,
  HelpBox,
} from '@italia/components/ItaliaTheme/View';

const messages = defineMessages({
  sede_di: {
    id: 'sede_di',
    defaultMessage: 'Sede di',
  },
});

const VenueMoreInfos = ({ content }) => {
  const intl = useIntl();

  return (
    <Metadata content={content}>
      {(richTextHasContent(content?.ulteriori_informazioni) ||
        content.sede_di?.length > 0) && (
        <>
          {/* SEDE DI */}
          {content.sede_di?.length > 0 && (
            <div className="mb-5">
              <RelatedArticles
                title_size={'h5'}
                items={content.sede_di}
                title={intl.formatMessage(messages.sede_di)}
                noMargin
              />
            </div>
          )}

          {/* HELP BOX - ULTERIORI INFORMAZIONI */}
          {richTextHasContent(content?.ulteriori_informazioni) && (
            <HelpBox text={content?.ulteriori_informazioni} />
          )}
        </>
      )}
    </Metadata>
  );
};

export default VenueMoreInfos;