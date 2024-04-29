import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { Card, CardBody, CardReadMore, CardTitle } from 'design-react-kit';
import config from '@plone/volto/registry';
import { UniversalLink } from '@plone/volto/components';
import { flattenToAppURL } from '@plone/volto/helpers';
import { RichTextSection } from 'design-comuni-plone-theme/components/ItaliaTheme/View';
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
  immagine: {
    id: 'Immagine',
    defaultMessage: 'Immagine',
  },
});

const SubEvent = ({ event, show_image }) => {
  const intl = useIntl();
  const Image = config.getComponent({ name: 'Image' }).component;
  const hasImage = event.image_field || event.preview_image || event.image;
  return event ? (
    <div className="card-wrapper card-teaser">
      <Card noWrapper className="card no-after shadow rounded">
        {show_image && hasImage && (
          <div className="img-responsive-wrapper">
            <div className="img-responsive">
              <figure class="volto-image img-wrapper responsive">
                <Image
                  item={event}
                  alt={intl.formatMessage(messages.immagine)}
                  loading="lazy"
                  sizes="(max-width:320px) 300px, (max-width:425px) 400px, (max-width:768px) 600px, 300px"
                />
              </figure>
              {event.start && (
                <div className="card-calendar d-flex flex-column justify-content-center">
                  {viewDate(intl.locale, event.start, 'DD MMM')}
                </div>
              )}
            </div>
          </div>
        )}
        <CardBody>
          {event.start && (!show_image || (show_image && !hasImage)) && (
            <div className="category-top mb-2">
              {viewDate(intl.locale, event.start, 'DD MMM YYYY')}
            </div>
          )}
          <CardTitle className="h5">
            <UniversalLink
              href={flattenToAppURL(event['@id'])}
              title={event.title}
              className="text-decoration-none"
            >
              {event.title}
            </UniversalLink>
          </CardTitle>
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

SubEvent.propTypes = {
  event: PropTypes.object.isRequired,
  show_image: PropTypes.bool,
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
    <RichTextSection
      tag_id="appuntamenti"
      title={title || intl.formatMessage(messages.events)}
    >
      <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
        {events.map((item, i) => (
          <SubEvent key={item['@id']} event={item} show_image={show_image} />
        ))}
      </div>
    </RichTextSection>
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
