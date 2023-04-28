import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { Segment, Accordion } from 'semantic-ui-react';
import { FormattedMessage, injectIntl } from 'react-intl';
import redraft from 'redraft';

import {
  TextWidget,
  Icon,
  ObjectBrowserWidget,
  CheckboxWidget,
} from '@plone/volto/components';
import { ColorListWidget } from 'design-comuni-plone-theme/components/ItaliaTheme';
import upSVG from '@plone/volto/icons/up-key.svg';
import downSVG from '@plone/volto/icons/down-key.svg';

import { LinkToWidget } from 'design-comuni-plone-theme/components/ItaliaTheme';
import IconWidget from 'design-comuni-plone-theme/components/ItaliaTheme/manage/Widgets/IconWidget';
import { defaultIconWidgetOptions } from 'design-comuni-plone-theme/helpers/index';
import config from '@plone/volto/registry';

const messages = defineMessages({
  linkMoreTitle: {
    id: 'linkMoreTitle',
    defaultMessage: 'Titolo per il link ad altro',
  },
  linkMore: {
    id: 'linkMore',
    defaultMessage: 'Link ad altro',
  },
  backgroundImage: {
    id: 'backgroundImage',
    defaultMessage: 'Immagine di sfondo',
  },

  alignCards: {
    id: 'alignCards',
    defaultMessage: 'Centrare i card',
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
            id="iconss_blocks"
            defaultMessage="Blocco con icone"
          />
        </h2>
      </header>
      <Accordion className="form">
        <Accordion.Content active={true}>
          <ObjectBrowserWidget
            id="background"
            title={intl.formatMessage(messages.backgroundImage)}
            description=""
            required={false}
            widgetOptions={{
              pattern_options: { selectableTypes: ['Image'] },
            }}
            value={data.background ?? []}
            onChange={(id, value) =>
              onChangeBlock(block, { ...data, [id]: value })
            }
          />
          <CheckboxWidget
            id="alignCards"
            title={intl.formatMessage(messages.alignCards)}
            value={data.alignCards ? data.alignCards : false}
            onChange={(name, checked) => {
              onChangeBlock(block, { ...data, [name]: checked });
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
      <Accordion fluid styled className="form">
        {data.subblocks &&
          data.subblocks.map((subblock, index) => {
            return (
              <div key={'subblock' + index}>
                <Accordion.Title
                  active={selected === index}
                  index={index}
                  onClick={() => setSelected(selected === index ? null : index)}
                >
                  {subblock.title
                    ? redraft(
                        subblock.title,
                        config.settings.richtextViewSettings.ToHTMLRenderers,
                        config.settings.richtextViewSettings.ToHTMLOptions,
                      )
                    : `Blocco ${index + 1}`}
                  {selected === index ? (
                    <Icon name={upSVG} size="20px" />
                  ) : (
                    <Icon name={downSVG} size="20px" />
                  )}
                </Accordion.Title>
                <Accordion.Content active={selected === index}>
                  <IconWidget
                    id="icon"
                    value={subblock.icon ?? ''}
                    defaultOptions={defaultIconWidgetOptions}
                    onChange={(name, value) => {
                      onChangeSubBlock(index, {
                        ...subblock,
                        [name]: value,
                      });
                    }}
                  />
                  <TextWidget
                    id="linkMoreTitle"
                    title={intl.formatMessage(messages.linkMoreTitle)}
                    value={subblock.linkMoreTitle}
                    onChange={(name, value) => {
                      onChangeSubBlock(index, {
                        ...subblock,
                        linkMoreTitle: value,
                      });
                    }}
                  />
                  <LinkToWidget
                    data={subblock}
                    openObjectBrowser={openObjectBrowser}
                    title={intl.formatMessage(messages.linkMore)}
                    showTarget={false}
                    onChange={(name, value) =>
                      onChangeSubBlock(index, {
                        ...subblock,
                        [name]: value,
                      })
                    }
                  />
                </Accordion.Content>
              </div>
            );
          })}
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
