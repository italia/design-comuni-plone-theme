import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import moment from 'moment/min/moment-with-locales';
import PropTypes from 'prop-types';

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
  moment.locale(intl.locale);

  return (
    <>
      {(content.effective || content.expires) && (
        <div className="col-6">
          {content.effective && content['@type'] !== 'Event' && (
            <div className="row">
              <div className="col-12">
                <small>{intl.formatMessage(messages.date)}:</small>
                <p className="font-weight-semibold text-monospace">
                  {moment(content.effective).format('DD-MM-Y')}
                </p>
              </div>
            </div>
          )}
          {content.expires && (
            <div className="row">
              <div className="col-12">
                <small>{intl.formatMessage(messages.expire)}:</small>
                <p className="font-weight-semibold text-monospace">
                  {moment(content.expires).format('DD-MM-Y')}
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
