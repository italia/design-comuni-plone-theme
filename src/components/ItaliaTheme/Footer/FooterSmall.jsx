/**
 * FooterSmall component.
 * @module components/theme/Footer/FooterSmall
 */

import React, { useState, useEffect } from 'react';
import { UniversalLink } from '@plone/volto/components';
import { defineMessages, useIntl } from 'react-intl';
import { Container } from 'design-react-kit/dist/design-react-kit';
import { getSiteProperty } from '@italia/helpers';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSubFooter, getItemsByPath } from '@italia/addons/volto-subfooter';
import { flattenToAppURL } from '@plone/volto/helpers';

const messages = defineMessages({
  goToPage: {
    id: 'Vai alla pagina',
    defaultMessage: 'Vai alla pagina',
  },
});

/**
 * FooterSmall component class.
 * @class FooterSmall
 * @extends Component
 */
const FooterSmall = () => {
  const intl = useIntl();
  const pathname = useLocation().pathname;
  const dispatch = useDispatch();
  const [links, setLinks] = useState([]);

  const subFooter = useSelector((state) => state.subFooter?.result);
  const subFooterItems = getItemsByPath(subFooter, pathname)?.filter(
    (item) => item.visible,
  );

  useEffect(() => {
    dispatch(getSubFooter());
  }, [dispatch]);

  useEffect(() => {
    let _links = getSiteProperty('smallFooterLinks', intl.locale) ?? [];
    setLinks(_links);
  }, [intl.locale]);

  return subFooterItems?.length > 0 || links.length > 0 ? (
    <div className="it-footer-small-prints clearfix">
      <Container tag="div">
        <h3 className="sr-only">{intl.formatMessage(messages.goToPage)}</h3>
        <ul className="it-footer-small-prints-list list-inline mb-0 d-flex flex-column flex-md-row">
          {subFooterItems?.length > 0 &&
            subFooterItems.map((item, index) => {
              let url =
                item.href || flattenToAppURL(item.linkUrl?.[0]?.['@id']) || '/';
              return (
                <li className="list-inline-item" key={url + index}>
                  <UniversalLink href={url} title={item.title}>
                    {item.title}
                  </UniversalLink>
                </li>
              );
            })}
          {links?.length > 0 &&
            links.map((link) => (
              <li className="list-inline-item" key={link.url}>
                <UniversalLink href={link.url} title={link.title}>
                  {link.title}
                </UniversalLink>
              </li>
            ))}
        </ul>
      </Container>
    </div>
  ) : null;
};

export default FooterSmall;
