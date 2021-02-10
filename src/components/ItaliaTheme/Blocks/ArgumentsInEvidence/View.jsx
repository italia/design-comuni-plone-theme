import React from 'react';
import PropTypes from 'prop-types';
import BodyWrapper from './BodyWrapper';
import BottomBody from './BottomBody';
import Block from './Block';
import { ArgumentsInEvidenceBackground } from '@italia/components/ItaliaTheme';
import { useIntl } from 'react-intl';

const View = ({ data, id }) => {
  const currentIntl = useIntl();

  return (
    <div className="block full-width">
      <div className="argumentInEvidence">
        <ArgumentsInEvidenceBackground />
        <BodyWrapper data={data} inEditMode={false}>
          {data.subblocks
            ?.filter((subblock) => {
              return subblock.argument?.length > 0;
            })
            .map((subblock, index) => (
              <Block
                key={index}
                data={subblock}
                inEditMode={false}
                intl={currentIntl}
              />
            ))}
        </BodyWrapper>
        <BottomBody data={data} intl={currentIntl} />
      </div>
    </div>
  );
};

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
