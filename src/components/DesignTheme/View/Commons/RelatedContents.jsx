import { defineMessages, useIntl } from 'react-intl';
import React from 'react';
import { flattenToAppURL } from '@plone/volto/helpers';

const messages = defineMessages({
  attachments: {
    id: 'attachments',
    defaultMessage: 'Allegati',
  },
});

/**
 * NewsItemView view component class.
 * @function RelatedContents
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const RelatedContents = ({ documenti, novità, servizi, amministrazione }) => {
  const intl = useIntl();

  return <div />;
};
export default RelatedContents;
