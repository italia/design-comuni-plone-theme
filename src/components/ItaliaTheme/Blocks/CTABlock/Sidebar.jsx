/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Segment, Accordion } from 'semantic-ui-react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { defineMessages, useIntl } from 'react-intl';
import {
  ObjectBrowserWidget,
  CheckboxWidget,
  TextWidget,
} from '@plone/volto/components';
import { LinkToWidget } from 'design-comuni-plone-theme/components/ItaliaTheme';

const messages = defineMessages({
  ctaImage: {
    id: 'ctaImage',
    defaultMessage: "Seleziona l'immagine da mostrare",
  },
  ctaImageEnable: {
    id: 'ctaImageEnable',
    defaultMessage: "Mostra l'immagine",
  },
  ctaFullWidth: {
    id: 'ctaFullWidth',
    defaultMessage: 'Mostra a pieno schermo',
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

  useEffect(() => {
    if (data.showFullWidth === undefined) {
      onChangeBlock(block, {
        ...data,
        showFullWidth: true,
      });
    }
  }, []);

  if (data.showImage === null || data.showImage === undefined) {
    data.showImage = false;
  }

  return (
    <Segment.Group raised key={block.id || block}>
      <header className="header pulled">
        <h2>
          <FormattedMessage id="cta_block" defaultMessage="Blocco CTA" />
        </h2>
      </header>
      <Accordion className="form">
        <Accordion.Content active={true}>
          <ObjectBrowserWidget
            id="ctaImage"
            title={intl.formatMessage(messages.ctaImage)}
            value={data.ctaImage || []}
            mode="image"
            widgetOptions={{
              pattern_options: { selectableTypes: ['Image'] },
            }}
            onChange={(name, value) => {
              onChangeBlock(block, {
                ...data,
                [name]: value || [],
                showImage: !!value,
              });
            }}
          />
          <CheckboxWidget
            id="showImage"
            title={intl.formatMessage(messages.ctaImageEnable)}
            value={data.ctaImage?.length > 0 && data.showImage}
            onChange={(name, checked) => {
              onChangeBlock(block, { ...data, [name]: checked });
            }}
            isDisabled={!data.ctaImage?.length > 0}
          />
          <CheckboxWidget
            id="showFullWidth"
            title={intl.formatMessage(messages.ctaFullWidth)}
            value={data.showFullWidth ? data.showFullWidth : false}
            onChange={(name, checked) => {
              onChangeBlock(block, { ...data, [name]: checked });
            }}
          />

          <TextWidget
            id="ctaLinkTitle"
            title={intl.formatMessage(messages.ctaLinkTitle)}
            value={data.ctaLinkTitle}
            onChange={(name, value) => {
              onChangeBlock(block, {
                ...data,
                [name]: value,
              });
            }}
          />
          <LinkToWidget
            data={data}
            openObjectBrowser={openObjectBrowser}
            linkField="ctaLink"
            title={intl.formatMessage(messages.ctaLink)}
            showTarget={true}
            onChange={(name, value) =>
              onChangeBlock(block, {
                ...data,
                [name]: value,
              })
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
