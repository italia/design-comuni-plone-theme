import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Accordion } from 'semantic-ui-react';
import { defineMessages, FormattedMessage, useIntl } from 'react-intl';
import { TextWidget, SelectWidget } from '@plone/volto/components';
import ObjectBrowserWidget from '@plone/volto/components/manage/Widgets/ObjectBrowserWidget';

const messages = defineMessages({
  editSearch: {
    id: 'editSearch',
    defaultMessage: 'Modifica ricerca',
  },
  title: {
    id: 'SearchServicesTitle',
    defaultMessage: 'Titolo',
  },
  link: {
    id: 'link',
    defaultMessage: 'Collegamento',
  },
  desc: {
    id: 'desc',
    defaultMessage: 'Descrizione',
  },
  sections: {
    id: 'sections',
    defaultMessage: 'Sezioni ricercabili',
  },
  placeholder: {
    id: 'placeholder',
    defaultMessage: 'Placeholder',
  },
});

const Sidebar = ({
  block,
  data,
  onChangeBlock,
  sections,
  openObjectBrowser,
  required,
}) => {
  const intl = useIntl();

  return (
    <Segment.Group raised>
      <header className="header pulled">
        <h2>
          <FormattedMessage
            id="SearchServices"
            defaultMessage="Ricerca servizi"
          />
        </h2>
      </header>
      <Accordion className="form">
        <Accordion.Title active={true} index={0} onClick={() => {}}>
          <FormattedMessage id="editSearch" defaultMessage="Modifica ricerca" />
        </Accordion.Title>
        <Accordion.Content active={true}>
          <TextWidget
            id="SearchServicesTitle"
            title={intl.formatMessage(messages.title)}
            required={true}
            value={data.title}
            onChange={(name, value) => {
              onChangeBlock(block, {
                ...data,
                title: value,
              });
            }}
          />
          <TextWidget
            id="SearchServicesPlaceholder"
            title={intl.formatMessage(messages.placeholder)}
            required={true}
            value={data.placeholder}
            onChange={(name, value) => {
              onChangeBlock(block, {
                ...data,
                placeholder: value,
              });
            }}
          />
          {sections && (
            <SelectWidget
              id="groups"
              title={intl.formatMessage(messages.sections)}
              noValuePresent={false}
              choices={Object.keys(sections).map((key) => [
                key,
                sections[key].title,
              ])}
              values={data.sections}
              onChange={(name, value) => {
                onChangeBlock(block, {
                  ...data,
                  sections: value.map((v) => {
                    return { title: sections[v].title, value: v };
                  }),
                });
              }}
            ></SelectWidget>
          )}
        </Accordion.Content>
      </Accordion>
      <Accordion fluid styled className="form">
        <Accordion.Title active={true} index={0} onClick={() => {}}>
          Collegamenti
        </Accordion.Title>
        <Accordion.Content active={true}>
          <ObjectBrowserWidget
            id={'ObjectBrowserWidget'}
            title={intl.formatMessage(messages.desc)}
            required={true}
            mode={'multiple'}
            value={data.links || []}
            onChange={(name, value) => {
              onChangeBlock(block, {
                ...data,
                links: value,
              });
            }}
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
