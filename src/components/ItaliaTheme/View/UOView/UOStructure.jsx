import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { flattenToAppURL } from '@plone/volto/helpers';
import { OfficeCard } from 'design-comuni-plone-theme/components/ItaliaTheme/View';
import { Chip, ChipLabel } from 'design-react-kit/dist/design-react-kit';

const messages = defineMessages({
  struttura: {
    id: 'struttura',
    defaultMessage: 'Struttura',
  },
  legami_struttura_padre: {
    id: 'legami_struttura_padre',
    defaultMessage: 'Servizio o ufficio di appartenenza',
  },
  legami_strutture_figlie: {
    id: 'legami_strutture_figlie',
    defaultMessage: 'Servizi o uffici interni',
  },
  legami_altre_strutture: {
    id: 'legami_altre_strutture',
    defaultMessage: 'Servizi o uffici di riferimento',
  },
  responsabile: {
    id: 'responsabile',
    defaultMessage: 'Responsabile',
  },
  tipologia_organizzazione: {
    id: 'tipologia_organizzazione',
    defaultMessage: 'Tipologia organizzazione',
  },
  assessore_riferimento: {
    id: 'assessore_riferimento',
    defaultMessage: 'Assessore di riferimento',
  },
});

const UOStructure = ({ content }) => {
  const intl = useIntl();

  return content?.legami_con_altre_strutture?.length > 0 ||
    content?.responsabile?.length > 0 ||
    content?.tipologia_organizzazione ||
    content?.uo_children?.length > 0 ||
    content?.uo_parent ||
    content?.assessore_riferimento?.length > 0 ? (
    <article
      id="struttura"
      className="it-page-section anchor-offset mt-5"
      aria-labelledby="header-struttura"
    >
      <h4 id="header-struttura" className="mb-3">
        {intl.formatMessage(messages.struttura)}
      </h4>
      {content.uo_parent && (
        <div className="mb-5 mt-3">
          <h5>{intl.formatMessage(messages.legami_struttura_padre)}</h5>
          <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal mb-3">
            <OfficeCard
              key={content.uo_parent['@id']}
              office={content.uo_parent}
              load_data={false}
              show_contacts={false}
            />
          </div>
        </div>
      )}

      {content.uo_children?.length > 0 && (
        <div className="mb-5 mt-3">
          <h5>{intl.formatMessage(messages.legami_strutture_figlie)}</h5>
          <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal mb-3">
            {content.uo_children.map((uo, i) => {
              return (
                <OfficeCard
                  key={uo['@id']}
                  office={uo}
                  load_data={false}
                  show_contacts={false}
                />
              );
            })}
          </div>
        </div>
      )}

      {content.legami_con_altre_strutture?.length > 0 && (
        <div className="mb-5 mt-3">
          <h5>{intl.formatMessage(messages.legami_altre_strutture)}</h5>
          <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal mb-3">
            {content.legami_con_altre_strutture.map((item, _i) => (
              <OfficeCard key={item['@id']} office={item} />
            ))}
          </div>
        </div>
      )}
      {content.responsabile?.length > 0 && (
        <div className="mb-5 mt-3">
          <h5>{intl.formatMessage(messages.responsabile)}</h5>
          {content.responsabile.map((item, i) => (
            <Link
              to={flattenToAppURL(item['@id'])}
              key={item['@id']}
              title={item.title}
              className="text-decoration-none  mr-2"
            >
              <Chip
                color="primary"
                disabled={false}
                large={false}
                simple
                tag="div"
              >
                <ChipLabel tag="span">{item.title}</ChipLabel>
              </Chip>
            </Link>
          ))}
        </div>
      )}
      {content.tipologia_organizzazione?.title && (
        <div className="mb-5 mt-3">
          <h5>{intl.formatMessage(messages.tipologia_organizzazione)}</h5>
          <p className="text-serif">{content.tipologia_organizzazione.title}</p>
        </div>
      )}
      {content.assessore_riferimento?.length > 0 && (
        <div className="mb-5 mt-3">
          <h5>{intl.formatMessage(messages.assessore_riferimento)}</h5>
          {content.assessore_riferimento.map((item, _i) => (
            <Link
              to={flattenToAppURL(item['@id'])}
              key={item['@id']}
              title={item.title}
              className="text-decoration-none mr-2"
            >
              <Chip
                color="primary"
                disabled={false}
                large={false}
                simple
                tag="div"
              >
                <ChipLabel tag="span">{item.title}</ChipLabel>
              </Chip>
            </Link>
          ))}
        </div>
      )}
    </article>
  ) : (
    <></>
  );
};

export default UOStructure;
