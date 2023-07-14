/**
 * Customizations:
 * - used design-react-kit Grid component
 */
import { Row, Col } from 'design-react-kit';
import cx from 'classnames';
import { RenderBlocks } from '@plone/volto/components';
import { withBlockExtensions } from '@plone/volto/helpers';
import config from '@plone/volto/registry';

const GridBlockView = (props) => {
  const { data, path, className } = props;
  const metadata = props.metadata || props.properties;
  const columns = data.blocks_layout.items;
  const blocksConfig =
    config.blocks.blocksConfig[data['@type']].blocksConfig ||
    props.blocksConfig;
  const location = {
    pathname: path,
  };
  return (
    <div
      className={cx('block', data['@type'], className, {
        one: columns?.length === 1,
        two: columns?.length === 2,
        three: columns?.length === 3,
        four: columns?.length === 4,
      })}
    >
      {data.headline && <h2 className="headline">{data.headline}</h2>}

      <Row>
        <RenderBlocks
          {...props}
          blockWrapperTag={Col}
          metadata={metadata}
          content={data}
          location={location}
          blocksConfig={blocksConfig}
          isContainer
        />
      </Row>
    </div>
  );
};

export default withBlockExtensions(GridBlockView);
