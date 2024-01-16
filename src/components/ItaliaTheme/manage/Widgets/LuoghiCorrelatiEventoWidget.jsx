import { defineMessages, useIntl } from 'react-intl';
import { Form } from 'semantic-ui-react';
import cx from 'classnames';
import config from '@plone/volto/registry';

const messages = defineMessages({
  luoghi_correlati_evento_widget_title: {
    id: 'luoghi_correlati_evento_widget_title',
    defaultMessage: "Luogo dell'evento",
  },
});

const LuoghiCorrelatiEventoWidget = (props) => {
  const Widget = config.widgets.factory['Relation List'];
  const intl = useIntl();

  return (
    <Form.Field
      inline
      required={false}
      className={cx(
        'help',
        'luoghi-correlati-evento-widget',
        `field-wrapper-${props.id}`,
        props?.multilingual_options?.language_independent
          ? 'language-independent-field'
          : null,
      )}
    >
      <div className="introduction-helper-wrapper">
        <h3 className="field-title">
          {intl.formatMessage(messages.luoghi_correlati_evento_widget_title)}
        </h3>
        <p className="help">
          Sezione obbligatoria secondo il{' '}
          <a
            target="_blank"
            href="https://docs.italia.it/italia/designers-italia/design-comuni-docs/it/versione-corrente/conformita/buone-pratiche-asseverazione.html"
            rel="noopener noreferrer"
          >
            documento di buone pratiche per l&apos;asseverazione dei siti
          </a>
          . Per confermare la presenza in pagina della relativa sezione devono
          essere presenti:
          <ul>
            <li>
              «Luoghi correlati» che è un campo con un riferimento ad un oggetto
              di tipo Luogo già presente sul sito. Se compilato, questo campo è
              sufficiente per la validazione della compilazione del modulo.
            </li>
            <li>
              Se non è possibile compilare il campo «Luoghi correlati», è
              necessario compilare almeno i campi «Nome sede», «Via», «Città» e
              «Nazione» sottostanti.
            </li>
          </ul>
        </p>
      </div>
      <Widget {...props} />
    </Form.Field>
  );
};

export default LuoghiCorrelatiEventoWidget;
