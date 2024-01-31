import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { flattenToAppURL } from '@plone/volto/helpers';
import { UniversalLink } from '@plone/volto/components';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { Card, CardBody, CardTitle } from 'design-react-kit';

import {
  Attachment,
  RichTextSection,
  Module,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  allegati: {
    id: 'allegati',
    defaultMessage: 'Documenti allegati',
  },
});

const BandoApprofondimenti = ({ content }) => {
  const intl = useIntl();

  const getAttachment = (item, i) => {
    if (item.type === 'File' || item.type === 'Image') {
      return (
        <Attachment
          key={item.url + i}
          title={item.title}
          description={item.description}
          download_url={item.url}
          item={item} //viene utilizzato nelle customizzazioni per ottenere altre proprietà
        />
      );
    } else if (item.type === 'Link') {
      return (
        <Card
          className="card card-teaser shadow p-4 mt-3 rounded attachment"
          noWrapper={true}
          tag="div"
        >
          <Icon
            className={undefined}
            icon={'it-external-link'}
            padding={false}
          />
          <CardBody>
            <CardTitle className="title h5">
              <UniversalLink
                href={flattenToAppURL(item.url)}
                rel="noopener noreferrer"
              >
                {item.title}
              </UniversalLink>
            </CardTitle>
          </CardBody>
        </Card>
      );
    } else if (item.type === 'Documento') {
      return (
        <Card
          className="card card-teaser shadow p-4 mt-3 rounded attachment"
          noWrapper={true}
          tag="div"
        >
          <Icon className={undefined} icon={'it-file'} padding={false} />
          <CardBody>
            <CardTitle className="title h5">
              <UniversalLink
                item={{
                  ...item,
                  '@id': item.url.replace(/\/view$/, ''),
                }}
                rel="noopener noreferrer"
              >
                {item.title}
              </UniversalLink>
            </CardTitle>
          </CardBody>
        </Card>
      );
    }
  };

  return content?.approfondimento?.length > 0 ? (
    <RichTextSection
      tag_id="allegati"
      title={intl.formatMessage(messages.allegati)}
    >
      {/* Se ho una sola cartella lascio solo "allegati" altrimenti
      aggiungo gli altri titoli */}
      {content?.approfondimento?.length === 1 ? (
        <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
          {content.approfondimento[0].children.map((item, i) =>
            item.type === 'Modulo' ? (
              <Module
                item={{
                  ...item,
                  '@id': item.url.replace(/\/view$/, ''),
                }}
                key={item.url + i}
              />
            ) : (
              getAttachment(item, i)
            ),
          )}
        </div>
      ) : (
        <>
          {content.approfondimento.map((item, i) => (
            <>
              <h3 className="h5">{item.title}</h3>
              <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                {content.approfondimento[i].children.map((inner_item, x) =>
                  inner_item.type === 'Modulo' ? (
                    <Module
                      item={{
                        ...inner_item,
                        '@id': inner_item.url.replace(/\/view$/, ''),
                      }}
                      key={inner_item.url + x}
                    />
                  ) : (
                    getAttachment(inner_item, x)
                  ),
                )}
              </div>
            </>
          ))}
        </>
      )}
    </RichTextSection>
  ) : (
    <></>
  );
};

BandoApprofondimenti.propTypes = {
  content: PropTypes.shape({
    chiusura_procedimento_bando: PropTypes.string,
    scadenza_bando: PropTypes.string,
    scadenza_domande_bando: PropTypes.string,
    effective: PropTypes.string,
  }).isRequired,
};
export default BandoApprofondimenti;
