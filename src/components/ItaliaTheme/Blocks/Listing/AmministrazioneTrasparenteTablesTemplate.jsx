import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useIntl } from 'react-intl';
import { useLocation } from 'react-router-dom';
import { flatMapDeep } from 'lodash';
import moment from 'moment';
import { Container, Row, Col } from 'design-react-kit';

import { UniversalLink } from '@plone/volto/components';
import { flattenHTMLToAppURL } from '@plone/volto/helpers';
import { getTableRowData } from 'design-comuni-plone-theme/helpers';
import { ListingLinkMore } from 'design-comuni-plone-theme/components/ItaliaTheme';

const AmministrazioneTrasparenteTablesTemplate = ({
  items,
  isEditMode,
  title,
  linkAlign,
  linkTitle,
  linkHref,
  show_block_bg,
  titleLine,
}) => {
  const intl = useIntl();

  moment.locale(intl.locale);

  const location = useLocation();

  const getColumn = (item) => {
    if (!item) {
      return '';
    }

    switch (item.type) {
      case 'link':
        return (
          <UniversalLink href={item.link} className={item.class}>
            {item.text}
          </UniversalLink>
        );
      case 'text':
        return item.text;
      case 'richtext':
        return (
          <div
            dangerouslySetInnerHTML={{
              __html: flattenHTMLToAppURL(item.text || ''),
            }}
          />
        );
      default:
        break;
    }
  };

  const tableData = getTableRowData(items, intl, location.pathname);

  return (
    <div className="persone-amministrazione-trasparente">
      <Container className="px-4">
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
        <table className="table">
          <thead>
            <tr>
              {tableData.headers?.map((h, index) => (
                <th scope="col" className="text-uppercase" key={index}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {flatMapDeep(tableData.body ?? [], (row, index) => {
              return (
                <tr key={index}>
                  {row.map((column, index) => (
                    <td key={index}>{getColumn(column)}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>

        <ListingLinkMore
          title={linkTitle}
          href={linkHref}
          linkAlign={linkAlign}
          className="my-4"
        />
      </Container>
    </div>
  );
};

AmministrazioneTrasparenteTablesTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkTitle: PropTypes.any,
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default AmministrazioneTrasparenteTablesTemplate;
