import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';

import {
  RichTextSection,
  richTextHasContent,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const ServizioUlterioriInformazioni = ({ content }) => {
  const intl = useIntl();

  return (
    <>
      {richTextHasContent(content.ulteriori_informazioni) && (
        <RichTextSection
          content={content.ulteriori_informazioni}
          tag_id="more-info"
          title={intl.formatMessage(messages.other_info)}
        />
      )}
      {content.codice_ipa && (
        <RichTextSection title={intl.formatMessage(messages.codice_ipa)}>
          <p className="font-serif">{content.codice_ipa}</p>
        </RichTextSection>
      )}
      {content.settore_merceologico && (
        <RichTextSection
          title={intl.formatMessage(messages.settore_merceologico)}
        >
          <p className="font-serif">{content.settore_merceologico}</p>
        </RichTextSection>
      )}
    </>
  );
};

ServizioUlterioriInformazioni.propTypes = {
  content: PropTypes.shape({
    ulteriori_informazioni: PropTypes.shape({
      data: PropTypes.string,
    }),
  }),
};

export default ServizioUlterioriInformazioni;

const messages = defineMessages({
  other_info: {
    id: 'other_info',
    defaultMessage: 'Ulteriori informazioni',
  },
  codice_ipa: {
    id: 'codice_ipa',
    defaultMessage: "Codice dell'ente erogatore (ipa)",
  },
  settore_merceologico: {
    id: 'settore_merceologico',
    defaultMessage: 'Settore merceologico',
  },
});
