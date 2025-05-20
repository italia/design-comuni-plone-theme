/*
 * componente per visulizzare i risultati del blocco Listing con il template 'Card con immagine'
 */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Container, Row, Col } from 'design-react-kit';
import { ListingLinkMore } from 'design-comuni-plone-theme/components/ItaliaTheme';

import CardWithImageDefault from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/CardWithImage/CardWithImageDefault';

const CardWithImageTemplate = (props) => {
  const {
    items,
    title,
    linkAlign,
    linkTitle,
    linkHref,
    show_block_bg = false,
    set_four_columns = false,
    linkmore_id_lighthouse,
    titleLine,
  } = props;

  return (
    <div className="card-with-image-template my-3">
      <Container className="px-4 pt-3">
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
        <Row className="items">
          {items.map((item, index) => {
            const layoutSelected = set_four_columns ? '3' : '4';

            return (
              <Col
                xl={layoutSelected}
                lg={item['@type'] === 'Persona' ? 6 : layoutSelected}
                key={item['@id']}
                className="col-item mb-3"
              >
                <CardWithImageDefault {...props} item={item} index={index} />
              </Col>
            );
          })}
        </Row>
        <ListingLinkMore
          title={linkTitle}
          href={linkHref}
          className="my-4"
          linkAlign={linkAlign}
          linkmoreIdLighthouse={linkmore_id_lighthouse}
        />
      </Container>
    </div>
  );
};

CardWithImageTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkTitle: PropTypes.any,
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default CardWithImageTemplate;
