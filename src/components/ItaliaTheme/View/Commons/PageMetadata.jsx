import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import PropTypes from 'prop-types';

import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';

import { viewDate } from '@italia/helpers';

const messages = defineMessages({
  modified: {
    id: 'modified',
    defaultMessage: 'Ultimo aggiornamento',
  },
});

/**
 * PageMetadata view component class.
 * @function Metadata
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const PageMetadata = ({ content, children, moment: Moment }) => {
  const intl = useIntl();
  const moment = Moment.default;
  moment.locale(intl.locale);

  return (
    <article id="metadata" className="bottom-metadata">
      <span className="text-serif mb-0 mt-4">
        {intl.formatMessage(messages.modified)}:
      </span>{' '}
      {viewDate(intl.locale, moment, content.modified, 'DD-MM-Y HH:MM')}
      {children}
    </article>
  );
};

export default injectLazyLibs(['moment'])(PageMetadata);

PageMetadata.propTypes = {
  content: PropTypes.object,
};
