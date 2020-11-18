import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useIntl } from 'react-intl';
import moment from 'moment';
import {
  Container,
  Row,
  Col
} from 'design-react-kit/dist/design-react-kit';
import { Link } from 'react-router-dom';
import { flattenHTMLToAppURL } from '@plone/volto/helpers';
import { getTableRowData } from '@italia/helpers';

const AmministrazioneTrasparenteTablesTemplate = ({
  items,
  isEditMode,
  title,
  linkMore,
  show_block_bg,
}) => {
  const intl = useIntl();
  moment.locale(intl.locale);

  const getColumn = (item) => {
    if(!item) {
      return '';
    }

    switch (item.type) {
      case 'link':
        return (
          <Link to={item.link} className={item.class}>
            {item.text}
          </Link>
        )
        break;
      case 'text':
        return item.text;
      case 'richtext':
        return (
          <div
            dangerouslySetInnerHTML={{
              __html: flattenHTMLToAppURL(item.text),
            }}
          />
        )
      default:
        break;
    }
  }

  const tableData = getTableRowData(items, intl);

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
              {tableData.headers?.map((h, index) =>
                <th scope="col" className="text-uppercase" key={index}>{h}</th>
              )}
            </tr>
          </thead>
          <tbody>
              {tableData.body?.flatMap((row, index) => {
                return(
                  <tr key={index}>
                    {
                      row.map((column, index) => (
                        <td key={index}>
                          {getColumn(column)}
                        </td>
                      ))
                    }
                  </tr>
                )
              })}
          </tbody>
        </table>
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
