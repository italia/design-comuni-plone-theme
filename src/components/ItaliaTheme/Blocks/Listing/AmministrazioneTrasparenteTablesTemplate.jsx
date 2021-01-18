import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useIntl, defineMessages } from 'react-intl';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import { Container, Row, Col } from 'design-react-kit/dist/design-react-kit';
import { UniversalLink } from '@plone/volto/components';
import { flattenHTMLToAppURL, flattenToAppURL } from '@plone/volto/helpers';
import { getTableRowData } from '@italia/helpers';

const messages = defineMessages({
  view_all: {
    id: 'Vedi tutto',
    defaultMessage: 'Vedi tutto',
  },
});

const AmministrazioneTrasparenteTablesTemplate = ({
  items,
  isEditMode,
  title,
  linkMore,
  show_block_bg,
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
    <div
      className={cx('persone-amministrazione-trasparente', {
        'public-ui': isEditMode,
      })}
    >
      <Container className="px-4">
        {title && (
          <Row>
            <Col>
              <h2 className={cx('mb-4', { 'mt-5': !show_block_bg })}>
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
            {tableData.body?.flatMap((row, index) => {
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
        {linkMore?.href && (
          <div className="link-button text-center my-4">
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
  );
};

AmministrazioneTrasparenteTablesTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkMore: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default AmministrazioneTrasparenteTablesTemplate;
