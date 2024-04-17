import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { defineMessages, useIntl } from 'react-intl';

import { getContent, resetContent } from '@plone/volto/actions';
import { SidebarPortal } from '@plone/volto/components';
import { flattenToAppURL } from '@plone/volto/helpers';

import Body from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/HighlightedContent/Body';
import Sidebar from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/HighlightedContent/Sidebar';

const messages = defineMessages({
  emptySelection: {
    id: 'emptySelection',
    defaultMessage:
      'Please select an item in the sidebar in order to show it here',
  },
});

const Edit = ({
  block,
  data,
  pathname,
  selected,
  onChangeBlock,
  openObjectBrowser,
}) => {
  const content = useSelector(
    (state) => state.content.subrequests[block]?.data,
  );
  const intl = useIntl();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.href) {
      dispatch(
        getContent(
          // tolerate references to File objects
          flattenToAppURL(data.href.replace(/\/@@download\/file$/, '')),
          null,
          block,
        ),
      );
    }
    return () => dispatch(resetContent(block));
  }, [dispatch, block, data.href]);

  return (
    <>
      {content ? (
        <div className="public-ui">
          <Body content={content} pathname={pathname} block={data} />
        </div>
      ) : (
        <p className="empty-selection">
          {intl.formatMessage(messages.emptySelection)}
        </p>
      )}
      <SidebarPortal selected={selected}>
        <Sidebar
          block={block}
          data={data}
          onChangeBlock={onChangeBlock}
          openObjectBrowser={openObjectBrowser}
        />
      </SidebarPortal>
    </>
  );
};

Edit.propTypes = {
  selected: PropTypes.bool.isRequired,
  block: PropTypes.string.isRequired,
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  pathname: PropTypes.string.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
  openObjectBrowser: PropTypes.func.isRequired,
};

export default Edit;
