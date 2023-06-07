/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import {
  CheckboxWidget,
  TextWidget,
  ObjectBrowserWidget,
} from '@plone/volto/components';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  show_path_filters: {
    id: 'Mostra i filtri per percorso',
    defaultMessage: 'Mostra i filtri per percorso',
  },
  path_filter_label: {
    id: 'Etichetta path filter',
    defaultMessage: 'Etichetta',
  },
  path_filter_path: {
    id: 'Percorso path filter',
    defaultMessage: 'Percorso',
  },
  path_filter_filter: {
    id: 'Path filter filtro',
    defaultMessage: 'Filtro',
  },
});

const PathFiltersWidget = (props) => {
  const intl = useIntl();
  const { id, title, value, onChange, formData = {} } = props;

  useEffect(() => {
    if (!value) {
      onChange('path_filters', {});
    }
  }, [value]);

  return (
    <>
      <CheckboxWidget
        id={id}
        title={title}
        value={value}
        onChange={(id, value) => {
          onChange(id, value);
        }}
      />
      {value && (
        <>
          {[0, 1, 2, 3, 4].map((i) => (
            <div className="path-filter-widget">
              <div className="filter-title">
                {intl.formatMessage(messages.path_filter_filter)} {i + 1}
              </div>
              <TextWidget
                id="label"
                title={intl.formatMessage(messages.path_filter_label)}
                required={false}
                value={formData.path_filters?.[i]?.label}
                onChange={(name, value) => {
                  let path_filters = formData.path_filters
                    ? JSON.parse(JSON.stringify(formData.path_filters))
                    : {};
                  path_filters[i] = {
                    ...(path_filters[i] || {}),
                    [name]: value,
                  };
                  onChange('path_filters', path_filters);
                }}
              />
              <ObjectBrowserWidget
                id="path"
                title={intl.formatMessage(messages.path_filter_path)}
                required={false}
                mode={'link'}
                value={formData.path_filters?.[i]?.path}
                onChange={(name, value) => {
                  let path_filters = formData.path_filters
                    ? JSON.parse(JSON.stringify(formData.path_filters))
                    : {};
                  path_filters[i] = {
                    ...(path_filters[i] || {}),
                    [name]: value,
                  };
                  onChange('path_filters', path_filters);
                }}
              />
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default PathFiltersWidget;
