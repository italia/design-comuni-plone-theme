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
    <section
      id="persone-struttura"
      className="it-page-section anchor-offset mb-5 "
    >
      <h2 className="mb-3 h4" id="header-persone-struttura">
        {intl.formatMessage(messages.persone_struttura)}
      </h2>
      <p>{intl.formatMessage(messages.persone_p_description)}:</p>

      <Row className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal ruolo-persone-struttura">
        {content?.persone_struttura?.map((p, _i) => {
          return (
            <Col xs="12" lg="12" xl="6" md="12" className="mb-3" key={p['@id']}>
              <CardPersona
                item={p}
                className={'shadow-sm'}
                showImage={true}
                titleTagName="h3"
                titleClassName="h5"
              />
            </Col>
          );
        })}
      </Row>
    </section>
  ) : (
    <></>
  );
};

export default UOPeople;
