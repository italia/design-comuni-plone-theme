import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import {
  RichTextArticle,
  ContactLink,
  PersonaTelephones,
} from '@italia/components/ItaliaTheme/View';

const messages = defineMessages({
  contacts: {
    id: 'contacts',
    defaultMessage: 'Contatti',
  },
  email_label: {
    id: 'email_label',
    defaultMessage: 'E-mail',
  },
});

const PersonaContatti = ({ content }) => {
  const intl = useIntl();
  const telefono = content && PersonaTelephones({ content: content });

  const showSection = telefono || content?.fax || content?.email?.length > 0;
  return showSection ? (
    <RichTextArticle
      title={intl.formatMessage(messages.contacts)}
      tag_id="contacts"
    >
      {telefono && telefono}

      {content?.fax && (
        <p>
          <ContactLink fax={content.fax} strong={true} />
        </p>
      )}

      {content?.email?.length > 0 && (
        <p>
          <strong>{intl.formatMessage(messages.email_label)}: </strong>
          {content.email.map((email) => (
            <>
              <ContactLink email={email} label={false} />{' '}
            </>
          ))}
        </p>
      )}
    </RichTextArticle>
  ) : (
    <></>
  );
};

export default PersonaContatti;
