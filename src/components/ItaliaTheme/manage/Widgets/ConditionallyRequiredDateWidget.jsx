import React from 'react';
import { DatetimeWidget } from '@plone/volto/config/Widgets';

const ConditionallyRequiredDateWidget = (props) => {
  const { value, formData, onChange, id, title, required, ...rest } = props;

  // Check tipo di incarico in formData
  const tipoIncarico = formData?.tipologia_incarico;

  // Make required only if tipo di incarico !== "amministrativo"
  const isRequired = tipoIncarico !== 'amministrativo';

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
