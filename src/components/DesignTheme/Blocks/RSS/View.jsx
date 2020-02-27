import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import RssBody from './RssBody';

const View = ({ data, properties, block, path }) => {
  return (
    <div className={cx('block listing', data.template)}>
      <RssBody data={data} properties={properties} block={block} path={path} />
    </div>
  );
};

View.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  properties: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string,
};

export default View;
