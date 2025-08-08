import React from 'react';
import { useIntl, defineMessages } from 'react-intl';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { UniversalLink } from '@plone/volto/components';
import { Card, CardBody, CardTitle, Row, Col } from 'design-react-kit';

import {
  Icon,
  getItemIcon,
  ListingLinkMore,
} from 'design-comuni-plone-theme/components/ItaliaTheme';

const messages = defineMessages({
  argumentIcon: {
    id: 'argument_icon',
    defaultMessage: 'Icona {type}',
  },
});

const SimpleCardTemplateCompact = ({
  items,
  isEditMode,
  linkTitle,
  linkHref,
  show_icon = true,
  show_block_bg,
  title,
  id_lighthouse,
  linkAlign,
  titleLine,
  linkmore_id_lighthouse,
}) => {
  const intl = useIntl();
  return (
    <div className="simple-card-compact-template">
      {title && (
        <Row>
          <Col>
            <h2
              className={cx('mb-4', {
                'mt-5': !show_block_bg,
                'title-bottom-line': titleLine,
              })}
            >
              {title}
            </h2>
          </Col>
        </Row>
      )}
      <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-3 mb-3">
        {items.map((item, index) => (
          <Card
            className="align-items-center rounded shadow"
            noWrapper
            teaser
            key={index}
          >
            {show_icon && (
              <div className="icon-argument-container">
                <Icon
                  icon={getItemIcon(item)}
                  title={intl.formatMessage(messages.argumentIcon, {
                    type: item.design_italia_meta_type,
                  })}
                />
              </div>
            )}
            <CardBody>
              <CardTitle
                tag={title ? 'h3' : 'h2'}
                className={cx('', {
                  h3: !title,
                })}
              >
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

      <ListingLinkMore
        title={linkTitle}
        href={linkHref}
        className="my-4"
        linkAlign={linkAlign}
        linkmoreIdLighthouse={linkmore_id_lighthouse}
      />
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
