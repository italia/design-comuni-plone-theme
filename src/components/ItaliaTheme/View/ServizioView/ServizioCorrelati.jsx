import React from 'react';
import { defineMessages, useIntl } from 'react-intl';

import {
  RichTextSection,
  GenericCard,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  related_items: {
    id: 'related_items',
    defaultMessage: 'Contenuti correlati',
  },
  servizi_collegati: {
    id: 'servizi_collegati',
    defaultMessage: 'Servizi collegati',
  },
  related_news: {
    id: 'related_news',
    defaultMessage: 'Notizie collegate',
  },
});

const ServizioCorrelati = ({ content }) => {
  const intl = useIntl();
  return content.servizi_collegati?.length > 0 ||
    /*content.related_news?.length > 0 ||*/
    content.relatedItems?.length > 0 ? (
    <RichTextSection
      tag_id="correlati"
      title={intl.formatMessage(messages.related_items)}
      title_tag="h4"
    >
      {content.servizi_collegati?.length > 0 && (
        <div className="mb-4">
          {/* <h5>{intl.formatMessage(messages.servizi_collegati)}</h5> */}
          <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
            {content.servizi_collegati.map((item, i) => (
              <GenericCard
                key={item['@id']}
                item={item}
                showimage={false}
                size="small"
              />
            ))}
          </div>
        </div>
      )}

      {/* {content.related_news?.length > 0 && (
        <div className="mb-4">
          <h5>{intl.formatMessage(messages.related_news)}</h5>
          <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
            {content.related_news.map((item, i) => (
              <NewsCard
                key={item['@id']}
                id={item['@id']}
                title={item.title}
                description={item.description}
                effective={item.effective}
                typology={item.typology}
              />
            ))}
          </div>
        </div>
      )} */}

      {content.relatedItems?.length > 0 && (
        <div className="mb-4">
          {/* <h5>{intl.formatMessage(messages.related_items)}</h5> */}

          <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
            {content.relatedItems.map((item, i) => (
              <GenericCard key={item['@id']} item={item} showimage={false} />
            ))}
          </div>
        </div>
      )}
    </RichTextSection>
  ) : null;
};

export default ServizioCorrelati;
