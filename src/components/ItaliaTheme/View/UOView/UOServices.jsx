import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import {
  Row,
  Col,
  Card,
  CardBody,
  CardCategory,
  CardTitle,
  CardText,
} from 'design-react-kit';
import { UniversalLink } from '@plone/volto/components';

const messages = defineMessages({
  servizi_offerti: {
    id: 'servizi_offerti',
    defaultMessage: 'Servizi disponibili',
  },
});

const UOServices = ({ content }) => {
  const intl = useIntl();

  return content?.servizi_offerti?.length > 0 ? (
    <section
      id={'servizi_offerti'}
      className={'it-page-section anchor-offset mt-5'}
    >
      <h2 id={`header-servizi_offerti`} className="h4">
        {intl.formatMessage(messages.servizi_offerti)}
      </h2>

      <Row className="card-wrapper card-teaser-wrapper mt-4">
        {content?.servizi_offerti?.map((servizio, i) => (
          <Col xs="12" lg="6">
            <Card className="shadow rounded">
              <CardBody>
                <CardCategory date="">{servizio.parent_title}</CardCategory>
                <CardTitle tag="h5" className="big-heading">
                  <UniversalLink href={servizio['@id']}>
                    {servizio.title}
                  </UniversalLink>
                </CardTitle>
                <CardText>{servizio.description}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  ) : null;
};

export default UOServices;
