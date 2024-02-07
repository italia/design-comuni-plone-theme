/**
 * View title block.
 * @module components/manage/Blocks/Title/View
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardTitle } from 'design-react-kit';
import BodyWrapper from './BodyWrapper';
import { TextBlockView } from '@plone/volto-slate/blocks/Text';

/**
 * View title block class.
 * @class View
 * @extends Component
 */

const TextCardView = ({ data, id, block }) => {
  return (
    <BodyWrapper data={data} inEditMode={false}>
      <div className="simple-text-card-wrapper">
        <Card
          color="white"
          className="card-bg rounded"
          noWrapper={false}
          space
          tag="div"
        >
          <CardBody>
            <CardTitle tag="h3" className="h4" id={id + '-title'}>
              {data.simple_card_title}
            </CardTitle>
            <hr />
            <TextBlockView data={{ value: data.simple_card_content }} />
          </CardBody>
        </Card>
      </div>
    </BodyWrapper>
  );
};
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
TextCardView.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default TextCardView;
