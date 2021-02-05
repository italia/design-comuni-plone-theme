/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import 'moment/min/locales';
import cx from 'classnames';
import { OSMMap } from '@italia/addons/volto-venue';
import { Row, Col, Container } from 'design-react-kit/dist/design-react-kit';

import { UniversalLink } from '@plone/volto/components';

import { flattenToAppURL } from '@plone/volto/helpers';

const messages = defineMessages({
  view_all: {
    id: 'Vedi tutto',
    defaultMessage: 'Vedi tutto',
  },
  default_detail_link: {
    id: 'Vedi',
    defaultMessage: 'Vedi',
  },
  no_markers: {
    id: 'Non ci sono punti da mostrare sulla mappa',
    defaultMessage: 'Non ci sono punti da mostrare sulla mappa',
  },
});

const MapTemplate = ({
  items,
  isEditMode,
  linkMore,
  title,
  show_map_full_width,
  map_size,
}) => {
  const intl = useIntl();
  let history = useHistory();
  moment.locale(intl.locale);

  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    let points = items
      .filter(
        (item) =>
          item.geolocation &&
          item.geolocation?.latitude !== 0 &&
          item.geolocation?.longitude !== 0,
      )
      .map((item) => {
        return {
          title: item.title,
          ...item.geolocation,

          onMarkerClick: (e) => {
            history.push(item['@id']);
          },
        };
      });

    setMarkers(points);
  }, [items]);

  return (
    <div
      className={cx('map-template', {
        'public-ui': isEditMode,
      })}
    >
      <div className="full-width">
        <Container className="px-4">
          {title && (
            <Row>
              <Col>
                <h2 className="mb-4">{title}</h2>
              </Col>
            </Row>
          )}
          {items?.length > 0 && markers?.length > 0 ? (
            <Row
              className={cx('mb-4 map-wrapper', {
                'full-width': show_map_full_width,
                ['size_' + map_size]: map_size,
              })}
            >
              <OSMMap markers={markers} showTooltip />
            </Row>
          ) : (
            intl.formatMessage(messages.no_markers)
          )}

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
    </div>
  );
};

MapTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  isEditMode: PropTypes.bool,
  linkMore: PropTypes.any,
};

export default MapTemplate;
