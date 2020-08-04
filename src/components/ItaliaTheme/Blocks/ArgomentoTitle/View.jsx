/**
 * View title block.
 * @module components/manage/Blocks/Title/View
 */

import React from 'react';
import PropTypes from 'prop-types';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
import { Portal } from 'react-portal';
import { flattenToAppURL } from '@plone/volto/helpers';
import { defineMessages, useIntl } from 'react-intl';
import redraft from 'redraft';
import { settings } from '@italia/config';
/**
 * View title block class.
 * @class View
 * @extends Component
 */

const messages = defineMessages({
  portata_di_click: {
    id: 'portata_di_click',
    defaultMessage: 'A PORTATA DI CLICK',
  },
});

const ArgomentoTitleView = ({ data, properties }) => {
  const intl = useIntl();
  return (
    <>
      <div className="ArgomentoTitleWrapper">
        <div className="title-description-wrapper">
          <h1>{properties.title}</h1>
          {properties.description}
        </div>
        {data.portata_di_click && (
          <div className="a-portata-di-click">
            <h6>{intl.formatMessage(messages.portata_di_click)}</h6>
            {redraft(
              data.portata_di_click,
              settings.ToHTMLRenderers,
              settings.ToHTMLOptions,
            )}
          </div>
        )}
      </div>
      {properties.image ? (
        <Portal
          node={__CLIENT__ && document.getElementById('portal-header-image')}
        >
          <div>
            <img
              src={flattenToAppURL(properties.image.download)}
              alt={properties.caption || properties.title}
              title={properties.caption || properties.title}
            />
          </div>
        </Portal>
      ) : (
        ''
      )}
    </>
  );
};
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
ArgomentoTitleView.propTypes = {
  properties: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ArgomentoTitleView;
