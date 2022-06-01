/* Variation Lista Semplice of Listing block */
import React from 'react';
import PropTypes from 'prop-types';
import { ConditionalLink } from '@plone/volto/components';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';

import { ListingLinkMore } from '@italia/components/ItaliaTheme';

const SimpleListTemplate = ({
  items,
  title,
  isEditMode,
  linkTitle,
  linkHref,
  show_block_bg,
  show_pointer_list,
  designReactKit,
}) => {
  const { Container, Row, Col } = designReactKit;
  return (
    <div className="simple-list-template">
      <Container className="px-4">
        {title && (
          <Row>
            <Col>
              <h2 className="mb-4">{title}</h2>
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
        <ListingLinkMore title={linkTitle} href={linkHref} className="my-4" />
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

export default injectLazyLibs(['designReactKit'])(SimpleListTemplate);
