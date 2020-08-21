import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Accordion } from 'semantic-ui-react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Icon, ObjectBrowserWidget, TextWidget } from '@plone/volto/components';
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
    <Segment.Group raised>
      <header className="header pulled">
        <h2>
          <FormattedMessage id="default" defaultMessage="Default" />
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
                    required={true}
                    mode={'link'}
                    value={subblock.argument}
                    widgetOptions={{
                      pattern_options: {
                        selectableTypes: ['Pagina Argomento'],
                      },
                    }}
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
