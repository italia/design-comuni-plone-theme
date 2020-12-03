import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Segment, Accordion } from 'semantic-ui-react';
import { defineMessages, FormattedMessage, injectIntl } from 'react-intl';
import { SelectWidget, Icon} from '@plone/volto/components';
import upSVG from '@plone/volto/icons/up-key.svg';
import downSVG from '@plone/volto/icons/down-key.svg';

const messages = defineMessages({
  blockStyle: {
    id: 'Block style',
    defaultMessage: 'Block style',
  },
  primary: {
    id: 'primary',
    defaultMessage: 'Primario',
  },
  secondary: {
    id: 'secondary',
    defaultMessage: 'Secondario',
  },
  tertiary: {
    id: 'tertiary',
    defaultMessage: 'Ternario',
  },
  filter_one: {
    id: 'filter_one',
    defaultMessage: 'Filtro 1',
  },
  filter_two: {
    id: 'filter_two',
    defaultMessage: 'Filtro 2',
  },
  filter_three: {
    id: 'filter_three',
    defaultMessage: 'Filtro 3',
  },
  bg_color: {
    id: 'bg_color',
    defaultMessage: 'Colore sfondo',
  },
  button_color: {
    id: 'button_color',
    defaultMessage: 'Colore bottone',
  },
  colors: {
    id: 'colors',
    defaultMessage: 'Colori',
  },
  text_filter: {
    id: 'text_filter',
    defaultMessage: 'Filtro di testo',
  },
  venue_filter: {
    id: 'venue_filter',
    defaultMessage: 'Filtro per luoghi',
  },
  date_filter: {
    id: 'date_filter',
    defaultMessage: 'Filtro per Date',
  }
});

const ListingSidebar = (props) => {
  const [activeAccIndex, setActiveAccIndex] = useState(1);

  function handleAccClick(e, titleProps) {
    const { index } = titleProps;
    const newIndex = activeAccIndex === index ? -1 : index;

    setActiveAccIndex(newIndex);
  }

  const filters = [
    [
      'text_filter',
      props.intl.formatMessage(messages.text_filter)
    ],
    [
      'venue_filter',
      props.intl.formatMessage(messages.venue_filter)
    ],
    [
      'date_filter',
      props.intl.formatMessage(messages.date_filter)
    ]
  ]

  const colors = [
    [
      'primary',
      props.intl.formatMessage(messages.primary)
    ],
    [
      'secondary',
      props.intl.formatMessage(messages.secondary)
    ]
  ]

  return (
    <Segment.Group raised>
      <header className="header pulled">
        <h2>
          <FormattedMessage id="Listing" defaultMessage="Listing" />
        </h2>
      </header>
      <Accordion className="form">
        <SelectWidget
          id="filter_one"
          title={props.intl.formatMessage(messages.filter_one)}
          value={props.data.filter_one}
          onChange={(id, value) => {
            props.onChangeBlock(props.block, {
              ...props.data,
              filter_one: value,
            });
          }}
          choices={filters}
        />
        <SelectWidget
          id="filter_two"
          title={props.intl.formatMessage(messages.filter_two)}
          value={props.data.filter_two}
          onChange={(id, value) => {
            props.onChangeBlock(props.block, {
              ...props.data,
              filter_two: value,
            });
          }}
          choices={filters}
        />
        <SelectWidget
          id="filter_three"
          title={props.intl.formatMessage(messages.filter_three)}
          value={props.data.filter_three}
          onChange={(id, value) => {
            props.onChangeBlock(props.block, {
              ...props.data,
              filter_three: value,
            });
          }}
          choices={filters}
        />

        <Accordion.Title
          active={activeAccIndex === 1}
          index={1}
          onClick={handleAccClick}
        >
            {props.intl.formatMessage(messages.colors)}
            {activeAccIndex === 1 ? (
              <Icon name={upSVG} size="20px" />
            ) : (
              <Icon name={downSVG} size="20px" />
            )}
          </Accordion.Title>
          <Accordion.Content active={activeAccIndex === 1}>
            <SelectWidget
              id="bg_color"
              title={props.intl.formatMessage(messages.bg_color)}
              value={props.data.bg_color}
              onChange={(id, value) => {
                props.onChangeBlock(props.block, {
                  ...props.data,
                  bg_color: value,
                });
              }}
              choices={colors}
            />
            <SelectWidget
              id="button_color"
              title={props.intl.formatMessage(messages.button_color)}
              value={props.data.button_color}
              onChange={(id, value) => {
                props.onChangeBlock(props.block, {
                  ...props.data,
                  button_color: value,
                });
              }}
              choices={[
                ...colors,
               ['tertiary', props.intl.formatMessage(messages.tertiary)],
              ]}
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

export default injectIntl(ListingSidebar);
