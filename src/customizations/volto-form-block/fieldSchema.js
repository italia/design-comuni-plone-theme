// CUSTOMIZATION:
// - added unique parameter to fields to allow preventing users from using same value more than once in the same field e.g. submitting form with same email more than once
/* eslint-disable import/no-anonymous-default-export */
import config from '@plone/volto/registry';
import { defineMessages } from 'react-intl';
import { useIntl } from 'react-intl';

const messages = defineMessages({
  field_label: {
    id: 'form_field_label',
    defaultMessage: 'Label',
  },
  field_description: {
    id: 'form_field_description',
    defaultMessage: 'Description',
  },
  field_required: {
    id: 'form_field_required',
    defaultMessage: 'Required',
  },
  field_type: {
    id: 'form_field_type',
    defaultMessage: 'Field type',
  },
  field_type_text: {
    id: 'form_field_type_text',
    defaultMessage: 'Text',
  },
  field_type_textarea: {
    id: 'form_field_type_textarea',
    defaultMessage: 'Textarea',
  },
  field_type_select: {
    id: 'form_field_type_select',
    defaultMessage: 'List',
  },
  field_type_single_choice: {
    id: 'form_field_type_single_choice',
    defaultMessage: 'Single choice',
  },
  field_type_multiple_choice: {
    id: 'form_field_type_multiple_choice',
    defaultMessage: 'Multiple choice',
  },
  field_type_checkbox: {
    id: 'form_field_type_checkbox',
    defaultMessage: 'Checkbox',
  },
  field_type_date: {
    id: 'form_field_type_date',
    defaultMessage: 'Date',
  },
  field_type_attachment: {
    id: 'form_field_type_attachment',
    defaultMessage: 'Attachment',
  },
  field_type_attachment_info_text: {
    id: 'form_field_type_attachment_info_text',
    defaultMessage: 'Any attachments can be emailed, but will not be saved.',
  },
  field_type_from: {
    id: 'form_field_type_from',
    defaultMessage: 'E-mail',
  },
  field_type_static_text: {
    id: 'form_field_type_static_text',
    defaultMessage: 'Static text',
  },
  field_type_hidden: {
    id: 'form_field_type_hidden',
    defaultMessage: 'Hidden',
  },
  field_unique_title: {
    id: 'field_unique_title',
    defaultMessage: 'Unique field',
  },
  field_unique_description: {
    id: 'field_unique_description',
    defaultMessage:
      'Check this box if the value entered in this field can be used only once.',
  },
  field_autocomplete: {
    id: 'field_autocomplete',
    defaultMessage: '"Autocomplete" attribute',
  },
  field_autocomplete_description: {
    id: 'field_autocomplete_description',
    defaultMessage:
      'This field adds the "autocomplete" attribute to the field. This allows to fill in the field automatically with the user info, if stored. For a complete list of these attributes and their use, visit <a>this page</a>',
  },
  field_autocomplete_name_complete: {
    id: 'field_autocomplete_name_complete',
    defaultMessage: 'Full name',
  },
  field_autocomplete_honorific_prefix: {
    id: 'field_autocomplete_honorific_prefix',
    defaultMessage: 'Prefix (ex. mr, mrs)',
  },
  field_autocomplete_given_name: {
    id: 'field_autocomplete_given_name',
    defaultMessage: 'Given name',
  },
  field_autocomplete_additional_name: {
    id: 'field_autocomplete_additional_name',
    defaultMessage: 'Additional name',
  },
  field_autocomplete_family_name: {
    id: 'field_autocomplete_family_name',
    defaultMessage: 'Family name',
  },
  field_autocomplete_honorific_suffix: {
    id: 'field_autocomplete_honorific_suffix',
    defaultMessage: 'Suffix (ex. jr, sr)',
  },
  field_autocomplete_nickname: {
    id: 'field_autocomplete_nickname',
    defaultMessage: 'Nickname',
  },
  field_autocomplete_email: {
    id: 'field_autocomplete_email',
    defaultMessage: 'Email',
  },
  field_autocomplete_username: {
    id: 'field_autocomplete_username',
    defaultMessage: 'Username',
  },
  field_autocomplete_new_password: {
    id: 'field_autocomplete_new_password',
    defaultMessage: 'New password',
  },
  field_autocomplete_current_password: {
    id: 'field_autocomplete_current_password',
    defaultMessage: 'Current password',
  },
  field_autocomplete_organization_title: {
    id: 'field_autocomplete_organization_title',
    defaultMessage: 'Organization title',
  },
  field_autocomplete_organization: {
    id: 'field_autocomplete_organization',
    defaultMessage: 'Organization',
  },
  field_autocomplete_street_address: {
    id: 'field_autocomplete_street_address',
    defaultMessage: 'Street address',
  },
  field_autocomplete_address_line1: {
    id: 'field_autocomplete_address_line1',
    defaultMessage: 'Address line 1',
  },
  field_autocomplete_address_line2: {
    id: 'field_autocomplete_address_line2',
    defaultMessage: 'Address line 2',
  },
  field_autocomplete_address_line3: {
    id: 'field_autocomplete_address_line3',
    defaultMessage: 'Address line 3',
  },
  field_autocomplete_country: {
    id: 'field_autocomplete_country',
    defaultMessage: 'Country',
  },
  field_autocomplete_country_name: {
    id: 'field_autocomplete_country_name',
    defaultMessage: 'Country name',
  },
  field_autocomplete_postal_code: {
    id: 'field_autocomplete_postal_code',
    defaultMessage: 'Postal code',
  },
  field_autocomplete_cc_name: {
    id: 'field_autocomplete_cc_name',
    defaultMessage: 'Cardholder name',
  },
  field_autocomplete_cc_given_name: {
    id: 'field_autocomplete_cc_given_name',
    defaultMessage: 'Cardholder given name',
  },
  field_autocomplete_cc_additional_name: {
    id: 'field_autocomplete_cc_additional_name',
    defaultMessage: 'Cardholder additional name',
  },
  field_autocomplete_cc_family_name: {
    id: 'field_autocomplete_cc_family_name',
    defaultMessage: 'Cardholder family name',
  },
  field_autocomplete_cc_number: {
    id: 'field_autocomplete_cc_number',
    defaultMessage: 'Credit card number',
  },
  field_autocomplete_cc_exp: {
    id: 'field_autocomplete_cc_exp',
    defaultMessage: 'Credit card expiration date',
  },
  field_autocomplete_cc_exp_month: {
    id: 'field_autocomplete_cc_exp_month',
    defaultMessage: 'Credit card expiration month',
  },
  field_autocomplete_cc_exp_year: {
    id: 'field_autocomplete_cc_exp_year',
    defaultMessage: 'Credit card expiration year',
  },
  field_autocomplete_cc_csc: {
    id: 'field_autocomplete_cc_csc',
    defaultMessage: 'Credit card security code',
  },
  field_autocomplete_cc_type: {
    id: 'field_autocomplete_cc_type',
    defaultMessage: 'Credit card type',
  },
  field_autocomplete_transaction_currency: {
    id: 'field_autocomplete_transaction_currency',
    defaultMessage: 'Transaction currency',
  },
  field_autocomplete_transaction_amount: {
    id: 'field_autocomplete_transaction_amount',
    defaultMessage: 'Transaction amount',
  },
  field_autocomplete_language: {
    id: 'field_autocomplete_language',
    defaultMessage: 'Language',
  },
  field_autocomplete_bday: {
    id: 'field_autocomplete_bday',
    defaultMessage: 'Birthday',
  },
  field_autocomplete_bday_day: {
    id: 'field_autocomplete_bday_day',
    defaultMessage: 'Birth day',
  },
  field_autocomplete_bday_month: {
    id: 'field_autocomplete_bday_month',
    defaultMessage: 'Birth month',
  },
  field_autocomplete_bday_year: {
    id: 'field_autocomplete_bday_year',
    defaultMessage: 'Birth year',
  },
  field_autocomplete_sex: {
    id: 'field_autocomplete_sex',
    defaultMessage: 'Gender',
  },
  field_autocomplete_tel: {
    id: 'field_autocomplete_tel',
    defaultMessage: 'Telephone number',
  },
  field_autocomplete_tel_country_code: {
    id: 'field_autocomplete_tel_country_code',
    defaultMessage: 'Telephone country code',
  },
  field_autocomplete_tel_national: {
    id: 'field_autocomplete_tel_national',
    defaultMessage: 'National telephone number',
  },
  field_autocomplete_tel_area_code: {
    id: 'field_autocomplete_tel_area_code',
    defaultMessage: 'Telephone area code',
  },
  field_autocomplete_tel_local: {
    id: 'field_autocomplete_tel_local',
    defaultMessage: 'Local telephone number',
  },
  field_autocomplete_tel_extension: {
    id: 'field_autocomplete_tel_extension',
    defaultMessage: 'Telephone extension',
  },
  field_autocomplete_url: {
    id: 'field_autocomplete_url',
    defaultMessage: 'Website URL',
  },
  field_autocomplete_photo: {
    id: 'field_autocomplete_photo',
    defaultMessage: 'Photo',
  },
});

