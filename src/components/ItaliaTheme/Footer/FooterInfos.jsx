/**
 * FooterInfos component.
 * @module components/Footer/FooterInfos
 */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { defineMessages, useIntl } from 'react-intl';
import { Row, Col, Icon } from 'design-react-kit/dist/design-react-kit';
import { siteConfig } from '~/config';
import { flattenHTMLToAppURL, flattenToAppURL } from '@plone/volto/helpers';
import { getEditableFooterColumns } from '@italia/addons/volto-editablefooter';
import { FooterNewsletterSubscribe } from '@italia/components/ItaliaTheme';

const messages = defineMessages({
  goToPage: {
    id: 'Vai alla pagina',
    defaultMessage: 'Vai alla pagina',
  },
});

const FooterInfos = () => {
  const intl = useIntl();
  const N_COLUMNS = 4;
  const location = useLocation();
  const dispatch = useDispatch();

  const footerConfiguration = useSelector(
    (state) => state.editableFooterColumns?.result,
  );

  useEffect(() => {
    dispatch(getEditableFooterColumns());
  }, [dispatch]);

  //filter rootpaths
  const footerColumns =
    footerConfiguration
      .filter((f) =>
        (location?.pathname?.length ? location.pathname : '/').match(
          new RegExp(flattenToAppURL(f.rootPath)),
        ),
      )
      .pop()?.items ?? [];

  const colWidth =
    12 / (footerColumns.length < N_COLUMNS ? footerColumns.length : N_COLUMNS);

  return (
    <Row tag="div">
      {footerColumns
        .filter((c) => c.visible)
        .map((column) => (
          <Col
            lg={colWidth}
            md={colWidth}
            className="pb-2"
            tag="div"
            widths={['xs', 'sm', 'md', 'lg', 'xl']}
          >
            <h4>
              <Link
                to={
                  column.titleLink?.length > 0
                    ? flattenToAppURL(column.titleLink[0]['@id'])
                    : '/'
                }
                title={
                  intl.formatMessage(messages.goToPage) + ':' + column.title
                }
              >
                {column.title}
              </Link>
            </h4>
            {column.showSocial && (
              <ul className="list-inline text-left social">
                {siteConfig.socialSettings?.map((social, idx) => (
                  <li className="list-inline-item" key={idx}>
                    <a
                      className="p-2 text-white"
                      href={social.url}
                      title={social.title}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon
                        icon={social.icon}
                        color="white"
                        className="align-top"
                        padding={false}
                        size="sm"
                      />

                      <span className="sr-only">{social.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}

            <p
              dangerouslySetInnerHTML={{
                __html: flattenHTMLToAppURL(column.text.data),
              }}
            />

            {column.newsletterSubscribe && <FooterNewsletterSubscribe />}
          </Col>
        ))}
    </Row>
  );
};

export default FooterInfos;
