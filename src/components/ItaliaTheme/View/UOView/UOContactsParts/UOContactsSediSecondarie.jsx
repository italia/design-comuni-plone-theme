import React from 'react';

import { defineMessages, useIntl } from 'react-intl';
import { GenericCard } from '@italia/components/ItaliaTheme/View';

const messages = defineMessages({
  altre_sedi: {
    id: 'uo_altre_sedi',
    defaultMessage: 'Altre sedi',
  },
});
const UOContactsSediSecondarie = ({ content }) => {
  const intl = useIntl();

  return content.sedi_secondarie?.length > 0 ? (
    <div className="mb-5 mt-5">
      <h5>{intl.formatMessage(messages.altre_sedi)}</h5>
      <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
        {content.sedi_secondarie.map((item, _i) => (
          <GenericCard key={item['@id']} item={item} showimage={false} />
        ))}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default UOContactsSediSecondarie;
