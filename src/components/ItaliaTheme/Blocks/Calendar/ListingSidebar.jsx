import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Segment, Accordion } from 'semantic-ui-react';
import { defineMessages, useIntl } from 'react-intl';

import { ListingBlockData as ListingData, Icon } from '@plone/volto/components';
import { CheckboxWidget, TextWidget } from '@plone/volto/components';
import { LocationFiltersWidget } from 'design-comuni-plone-theme/components/ItaliaTheme';

import upSVG from '@plone/volto/icons/up-key.svg';
import downSVG from '@plone/volto/icons/down-key.svg';
import config from '@plone/volto/registry';

const messages = defineMessages({
  calendarBlockSidebarTitle: {
    id: 'calendarBlockSidebarTitle',
    defaultMessage: 'Calendario',
  },
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
  show_preview_img: {
    id: 'Mostra le immagini di anteprima',
    defaultMessage: 'Mostra le immagini di anteprima',
  },
  show_location_filters: {
    id: 'Mostra i filtri per luogo',
    defaultMessage: 'Mostra i filtri per luogo',
  },
});

const ListingSidebar = (props) => {
  const intl = useIntl();
  const [activeAccIndex, setActiveAccIndex] = useState(1);

  function handleAccClick(e, titleProps) {
    const { index } = titleProps;
    const newIndex = activeAccIndex === index ? -1 : index;

    setActiveAccIndex(newIndex);
  }
  return (
    <Segment.Group raised>
      <header className="header pulled">
        <h2>{intl.formatMessage(messages.calendarBlockSidebarTitle)}</h2>
      </header>

      <Accordion fluid styled className="form">
        <TextWidget
          id="title"
          title={intl.formatMessage(messages.title)}
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
          title={intl.formatMessage(messages.show_block_bg)}
          value={props.data.show_block_bg ? props.data.show_block_bg : false}
          onChange={(id, value) => {
            props.onChangeBlock(props.block, {
              ...props.data,
              [id]: value,
            });
          }}
        />

        <CheckboxWidget
          id="show_preview_img"
          title={intl.formatMessage(messages.show_preview_img)}
          value={
            props.data.show_preview_img ? props.data.show_preview_img : false
          }
          onChange={(id, value) => {
            props.onChangeBlock(props.block, {
              ...props.data,
              [id]: value,
            });
          }}
        />

        <LocationFiltersWidget
          id="show_location_filters"
          title={intl.formatMessage(messages.show_location_filters)}
          value={props.data.show_location_filters ?? false}
          onChange={(id, value) => {
            props.onChangeBlock(props.block, {
              ...props.data,
              [id]: value,
            });
          }}
          formData={props.data}
        />

        <Accordion.Title
          active={activeAccIndex === 1}
          index={1}
          onClick={handleAccClick}
        >
          {intl.formatMessage(messages.content)}
          {activeAccIndex === 1 ? (
            <Icon name={upSVG} size="20px" />
          ) : (
            <Icon name={downSVG} size="20px" />
          )}
        </Accordion.Title>
        <Accordion.Content
          active={activeAccIndex === 1}
          className="listing-calendar-props"
        >
          <ListingData
            blocksConfig={{ listing: config.blocks.blocksConfig.listing }}
            {...props}
          />
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

export default ListingSidebar;
