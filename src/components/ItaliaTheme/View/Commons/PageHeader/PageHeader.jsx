import cx from 'classnames';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';

import Image from '@plone/volto/components/theme/Image/Image';

import {
  Actions,
  ArgumentIcon,
  PageHeaderBando,
  PageHeaderDates,
  PageHeaderEventDates,
  PageHeaderExtend,
  PageHeaderNewsItem,
  PageHeaderPersona,
  PageHeaderStatoServizio,
  PageHeaderLinkServizio,
  PageHeaderTassonomiaArgomenti,
  PageHeaderDocumento,
  Sharing,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

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

  return (
    <div className="PageHeaderWrapper mb-4">
      <div className="row mb-2 mb-lg-0 page-header">
        <div
          className={cx('py-lg-2 page-header-left', {
            'col-lg-6': props.imageinheader,
            'col-lg-8': !props.imageinheader,
          })}
        >
          {(props.content.icon || props.content.icona) && (
            <ArgumentIcon icon={props.content.icon || props.content.icona} />
          )}
          <h1
            data-element={
              props.content['@type'] === 'Servizio'
                ? 'service-title'
                : undefined
            }
          >
            {props.content.title}
          </h1>
          <p className="h2">
            {props.content.subtitle && `${props.content.subtitle}`}
            {props.content.sottotitolo && `${props.content.sottotitolo}`}
          </p>

          <PageHeaderEventDates content={props.content} />

          <PageHeaderStatoServizio content={props.content} />

          <PageHeaderDocumento content={props.content} />

          {props.content.description && (
            <p
              className="documentDescription"
              data-element={
                props.content['@type'] === 'Servizio'
                  ? 'service-description'
                  : undefined
              }
            >
              {props.content.description}
            </p>
          )}

          <PageHeaderBando content={props.content} />

          <PageHeaderPersona content={props.content} />

          <PageHeaderNewsItem content={props.content} />

          <PageHeaderLinkServizio content={props.content} />

          <PageHeaderExtend {...props} />

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
                    <small>{intl.formatMessage(messages.reading_time)}:</small>
                    <p className="font-monospace">
                      {props.readingtime} {intl.formatMessage(messages.minutes)}
                    </p>
                  </div>
                ) || <div className="col-6" />)}
            </div>
          )}
        </div>

        {props.imageinheader && props.content[props.imageinheader_field] ? (
          <div className="col-lg-2 page-header-image">
            <figure>
              <Image
                image={props.content[props.imageinheader_field]}
                alt={props.content.title}
                className="img-fluid"
                maxSize={300}
              />
            </figure>
          </div>
        ) : null}

        <div className={'page-header-right py-lg-4 col-lg-3 offset-lg-1'}>
          <Sharing url={props.content['@id']} title={props.content.title} />
          <Actions url={props.content['@id']} title={props.content.title} />

          {props.showtassonomiaargomenti && (
            <PageHeaderTassonomiaArgomenti content={props.content} />
          )}
        </div>
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
