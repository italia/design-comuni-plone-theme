/**
 * From class
 * @module components/manage/Blocks/IconsBlocks/View
 */

import React, { useCallback, useState, useEffect, useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useIntl, defineMessages } from 'react-intl';
import Field from './Field';
import {
  Card,
  CardBody,
  Row,
  Col,
  Button,
  Alert,
  Progress,
} from 'design-react-kit/dist/design-react-kit';
import { sendActionForm } from '@italia/actions/sendActionForm';
import { getFieldName } from './utils';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';

const messages = defineMessages({
  default_submit_label: {
    id: 'form_default_submit_label',
    defaultMessage: 'Invia',
  },
  error: {
    id: 'Error',
    defaultMessage: 'Errore',
  },
  messageSent: {
    id: 'Email sent',
    defaultMessage: 'La tua mail è stata inviata correttamente',
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

const initialState = {
  loading: false,
  error: null,
  result: null,
};

const FORM_STATES = {
  normal: 'normal',
  loading: 'loading',
  error: 'error',
  success: 'success',
};

const formStateReducer = (state, action) => {
  switch (action.type) {
    case FORM_STATES.normal:
      return initialState;

    case FORM_STATES.loading:
      return { loading: true, error: null, result: null };

    case FORM_STATES.error:
      return { loading: false, error: action.error, result: null };

    case FORM_STATES.success:
      return { loading: false, error: null, result: action.result };

    default:
      return initialState;
  }
};

/**
 * Form
 * @class Form
 * @extends Component
 */
const Form = ({ data, id, path }) => {
  const intl = useIntl();
  const dispatch = useDispatch();

  const [formData, setFormData] = useReducer((state, action) => {
    return { ...state, [action.field]: action.value };
  }, {});

  const [formState, setFormState] = useReducer(formStateReducer, initialState);
  const [formErrors, setFormErrors] = useState([]);
  const [loadedRecaptcha, setLoadedRecaptcha] = useState(null);
  const submitResults = useSelector((state) => state.sendActionForm);

  const onChangeFormData = (field, value, label) => {
    setFormData({ field: field, value: { value: value, label: label } });
  };

  useEffect(() => {
    if (formErrors.length > 0) {
      isValidForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  const isValidForm = () => {
    let v = [];
    data.subblocks.forEach((subblock, index) => {
      let name = getFieldName(subblock.label);
      if (
        subblock.required &&
        (!formData[name] || formData[name]?.length === 0)
      ) {
        v.push(name);
      }
    });

    setFormErrors(v);
    return v.length === 0;
  };

  const submit = (e) => {
    e.preventDefault();

    if (isValidForm()) {
      let attachments = {};

      data.subblocks.forEach((subblock, index) => {
        let name = getFieldName(subblock.label);
        if (formData[name]?.value) {
          const isAttachment = subblock.field_type === 'attachment';

          if (isAttachment) {
            attachments[name] = formData[name].value;
          }
        }
      });

      dispatch(
        sendActionForm(
          path,
          id,
          Object.keys(formData).map((name) => ({
            id: name,
            label: formData[name].label,
            value: formData[name].value,
          })),
          attachments,
        ),
      );
      setFormState({ type: FORM_STATES.loading });
    } else {
      setFormState({ type: FORM_STATES.error });
    }
  };

  const isValidField = (field) => {
    return formErrors?.indexOf(field) < 0;
  };

  useEffect(() => {
    if (submitResults?.loaded) {
      setFormState({
        type: FORM_STATES.success,
        result: intl.formatMessage(messages.messageSent),
      });
    } else if (submitResults?.error) {
      let errorDescription = `${submitResults.error.status} ${
        submitResults.error.message
      }- ${JSON.parse(submitResults.error.response?.text ?? {})?.message}`;

      setFormState({ type: FORM_STATES.error, error: errorDescription });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitResults]);

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

  let validToken = '';

  useEffect(() => {
    setLoadedRecaptcha(true);
  }, [loadedRecaptcha]);

  const onVerifyCaptcha = useCallback(
    (token) => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      validToken = token;
    },
    [validToken],
  );

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
                <form onSubmit={submit} noValidate method="post">
                  {data.subblocks.map((subblock, index) => {
                    let name = getFieldName(subblock.label);
                    return (
                      <Row key={'row' + index}>
                        <Col className="py-2">
                          <Field
                            {...subblock}
                            name={name}
                            onChange={(field, value) =>
                              onChangeFormData(field, value, subblock.label)
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

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Form.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Form;
