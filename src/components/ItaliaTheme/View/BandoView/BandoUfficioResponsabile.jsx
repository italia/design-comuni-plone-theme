import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import {
  RichTextArticle,
  OfficeCard,
} from 'design-volto-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  ufficio_responsabile: {
    id: 'ufficio_responsabile',
    defaultMessage: 'Ufficio responsabile',
  },
});

const BandoUfficioResponsabile = ({ content }) => {
  const intl = useIntl();
  return content?.ufficio_responsabile?.length > 0 ? (
    <RichTextArticle
      tag_id="ufficio_responsabile"
      title={intl.formatMessage(messages.ufficio_responsabile)}
    >
      <div className="mb-5 mt-3">
        <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
          {content?.ufficio_responsabile?.map((item, i) => (
            <OfficeCard key={item['@id']} office={item} />
          ))}
        </div>
      </div>
    </RichTextArticle>
  ) : (
    <></>
  );
};

BandoUfficioResponsabile.propTypes = {
  content: PropTypes.shape({
    ufficio_responsabile: PropTypes.array,
  }).isRequired,
};
export default BandoUfficioResponsabile;
