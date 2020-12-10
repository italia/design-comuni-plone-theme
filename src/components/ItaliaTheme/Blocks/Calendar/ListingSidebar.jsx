import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Segment, Accordion } from 'semantic-ui-react';
import { defineMessages, FormattedMessage, injectIntl } from 'react-intl';

import { ListingBlockData as ListingData, Icon } from '@plone/volto/components';

import upSVG from '@plone/volto/icons/up-key.svg';
import downSVG from '@plone/volto/icons/down-key.svg';
import { CheckboxWidget, TextWidget } from '@plone/volto/components';

const messages = defineMessages({
  blockStyle: {
    id: 'Block style',
    defaultMessage: 'Block style',
  },
  content: {
    id: 'Content',
    defaultMessage: 'Content',
  },
  more: {
    id: 'Link more',
    defaultMessage: 'Link more',
  },
  title: {
    id: 'Titolo',
    defaultMessage: 'Titolo',
  },
  show_block_bg: {
    id: 'Mostra lo sfondo del blocco',
    defaultMessage: 'Mostra lo sfondo del blocco',
  },
});

const ListingSidebar = (props) => {
  const [activeAccIndex, setActiveAccIndex] = useState(1);

  function handleAccClick(e, titleProps) {
    const { index } = titleProps;
    const newIndex = activeAccIndex === index ? -1 : index;

    setActiveAccIndex(newIndex);
  }

  return (
    <Segment.Group raised>
      <header className="header pulled">
        <h2>
          <FormattedMessage id="Listing" defaultMessage="Listing" />
        </h2>
      </header>

      <Accordion fluid styled className="form">
        <TextWidget
          id="title"
          title={props.intl.formatMessage(messages.title)}
          required={false}
          value={props.data.title}
          onChange={(name, value) => {
            props.onChangeBlock(props.block, {
              ...props.data,
              [name]: value,
            });
          }}
        />

        <CheckboxWidget
          id="show_block_bg"
          title={props.intl.formatMessage(messages.show_block_bg)}
          value={props.data.show_block_bg ? props.data.show_block_bg : false}
          onChange={(id, value) => {
            props.onChangeBlock(props.block, {
              ...props.data,
              [id]: value,
            });
          }}
        />

        <Accordion.Title
          active={activeAccIndex === 1}
          index={1}
          onClick={handleAccClick}
        >
          {props.intl.formatMessage(messages.content)}
          {activeAccIndex === 1 ? (
            <Icon name={upSVG} size="20px" />
          ) : (
            <Icon name={downSVG} size="20px" />
          )}
        </Accordion.Title>
        <Accordion.Content active={activeAccIndex === 1}>
          <ListingData {...props} />
        </Accordion.Content>
      </Accordion>
    </Segment.Group>
  );
};

ListingSidebar.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
};

export default injectIntl(ListingSidebar);
