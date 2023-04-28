import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { UniversalLink } from '@plone/volto/components';
import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
} from 'design-react-kit/dist/design-react-kit';

import {
  Icon,
  getItemIcon,
  ListingLinkMore,
} from 'design-comuni-plone-theme/components/ItaliaTheme';

const SimpleCardTemplateCompact = ({
  items,
  isEditMode,
  linkTitle,
  linkHref,
  show_icon = true,
  show_block_bg,
  title,
  id_lighthouse,
  center_cards,
}) => {
  return (
    <div className="simple-card-compact-template">
      {title && (
        <Row>
          <Col>
            <h2 className={cx('mb-4', { 'mt-5': !show_block_bg })}>{title}</h2>
          </Col>
        </Row>
      )}
      <div
        className={cx(
          'card-wrapper card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-3 mb-3',
          { 'center-cards': center_cards },
        )}
      >
        {items.map((item, index) => (
          <Card
            className="align-items-center rounded shadow"
            noWrapper
            teaser
            key={index}
          >
            {show_icon && (
              <div className="icon-argument-container">
                <Icon icon={getItemIcon(item)} />
              </div>
            )}
            <CardBody>
              <CardTitle tag="h3">
                <UniversalLink
                  item={!isEditMode ? item : null}
                  href={isEditMode ? '#' : null}
                  data-element={id_lighthouse}
                >
                  {item.title || item.id}
                </UniversalLink>
              </CardTitle>
            </CardBody>
          </Card>
        ))}
      </div>

      <ListingLinkMore title={linkTitle} href={linkHref} className="my-4" />
    </div>
  );
};

SimpleCardTemplateCompact.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  isEditMode: PropTypes.bool,
  linkTitle: PropTypes.any,
  c: PropTypes.any,
};

export default SimpleCardTemplateCompact;
