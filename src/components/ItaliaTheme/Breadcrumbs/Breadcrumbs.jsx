/**
 * Breadcrumbs components.
 * @module components/theme/Breadcrumbs/Breadcrumbs
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { defineMessages, useIntl } from 'react-intl';
import { matchPath } from 'react-router';

import { useLocation } from 'react-router-dom';
import { isEqual, isEmpty } from 'lodash';
import { getBreadcrumbs } from '@plone/volto/actions';
import {
  getBaseUrl,
  flattenToAppURL,
  hasApiExpander,
} from '@plone/volto/helpers';

import { UniversalLink } from '@plone/volto/components';
import { Row, Col, BreadcrumbItem } from 'design-react-kit';
import GoogleBreadcrumbs from 'design-comuni-plone-theme/components/ItaliaTheme/Breadcrumbs/GoogleBreadcrumbs';
import { useHomePath } from 'design-comuni-plone-theme/helpers';
import config from '@plone/volto/registry';

const messages = defineMessages({
  home: {
    id: 'Home',
    defaultMessage: 'Home',
  },
  breadcrumb: {
    id: 'breadcrumb',
    defaultMessage: 'Percorso di navigazione',
  },
});

const Breadcrumbs = ({ pathname }) => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const location = useLocation();

  let items =
    useSelector((state) => {
      return state.breadcrumbs.items;
    }, isEqual) || [];
  const subsite = useSelector((state) => state.subsite?.data);
  const bcLoaded = useSelector((state) => {
    return state.breadcrumbs.loaded;
  });

  // Funzione per fare match di routes
  const getMatchingRoute = (p) =>
    matchPath(location.pathname, p) !== null ||
    matchPath(location.pathname, p.replace('**/', '')) !== null;

  // Funzione per riconoscere se siamo in una route statica
  const getCurrentPathFromAddonRoutes = () =>
    config.addonRoutes.find((route) => {
      const paths = typeof route.path === 'string' ? [route.path] : route.path;
      return paths.find(getMatchingRoute);
    }) || {};

  // Gestione delle rotte statiche. Se definito nel config della rotta un breadcrumbs_title, lo aggiungo alle breadcrumbs
  const route = getCurrentPathFromAddonRoutes();
  if (
    (!(items === null || isEmpty(route)) &&
      items.length > 0 &&
      route.breadcrumbs_title &&
      items[items.length - 1].url !== location.pathname) ||
    (items.length === 0 && bcLoaded && route.breadcrumbs_title)
  ) {
    items.push({
      url: location.pathname,
      title: intl.formatMessage(route.breadcrumbs_title),
    });
  }
  /** fine della gestione delle rotte statiche */

  useEffect(() => {
    if (!hasApiExpander('breadcrumbs', getBaseUrl(pathname))) {
      let actualPathForBreadcrumbs = pathname;
      const { path, buildFullNavTree } = getCurrentPathFromAddonRoutes();
      if (buildFullNavTree) {
        const replacedPath = path.replace('**/', '');
        actualPathForBreadcrumbs = pathname.replace(replacedPath, '');
      }
      dispatch(getBreadcrumbs(getBaseUrl(actualPathForBreadcrumbs)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Se siamo nella root di un sottosito, non mostriamo le breadcrumbs. Serve anche per nasconderle dalla pagina dei risultati di ricerca quando si fa la ricerca in un sottosito
  if (subsite) {
    if (
      items.length === 1 &&
      items[0].url === flattenToAppURL(subsite['@id'])
    ) {
      items = [];
    }
  }
  const homepath = useHomePath();

  return items?.length > 0 ? (
    <>
      <GoogleBreadcrumbs items={items} />
      <Row>
        <Col>
          <nav
            className="breadcrumb-container"
            aria-label={intl.formatMessage(messages.breadcrumb)}
          >
            <ol className="breadcrumb" data-element="breadcrumb">
              <BreadcrumbItem tag="li">
                <UniversalLink href={homepath}>
                  {intl.formatMessage(messages.home)}
                </UniversalLink>
                <span className="separator">/</span>
              </BreadcrumbItem>
              {items.map((item, index, items) => (
                <BreadcrumbItem tag="li" key={item.url}>
                  {index < items.length - 1 && (
                    <UniversalLink href={item.url}>{item.title}</UniversalLink>
                  )}
                  {index === items.length - 1 && <span>{item.title}</span>}
                  {index < items.length - 1 && (
                    <span className="separator">/</span>
                  )}
                </BreadcrumbItem>
              ))}
            </ol>
          </nav>
        </Col>
      </Row>
    </>
  ) : null;
};

Breadcrumbs.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default Breadcrumbs;
