import React from 'react';

import { ContactsCard } from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const UOContactsContacts = ({ content }) => {
  return (
    content?.contact_info?.length > 0 && (
      <div className="mb-5">
        {content.contact_info.map((contact) => (
          <ContactsCard contact={contact} key={contact['@id']} />
        ))}
      </div>
    )
  );
};
export default UOContactsContacts;
