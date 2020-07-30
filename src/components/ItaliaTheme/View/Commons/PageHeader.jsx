import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import moment from 'moment';
import { Sharing, Actions } from '@italia/components/ItaliaTheme/View';
import { Chip, ChipLabel } from 'design-react-kit/dist/design-react-kit';
import { flattenToAppURL } from '@plone/volto/helpers';
import cx from 'classnames';
import PropTypes from 'prop-types';

/**
 * PageHeader view component class.
 * @function PageHeader
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */

const messages = defineMessages({
  share: {
    id: 'share',
    defaultMessage: 'Condividi',
  },
  actions: {
    id: 'actions',
    defaultMessage: 'Vedi azioni',
  },
  date: {
    id: 'date',
    defaultMessage: 'Data',
  },
  expire: {
    id: 'expire',
    defaultMessage: 'Scadenza',
  },
  topics: {
    id: 'topics',
    defaultMessage: 'Argomenti',
  },
  reading_time: {
    id: 'reading_time',
    defaultMessage: 'Tempo di lettura',
  },
  minutes: {
    id: 'minutes',
    defaultMessage: 'min',
  },
  tipologia_persona: {
    id: 'tipologia_persona',
    defaultMessage: 'Tipologia persona',
  },
  ruolo: {
    id: 'ruolo',
    defaultMessage: 'Ruolo',
  },
});

const PageHeader = (props) => {
  const intl = useIntl();

  return (
    <div className="row">
      <div
        className={cx('px-lg-4 py-lg-2', {
          'col-lg-6': props.imageinheader,
          'col-lg-8': !props.imageinheader,
        })}
      >
        <h1>
          {props.content.title}
          {props.content.subtitle && ` - ${props.content.subtitle}`}
        </h1>
        {props.content.description && (
          <p className="documentDescription">{props.content.description}</p>
        )}
        {props.content['@type'] === 'Persona' &&
        props.content?.tipologia_persona &&
        !props.content.data_conclusione_incarico ? (
          <p className="mb-0">
            <strong>{intl.formatMessage(messages.tipologia_persona)}:</strong>
            {` ${props.content.tipologia_persona.title}`}
          </p>
        ) : (
          ''
        )}
        {props.content['@type'] === 'Persona' &&
        props.content?.ruolo &&
        !props.content.data_conclusione_incarico ? (
          <p className="mb-0">
            <strong>{intl.formatMessage(messages.ruolo)}:</strong>
            {` ${props.content.ruolo}`}
          </p>
        ) : (
          ''
        )}
        {(props.showreadingtime || props.showdates) && (
          <div className="row mt-5 mb-4 readingtime-dates">
            {(props.showdates &&
              (props.content.effective || props.content.expires) && (
                <div className="col-6">
                  {props.content.effective && (
                    <div className="row">
                      <div className="col-12">
                        <small>{intl.formatMessage(messages.date)}:</small>
                        <p className="font-weight-semibold text-monospace">
                          {moment(props.content.effective).format('DD-MM-Y')}
                        </p>
                      </div>
                    </div>
                  )}
                  {props.content.expires && (
                    <div className="row">
                      <div className="col-12">
                        <small>{intl.formatMessage(messages.expire)}:</small>
                        <p className="font-weight-semibold text-monospace">
                          {moment(props.content.expires).format('DD-MM-Y')}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )) || <div className="col-6" />}
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
            <img
              src={flattenToAppURL(
                props.content[props.imageinheader_field].scales.mini.download,
              )}
              alt={props.content.title}
              className="img-fluid"
            ></img>
          </figure>
        </div>
      ) : (
        ''
      )}
      <div className="col-lg-3 offset-lg-1">
        <Sharing url={props.content['@id']} title={props.content.title} />
        <Actions url={props.content['@id']} title={props.content.title} />

        {props.showtassonomiaargomenti &&
          props.content?.tassonomia_argomenti?.length > 0 && (
            <div className="mt-4 mb-4 page-arguments">
              <h6>
                <small>{intl.formatMessage(messages.topics)}</small>
              </h6>
              {props.content.tassonomia_argomenti.map((item, i) => (
                <a
                  href={flattenToAppURL(item['@id'])}
                  key={item['@id']}
                  title={item.title}
                  className="text-decoration-none mr-2"
                >
                  <Chip
                    color="primary"
                    disabled={false}
                    large={false}
                    simple
                    tag="div"
                  >
                    <ChipLabel tag="span">{item.title}</ChipLabel>
                  </Chip>
                </a>
              ))}
            </div>
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
