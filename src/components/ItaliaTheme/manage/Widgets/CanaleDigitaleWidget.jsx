import React from 'react';
import { Form } from 'semantic-ui-react';
import config from '@plone/volto/registry';
import cx from 'classnames';
import { defineMessages, injectIntl } from 'react-intl';

const messages = defineMessages({
  canale_digitale_widget_title: {
    id: 'canale_digitale_widget_title',
    defaultMessage: 'Accedere al servizio',
  },
});

const CanaleDigitaleWidget = (props) => {
  const BlocksWidget = config.widgets.widget.blocks;
  const { intl } = props;
  return (
    <Form.Field
      inline
      required={false}
      className={cx(
        'help',
        'canale-digitale-widget',
        `field-wrapper-${props.id}`,
        props?.multilingual_options?.language_independent
          ? 'language-independent-field'
          : null,
      )}
    >
      <div className="introduction-helper-wrapper">
        <h3 className="field-title">
          {intl.formatMessage(messages.canale_digitale_widget_title)}
        </h3>
        <p className="help">
          Sezione obbligatoria ai fini della validazione AGID secondo i seguenti{' '}
          <a
            href="https://docs.italia.it/italia/designers-italia/app-valutazione-modelli-docs/it/versione-attuale/requisiti-e-modalita-verifica-comuni.html"
            target="_blank"
            noopener
            noreferrer
          >
            termini
          </a>
          . Per confermare la presenza in pagina della relativa sezione devono
          essere presenti:
          <ul>
            <li>
              «Canale digitale» che viene utilizzato per mostrare un testo
              descrittivo per i canali digitali/accessi online al servizio, e
              deve essere compilato assieme a «Link al canale digitale»;
            </li>
            <li>
              «Link al canale digitale» che viene utilizzato per mostrare il
              bottone che porta alla pagina di accesso online e/o prenotazione e
              deve essere compilato assieme a «Canale digitale»;
            </li>
            <li>
              Nel caso in cui il servizio sia fruibile e/o presente solo in
              loco, è sufficiente compilare il campo «Canale fisico», indicando
              l'Ufficio preposto.
            </li>
          </ul>
        </p>
      </div>
      <BlocksWidget {...props} />
    </Form.Field>
  );
};

export default injectIntl(CanaleDigitaleWidget);
