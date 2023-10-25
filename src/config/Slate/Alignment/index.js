import React from 'react';
import { useIntl, defineMessages } from 'react-intl';
import AlignMenu from './AlignMenu';

const messages = defineMessages({
  align: {
    id: 'Allineamento',
    defaultMessage: 'Allineamento',
  },
});

export const AlignElement = ({ attributes, children, element }) => {
  return (
    <p {...attributes} align="test">
      {children}
    </p>
  );
};

const AlignButton = (props) => {
  const intl = useIntl();
  return <AlignMenu {...props} title={intl.formatMessage(messages.align)} />;
};

export default function install(config) {
  const { slate } = config.settings;

  slate.buttons.align = AlignButton;

  slate.elements['align'] = AlignElement;

  //lo metto come primo elemento della toolbar
  slate.toolbarButtons = ['align', 'separator', ...slate.toolbarButtons];
  slate.expandedToolbarButtons = [
    'align',
    'separator',
    ...slate.expandedToolbarButtons,
  ];

  //il deserializer html per aggiungere le classi è definito in deserializers.js
  return config;
}
