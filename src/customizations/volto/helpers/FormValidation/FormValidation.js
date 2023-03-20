/**
 * Customizzazione:
 * - gestione campi required di tipo blocks
 * - gestione motivo dello stato di servizio che è required solo se il servizio non è fruibile
 * - gestione campi tipo dataGridField
 * - gestione timeline_tempi_scadenze nel servizio che ha solo un campo richiesto su 5
 */
import { map, uniq, keys, intersection, isEmpty, filter } from 'lodash';
import { messages } from '@plone/volto/helpers/MessageLabels/MessageLabels';

/**
 * Will return the intl message if invalid
 * @param {boolean} isValid
 * @param {string} criterion
 * @param {string | number} valueToCompare can compare '47' < 50
 * @param {Function} intlFunc
 */
const validationMessage = (isValid, criterion, valueToCompare, intlFunc) =>
  !isValid
    ? intlFunc(messages[criterion], {
        len: valueToCompare,
      })
    : null;

/**
 * Returns if based on the criterion the value is lower or equal
 * @param {string | number} value can compare '47' < 50
 * @param {string | number} valueToCompare can compare '47' < 50
 * @param {string} maxCriterion
 * @param {Function} intlFunc
 */
const isMaxPropertyValid = (value, valueToCompare, maxCriterion, intlFunc) => {
  const isValid = valueToCompare !== undefined ? value <= valueToCompare : true;
  return validationMessage(isValid, maxCriterion, valueToCompare, intlFunc);
};

/**
 * Returns if based on the criterion the value is higher or equal
 * @param {string | number} value can compare '47' < 50
 * @param {string | number} valueToCompare can compare '47' < 50
 * @param {string} minCriterion
 * @param {Function} intlFunc
 */
const isMinPropertyValid = (value, valueToCompare, minCriterion, intlFunc) => {
  const isValid = valueToCompare !== undefined ? value >= valueToCompare : true;
  return validationMessage(isValid, minCriterion, valueToCompare, intlFunc);
};

