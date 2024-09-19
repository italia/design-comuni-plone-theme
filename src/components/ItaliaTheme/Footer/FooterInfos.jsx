/**
 * FooterInfos component.
 * @module components/Footer/FooterInfos
 */

import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { defineMessages, useIntl } from 'react-intl';
import { Row, Col } from 'design-react-kit';
import { ConditionalLink } from '@plone/volto/components';
import { flattenHTMLToAppURL } from '@plone/volto/helpers';
import { getEditableFooterColumns, getItemsByPath } from 'volto-editablefooter';
import {
  FooterNewsletterSubscribe,
  FooterSocials,
} from 'design-comuni-plone-theme/components/ItaliaTheme';

import { TextBlockView } from '@plone/volto-slate/blocks/Text';
import { fromHtml } from 'design-comuni-plone-theme/config/Slate/utils';
import { useHomePath } from 'design-comuni-plone-theme/helpers';

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
  const homepath = useHomePath();
  const footerConfiguration = useSelector(
    (state) => state.editableFooterColumns?.result,
  );

  useEffect(() => {
    dispatch(getEditableFooterColumns());
  }, [dispatch, location]);

  //filter rootpaths
  let footerColumns = getItemsByPath(
    footerConfiguration,
    location?.pathname?.length ? location.pathname : homepath,
  );
  footerColumns.forEach((column) => {
    if (__CLIENT__) {
      column.slateText = fromHtml(column.text);
    }
  });

  const colWidth =
    12 / (footerColumns.length < N_COLUMNS ? footerColumns.length : N_COLUMNS);

  return (
    <Row tag="div">
      {footerColumns
        .filter((c) => c.visible)
        .map((column, index) => (
          <Col
            lg={colWidth}
            md={colWidth}
            className="pb-2"
            tag="div"
            widths={['xs', 'sm', 'md', 'lg', 'xl']}
            key={index}
          >
            <p className="h4">
              {column?.title && (
                <ConditionalLink
                  condition={column.titleLink?.length > 0}
                  item={column.titleLink?.[0]}
                  to={column.titleLink?.[0]?.['@id'] ? null : ''}
                  title={
                    intl.formatMessage(messages.goToPage) + ':' + column.title
                  }
                >
                  {column.title}
                </ConditionalLink>
              )}
            </p>
            {column.showSocial && <FooterSocials />}
            {column.slateText ? (
              <TextBlockView data={{ value: column.slateText }} />
            ) : (
              column.text && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: flattenHTMLToAppURL(column.text.data),
                  }}
                />
              )
            )}
            {/* <TextBlockView id={index} data={{ value: data.text }} /> */}
            {column.newsletterSubscribe && <FooterNewsletterSubscribe />}
          </Col>
        ))}
    </Row>
  );
};

export default FooterInfos;
