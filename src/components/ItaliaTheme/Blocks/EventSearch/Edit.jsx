import React from 'react';
import PropTypes from 'prop-types';
import Body from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/EventSearch/Body';
import { SidebarPortal } from '@plone/volto/components';
import { getBaseUrl } from '@plone/volto/helpers';
import { Sidebar } from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/EventSearch';
import { useIntl, defineMessages } from 'react-intl';

const messages = defineMessages({
  no_filters: {
    id: 'event_search_no_filters',
    defaultMessage:
      'Nessun filtro da mostrare. Seleziona i filtri di ricerca da mostrare dalla sidebar laterale.',
  },
});

const Edit = ({ data, id, block, onChangeBlock, selected, pathname }) => {
  const intl = useIntl();

  return (
    <div className="event-search public-ui">
      {!data.filter_one && !data.filter_two && !data.filter_three && (
        <div>{intl.formatMessage(messages.no_filters)}</div>
      )}
      <Body
        data={data}
        id={id}
        path={getBaseUrl(pathname)}
        inEditMode={true}
        onChangeBlock={onChangeBlock}
      />
      <SidebarPortal selected={selected}>
        <Sidebar data={data} block={block} onChangeBlock={onChangeBlock} />
      </SidebarPortal>
    </div>
  );
};
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Edit.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  id: PropTypes.string.isRequired,
  block: PropTypes.string.isRequired,
  selected: PropTypes.any,
  intl: PropTypes.any,
  onChangeBlock: PropTypes.func.isRequired,
};

export default Edit;
