import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { DownloadFileFormat } from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  file_principale: {
    id: 'modulo_file_principale',
    defaultMessage: 'File principale',
  },
});

const ModuloFilePrincipale = ({ content }) => {
  const intl = useIntl();

  return (
    <div className="genericcard card card-teaser shadow p-4 mt-3 rounded">
      <div className="card-body">
        <h5 className="card-title">
          {intl.formatMessage(messages.file_principale)}
        </h5>
        <DownloadFileFormat file={content.file_principale} iconSize="2x" />
      </div>
    </div>
  );
};

ModuloFilePrincipale.propTypes = {
  content: PropTypes.shape({
    file_principale: PropTypes.object,
  }).isRequired,
};

export default ModuloFilePrincipale;
