import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import {
  RichTextSection,
  Gallery,
  richTextHasContent,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';
import { contentFolderHasItems } from 'design-comuni-plone-theme/helpers';
import LocationItem from 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/LocationItem';

const messages = defineMessages({
  descrizione: {
    id: 'descrizione',
    defaultMessage: 'Descrizione',
  },
  elementi_di_interesse: {
    id: 'elementi_di_interesse',
    defaultMessage: 'Elementi di interesse',
  },
  video: {
    id: 'Video',
    defaultMessage: 'Video',
  },
  luoghi_correlati: {
    id: 'luoghi_correlati',
    defaultMessage: 'Luoghi correlati',
  },
  tipologia_luogo: {
    id: 'tipologia_luogo',
    defaultMessage: 'Tipo di luogo',
  },
});

const VenueDescription = ({ content }) => {
  const intl = useIntl();

  return (
    <>
      {richTextHasContent(content?.descrizione_completa) && (
        <RichTextSection
          tag_id="description"
          title={intl.formatMessage(messages.descrizione)}
          content={content.descrizione_completa}
        />
      )}
      {content?.tipologia_luogo?.length > 0 && (
        <RichTextSection
          tag_id="tipologia"
          title={intl.formatMessage(messages.tipologia_luogo)}
        >
          {content.tipologia_luogo.map((tipologia) => (
            <p key={tipologia.token} className="font-serif">
              {tipologia.title}
            </p>
          ))}
        </RichTextSection>
      )}
      {richTextHasContent(content.elementi_di_interesse) && (
        <RichTextSection
          tag_id="elementi-di-interesse"
          title={`${intl.formatMessage(messages.elementi_di_interesse)}:`}
          content={content.elementi_di_interesse}
        />
      )}
      {content.luoghi_correlati?.length > 0 && (
        <RichTextSection
          tag_id={'luoghi_correlati'}
          title={intl.formatMessage(messages.luoghi_correlati)}
        >
          <div className="card-wrapper card-teaser-wrapper mb-5">
            {content.luoghi_correlati?.map((item, i) => (
              <LocationItem
                key={item['@id'] + i}
                location={item}
                show_icon={false}
                show_title_link={true}
                load={true}
                details_link={false}
              />
            ))}
          </div>
        </RichTextSection>
      )}
      {contentFolderHasItems(content, 'multimedia') && (
        <Gallery
          content={content}
          folder_name={'multimedia'}
          title_video={intl.formatMessage(messages.video)}
          title_type="h5"
        />
      )}
    </>
  );
};

export default VenueDescription;
