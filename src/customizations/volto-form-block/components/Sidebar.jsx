// CUSTOMIZATION:
// - 112-113 reset subscription limit to default when set_limit is not active

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Segment, Accordion, Form } from 'semantic-ui-react';
import { defineMessages, useIntl, FormattedMessage } from 'react-intl';

import Icon from '@plone/volto/components/theme/Icon/Icon';

import upSVG from '@plone/volto/icons/up-key.svg';
import downSVG from '@plone/volto/icons/down-key.svg';

import config from '@plone/volto/registry';

import { setSubblocksIDList } from 'volto-form-block/actions';

import { BlockDataForm } from '@plone/volto/components';
import { getFieldName } from 'volto-form-block/components/utils';
import SidebarDataActions from 'volto-form-block/components/SidebarDataActions';

import 'volto-form-block/components/Sidebar.css';

const messages = defineMessages({
  fieldId: {
    id: 'fieldId',
    defaultMessage: 'Field ID',
  },
  remove_data_cron_info: {
    id: 'remove_data_cron_info',
    defaultMessage:
      'To automate the removal of records that have exceeded the maximum number of days indicated in configuration, a cron must be set up on the server as indicated in the product documentation.',
  },
  remove_data_warning: {
    id: 'remove_data_warning',
    defaultMessage:
      'There are {record} record that have exceeded the maximum number of days.',
  },
  remove_data_button: {
    id: 'remove_data_button',
    defaultMessage: 'remove expired data',
  },
});

const Sidebar = ({
  data,
  properties,
  block,
  onChangeBlock,
  onChangeSubBlock,
  selected = 0,
  setSelected,
}) => {
  const intl = useIntl();
  const dispatch = useDispatch();

  if (data.send_email === undefined) data.send_email = true;

  // reset subscription limit to default when set_limit is not active
  if (data.set_limit === false) data.limit = -1;

  data.subblocks &&
    data.subblocks.forEach((subblock) => {
      subblock.field_id = subblock.id;
    });
  var FormSchema = config.blocks.blocksConfig.form.formSchema;
  var FieldSchema = config.blocks.blocksConfig.form.fieldSchema;

  // update list of fields ID
  useEffect(() => {
    if (data.subblocks?.length > 0) {
      dispatch(setSubblocksIDList(data.subblocks));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const datatableEnabled = config.blocks.blocksConfig.form.enableDatatableView;

  return (
    <Form>
      <Segment.Group raised>
        <header className="header pulled">
          <h2>
            <FormattedMessage id="Form" defaultMessage="Form" />
          </h2>
        </header>
        <Segment>
          <BlockDataForm
            schema={FormSchema(data)}
            onChangeField={(id, value) => {
              onChangeBlock(block, {
                ...data,
                [id]: value,
              });
            }}
            formData={data}
            onChangeBlock={() => {}}
            block={block}
          />
          {!datatableEnabled && (
            <SidebarDataActions
              properties={properties}
              block={block}
              data={data}
            />
          )}
        </Segment>
        <Accordion fluid styled className="form">
          {data.subblocks &&
            data.subblocks.map((subblock, index) => {
              const subblockData = {
                ...subblock,
                [`required-${subblock.field_id}`]: subblock.required,
                [`unique-${subblock.field_id}`]: subblock.unique,
              };

              return (
                <div key={'subblock' + subblock.id}>
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
                    {/* Field ID info */}
                    {(subblock.field_type === 'text' ||
                      subblock.field_type === 'from' ||
                      subblock.field_type === 'textarea' ||
                      subblock.field_type === 'date' ||
                      subblock.field_type === 'single_choice' ||
                      subblock.field_type === 'multiple_choice' ||
                      subblock.field_type === 'select' ||
                      subblock.field_type === 'checkbox' ||
                      subblock.field_type === 'attachment') && (
                      <Segment tertiary>
                        {intl.formatMessage(messages.fieldId)}:{' '}
                        <strong>
                          {getFieldName(subblock.label, subblock.field_id)}
                        </strong>
                      </Segment>
                    )}
                    <BlockDataForm
                      schema={FieldSchema(subblock)}
                      onChangeField={(name, value) => {
                        let key = name;
                        const update_values = {};
                        if (subblock.field_type === 'static_text') {
                          update_values.required = false;
                        }
                        if (
                          name === `required-${subblock.field_id}` ||
                          name === `unique-${subblock.field_id}`
                        ) {
                          key = name.split('-')[0];
                        }
                        onChangeSubBlock(index, {
                          ...subblock,
                          [key]: value,
                          ...update_values,
                        });
                      }}
                      formData={subblockData}
                      onChangeBlock={() => {}}
                      block={block}
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

export default Sidebar;
