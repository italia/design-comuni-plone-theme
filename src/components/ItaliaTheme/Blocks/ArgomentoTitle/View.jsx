/**
 * View ArgomentoTitle block.
 * @module components/ItaliaTheme/Blocks/ArgomentoTitle/View
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Portal } from 'react-portal';
import { defineMessages, useIntl } from 'react-intl';
import redraft from 'redraft';
import Image from '@plone/volto/components/theme/Image/Image';
import config from '@plone/volto/registry';

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
              config.settings.ToHTMLRenderers,
              config.settings.ToHTMLOptions,
            )}
          </div>
        )}
      </div>
      {properties.image ? (
        <Portal
          node={__CLIENT__ && document.getElementById('portal-header-image')}
        >
          <div>
            <Image
              image={properties.image}
              alt={properties.caption || properties.title}
              title={properties.caption || properties.title}
              aria-hidden="true"
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
