/**
 * ViewBlock.
 * @module components/ItaliaTheme/Blocks/Accordion/Block/ViewBlock
 */

import React from 'react';
import PropTypes from 'prop-types';
import redraft from 'redraft';

import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { Card, CardBody } from 'design-react-kit';

import { TextBlockView } from '@plone/volto-slate/blocks/Text';
/**
 * ViewBlock class.
 * @class ViewBlock
 * @extends Component
 */
const ViewBlock = ({ data, isOpen, toggle, id, index }) => {
  const text = <TextBlockView data={{ value: data.text }} />;
  const tel = <TextBlockView data={{ value: data.tel }} />;
  const email = <TextBlockView data={{ value: data.email }} />;
  return (
    <Card
      className="card-bg rounded subblock-view "
      noWrapper={false}
      space
      tag="div"
    >
      <CardBody tag="div">
        {data.title && <div className="contact-title">{data.title}</div>}
        {text && <div className="contact-text">{text}</div>}

        {tel && (
          <div className="contact-info">
            <div className="icon-wrapper">
              <Icon icon="phone-alt" />
            </div>
            <div className="tel">{tel}</div>
          </div>
        )}

        {email && (
          <div className="contact-info">
            <div className="icon-wrapper">
              <Icon icon="envelope" />
            </div>
            <div className="email">{email}</div>
          </div>
        )}
      </CardBody>
    </Card>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
ViewBlock.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ViewBlock;
