import React, { useCallback, useState, useEffect } from 'react';
import { useIntl, defineMessages } from 'react-intl';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';
import {
  Card,
  CardBody,
  Row,
  Col,
  Button,
  Alert,
  Progress,
} from 'design-react-kit/dist/design-react-kit';
import { getFieldName } from 'volto-form-block';
import Field from './Field';

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
    defaultMessage: 'Email inviata correttamente',
  },
  empty_values: {
    id: 'form_empty_values_validation',
    defaultMessage: 'Compila i campi richiesti',
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

  const [loadedRecaptcha, setLoadedRecaptcha] = useState(null);
  let validToken = '';
  const onVerifyCaptcha = useCallback(
    (token) => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      validToken = token;
    },
    [validToken],
  );

  useEffect(() => {
    setLoadedRecaptcha(true);
  }, [loadedRecaptcha]);

  const isValidField = (field) => {
    return formErrors?.indexOf(field) < 0;
  };

  return (
    <div className="block form">
      <div className="public-ui">
        <div className="p-4">
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
                  <p>{formState.result}</p>
                </Alert>
              ) : (
                <form onSubmit={onSubmit} noValidate method="post">
                  {data.static_fields && (
                    <fieldset disabled>
                      {data.static_fields?.map((field) => (
                        <Row key={field.field_id}>
                          <Col className="py-2">
                            <Field
                              {...field}
                              field_type={field.field_type || 'text'}
                              name={field.label}
                              value={field.value}
                              onChange={() => {}}
                              valid
                              disabled
                            />
                          </Col>
                        </Row>
                      ))}
                    </fieldset>
                  )}
                  {data.subblocks.map((subblock, index) => {
                    let name = getFieldName(subblock.label);
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
                                subblock.label,
                              )
                            }
                            value={formData[name]?.value}
                            valid={isValidField(name)}
                          />
                        </Col>
                      </Row>
                    );
                  })}

                  {process.env.RAZZLE_RECAPTCHA_KEY && (
                    <Row>
                      <Col className="py-2">
                        <GoogleReCaptcha onVerify={onVerifyCaptcha} />
                      </Col>
                    </Row>
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
                          (!loadedRecaptcha &&
                            process.env.RAZZLE_RECAPTCHA_KEY) ||
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
