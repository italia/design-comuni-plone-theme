import React from 'react';
import PropTypes from 'prop-types';

import { defineMessages, useIntl } from 'react-intl';
import { ContactLink } from 'design-volto-theme/components/ItaliaTheme/View';

/**
 * PersonaTelephones component class.
 * @function PersonaTelephones
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */

const messages = defineMessages({
  telefono: {
    id: 'telefono',
    defaultMessage: 'Tel',
  },
});

const PersonaTelephones = ({ content }) => {
  const intl = useIntl();
  const nItems = content?.telefono?.length;

  return nItems > 0 ? (
    <p>
      <strong>{intl.formatMessage(messages.telefono)}: </strong>
      {content.telefono.map((tel, index) => (
        <React.Fragment key={index}>
          <ContactLink tel={tel} label={false} />
          {index !== nItems - 1 && ', '}
        </React.Fragment>
      ))}
    </p>
  ) : null;
};

export default PersonaTelephones;

PersonaTelephones.propTypes = {
  content: PropTypes.object,
};
