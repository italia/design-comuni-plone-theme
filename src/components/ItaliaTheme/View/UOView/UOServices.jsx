import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { RelatedArticles } from '@italia/components/ItaliaTheme/View';

const messages = defineMessages({
  servizi_offerti: {
    id: 'servizi_offerti',
    defaultMessage: 'Servizi',
  },
});

const UOServices = ({ content }) => {
  const intl = useIntl();

  return content?.servizi_offerti?.length > 0 ? (
    <RelatedArticles
      id="related-services"
      items={content.servizi_offerti}
      title={intl.formatMessage(messages.servizi_offerti)}
    />
  ) : (
    <></>
  );
};

export default UOServices;
