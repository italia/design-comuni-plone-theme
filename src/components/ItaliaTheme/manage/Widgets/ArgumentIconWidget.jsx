import React, { useState} from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { TextWidget, SelectWidget } from '@plone/volto/components';
import { components } from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconPreviewWidget from '@italia/components/ItaliaTheme/manage/Widgets/IconPreviewWidget'

const messages = defineMessages({
  icon: {
    id: 'icon',
    defaultMessage: 'Icona',
  }
});

const IconWidget = ({
  id,
  value,
  onChange,
}) => {
  const intl = useIntl();
  const statusOptions = [
    [ "hand-holding-heart", "Anziano", "hand-holding-heart" ],
    [ "baby", "Fanciullo", "baby" ],
    [ "child", "Giovane", "child" ],
    [ "house-user", "Famiglia", "house-user" ],
    [ "user-graduate", "Studente", "user-graduate" ],
    [ "users", "Associazione", "users" ],
    [ "school", "Istruzione", "school" ],
    [ "home", "Abitazione", "home" ],
    [ "paw", "Animale domestico", "paw" ],
    [ "people-arrows", "Integrazione sociale", "people-arrows" ],
    [ "praying-hands", "Protezione sociale", "praying-hands" ],
    [ "file-alt", "Programma d'azione", "file-alt" ],
    [ "comments", "Comunicazione", "comments" ],
    [ "landmark", "Edificio urbano", "landmark" ],
    [ "city", "Urbanistica ed edilizia", "city" ],
    [ "microscope", "Formazione professionale", "microscope" ],
    [ "chalkboard-teacher", "Acquisizione di conoscenza", "chalkboard-teacher" ],
    [ "hard-hat", "Condizioni e organizzazione del lavoro", "hard-hat" ],
    [ "bus", "Trasporto", "bus" ],
    [ "heart", "Matrimonio", "heart" ],
    [ "person-booth", "Procedura elettorale e voto", "person-booth" ],
    [ "theater-masks", "Tempo libero", "theater-masks" ],
    [ "book", "Cultura", "book" ],
    [ "passport", "Immigrazione", "passport" ],
    [ "smog", "Inquinamento", "smog" ],
    [ "parking", "Area di parcheggio", "parking" ],
    [ "traffic-light", "Traffico urbano", "traffic-light" ],
    [ "water", "Acqua", "water" ],
    [ "recycle", "Gestione dei rifiuti", "recycle" ],
    [ "heartbeat", "Salute", "heartbeat" ],
    [ "user-shield", "Sicurezza pubblica", "user-shield" ],
    [ "globe-europe", "Sicurezza internazionale", "globe-europe" ],
    [ "tree", "Spazio verde", "tree" ],
    [ "volleyball-ball", "Sport", "volleyball-ball" ],
    [ "car", "Trasporto stradale", "car" ],
    [ "luggage-cart", "Turismo", "luggage-cart" ],
    [ "plug", "Energia", "plug" ],
    [ "laptop-code", "Informatica e trattamento dei dati", "laptop-code" ],
  ];

  const [iconString, setIconString] = useState(value);
  const [selectValue, setSelectValue] = useState(value);

  const { Option } = components
  const CustomSelectOption = (props) => {
    return (
    <Option {...props}>
      <span className="icon-container">
        <FontAwesomeIcon icon={props.data.icon} size="1x" />
      </span>
      <span className="label-container">{ props.data.label }</span>
    </Option>
  )}

  return (
    <div className="select-icon-widget">
      <SelectWidget
        id="selectIcon"
        title={intl.formatMessage(messages.icon)}
        required={false}
        description=""
        value={selectValue}
        intl={intl}
        onChange={(_id, value) => {
          setSelectValue(value)
          setIconString(value)
          onChange(id, value)
        }}
        choices={statusOptions}
        customOption={CustomSelectOption}
      />
      <TextWidget
        id="ArgumentsTitle"
        title=""
        value={iconString}
        onChange={(name, value) => {
          setSelectValue('None')
          setIconString(value)
          onChange(id, value)
        }}
      />
      <IconPreviewWidget
        icon={iconString}
      />
    </div>
  )
}

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
IconWidget.propTypes = {
  onChange: PropTypes.func,
};

export default IconWidget;
