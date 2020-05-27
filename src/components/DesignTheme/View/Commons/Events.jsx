import { defineMessages, useIntl } from 'react-intl';

import React from 'react';
import moment from 'moment';
import { flattenToAppURL } from '@plone/volto/helpers';
import { Icon } from 'design-react-kit/dist/design-react-kit';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const messages = defineMessages({
  events: {
    id: 'events',
    defaultMessage: 'Appuntamenti',
  },
  title: {
    id: 'event_title',
    defaultMessage: 'Eventi',
  },
});

/**
 * Evento view component class.
 * @function Evento
 * @params {object} Evento: object.
 * @returns {string} Markup of the component.
 */
const Evento = ({ event, show_image }) => {
  const intl = useIntl();

  return event ? (
    <div className="card card-teaser card-flex rounded shadow">
      <div className="card-body p-4">
        <h5 className="card-title card-title-icon">
          <Icon icon={'it-calendar'}></Icon>
          <span className="text-uppercase">
            {intl.formatMessage(messages.title)}
          </span>
        </h5>
        <div className="card-text">
          <p className="text-uppercase">{event.luogo_event[0].title}</p>

          <div className="pt-4 pb-3">
            <Link to={flattenToAppURL(event['@id'])} title={event.title}>
              <h6 className="font-weight-semibold">{event.title}</h6>
            </Link>
          </div>
        </div>
      </div>
      {show_image && event.image && (
        <div className="card-image card-image-rounded">
          <div className="card-date text-center rounded shadow">
            {moment(event.start).format('DD MMM')}
          </div>
          <img
            src={flattenToAppURL(event.image.scales.gallery.download)}
            alt="Immagine"
            className="event-center-cropped"
          ></img>
        </div>
      )}
    </div>
  ) : null;
};

/**
 * Events view component class.
 * @function Events
 * @params {object} content: Eventi object.
 * @returns {string} Markup of the component.
 */
const Events = ({ content, title, show_image }) => {
  const intl = useIntl();
  const events = content?.items?.filter(el => el['@type'] === 'Event') || [];
  return (
    <>
      {events.length > 0 ? (
        <article id="events" className="it-page-section anchor-offset mt-5">
          {title ? (
            <h4>{title}</h4>
          ) : (
            <h4>{intl.formatMessage(messages.events)}</h4>
          )}
          <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
            {events.map((item, i) => (
              <Evento key={item['@id']} event={item} show_image={show_image} />
            ))}
          </div>
        </article>
      ) : null}
    </>
  );
};
export default Events;

Events.propTypes = {
  content: PropTypes.object,
  show_image: PropTypes.bool,
  title: PropTypes.string,
};

Evento.propTypes = {
  event: PropTypes.object,
  show_image: PropTypes.bool,
};
