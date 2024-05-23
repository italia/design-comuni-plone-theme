import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import prettybytes from 'pretty-bytes';

import { UniversalLink } from '@plone/volto/components';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { RichTextSection } from 'design-comuni-plone-theme/components/ItaliaTheme/View';
import { getFileViewFormat } from 'design-comuni-plone-theme/helpers';

const ServizioCondizioni = ({ content }) => {
  const intl = useIntl();

  let label;

  if (content.condizioni_di_servizio) {
    const viewFormat = getFileViewFormat(content.condizioni_di_servizio);
    label = viewFormat?.label;
  }

  return content.condizioni_di_servizio ? (
    <RichTextSection
      tag_id="conditions"
      title={intl.formatMessage(messages.condizioni)}
    >
      <p>{intl.formatMessage(messages.condizioni_text)}</p>
      <div>
        <UniversalLink
          href={content.condizioni_di_servizio.download}
          className="list-item icon-left d-inline-block"
          data-element="service-file"
        >
          <span className="list-item-title-icon-wrapper">
            <Icon
              icon="it-clip"
              className="icon-primary me-1"
              title={intl.formatMessage(messages.condizioni_link)}
            />
            {intl.formatMessage(messages.condizioni_link)} (
            {label ? <span className="text-uppercase">{label} </span> : ''}
            <span className="list-item">
              {prettybytes(content.condizioni_di_servizio.size)})
            </span>
          </span>
        </UniversalLink>
      </div>
    </RichTextSection>
  ) : null;
};

ServizioCondizioni.propTypes = {
  content: PropTypes.shape({
    condizioni_di_servizio: PropTypes.shape({
      data: PropTypes.string,
    }),
  }),
};

export default ServizioCondizioni;

const messages = defineMessages({
  condizioni: {
    id: 'servizio_condizioni',
    defaultMessage: 'Condizioni di servizio',
  },
  condizioni_text: {
    id: 'servizio_condizioni_text',
    defaultMessage:
      'Per conoscere i dettagli di scadenze, requisiti e altre informazioni importanti, leggi i termini e le condizioni di servizio.',
  },
  condizioni_link: {
    id: 'servizio_condizioni_link',
    defaultMessage: 'Termini e condizioni di servizio',
  },
});
