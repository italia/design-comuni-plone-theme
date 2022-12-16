/**
 * File view component.
 * @module components/theme/View/FileView
 * - changed card layout
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'design-react-kit';
import { DownloadFileFormat } from 'design-comuni-plone-theme/components/ItaliaTheme/View';

/**
 * File view component class.
 * @function FileView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */

const FileView = ({ content }) => (
  <Container className="view-wrapper px-4 my-4">
    <Row className="header-row">
      <Col>
        <h1 className="documentFirstHeading">
          {content.title}
          {content.subtitle && ` - ${content.subtitle}`}
        </h1>
        {content.description && (
          <p className="documentDescription">{content.description}</p>
        )}
      </Col>
    </Row>

    {content.file?.download && (
      <Row className="content-row">
        <Col className="card-wrapper card-teaser-wrapper">
          <div className="genericcard card card-teaser shadow p-4 mt-3 rounded">
            <div className="card-body">
              <h5 className="card-title">{content.file.filename}</h5>
              <DownloadFileFormat file={content.file} iconSize="2x" />
            </div>
          </div>
        </Col>
      </Row>
    )}
  </Container>
);

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
FileView.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    file: PropTypes.shape({
      download: PropTypes.string,
      filename: PropTypes.string,
    }),
  }).isRequired,
};

export default FileView;
