import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { OfficeCard } from 'design-comuni-plone-theme/components/ItaliaTheme/View';
import { usePaginatedItemsSection } from 'design-comuni-plone-theme/helpers';
import { Pagination } from 'design-comuni-plone-theme/components/ItaliaTheme';

const RelatedArticles = ({
  id = 'related-articles',
  items,
  title,
  showimage = true,
  title_size,
  show_title = true,
  noMargin = false,
}) => {
  const { batches, currentPage, onPaginationChange, pageNumbers } =
    usePaginatedItemsSection({ data: items });
  return (
    <article
      id={id}
      className={cx('it-page-section', 'anchor-offset', { 'mt-5': !noMargin })}
      aria-labelledby={title_size !== 'h5' ? `header-${id}` : undefined}
    >
      {title && show_title ? (
        title_size === 'h5' ? (
          <h5>{title}</h5>
        ) : (
          <h4 id={`header-${id}`}>{title}</h4>
        )
      ) : null}

      <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
        {batches?.map((item, i) => (
          <OfficeCard
            key={item['@id']}
            office={item}
            show_contacts={false}
            showimage={showimage}
          />
        ))}
      </div>
      {pageNumbers > 1 ? (
        <Pagination
          activePage={currentPage}
          totalPages={pageNumbers}
          onPageChange={onPaginationChange}
        />
      ) : null}
    </article>
  );
};
export default RelatedArticles;

RelatedArticles.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  items: PropTypes.arrayOf(Object),
  title_size: PropTypes.string,
  show_title: PropTypes.bool,
  showimage: PropTypes.bool,
  noMargin: PropTypes.bool,
};
