import React from 'react';
import { DatetimeWidget } from '@plone/volto/config/Widgets';

const ConditionallyRequiredDateWidget = (props) => {
  const { value, formData, onChange, id, title, required, ...rest } = props;

  // Check tipo di incarico in formData
  const tipoIncarico = formData?.tipologia_incarico;

  // when selecting tipo di incarico, tipoIncarico is a string
  // if entering in already existing incarico, the tipoIncarico value will be an object
  //{
  //  "title": "Amministrativo",
  //  "token": "amministrativo"
  // }
  // so its necessary to check both conditions
  // if tipoIncarico.token and tipoIncarico !== 'amministrativo'
  // the field must not be required
  const isRequired =
    tipoIncarico !== 'amministrativo' &&
    tipoIncarico?.token !== 'amministrativo';

  return (
    <DatetimeWidget
      {...rest}
      id={id}
      title={title}
      value={value}
      required={isRequired}
      onChange={onChange}
    />
  );
};

export default ConditionallyRequiredDateWidget;
