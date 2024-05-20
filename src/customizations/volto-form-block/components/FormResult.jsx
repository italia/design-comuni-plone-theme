/*
CUSTOMIZATIONS:
- used design-react-kit components to render form result
*/
import React from 'react';
import { useIntl, defineMessages } from 'react-intl';
import { Button, Alert } from 'design-react-kit';
import { getFieldName } from 'volto-form-block/components/utils';

const messages = defineMessages({
  success: {
    id: 'form_submit_success',
    defaultMessage: 'Sent!',
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
  return (
    <Alert color="success" fade isOpen tag="div" transition={alertTransition}>
      <h4>{intl.formatMessage(messages.success)}</h4>
      <br />
      {/* Custom message */}
      {data.send_message && (
        <>
          <p
            dangerouslySetInnerHTML={{
              __html: replaceMessage(data.send_message, formState.result.data),
            }}
          />
          <br />
        </>
      )}
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
