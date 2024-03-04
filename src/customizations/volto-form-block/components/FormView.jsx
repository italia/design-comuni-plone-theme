/*Customizatinos:
- usati i componenti di design-react-kit
- disabilitato il captcha se nelle siteProperties del config è stato disabilitato.
- aggiunta legenda per i campi obbligatori
*/
import React from 'react';
import { useIntl, defineMessages } from 'react-intl';
import {
  Card,
  CardBody,
  Row,
  Col,
  Button,
  Alert,
  Progress,
} from 'design-react-kit';
// eslint-disable-next-line import/no-unresolved
import { getFieldName } from 'volto-form-block/components/utils';
// eslint-disable-next-line import/no-unresolved
import Field from 'volto-form-block/components/Field';
// eslint-disable-next-line import/no-unresolved
import config from '@plone/volto/registry';

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
  empty_values: {
    id: 'form_empty_values_validation',
    defaultMessage: 'Compila i campi richiesti',
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

  const isValidField = (field) => {
    return formErrors?.indexOf(field) < 0;
  };

  /* Function that replaces variables from the user customized message  */
  const replaceMessage = (text) => {
    let i = 0;
    while (i < data.subblocks.length) {
      let idField = getFieldName(
        data.subblocks[i].label,
        data.subblocks[i].field_id,
      );
      text = text.replaceAll(
        '${' + idField + '}',
        formData[idField]?.value || '',
      );
      i++;
    }
    return text;
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

  return (
    <div className="block form">
      <div className="public-ui">
        <div className="p-4">
          {data?.title && <h2>{data.title}</h2>}
          {data?.description && (
            <div className="block-description">{data.description}</div>
          )}
          <Card className="card-bg rounded py-3" noWrapper={false} tag="div">
            <CardBody tag="div">
              {formState.result ? (
                <Alert
                  color="success"
                  fade
                  isOpen
                  tag="div"
                  transition={alertTransition}
                >
                  <h4>{intl.formatMessage(messages.success)}</h4>
                  <br />
                  {/* Custom message */}
                  {data.send_message && (
                    <>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: replaceMessage(data.send_message),
                        }}
                      />
                      <br />
                    </>
                  )}
                  <Button color="primary" outline onClick={resetFormState}>
                    {intl.formatMessage(messages.reset)}
                  </Button>
                </Alert>
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
                    var fields_to_send_with_value = Object.assign(
                      {},
                      ...fields_to_send.map((field) => {
                        return {
                          [field]: subblock[field],
                        };
                      }),
                    );

                    return (
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
                            formHasErrors={formErrors.length > 0}
                          />
                        </Col>
                      </Row>
                    );
                  })}

                  {enableCaptcha && <>{captcha.render()}</>}

                  {formErrors.length > 0 && (
                    <Alert
                      color="danger"
                      fade
                      isOpen
                      tag="div"
                      transition={alertTransition}
                    >
                      <h4>{intl.formatMessage(messages.error)}</h4>
                      <p>{intl.formatMessage(messages.empty_values)}</p>
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
                          type="clear"
                          onClick={resetFormState}
                          className="me-2"
                        >
                          {data.cancel_label ||
                            intl.formatMessage(messages.default_cancel_label)}
                        </Button>
                      )}
                      <Button
                        color="primary"
                        type="submit"
                        disabled={
                          (enableCaptcha &&
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
    </div>
  );
};

export default FormView;
