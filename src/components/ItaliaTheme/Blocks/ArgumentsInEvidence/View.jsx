import React from 'react';
import PropTypes from 'prop-types';
import BodyWrapper from './BodyWrapper'
import BottomBody from './BottomBody'
import Block from './Block'
import { useIntl } from 'react-intl';
  
const View = ({ data, id }) => {
  const currentIntl =  useIntl();
  return (
    <div className="block full-width">
      <div className='argumentInEvidence'>
        <BodyWrapper
          data={data}
          inEditMode={false}
        >
          {data.subblocks.map((subblock, index) => (
            <Block
              key={index}
              data={subblock}
              inEditMode={false}
              intl={currentIntl}
            />
          ))}
        </BodyWrapper>
        <BottomBody 
          data={data}
          intl={currentIntl}
        />
      </div>
    </div>
  );
}
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
View.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  id: PropTypes.string.isRequired,
};

export default View;