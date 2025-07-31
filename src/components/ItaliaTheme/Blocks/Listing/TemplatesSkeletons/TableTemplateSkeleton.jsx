import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Table, Container } from 'design-react-kit';

const SimpleListTemplateSkeleton = (props) => {
  const { title, linkHref } = props;
  return (
    <div className="table-skeleton-template">
      <Container className="px-4">
        <div className="skeleton-template">
          {title && (
            <Row>
              <Col>
                <h2 className="mb-4">{title}</h2>
              </Col>
            </Row>
          )}

          <Table size="sm" responsive bordered>
            <thead>
              <tr>
                {[0, 1, 2, 3, 4].map((i) => (
                  <th scope="col" key={i}></th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <tr key={i}>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <td key={i}></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
          {linkHref && <div className="link-button text-center my-5"></div>}
        </div>
      </Container>
    </div>
  );
};

SimpleListTemplateSkeleton.propTypes = {
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default SimpleListTemplateSkeleton;
