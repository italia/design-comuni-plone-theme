import { defineMessages, useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { searchContent, resetSearchContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';
import PropTypes from 'prop-types';

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
  console.log(item);
  return <div>{}</div>;
};

/**
 * Sponsors view component class.
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
  }, [dispatch, content, url, folder_name]);

  const sponsors = searchResults?.[folder_name]?.items || [];
  return (
    <>
      {sponsors?.length > 0 ? (
        <article
          id={folder_name}
          className="it-page-section anchor-offset mt-5"
        >
          {title ? (
            <h4>{title}</h4>
          ) : (
            <h4>{intl.formatMessage(messages.sponsors)}</h4>
          )}
          <div className="">
            {sponsors.map((item, i) => (
              <Sponsor key={item['@id']} item={item} />
            ))}
          </div>
        </article>
      ) : null}
    </>
  );
};
Sponsors.propTypes = {
  content: PropTypes.object,
  folder_name: PropTypes.string,
  title: PropTypes.string,
};
export default Sponsors;
