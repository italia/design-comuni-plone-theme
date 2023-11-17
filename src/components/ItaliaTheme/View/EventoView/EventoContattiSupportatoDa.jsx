import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { OfficeCard } from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  supported_by: {
    id: 'supported_by',
    defaultMessage: 'Con il supporto di',
  },
});

const EventoContattiSupportatoDa = ({ content }) => {
  const intl = useIntl();

  return content?.supportato_da?.length > 0 ? (
    <div className="mb-5">
      <h3 className="mt-4 supported-by h5">
        {intl.formatMessage(messages.supported_by)}
      </h3>
      {content?.supportato_da?.map((item) => (
        <OfficeCard key={item['@id']} office={item} icon={'it-pa'} />
      ))}
    </div>
  ) : null;
};

EventoContattiSupportatoDa.propTypes = {
  content: PropTypes.object.isRequired,
};

export default EventoContattiSupportatoDa;
