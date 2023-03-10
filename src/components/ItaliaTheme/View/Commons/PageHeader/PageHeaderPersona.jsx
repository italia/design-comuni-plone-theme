import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import PropTypes from 'prop-types';

/**
 * PageHeaderPersona view component class.
 * @function PageHeaderPersona
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */

const messages = defineMessages({
  tipologia_persona: {
    id: 'tipologia_persona',
    defaultMessage: 'Tipologia persona',
  },
  ruolo: {
    id: 'ruolo',
    defaultMessage: 'Incarico',
  },
});

const PageHeaderPersona = ({ content }) => {
  const intl = useIntl();

  return content['@type'] === 'Persona' ? (
    <>
      {content?.tipologia_persona && !content.data_conclusione_incarico && (
        <p className="mb-0">
          <strong>{intl.formatMessage(messages.tipologia_persona)}:</strong>{' '}
          {content.tipologia_persona.title}
        </p>
      )}
      {content?.ruolo?.token && !content.data_conclusione_incarico && (
        <p className="mb-0">
          <strong>{intl.formatMessage(messages.ruolo)}:</strong>{' '}
          {content.ruolo.title}
        </p>
      )}
    </>
  ) : null;
};

export default PageHeaderPersona;

PageHeaderPersona.propTypes = {
  params: PropTypes.shape({
    content: PropTypes.object,
  }),
};
