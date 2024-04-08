import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Accordion } from 'semantic-ui-react';
import { FormattedMessage, injectIntl } from 'react-intl';
import {
  Icon,
  ObjectBrowserWidget,
  TextWidget,
  CheckboxWidget,
} from '@plone/volto/components';
import upSVG from '@plone/volto/icons/up-key.svg';
import downSVG from '@plone/volto/icons/down-key.svg';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  title: {
    id: 'title',
    defaultMessage: 'Titolo',
  },
  selectOtherArguments: {
    id: 'selectOtherArguments',
    defaultMessage: 'Seleziona gli altri argomenti',
  },
  argument: {
    id: 'argoment',
    defaultMessage: 'Argomento',
  },
  cardDescription: {
    id: 'cardDescription',
    defaultMessage: 'Aggiungi un argomento da visualizzare sulla card.',
  },
  centerAlignment: {
    id: 'centerAlignment',
    defaultMessage: 'Allinea gli argomenti al centro',
  },
  hideButtonShowAll: {
    id: 'hideButtonShowAll',
    defaultMessage: 'Nascondi pulsante "Vedi tutti"',
  },
});

const Sidebar = ({
  data,
  block,
  onChangeBlock,
  onChangeSubBlock,
  selected = 0,
  setSelected,
}) => {
  const intl = useIntl();

  return (
    <Segment.Group>
      <header className="header pulled">
        <h2>
          <FormattedMessage
            id="arguments_in_evidence_block"
            defaultMessage="Argomenti in evidenza"
          />
        </h2>
      </header>
      <Accordion className="form">
        <Accordion.Content active={true}>
          <TextWidget
            id="ArgumentsTitle"
            title={intl.formatMessage(messages.title)}
            value={data.text}
            onChange={(name, value) => {
              onChangeBlock(block, {
                ...data,
                text: value,
              });
            }}
          />
          <ObjectBrowserWidget
            id={'ObjectBrowserWidget'}
            title={intl.formatMessage(messages.selectOtherArguments)}
            value={data.arguments}
            widgetOptions={{
              pattern_options: { selectableTypes: ['Pagina Argomento'] },
            }}
            onChange={(name, value) => {
              onChangeBlock(block, {
                ...data,
                arguments: value,
              });
            }}
          />
          <CheckboxWidget
            id="centerAlignment"
            title={intl.formatMessage(messages.centerAlignment)}
            value={data.centerAlignment ? data.centerAlignment : false}
            onChange={(name, value) => {
              onChangeBlock(block, {
                ...data,
                centerAlignment: value,
              });
            }}
          />
          <CheckboxWidget
            id="hideButtonShowAll"
            title={intl.formatMessage(messages.hideButtonShowAll)}
            value={data.hideButtonShowAll ? data.hideButtonShowAll : false}
            onChange={(name, value) => {
              onChangeBlock(block, { ...data, hideButtonShowAll: value });
            }}
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
                  {subblock?.argument && subblock?.argument[0]?.title}
                  {selected === index ? (
                    <Icon name={upSVG} size="20px" />
                  ) : (
                    <Icon name={downSVG} size="20px" />
                  )}
                </Accordion.Title>
                <Accordion.Content active={selected === index}>
                  <ObjectBrowserWidget
                    id={'ObjectBrowserWidget'}
                    title={intl.formatMessage(messages.argument)}
                    mode={'link'}
                    value={subblock.argument}
                    widgetOptions={{
                      pattern_options: {
                        selectableTypes: ['Pagina Argomento'],
                      },
                    }}
                    description={intl.formatMessage(messages.cardDescription)}
                    onChange={(name, value) => {
                      onChangeSubBlock(index, {
                        ...subblock,
                        argument: value,
                      });
                    }}
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
