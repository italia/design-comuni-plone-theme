import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import PropTypes from 'prop-types';

import { viewDate } from 'design-comuni-plone-theme/helpers';

/**
 * PageHeaderDates view component class.
 * @function PageHeaderDates
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */

const messages = defineMessages({
  date: {
    id: 'date',
    defaultMessage: 'Data',
  },
  expire: {
    id: 'expire',
    defaultMessage: 'Scadenza',
  },
});

const PageHeaderDates = ({ content }) => {
  const intl = useIntl();

  return (
    <>
      {(content.effective || content.expires) && (
        <div className="col-6">
          {content.effective && content['@type'] !== 'Event' && (
            <div className="row">
              <div className="col-12">
                <small>{intl.formatMessage(messages.date)}:</small>
                <p className="fw-semibold font-monospace">
                  {viewDate(intl.locale, content.effective, 'DD-MM-Y')}
                </p>
              </div>
            </div>
          )}
          {content.expires && content['@type'] !== 'News Item' && (
            <div className="row">
              <div className="col-12">
                <small>{intl.formatMessage(messages.expire)}:</small>
                <p className="fw-semibold font-monospace">
                  {viewDate(intl.locale, content.expires, 'DD-MM-Y')}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default PageHeaderDates;

PageHeaderDates.propTypes = {
  params: PropTypes.shape({
    content: PropTypes.object,
  }),
};
