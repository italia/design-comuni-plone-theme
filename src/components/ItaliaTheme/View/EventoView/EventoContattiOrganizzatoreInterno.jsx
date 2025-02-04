import PropTypes from 'prop-types';
import {
  richTextHasContent,
  OfficeCard,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const EventoContattiOrganizzatoreInterno = ({ content }) => {
  return content?.organizzato_da_interno?.length > 0 ? (
    <div className="mb-3">
      {content?.organizzato_da_interno?.map((item, index) => (
        <OfficeCard
          margin_bottom={index < content?.organizzato_da_interno?.length - 1}
          key={item['@id']}
          office={item}
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
