import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useIntl, defineMessages } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Spinner, Card, CardBody } from 'design-react-kit';
import { UniversalLink } from '@plone/volto/components';
import { getContacts } from 'design-comuni-plone-theme/actions';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';

const messages = defineMessages({
  contact_block_title: {
    id: 'contact_block_title',
    defaultMessage: 'Contatta il comune',
  },
});

const ContactsBlock = () => {
  const intl = useIntl();
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts(pathname));
  }, [dispatch, pathname]);

  const contacts = useSelector((state) => state.contacts) ?? {};
  const contactsItems = contacts?.result?.items ?? [];
  const isContactsLoading = contacts.loading;
  const isContactsLoaded = contacts.loaded;

  return contactsItems.length > 0 ? (
    <section className="contacts-block bg-light py-5">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col xs={12} lg={6} xl={6} xxl={6}>
            {isContactsLoading && !isContactsLoaded && (
              <div className="d-flex justify-content-center">
                <Spinner active />
              </div>
            )}
            {!isContactsLoading && contactsItems?.length > 0 && (
              <Card className="contacts-box">
                <CardBody>
                  <h2>{intl.formatMessage(messages.contact_block_title)}</h2>
                  <div>
                    <ul className="mb-0 mt-3 contacts-list">
                      {contactsItems.map((contact, idx) => (
                        <li key={idx}>
                          <UniversalLink
                            overrideMarkSpecialLinks={true}
                            href={contact.contact}
                            className="d-flex align-items-center"
                          >
                            <span className="icon-container d-flex justify-content-center">
                              <Icon icon={contact.icon} color="current" />
                            </span>
                            <span className="text-container">
                              {contact.title}
                            </span>
                          </UniversalLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardBody>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  ) : (
    <></>
  );
};

export default ContactsBlock;
