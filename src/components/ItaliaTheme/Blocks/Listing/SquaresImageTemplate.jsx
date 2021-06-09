import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { Container } from 'design-react-kit/dist/design-react-kit';
import { UniversalLink } from '@plone/volto/components';
import { flattenToAppURL } from '@plone/volto/helpers';
import cx from 'classnames';

const messages = defineMessages({
  view_all: {
    id: 'Vedi tutto',
    defaultMessage: 'Vedi tutto',
  },
});

const SquaresImageTemplate = ({
  items,
  title,
  show_block_bg,
  isEditMode,
  linkMore,
}) => {
  const intl = useIntl();

  return (
    <div className={cx('squares-image-template', { 'public-ui': isEditMode })}>
      <Container className="px-4">
        <div className="title">{title && <h2>{title}</h2>}</div>
        <div className="grid mb-3 mt-5">
          {items.map((item, index) => (
            <UniversalLink
              item={!isEditMode ? item : null}
              href={isEditMode ? '#' : null}
              style={{
                backgroundImage: `url(${flattenToAppURL(
                  item?.image?.scales?.preview?.download || '',
                )})`,
              }}
              className="listing-item box bg-img"
              key={index}
            >
              <span className="title font-weight-bold">{item?.title}</span>
            </UniversalLink>
          ))}
        </div>

        {linkMore?.href && (
          <div className="link-button text-center my-5">
            <UniversalLink
              href={flattenToAppURL(linkMore.href)}
              className="btn btn-tertiary"
            >
              {linkMore.title || intl.formatMessage(messages.view_all)}
            </UniversalLink>
          </div>
        )}
      </Container>
    </div>
  );
};

SquaresImageTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  isEditMode: PropTypes.bool,
  linkMore: PropTypes.any,
};

export default SquaresImageTemplate;
