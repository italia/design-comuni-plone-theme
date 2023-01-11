/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Segment, Accordion } from 'semantic-ui-react';
import { defineMessages, FormattedMessage, useIntl } from 'react-intl';
import { TextWidget, CheckboxWidget } from '@plone/volto/components';
import {
  LinkToWidget,
  ColorListWidget,
} from 'design-comuni-plone-theme/components/ItaliaTheme';

const messages = defineMessages({
  News: {
    id: 'Content in evidence',
    defaultMessage: 'Contenuto in primo piano',
  },
  LinkToTitle: {
    id: 'Linkto title',
    defaultMessage: 'Testo per il link ad altro',
  },
  LinkMore: {
    id: 'LinkMore',
    defaultMessage: 'Link ad altro',
  },
  natural_image_size: {
    id: 'natural_image_size',
    defineMessages: "Non alterare le dimensioni naturali dell'immagine",
  },
  show_section: {
    id: 'show_section',
    defaultMessage: 'Mostra la sezione',
  },
  show_type: {
    id: 'show_type',
    defaultMessage: 'Mostra il tipo',
  },
  show_date: {
    id: 'show_date',
    defaultMessage: 'Mostra la data',
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
  color_transparent: {
    id: 'color_transparent',
    defaultMessage: 'Trasparente',
  },
});

const Sidebar = ({ block, data, onChangeBlock, openObjectBrowser }) => {
  const intl = useIntl();
  useEffect(() => {
    if (
      data.show_type === undefined &&
      data.show_section === undefined &&
      data.show_date === undefined
    ) {
      onChangeBlock(block, {
        ...data,
        show_type: true,
        show_date: true,
      });
    }
  }, []);

  const bg_colors = [
    {
      name: 'transparent',
      label: intl.formatMessage(messages.color_transparent),
    },
    { name: 'primary', label: intl.formatMessage(messages.color_primary) },
    { name: 'secondary', label: intl.formatMessage(messages.color_secondary) },
  ];

  return (
    <Segment.Group raised>
      <header className="header pulled">
        <h2>
          <FormattedMessage
            id="Content in evidence"
            defaultMessage="Contenuto in primo piano"
          />
        </h2>
      </header>

      <Segment className="form">
        <LinkToWidget
          data={data}
          openObjectBrowser={openObjectBrowser}
          title={intl.formatMessage(messages.News)}
          showTarget={false}
          onChange={(name, value) =>
            onChangeBlock(block, {
              ...data,
              [name]: value,
            })
          }
        />

        <CheckboxWidget
          id="natural_image_size"
          title={intl.formatMessage(messages.natural_image_size)}
          value={data.natural_image_size ? data.natural_image_size : false}
          onChange={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }}
        />

        <CheckboxWidget
          id="show_type"
          title={intl.formatMessage(messages.show_type)}
          value={data.show_type ? data.show_type : false}
          onChange={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }}
        />
        <CheckboxWidget
          id="show_section"
          title={intl.formatMessage(messages.show_section)}
          value={data.show_section ? data.show_section : false}
          onChange={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }}
        />
        <CheckboxWidget
          id="show_date"
          title={intl.formatMessage(messages.show_date)}
          value={data.show_date ? data.show_date : false}
          onChange={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }}
        />
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
      </Segment>
      <Accordion fluid styled className="form">
        <Accordion.Title active={true} index={0} onClick={() => {}}>
          {intl.formatMessage(messages.LinkMore)}
        </Accordion.Title>
        <Accordion.Content active={true}>
          <TextWidget
            id="moreTitle"
            title={intl.formatMessage(messages.LinkToTitle)}
            required={false}
            value={data.moreTitle}
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
            linkField="moreHref"
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
  block: PropTypes.string.isRequired,
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  onChangeBlock: PropTypes.func.isRequired,
  openObjectBrowser: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

export default Sidebar;
