import React from 'react';
import PropTypes from 'prop-types';
import { useIntl, defineMessages } from 'react-intl';
import { flattenToAppURL } from '@plone/volto/helpers';
import { UniversalLink } from '@plone/volto/components';

const messages = defineMessages({
  view_all: {
    id: 'Vedi tutto',
    defaultMessage: 'Vedi tutto',
  },
});

export const ListingLinkMore = ({ title, href, className = '', linkAlign }) => {
  const intl = useIntl();
  const url = href?.[0]?.['@id'];

  return url ? (
    <div
      className={
        linkAlign
          ? `link-more-button-align-right ${className}`
          : `link-button text-center ${className}`
      }
    >
      <UniversalLink href={flattenToAppURL(url)} className="btn btn-tertiary">
        {title || intl.formatMessage(messages.view_all)}
      </UniversalLink>
    </div>
  ) : null;
};

ListingLinkMore.propTypes = {
  linkMore: PropTypes.object,
};

export default ListingLinkMore;
