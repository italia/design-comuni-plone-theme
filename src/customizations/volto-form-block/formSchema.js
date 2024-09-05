// CUSTOMIZATION:
// - added field to set a subscription limit
import { defineMessages } from 'react-intl';
import { useIntl } from 'react-intl';

const messages = defineMessages({
  form: {
    id: 'form',
    defaultMessage: 'Form',
  },
  title: {
    id: 'title',
    defaultMessage: 'Title',
  },
  description: {
    id: 'description',
    defaultMessage: 'Description',
  },
  default_to: {
    id: 'form_to',
    defaultMessage: 'Recipients',
  },
  default_from: {
    id: 'form_default_from',
    defaultMessage: 'Default sender',
  },
  default_subject: {
    id: 'form_default_subject',
    defaultMessage: 'Mail subject',
  },
  default_subject_description: {
    id: 'form_default_subject_description',
    defaultMessage:
      'Use the ${field_id} syntax to add a form value to the email subject',
  },
  submit_label: {
    id: 'form_submit_label',
    defaultMessage: 'Submit button label',
  },
  show_cancel: {
    id: 'form_show_cancel',
    defaultMessage: 'Show cancel button',
  },
  set_limit: {
    id: 'form_set_limit',
    defaultMessage: 'Set a submission limit',
  },
  limit: {
    id: 'form_limit',
    defaultMessage: 'Submission limit',
  },
  cancel_label: {
    id: 'form_cancel_label',
    defaultMessage: 'Cancel button label',
  },
  captcha: {
    id: 'captcha',
    defaultMessage: 'Captcha provider',
  },
  store: {
    id: 'form_save_persistent_data',
    defaultMessage: 'Store compiled data',
  },
  remove_data_after_days: {
    id: 'form_remove_data_after_days',
    defaultMessage: 'Data wipe',
  },
  remove_data_after_days_helptext: {
    id: 'form_remove_data_after_days_helptext',
    defaultMessage: 'Number of days after which, the data should be deleted',
  },
  attachmentSendEmail: {
    id: 'form_attachment_send_email_info_text',
    defaultMessage: 'Attached file will be sent via email, but not stored',
  },
  send: {
    id: 'form_send_email',
    defaultMessage: 'Send email to recipient',
  },
  send_message: {
    id: 'form_send_message',
    defaultMessage: 'Message of sending confirmed',
  },
  send_message_helptext: {
    id: 'form_send_message_helptext',
    defaultMessage:
      'You can add the value of a filled field in the form by inserting its ID between curly brackets preceded by $, example: ${field_id}; you can add also html elements such as links <a>, new line <br />, bold <b> and italic <i> formatting.',
  },
  manage_data: {
    id: 'form_manage_data',
    defaultMessage: 'Manage data',
  },
  mail_header_label: {
    id: 'mail_header_label',
    defaultMessage: 'Text at the beginning of the email',
  },
  mail_header_footer_description: {
    id: 'mail_header_description',
    defaultMessage: "If field isn't filled in, a default text will be used",
  },
  mail_footer_label: {
    id: 'mail_footer_label',
    defaultMessage: 'Text at the end of the email',
  },
});

const Schema = (data) => {
  var intl = useIntl();

  let conditional_required = [];
  if (!data.store && !data.send) {
    conditional_required.push('store');
    conditional_required.push('send');
  }

  return {
    title: intl.formatMessage(messages.form),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: [
          'title',
          'description',
          'default_to',
          'default_from',
          'default_subject',
          'submit_label',
          'show_cancel',
          ...(data?.show_cancel ? ['cancel_label'] : []),
          'set_limit',
          ...(data?.set_limit ? ['limit'] : []),
          'mail_header',
          'mail_footer',
          'captcha',
        ],
      },
      {
        id: 'manage_data',
        title: intl.formatMessage(messages.manage_data),
        fields: ['store', 'remove_data_after_days', 'send', 'send_message'],
      },
    ],
    properties: {
      title: {
        title: intl.formatMessage(messages.title),
      },
      description: {
        title: intl.formatMessage(messages.description),
        type: 'textarea',
      },
      default_to: {
        title: intl.formatMessage(messages.default_to),
      },
      default_from: {
        title: intl.formatMessage(messages.default_from),
      },
      default_subject: {
        title: intl.formatMessage(messages.default_subject),
        description: intl.formatMessage(messages.default_subject_description),
      },
      submit_label: {
        title: intl.formatMessage(messages.submit_label),
      },
      show_cancel: {
        type: 'boolean',
        title: intl.formatMessage(messages.show_cancel),
        default: false,
      },
      set_limit: {
        type: 'boolean',
        title: intl.formatMessage(messages.set_limit),
        default: false,
      },
      limit: {
        title: intl.formatMessage(messages.limit),
        default: -1,
      },
      cancel_label: {
        title: intl.formatMessage(messages.cancel_label),
      },
      mail_header: {
        title: intl.formatMessage(messages.mail_header_label),
        widget: 'richtext',
        type: 'string',
        description: intl.formatMessage(
          messages.mail_header_footer_description,
        ),
      },
      mail_footer: {
        title: intl.formatMessage(messages.mail_footer_label),
        widget: 'richtext',
        type: 'string',
        description: intl.formatMessage(
          messages.mail_header_footer_description,
        ),
      },
      captcha: {
        title: intl.formatMessage(messages.captcha),
        type: 'string',
        vocabulary: {
          '@id': 'collective.volto.formsupport.captcha.providers',
        },
      },
      store: {
        type: 'boolean',
        title: intl.formatMessage(messages.store),
      },
      remove_data_after_days: {
        type: 'integer',
        title: intl.formatMessage(messages.remove_data_after_days),
        description: intl.formatMessage(
          messages.remove_data_after_days_helptext,
        ),
        default: -1,
      },
      send: {
        type: 'boolean',
        title: intl.formatMessage(messages.send),
        description: intl.formatMessage(messages.attachmentSendEmail),
      },
      send_message: {
        title: intl.formatMessage(messages.send_message),
        widget: 'textarea',
        description: intl.formatMessage(messages.send_message_helptext),
      },
    },
    required: [
      'default_to',
      'default_from',
      'default_subject',
      'captcha',
      ...conditional_required,
    ],
  };
};
export default Schema;
