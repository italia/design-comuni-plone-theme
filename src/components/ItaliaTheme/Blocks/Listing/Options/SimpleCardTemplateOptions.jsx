/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  SelectWidget,
  CheckboxWidget,
  TextWidget,
  ObjectBrowserWidget,
} from '@plone/volto/components';
import { defineMessages, useIntl } from 'react-intl';
import DefaultOptions from '@italia/components/ItaliaTheme/Blocks/Listing/Options/DefaultOptions';

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

export const SimpleCardTemplateAppearance_COMPACT = 'compact';

const SimpleCardTemplateOptions = (props) => {
  const { data, block, onChangeBlock } = props;
  const intl = useIntl();

  const getDefaultValue = (field, data) => {
    switch (field) {
      case 'show_icon':
        return data.show_icon === undefined ? true : data.show_icon;
      case 'show_section':
        return data.show_section === undefined
          ? data.appearance !== SimpleCardTemplateAppearance_COMPACT
            ? true
            : false
          : data.show_section;
      case 'show_description':
        return data.show_description === undefined
          ? data.appearance !== SimpleCardTemplateAppearance_COMPACT
            ? true
            : false
          : data.show_description;
      default:
        return undefined;
    }
  };

  const setDefaults = () => {
    onChangeBlock(block, {
      ...data,
      show_icon: getDefaultValue('show_icon', data),
      show_section: getDefaultValue('show_section', data),
      show_description: getDefaultValue('show_description', data),
    });
  };

  // useEffect(() => {
  //   console.log('init');
  //   setDefaults();
  // }, []);

  useEffect(() => {
    setDefaults();
  }, [data.appearance]);

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
      <SelectWidget
        id="appearance"
        title={intl.formatMessage(messages.appearance)}
        required={false}
        description={intl.formatMessage(
          messages.simplecard_listing_appearance_description,
        )}
        value={data.appearance || ''}
        onChange={(id, value) => {
          onChangeBlock(block, {
            ...data,
            [id]: value,
          });
        }}
        choices={[
          [
            SimpleCardTemplateAppearance_COMPACT,
            intl.formatMessage(messages.simplecard_listing_appearance_compact),
          ],
        ]}
      />
      <DefaultOptions {...props} />

      <CheckboxWidget
        id="show_icon"
        title={intl.formatMessage(messages.show_icon)}
        value={getDefaultValue('show_icon', data)}
        onChange={(id, value) => {
          onChangeBlock(block, {
            ...data,
            [id]: value,
          });
        }}
      />
      {data.appearance !== SimpleCardTemplateAppearance_COMPACT && (
        <CheckboxWidget
          id="hide_dates"
          title={intl.formatMessage(messages.hide_dates)}
          value={data.hide_dates ? data.hide_dates : false}
          onChange={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }}
        />
      )}
      {data.appearance !== SimpleCardTemplateAppearance_COMPACT && (
        <CheckboxWidget
          id="show_section"
          title={intl.formatMessage(messages.show_section)}
          value={getDefaultValue('show_section', data)}
          onChange={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }}
        />
      )}
      {data.appearance !== SimpleCardTemplateAppearance_COMPACT && (
        <CheckboxWidget
          id="show_description"
          title={intl.formatMessage(messages.show_description)}
          value={getDefaultValue('show_description', data)}
          onChange={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }}
        />
      )}
      {data.appearance !== SimpleCardTemplateAppearance_COMPACT && (
        <>
          <CheckboxWidget
            id="show_detail_link"
            title={intl.formatMessage(messages.show_detail_link)}
            value={data.show_detail_link ? data.show_detail_link : false}
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
      )}
      {data.appearance !== SimpleCardTemplateAppearance_COMPACT && (
        <>
          <CheckboxWidget
            id="show_path_filters"
            title={intl.formatMessage(messages.show_path_filters)}
            value={data.show_path_filters ? data.show_path_filters : false}
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
                    {intl.formatMessage(messages.path_filter_filter)} {i + 1}
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
      )}
    </>
  );
};

SimpleCardTemplateOptions.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
};

export default SimpleCardTemplateOptions;
