import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Accordion } from 'semantic-ui-react';
import { defineMessages, FormattedMessage, useIntl } from 'react-intl';
import { TextWidget } from '@plone/volto/components';
import { LinkToWidget } from '@design/components/DesignTheme';
import aheadSVG from '@plone/volto/icons/add.svg';
import clearSVG from '@plone/volto/icons/clear.svg';
import { Button } from 'semantic-ui-react';
import { Icon } from '@plone/volto/components';

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
});

const Sidebar = ({
  block,
  data,
  onChangeBlock,
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
        </Accordion.Content>
      </Accordion>
      <Accordion fluid styled className="form">
        <Accordion.Title active={true} index={0} onClick={() => {}}>
          Collegamenti
        </Accordion.Title>
        <Accordion.Content active={true}>
          {data.links?.map((link, index) => {
            return (
              <>
                <div className="margin-bottom-22">
                  <div key={index} className="flex-center">
                    <Icon
                      className="circled deletable"
                      name={clearSVG}
                      size="15px"
                      onClick={() => {
                        const links = data.links ? [...data.links] : [];
                        links.splice(index, 1);
                        onChangeBlock(block, {
                          ...data,
                          links: links,
                        });
                      }}
                    />
                    <div>
                      <LinkToWidget
                        data={data.links[index]}
                        linkField={'url'}
                        openObjectBrowser={openObjectBrowser}
                        title={intl.formatMessage(messages.link)}
                        showTarget={false}
                        onChange={(name, value) => {
                          const links = [...data.links];
                          links[index].url = value;
                          onChangeBlock(block, {
                            ...data,
                            links: links,
                          });
                        }}
                      />
                      <br></br>
                      <TextWidget
                        title={intl.formatMessage(messages.desc)}
                        required={true}
                        value={data.links[index].desc}
                        onChange={(name, value) => {
                          data.links[index].desc = value;
                          onChangeBlock(block, {
                            ...data,
                            links: data.links,
                          });
                        }}
                      />
                    </div>
                  </div>
                </div>
                <hr></hr>
              </>
            );
          })}
          <Button
            basic
            primary
            floated="right"
            type="button"
            id="rss-form-submit"
            onClick={() => {
              const links = data.links ? [...data.links] : [];
              links.push({ desc: '', url: '' });
              onChangeBlock(block, {
                ...data,
                links: links,
              });
            }}
          >
            <Icon className="circled" name={aheadSVG} size="30px" />
          </Button>
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
