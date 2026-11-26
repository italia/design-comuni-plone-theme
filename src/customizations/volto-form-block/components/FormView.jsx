/*Customizatinos:
- usati i componenti di design-react-kit
- disabilitato il captcha se nelle siteProperties del config è stato disabilitato.
- aggiunta legenda per i campi obbligatori
- rercaptcha (collective.rercaptcha) ha due modalità, decise dal flag
  `show-button` esposto insieme agli altri dati del captcha
  (`rercaptcha-data`):
    - invisibile (default): il token si calcola al click su "Invia", non
      prima. Il bottone deve restare cliccabile anche senza un token già
      pronto, altrimenti non si sbloccherebbe mai (il click stesso è ciò
      che avvia il calcolo, tramite la Promise di captcha.verify() in
      View.jsx).
    - bottone esplicito: l'utente calcola il token cliccando un bottone
      dedicato prima di "Invia". In questo caso il pre-blocco va invece
      mantenuto, esattamente come per gli altri captcha (es. hcaptcha a
      checkbox): "Invia" deve restare disabilitato finché la verifica non
      è completa.
  Per tutti gli altri tipi di captcha il comportamento resta invariato.
  Il flag è letto direttamente da Redux (state.content.data['@components']
  ['rercaptcha-data']), per evitare di inserire qui una dipendenza diretta con l'addon 
  @regioneer/volto-collective-rercaptcha che verrà installato solo al bisogno.
  NB: nome/valore del flag `show-button`
  provvisori, in attesa della chiave definitiva dal backend: se cambia va
  aggiornata anche qui.
- rercaptcha si renderizza accanto al bottone di submit, a sinistra e prima
  nel DOM (non più insieme agli altri campi del form): è l'unico tipo di
  captcha spostato, gli altri restano dove sono sempre stati. Deve stare
  prima nel DOM, non solo a sinistra visivamente, altrimenti con la sola
  tastiera il Tab dopo aver spuntato la checkbox del captcha (modalità
  bottone) esce dal form invece di raggiungere "Invia".
*/
import React from 'react';
import { useSelector } from 'react-redux';
import { useIntl, defineMessages } from 'react-intl';
import { Card, CardBody, Row, Col, Alert, Progress } from 'design-react-kit';
import { getFieldName } from 'volto-form-block/components/utils';
import Field from 'volto-form-block/components/Field';
import {
  OTPWidget,
  OTP_FIELDNAME_EXTENDER,
  Button,
} from 'volto-form-block/components/Widget';
import config from '@plone/volto/registry';
import { FormResult } from 'volto-form-block/components';
import { evaluateAllConditions } from 'volto-form-block/helpers/conditions-list';

/* Style */
import 'volto-form-block/components/FormView.css';

const messages = defineMessages({
  default_submit_label: {
    id: 'form_default_submit_label',
    defaultMessage: 'Invia',
  },
  default_cancel_label: {
    id: 'form_default_cancel_label',
    defaultMessage: 'Annulla',
  },
  error: {
    id: 'Error',
    defaultMessage: 'Errore',
  },
  success: {
    id: 'Email Success',
    defaultMessage: 'Form inviato correttamente',
  },
  form_errors: {
    id: 'form_errors_validation',
    defaultMessage: 'Attenzione! Alcuni campi inseriti sono da controllare.',
  },
  reset: {
    id: 'form_reset',
    defaultMessage: 'Ricomincia',
  },
  legend_required: {
    id: 'legend_required',
    defaultMessage: 'I campi contrassegnati da (*) sono obbligatori.',
  },
});

