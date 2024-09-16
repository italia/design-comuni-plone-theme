import React from 'react';
import { TextArea, Form, FormGroup } from 'design-react-kit';
import { defineMessages } from 'react-intl';
import { FormHeader } from 'volto-feedback';
import cx from 'classnames';

const messages = defineMessages({
  suggestions_placeholder: {
    id: 'feedback_form_suggestions_placeholder',
    defaultMessage:
      'Explain us why, and help us improve the quality of the site',
  },

  header_comments: {
    id: 'feedback_comments_header',
    defaultMessage: 'Do you want to add some more details?',
  },
  infotext_valid: {
    id: 'feedback_comments_infotext_valid',
    defaultMessage: 'Add your comment, maximum length is 200 characters',
  },
  infotext_invalid: {
    id: 'feedback_comments_infotext_invalid',
    defaultMessage: 'Comment is too long, maximum length is 200 characters',
  },
  label_comment: {
    id: 'feedback_comments_label_comment',
    defaultMessage: 'Comment',
  },
});

const CommentsStep = ({
  updateFormData,
  userFeedback,
  step,
  totalSteps,
  getFormFieldValue,
  intl,
}) => {
  const handleChange = ({ target }) => {
    updateFormData('comment', target.value ?? '');
  };
  const invalid = getFormFieldValue('comment')?.length > 200;

  return (
    <fieldset
      className={cx('comments-step', {
        'd-none': step !== 1,
      })}
      data-step={step}
      aria-expanded={step === 1}
      aria-hidden={step !== 1}
    >
      <FormHeader
        title={intl.formatMessage(messages.header_comments)}
        step={step + 1}
        totalSteps={totalSteps}
        className="comments-header"
        hidden={step !== 1}
      />
      <div className="comment w-100">
        <Form>
          <FormGroup key={`step-${step}-comment`}>
            <TextArea
              placeholder={intl.formatMessage(messages.suggestions_placeholder)}
              onChange={handleChange}
              rows={3}
              value={getFormFieldValue('comment')}
              infoText={
                !invalid
                  ? intl.formatMessage(messages.infotext_valid)
                  : intl.formatMessage(messages.infotext_invalid)
              }
              tabIndex="0"
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus={step === 1}
              id="comment"
              label={intl.formatMessage(messages.label_comment)}
              aria-invalid={invalid}
              invalid={invalid}
              className="mt-1"
              data-element="feedback-input-text"
              autoComplete="off"
            />
          </FormGroup>
        </Form>
      </div>
    </fieldset>
  );
};

export default CommentsStep;
