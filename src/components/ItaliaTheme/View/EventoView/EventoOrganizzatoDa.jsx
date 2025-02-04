import { defineMessages, useIntl } from 'react-intl';
import { richTextHasContent } from 'design-comuni-plone-theme/components/ItaliaTheme/View';
import EventoContattiOrganizzatoreInterno from 'design-comuni-plone-theme/components/ItaliaTheme/View/EventoView/EventoContattiOrganizzatoreInterno';
import EventoContattiOrganizzatoreEsterno from 'design-comuni-plone-theme/components/ItaliaTheme/View/EventoView/EventoContattiOrganizzatoreEsterno';

const messages = defineMessages({
  organizzato_da: {
    id: 'organizzato_da',
    defaultMessage: 'Organizzato da',
  },
});

const EventoOrganizzatoDa = ({ content }) => {
  const intl = useIntl();

  return content?.organizzato_da_interno?.length > 0 ||
    richTextHasContent(content?.organizzato_da_esterno) ||
    content?.telefono ||
    content?.email ||
    content?.fax ? (
    <div className="mb-5 mt-3">
      <h3 className="h5 mb-3">{intl.formatMessage(messages.organizzato_da)}</h3>

      {content?.organizzato_da_interno.length > 0 && (
        <EventoContattiOrganizzatoreInterno content={content} />
      )}

      {(richTextHasContent(content?.organizzato_da_esterno) ||
        content?.telefono ||
        content?.email ||
        content?.fax) && (
        <EventoContattiOrganizzatoreEsterno content={content} />
      )}
    </div>
  ) : null;
};

export default EventoOrganizzatoDa;
