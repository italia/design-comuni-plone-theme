import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import {
  richTextHasContent,
  RichTextSection,
  ContactsCard,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';
import EventoContattiOrganizzatoreEsterno from 'design-comuni-plone-theme/components/ItaliaTheme/View/EventoView/EventoContattiOrganizzatoreEsterno';
import EventoContattiOrganizzatoreInterno from 'design-comuni-plone-theme/components/ItaliaTheme/View/EventoView/EventoContattiOrganizzatoreInterno';
import EventoContattiSupportatoDa from 'design-comuni-plone-theme/components/ItaliaTheme/View/EventoView/EventoContattiSupportatoDa';

const messages = defineMessages({
  contatti: {
    id: 'Contatti',
    defaultMessage: 'Contatti',
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
      <EventoContattiOrganizzatoreEsterno content={content} />

      {/* ---contatti interno */}
      <EventoContattiOrganizzatoreInterno content={content} />

      {/* ---supportato da */}
      <EventoContattiSupportatoDa content={content} />
    </RichTextSection>
  ) : null;
};

EventoContatti.propTypes = {
  content: PropTypes.object.isRequired,
};

export default EventoContatti;
