import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Accordion, Form } from 'semantic-ui-react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Icon, TextWidget, CheckboxWidget } from '@plone/volto/components';
import upSVG from '@plone/volto/icons/up-key.svg';
import downSVG from '@plone/volto/icons/down-key.svg';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  title: {
    id: 'title',
    defaultMessage: 'Titolo',
  },
  channel_link_title: {
    id: 'channel_link_title',
    defaultMessage: 'Titolo del canale',
  },
  channel_link: {
    id: 'channel_link',
    defaultMessage: 'Link al canale',
  },
  video_url: { id: 'gallery_video_url', defaultMessage: 'Video URL' },
  video_title: {
    id: 'gallery_video_title',
    defaultMessage: 'Titolo del video',
  },
  video_title_description: {
    id: 'gallery_video_title_description',
    defaultMessage:
      "Non viene mostrato. Serve al redattore per identificare meglio il video all'interno della gallery.",
  },
  allowExternals: {
    id: 'Allow Externals',
    defaultMessage: 'Allow Externals',
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
    <Form>
      <Segment.Group raised form>
        <header className="header pulled">
          <h2>
            <FormattedMessage
              id="VideoGalleryBlock"
              defaultMessage="Video Gallery"
            />
          </h2>
        </header>
        <Segment>
          <TextWidget
            id="title"
            title={intl.formatMessage(messages.title)}
            value={data.title}
            onChange={(name, value) => {
              onChangeBlock(block, {
                ...data,
                [name]: value,
              });
            }}
          />
          <TextWidget
            id="channel_link_title"
            title={intl.formatMessage(messages.channel_link_title)}
            value={data.channel_link_title}
            onChange={(name, value) => {
              onChangeBlock(block, {
                ...data,
                [name]: value,
              });
            }}
          />
          <TextWidget
            id="channel_link"
            title={intl.formatMessage(messages.channel_link)}
            value={data.channel_link}
            onChange={(name, value) => {
              onChangeBlock(block, {
                ...data,
                [name]: value,
              });
            }}
          />
          <CheckboxWidget
            id="allowExternals"
            title={intl.formatMessage(messages.allowExternals)}
            value={data.allowExternals ? data.allowExternals : false}
            onChange={(name, value) => {
              onChangeBlock(block, {
                ...data,
                allowExternals: value,
              });
            }}
          />
        </Segment>
        <Accordion fluid styled className="form">
          {data.subblocks &&
            data.subblocks.map((subblock, index) => {
              return (
                <div key={'subblock' + index}>
                  <Accordion.Title
                    active={selected === index}
                    index={index}
                    onClick={() =>
                      setSelected(selected === index ? null : index)
                    }
                  >
                    {subblock?.title || `Video ${index + 1}`}
                    {selected === index ? (
                      <Icon name={upSVG} size="20px" />
                    ) : (
                      <Icon name={downSVG} size="20px" />
                    )}
                  </Accordion.Title>
                  <Accordion.Content active={selected === index}>
                    <TextWidget
                      id="url"
                      title={intl.formatMessage(messages.video_url)}
                      value={subblock.url}
                      onChange={(name, value) => {
                        onChangeSubBlock(index, {
                          ...subblock,
                          [name]: value,
                        });
                      }}
                    />

                    <TextWidget
                      id="title"
                      title={intl.formatMessage(messages.video_title)}
                      description={intl.formatMessage(
                        messages.video_title_description,
                      )}
                      value={subblock.title}
                      onChange={(name, value) => {
                        onChangeSubBlock(index, {
                          ...subblock,
                          [name]: value,
                        });
                      }}
                    />
                  </Accordion.Content>
                </div>
              );
            })}
        </Accordion>
      </Segment.Group>
    </Form>
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
