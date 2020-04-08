/**
 * FooterInfos component.
 * @module components/Footer/FooterInfos
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { defineMessages, useIntl } from 'react-intl';
import {
  Form,
  Label,
  Input,
  Row,
  Col,
  Icon,
  Button,
  LinkList,
  LinkListItem,
} from 'design-react-kit/dist/design-react-kit';

const messages = defineMessages({
  goToPage: {
    id: 'Vai alla pagina',
    defaultMessage: 'Vai alla pagina',
  },
  at_title: {
    id: 'Amministrazione trasparente',
    defaultMessage: 'Amministrazione trasparente',
  },
  at_description: {
    id: 'Amministrazione trasparente description',
    defaultMessage:
      'I dati personali pubblicati sono riutilizzabili solo alle condizioni previste dalla direttiva comunitaria 2003/98/CE e dal d.lgs. 36/2006',
  },
  amministrazione: {
    id: 'Amministrazione',
    defaultMessage: 'Amministrazione',
  },
  contatti: {
    id: 'Contatti',
    defaultMessage: 'Contatti',
  },
  pec: {
    id: 'PEC',
    defaultMessage: 'Posta Elettronica Certificata',
  },
  urp: {
    id: 'URP',
    defaultMessage: 'URP - Ufficio Relazioni con il Pubblico',
  },
  newsletter: {
    id: 'Newsletter',
    defaultMessage: 'Newsletter',
  },
  subscribe: {
    id: 'Subscribe',
    defaultMessage: 'Iscriviti',
  },
  followUs: {
    id: 'Follow us',
    defaultMessage: 'Seguici su',
  },
});

const FooterInfos = () => {
  const intl = useIntl();

  return (
    <Row tag="div">
      <Col
        lg={3}
        md={3}
        className="pb-2"
        tag="div"
        widths={['xs', 'sm', 'md', 'lg', 'xl']}
      >
        <h4>
          <Link
            to="/amministrazione"
            title={
              intl.formatMessage(messages.goToPage) +
              ':' +
              intl.formatMessage(messages.amministrazione)
            }
          >
            {intl.formatMessage(messages.at_title)}
          </Link>
        </h4>
        <p>{intl.formatMessage(messages.at_description)}</p>
      </Col>
      <Col
        lg={3}
        md={3}
        className="pb-2"
        tag="div"
        widths={['xs', 'sm', 'md', 'lg', 'xl']}
      >
        <h4>
          <Link
            to="/contatti"
            title={
              intl.formatMessage(messages.goToPage) +
              ':' +
              intl.formatMessage(messages.contatti)
            }
          >
            {intl.formatMessage(messages.contatti)}
          </Link>
        </h4>
        <p>
          <strong>Nome del Comune</strong>
          <br />
          Via Roma 0 - 00000 Lorem Ipsum Codice fiscale / P. IVA: 000000000
        </p>

        <LinkList className="footer-list clearfix">
          <LinkListItem
            to="#"
            tag={Link}
            title={
              intl.formatMessage(messages.goToPage) +
              ':' +
              intl.formatMessage(messages.pec)
            }
          >
            {intl.formatMessage(messages.pec)}
          </LinkListItem>
          <LinkListItem
            to="#"
            tag={Link}
            title={
              intl.formatMessage(messages.goToPage) +
              ':' +
              intl.formatMessage(messages.urp)
            }
          >
            {intl.formatMessage(messages.urp)}
          </LinkListItem>
        </LinkList>
      </Col>
      <Col
        lg={3}
        md={3}
        className="pb-2"
        tag="div"
        widths={['xs', 'sm', 'md', 'lg', 'xl']}
      >
        <h4>
          <Link
            to="#"
            title={
              intl.formatMessage(messages.goToPage) +
              ': ' +
              intl.formatMessage(messages.newsletter)
            }
          >
            {intl.formatMessage(messages.newsletter)}
          </Link>
        </h4>
        <Form action="#" className="form-newsletter" method="post" tag="form">
          <Label
            className="text-white font-weight-semibold active"
            htmlFor="input-newsletter"
            style={{
              transition: 'none 0 ease 0',
            }}
            tag="label"
            widths={['xs', 'sm', 'md', 'lg', 'xl']}
          >
            Iscriviti per riceverla
          </Label>
          <Input
            type="email"
            id="input-newsletter"
            name="input-newsletter"
            placeholder="mail@example.com"
            className="mb-3"
          />
          <Button
            color="primary"
            className="btn-icon"
            type="submit"
            tag="button"
            icon={false}
          >
            <Icon icon="it-mail" color="white" padding={false} size="" />
            <span>{intl.formatMessage(messages.subscribe)}</span>
          </Button>
        </Form>
      </Col>
      <Col
        lg={3}
        md={3}
        className="pb-2"
        tag="div"
        widths={['xs', 'sm', 'md', 'lg', 'xl']}
      >
        <h4>
          <Link to="#">{intl.formatMessage(messages.followUs)}</Link>
        </h4>
        <ul className="list-inline text-left social">
          <li className="list-inline-item">
            <Link className="p-2 text-white" to="#" target="_blank">
              <Icon
                icon="it-facebook"
                color="white"
                className="align-top"
                padding={false}
                size="sm"
              />

              <span className="sr-only">Facebook</span>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link className="p-2 text-white" to="#" target="_blank">
              <Icon
                icon="it-twitter"
                color="white"
                className="align-top"
                padding={false}
                size="sm"
              />

              <span className="sr-only">Twitter</span>
            </Link>
          </li>
        </ul>
      </Col>
    </Row>
  );
};

export default FooterInfos;
