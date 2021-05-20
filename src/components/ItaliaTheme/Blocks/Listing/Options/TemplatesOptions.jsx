/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

import {
  CheckboxWidget,
  TextWidget,
  ObjectBrowserWidget,
} from '@plone/volto/components';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  appearance: {
    id: 'Aspetto',
    defaultMessage: 'Aspetto',
  },
  simplecard_listing_appearance_description: {
    id: 'simplecard_listing_appearance_description',
    defaultMessage:
      "Qui puoi selezionare, per il template 'Card semplice', un aspetto diverso da quello di default.",
  },
  simplecard_listing_appearance_compact: {
    id: 'simplecard_listing_appearance_compact',
    defaultMessage: 'Compatto',
  },
  title: {
    id: 'Titolo',
    defaultMessage: 'Titolo',
  },
  show_icon: {
    id: 'show_icon',
    defaultMessage: "Mostra l'icona",
  },
  hide_dates: {
    id: 'hide_dates',
    defaultMessage: 'Nascondi le date',
  },
  show_section: {
    id: 'show_section',
    defaultMessage: 'Mostra la sezione',
  },
  show_type: {
    id: 'show_type',
    defaultMessage: 'Mostra il tipo',
  },
  show_description: {
    id: 'show_description',
    defaultMessage: 'Mostra la descrizione',
  },
  show_detail_link: {
    id: 'show_detail_link',
    defaultMessage: 'Mostra il link al dettaglio',
  },
  detail_link_label: {
    id: 'detail_link_label',
    defaultMessage: 'Testo per il link al dettaglio',
  },
  show_block_bg: {
    id: 'Mostra lo sfondo del blocco',
    defaultMessage: 'Mostra lo sfondo del blocco',
  },
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

const TemplatesOptions = (props) => {
  const intl = useIntl();
  const { fields, fieldsConfig = {}, block, onChangeBlock, data } = props;
  /*
  fields={nome_campo:{default:default_value,label:label}}
  */

  const getDefaultValue = (field, data) => {
    return data[field] === undefined
      ? fieldsConfig[field]?.default ?? true
      : data[field];
  };

  const setDefaults = () => {
    const defaults = {};
    fields.forEach((f) => {
      defaults[f] = getDefaultValue(f, data);
    });

    onChangeBlock(block, {
      ...data,
      ...defaults,
    });
  };

  useEffect(() => {
    setDefaults();
  }, []);

  useEffect(() => {
    if (!data.show_path_filters) {
      onChangeBlock(block, {
        ...data,
        path_filters: {},
      });
    }
  }, [data.show_path_filters]);

  return (
    <>
      {fields.map((f) => {
        if (f === 'show_detail_link') {
          return (
            <>
              <CheckboxWidget
                id="show_detail_link"
                title={
                  fieldsConfig[f]?.label ??
                  intl.formatMessage(messages.show_detail_link)
                }
                value={data.show_detail_link ?? getDefaultValue(f, data)}
                onChange={(id, value) => {
                  onChangeBlock(block, {
                    ...data,
                    [id]: value,
                  });
                }}
              />

              {data.show_detail_link && (
                <TextWidget
                  id="detail_link_label"
                  title={intl.formatMessage(messages.detail_link_label)}
                  required={false}
                  value={data.detail_link_label}
                  onChange={(name, value) => {
                    onChangeBlock(block, {
                      ...data,
                      [name]: value,
                    });
                  }}
                />
              )}
            </>
          );
        } else if (f === 'show_path_filters') {
          return (
            <>
              <CheckboxWidget
                id="show_path_filters"
                title={
                  fieldsConfig[f]?.label ??
                  intl.formatMessage(messages.show_path_filters)
                }
                value={data.show_path_filters ?? getDefaultValue(f, data)}
                onChange={(id, value) => {
                  onChangeBlock(block, {
                    ...data,
                    [id]: value,
                  });
                }}
              />

              {data.show_path_filters && (
                <>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div className="path-filter-widget">
                      <div className="filter-title">
                        {intl.formatMessage(messages.path_filter_filter)}{' '}
                        {i + 1}
                      </div>
                      <TextWidget
                        id="label"
                        title={intl.formatMessage(messages.path_filter_label)}
                        required={false}
                        value={data.path_filters?.[i]?.label}
                        onChange={(name, value) => {
                          let path_filters = data.path_filters
                            ? JSON.parse(JSON.stringify(data.path_filters))
                            : {};
                          path_filters[i] = {
                            ...(path_filters[i] || {}),
                            [name]: value,
                          };
                          onChangeBlock(block, {
                            ...data,
                            path_filters: path_filters,
                          });
                        }}
                      />
                      <ObjectBrowserWidget
                        id="path"
                        title={intl.formatMessage(messages.path_filter_path)}
                        required={false}
                        mode={'link'}
                        value={data.path_filters?.[i]?.path}
                        onChange={(name, value) => {
                          let path_filters = data.path_filters
                            ? JSON.parse(JSON.stringify(data.path_filters))
                            : {};
                          path_filters[i] = {
                            ...(path_filters[i] || {}),
                            [name]: value,
                          };
                          onChangeBlock(block, {
                            ...data,
                            path_filters: path_filters,
                          });
                        }}
                      />
                    </div>
                  ))}
                </>
              )}
            </>
          );
        } else {
          return (
            <>
              <CheckboxWidget
                id={f}
                title={
                  fieldsConfig[f]?.label
                    ? fieldsConfig[f]?.label
                    : messages[f]
                    ? intl.formatMessage(messages[f])
                    : f
                }
                value={data[f] ?? getDefaultValue(f, data)}
                onChange={(id, value) => {
                  onChangeBlock(block, {
                    ...data,
                    [id]: value,
                  });
                }}
              />
            </>
          );
        }
      })}
    </>
  );
};

export default TemplatesOptions;
