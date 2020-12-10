import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Accordion } from 'semantic-ui-react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { defineMessages, useIntl } from 'react-intl';

import { FileWidget, CheckboxWidget } from '@plone/volto/components';

const messages = defineMessages({
  cardImage: {
    id: 'cardImage',
    defaultMessage: "Seleziona l'immagine da mostrare",
  },
  cardImageEnable: {
    id: 'cardImageEnable',
    defaultMessage: "Mostra l'immagine",
  },
});

const Sidebar = ({ data, block, onChangeBlock }) => {
  const intl = useIntl();
  const [imageShow, setImageShow] = React.useState(data['showImage'] || false);
  const currentData = data;

  return (
    <Segment.Group raised>
      <header className="header pulled">
        <h2>
          <FormattedMessage id="default" defaultMessage="Default" />
        </h2>
      </header>
      <Accordion className="form">
        <Accordion.Content active={true}>
          <FileWidget
            id="CardImage"
            title={intl.formatMessage(messages.cardImage)}
            value={currentData.image}
            onChange={(name, value) => {
              setImageShow(value ? true : false);
              onChangeBlock({ ...currentData, image: value }, 'image');
              onChangeBlock(
                { ...currentData, showImage: !!value },
                'showImage',
              );
            }}
          />
          <CheckboxWidget
            id={'CardImageEnable'}
            title={intl.formatMessage(messages.cardImageEnable)}
            value={imageShow}
            onChange={(name, value) => {
              setImageShow(!imageShow);
              onChangeBlock({ ...currentData, showImage: value }, 'showImage');
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
