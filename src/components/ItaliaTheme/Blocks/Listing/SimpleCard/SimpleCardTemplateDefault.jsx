import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button, Row, Col } from 'design-react-kit';
import { v4 as uuid } from 'uuid';
import SimpleCardDefault from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/SimpleCard/Card/SimpleCardDefault';
import { ListingLinkMore } from 'design-comuni-plone-theme/components/ItaliaTheme';

const SimpleCardTemplateDefault = (props) => {
  const {
    items,
    linkTitle,
    linkHref,
    linkAlign,
    titleLine,
    title,
    show_block_bg,
    path_filters,
    show_path_filters,
    addFilters,
    additionalFilters = [],
    linkmore_id_lighthouse,
  } = props;

  const resultsUID = uuid();

  let currentPathFilter = additionalFilters
    ?.filter((f) => {
      return f.i === 'path';
    })
    ?.map((f) => {
      return f.v;
    });

  const [pathFilter, setPathFilter] = useState(currentPathFilter?.[0] || null);

  const path_filters_buttons =
    show_path_filters && path_filters
      ? Object.keys(path_filters)
          .map((k) => {
            return {
              label: path_filters[k].label,
              path: path_filters[k].path?.[0],
            };
          })
          .filter((f) => f.path)
      : null;

  const addPathFilter = (path) => {
    let new_path = pathFilter === path ? null : path;
    setPathFilter(new_path);
    let filters = [];
    if (new_path) {
      filters = [
        {
          i: 'path',
          o: 'plone.app.querystring.operation.string.absolutePath',
          v: new_path,
        },
      ];
    }
    addFilters(filters);
  };

  return (
    <div className="simple-card-default">
      {(title || path_filters_buttons) && (
        <Row
          className={cx('template-header', {
            'with-filters': path_filters_buttons,
          })}
        >
          {title && (
            <Col md={path_filters_buttons ? 6 : 12}>
              <h2
                className={cx('', {
                  'title-bottom-line': titleLine,
                  'mt-5': !show_block_bg,
                  'mb-4': !path_filters_buttons,
                })}
              >
                {title}
              </h2>
            </Col>
          )}

          {path_filters_buttons && (
            <Col md={title ? 6 : 12} className="path-filter-buttons">
              <div className="path-filter-buttons-wrapper">
                {path_filters_buttons.map((button, i) => (
                  <Button
                    key={i}
                    color="primary"
                    outline={button.path['UID'] !== pathFilter}
                    size="xs"
                    icon={false}
                    tag="button"
                    className="ms-3"
                    onClick={(e) => {
                      addPathFilter(button.path['UID']);
                    }}
                    role="switch"
                    aria-checked={button.path['UID'] === pathFilter}
                    aria-controls={resultsUID + '_results'}
                  >
                    {button.label}
                  </Button>
                ))}
              </div>
            </Col>
          )}
        </Row>
      )}

      <div
        className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-3 mb-3"
        id={resultsUID + '_results'}
      >
        {items.map((item, index) => (
          <SimpleCardDefault {...props} item={item} index={index} key={index} />
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

SimpleCardTemplateDefault.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkTitle: PropTypes.any,
  linkHref: PropTypes.any,
};

export default SimpleCardTemplateDefault;
