import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TextWidget } from '@plone/volto/components';

const CTTitleColumnWidget = (props) => {
  const { onChange, id } = props;
  const { ct, field } = props.objectvalue;
  const ct_schema = useSelector(
    (state) => state.ct_schema?.subrequests?.[ct]?.result,
  );

  useEffect(() => {
    const field_label = ct_schema?.properties?.[field]?.title;
    if (field_label) {
      onChange(id, field_label);
    }
  }, [field]);

  return <TextWidget {...props} className="text" />;
};

export default CTTitleColumnWidget;
