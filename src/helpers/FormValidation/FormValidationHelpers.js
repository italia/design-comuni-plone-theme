import { isEmpty, filter } from 'lodash';

export const blocksFieldIsEmpty = (field) => {
  return (
    filter(field?.blocks, (block) => {
      if (block?.['@type'] === 'text') {
        return !!block?.text?.blocks?.filter((block) => !!block.text.trim())
          ?.length;
      }
      if (block?.['@type'] === 'table') {
        return (
          // se non ci sono righe che hanno almeno una cella che contenga testo
          !!block?.table?.rows?.filter(
            (row) =>
              row?.cells?.filter(
                (cell) =>
                  cell?.value?.blocks?.filter((block) => !!block?.text?.trim())
                    ?.length > 0,
              )?.length > 0,
          )?.length
        );
      }
      return false;
    })?.length === 0
  );
};

const removeRequiredField = (fields, fieldId) =>
  fields?.splice(
    fields?.findIndex((f) => f === fieldId),
    1,
  );

const fieldIsRequired = (fields, fieldId) => fields?.some((f) => f === fieldId);

/**
 * Validates form of Servizio CT
 * @param {object} schema schema
 * @param {object} formData formData values
 * @param {object} touchedField contains info on touched fields
 * @param {Array} fields required fields reference to update
 */
export const serviceFormValidationHelper = (
  schema,
  formData,
  touchedField,
  fields,
) => {
  if (schema.title !== 'Servizio') return;

  // Custom: Situazione custom per stato del servizio
  if (
    formData.stato_servizio &&
    (isEmpty(touchedField) || 'motivo_stato_servizio' in touchedField)
  ) {
    fields.push('motivo_stato_servizio');
  }
  // Nessun campo tra canale fisico, canale digitale e link al canale
  // digitale e' stato compilato
  if (
    blocksFieldIsEmpty(formData.canale_digitale) &&
    blocksFieldIsEmpty(touchedField?.canale_digitale) &&
    isEmpty(formData.canale_digitale_link) &&
    isEmpty(touchedField?.canale_digitale_link) &&
    isEmpty(formData.canale_fisico) &&
    isEmpty(touchedField?.canale_fisico)
  ) {
    fields.push('canale_digitale');
    fields.push('canale_digitale_link');
    fields.push('canale_fisico');
  }
  // Canale digitale compilato ma non il link allo stesso
  else if ('canale_digitale' in touchedField) {
    if (!isEmpty(formData.canale_fisico)) {
      removeRequiredField(fields, 'canale_fisico');
      removeRequiredField(fields, 'canale_digitale');
      removeRequiredField(fields, 'canale_digitale_link');
    } else if (
      isEmpty(formData.canale_digitale_link) ||
      !formData.canale_digitale_link
    ) {
      !fieldIsRequired(fields, 'canale_digitale_link') &&
        fields.push('canale_digitale_link');
      fieldIsRequired(fields, 'canale_fisico') &&
        removeRequiredField(fields, 'canale_fisico');
    }
    if (
      blocksFieldIsEmpty(touchedField.canale_digitale) &&
      !isEmpty(formData.canale_digitale_link)
    )
      fields.push('canale_digitale');
  }
  // Link al canale digitale compilato ma non il testo descrittivo
  else if ('canale_digitale_link' in touchedField) {
    if (blocksFieldIsEmpty(formData.canale_digitale))
      !fieldIsRequired(fields, 'canale_digitale') &&
        fields.push('canale_digitale');
    if (isEmpty(touchedField?.canale_digitale_link))
      fields.push('canale_digitale_link');
    else removeRequiredField(fields, 'canale_fisico');
  }
  // Canale fisico e' stato compilato, rimuovo gli altri due
  else if ('canale_fisico' in touchedField) {
    if (!isEmpty(touchedField.canale_fisico)) {
      fieldIsRequired(fields, 'canale_digitale') &&
        removeRequiredField(fields, 'canale_digitale');
      fieldIsRequired(fields, 'canale_digitale_link') &&
        removeRequiredField(fields, 'canale_digitale_link');
    } else {
      if (
        !blocksFieldIsEmpty(formData.canale_digitale) &&
        isEmpty(formData.canale_digitale_link)
      )
        fields.push('canale_digitale_link');
      else if (
        blocksFieldIsEmpty(formData.canale_digitale) &&
        !isEmpty(formData.canale_digitale_link)
      )
        fields.push('canale_digitale');
      else {
        fields.push('canale_digitale');
        fields.push('canale_digitale_link');
        fields.push('canale_fisico');
        // fix brutto ma efficace perche' formData non si aggiorna in tempo
        // reale con il widget objectBrowser
        formData.canale_fisico = [];
      }
    }
  } else if (isEmpty(touchedField)) {
    if (!isEmpty(formData.canale_fisico)) {
      fieldIsRequired(fields, 'canale_digitale') &&
        removeRequiredField(fields, 'canale_digitale');
      fieldIsRequired(fields, 'canale_digitale_link') &&
        removeRequiredField(fields, 'canale_digitale_link');
    } else {
      if (
        !blocksFieldIsEmpty(formData.canale_digitale) &&
        isEmpty(formData.canale_digitale_link)
      )
        fields.push('canale_digitale_link');
      else if (
        blocksFieldIsEmpty(formData.canale_digitale) &&
        !isEmpty(formData.canale_digitale_link)
      )
        fields.push('canale_digitale');
      else if (
        !blocksFieldIsEmpty(formData.canale_digitale) &&
        !isEmpty(formData.canale_digitale_link)
      ) {
        fieldIsRequired(fields, 'canale_digitale') &&
          removeRequiredField(fields, 'canale_digitale');
        fieldIsRequired(fields, 'canale_digitale_link') &&
          removeRequiredField(fields, 'canale_digitale_link');
        fieldIsRequired(fields, 'canale_fisico') &&
          removeRequiredField(fields, 'canale_fisico');
      } else {
        fields.push('canale_digitale');
        fields.push('canale_digitale_link');
        fields.push('canale_fisico');
        // fix brutto ma efficace perche' formData non si aggiorna in tempo
        // reale con il widget objectBrowser
        formData.canale_fisico = [];
      }
    }
  }

  // Custom: Situazione custom per timeline tempi e scadenze del servizio
  // if (
  //   formData.timeline_tempi_scadenze &&
  //   (isEmpty(touchedField) || 'timeline_tempi_scadenze' in touchedField)
  // ) {
  //   fields.push('timeline_tempi_scadenze');
  // }
};
