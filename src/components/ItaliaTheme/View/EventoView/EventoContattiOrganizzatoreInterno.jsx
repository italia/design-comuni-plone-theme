import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import {
  richTextHasContent,
  OfficeCard,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  organizzato_da: {
    id: 'organizzato_da',
    defaultMessage: 'Organizzato da',
  },
});

const EventoContattiOrganizzatoreInterno = ({ content }) => {
  const intl = useIntl();

  return content?.organizzato_da_interno?.length > 0 ? (
    <div className="mb-5">
      <h3 className="h5">{intl.formatMessage(messages.organizzato_da)}</h3>
      {content?.organizzato_da_interno?.map((item, index) => (
        <OfficeCard
          margin_bottom={index < content?.organizzato_da_interno?.length - 1}
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
  ) : null;
};

EventoContattiOrganizzatoreInterno.propTypes = {
  content: PropTypes.object.isRequired,
};

export default EventoContattiOrganizzatoreInterno;
