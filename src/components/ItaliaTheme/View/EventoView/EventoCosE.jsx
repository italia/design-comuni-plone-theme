import React from 'react';
import PropTypes from 'prop-types';

import { defineMessages, useIntl } from 'react-intl';

import { Chip, ChipLabel } from 'design-react-kit';
import { flattenToAppURL } from '@plone/volto/helpers';
import { UniversalLink } from '@plone/volto/components';
import {
  RichText,
  RichTextSection,
  richTextHasContent,
  Gallery,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';
import { contentFolderHasItems } from 'design-comuni-plone-theme/helpers';

const messages = defineMessages({
  cos_e: {
    id: 'event_cos_e',
    defaultMessage: "Cos'è",
  },
  event_destinatari: {
    id: 'event_destinatari',
    defaultMessage: 'A chi è rivolto',
  },
  a_chi_rivolto: {
    id: 'a_chi_rivolto',
    defaultMessage: 'A chi è rivolto',
  },

  parteciperanno: {
    id: 'parteciperanno',
    defaultMessage: 'Parteciperanno',
  },
  tipologia_evento: {
    id: 'tipologia_evento',
    defaultMessage: 'Tipo evento',
  },
});

const EventoCosE = ({ content }) => {
  const intl = useIntl();

  return richTextHasContent(content?.descrizione_estesa) ||
    contentFolderHasItems(content, 'immagini') ||
    contentFolderHasItems(content, 'video') ||
    content?.persone_amministrazione?.length > 0 ||
    richTextHasContent(content?.descrizione_destinatari) ||
    content?.tipologia_evento ? (
    <RichTextSection
      tag_id={'text-body'}
      title={intl.formatMessage(messages.cos_e)}
      show_title={true}
      data={content.descrizione_estesa}
    >
      {content?.persone_amministrazione?.length > 0 && (
        <>
          <h3 className="parteciperanno-section h5">
            {intl.formatMessage(messages.parteciperanno)}
          </h3>
          {content?.persone_amministrazione?.map((item, i) => (
            <UniversalLink
              href={flattenToAppURL(item['@id'])}
              key={item['@id']}
            >
              <Chip
                color="primary"
                disabled={false}
                large={false}
                simple
                tag="div"
                key={item['@id']}
                className="me-2"
              >
                <ChipLabel tag="span">{item.title}</ChipLabel>
              </Chip>
            </UniversalLink>
          ))}
        </>
      )}
      <Gallery
        content={content}
        folder_name={'immagini'}
        className="mt-4 pb-4"
      />
      <Gallery content={content} folder_name={'video'} />
      {richTextHasContent(content?.descrizione_destinatari) && (
        <div className="mb-5 pt-2">
          <RichText
            title={intl.formatMessage(messages.a_chi_rivolto)}
            data={content?.descrizione_destinatari}
          />
        </div>
      )}

      {content?.tipologia_evento && (
        <div className="mb-5 pt-2">
          <h3 className="tipologia-section h5">
            {intl.formatMessage(messages.tipologia_evento)}
          </h3>
          <p key={content?.tipologia_evento?.token} className="font-serif">
            {content?.tipologia_evento?.title}
          </p>
        </div>
      )}
    </RichTextSection>
  ) : (
    <></>
  );
};

EventoCosE.propTypes = {
  content: PropTypes.shape({
    descrizione_estesa: PropTypes.object,
    descrizione_destinatari: PropTypes.shape({
      data: PropTypes.string,
    }),
    persone_amministrazione: PropTypes.array,
  }).isRequired,
};

export default EventoCosE;
