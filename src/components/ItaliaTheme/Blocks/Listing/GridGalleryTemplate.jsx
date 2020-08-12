import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { flattenToAppURL } from '@plone/volto/helpers';
import { Link } from 'react-router-dom';
import { ConditionalLink } from '@plone/volto/components';
import { useIntl, defineMessages } from 'react-intl';
import moment from 'moment';
import {
  Container,
  Row,
  Col,
  Alert,
} from 'design-react-kit/dist/design-react-kit';

const messages = defineMessages({
  maxItemsExceeded: {
    id: 'grid-gallery-max-items-exceeded',
    defaultMessage:
      'Per questo template il numero di risultati per pagina deve essere 7. Controlla le impostazioni.',
  },
});

const GridGalleryTemplate = ({
  items,
  isEditMode,
  title,
  linkMore,
  show_block_bg,
}) => {
  const intl = useIntl();
  moment.locale(intl.locale);

  return (
    <div
      className={cx('grid-gallery-template', {
        'public-ui': isEditMode,
      })}
    >
      <div className={cx('full-width', { 'bg-light py-5': show_block_bg })}>
        <Container className="px-4">
          {title && (
            <Row>
              <Col>
                <h3 className="mb-4">{title}</h3>
              </Col>
            </Row>
          )}

          {isEditMode && items.length > 7 && (
            <Alert color="danger">
              {intl.formatMessage(messages.maxItemsExceeded)}
            </Alert>
          )}
          <div className="grid-gallery-grid">
            {items.map((item, index) => (
              <div
                key={item['@id'] ?? index}
                className={cx('grid-gallery-item', `item-${index % 7}`)}
              >
                <Link to={isEditMode ? '#' : flattenToAppURL(item['@id'])}>
                  <img
                    src={
                      item.image?.scales?.preview?.download ??
                      item.image?.download ??
                      ''
                    }
                    srcSet={`${item.image?.scales?.gallery?.download} 250w, ${item.image?.scales?.icon?.download} 32w, ${item.image?.scales?.large?.download} 768w, ${item.image?.scales?.listing?.download} 16w, ${item.image?.scales?.mini?.download} 200w, ${item.image?.scales?.preview?.download} 400w, ${item.image?.scales?.thumb?.download} 128w, ${item.image?.scales?.tile?.download} 64w`}
                    loading="lazy"
                    alt=""
                  />
                  <h3>{item.title}</h3>
                </Link>
              </div>
            ))}
          </div>
          {linkMore?.href && (
            <div className="link-more">
              <ConditionalLink condition={!isEditMode} to={linkMore.href}>
                {linkMore.title}
              </ConditionalLink>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

GridGalleryTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkMore: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default GridGalleryTemplate;
