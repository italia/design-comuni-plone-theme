import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { Segment, Accordion } from 'semantic-ui-react';
import { FormattedMessage, injectIntl } from 'react-intl';

import { ObjectBrowserWidget } from '@plone/volto/components';
import { IconWidget } from 'design-comuni-plone-theme/components/ItaliaTheme/manage/Widgets';
import { defaultIconWidgetOptions } from 'design-comuni-plone-theme/helpers/index';

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

  return (
    <div className="numbers-block-sidebar-form-container">
      <Segment.Group raised>
        <header className="header pulled">
          <h2>
            <FormattedMessage
              id="numbers_block"
              defaultMessage="Blocco numeri"
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
                pattern_options: {
                  selectableTypes: ['Image'],
                  maximumSelectionSize: 1,
                },
              }}
              value={data.background ?? []}
              onChange={(id, value) =>
                onChangeBlock(block, { ...data, [id]: value })
              }
            />

            <IconWidget
              id="icon1"
              value={data.icon1 ?? ''}
              defaultOptions={defaultIconWidgetOptions}
              onChange={(name, value) => {
                onChangeBlock(block, { ...data, [name]: value });
              }}
            />
            <IconWidget
              id="icon2"
              value={data.icon2 ?? ''}
              defaultOptions={defaultIconWidgetOptions}
              onChange={(name, value) => {
                onChangeBlock(block, { ...data, [name]: value });
              }}
            />
            <IconWidget
              id="icon3"
              value={data.icon3 ?? ''}
              defaultOptions={defaultIconWidgetOptions}
              onChange={(name, value) => {
                onChangeBlock(block, { ...data, [name]: value });
              }}
            />
          </Accordion.Content>
        </Accordion>
      </Segment.Group>
    </div>
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
