import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Accordion } from 'semantic-ui-react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { defineMessages, useIntl } from 'react-intl';
import {
  FileWidget,
  CheckboxWidget,
  TextWidget,
} from '@plone/volto/components';
import { LinkToWidget } from '@italia/components/ItaliaTheme';

const messages = defineMessages({
  ctaImage: {
    id: 'ctaImage',
    defaultMessage: "Seleziona l'immagine da mostrare",
  },
  ctaImageEnable: {
    id: 'ctaImageEnable',
    defaultMessage: "Mostra l'immagine",
  },
  ctaLinkTitle: {
    id: 'ctaLinkTitle',
    defaultMessage: 'Titolo per il link della CTA',
  },
  ctaLink: {
    id: 'ctaLink',
    defaultMessage: 'Link della CTA',
  },
});

const Sidebar = ({ data, block, onChangeBlock, openObjectBrowser }) => {
  const intl = useIntl();
  const [imageShow, setImageShow] = React.useState(data['showImage'] || false);
  const currentData = data;

  return (
    <Segment.Group raised key={block.id || block}>
      <header className="header pulled">
        <h2>
          <FormattedMessage id="default" defaultMessage="Default" />
        </h2>
      </header>
      <Accordion className="form">
        <Accordion.Content active={true}>
          <FileWidget
            id="CTAImage"
            title={intl.formatMessage(messages.ctaImage)}
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
            id={'CTAImageEnable'}
            title={intl.formatMessage(messages.ctaImageEnable)}
            value={imageShow}
            onChange={(name, value) => {
              setImageShow(!imageShow);
              onChangeBlock({ ...currentData, showImage: value }, 'showImage');
            }}
          />
          <TextWidget
            id="ctaLinkTitle"
            title={intl.formatMessage(messages.ctaLinkTitle)}
            value={currentData.ctaLinkTitle}
            onChange={(_name, value) => {
              onChangeBlock(
                {
                  ...currentData,
                  ctaLinkTitle: value,
                },
                'ctaLinkTitle',
              );
            }}
          />

          <LinkToWidget
            data={currentData}
            openObjectBrowser={openObjectBrowser}
            linkField="ctaLink"
            title={intl.formatMessage(messages.ctaLink)}
            showTarget={true}
            onChange={(name, value) =>
              onChangeBlock(
                {
                  ...currentData,
                  [name]: value,
                },
                name,
              )
            }
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
