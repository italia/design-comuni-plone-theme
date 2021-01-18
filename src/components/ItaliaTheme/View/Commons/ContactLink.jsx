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

const ContactLink = ({ tel, fax, email, label = true, strong = false }) => {
  const intl = useIntl();
  let ret_label = null;
  let ret = null;

  function ReplacePhoneNumbers(str, type) {
    // eslint-disable-next-line no-useless-escape
    let newhtml = str.replace(/\+?[0-9]( ?[0-9\/-]+)+.?[0-9]*/gm, function (v) {
      let r =
        "<a href='" +
        type +
        ':' +
        v.trim().replace(/-|\/|\s/gm, '') +
        "' title='" +
        (type === 'tel'
          ? intl.formatMessage(messages.call)
          : intl.formatMessage(messages.call_fax)) +
        "' >" +
        v +
        '</a>';
      return r;
    });
    return newhtml;
  }

  function ReplaceEmails(str) {
    let newhtml = str.replace(
      /([a-zA-Z0-9+._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi,
      function (v) {
        let r =
          "<a href='mailto:" +
          v.trim().replace(/-|\/|\s/gm, '') +
          "' title='" +
          intl.formatMessage(messages.write_to) +
          "' >" +
          v +
          '</a>';
        return r;
      },
    );
    return newhtml;
  }

  if (tel) {
    ret_label = intl.formatMessage(messages.telefono);
    ret = ReplacePhoneNumbers(tel, 'tel');
  } else if (fax) {
    ret_label = intl.formatMessage(messages.fax);
    ret = ReplacePhoneNumbers(fax, 'fax');
  } else if (email) {
    ret_label = intl.formatMessage(messages.email_label);
    ret = ReplaceEmails(email);
  }
  ret_label = label ? <>{ret_label}: </> : null;
  ret_label = label ? strong ? <strong>{ret_label}</strong> : ret_label : null;

  return ret ? (
    <>
      {ret_label}
      <span dangerouslySetInnerHTML={{ __html: ret }} />
    </>
  ) : null;
};

ContactLink.propTypes = {
  tel: PropTypes.string,
};

export default ContactLink;
