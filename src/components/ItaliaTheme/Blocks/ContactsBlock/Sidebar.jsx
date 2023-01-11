import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Accordion } from 'semantic-ui-react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { TextWidget } from '@plone/volto/components';

import { defineMessages, useIntl } from 'react-intl';

import {
  LinkToWidget,
  ColorListWidget,
} from 'design-comuni-plone-theme/components/ItaliaTheme';

const messages = defineMessages({
  linkMoreTitle: {
    id: 'linkMoreTitle',
    defaultMessage: 'Titolo per il link ad altro',
  },
  linkMore: {
    id: 'linkMore',
    defaultMessage: 'Link ad altro',
  },
  bg_color: {
    id: 'bg_color',
    defaultMessage: 'Colore di sfondo',
  },
  color_primary: {
    id: 'color_primary',
    defaultMessage: 'Primario',
  },
  color_secondary: {
    id: 'color_primary',
    defaultMessage: 'Primario',
  },
});

const Sidebar = ({
  data,
  block,
  onChangeBlock,
  onChangeSubBlock,
  selected = 0,
  setSelected,
  openObjectBrowser,
}) => {
  const intl = useIntl();
  const bg_colors = [
    { name: 'primary', label: intl.formatMessage(messages.color_primary) },
    { name: 'secondary', label: intl.formatMessage(messages.color_secondary) },
  ];
  return (
    <Segment.Group raised>
      <header className="header pulled">
        <h2>
          <FormattedMessage id="contacts_block" defaultMessage="Contatti" />
        </h2>
      </header>
      <Accordion className="form">
        <Accordion.Content active={true}>
          <ColorListWidget
            id="bg_color"
            title={intl.formatMessage(messages.bg_color)}
            value={data.bg_color}
            onChange={(id, value) => {
              onChangeBlock(block, {
                ...data,
                [id]: value,
              });
            }}
            colors={bg_colors}
          />

          <TextWidget
            id="linkMoreTitle"
            title={intl.formatMessage(messages.linkMoreTitle)}
            value={data.linkMoreTitle}
            onChange={(name, value) => {
              onChangeBlock(block, {
                ...data,
                linkMoreTitle: value,
              });
            }}
          />

          <LinkToWidget
            data={data}
            openObjectBrowser={openObjectBrowser}
            title={intl.formatMessage(messages.linkMore)}
            showTarget={false}
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
