import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Accordion, Form } from 'semantic-ui-react';
import {
  defineMessages,
  useIntl,
  FormattedMessage,
  injectIntl,
} from 'react-intl';

import {
  Icon,
  TextWidget,
  CheckboxWidget,
  SelectWidget,
  ArrayWidget,
} from '@plone/volto/components';

import upSVG from '@plone/volto/icons/up-key.svg';
import downSVG from '@plone/volto/icons/down-key.svg';

const messages = defineMessages({
  default_to: {
    id: 'form_to',
    defaultMessage: 'Destinatari',
  },
  submit_label: {
    id: 'form_submit_label',
    defaultMessage: 'Testo sul bottone di invio',
  },
  field_label: {
    id: 'form_field_label',
    defaultMessage: 'Etichetta',
  },
  field_description: {
    id: 'form_field_description',
    defaultMessage: 'Descrizione',
  },
  field_name: {
    id: 'form_field_name',
    defaultMessage: 'Nome',
  },
  field_name_description: {
    id: 'form_field_name_description',
    defaultMessage:
      'Il nome deve contenere spazi, e può contenere solo caratteri alfanumerici oltre ai caratteri "-" e "_". Il nome coincide con il nome del parametro.',
  },
  field_required: {
    id: 'form_field_required',
    defaultMessage: 'Obbligatorio',
  },
  field_type: {
    id: 'form_field_type',
    defaultMessage: 'Tipo di campo',
  },
  field_type_text: {
    id: 'form_field_type_text',
    defaultMessage: 'Testo',
  },
  field_type_textarea: {
    id: 'form_field_type_textarea',
    defaultMessage: 'Area di testo',
  },
  field_type_select: {
    id: 'form_field_type_select',
    defaultMessage: 'Lista',
  },
  field_type_radio: {
    id: 'form_field_type_radio',
    defaultMessage: 'Scelta singola',
  },
  field_type_checkbox: {
    id: 'form_field_type_checkbox',
    defaultMessage: 'Scelta multipla',
  },
  field_type_date: {
    id: 'form_field_type_date',
    defaultMessage: 'Data',
  },
  field_type_attachment: {
    id: 'form_field_type_attachment',
    defaultMessage: 'Allegato',
  },
  field_type_from: {
    id: 'form_field_type_from',
    defaultMessage: 'E-mail',
  },
  field_input_values: {
    id: 'form_field_input_values',
    defaultMessage: 'Valori possibili',
  },
  default_subject: {
    id: 'form_default_subject',
    defaultMessage: 'Oggetto della mail',
  },
  default_from: {
    id: 'form_default_from',
    defaultMessage: 'Mittente di default',
  },
  default_from_description: {
    id: 'form_default_from_description',
    defaultMessage:
      'Questo indirizzo verrà utilizzato come mittente della mail con i dati del form',
  },
  save_persistent_data: {
    id: 'form_save_persistent_data',
    defaultMessage: 'Salva i dati compilati',
  },
  send_email: {
    id: 'form_send_email',
    defaultMessage: 'Invia email al destinatario',
  },
});

