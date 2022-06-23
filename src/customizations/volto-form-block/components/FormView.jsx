import React, { useCallback, useRef } from 'react';
import { useIntl, defineMessages } from 'react-intl';
import {
  Card,
  CardBody,
  Row,
  Col,
  Button,
  Alert,
  Progress,
} from 'design-react-kit/dist/design-react-kit';
// eslint-disable-next-line import/no-unresolved
import { getFieldName } from 'volto-form-block/components/utils';
// eslint-disable-next-line import/no-unresolved
import Field from 'volto-form-block/components/Field';
// eslint-disable-next-line import/no-unresolved
import GoogleReCaptchaWidget from 'volto-form-block/components/Widget/GoogleReCaptchaWidget';
// eslint-disable-next-line import/no-unresolved
import HCaptchaWidget from 'volto-form-block/components/Widget/HCaptchaWidget';
import config from '@plone/volto/registry';

const messages = defineMessages({
  default_submit_label: {
    id: 'form_default_submit_label',
    defaultMessage: 'Invia',
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
});

const FormView = ({
  formState,
  formErrors,
  formData,
  onChangeFormData,
  data,
  onSubmit,
  resetFormState,
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

  const captcha = process.env.RAZZLE_HCAPTCHA_KEY
    ? 'HCaptcha'
    : process.env.RAZZLE_RECAPTCHA_KEY
    ? 'GoogleReCaptcha'
    : null;

  let validToken = useRef(null);
  const onVerifyCaptcha = useCallback(
    (token) => {
      validToken.current = token;
    },
    [validToken],
  );

  const isValidField = (field) => {
    return formErrors?.indexOf(field) < 0;
  };

  var FieldSchema = config.blocks.blocksConfig.form.fieldSchema;
  var fieldSchemaProperties = FieldSchema()?.properties;
  var fields_to_send = [];
  for (var key in fieldSchemaProperties) {
    if (fieldSchemaProperties[key].send_to_backend) {
      fields_to_send.push(key);
    }
  }

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
              {formState.error ? (
                <Alert
                  color="danger"
                  fade
                  isOpen
                  tag="div"
                  transition={alertTransition}
                >
                  <h4>{intl.formatMessage(messages.error)}</h4>
                  <p>{formState.error}</p>
                  <Button type="clear" onClick={resetFormState}>
                    {intl.formatMessage(messages.reset)}
                  </Button>
                </Alert>
              ) : formState.result ? (
                <Alert
                  color="success"
                  fade
                  isOpen
                  tag="div"
                  transition={alertTransition}
                >
                  <h4>{intl.formatMessage(messages.success)}</h4>
                  <br />
                  <Button type="clear" onClick={resetFormState}>
                    {intl.formatMessage(messages.reset)}
                  </Button>
                </Alert>
              ) : (
                <form
                  onSubmit={onSubmit}
                  noValidate
                  autoComplete="off"
                  method="post"
                >
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

                  {captcha === 'GoogleReCaptcha' && (
                    <GoogleReCaptchaWidget onVerify={onVerifyCaptcha} />
                  )}

                  {captcha === 'HCaptcha' && (
                    <HCaptchaWidget
                      sitekey={process.env.RAZZLE_HCAPTCHA_KEY}
                      onVerify={onVerifyCaptcha}
                      size={data.invisibleHCaptcha ? 'invisible' : 'normal'}
                    />
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
                      <p>{intl.formatMessage(messages.empty_values)}</p>
                    </Alert>
                  )}

                  <Row>
                    <Col align="center">
                      <Button
                        color="primary"
                        type="submit"
                        disabled={
                          (!validToken?.current &&
                            (!!process.env.RAZZLE_RECAPTCHA_KEY ||
                              !!process.env.RAZZLE_HCAPTCHA_KEY)) ||
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
