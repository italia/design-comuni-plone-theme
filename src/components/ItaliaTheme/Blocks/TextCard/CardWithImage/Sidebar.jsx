import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Accordion } from 'semantic-ui-react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { defineMessages, useIntl } from 'react-intl';

import {
  FileWidget,
  CheckboxWidget,
  FormFieldWrapper,
  TextWidget,
} from '@plone/volto/components';
import ImageSizeWidget from '@plone/volto/components/manage/Widgets/ImageSizeWidget';

const messages = defineMessages({
  cardImage: {
    id: 'cardImage',
    defaultMessage: "Seleziona l'immagine da mostrare",
  },
  cardImageEnable: {
    id: 'cardImageEnable',
    defaultMessage: "Mostra l'immagine",
  },
  CardImageRight: {
    id: 'CardImageRight',
    defaultMessage: 'Allinea immagine a destra',
  },
  CardImageSize: {
    id: 'CardImageSize',
    defaultMessage: 'Dimensione immagine',
  },
  natural_image_size: {
    id: 'natural_image_size',
    defaultMessage: "Non alterare le dimensioni naturali dell'immagine",
  },
  small: {
    id: 'Piccolo',
    defaultMessage: 'Piccolo',
  },
  medium: {
    id: 'Medio',
    defaultMessage: 'Medio',
  },
  large: {
    id: 'Grande',
    defaultMessage: 'Grande',
  },
  altText: {
    id: 'altText',
    defaultMessage: "Testo alternativo per l'immagine",
  },
});

const Sidebar = ({ data, block, onChangeBlock }) => {
  const intl = useIntl();

  return (
    <Segment.Group raised>
      <header className="header pulled">
        <h2>
          <FormattedMessage
            id="card_width_image"
            defaultMessage="Card con immagine"
          />
        </h2>
      </header>
      <Accordion className="form">
        <Accordion.Content active={true}>
          <FileWidget
            id="CardImage"
            title={intl.formatMessage(messages.cardImage)}
            value={data.image}
            onChange={(name, value) => {
              onChangeBlock({ ...data, image: value, showImage: !!value });
            }}
          />
          <CheckboxWidget
            id={'CardImageEnable'}
            title={intl.formatMessage(messages.cardImageEnable)}
            value={data.showImage || false}
            onChange={(name, value) => {
              onChangeBlock({ ...data, showImage: value });
            }}
          />
          <CheckboxWidget
            id="natural_image_size"
            title={intl.formatMessage(messages.natural_image_size)}
            value={data.sizeNatural || false}
            onChange={(name, value) => {
              onChangeBlock({ ...data, sizeNatural: value });
            }}
          />
          <CheckboxWidget
            id="CardImageRight"
            title={intl.formatMessage(messages.CardImageRight)}
            value={data.rightImage || false}
            onChange={(name, value) => {
              onChangeBlock({ ...data, rightImage: value });
            }}
          />
          <FormFieldWrapper
            id="image_size"
            title={intl.formatMessage(messages.CardImageSize)}
          >
            <ImageSizeWidget
              onChange={(b, value) => {
                onChangeBlock({ ...data, [b]: value });
              }}
              id={'sizeImage'}
              value={data.sizeImage || 's'}
            />
          </FormFieldWrapper>
          <TextWidget
            id="altText"
            title={intl.formatMessage(messages.altText)}
            value={data.altText}
            onChange={(name, value) => {
              onChangeBlock({ ...data, altText: value });
            }}
          />
        </Accordion.Content>
      </Accordion>
    </Segment.Group>
  );
};

Sidebar.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  block: PropTypes.string,
  onChangeBlock: PropTypes.func,
  selected: PropTypes.any,
  setSelected: PropTypes.func,
};

export default injectIntl(Sidebar);
