import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { TextWidget, SelectWidget } from '@plone/volto/components';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';
import { FontAwesomeIcon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import IconPreviewWidget from 'design-comuni-plone-theme/components/ItaliaTheme/manage/Widgets/IconPreviewWidget';

const messages = defineMessages({
  icon: {
    id: 'icon',
    defaultMessage: 'Icona',
  },
  description: {
    id: 'iconDescription',
    defaultMessage:
      'Puoi selezionare un’icona fra quelle proposte nel menu a tendina oppure puoi scrivere/incollare nel campo di testo il nome di un’icona di fontawesome 5',
  },
});

const IconWidget = ({ id, value, defaultOptions, onChange, reactSelect }) => {
  const intl = useIntl();
  const [iconString, setIconString] = useState(value);
  const [selectValue, setSelectValue] = useState(value);

  const { Option } = reactSelect.components;
  const CustomSelectOption = (props) => {
    return (
      <Option {...props}>
        {props.data.value !== 'no-value' && (
          <span className="icon-container">
            <FontAwesomeIcon icon={props.data.value} size="1x" />
          </span>
        )}
        <span className="label-container">{props.data.label}</span>
      </Option>
    );
  };

  return (
    <div className="select-icon-widget">
      {defaultOptions && defaultOptions.length > 0 && (
        <SelectWidget
          id="selectIcon"
          title={intl.formatMessage(messages.icon)}
          required={false}
          value={selectValue}
          intl={intl}
          onChange={(_id, value) => {
            setSelectValue(value);
            setIconString(value);
            onChange(id, value);
          }}
          choices={defaultOptions}
          customOptionStyling={CustomSelectOption}
        />
      )}
      <TextWidget
        id="ArgumentsTitle"
        title=""
        value={iconString}
        onChange={(name, value) => {
          setSelectValue(null);
          setIconString(value);
          onChange(id, value);
        }}
      />
      <IconPreviewWidget icon={iconString}>
        {intl.formatMessage(messages.description)}
        <span className="ms-4">
          <a
            target="_blank"
            href="https://fontawesome.com/icons?d=gallery"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={'arrow-right'} />
          </a>
        </span>
      </IconPreviewWidget>
    </div>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
IconWidget.propTypes = {
  onChange: PropTypes.func,
};

export default injectLazyLibs('reactSelect')(IconWidget);
