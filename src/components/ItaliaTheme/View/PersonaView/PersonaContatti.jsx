import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import {
  RichTextArticle,
  ContactsCard,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  contacts: {
    id: 'contacts',
    defaultMessage: 'Contatti',
  },
});

const PersonaContatti = ({ content }) => {
  const intl = useIntl();

  return content?.contact_info?.length > 0 ? (
    <RichTextArticle
      title={intl.formatMessage(messages.contacts)}
      tag_id="contacts"
    >
      {content.contact_info.map((contact) => (
        <ContactsCard contact={contact} key={contact['@id']} />
      ))}
    </RichTextArticle>
  ) : null;
};

export default PersonaContatti;