const Sidebar = ({
  data,
  block,
  onChangeBlock,
  onChangeSubBlock,
  selected = 0,
  setSelected,
  openObjectBrowser,
}) => {
  const intl = useIntl();

  if (data.send_email === undefined) data.send_email = true;

  return (
    <Form>
      <Segment.Group raised form>
        <header className="header pulled">
          <h2>
            <FormattedMessage id="Form" defaultMessage="Form" />
          </h2>
        </header>
        <Segment>
          <TextWidget
            id="default_to"
            title={intl.formatMessage(messages.default_to)}
            required={true}
            value={data.default_to}
            onChange={(name, value) => {
              onChangeBlock(block, {
                ...data,
                [name]: value,
              });
            }}
          />
          <TextWidget
            id="default_from"
            title={intl.formatMessage(messages.default_from)}
            description={intl.formatMessage(messages.default_from_description)}
            required={true}
            value={data.default_from}
            onChange={(name, value) => {
              onChangeBlock(block, {
                ...data,
                [name]: value,
              });
            }}
          />

          <TextWidget
            id="default_subject"
            title={intl.formatMessage(messages.default_subject)}
            required={true}
            value={data.default_subject}
            onChange={(name, value) => {
              onChangeBlock(block, {
                ...data,
                [name]: value,
              });
            }}
          />
          <TextWidget
            id="submit_label"
            title={intl.formatMessage(messages.submit_label)}
            required={false}
            value={data.submit_label}
            onChange={(name, value) => {
              onChangeBlock(block, {
                ...data,
                [name]: value,
              });
            }}
          />

          <CheckboxWidget
            id="save_persistent_data"
            title={intl.formatMessage(messages.save_persistent_data)}
            required={false}
            value={data.save_persistent_data ?? false}
            onChange={(name, value) => {
              onChangeBlock(block, {
                ...data,
                [name]: value,
              });
            }}
          />
          <CheckboxWidget
            id="send_email"
            title={intl.formatMessage(messages.send_email)}
            required={false}
            value={data.send_email ?? false}
            onChange={(name, value) => {
              onChangeBlock(block, {
                ...data,
                [name]: value,
              });
            }}
          />
        </Segment>
        <Accordion fluid styled className="form">
          {data.subblocks &&
            data.subblocks.map((subblock, index) => {
              return (
                <div key={'subblock' + index}>
                  <Accordion.Title
                    active={selected === index}
                    index={index}
                    onClick={() =>
                      setSelected(selected === index ? null : index)
                    }
                  >
                    {subblock.label ?? subblock.field_name}
                    {selected === index ? (
                      <Icon name={upSVG} size="20px" />
                    ) : (
                      <Icon name={downSVG} size="20px" />
                    )}
                  </Accordion.Title>
                  <Accordion.Content active={selected === index}>
                    <TextWidget
                      id="label"
                      title={intl.formatMessage(messages.field_label)}
                      required={true}
                      value={subblock.label}
                      onChange={(name, value) => {
                        onChangeSubBlock(index, {
                          ...subblock,
                          [name]: value,
                        });
                      }}
                    />
                    <TextWidget
                      id="description"
                      title={intl.formatMessage(messages.field_description)}
                      value={subblock.description}
                      onChange={(name, value) => {
                        onChangeSubBlock(index, {
                          ...subblock,
                          [name]: value,
                        });
                      }}
                    />

                    <SelectWidget
                      id="field_type"
                      title={intl.formatMessage(messages.field_type)}
                      required={true}
                      value={subblock.field_type || ''}
                      onChange={(name, value) => {
                        var update_values = {};
                        if (
                          ['select', 'radio', 'checkbox'].indexOf(value) < 0
                        ) {
                          update_values.input_values = null;
                        }
                        onChangeSubBlock(index, {
                          ...subblock,
                          [name]: value,
                          ...update_values,
                        });
                      }}
                      choices={[
                        ['text', intl.formatMessage(messages.field_type_text)],
                        [
                          'textarea',
                          intl.formatMessage(messages.field_type_textarea),
                        ],
                        [
                          'select',
                          intl.formatMessage(messages.field_type_select),
                        ],
                        [
                          'radio',
                          intl.formatMessage(messages.field_type_radio),
                        ],
                        [
                          'checkbox',
                          intl.formatMessage(messages.field_type_checkbox),
                        ],
                        ['date', intl.formatMessage(messages.field_type_date)],
                        [
                          'attachment',
                          intl.formatMessage(messages.field_type_attachment),
                        ],
                        ['from', intl.formatMessage(messages.field_type_from)],
                      ]}
                    />

                    {['select', 'radio', 'checkbox'].indexOf(
                      subblock.field_type,
                    ) >= 0 && (
                      <ArrayWidget
                        id="input_values"
                        title={intl.formatMessage(messages.field_input_values)}
                        onChange={(name, value) => {
                          onChangeSubBlock(index, {
                            ...subblock,
                            [name]: value,
                          });
                        }}
                        required={true}
                        value={subblock.input_values}
                      />
                    )}

                    <CheckboxWidget
                      id="required"
                      title={intl.formatMessage(messages.field_required)}
                      value={subblock.required ? subblock.required : false}
                      onChange={(name, value) => {
                        onChangeSubBlock(index, {
                          ...subblock,
                          [name]: value,
                        });
                      }}
                    />
                  </Accordion.Content>
                </div>
              );
            })}
        </Accordion>
      </Segment.Group>
    </Form>
  );
};

Sidebar.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  block: PropTypes.string,
  onChangeBlock: PropTypes.func,
  selected: PropTypes.any,
  setSelected: PropTypes.func,
};

export default injectIntl(Sidebar);
