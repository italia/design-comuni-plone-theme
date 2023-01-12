import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import {
  RichTextArticle,
  RichText,
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
    id: 'luoghi_correlatti',
    defaultMessage: 'Luoghi correlati',
  },
  tipologia_luogo: {
    id: 'tipologia_luogo',
    defaultMessage: 'Tipo di luogo',
  },
});

const VenueDescription = ({ content }) => {
  const intl = useIntl();

  return richTextHasContent(content?.descrizione_completa) ||
    richTextHasContent(content.elementi_di_interesse) ||
    contentFolderHasItems(content, 'multimedia') ||
    content?.tipologia_luogo ||
    content?.luoghi_correlati?.length > 0 ? (
    <RichTextArticle
      tag_id={'description'}
      title={intl.formatMessage(messages.descrizione)}
    >
      {/* DESCRIZIONE COMPLETA */}
      <RichText content={content.descrizione_completa} />
      {/* Tipologia luogo */}
      {content.tipologia_luogo?.title && (
        <div className="mb-5 mt-3">
          <h4>{intl.formatMessage(messages.tipologia_luogo)}</h4>
          <p className="font-serif">{content.tipologia_luogo.title}</p>
        </div>
      )}
      {/* ELEMENTI DI INTERESSE */}
      {richTextHasContent(content.elementi_di_interesse) && (
        <div className="mb-5 mt-3">
          <RichText
            title={`${intl.formatMessage(messages.elementi_di_interesse)}:`}
            content={content.elementi_di_interesse}
          />
        </div>
      )}
      {/* Luoghi correlati */}
      <RichTextArticle
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
      </RichTextArticle>
      {/*GALLERIA DI IMMAGINI*/}
      <Gallery
        content={content}
        folder_name={'multimedia'}
        title_video={intl.formatMessage(messages.video)}
        title_type="h5"
      />
    </RichTextArticle>
  ) : (
    <></>
  );
};

export default VenueDescription;
