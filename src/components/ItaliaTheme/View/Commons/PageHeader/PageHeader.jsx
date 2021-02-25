import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import moment from 'moment/min/moment-with-locales';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Image from '@plone/volto/components/theme/Image/Image';

import {
  Sharing,
  Actions,
  PageHeaderDates,
  PageHeaderEventDates,
  PageHeaderPersona,
  PageHeaderBando,
  PageHeaderNewsItem,
  PageHeaderTassonomiaArgomenti,
} from '@italia/components/ItaliaTheme/View';

/**
 * PageHeader view component class.
 * @function PageHeader
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */

const messages = defineMessages({
  reading_time: {
    id: 'reading_time',
    defaultMessage: 'Tempo di lettura',
  },
  minutes: {
    id: 'minutes',
    defaultMessage: 'min',
  },
});

const PageHeader = (props) => {
  const intl = useIntl();
  moment.locale(intl.locale);

  return (
    <div className="row mb-2 mb-lg-0">
      <div
        className={cx('px-lg-4 py-lg-2', {
          'col-lg-6': props.imageinheader,
          'col-lg-8': !props.imageinheader,
        })}
      >
        <h1>
          {props.content.title}
          {props.content.subtitle && ` - ${props.content.subtitle}`}
          {props.content.sottotitolo && ` - ${props.content.sottotitolo}`}
        </h1>

        <PageHeaderEventDates content={props.content} />

        {props.content.description && (
          <p className="documentDescription">{props.content.description}</p>
        )}

        <PageHeaderBando content={props.content} />

        <PageHeaderPersona content={props.content} />

        <PageHeaderNewsItem content={props.content} />

        {(props.showreadingtime || props.showdates) && (
          <div className="row mt-5 mb-4 readingtime-dates">
            {props.showdates ? (
              <PageHeaderDates content={props.content} />
            ) : (
              <div className="col-6"></div>
            )}

            {props.showreadingtime &&
              props.readingtime > 0 &&
              ((
                <div className="col-6">
                  <small>{intl.formatMessage(messages.reading_time)}</small>
                  <p className="font-weight-semibold">
                    {props.readingtime} {intl.formatMessage(messages.minutes)}
                  </p>
                </div>
              ) || <div className="col-6" />)}
          </div>
        )}
      </div>

      {props.imageinheader && props.content[props.imageinheader_field] ? (
        <div className="col-lg-2">
          <figure>
            <Image
              image={props.content[props.imageinheader_field]}
              alt={props.content.title}
              className="img-fluid"
            />
          </figure>
        </div>
      ) : null}

      <div className="col-lg-3 offset-lg-1 page-header-right">
        <Sharing url={props.content['@id']} title={props.content.title} />
        <Actions url={props.content['@id']} title={props.content.title} />

        {props.showtassonomiaargomenti && (
          <PageHeaderTassonomiaArgomenti content={props.content} />
        )}
      </div>
    </div>
  );
};
export default PageHeader;

PageHeader.propTypes = {
  params: PropTypes.shape({
    content: PropTypes.object,
    readingtime: PropTypes.string,
    showreadingtime: PropTypes.bool,
    imageinheader: PropTypes.bool,
    imageinheader_field: PropTypes.string,
    showdates: PropTypes.bool,
    showtassonomiaargomenti: PropTypes.bool,
  }),
};