const FormView = ({
  formState,
  formErrors,
  formData,
  onChangeFormData,
  data,
  onSubmit,
  resetFormState,
  resetFormOnError,
  captcha,
  id,
  getErrorMessage,
  path,
  block_id,
}) => {
  const intl = useIntl();
  const alertTransition = {
    appear: true,
    baseClass: 'fade',
    baseClassActive: 'show',
    enter: true,
    exit: true,
    in: true,
    mountOnEnter: false,
    tag: 'div',
    timeout: 150,
    unmountOnExit: true,
  };

  const enableCaptcha =
    config.settings.siteProperties.enableVoltoFormBlockCaptcha;

  // requiresPreexistingToken: vale per tutti i captcha tranne rercaptcha in
  // modalità invisibile (vedi nota in testa al file).
  const rerCaptchaData = useSelector(
    (state) => state.content?.data?.['@components']?.['rercaptcha-data'],
  );
  const rercaptchaShowsOwnButton = !!rerCaptchaData?.['show-button'];
  const requiresPreexistingToken =
    enableCaptcha &&
    (data.captcha !== 'rercaptcha' || rercaptchaShowsOwnButton);

  const isValidField = (field) => {
    return formErrors?.filter((e) => e.field === field).length === 0;
  };

  var FieldSchema = config.blocks.blocksConfig.form.fieldSchema;
  var fieldSchemaProperties = FieldSchema()?.properties;
  var fields_to_send = [];
  for (var key in fieldSchemaProperties) {
    if (fieldSchemaProperties[key].send_to_backend) {
      fields_to_send.push(key);
    }
  }

  const submit = (e) => {
    resetFormOnError();
    onSubmit(e);
  };

  const getFieldsToSendWithValue = (subblock) => {
    var fields_to_send = [];
    var fieldSchemaProperties = FieldSchema(subblock)?.properties;
    for (var key in fieldSchemaProperties) {
      if (fieldSchemaProperties[key].send_to_backend) {
        fields_to_send.push(key);
      }
    }

    var fields_to_send_with_value = Object.assign(
      {},
      ...fields_to_send.map((field) => {
        return {
          [field]: subblock[field],
        };
      }),
    );
    return fields_to_send_with_value;
  };

  return (
    <div className="block form">
      <div className="public-ui">
        {data?.title && <h2>{data.title}</h2>}
        {data?.description && (
          <div className="block-description">{data.description}</div>
        )}
        <Card className="card-bg rounded py-3" noWrapper={false} tag="div">
          <CardBody tag="div">
            {formState.result ? (
              <FormResult
                formState={formState}
                data={data}
                resetFormState={resetFormState}
              />
            ) : (
              <form
                onSubmit={submit}
                noValidate
                autoComplete="off"
                method="post"
              >
                {/* Controlla che ci siano campi obbligatori al suo interno e applica una legenda  */}
                {data.subblocks.some((item) => item.required === true) && (
                  <legend className="text-muted text-end mb-3">
                    <small>
                      {intl.formatMessage(messages.legend_required)}
                    </small>
                  </legend>
                )}
                {data.static_fields && (
                  <fieldset disabled>
                    {data.static_fields?.map((field) => (
                      <Row key={field.field_id} className="static-field">
                        <Col className="py-2">
                          <Field
                            {...field}
                            field_type={field.field_type || 'text'}
                            name={
                              'static_field_' +
                              (field.field_id ??
                                field.name?.toLowerCase()?.replace(' ', ''))
                            }
                            value={field.value}
                            onChange={() => {}}
                            valid
                            disabled
                            formHasErrors={formErrors.length > 0}
                          />
                        </Col>
                      </Row>
                    ))}
                  </fieldset>
                )}
                {data.subblocks.map((subblock, index) => {
                  let name = getFieldName(subblock.label, subblock.id);
                  const fields_to_send_with_value =
                    getFieldsToSendWithValue(subblock);

                  return (
                    (!config.blocks.blocksConfig.form.enableConditionalFields ||
                      evaluateAllConditions(
                        subblock?.visibility_conditions,
                        formData,
                      )) && (
                      <Row key={'row' + index}>
                        <Col className="py-2">
                          <Field
                            {...subblock}
                            name={name}
                            onChange={(field, value) =>
                              onChangeFormData(
                                subblock.id,
                                field,
                                value,
                                fields_to_send_with_value,
                              )
                            }
                            value={
                              subblock.field_type === 'static_text'
                                ? subblock.value
                                : formData[name]?.value
                            }
                            valid={isValidField(name)}
                            errorMessage={getErrorMessage(name)}
                            formHasErrors={formErrors.length > 0}
                          />
                        </Col>
                      </Row>
                    )
                  );
                })}

                {/*OTP*/}
                {data.email_otp_verification ? (
                  data.subblocks
                    .filter((subblock) => subblock.use_as_bcc)
                    .map((subblock, index) => {
                      const fieldName = getFieldName(
                        subblock.label,
                        subblock.id,
                      );
                      const name = fieldName + OTP_FIELDNAME_EXTENDER;
                      const fieldValue = formData[fieldName]?.value;
                      const value = formData[fieldName]?.otp;
                      const fields_to_send_with_value =
                        getFieldsToSendWithValue(subblock);

                      return (
                        <Row key={'row_otp' + index}>
                          <Col className="py-2">
                            <OTPWidget
                              {...subblock}
                              fieldValue={fieldValue}
                              onChange={(field, value) => {
                                onChangeFormData(
                                  subblock.id,
                                  fieldName,
                                  fieldValue,
                                  {
                                    ...fields_to_send_with_value,
                                    otp: value,
                                  },
                                );
                              }}
                              value={value}
                              valid={isValidField(name)}
                              errorMessage={getErrorMessage(name)}
                              formHasErrors={formErrors?.length > 0}
                              path={path}
                              block_id={block_id}
                            />
                          </Col>
                        </Row>
                      );
                    })
                ) : (
                  <></>
                )}

                {/* rercaptcha si renderizza accanto al bottone di submit,
                    più sotto: qui restano tutti gli altri tipi di captcha,
                    che non cambiano posizione */}
                {enableCaptcha && data.captcha !== 'rercaptcha' && (
                  <>{captcha.render()}</>
                )}

                {formErrors.length > 0 && (
                  <Alert
                    color="danger"
                    fade
                    isOpen
                    tag="div"
                    transition={alertTransition}
                  >
                    <h4>{intl.formatMessage(messages.error)}</h4>
                    <p>{intl.formatMessage(messages.form_errors)}</p>
                  </Alert>
                )}
                {formState.error && (
                  <Alert
                    color="danger"
                    fade
                    isOpen
                    tag="div"
                    transition={alertTransition}
                  >
                    <h4>{intl.formatMessage(messages.error)}</h4>
                    <p>{formState.error}</p>
                  </Alert>
                )}

                <Row>
                  <Col align="center">
                    {data?.show_cancel && (
                      <Button
                        color="secondary"
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          resetFormState();
                        }}
                        className="me-2"
                      >
                        {data.cancel_label ||
                          intl.formatMessage(messages.default_cancel_label)}
                      </Button>
                    )}
                    {/* rercaptcha, se configurato, si affianca al bottone
                        di submit (a sinistra, prima nel DOM) invece che
                        comparire più in alto insieme agli altri campi del
                        form: va prima del bottone anche nel DOM, non solo
                        visivamente, altrimenti con la sola tastiera il Tab
                        dopo aver spuntato la checkbox esce dal form invece
                        di raggiungere "Invia" */}
                    {enableCaptcha && data.captcha === 'rercaptcha' && (
                      <>{captcha.render()}</>
                    )}
                    <Button
                      color="primary"
                      type="submit"
                      disabled={
                        (requiresPreexistingToken &&
                          !captcha?.props?.captchaToken?.current) ||
                        formState.loading
                      }
                    >
                      {data.submit_label ||
                        intl.formatMessage(messages.default_submit_label)}

                      {formState.loading && (
                        <span>
                          <Progress
                            indeterminate={true}
                            role="progressbar"
                            tag="div"
                          />
                        </span>
                      )}
                    </Button>
                  </Col>
                </Row>
              </form>
            )}
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default FormView;
