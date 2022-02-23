import React from 'react';

import { defineMessages, useIntl } from 'react-intl';
import { ContactLink, UOTelephones } from '@italia/components/ItaliaTheme/View';

const messages = defineMessages({
  email_sede: {
    id: 'email_sede',
    defaultMessage: 'E-mail',
  },
  pec_sede: {
    id: 'pec_sede',
    defaultMessage: 'PEC',
  },
  fax_sede: {
    id: 'fax_sede',
    defaultMessage: 'Fax',
  },
  website: {
    id: 'website',
    defaultMessage: 'Sito web',
  },
});

const UOContactsContacts = ({ content }) => {
  const intl = useIntl();
  const telefono = content && UOTelephones({ content: content });

  return (
    <dl className="contatti-list">
      {telefono && telefono}

      {content.fax && (
        <div className="text-serif contatti">
          <dt>{intl.formatMessage(messages.fax_sede)}: </dt>
          <dd>
            <ContactLink tel={content.fax} label={false} />
          </dd>
        </div>
      )}

      {content.email && (
        <div className="text-serif contatti">
          <dt>{intl.formatMessage(messages.email_sede)}: </dt>
          <dd>
            <ContactLink email={content.email} label={false} />
          </dd>
        </div>
      )}
      {content.pec && (
        <div className="text-serif contatti">
          <dt>{intl.formatMessage(messages.pec_sede)}: </dt>
          <dd>
            <ContactLink email={content.pec} label={false} />
          </dd>
        </div>
      )}
      {content.web && (
        <div className="text-serif contatti">
          <dt>{intl.formatMessage(messages.website)}: </dt>
          <dd>
            <a
              href={
                content.web.match(/^(http:\/\/|https:\/\/)/gm)
                  ? content.web
                  : `http://${content.web}`
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              {content.web}
            </a>
          </dd>
        </div>
      )}
    </dl>
  );
};
export default UOContactsContacts;
