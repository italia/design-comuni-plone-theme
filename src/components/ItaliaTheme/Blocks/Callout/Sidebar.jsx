import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { /*TextWidget,*/ SelectWidget } from '@plone/volto/components';

import { defineMessages, useIntl } from 'react-intl';
import IconWidget from 'design-comuni-plone-theme/components/ItaliaTheme/manage/Widgets/IconWidget';
import { defaultIconWidgetOptions } from 'design-comuni-plone-theme/helpers/index';
import { ColorListWidget } from 'design-comuni-plone-theme/components/ItaliaTheme';

const messages = defineMessages({
  color: { id: 'color', defaultMessage: 'Colore' },
  color_default: {
    id: 'color_default',
    defaultMessage: 'Default',
  },
  color_success: {
    id: 'color_success',
    defaultMessage: 'Success',
  },
  color_warning: {
    id: 'color_warning',
    defaultMessage: 'Warning',
  },
  color_danger: {
    id: 'color_danger',
    defaultMessage: 'Danger',
  },
  color_note: {
    id: 'color_note',
    defaultMessage: 'Note',
  },
  style: { id: 'callout_style', defaultMessage: 'Stile' },
  style_basic: { id: 'callout_style_basic', defaultMessage: 'Base' },
  style_highlight: {
    id: 'callout_style_highlight',
    defaultMessage: 'In evidenza',
  },
});

const Sidebar = ({ data, block, onChangeBlock }) => {
  const intl = useIntl();
  const colors = [
    {
      name: 'callout_default',
      label: intl.formatMessage(messages.color_default),
    },
    { name: 'success', label: intl.formatMessage(messages.color_success) },
    { name: 'warning', label: intl.formatMessage(messages.color_warning) },
    { name: 'danger', label: intl.formatMessage(messages.color_danger) },
    { name: 'callout_note', label: intl.formatMessage(messages.color_note) },
  ];

  const styles = [
    ['base', intl.formatMessage(messages.style_basic)],
    ['highlight', intl.formatMessage(messages.style_highlight)],
  ];

  useEffect(() => {
    if (!data.style) {
      onChangeBlock(block, { ...data, style: styles[0][0] });
    }
  }, []);

  return (
    <Segment.Group raised>
      <header className="header pulled">
        <h2>
          <FormattedMessage id="Callout" defaultMessage="Callout" />
        </h2>
      </header>
      <div className="ui form">
        <SelectWidget
          id="style"
          title={intl.formatMessage(messages.style)}
          required={false}
          value={data.style}
          intl={intl}
          onChange={(id, value) => {
            onChangeBlock(block, { ...data, [id]: value });
          }}
          choices={styles}
          noValueOption={false}
        />
        <ColorListWidget
          id="color"
          title={intl.formatMessage(messages.color)}
          value={data.color}
          onChange={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }}
          colors={colors}
        />

        <IconWidget
          id="icon"
          value={data.icon ?? ''}
          defaultOptions={defaultIconWidgetOptions}
          onChange={(name, value) => {
            onChangeBlock(block, {
              ...data,
              [name]: value,
            });
          }}
        />

        {/* <TextWidget
          id="title"
          title={intl.formatMessage(messages.linkMoreTitle)}
          value={data.linkMoreTitle}
          onChange={(name, value) => {
            onChangeBlock(block, {
              ...data,
              linkMoreTitle: value,
            });
          }}
        /> */}
      </div>
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
