import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Container, Row, Col } from 'design-react-kit';

const AmministrazioneTrasparenteTablesTemplate = ({
  isEditMode,
  title,
  linkTitle,
  linkHref,
  show_block_bg,
}) => {
  return (
    <div
      className={cx('persone-amministrazione-trasparente', {
        'public-ui': isEditMode,
      })}
    >
      <Container className="px-4">
        <div className="skeleton-template">
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
                {[0, 1, 2, 3]?.map((i) => (
                  <th scope="col" className="text-uppercase" key={i}></th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((r) => {
                return (
                  <tr key={r}>
                    {[0, 1, 2, 3].map((c) => (
                      <td key={c}></td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
          {linkHref && <div className="link-button text-center my-4"></div>}
        </div>
      </Container>
    </div>
  );
};

AmministrazioneTrasparenteTablesTemplate.propTypes = {
  linkTitle: PropTypes.any,
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default AmministrazioneTrasparenteTablesTemplate;
