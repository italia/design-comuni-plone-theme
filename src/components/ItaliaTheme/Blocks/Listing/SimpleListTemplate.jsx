/* Variation Lista Semplice of Listing block */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { ConditionalLink } from '@plone/volto/components';
import { Container, Row, Col } from 'design-react-kit';
import { ListingLinkMore } from 'design-comuni-plone-theme/components/ItaliaTheme';

const SimpleListTemplate = ({
  items,
  title,
  isEditMode,
  linkAlign,
  linkTitle,
  linkHref,
  show_block_bg,
  show_pointer_list,
  titleLine,
}) => {
  return (
    <div className="simple-list-template">
      <Container className="px-4">
        {title && (
          <Row>
            <Col>
              <h2 className={cx('mb-4', { 'title-bottom-line': titleLine })}>
                {title}
              </h2>
            </Col>
          </Row>
        )}
        {items.length > 0 && (
          <Row>
            <Col>
              <ul className={show_pointer_list ? 'decoration-pointer' : ''}>
                {items.map((item, index) => {
                  return (
                    <li key={index}>
                      <ConditionalLink condition={!isEditMode} item={item}>
                        {item.title}
                      </ConditionalLink>
                    </li>
                  );
                })}
              </ul>
            </Col>
          </Row>
        )}
        <ListingLinkMore
          title={linkTitle}
          href={linkHref}
          linkAlign={linkAlign}
          className="my-4"
        />
      </Container>
    </div>
  );
};

SimpleListTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkTitle: PropTypes.any,
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default SimpleListTemplate;
