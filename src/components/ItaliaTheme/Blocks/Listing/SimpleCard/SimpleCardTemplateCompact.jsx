import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import {
  Card,
  CardBody,
  CardTitle,
  Icon,
  Row,
  Col,
  Button,
} from 'design-react-kit/dist/design-react-kit';
import { flattenToAppURL } from '@plone/volto/helpers';
import { getItemIcon } from '@italia/components/ItaliaTheme';
import { Link } from 'react-router-dom';
import cx from 'classnames';

const messages = defineMessages({
  view_all: {
    id: 'Vedi tutto',
    defaultMessage: 'Vedi tutto',
  },
});
const SimpleCardTemplateCompact = ({
  items,
  isEditMode,
  linkMore,
  show_icon = true,
  show_block_bg,
  title,
}) => {
  const intl = useIntl();
  return (
    <div className="simple-card-compact-template">
      {title && (
        <Row>
          <Col>
            <h2 className={cx('mb-4', { 'mt-5': !show_block_bg })}>{title}</h2>
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
            {show_icon && <Icon icon={getItemIcon(item)} />}
            <CardBody>
              <CardTitle tag="h5">
                <Link
                  to={!isEditMode ? flattenToAppURL(item['@id']) : '#'}
                  condition={!isEditMode}
                >
                  {item.title || item.id}
                </Link>
              </CardTitle>
            </CardBody>
          </Card>
        ))}
      </div>
      {linkMore?.href && (
        <div className="link-button">
          <Button
            className="view-all"
            icon={false}
            tag="button"
            onClick={() => window.open(linkMore.href, '_self')}
          >
            {linkMore.title || intl.formatMessage(messages.view_all)}
          </Button>
        </div>
      )}
    </div>
  );
};

SimpleCardTemplateCompact.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  isEditMode: PropTypes.bool,
  linkMore: PropTypes.any,
};

export default SimpleCardTemplateCompact;
