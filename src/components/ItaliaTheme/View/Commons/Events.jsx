import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import {
  Card,
  CardBody,
  CardReadMore,
  CardText,
  CardTitle,
} from 'design-react-kit';

import { UniversalLink } from '@plone/volto/components';
import { flattenToAppURL } from '@plone/volto/helpers';

import Image from '@plone/volto/components/theme/Image/Image';
import { viewDate } from 'design-comuni-plone-theme/helpers';

const messages = defineMessages({
  events: {
    id: 'events',
    defaultMessage: 'Appuntamenti',
  },
  events_read_more: {
    id: 'events_read_more',
    defaultMessage: 'Leggi di più',
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
    <div className="card-wrapper card-teaser">
      <Card noWrapper className="card-img no-after">
        {show_image &&
          (event.image_field || event.preview_image || event.image) && (
            <div className="img-responsive-wrapper">
              <div className="img-responsive">
                <Image
                  itemUrl={event.image_field ? event['@id'] : undefined}
                  image={
                    event.image_scales?.[event.image_field]?.[0] ||
                    event.preview_image ||
                    event.image ||
                    event['@id']
                  }
                  alt="Immagine"
                  containerClassName="img-wrapper"
                />
                {event.start && (
                  <div className="card-calendar d-flex flex-column justify-content-center">
                    {viewDate(intl.locale, event.start, 'DD MMM')}
                  </div>
                )}
              </div>
            </div>
          )}
        <CardBody>
          <CardTitle tag="h5" className="card-title-icon">
            <UniversalLink
              href={flattenToAppURL(event['@id'])}
              title={event.title}
              className="text-decoration-none"
            >
              <h6 className="fw-semibold">{event.title}</h6>
            </UniversalLink>
          </CardTitle>
          <CardText></CardText>
          <CardReadMore
            iconName="it-arrow-right"
            tag={UniversalLink}
            text={intl.formatMessage(messages.events_read_more)}
            href={flattenToAppURL(event['@id'])}
          />
        </CardBody>
      </Card>
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

  const events = isChild
    ? content?.parent
      ? [content.parent]
      : []
    : content?.items?.filter((el) => el['@type'] === 'Event') || [];

  return events.length > 0 ? (
    <article id="appuntamenti" className="it-page-section anchor-offset mt-5">
      {title ? (
        <h4 id="header-appuntamenti">{title}</h4>
      ) : (
        <h4 id="header-appuntamenti">{intl.formatMessage(messages.events)}</h4>
      )}
      <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
        {events.map((item, i) => (
          <Evento key={item['@id']} event={item} show_image={show_image} />
        ))}
      </div>
    </article>
  ) : null;
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
