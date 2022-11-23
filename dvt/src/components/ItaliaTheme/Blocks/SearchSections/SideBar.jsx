import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Accordion } from 'semantic-ui-react';
import { defineMessages, useIntl, FormattedMessage } from 'react-intl';
import { TextWidget, ArrayWidget } from '@plone/volto/components';
import ObjectBrowserWidget from '@plone/volto/components/manage/Widgets/ObjectBrowserWidget';

const messages = defineMessages({
  title: {
    id: 'title',
    defaultMessage: 'Titolo',
  },
  link: {
    id: 'link',
    defaultMessage: 'Collegamento',
  },
  desc: {
    id: 'desc',
    defaultMessage: 'Link rapidi',
  },
  search_sections: {
    id: 'search_sections',
    defaultMessage: 'Dove cercare',
  },
  search_sections_links: {
    id: 'search_sections_links',
    defaultMessage: 'Collegamenti',
  },
  placeholder: {
    id: 'placeholder',
    defaultMessage: 'Testo di aiuto',
  },
  img: {
    id: 'imageBackground',
    defaultMessage: 'Immagine per lo sfondo',
  },
  background_section: {
    id: 'background_section',
    defaultMessage: 'Sfondo del blocco',
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
            id="search_sections_block"
            defaultMessage="Ricerca nelle sezioni"
          />
        </h2>
      </header>
      <Accordion className="form">
        <Accordion.Content active={true}>
          <TextWidget
            id="title"
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
            id="placeholder"
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
            <ArrayWidget
              id="groups"
              title={intl.formatMessage(messages.search_sections)}
              noValueOption={false}
              choices={Object.keys(sections).map((key) => [
                key,
                sections[key].title,
              ])}
              value={data.sections}
              onChange={(name, value) => {
                onChangeBlock(block, {
                  ...data,
                  // is not possible remove the no-value field form select
                  sections: value
                    .filter((v) => v !== 'no-value')
                    .map((v) => {
                      return { title: sections[v].title, value: v, token: v };
                    }),
                });
              }}
            ></ArrayWidget>
          )}
        </Accordion.Content>
      </Accordion>

      <Accordion fluid styled className="form">
        <Accordion.Title active={true} index={0} onClick={() => {}}>
          {intl.formatMessage(messages.background_section)}
        </Accordion.Title>
        <Accordion.Content active={true}>
          <ObjectBrowserWidget
            id="image"
            title={intl.formatMessage(messages.img)}
            mode="image"
            allowExternals={false}
            value={data.image}
            widgetOptions={{
              pattern_options: { selectableTypes: ['Image'] },
            }}
            onChange={(name, value) => {
              onChangeBlock(block, {
                ...data,
                image: value,
              });
            }}
            return="single"
          />
        </Accordion.Content>
      </Accordion>

      <Accordion fluid styled className="form">
        <Accordion.Title active={true} index={0} onClick={() => {}}>
          {intl.formatMessage(messages.search_sections_links)}
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
