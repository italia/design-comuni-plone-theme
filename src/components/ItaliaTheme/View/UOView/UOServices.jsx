import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { flattenToAppURL } from '@plone/volto/helpers';
import {
  Row,
  Col,
  Card,
  CardBody,
  CardCategory,
  CardTitle,
  CardText,
} from 'design-react-kit';
import { Link } from 'react-router-dom';

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
      <h3 id={`header-servizi_offerti`}>
        {intl.formatMessage(messages.servizi_offerti)}
      </h3>

      <Row className="card-wrapper card-teaser-wrapper mt-4">
        {content?.servizi_offerti?.map((servizio, i) => (
          <Col xs="12" lg="6">
            <Card className="shadow rounded">
              <CardBody>
                <CardCategory date="">
                  {flattenToAppURL(servizio?.['@id'])
                    ?.split('/')
                    ?.slice(-2, -1)}
                </CardCategory>
                <CardTitle tag="h5" className="big-heading">
                  <Link to={flattenToAppURL(servizio['id'])}>
                    {servizio?.title}
                  </Link>
                </CardTitle>
                <CardText>{servizio?.description}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  ) : null;
};

export default UOServices;
