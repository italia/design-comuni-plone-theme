import { defineMessages, useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { searchContent, resetSearchContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';
import PropTypes from 'prop-types';
import { UniversalLink } from '@plone/volto/components';
import config from '@plone/volto/registry';

const messages = defineMessages({
  sponsors: {
    id: 'sponsors',
    defaultMessage: 'Sponsor',
  },
});

/**
 * Sponsor view component class.
 * @function Sponsor
 * @params {object} content Content object.
 * @params {string} folder name where to find images.
 * @returns {string} Markup of the component.
 */
const Sponsor = ({ item }) => {
  const Image = config.getComponent({ name: 'Image' }).component;
  const image =
    item?.image &&
    Image({
      item: item,
      sizes: '600px',
      loading: 'lazy',
      className: 'img-fluid',
      alt: item.image.filename ?? item.title,
    });
  return item ? (
    <div className="sponsor-item">
      <UniversalLink href={item.remoteUrl}>
        {image ? image : item.title}
      </UniversalLink>
    </div>
  ) : null;
};

/**
 * Sponsors view component class (used in EventSponsors)
 * @function Sponsors
 * @params {object} content Content object.
 * @params {string} folder name where to find images.
 * @returns {string} Markup of the component.
 */
const Sponsors = ({ content, folder_name, title }) => {
  const intl = useIntl();
  const url = `${flattenToAppURL(content['@id'])}/${folder_name}`;
  const searchResults = useSelector((state) => state.search.subrequests);
  const dispatch = useDispatch();
  useEffect(() => {
    if (content?.items.some((e) => e.id === folder_name)) {
      dispatch(
        searchContent(
          url,
          {
            'path.depth': 1,
            sort_on: 'getObjPositionInParent',
            metadata_fields: '_all',
          },
          folder_name,
        ),
      );
    }
    return () => {
      dispatch(resetSearchContent(folder_name));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  const sponsors = searchResults?.[folder_name]?.items || [];
  const sponsors_no_logos = sponsors.filter((sponsor) => !sponsor.image);
  const sponsors_logos = sponsors.filter((sponsor) => sponsor.image);
  return sponsors?.length > 0 ? (
    <>
      {title ? (
        <strong>{`${title}:`}</strong>
      ) : (
        <strong>{`${intl.formatMessage(messages.sponsors)}:`}</strong>
      )}
      <div className="sponsor-wrapper">
        {sponsors_logos.length > 0 && (
          <div className="sponsor-logos">
            {sponsors_logos.map((item, i) => (
              <Sponsor key={item['@id']} item={item} />
            ))}
          </div>
        )}
        {sponsors_no_logos.length > 0 && (
          <div className="sponsor-no-logos">
            {sponsors_no_logos.map((item, i) => (
              <Sponsor key={item['@id']} item={item} />
            ))}
          </div>
        )}
      </div>
    </>
  ) : null;
};
Sponsors.propTypes = {
  content: PropTypes.object,
  folder_name: PropTypes.string,
  title: PropTypes.string,
};
export default Sponsors;
