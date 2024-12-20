// CUSTOMIZATION:
// - added warning state to form
// - backport for https://github.com/collective/volto-form-block/pull/122

import React, { useState, useEffect, useReducer, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useIntl, defineMessages } from 'react-intl';
import { submitForm, resetOTP } from 'volto-form-block/actions';
import { getFieldName } from 'volto-form-block/components/utils';
import FormView from 'volto-form-block/components/FormView';
import config from '@plone/volto/registry';
import { Captcha } from 'volto-form-block/components/Widget';
import { isValidEmail } from 'volto-form-block/helpers/validators';
import ValidateConfigForm from 'volto-form-block/components/ValidateConfigForm';
import { OTP_FIELDNAME_EXTENDER } from 'volto-form-block/components/Widget';

const messages = defineMessages({
  formSubmitted: {
    id: 'formSubmitted',
    defaultMessage: 'Form successfully submitted',
  },
  defaultInvalidFieldMessage: {
    id: 'formblock_defaultInvalidFieldMessage',
    defaultMessage: 'Invalid field value',
  },
  requiredFieldMessage: {
    id: 'formblock_requiredFieldMessage',
    defaultMessage: 'Fill-in this field',
  },
  invalidEmailMessage: {
    id: 'formblock_invalidEmailMessage',
    defaultMessage: 'The email is incorrect',
  },
  insertOtp: {
    id: 'formblock_insertOtp_error',
    defaultMessage: 'Please, insert the OTP code recived via email.',
  },
});

const initialState = {
  loading: false,
  error: null,
  result: null,
  warning: null,
};

const FORM_STATES = {
  normal: 'normal',
  loading: 'loading',
  error: 'error',
  success: 'success',
  warning: 'warning',
};

const formStateReducer = (state, action) => {
  switch (action.type) {
    case FORM_STATES.normal:
      return initialState;

    case FORM_STATES.loading:
      return { loading: true, error: null, result: null, warning: null };

    case FORM_STATES.error:
      return {
        loading: false,
        error: action.error,
        result: null,
        warning: null,
      };

    case FORM_STATES.warning:
      return {
        loading: false,
        error: null,
        result: action.result,
        warning: true,
      };

    case FORM_STATES.success:
      return {
        loading: false,
        error: null,
        result: action.result,
        warning: null,
      };

    default:
      return initialState;
  }
};

const getInitialData = (data) => {
  const { static_fields = [], subblocks = [] } = data;

  return {
    ...subblocks.reduce(
      (acc, field) =>
        field.field_type === 'hidden'
          ? {
              ...acc,
              [getFieldName(field.label, field.id)]: {
                ...field,
                ...(data[field.id] && { custom_field_id: data[field.id] }),
              },
            }
          : acc,
      {},
    ),
    ...static_fields.reduce(
      (acc, field) => ({
        ...acc,
        [getFieldName(field.label, field.id)]: field,
      }),
      {},
    ),
  };
};

/**
 * Form view
 * @class View
 */
