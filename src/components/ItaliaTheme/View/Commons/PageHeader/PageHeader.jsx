/*
 * Page Header Component used in most of the views
 */
import cx from 'classnames';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
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
import config from '@plone/volto/registry';

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

/**
 * PageHeader view component class.
 * @function PageHeader
 * @params content {object} content object
 * @params imageinheader {boolean} if true, show image in header (eg. in PersonaView)
 * @params imageinheader_field {string} field name of the image to show in header (eg. 'foto_persona')
 * @params readingtime {number} reading time in minutes
 * @params showreadingtime {boolean} show or hide reading time
 * @params showdates {boolean} show or hide dates in header
 * @params showtassonomiaargomenti {boolean} show or hide argomenti in header
 * @returns {string} Markup of the component.
 */
const PageHeader = (props) => {
  const {
    content,
    imageinheader,
    imageinheader_field,
    readingtime,
    showdates,
    showreadingtime,
    showtassonomiaargomenti,
  } = props;
  const intl = useIntl();
  const Image = config.getComponent({ name: 'Image' }).component;
  return (
    <div className="PageHeaderWrapper mb-4">
      <div className="row mb-2 mb-lg-0 page-header">
        <div
          className={cx('py-lg-2 page-header-left', {
            'col-lg-6': imageinheader,
            'col-lg-8': !imageinheader,
          })}
        >
          {(content.icon || content.icona) && (
            <ArgumentIcon icon={content.icon || content.icona} />
          )}
          <h1
            data-element={
              content['@type'] === 'Servizio' ? 'service-title' : 'page-name'
            }
          >
            {content.title}
          </h1>
          <p className="h2">
            {content.subtitle && `${content.subtitle}`}
            {content.sottotitolo && `${content.sottotitolo}`}
          </p>

          <PageHeaderEventDates content={content} />

          <PageHeaderStatoServizio content={content} />

          <PageHeaderDocumento content={content} />

          {content.description && (
            <p
              className="documentDescription"
              data-element={
                content['@type'] === 'Servizio'
                  ? 'service-description'
                  : undefined
              }
            >
              {content.description}
            </p>
          )}

          <PageHeaderBando content={content} />

          <PageHeaderPersona content={content} />

          <PageHeaderNewsItem content={content} />

          <PageHeaderLinkServizio content={content} />

          <PageHeaderExtend {...props} />

          {(showreadingtime || showdates) && (
            <div className="row mt-5 mb-4 readingtime-dates">
              {showdates ? (
                <PageHeaderDates content={content} />
              ) : (
                <div className="col-6"></div>
              )}

              {showreadingtime &&
                readingtime > 0 &&
                ((
                  <div className="col-6">
                    <small>{intl.formatMessage(messages.reading_time)}:</small>
                    <p className="font-monospace">
                      {readingtime} {intl.formatMessage(messages.minutes)}
                    </p>
                  </div>
                ) || <div className="col-6" />)}
            </div>
          )}
        </div>

        {imageinheader && content[imageinheader_field] ? (
          <div className="col-lg-2 page-header-image">
            <figure>
              <Image
                item={content}
                imageField={imageinheader_field}
                alt=""
                className="img-fluid"
                sizes="(max-width:768px) 300px, 200px"
              />
            </figure>
          </div>
        ) : null}

        <div className={'page-header-right py-lg-4 col-lg-3 offset-lg-1'}>
          <Sharing url={content['@id']} title={content.title} />
          <Actions url={content['@id']} title={content.title} />

          {showtassonomiaargomenti && (
            <PageHeaderTassonomiaArgomenti content={content} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;

PageHeader.propTypes = {
  params: PropTypes.shape({
    content: PropTypes.object.isRequired,
    imageinheader: PropTypes.bool,
    imageinheader_field: PropTypes.string,
    readingtime: PropTypes.string,
    showdates: PropTypes.bool,
    showreadingtime: PropTypes.bool,
    showtassonomiaargomenti: PropTypes.bool,
  }),
};
