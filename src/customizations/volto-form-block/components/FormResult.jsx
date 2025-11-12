/*
CUSTOMIZATIONS:
- used design-react-kit components to render form result
- added warning message when subscription limit (if set) has been exceeded
*/
import React from 'react';
import { useIntl, defineMessages } from 'react-intl';
import { Button, Alert } from 'design-react-kit';
import { getFieldName } from 'volto-form-block/components/utils';
import config from '@plone/volto/registry';

const messages = defineMessages({
  success: {
    id: 'form_submit_success',
    defaultMessage: 'Sent!',
  },
  success_warning: {
    id: 'form_submit_success_warning',
    defaultMessage: 'Your registration is on the waiting list.',
  },
  success_warning_description: {
    id: 'form_submit_success_warning_description',
    defaultMessage:
      'Your data has been submitted successfully. However, the maximum number of registrations has been reached: your request has been placed on the waiting list.',
  },
  reset: {
    id: 'form_reset',
    defaultMessage: 'Clear',
  },
});

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

/* Function that replaces variables from the user customized message  */
const replaceMessage = (text, sent_data) => {
  let i = 0;
  while (i < sent_data.length) {
    let idField = getFieldName(sent_data[i].label, sent_data[i].field_id);
    text = text.replaceAll('${' + idField + '}', sent_data[i].value ?? '');
    i++;
  }
  text = text.replaceAll(/\$\{[^}]*\}/gm, ''); //replace empty fields with nothing
  text = text.replaceAll('\n', '<br/>');
  return text;
};

const FormResult = ({ formState, data, resetFormState }) => {
  const intl = useIntl();
  const displayThankYouInAlertMessageFormBlock =
    config.settings.siteProperties.displayThankYouInAlertMessageFormBlock;

  return (
    <Alert
      color={!formState.warning ? 'success' : 'warning'}
      fade
      isOpen
      tag="div"
      transition={alertTransition}
    >
      <h4>
        {!formState.warning
          ? intl.formatMessage(messages.success)
          : intl.formatMessage(messages.success_warning)}
      </h4>
      <br />
      {/* Warning submit limit  */}
      {formState.warning && (
        <>
          <p>{intl.formatMessage(messages.success_warning_description)}</p>
        </>
      )}
      {/* Custom message */}
      {(!formState.warning && data.send_message) ||
        (formState.warning &&
          displayThankYouInAlertMessageFormBlock &&
          data.send_message && (
            <>
              <p
                dangerouslySetInnerHTML={{
                  __html: replaceMessage(
                    data.send_message,
                    formState.result.data,
                  ),
                }}
              />
              <br />
            </>
          ))}

      <Button
        color="primary"
        outline
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          resetFormState();
        }}
      >
        {intl.formatMessage(messages.reset)}
      </Button>
    </Alert>
  );
};
export default FormResult;
