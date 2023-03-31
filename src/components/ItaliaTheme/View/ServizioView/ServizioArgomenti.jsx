import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { Chip, ChipLabel } from 'design-react-kit';

import { flattenToAppURL } from '@plone/volto/helpers';

/**
 * ServizioArgomenti view component class.
 * @function ServizioArgomenti
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */

const messages = defineMessages({
  service_topics: {
    id: 'service_topics',
    defaultMessage: 'Argomenti:',
  },
});

const ServizioArgomenti = ({ content }) => {
  const intl = useIntl();

  return content?.tassonomia_argomenti?.length > 0 ? (
    <div className="mt-0 mb-5 servizio-arguments">
      <h5>
        <small>{intl.formatMessage(messages.service_topics)}</small>
      </h5>
      <div className="d-flex flex-wrap gap-2 mb-3">
        {content.tassonomia_argomenti.map((item, i) => (
          <a
            href={flattenToAppURL(item['@id'])}
            key={item['@id']}
            title={item.title}
            className="text-decoration-none me-2 d-inline-block"
            data-element="service-topic"
          >
            <Chip
              color="primary"
              disabled={false}
              large={false}
              simple
              tag="div"
            >
              <ChipLabel tag="span">{item.title}</ChipLabel>
            </Chip>
          </a>
        ))}
      </div>
    </div>
  ) : null;
};

export default ServizioArgomenti;

ServizioArgomenti.propTypes = {
  params: PropTypes.shape({
    content: PropTypes.object,
  }),
};