const widgetValidation = {
  email: {
    isValidEmail: (emailValue, emailObj, intlFunc) => {
      // Email Regex taken from from WHATWG living standard:
      // https://html.spec.whatwg.org/multipage/input.html#e-mail-state-(type=email)
      const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      const isValid = emailRegex.test(emailValue);
      return !isValid ? intlFunc(messages.isValidEmail) : null;
    },
    minLength: (emailValue, emailObj, intlFunc) =>
      isMinPropertyValid(
        emailValue.length,
        emailObj.minLength,
        'minLength',
        intlFunc,
      ),
    maxLength: (emailValue, emailObj, intlFunc) =>
      isMaxPropertyValid(
        emailValue.length,
        emailObj.maxLength,
        'maxLength',
        intlFunc,
      ),
  },
  url: {
    isValidURL: (urlValue, urlObj, intlFunc) => {
      const urlRegex =
        /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?|^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([_.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?|^((http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gm;
      const isValid = urlRegex.test(urlValue);
      return !isValid ? intlFunc(messages.isValidURL) : null;
    },
    minLength: (urlValue, urlObj, intlFunc) =>
      isMinPropertyValid(
        urlValue.length,
        urlObj.minLength,
        'minLength',
        intlFunc,
      ),
    maxLength: (urlValue, urlObj, intlFunc) =>
      isMaxPropertyValid(
        urlValue.length,
        urlObj.maxLength,
        'maxLength',
        intlFunc,
      ),
  },
  password: {
    minLength: (passwordValue, passwordObj, intlFunc) =>
      isMinPropertyValid(
        passwordValue.length,
        passwordObj.minLength,
        'minLength',
        intlFunc,
      ),
    maxLength: (passwordValue, passwordObj, intlFunc) =>
      isMaxPropertyValid(
        passwordValue.length,
        passwordObj.maxLength,
        'maxLength',
        intlFunc,
      ),
  },
  string: {
    minLength: (value, itemObj, intlFunc) =>
      isMinPropertyValid(
        value.length,
        itemObj.minLength,
        'minLength',
        intlFunc,
      ),
    maxLength: (value, itemObj, intlFunc) =>
      isMaxPropertyValid(
        value.length,
        itemObj.maxLength,
        'maxLength',
        intlFunc,
      ),
  },
  number: {
    isNumber: (value, itemObj, intlFunc) => {
      const floatRegex = /^[+-]?\d+(\.\d+)?$/;
      const isValid = !isNaN(value) && floatRegex.test(value);
      return !isValid ? intlFunc(messages.isNumber) : null;
    },
    minimum: (value, itemObj, intlFunc) =>
      isMinPropertyValid(value, itemObj.minimum, 'minimum', intlFunc),
    maximum: (value, itemObj, intlFunc) =>
      isMaxPropertyValid(value, itemObj.maximum, 'maximum', intlFunc),
  },
  integer: {
    isInteger: (value, itemObj, intlFunc) => {
      const intRegex = /^-?[0-9]+$/;
      const isValid = !isNaN(value) && intRegex.test(value);
      return !isValid ? intlFunc(messages.isInteger) : null;
    },
    minimum: (value, itemObj, intlFunc) =>
      isMinPropertyValid(value, itemObj.minimum, 'minimum', intlFunc),
    maximum: (value, itemObj, intlFunc) =>
      isMaxPropertyValid(value, itemObj.maximum, 'maximum', intlFunc),
  },
};

/**
 * The string that comes my not be a valid JSON
 * @param {string} requestItem
 */
const tryParseJSON = (requestItem) => {
  let resultObj = null;
  try {
    resultObj = JSON.parse(requestItem);
  } catch (e) {
    try {
      resultObj = JSON.parse(requestItem.replace(/'/g, '"'));
    } catch (e) {
      resultObj = null;
    }
  }
  return resultObj;
};

/**
 * Returns errors if obj has unique Items
 * @param {Object} field
 * @param {*} fieldData
 * @returns {Object[string]} - list of errors
 */
const hasUniqueItems = (field, fieldData, formatMessage) => {
  const errors = [];
  if (
    field.uniqueItems &&
    fieldData &&
    uniq(fieldData).length !== fieldData.length
  ) {
    errors.push(formatMessage(messages.uniqueItems));
  }
  return errors;
};

/**
 * If required fields are undefined, return list of errors
 * @returns {Object[string]} - list of errors
 */
const validateRequiredFields = (
  schema,
  formData,
  formatMessage,
  touchedField,
) => {
  const errors = {};
  const fields = isEmpty(touchedField)
    ? // Custom: Serve creare una copia dei required
      // per poterlo modificare tre righe più giù
      schema.required.slice()
    : intersection(schema.required, keys(touchedField));

  // Custom: Situazione custom per stato del servizio
  if (
    formData.stato_servizio &&
    (isEmpty(touchedField) || 'motivo_stato_servizio' in touchedField)
  ) {
    fields.push('motivo_stato_servizio');
  }

  // Custom: Situazione custom per timeline tempi e scadenze del servizio
  // if (
  //   formData.timeline_tempi_scadenze &&
  //   (isEmpty(touchedField) || 'timeline_tempi_scadenze' in touchedField)
  // ) {
  //   fields.push('timeline_tempi_scadenze');
  // }

  map(fields, (requiredField) => {
    const type = schema.properties[requiredField]?.type;
    const widget = schema.properties[requiredField]?.widget;
    let isEmpty = !formData[requiredField];
    if (!isEmpty) {
      if (type === 'array') {
        // Custom: Supporto alla validazione dei campi DataGridField
        if (widget === 'data_grid') {
          const dgfFields = schema.properties[requiredField]?.items;
          const dgfRequiredFields = dgfFields?.required;
          const dgfData = formData[requiredField];
          isEmpty =
            dgfRequiredFields.filter((dgfRequiredField) =>
              dgfData.some((dgfField) => !!!dgfField[dgfRequiredField]),
            )?.length > 0;
        } else {
          isEmpty = formData[requiredField]
            ? formData[requiredField].length === 0
            : true;
        }
      } else if (type === 'string' && widget === 'richtext') {
        isEmpty = !(
          formData[requiredField]?.data?.replace(/(<([^>]+)>)/g, '').length > 0
        );
      } else if (type === 'dict' && widget === 'blocks') {
        // Custom: gestione del campo di tipo blocks
        const field = formData[requiredField];
        const firstBlock = field.blocks_layout?.items?.[0];
        isEmpty =
          // se non ci sono blocchi (improbabile)
          firstBlock === undefined ||
          // se non c'è alcun blocco di testo o tabella che contenga testo
          filter(field.blocks, (block) => {
            if (block['@type'] === 'text') {
              return !!block.text?.blocks.filter((block) => !!block.text.trim())
                .length;
            }
            if (block['@type'] === 'table') {
              return (
                // se non ci sono righe che hanno almeno una cella che contenga testo
                !!block.table.rows.filter(
                  (row) =>
                    row.cells.filter(
                      (cell) =>
                        cell.value.blocks.filter((block) => !!block.text.trim())
                          .length > 0,
                    ).length > 0,
                ).length
              );
            }
            return false;
          }).length === 0;
      }
    }
    if (
      schema.properties[requiredField] &&
      schema.properties[requiredField].type !== 'boolean' &&
      !schema.properties[requiredField].readonly &&
      isEmpty
    ) {
      errors[requiredField] = [];
      errors[requiredField].push(formatMessage(messages.required));
    }
  });

  return errors;
};
/**
 * Return list of errors if field constraints are not respected
 * (ex min, max, maxLength, email format, url format etc)
 * each potential criterion has a validation process in widgetValidation
 * !!ONLY fields with data will be tested (those undefined are ignored here)
 * @returns {Object[string]} - list of errors
 */
const validateFieldsPerFieldset = (
  schema,
  formData,
  formatMessage,
  touchedField,
) => {
  const errors = validateRequiredFields(
    schema,
    formData,
    formatMessage,
    touchedField,
  );

  map(schema.properties, (field, fieldId) => {
    const fieldWidgetType = field.widget || field.type;
    const widgetValidationCriteria = widgetValidation[fieldWidgetType]
      ? Object.keys(widgetValidation[fieldWidgetType])
      : [];
    let fieldData = formData[fieldId];
    // test each criterion ex maximum, isEmail, isUrl, maxLength etc
    const fieldErrors = widgetValidationCriteria
      .map((widgetCriterion) => {
        const errorMessage =
          fieldData === undefined || fieldData === null
            ? null
            : widgetValidation[fieldWidgetType][widgetCriterion](
                fieldData,
                field,
                formatMessage,
              );
        return errorMessage;
      })
      .filter((item) => !!item);

    const uniqueErrors = hasUniqueItems(field, fieldData, formatMessage);
    const mergedErrors = [...fieldErrors, ...uniqueErrors];

    if (mergedErrors.length > 0) {
      errors[fieldId] = [
        ...(errors[fieldId] || []),
        ...fieldErrors,
        ...uniqueErrors,
      ];
    }
  });

  return errors;
};

/**
 * Create the errors object from backend the same way it is done on Frontend validation
 * @param {string} requestError form the server
 * @returns {Object}
 */
const giveServerErrorsToCorrespondingFields = (requestError) => {
  let errorsList = tryParseJSON(requestError);
  const errors = {};

  if (Array.isArray(errorsList) && errorsList.length > 0) {
    errorsList.forEach((errorItem) => {
      errors[errorItem.field] = errors[errorItem.field]
        ? errors[errorItem.field].push(errorItem.message)
        : [errorItem.message];
    });
  }
  return errors;
};

/**
 * The first Fieldset (Tab) that has any errors
 * will be selected
 * @param {Object[]} errors
 * @param {string} errors[].field
 * @param {Object} schema
 * @returns {number} activeIndex
 */
const getIndexOfFirstTabWithErrors = (errors, schema) => {
  let activeIndex = 0;

  schema.fieldsets.some((fieldSet, index) => {
    let foundfield = fieldSet.fields.some((fieldId) => errors[fieldId]);

    activeIndex = foundfield ? index : activeIndex;
    return foundfield;
  });

  return activeIndex;
};

class FormValidation {
  /**
   * The first Fieldset (Tab) that has any errors
   * will be selected
   * @param {Object} errors
   * @param {Object} schema
   * @returns {number} activeIndex
   */
  static showFirstTabWithErrors({
    errors = {},
    schema = { properties: {}, fieldsets: [], required: [] },
  } = {}) {
    return getIndexOfFirstTabWithErrors(errors, schema);
  }
  /**
   * Create the errors object from backend the same way it is done on Frontend validation
   * @param {string} requestError form the server
   * @returns {Object}
   */
  static giveServerErrorsToCorrespondingFields(requestError = '') {
    return giveServerErrorsToCorrespondingFields(requestError);
  }
  /**
   * Return validation result
   * @param {Object} schema
   * @param {Object} formData
   * @param {function} formatMessage
   * @returns {Object} errors
   */
  static validateFieldsPerFieldset({
    schema = { properties: {}, fieldsets: [], required: [] },
    formData = {},
    formatMessage = () => {},
    touchedField = {},
  } = {}) {
    return validateFieldsPerFieldset(
      schema,
      formData,
      formatMessage,
      touchedField,
    );
  }
}

export default FormValidation;