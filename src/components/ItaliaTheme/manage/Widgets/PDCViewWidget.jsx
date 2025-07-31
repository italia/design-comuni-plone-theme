import React from 'react';
import { useIntl } from 'react-intl';
import { renderPDCItemValue } from 'design-comuni-plone-theme/helpers';
const PDCViewWidget = ({ value }) => {
  const intl = useIntl();

  return (
    <div className="d-flex flex-column">
      {value
        ? value.map((pdc) => (
            <div>
              <span className="me-2">{pdc.pdc_desc}</span>
              <span>{renderPDCItemValue(pdc, intl)}</span>
            </div>
          ))
        : null}
    </div>
  );
};

export default PDCViewWidget;
