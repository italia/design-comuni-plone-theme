import React from 'react';

import { defineMessages, useIntl } from 'react-intl';
import { GenericCard } from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  altre_sedi: {
    id: 'uo_altre_sedi',
    defaultMessage: 'Altre sedi',
  },
});
const UOContactsSediSecondarie = ({ content }) => {
  const intl = useIntl();

  return content.sedi_secondarie?.length > 0 ? (
    <div className="mb-5">
      <h3 className="h5">{intl.formatMessage(messages.altre_sedi)}</h3>
      <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
        {content.sedi_secondarie.map((item, _i) => (
          <GenericCard
            key={item['@id']}
            item={item}
            showimage={false}
            className="my-3"
          />
        ))}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default UOContactsSediSecondarie;
