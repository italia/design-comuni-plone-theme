import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import {
  richTextHasContent,
  RichText,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';
const messages = defineMessages({
  cosa_fa: {
    id: 'cosa_fa',
    defaultMessage: 'Cosa fa',
  },
  competenze: {
    id: 'competenze',
    defaultMessage: 'Competenze',
  },
});

const UOWhatDoesItDo = ({ content }) => {
  const intl = useIntl();

  return (
    <>
      {richTextHasContent(content?.competenze) && (
        <article
          id="cosa-fa"
          className="it-page-section anchor-offset mt-5"
          aria-labelledby="header-cosa-fa"
        >
          <h4 id="header-cosa-fa" className="mb-3">
            {intl.formatMessage(messages.cosa_fa)}
          </h4>
          <div className="mb-5 mt-3">
            {/* <h5>{intl.formatMessage(messages.competenze)}</h5> //rimosso il titolo 'competenze' perchè è l'unico sottotitolo di 'cosa fa' e ci sarebbero sempre due titoli, un po inutili*/}
            <RichText content={content.competenze} />
          </div>
        </article>
      )}
    </>
  );
};

export default UOWhatDoesItDo;
