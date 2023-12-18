import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { OfficeCard } from 'design-comuni-plone-theme/components/ItaliaTheme/View';
import { CardPersona } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { Row, Col } from 'design-react-kit';

const messages = defineMessages({
  struttura: {
    id: 'struttura',
    defaultMessage: 'Struttura',
  },
  legami_struttura_padre: {
    id: 'legami_struttura_padre',
    defaultMessage: 'Unità organizzativa genitore',
  },
  legami_strutture_figlie: {
    id: 'legami_strutture_figlie',
    defaultMessage: 'Servizi o uffici interni',
  },
  legami_altre_strutture: {
    id: 'legami_altre_strutture',
    defaultMessage: 'Servizi o uffici di riferimento',
  },
  responsabile: {
    id: 'responsabile',
    defaultMessage: 'Responsabile',
  },
  tipologia_organizzazione: {
    id: 'tipologia_organizzazione',
    defaultMessage: 'Tipologia di organizzazione',
  },
  assessore_riferimento: {
    id: 'assessore_riferimento',
    defaultMessage: 'Assessore di riferimento',
  },
});

const UOStructure = ({ content }) => {
  const intl = useIntl();

  return content?.legami_con_altre_strutture?.length > 0 ||
    content?.responsabile?.length > 0 ||
    content?.tipologia_organizzazione ||
    content?.uo_children?.length > 0 ||
    content?.uo_parent ||
    content?.assessore_riferimento?.length > 0 ? (
    <section id="struttura" className="it-page-section anchor-offset mb-5">
      {content.tipologia_organizzazione?.title && (
        <div className="mb-5">
          <h2 className="mb-3 h4">
            {intl.formatMessage(messages.tipologia_organizzazione)}
          </h2>
          <p className="font-serif">{content.tipologia_organizzazione.title}</p>
        </div>
      )}
      {(content.uo_parent ||
        content.uo_children?.length > 0 ||
        content.legami_con_altre_strutture?.length > 0) && (
        <div className="mb-5">
          <h2 id="header-struttura" className="mb-3 h4">
            {intl.formatMessage(messages.struttura)}
          </h2>

          {content.uo_parent && (
            <div className="mb-5">
              <h3 className="h5">
                {intl.formatMessage(messages.legami_struttura_padre)}
              </h3>
              <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal mb-3">
                <OfficeCard
                  key={content.uo_parent['@id']}
                  office={content.uo_parent}
                  show_contacts={false}
                />
              </div>
            </div>
          )}

          {content.uo_children?.length > 0 && (
            <div className="mb-5">
              <h3 className="h5">
                {intl.formatMessage(messages.legami_strutture_figlie)}
              </h3>
              <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal mb-3">
                {content.uo_children.map((uo, i) => {
                  return (
                    <OfficeCard
                      key={uo['@id']}
                      office={uo}
                      show_contacts={false}
                    />
                  );
                })}
              </div>
            </div>
          )}

          {content.legami_con_altre_strutture?.length > 0 && (
            <div className="mb-5">
              <h3 className="h5">
                {intl.formatMessage(messages.legami_altre_strutture)}
              </h3>
              <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal mb-3">
                {content.legami_con_altre_strutture.map((item, _i) => (
                  <OfficeCard key={item['@id']} office={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {content.responsabile?.length > 0 && (
        <div className="mb-5">
          <h3 className="h5">{intl.formatMessage(messages.responsabile)}</h3>
          <Row className="card-wrapper card-teaser-wrapper ruolo-persone-struttura">
            {content.responsabile.map((item, i) => (
              <Col xs="12" lg="12" xl="12" md="12" sm="12" key={item['@id']}>
                <CardPersona
                  item={item}
                  className="shadow-sm my-3"
                  showImage={true}
                  titleTagName="h4"
                  titleClassName="h5"
                />
              </Col>
            ))}
          </Row>
        </div>
      )}

      {content.assessore_riferimento?.length > 0 && (
        <div className="mb-5 ">
          <h3 className="h5">
            {intl.formatMessage(messages.assessore_riferimento)}
          </h3>
          <Row className="card-wrapper card-teaser-wrapper ">
            {content.assessore_riferimento.map((item, _i) => (
              <Col xs="12" lg="12" xl="6" md="12" sm="12" key={item['@id']}>
                <CardPersona
                  item={item}
                  className="shadow-sm my-3"
                  showImage={true}
                  titleTagName="h4"
                  titleClassName="h5"
                  listingText={item.incarichi}
                />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </section>
  ) : (
    <></>
  );
};

export default UOStructure;