export default (props) => {
  var intl = useIntl();
  const baseFieldTypeChoices = [
    ['text', intl.formatMessage(messages.field_type_text)],
    ['textarea', intl.formatMessage(messages.field_type_textarea)],
    ['select', intl.formatMessage(messages.field_type_select)],
    ['single_choice', intl.formatMessage(messages.field_type_single_choice)],
    [
      'multiple_choice',
      intl.formatMessage(messages.field_type_multiple_choice),
    ],
    ['checkbox', intl.formatMessage(messages.field_type_checkbox)],
    ['date', intl.formatMessage(messages.field_type_date)],
    ['attachment', intl.formatMessage(messages.field_type_attachment)],
    ['from', intl.formatMessage(messages.field_type_from)],
    ['static_text', intl.formatMessage(messages.field_type_static_text)],
    ['hidden', intl.formatMessage(messages.field_type_hidden)],
  ];

  const autocompleteValues = [
    ['name', intl.formatMessage(messages.field_autocomplete_name_complete)],
    [
      'honorific-prefix',
      intl.formatMessage(messages.field_autocomplete_honorific_prefix),
    ],
    ['given-name', intl.formatMessage(messages.field_autocomplete_given_name)],
    [
      'additional-name',
      intl.formatMessage(messages.field_autocomplete_additional_name),
    ],
    [
      'family-name',
      intl.formatMessage(messages.field_autocomplete_family_name),
    ],
    [
      'honorific-suffix',
      intl.formatMessage(messages.field_autocomplete_honorific_suffix),
    ],
    ['nickname', intl.formatMessage(messages.field_autocomplete_nickname)],
    ['email', intl.formatMessage(messages.field_autocomplete_email)],
    ['username', intl.formatMessage(messages.field_autocomplete_username)],
    [
      'new-password',
      intl.formatMessage(messages.field_autocomplete_new_password),
    ],
    [
      'current-password',
      intl.formatMessage(messages.field_autocomplete_current_password),
    ],
    [
      'organization-title',
      intl.formatMessage(messages.field_autocomplete_organization_title),
    ],

    [
      'organization',
      intl.formatMessage(messages.field_autocomplete_organization),
    ],
    [
      'street-address',
      intl.formatMessage(messages.field_autocomplete_street_address),
    ],
    [
      'address-line1',
      intl.formatMessage(messages.field_autocomplete_address_line1),
    ],
    [
      'address-line2',
      intl.formatMessage(messages.field_autocomplete_address_line2),
    ],
    [
      'address-line3',
      intl.formatMessage(messages.field_autocomplete_address_line3),
    ],
    ['country', intl.formatMessage(messages.field_autocomplete_country)],
    [
      'country-name',
      intl.formatMessage(messages.field_autocomplete_country_name),
    ],
    [
      'postal-code',
      intl.formatMessage(messages.field_autocomplete_postal_code),
    ],
    ['cc-name', intl.formatMessage(messages.field_autocomplete_cc_name)],
    [
      'cc-given-name',
      intl.formatMessage(messages.field_autocomplete_cc_given_name),
    ],
    [
      'cc-additional-name',
      intl.formatMessage(messages.field_autocomplete_cc_additional_name),
    ],
    [
      'cc-family-name',
      intl.formatMessage(messages.field_autocomplete_cc_family_name),
    ],
    ['cc-number', intl.formatMessage(messages.field_autocomplete_cc_number)],
    ['cc-exp', intl.formatMessage(messages.field_autocomplete_cc_exp)],
    [
      'cc-exp-month',
      intl.formatMessage(messages.field_autocomplete_cc_exp_month),
    ],
    [
      'cc-exp-year',
      intl.formatMessage(messages.field_autocomplete_cc_exp_year),
    ],
    ['cc-csc', intl.formatMessage(messages.field_autocomplete_cc_csc)],
    ['cc-type', intl.formatMessage(messages.field_autocomplete_cc_type)],
    [
      'transaction-currency',
      intl.formatMessage(messages.field_autocomplete_transaction_currency),
    ],
    [
      'transaction-amount',
      intl.formatMessage(messages.field_autocomplete_transaction_amount),
    ],
    ['language', intl.formatMessage(messages.field_autocomplete_language)],
    ['bday', intl.formatMessage(messages.field_autocomplete_bday)],
    ['bday-day', intl.formatMessage(messages.field_autocomplete_bday_day)],
    ['bday-month', intl.formatMessage(messages.field_autocomplete_bday_month)],
    ['bday-year', intl.formatMessage(messages.field_autocomplete_bday_year)],
    ['sex', intl.formatMessage(messages.field_autocomplete_sex)],
    ['tel', intl.formatMessage(messages.field_autocomplete_tel)],
    [
      'tel-country-code',
      intl.formatMessage(messages.field_autocomplete_tel_country_code),
    ],
    [
      'tel-national',
      intl.formatMessage(messages.field_autocomplete_tel_national),
    ],
    [
      'tel-area-code',
      intl.formatMessage(messages.field_autocomplete_tel_area_code),
    ],
    ['tel-local', intl.formatMessage(messages.field_autocomplete_tel_local)],
    [
      'tel-extension',
      intl.formatMessage(messages.field_autocomplete_tel_extension),
    ],
    ['url', intl.formatMessage(messages.field_autocomplete_url)],
    ['photo', intl.formatMessage(messages.field_autocomplete_photo)],
  ];

  var attachmentDescription =
    props?.field_type === 'attachment'
      ? {
          description: intl.formatMessage(
            messages.field_type_attachment_info_text,
          ),
        }
      : {};

  var schemaExtender =
    config.blocks.blocksConfig.form.fieldTypeSchemaExtenders[props?.field_type];
  const schemaExtenderValues = schemaExtender
    ? schemaExtender(intl)
    : { properties: [], fields: [], required: [] };

  return {
    title: props?.label || '',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: [
          'label',
          'description',
          'field_type',
          ...schemaExtenderValues.fields,
          ...(props?.field_type !== 'checkbox' &&
          props?.field_type !== 'attachment' &&
          props?.field_type !== 'single_choice' &&
          props?.field_type !== 'multiple_choice' &&
          props?.field_type !== 'static_text'
            ? ['autocomplete']
            : []),
          ...(props?.field_type === 'static_text' ? [] : ['required']),
          'unique',
        ],
      },
    ],

    properties: {
      label: {
        title: intl.formatMessage(messages.field_label),
        send_to_backend: true,
      },
      description: {
        title: intl.formatMessage(messages.field_description),
      },
      field_type: {
        title: intl.formatMessage(messages.field_type),
        type: 'string',
        choices: [
          ...baseFieldTypeChoices,
          ...(config.blocks.blocksConfig.form.additionalFields?.map(
            (fieldType) => [fieldType.id, fieldType.label],
          ) ?? []),
        ],
        ...attachmentDescription,
      },
      autocomplete: {
        title: intl.formatMessage(messages.field_autocomplete),
        type: 'string',
        description: intl.formatMessage(
          messages.field_autocomplete_description,
          {
            a: (...chunks) => (
              <a
                href="https://www.w3.org/TR/WCAG21/#input-purposes"
                target="_blank"
                rel="noopener noreferrer"
              >
                {chunks}
              </a>
            ),
          },
        ),
        choices: autocompleteValues,
      },
      required: {
        title: intl.formatMessage(messages.field_required),
        type: 'boolean',
        default: false,
      },
      unique: {
        title: intl.formatMessage(messages.field_unique_title),
        description: intl.formatMessage(messages.field_unique_description),
        type: 'boolean',
        default: false,
        send_to_backend: true,
      },
      ...schemaExtenderValues.properties,
    },
    required: [
      'label',
      'field_type',
      'input_values',
      ...schemaExtenderValues.required,
    ],
  };
};
