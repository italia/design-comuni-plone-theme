import { defineMessages } from 'react-intl';

const dgfieldValidationMessages = defineMessages({
  timeline_tempi_scadenze_validation_error: {
    id: 'timeline_tempi_scadenze_validation_error',
    defaultMessage:
      'Impossibile aggiungere un elemento alla timeline senza aver compilato il campo "Titolo"',
  },
});

export const CUSTOM_DGFIELD_VALIDATION = {
  timeline_tempi_scadenze: {
    isValid: (value, itemObj, intlFunc) => {
      const isValid = value.every((val, i) => val.milestone);
      return !isValid
        ? intlFunc(
            dgfieldValidationMessages.timeline_tempi_scadenze_validation_error,
          )
        : null;
    },
  },
};

// Obbligati a far cosi' perche' il backend non è abbastanza furbo da definire
// una specifica factory non innestata o field.widget ofield.type per dgf e
// invece fornisce solo un generico "List" o "array", che avrebbe
// un'altra validazione in Volto.
export const realWidgetType = (field, fieldId) => {
  return field?.widgetOptions?.frontendOptions?.widget === 'data_grid'
    ? fieldId
    : field.widget || field.type;
};

export const getSpecificDataGridFieldValidation = (fieldId) => {
  return fieldId && CUSTOM_DGFIELD_VALIDATION.hasOwnProperty(fieldId)
    ? Object.keys(CUSTOM_DGFIELD_VALIDATION[fieldId])
    : [];
};
