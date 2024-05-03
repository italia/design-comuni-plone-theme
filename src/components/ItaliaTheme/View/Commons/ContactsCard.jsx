import { Card, CardBody, CardText, CardTitle, Icon } from 'design-react-kit';
import { UniversalLink } from '@plone/volto/components';

import { renderPDCItemValue } from 'design-comuni-plone-theme/helpers';
import { useIntl } from 'react-intl';

const ContactsCard = ({ contact = {}, show_title = false, ...rest }) => {
  const intl = useIntl();
  const contactUrl = contact['@id'];

  return (
    <Card
      teaser
      noWrapper
      className="shadow rounded my-3 pt-0 contacts-card"
      {...rest}
    >
      {show_title && <Icon icon="it-telephone" />}
      <CardBody>
        <CardTitle className="h5">
          {show_title && (
            <UniversalLink href={contactUrl} className="text-decoration-none">
              {contact.title}
            </UniversalLink>
          )}
        </CardTitle>
        <CardText>
          {contact?.value_punto_contatto?.map((pdc, index) => (
            <span key={index}>
              <strong>
                <span className="pdc-type">{pdc.pdc_type}</span>
                <span className="pdc-desc">
                  {pdc.pdc_desc ? ` - ${pdc.pdc_desc}` : ''}:{' '}
                </span>
              </strong>
              {renderPDCItemValue(pdc, intl)}
            </span>
          )) ?? null}
        </CardText>
      </CardBody>
    </Card>
  );
};

export default ContactsCard;
