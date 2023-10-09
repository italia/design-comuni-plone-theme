/**
 * ViewBlock.
 * @module components/ItaliaTheme/Blocks/Accordion/Block/ViewBlock
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody } from 'design-react-kit';
import { TextBlockView } from '@plone/volto-slate/blocks/Text';
import { checkRichTextHasContent } from 'design-comuni-plone-theme/helpers';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';

/**
 * ViewBlock class.
 * @class ViewBlock
 * @extends Component
 */
const ViewBlock = ({ data, isOpen, toggle, id, index }) => {
  const text = checkRichTextHasContent(data.text) ? (
    <TextBlockView data={{ value: data.text }} />
  ) : null;
  const tel = checkRichTextHasContent(data.tel) ? (
    <TextBlockView data={{ value: data.tel }} />
  ) : null;
  const email = checkRichTextHasContent(data.email) ? (
    <TextBlockView data={{ value: data.email }} />
  ) : null;

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
