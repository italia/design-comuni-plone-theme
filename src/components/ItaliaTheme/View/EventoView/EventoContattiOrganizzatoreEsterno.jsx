import PropTypes from 'prop-types';
import { Card, CardBody } from 'design-react-kit';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import {
  RichText,
  richTextHasContent,
  ContactLink,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const EventoContattiOrganizzatoreEsterno = ({ content }) => {
  return richTextHasContent(content?.organizzato_da_esterno) ||
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
          {content?.reperibilita?.replace(/(<([^>]+)>)/g, '').length > 0 && (
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
  ) : null;
};

EventoContattiOrganizzatoreEsterno.propTypes = {
  content: PropTypes.object.isRequired,
};

export default EventoContattiOrganizzatoreEsterno;
