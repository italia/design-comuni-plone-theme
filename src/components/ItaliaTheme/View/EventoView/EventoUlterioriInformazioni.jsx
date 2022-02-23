import React from 'react';
import PropTypes from 'prop-types';

import { defineMessages, useIntl } from 'react-intl';

import { UniversalLink } from '@plone/volto/components';
import {
  richTextHasContent,
  Metadata,
  HelpBox,
  Sponsors,
  GenericCard,
} from '@italia/components/ItaliaTheme/View';

const messages = defineMessages({
  event_url: {
    id: 'event_url',
    defaultMessage: "Url dell'evento",
  },
  patrocinato_da: {
    id: 'patrocinato_da',
    defaultMessage: 'Patrocinato da',
  },
  strutture_politiche: {
    id: 'event_strutture_politiche',
    defaultMessage: 'Strutture politiche coinvolte',
  },
});

const EventoUlterioriInformazioni = ({ content }) => {
  const intl = useIntl();

  return (
    <Metadata content={content}>
      {(richTextHasContent(content?.ulteriori_informazioni) ||
        content?.event_url ||
        content?.patrocinato_da ||
        content?.strutture_politiche.length > 0 ||
        content?.items?.some((e) => e.id === 'sponsor_evento')) && (
        <>
          {richTextHasContent(content?.ulteriori_informazioni) && (
            <HelpBox text={content?.ulteriori_informazioni} />
          )}

          {content?.event_url && (
            <div className="mt-4">
              <h5>{intl.formatMessage(messages.event_url)}</h5>
              <UniversalLink href={content.event_url}>
                {content.event_url}
              </UniversalLink>
            </div>
          )}

          {content?.patrocinato_da && (
            <div className="mt-4">
              <h5>{intl.formatMessage(messages.patrocinato_da)}</h5>
              {content.patrocinato_da}
            </div>
          )}

          {content?.items?.some((e) => e.id === 'sponsor_evento') && (
            <div className="mt-4">
              <Sponsors content={content} folder_name={'sponsor_evento'} />
            </div>
          )}

          {content?.strutture_politiche.length > 0 && (
            <div className="mt-4">
              <h5>{intl.formatMessage(messages.strutture_politiche)}</h5>
              <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                {content.strutture_politiche.map((item, i) => (
                  <GenericCard
                    key={i}
                    index={item['@id']}
                    item={item}
                    showimage={false}
                    showDescription={false}
                  />
                ))}
              </div>
            </div>
          )}
          <div className="mt-4"></div>
        </>
      )}
    </Metadata>
  );
};

EventoUlterioriInformazioni.propTypes = {
  content: PropTypes.shape({
    ulteriori_informazioni: PropTypes.shape({
      data: PropTypes.string,
    }),
    patrocinato_da: PropTypes.string,
    strutture_politiche: PropTypes.array,
    items: PropTypes.array,
  }).isRequired,
};

export default EventoUlterioriInformazioni;
