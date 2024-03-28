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
  email_label: {
    id: 'email_label',
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

const phoneRegex = /(\+?[0-9](?: ?[0-9/-]+)+.?[0-9]*)/gm;
const phoneCleanRegex = /-|\/|\s/gm;
const emailRegex = /([a-zA-Z0-9+._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
const emailCleanRegex = /|\/|\s/gm;

const ContactLink = ({ tel, fax, email, label = true, strong = false }) => {
  const intl = useIntl();
  let ret_label = null;
  let ret = null;

  const titles = {
    tel: intl.formatMessage(messages.call),
    fax: intl.formatMessage(messages.call_fax),
    mailto: intl.formatMessage(messages.write_to),
  };

  function replaceString(str, type) {
    const regex = type === 'mailto' ? emailRegex : phoneRegex;
    return str.split(regex).reduce((acc, substr, i) => {
      if (substr.trim() !== '') return acc;
      return [
        ...acc,
        acc.length === 0 ? '' : ' ',
        substr.test(regex) ? (
          <a
            key={`${type}-${i}`}
            href={`${type}:${substr
              .trim()
              .replace(
                type === 'mailto' ? emailCleanRegex : phoneCleanRegex,
                '',
              )}`}
            title={titles[type]}
          >
            {substr}
          </a>
        ) : (
          substr
        ),
      ];
    }, []);
  }

  if (tel) {
    ret_label = intl.formatMessage(messages.telefono);
    ret = replaceString(tel, 'tel');
  } else if (fax) {
    ret_label = intl.formatMessage(messages.fax);
    ret = replaceString(fax, 'fax');
  } else if (email) {
    ret_label = intl.formatMessage(messages.email_label);
    ret = replaceString(email, 'mailto');
  }
  ret_label = label ? <>{ret_label}: </> : null;
  ret_label = label ? strong ? <strong>{ret_label}</strong> : ret_label : null;

  return ret ? (
    <>
      {ret_label}
      <span>{ret}</span>
    </>
  ) : null;
};

ContactLink.propTypes = {
  tel: PropTypes.string,
};

export default ContactLink;
