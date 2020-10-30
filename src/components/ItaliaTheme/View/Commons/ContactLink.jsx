import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  telefono: {
    id: 'telefono',
    defaultMessage: 'Tel',
  },
  fax: {
    id: 'fax',
    defaultMessage: 'Fax',
  },
  email: {
    id: 'email',
    defaultMessage: 'E-mail',
  },

  call: {
    id: 'chiama_il_numero',
    defaultMessage: 'Chiama il numero',
  },
  call_fax: {
    id: 'chiama_il_numero_fax',
    defaultMessage: 'Contatta il numero di fax',
  },
  write_to: {
    id: 'scrivi_a_mail',
    defaultMessage: "Scrivi all'indirizzo",
  },
});

const ContactLink = ({ tel, fax, email, label = true, strong = false }) => {
  const intl = useIntl();
  let ret_label = null;
  let ret = null;

  if (tel) {
    ret_label = intl.formatMessage(messages.telefono);
    ret = (
      <a
        href={`tel:${tel}`}
        title={`${intl.formatMessage(messages.call)} ${tel}`}
      >
        {tel}
      </a>
    );
  } else if (fax) {
    ret_label = intl.formatMessage(messages.fax);
    ret = (
      <a
        href={`fax:${fax}`}
        title={`${intl.formatMessage(messages.call_fax)} ${fax}`}
      >
        {fax}
      </a>
    );
  } else if (email) {
    ret_label = intl.formatMessage(messages.email);
    ret = (
      <>
        <a
          href={`mailto:${email}`}
          title={`${intl.formatMessage(messages.write_to)} ${email}`}
        >
          {email}
        </a>
      </>
    );
  }
  ret_label = label ? <>{ret_label}: </> : null;
  ret_label = label ? strong ? <strong>{ret_label}</strong> : ret_label : null;

  return ret ? (
    <>
      {ret_label}
      {ret}
    </>
  ) : null;
};

ContactLink.propTypes = {
  tel: PropTypes.string,
};

export default ContactLink;
