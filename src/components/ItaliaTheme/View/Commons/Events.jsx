import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';

import { UniversalLink } from '@plone/volto/components';
import { searchContent, resetSearchContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';

import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import Image from '@plone/volto/components/theme/Image/Image';
import { viewDate } from 'design-comuni-plone-theme/helpers';

const messages = defineMessages({
  events: {
    id: 'events',
    defaultMessage: 'Appuntamenti',
  },
  title: {
    id: 'event_title',
    defaultMessage: 'Eventi',
  },
  immagine: {
    id: 'Immagine',
    defaultMessage: 'Immagine',
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
          <p className="text-uppercase">
            {event.luogo_evento && event.luogo_evento[0]?.title}
          </p>

          <div className="pt-4 pb-3">
            <UniversalLink
              href={flattenToAppURL(event['@id'])}
              title={event.title}
            >
              <h6 className="font-weight-semibold">{event.title}</h6>
            </UniversalLink>
          </div>
        </div>
      </div>
      {show_image && event.image && (
        <div className="card-image card-image-rounded">
          <div className="card-date text-center rounded shadow">
            {viewDate(intl.locale, event.start, 'DD MMM')}
          </div>
          <Image
            image={event.image}
            alt={intl.formatMessage(messages.immagine)}
            className="event-center-cropped"
          />
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
const Events = ({ content, title, show_image, folder_name, isChild }) => {
  const intl = useIntl();

  const path = isChild ? content.parent['@id'] : content['@id'];
  const searchResults = useSelector((state) => state.search.subrequests);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isChild && !searchResults?.[folder_name]?.loading) {
      dispatch(
        searchContent(
          flattenToAppURL(path),
          {
            portal_type: 'Event',
            'path.depth': 1,
            sort_on: 'getObjPositionInParent',
            fullobjects: true,
          },
          folder_name,
        ),
      );
    }
    return () => {
      dispatch(resetSearchContent(folder_name));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  let events = isChild
    ? searchResults?.[folder_name]?.items || []
    : content?.items?.filter((el) => el['@type'] === 'Event') || [];
  if (isChild) {
    events = [...events].filter((el) => !content['@id'].includes(el['@id']));
  }

  return (
    <>
      {events.length > 0 ? (
        <article
          id="appuntamenti"
          className="it-page-section anchor-offset mt-5"
          aria-labelledby={'header-appuntamenti'}
        >
          {title ? (
            <h4 id="header-appuntamenti">{title}</h4>
          ) : (
            <h4 id="header-appuntamenti">
              {intl.formatMessage(messages.events)}
            </h4>
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
  isChild: PropTypes.bool,
  title: PropTypes.string,
  folder_name: PropTypes.string,
};

Evento.propTypes = {
  event: PropTypes.object,
  show_image: PropTypes.bool,
};
