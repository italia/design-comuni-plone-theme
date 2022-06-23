import React from 'react';
import PropTypes from 'prop-types';

import { defineMessages, useIntl } from 'react-intl';
import {
  Card,
  CardBody,
  CardTitle,
} from 'design-react-kit/dist/design-react-kit';

import { Icon } from '@italia/components/ItaliaTheme';
import {
  RichText,
  richTextHasContent,
  RichTextArticle,
  ContactLink,
  OfficeCard,
} from '@italia/components/ItaliaTheme/View';

const messages = defineMessages({
  supported_by: {
    id: 'supported_by',
    defaultMessage: 'Con il supporto di',
  },
  contatti: {
    id: 'Contatti',
    defaultMessage: 'Contatti',
  },
  event_web_site: {
    id: 'event_web_site',
    defaultMessage: "Sito web dell'evento",
  },
  contatti_interni: {
    id: 'contatti_interni',
    defaultMessage: 'Contatti interni',
  },
});

const EventoDocumenti = ({ content }) => {
  const intl = useIntl();
  const getSupportatoDa = () => {
    return (
      content?.supportato_da?.length > 0 && (
        <>
          <h5 className="mt-4 supported-by">
            {intl.formatMessage(messages.supported_by)}
          </h5>
          {content?.supportato_da?.map((item) => (
            <OfficeCard
              key={item['@id']}
              office={item}
              extended={true}
              icon={'it-pa'}
            />
          ))}
        </>
      )
    );
  };

  return richTextHasContent(content?.organizzato_da_esterno) ||
    content?.organizzato_da_interno.length > 0 ||
    content?.supportato_da?.length > 0 ||
    content.web?.length > 0 ||
    content?.telefono ||
    content?.email ||
    content?.fax ? (
    <RichTextArticle
      tag_id="contatti"
      title={intl.formatMessage(messages.contatti)}
    >
      {/* ---web */}
      {content?.web?.length > 0 && (
        <div className="mb-5 mt-3">
          <h5>{intl.formatMessage(messages.event_web_site)}</h5>
          <a
            href={
              content.web.match(/^(http:\/\/|https:\/\/)/gm)
                ? content.web
                : `http://${content.web}`
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            {content.web}
          </a>
        </div>
      )}

      {/* ---organizzato da esterno */}
      {richTextHasContent(content?.organizzato_da_esterno) ||
      content?.telefono ||
      content?.email ||
      content?.fax ? (
        <div className="mb-5">
          <Card
            className="card card-teaser rounded shadow mt-3"
            noWrapper={true}
            tag="div"
          >
            <CardTitle tag="h5">
              <Icon icon="it-telephone" padding={true} />
            </CardTitle>
            <CardBody tag="div" className={'card-body pr-3'}>
              <RichText content={content.organizzato_da_esterno} />
              {content?.telefono && (
                <p className="card-text mt-3">
                  <ContactLink tel={content.telefono} label={true} />
                </p>
              )}
              {content?.fax && (
                <p className="card-text mt-3">
                  <ContactLink fax={content.fax} label={true} />
                </p>
              )}
              {content?.reperibilita?.replace(/(<([^>]+)>)/g, '').length >
                0 && (
                <p className="card-text mt-3">
                  {content?.reperibilita?.replace(/(<([^>]+)>)/g, '')}
                </p>
              )}
              {content?.email && (
                <p className="card-text mt-3">
                  <ContactLink email={content.email} label={true} />
                </p>
              )}
            </CardBody>
          </Card>
        </div>
      ) : null}

      {/* ---contatti interno */}
      {content?.organizzato_da_interno?.length > 0 && (
        <div className="mb-5">
          <h5>{intl.formatMessage(messages.contatti_interni)}</h5>
          {content?.organizzato_da_interno?.map((item, index) => (
            <OfficeCard
              margin_bottom={
                index < content?.organizzato_da_interno?.length - 1
              }
              key={item['@id']}
              office={item}
              extended={true}
              icon={'it-telephone'}
            >
              {richTextHasContent(content?.contatto_reperibilita) && (
                <p className="card-text mt-3">
                  {content?.contatto_reperibilita?.replace(/(<([^>]+)>)/g, '')}
                </p>
              )}
            </OfficeCard>
          ))}
        </div>
      )}

      {/* ---supportato da */}
      {getSupportatoDa()}
    </RichTextArticle>
  ) : (
    <></>
  );
};

EventoDocumenti.propTypes = {
  content: PropTypes.object.isRequired,
};

export default EventoDocumenti;
