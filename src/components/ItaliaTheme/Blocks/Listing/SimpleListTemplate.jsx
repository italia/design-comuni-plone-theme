/* Variation Lista Semplice of Listing block */
import React from 'react';
import PropTypes from 'prop-types';
import { UniversalLink } from '@plone/volto/components';
import { flattenToAppURL } from '@plone/volto/helpers';
import { Container, Row, Col } from 'design-react-kit/dist/design-react-kit';
import { ListingLinkMore } from '@italia/components/ItaliaTheme';

const SimpleListTemplate = ({
  items,
  title,
  isEditMode,
  linkTitle,
  linkHref,
  show_block_bg,
  show_pointer_list,
}) => {
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
              <ul className={show_pointer_list && 'decoration-pointer'}>
                {items.map((item, index) => {
                  return (
                    <li>
                      {item['@type'] === 'File' ? (
                        <a
                          href={flattenToAppURL(item.file.download)}
                          title={item.file.filename}
                        >
                          {item.title}
                        </a>
                      ) : (
                        <UniversalLink
                          item={!isEditMode ? item : null}
                          href={isEditMode ? '#' : null}
                        >
                          {item.title}
                        </UniversalLink>
                      )}
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

export default SimpleListTemplate;
