/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { defineMessages, useIntl } from 'react-intl';
import { CheckboxWidget } from '@plone/volto/components';

const messages = defineMessages({
  bgColor: {
    id: 'bgColor',
    defaultMessage: 'Mostra lo sfondo del blocco',
  },
  htmlFullWidth: {
    id: 'htmlFullWidth',
    defaultMessage: 'Mostra lo sfondo a tutta larghezza',
  },
});

const Sidebar = ({ data, block, onChangeBlock }) => {
  const intl = useIntl();

  return (
    <Segment.Group raised key={block.id || block}>
      <header className="header pulled">
        <h2>
          <FormattedMessage id="html_block" defaultMessage="Blocco HTML" />
        </h2>
      </header>
      <Segment className="form">
        <CheckboxWidget
          id="bgColor"
          title={intl.formatMessage(messages.bgColor)}
          value={data.bgColor}
          onChange={(name, checked) => {
            onChangeBlock(block, { ...data, [name]: checked });
          }}
        />
        <CheckboxWidget
          id="showFullWidth"
          title={intl.formatMessage(messages.htmlFullWidth)}
          value={data.showFullWidth}
          onChange={(name, checked) => {
            onChangeBlock(block, { ...data, [name]: checked });
          }}
        />
      </Segment>
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
