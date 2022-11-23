/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import {
  CheckboxWidget,
  TextWidget,
  ObjectBrowserWidget,
} from '@plone/volto/components';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  show_location_filters: {
    id: 'Mostra i filtri per luogo',
    defaultMessage: 'Mostra i filtri per luogo',
  },
  location_filter_label: {
    id: 'Etichetta location filter',
    defaultMessage: 'Etichetta',
  },
  location_filter_location: {
    id: 'Luogo location filter',
    defaultMessage: 'Luogo',
  },
  location_filter_filter: {
    id: 'Filtro location filter',
    defaultMessage: 'Filtro',
  },
});

const LocationFiltersWidget = (props) => {
  const intl = useIntl();
  const { id, title, value, onChange, formData } = props;

  useEffect(() => {
    if (!value) {
      onChange('location_filters', {});
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
                {intl.formatMessage(messages.location_filter_filter)} {i + 1}
              </div>
              <TextWidget
                id="label"
                title={intl.formatMessage(messages.location_filter_label)}
                required={false}
                value={formData.location_filters?.[i]?.label}
                onChange={(name, value) => {
                  let location_filters = formData.location_filters
                    ? JSON.parse(JSON.stringify(formData.location_filters))
                    : {};
                  location_filters[i] = {
                    ...(location_filters[i] || {}),
                    [name]: value,
                  };
                  onChange('location_filters', location_filters);
                }}
              />
              <ObjectBrowserWidget
                id="location"
                title={intl.formatMessage(messages.location_filter_location)}
                required={false}
                mode={'link'}
                value={formData.location_filters?.[i]?.location}
                widgetOptions={{
                  pattern_options: { selectableTypes: ['Venue'] },
                }}
                onChange={(name, value) => {
                  let location_filters = formData.location_filters
                    ? JSON.parse(JSON.stringify(formData.location_filters))
                    : {};
                  location_filters[i] = {
                    ...(location_filters[i] || {}),
                    [name]: value,
                  };
                  onChange('location_filters', location_filters);
                }}
              />
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default LocationFiltersWidget;
