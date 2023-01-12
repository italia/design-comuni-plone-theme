import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { CardPersona } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { Row, Col } from 'design-react-kit';

const messages = defineMessages({
  persone_struttura: {
    id: 'persone_struttura',
    defaultMessage: 'Persone',
  },
  persone_p_description: {
    id: 'persone_p_description',
    defaultMessage: 'Tutte le persone che fanno parte di questo servizio',
  },
});

const UOPeople = ({ content }) => {
  const intl = useIntl();

  return content?.persone_struttura?.length > 0 ? (
    <article
      id="persone-struttura"
      className="it-page-section anchor-offset mt-5"
    >
      <h3 id="header-persone-struttura">
        {intl.formatMessage(messages.persone_struttura)}
      </h3>
      <p className="mt-4">
        {intl.formatMessage(messages.persone_p_description)}:
      </p>
      <Row className="card-wrapper card-teaser-wrapper  ruolo-persone-struttura">
        {content?.persone_struttura?.map((p, _i) => {
          return (
            <Col xs="12" lg="12" xl="6" md="12" key={p['@id']}>
              <CardPersona
                item={p}
                className={'shadow'}
                showImage={true}
                titleTagName={'h5'}
                titleClassName={'big-heading'}
                listingText={p?.incarichi}
              />
            </Col>
          );
        })}
      </Row>
    </article>
  ) : (
    <></>
  );
};

export default UOPeople;