const View = ({ data, id, path }) => {
  const intl = useIntl();
  const dispatch = useDispatch();

  const [formData, setFormData] = useReducer((state, action) => {
    if (action.reset) {
      if (data.email_otp_verification) {
        dispatch(resetOTP(id));
      }
      return getInitialData(data);
    }

    return {
      ...state,
      [action.field]: action.value,
    };
  }, getInitialData(data));

  const [formState, setFormState] = useReducer(formStateReducer, initialState);
  const [formErrors, setFormErrors] = useState([]);

  const submitResults = useSelector(
    (state) => state.submitForm?.subrequests?.[id],
  );
  const captchaToken = useRef();

  const onChangeFormData = (field_id, field, value, extras) => {
    setFormData({ field, value: { field_id, value, ...extras } });
  };

  useEffect(() => {
    if (formErrors.length > 0) {
      isValidForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  const isValidForm = () => {
    const v = [];
    data.subblocks.forEach((subblock, index) => {
      const name = getFieldName(subblock.label, subblock.id);
      const fieldType = subblock.field_type;
      const isBCC = subblock.use_as_bcc;
      const additionalField =
        config.blocks.blocksConfig.form.additionalFields?.filter(
          (f) => f.id === fieldType && f.isValid !== undefined,
        )?.[0] ?? null;

      if (
        subblock.required &&
        additionalField &&
        !additionalField?.isValid(formData, name)
      ) {
        const validation = additionalField?.isValid(formData, name);
        if (typeof validation === 'boolean') {
          //for retro-compatibility with previous formErrors structure
          v.push({
            field: name,
            message: intl.formatMessage(messages.defaultInvalidFieldMessage),
          });
        } else if (typeof validation === 'object') {
          v.push(validation);
        }
      } else if (
        subblock.required &&
        fieldType === 'checkbox' &&
        !formData[name]?.value
      ) {
        v.push({
          field: name,
          message: intl.formatMessage(messages.requiredFieldMessage),
        });
      } else if (
        subblock.required &&
        (!formData[name] ||
          formData[name]?.value?.length === 0 ||
          JSON.stringify(formData[name]?.value ?? {}) === '{}')
      ) {
        v.push({
          field: name,
          message: intl.formatMessage(messages.requiredFieldMessage),
        });
      } else if (
        (fieldType === 'from' || fieldType === 'email') &&
        formData[name]?.value
      ) {
        if (!isValidEmail(formData[name].value)) {
          v.push({
            field: name,
            message: intl.formatMessage(messages.invalidEmailMessage),
          });
        } else if (
          data.email_otp_verification &&
          isBCC &&
          !formData[name].otp
        ) {
          v.push({
            field: name + OTP_FIELDNAME_EXTENDER,
            message: intl.formatMessage(messages.insertOtp),
          });
        }
      }
    });

    if (data.captcha && !captchaToken.current) {
      v.push({
        field: 'captcha',
        message: intl.formatMessage(messages.requiredFieldMessage),
      });
    }

    setFormErrors(v);
    return v.length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    captcha
      .verify()
      .then(() => {
        if (isValidForm()) {
          let attachments = {};
          let captcha = {
            provider: data.captcha,
            token: captchaToken.current,
          };
          if (data.captcha === 'honeypot') {
            captcha.value = formData[data.captcha_props.id]?.value ?? '';
          }

          let formattedFormData = { ...formData };
          data.subblocks.forEach((subblock) => {
            let name = getFieldName(subblock.label, subblock.id);
            if (formattedFormData[name]?.value) {
              formattedFormData[name].field_id = subblock.field_id;
              const isAttachment =
                config.blocks.blocksConfig.form.attachment_fields.includes(
                  subblock.field_type,
                );
              // const isDate = subblock.field_type === 'date';

              if (isAttachment) {
                attachments[name] = formattedFormData[name].value;
                delete formattedFormData[name];
              }

              // XXX: dates should be sent as ISO format, not DD-MM-YYYY !
              // if (isDate) {
              //   formattedFormData[name].value = formatDate({
              //     date: formattedFormData[name].value,
              //     format: 'DD-MM-YYYY',
              //     locale: intl.locale,
              //   });
              // }
            }
          });
          dispatch(
            submitForm(
              path,
              id,
              Object.keys(formattedFormData).map((name) => ({
                ...formattedFormData[name],
              })),
              attachments,
              captcha,
            ),
          );
          setFormState({ type: FORM_STATES.loading });
        } else {
          setFormState({ type: FORM_STATES.error });
        }
      })
      .catch(() => {
        setFormState({ type: FORM_STATES.error });
      });
  };

  const resetFormState = () => {
    setFormData({ reset: true });
    setFormState({ type: FORM_STATES.normal });
  };

  const resetFormOnError = () => {
    setFormState({ type: FORM_STATES.normal });
  };

  const getErrorMessage = (field) => {
    const e = formErrors?.filter((e) => e.field === field);
    return e.length > 0 ? e[0].message : null;
  };

  const captcha = new Captcha({
    captchaToken,
    captcha: data.captcha,
    captcha_props: data.captcha_props,
    errorMessage: getErrorMessage('captcha'),
    onChangeFormData,
  });

  const formid = `form-${id}`;

  useEffect(() => {
    if (submitResults?.loaded) {
      if (submitResults?.result?.waiting_list) {
        setFormState({
          type: FORM_STATES.warning,
          result: {
            ...submitResults.result,
          },
        });
      } else {
        setFormState({
          type: FORM_STATES.success,
          result: {
            message: intl.formatMessage(messages.formSubmitted),
            ...submitResults.result,
          },
        });
      }
      captcha.reset();
      const formItem = document.getElementById(formid);
      if (formItem !== null) {
        const formItemPosition = formItem.getBoundingClientRect();
        formItemPosition !== null &&
          window.scrollTo({
            top: formItemPosition.x,
            left: formItemPosition.y,
            behavior: 'smooth',
          });
      }
    } else if (submitResults?.error) {
      let errorDescription = `${
        JSON.parse(submitResults.error.response?.text ?? '{}')?.message
      }`;

      setFormState({ type: FORM_STATES.error, error: errorDescription });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitResults]);

  useEffect(() => {
    resetFormState();
  }, []);

  return (
    <ValidateConfigForm data={data}>
      <FormView
        id={formid}
        formState={formState}
        formErrors={formErrors}
        formData={formData}
        captcha={captcha}
        onChangeFormData={onChangeFormData}
        data={data}
        onSubmit={submit}
        resetFormState={resetFormState}
        resetFormOnError={resetFormOnError}
        getErrorMessage={getErrorMessage}
        path={path}
        block_id={id}
      />
    </ValidateConfigForm>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
View.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default View;
