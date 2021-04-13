/**
 * Breadcrumbs components.
 * @module components/theme/Breadcrumbs/Breadcrumbs
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { defineMessages, useIntl } from 'react-intl';
import { isEqual } from 'lodash';
import { getBreadcrumbs } from '@plone/volto/actions';
import { getBaseUrl, flattenToAppURL } from '@plone/volto/helpers';

import { UniversalLink } from '@plone/volto/components';
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

  let items = useSelector((state) => state.breadcrumbs.items, isEqual);
  const subsite = useSelector((state) => state.subsite?.data);

  useEffect(() => {
    dispatch(getBreadcrumbs(getBaseUrl(pathname)));
  }, [dispatch, pathname]);

  if (subsite) {
    //se siamo nella root di un sottosito, non mostriamo le breadcrumbs. Serve anche per nasconderle dalla pagina dei risultati di ricerca quando si fa la ricerca in un sottosito
    if (
      items.length === 1 &&
      items[0].url === flattenToAppURL(subsite['@id'])
    ) {
      items = [];
    }
  }

  return items?.length > 0 ? (
    <div className="public-ui">
      <Container as="section" id="briciole" className="px-4 my-4">
        <Row>
          <Col className="px-lg-4">
            <nav className="breadcrumb-container">
              <Breadcrumb aria-label="breadcrumb" listTag="ol" tag="nav">
                <BreadcrumbItem tag="li">
                  <UniversalLink href="/">
                    {intl.formatMessage(messages.home)}
                  </UniversalLink>
                  <span className="separator">/</span>
                </BreadcrumbItem>
                {items.slice(0, -1).map((item, index, items) => (
                  <BreadcrumbItem tag="li" key={item.url}>
                    <UniversalLink href={item.url}>{item.title}</UniversalLink>
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
