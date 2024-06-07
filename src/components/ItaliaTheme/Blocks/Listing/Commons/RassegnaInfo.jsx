import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { UniversalLink } from '@plone/volto/components';

const RassegnaInfo = ({ eventoPadre }) => {
  const intl = useIntl();
  return (
    <div className="rassegna-info mb-3 mt-1">
      <span className="rassegna-label">
        {intl.formatMessage(messages.rassegna_label)}
      </span>
      <span className="rassegna-name">
        <UniversalLink href={eventoPadre['@id']}>
          {eventoPadre.title}
        </UniversalLink>
      </span>
    </div>
  );
};

const messages = defineMessages({
  rassegna_label: {
    id: 'rassegna_label',
    defaultMessage: 'Rassegna:',
  },
});

export default RassegnaInfo;
