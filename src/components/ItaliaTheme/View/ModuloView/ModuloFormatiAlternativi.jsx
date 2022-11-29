import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { DownloadFileFormat } from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  formati_alternativi: {
    id: 'modulo_formati_alternativi',
    defaultMessage: 'Formati alternativi',
  },
});

const ModuloFormatiAlternativi = ({ content }) => {
  const intl = useIntl();

  return content.formato_alternativo_1 || content.formato_alternativo_2 ? (
    <div className="genericcard card card-teaser shadow p-4 mt-3 rounded">
      <div className="card-body">
        <h5 className="card-title">
          {intl.formatMessage(messages.formati_alternativi)}
        </h5>
        {content.formato_alternativo_1 && (
          <DownloadFileFormat
            file={content.formato_alternativo_1}
            iconSize="2x"
            className="me-4"
          />
        )}
        {content.formato_alternativo_2 && (
          <DownloadFileFormat
            file={content.formato_alternativo_2}
            iconSize="2x"
          />
        )}
      </div>
    </div>
  ) : (
    <></>
  );
};

ModuloFormatiAlternativi.propTypes = {
  content: PropTypes.shape({
    file_principale: PropTypes.object,
  }).isRequired,
};

export default ModuloFormatiAlternativi;
