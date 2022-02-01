import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import {
  Locations,
  GenericCard,
  ContactLink,
  richTextHasContent,
  RichText,
  UOTelephones,
} from '@italia/components/ItaliaTheme/View';
const messages = defineMessages({
  contatti: {
    id: 'contatti',
    defaultMessage: 'Contatti',
  },
  orario_pubblico: {
    id: 'orario_pubblico',
    defaultMessage: 'Orario per il pubblico',
  },
  email_sede: {
    id: 'email_sede',
    defaultMessage: 'E-mail',
  },
  pec_sede: {
    id: 'pec_sede',
    defaultMessage: 'PEC',
  },
  fax_sede: {
    id: 'fax_sede',
    defaultMessage: 'Fax',
  },
  website: {
    id: 'website',
    defaultMessage: 'Sito web',
  },
  altre_sedi: {
    id: 'uo_altre_sedi',
    defaultMessage: 'Altre sedi',
  },
});

const UOContacts = ({ content }) => {
  const intl = useIntl();
  const telefono = content && UOTelephones({ content: content });

  return (
    <>
      {(content?.sede?.length > 0 ||
        content?.sedi_secondarie?.length > 0 ||
        richTextHasContent(content?.contact_info) ||
        content?.geolocation?.latitude > 0 ||
        content?.geolocation?.longitude > 0 ||
        content?.nome_sede?.length > 0 ||
        content?.street?.length > 0 ||
        content?.city?.length > 0 ||
        content?.zip_code?.length > 0 ||
        richTextHasContent(content?.orario_pubblico) ||
        content?.telefono?.length > 0 ||
        content?.fax?.length > 0 ||
        content?.web?.length > 0 ||
        content?.email?.length > 0 ||
        content?.pec?.length > 0) && (
        <article id="contatti" className="it-page-section anchor-offset mt-5">
          <h4 id="header-contatti" className="mb-3">
            {intl.formatMessage(messages.contatti)}
          </h4>

          {(content.geolocation?.latitude > 0 ||
            content?.geolocation?.longitude > 0 ||
            content?.sede?.length > 0 ||
            content?.nome_sede?.length > 0 ||
            content?.street?.length > 0 ||
            content?.city?.length > 0 ||
            content?.zip_code?.length > 0 ||
            content?.quartiere?.length > 0 ||
            content?.circoscrizione?.length > 0) && (
            <div className="mb-5 mt-3">
              <Locations
                content={content}
                locations={content.sede ?? []}
                load={true}
                details_link={false}
              />
            </div>
          )}
          {richTextHasContent(content.contact_info) && (
            <div className="mb-5 mt-3">
              <RichText content={content.contact_info} />
            </div>
          )}
          {richTextHasContent(content.orario_pubblico) && (
            <div className="mb-5 mt-3">
              <h5>{intl.formatMessage(messages.orario_pubblico)}</h5>
              <RichText content={content.orario_pubblico} />
            </div>
          )}
          <dl className="contatti-list">
            {telefono && telefono}

            {content.fax && (
              <div className="text-serif contatti">
                <dt>{intl.formatMessage(messages.fax_sede)}: </dt>
                <dd>
                  <ContactLink tel={content.fax} label={false} />
                </dd>
              </div>
            )}

            {content.email && (
              <div className="text-serif contatti">
                <dt>{intl.formatMessage(messages.email_sede)}: </dt>
                <dd>
                  <ContactLink email={content.email} label={false} />
                </dd>
              </div>
            )}
            {content.pec && (
              <div className="text-serif contatti">
                <dt>{intl.formatMessage(messages.pec_sede)}: </dt>
                <dd>
                  <ContactLink email={content.pec} label={false} />
                </dd>
              </div>
            )}
            {content.web && (
              <div className="text-serif contatti">
                <dt>{intl.formatMessage(messages.website)}: </dt>
                <dd>
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
                </dd>
              </div>
            )}
          </dl>
          {content.sedi_secondarie?.length > 0 && (
            <div className="mb-5 mt-5">
              <h5>{intl.formatMessage(messages.altre_sedi)}</h5>
              <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                {content.sedi_secondarie.map((item, _i) => (
                  <GenericCard
                    key={item['@id']}
                    item={item}
                    showimage={false}
                  />
                ))}
              </div>
            </div>
          )}
        </article>
      )}
    </>
  );
};

export default UOContacts;
