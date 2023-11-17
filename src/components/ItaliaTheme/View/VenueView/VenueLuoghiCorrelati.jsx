import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { RichTextSection } from 'design-comuni-plone-theme/components/ItaliaTheme/View';

import LocationItem from 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/LocationItem';

const messages = defineMessages({
  luoghi_correlati: {
    id: 'luoghi_correlati',
    defaultMessage: 'Luoghi correlati',
  },
});

const VenueLuoghiCorrelati = ({ content }) => {
  const intl = useIntl();
  return content?.luoghi_correlati?.length > 0 ? (
    <RichTextSection
      tag_id={'luoghi_correlati'}
      title={intl.formatMessage(messages.luoghi_correlati)}
    >
      <div className="card-wrapper card-teaser-wrapper mb-5">
        {content.luoghi_correlati?.map((item, i) => (
          <LocationItem
            key={item['@id'] + i}
            location={item}
            show_icon={false}
            show_title_link={true}
            load={true}
            details_link={false}
          />
        ))}
      </div>
    </RichTextSection>
  ) : null;
};

export default VenueLuoghiCorrelati;
