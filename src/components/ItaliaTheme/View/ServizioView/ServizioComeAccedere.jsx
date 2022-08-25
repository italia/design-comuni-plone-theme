import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';

import {
  RichText,
  RichTextArticle,
  richTextHasContent,
  Locations,
} from '@italia/components/ItaliaTheme/View';

const messages = defineMessages({
  accedere_al_servizio: {
    id: 'accedere_al_servizio',
    defaultMessage: 'Accedere al servizio',
  },
  come_si_fa: {
    id: 'come_si_fa',
    defaultMessage: 'Come si fa',
  },
  cosa_si_ottiene: {
    id: 'cosa_si_ottiene',
    defaultMessage: 'Cosa si ottiene',
  },
  procedure_collegate: {
    id: 'procedure_collegate',
    defaultMessage: "Procedure collegate all'esito",
  },
  canale_digitale: {
    id: 'canale_digitale',
    defaultMessage: 'Canale digitale',
  },
  autenticazione: {
    id: 'autenticazione',
    defaultMessage: 'Metodi di autenticazione al servizio',
  },
  dove_rivolgersi: {
    id: 'dove_rivolgersi',
    defaultMessage: 'Dove rivolgersi',
  },
});

const ServizioComeAccedere = ({ content }) => {
  const intl = useIntl();
  return richTextHasContent(content.come_si_fa) ||
    richTextHasContent(content.cosa_si_ottiene) ||
    richTextHasContent(content.procedure_collegate) ||
    richTextHasContent(content.canale_digitale) ||
    richTextHasContent(content.autenticazione) ||
    richTextHasContent(content.prenota_appuntamento) ||
    content.dove_rivolgersi?.length > 0 ||
    richTextHasContent(content.dove_rivolgersi_extra) ? (
    <RichTextArticle
      title={intl.formatMessage(messages.accedere_al_servizio)}
      tag_id="accedere_al_servizio"
    >
      <RichText
        content={content.come_si_fa}
        title={intl.formatMessage(messages.come_si_fa)}
      />

      <RichText
        content={content.cosa_si_ottiene}
        title={intl.formatMessage(messages.cosa_si_ottiene)}
      />

      <RichText
        content={content.procedure_collegate}
        title={intl.formatMessage(messages.procedure_collegate)}
      />

      <RichText
        content={content.canale_digitale}
        title={intl.formatMessage(messages.canale_digitale)}
      />

      {!richTextHasContent(content.canale_digitale) &&
        richTextHasContent(content.autenticazione) && (
          <h5 className="mt-4">
            {intl.formatMessage(messages.canale_digitale)}
          </h5>
        )}

      <RichText
        content={content.autenticazione}
        title={intl.formatMessage(messages.autenticazione)}
        title_size="h6"
      />

      {(content.dove_rivolgersi?.length > 0 ||
        richTextHasContent(content.dove_rivolgersi_extra) ||
        richTextHasContent(content.prenota_appuntamento)) && (
        <RichText title={intl.formatMessage(messages.dove_rivolgersi)}>
          <RichText content={content.prenota_appuntamento} />

          {content.dove_rivolgersi?.length > 0 && (
            <>
              {content?.dove_rivolgersi?.length > 0 ||
              content?.nome_sede > 0 ||
              content?.street > 0 ||
              (content?.geolocation?.latitude &&
                content?.geolocation?.longitude) ||
              content?.zip_code ||
              content?.city ||
              content?.quartiere ||
              content?.circoscrizione ||
              content?.country ? (
                <Locations
                  content={content}
                  locations={content?.dove_rivolgersi ?? []}
                  show_icon={false}
                  show_title_link={true}
                  details_link={false}
                />
              ) : (
                <></>
              )}
            </>
          )}

          <RichText content={content.dove_rivolgersi_extra} />
        </RichText>
      )}
    </RichTextArticle>
  ) : (
    <></>
  );
};

ServizioComeAccedere.propTypes = {
  content: PropTypes.shape({
    come_si_fa: PropTypes.shape({
      data: PropTypes.string,
    }),
    cosa_si_ottiene: PropTypes.shape({
      data: PropTypes.string,
    }),
    procedure_collegate: PropTypes.shape({
      data: PropTypes.string,
    }),
    canale_digitale: PropTypes.shape({
      data: PropTypes.string,
    }),
    autenticazione: PropTypes.shape({
      data: PropTypes.string,
    }),
    dove_rivolgersi_extra: PropTypes.shape({
      data: PropTypes.string,
    }),
    prenota_appuntamento: PropTypes.shape({
      data: PropTypes.string,
    }),
  }),
};
export default ServizioComeAccedere;
