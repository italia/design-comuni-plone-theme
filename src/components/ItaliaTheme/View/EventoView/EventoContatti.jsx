import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { Card, CardBody, CardTitle } from 'design-react-kit';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import {
  RichText,
  richTextHasContent,
  RichTextSection,
  ContactLink,
  OfficeCard,
  ContactsCard,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  supported_by: {
    id: 'supported_by',
    defaultMessage: 'Con il supporto di',
  },
  contatti: {
    id: 'Contatti',
    defaultMessage: 'Contatti',
  },
  // event_web_site: {
  //   id: 'event_web_site',
  //   defaultMessage: "Sito web dell'evento",
  // },
  contatti_interni: {
    id: 'contatti_interni',
    defaultMessage: 'Contatti interni',
  },
  organizzato_da: {
    id: 'organizzato_da',
    defaultMessage: 'Organizzato da',
  },
});

const EventoContatti = ({ content }) => {
  const intl = useIntl();

  return richTextHasContent(content?.organizzato_da_esterno) ||
    content?.organizzato_da_interno.length > 0 ||
    content?.supportato_da?.length > 0 ||
    content?.contact_info?.length > 0 ? (
    <RichTextSection
      tag_id="contatti"
      title={intl.formatMessage(messages.contatti)}
    >
      {content.contact_info.map((contact) => (
        <ContactsCard contact={contact} key={contact['@id']} />
      ))}
      {/* ---organizzato da esterno */}
      {richTextHasContent(content?.organizzato_da_esterno) ||
      content?.telefono ||
      content?.email ||
      content?.fax ? (
        <div className="mb-5">
          <Card
            className="card card-teaser rounded shadow mt-3"
            noWrapper={true}
            tag="div"
          >
            <Icon icon="it-telephone" />

            <CardBody tag="div" className={'card-body pe-3'}>
              <RichText data={content.organizzato_da_esterno} />
              {content?.telefono && (
                <p className="card-text mt-3">
                  <ContactLink tel={content.telefono} label={true} />
                </p>
              )}
              {content?.fax && (
                <p className="card-text mt-3">
                  <ContactLink fax={content.fax} label={true} />
                </p>
              )}
              {content?.reperibilita?.replace(/(<([^>]+)>)/g, '').length >
                0 && (
                <p className="card-text mt-3">
                  {content?.reperibilita?.replace(/(<([^>]+)>)/g, '')}
                </p>
              )}
              {content?.email && (
                <p className="card-text mt-3">
                  <ContactLink email={content.email} label={true} />
                </p>
              )}
            </CardBody>
          </Card>
        </div>
      ) : null}
      {/* ---contatti interno */}
      {content?.organizzato_da_interno?.length > 0 && (
        <div className="mb-5">
          <h3 className="h5">{intl.formatMessage(messages.organizzato_da)}</h3>
          {content?.organizzato_da_interno?.map((item, index) => (
            <OfficeCard
              margin_bottom={
                index < content?.organizzato_da_interno?.length - 1
              }
              key={item['@id']}
              office={item}
              icon={'it-telephone'}
            >
              {richTextHasContent(content?.contatto_reperibilita) && (
                <p className="card-text mt-3">
                  {content?.contatto_reperibilita?.replace(/(<([^>]+)>)/g, '')}
                </p>
              )}
            </OfficeCard>
          ))}
        </div>
      )}
      {/* ---supportato da */}
      {content?.supportato_da?.length > 0 && (
        <div className="mb-5">
          <h3 className="mt-4 supported-by h5">
            {intl.formatMessage(messages.supported_by)}
          </h3>
          {content?.supportato_da?.map((item) => (
            <OfficeCard key={item['@id']} office={item} icon={'it-pa'} />
          ))}
        </div>
      )}
    </RichTextSection>
  ) : null;
};

EventoContatti.propTypes = {
  content: PropTypes.object.isRequired,
};

export default EventoContatti;
