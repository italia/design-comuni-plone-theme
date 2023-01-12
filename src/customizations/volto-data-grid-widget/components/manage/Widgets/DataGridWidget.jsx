/* CUSTOMIZATIONS:
  NON CUSTOMIZZABILE DIRETTAMENTE PERCHE' L'ADDON BASE E' FATTO MALE. IMPORTATO
  DA QUI IN widgets.js
  - Add custom classname for required fields, they are not working
  in this widget because fields are not wrapped with standard form field wrapper

*/

import React, { useState, useEffect } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { FormFieldWrapper, Field } from '@plone/volto/components';
import { Grid, Button } from 'semantic-ui-react';
import 'volto-data-grid-widget/components/manage/Widgets/data-grid-widget.less';

const messages = defineMessages({
  addTerm: {
    id: 'data_grid_widget_add_term',
    defaultMessage: 'Add term',
  },
  deleteTerm: {
    id: 'data_grid_widget_remove_term',
    defaultMessage: 'Remove term',
  },
});

const defaultItem = {};

const defaultSchema = {
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: [],
    },
  ],
  properties: {},
  required: [],
};

const DataGridWidget = (props) => {
  const intl = useIntl();
  const { value, id, onChange, items = defaultSchema } = props; //, required, title, description
  const schema = items;
  const [values, setValues] = useState([]);

  useEffect(() => {
    setValues(value?.length > 0 ? value : [{ ...defaultItem }]);
  }, [value, value?.length]);

  const handleChangeConfiguration = (v) => {
    onChange(id, v);
  };

  const onChangeTerm = (index, field, value) => {
    let newValues = [...values];
    newValues[index][field] = value;
    handleChangeConfiguration(newValues);
  };

  const addTerm = () => {
    let newValues = [...values, { ...defaultItem }];
    setValues(newValues);
  };
  const deleteTerm = (index) => {
    let newValues = [...values];
    newValues.splice(index, 1);

    handleChangeConfiguration(newValues);
  };

  return (
    <FormFieldWrapper {...props}>
      <div className="data-grid-widget">
        {schema && (
          <Grid verticalAlign="middle" stackable columns="equal">
            {values?.map((term, index) => (
              <Grid.Row key={index}>
                {schema.fieldsets.map((fieldset) => {
                  return fieldset.fields.map((field) => (
                    <Grid.Column className="field-column" key={field}>
                      {/* Add custom classname for required fields */}
                      <label
                        htmlFor={'field-' + field}
                        className={
                          schema.required.includes(field) ? 'required' : ''
                        }
                      >
                        {schema.properties[field].title}
                      </label>

                      <Field
                        {...schema.properties[field]}
                        id={field}
                        fieldSet={fieldset.title.toLowerCase()}
                        formData={term}
                        focus={false}
                        value={term[field]}
                        required={schema.required.includes(field)}
                        onChange={(id, value) => onChangeTerm(index, id, value)}
                        key={field}
                        wrapped={false}
                        placeholder={schema.properties[field].title}
                      />

                      <p className="help">
                        {schema.properties[field].description}
                      </p>
                    </Grid.Column>
                  ));
                })}
                <Grid.Column width={1} className="term-actions">
                  <Button
                    icon="trash"
                    negative
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      deleteTerm(index);
                    }}
                    className="delete-term"
                    title={intl.formatMessage(messages.deleteTerm)}
                    size="mini"
                  />
                </Grid.Column>
              </Grid.Row>
            ))}
            <Grid.Row className="bottom-buttons">
              <Grid.Column textAlign="center">
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addTerm();
                  }}
                  primary
                  size="mini"
                >
                  {intl.formatMessage(messages.addTerm)}
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        )}
      </div>
    </FormFieldWrapper>
  );
};

export default DataGridWidget;
