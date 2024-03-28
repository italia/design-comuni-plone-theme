// TODO REMOVEME Sembra non più usato, rimuovere
import React from 'react';
import PropTypes from 'prop-types';

import { defineMessages, useIntl } from 'react-intl';
import { ContactLink } from 'design-comuni-plone-theme/components/ItaliaTheme/View';

/**
 * UOTelephones component class.
 * @function UOTelephones
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */

const messages = defineMessages({
  telefono_sede: {
    id: 'telefono_sede',
    defaultMessage: 'Telefono',
  },
});

const UOTelephones = ({ content }) => {
  const intl = useIntl();

  return content?.telefono ? (
    <div className="font-serif contatti">
      <dt>{intl.formatMessage(messages.telefono_sede)}: </dt>
      <dd>
        <ContactLink tel={content.telefono} label={false} />
      </dd>
    </div>
  ) : null;
};

export default UOTelephones;

UOTelephones.propTypes = {
  content: PropTypes.object,
};
