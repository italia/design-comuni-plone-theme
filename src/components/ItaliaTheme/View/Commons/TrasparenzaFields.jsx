import React from 'react';
import { FormattedMessage, defineMessages, useIntl } from 'react-intl';
import {
  RichTextArticle,
  RichTextRender,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';
import { UniversalLink } from '@plone/volto/components';

const messages = defineMessages({
  trasparenza: {
    id: 'trasparenza',
    defaultMessage: 'Trasparenza',
  },
  yes: {
    id: 'yes',
    defaultMessage: 'Si',
  },
  no: {
    id: 'no',
    defaultMessage: 'No',
  },
  iter_del_procedimento: {
    id: 'iter_del_procedimento',
    defaultMessage: 'Iter del procedimento',
  },
  modalita_di_avvio: {
    id: 'modalita_di_avvio',
    defaultMessage: 'Modalità di avvio',
  },
  descrizione: {
    id: 'descrizione',
    defaultMessage: 'Descrizione',
  },
  file_correlato: {
    id: 'file_correlato',
    defaultMessage: 'File correlato',
  },
  soggetti_esterni: {
    id: 'soggetti_esterni',
    defaultMessage:
      'Soggetti esterni, nonché, strutture interne coinvolte nel procedimento',
  },
  termini_del_procedimento: {
    id: 'termini_del_procedimento',
    defaultMessage: 'Termini del procedimento',
  },
  decorrenza_termine: {
    id: 'decorrenza_termine',
    defaultMessage: 'Decorrenza termine',
  },
  fine_termine: {
    id: 'fine_termine',
    defaultMessage: 'Fine termine',
  },
  tempo_medio: {
    id: 'tempo_medio',
    defaultMessage: 'Tempo medio',
  },
  silenzio_assenso: {
    id: 'silenzio_assenso',
    defaultMessage:
      "Silenzio assenso/Dichiarazione dell'interessato sostitutiva del provvedimento finale",
  },
  provvedimento_finale: {
    id: 'provvedimento_finale',
    defaultMessage: 'Provvedimento finale',
  },
  responsabile_procedimento: {
    id: 'responsabile_procedimento',
    defaultMessage: 'Responsabile del procedimento',
  },
  unita_organizzativa_competente: {
    id: 'unita_organizzativa_competente',
    defaultMessage: 'Unità organizzativa competente del procedimento',
  },
  dirigente: {
    id: 'dirigente',
    defaultMessage: 'Dirigente',
  },
  responsabile_del_procedimento: {
    id: 'responsabile_del_procedimento',
    defaultMessage: 'Responsabile del procedimento',
  },
  organo_competente_provvedimento_finale: {
    id: 'organo_competente_provvedimento_finale',
    defaultMessage: 'Organo competente adozione provvedimento finale',
  },
  modalita_richiesta_informazioni: {
    id: 'modalita_richiesta_informazioni',
    defaultMessage: 'Modalità per richiedere informazioni sul procedimento',
  },
  procedura_online: {
    id: 'procedura_online',
    defaultMessage: 'Procedura informatizzata online',
  },
  altre_modalita_invio: {
    id: 'altre_modalita_invio',
    defaultMessage: 'Altre modalità di invio',
  },
  atti_documenti_corredo: {
    id: 'atti_documenti_corredo',
    defaultMessage: "Atti e documenti a corredo dell'istanza",
  },
  reperimento_modulistica: {
    id: 'reperimento_modulistica',
    defaultMessage: 'Dove reperire la modulistica',
  },
  pagamenti: {
    id: 'pagamenti',
    defaultMessage: 'Pagamenti previsti e modalità',
  },
  strumenti_tutela: {
    id: 'strumenti_tutela',
    defaultMessage: 'Strumenti di tutela',
  },
  titolare_potere_sostitutivo: {
    id: 'titolare_potere_sostitutivo',
    defaultMessage: 'Titolare del potere sostitutivo',
  },
  ulteriori_informazioni: {
    id: 'ulteriori_informazioni',
    defaultMessage: 'Ulteriori informazioni',
  },
  customer_satisfaction: {
    id: 'customer_satisfaction',
    defaultMessage: 'Risultati indagini di customer satisfaction',
  },
  riferimenti_normativi: {
    id: 'riferimenti_normativi',
    defaultMessage: 'Riferimenti normativi',
  },
});

const fieldsMap = [
  {
    attr: 'modalita_avvio',
    type: 'text',
    label: messages.modalita_di_avvio,
  },
  {
    attr: 'descrizione',
    type: 'blocks',
    label: messages.descrizione,
  },
  {
    attr: 'file_correlato',
    type: 'download',
    label: messages.file_correlato,
  },
  {
    attr: 'soggetti_esterni',
    type: 'blocks',
    label: messages.soggetti_esterni,
  },
  {
    attr: 'decorrenza_termine',
    type: 'blocks',
    label: messages.decorrenza_termine,
  },
  {
    attr: 'fine_termine',
    type: 'blocks',
    label: messages.fine_termine,
  },
  { attr: 'tempo_medio', type: 'blocks', label: messages.tempo_medio },
  {
    attr: 'silenzio_assenso',
    type: 'bool',
    label: messages.silenzio_assenso,
  },
  {
    attr: 'provvedimento_finale',
    type: 'blocks',
    label: messages.provvedimento_finale,
  },
  {
    attr: 'responsabile_procedimento',
    type: 'link',
    label: messages.responsabile_procedimento,
  },
  { attr: 'dirigente', type: 'link', label: messages.dirigente },
  {
    attr: 'organo_competente_provvedimento_finale',
    type: 'blocks',
    label: messages.organo_competente_provvedimento_finale,
  },
  {
    attr: 'modalita_richiesta_informazioni',
    type: 'blocks',
    label: messages.modalita_richiesta_informazioni,
  },
  {
    attr: 'procedura_online',
    type: 'text',
    label: messages.procedura_online,
  },
  {
    attr: 'altre_modalita_invio',
    type: 'blocks',
    label: messages.altre_modalita_invio,
  },
  {
    attr: 'atti_documenti_corredo',
    type: 'blocks',
    label: messages.atti_documenti_corredo,
  },
  {
    attr: 'reperimento_modulistica',
    type: 'blocks',
    label: messages.reperimento_modulistica,
  },
  { attr: 'pagamenti', type: 'blocks', label: messages.pagamenti },
  {
    attr: 'strumenti_tutela',
    type: 'blocks',
    label: messages.strumenti_tutela,
  },
  {
    attr: 'titolare_potere_sostitutivo',
    type: 'blocks',
    label: messages.titolare_potere_sostitutivo,
  },
  {
    attr: 'customer_satisfaction',
    type: 'blocks',
    label: messages.customer_satisfaction,
  },
  {
    attr: 'riferimenti_normativi',
    type: 'blocks',
    label: messages.riferimenti_normativi,
  },
];

const TrasparenzaFields = ({ content }) => {
  const intl = useIntl();

  const renderTrasparenzaField = (field) => {
    if (field.type === 'text') return content[field.attr];
    if (field.type === 'blocks')
      return RichTextRender({
        data: content[field.attr],
        serif: true,
      });
    if (field.type === 'bool')
      return intl.formatMessage(
        content[field.attr] ? messages.yes : messages.no,
      );
    if (field.type === 'link' && content[field.attr].length > 0)
      return (
        <UniversalLink item={content[field.attr][0]}>
          {content[field.attr][0].title}
        </UniversalLink>
      );
    if (field.type === 'download' && content[field.attr].download) {
      return (
        <p>
          <a
            href={content[field.attr].download}
            download={content[field.attr].filename}
            title={content[field.attr].filename}
          >
            <FormattedMessage id="Download" defaultMessage="Download" />
          </a>
        </p>
      );
    }

    return null;
  };

  let fields = fieldsMap.map((field) => {
    if (content[field.attr] === undefined || content[field.attr] === null)
      return null;
    const data = renderTrasparenzaField(field);
    if (!data) return null;

    return (
      <div key={field.attr}>
        <dt>{intl.formatMessage(field.label)}</dt>
        <dd>{data}</dd>
      </div>
    );
  });

  return fields.length > 0 ? (
    <RichTextArticle
      tag_id="trasparenza"
      title={intl.formatMessage(messages.trasparenza)}
    >
      <dl className="trasparenza-fields">{fields}</dl>
    </RichTextArticle>
  ) : null;
};

export default TrasparenzaFields;
