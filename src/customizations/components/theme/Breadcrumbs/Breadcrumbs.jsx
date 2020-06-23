/**
 * Breadcrumbs components.
 * @module components/theme/Breadcrumbs/Breadcrumbs
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { defineMessages, useIntl } from 'react-intl';
import { isEqual } from 'lodash';
import { getBreadcrumbs } from '@plone/volto/actions';
import { getBaseUrl } from '@plone/volto/helpers';
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
} from 'design-react-kit/dist/design-react-kit';

const messages = defineMessages({
  home: {
    id: 'Home',
    defaultMessage: 'Home',
  },
});

const Breadcrumbs = ({ pathname }) => {
  const intl = useIntl();
  const dispatch = useDispatch();

  let items = useSelector(state => state.breadcrumbs.items, isEqual);

  useEffect(() => {
    dispatch(getBreadcrumbs(getBaseUrl(pathname)));
  }, [dispatch, pathname]);

  return items?.length > 0 ? (
    <div className="public-ui">
      <Container as="section" id="briciole" className="px-4 my-4">
        <Row>
          <Col className="px-lg-4">
            <nav className="breadcrumb-container">
              <Breadcrumb aria-label="breadcrumb" listTag="ol" tag="nav">
                <BreadcrumbItem tag="li">
                  <Link to="/">{intl.formatMessage(messages.home)}</Link>
                  <span className="separator">/</span>
                </BreadcrumbItem>
                {items.slice(0, -1).map((item, index, items) => (
                  <BreadcrumbItem tag="li" key={item.url}>
                    <Link to={item.url}>{item.title}</Link>
                    {index < items.length - 1 && (
                      <span className="separator">/</span>
                    )}
                  </BreadcrumbItem>
                ))}
              </Breadcrumb>
            </nav>
          </Col>
        </Row>
      </Container>
    </div>
  ) : null;
};

Breadcrumbs.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default Breadcrumbs;
