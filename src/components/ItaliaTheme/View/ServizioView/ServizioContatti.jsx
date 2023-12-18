import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';

import {
  RichTextSection,
  OfficeCard,
  ContactsCard,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  contatti: {
    id: 'contatti',
    defaultMessage: 'Contatti',
  },
});

const ServizioContatti = ({ content }) => {
  const intl = useIntl();
  return content.ufficio_responsabile?.length > 0 || content.area.length > 0 ? (
    <RichTextSection
      tag_id="contatti"
      title={intl.formatMessage(messages.contatti)}
    >
      {content.contact_info?.length > 0 &&
        content.contact_info.map((contact) => (
          <ContactsCard
            contact={contact}
            key={contact['@id']}
            data-element="service-area"
          />
        ))}
      <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
        {content.ufficio_responsabile?.length > 0 && (
          <>
            {content.ufficio_responsabile.map((item, i) => (
              <OfficeCard
                key={item['@id']}
                office={item}
                data-element="service-area"
              />
            ))}
          </>
        )}
        {content.area?.length > 0 && (
          <>
            {content.area.map((item, i) => (
              <OfficeCard
                key={item['@id']}
                office={item}
                data-element="service-area"
              />
            ))}
          </>
        )}
      </div>
    </RichTextSection>
  ) : null;
};

ServizioContatti.propTypes = {
  content: PropTypes.shape({
    // TODO: se ufficio_responsabile è requeired non serve ? in content.ufficio_responsabile?.length
    // se non è required va tolto isRequired
    ufficio_responsabile: PropTypes.array.isRequired,
    area: PropTypes.array.isRequired,
  }),
};
export default ServizioContatti;
