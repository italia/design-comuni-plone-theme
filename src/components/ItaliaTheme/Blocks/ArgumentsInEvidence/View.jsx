import React from 'react';
import PropTypes from 'prop-types';
import BodyWrapper from 'design-volto-theme/components/ItaliaTheme/Blocks/ArgumentsInEvidence/BodyWrapper';
import BottomBody from 'design-volto-theme/components/ItaliaTheme/Blocks/ArgumentsInEvidence/BottomBody';
import Block from 'design-volto-theme/components/ItaliaTheme/Blocks/ArgumentsInEvidence/Block';
import { ArgumentsInEvidenceBackground } from 'design-volto-theme/components/ItaliaTheme';
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
