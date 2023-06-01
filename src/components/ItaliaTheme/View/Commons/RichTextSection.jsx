import PropTypes from 'prop-types';
import cx from 'classnames';
import { RichTextRender } from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const RichTextSection = ({
  title,
  title_tag = 'h2',
  show_title = true,
  data,
  tag_id,
  add_class,
  anchorOffset,
  hasBg,
  p,
  children,
  lighthouseId = '',
}) => {
  const content_to_display = RichTextRender({
    data,
    add_class,
    serif: true,
    lighthouseId,
  });

  const Tag = title_tag;
  const padding = `p-${p}`;

  return content_to_display || children ? (
    <section
      id={tag_id}
      className={cx('it-page-section mb-5', {
        'anchor-offset': anchorOffset,
        'bg-primary': hasBg,
        [padding]: p,
      })}
      menu_title={title ? title : ''}
      style={{
        '--bs-bg-opacity': hasBg ? '.05' : undefined,
      }}
    >
      {title && (
        <Tag
          id={title_tag === 'h2' ? `header-${tag_id}` : undefined}
          className={cx('mb-3 h4', {
            'sr-only': !show_title,
          })}
        >
          {title}
        </Tag>
      )}
      {content_to_display}
      {children}
    </section>
  ) : null;
};
export default RichTextSection;

RichTextSection.propTypes = {
  title: PropTypes.string,
  title_tag: PropTypes.oneOf(['h2', 'h3', 'h4', 'h5', 'h6']),
  data: PropTypes.object,
  tag_id: PropTypes.string,
  add_class: PropTypes.string,
  anchorOffset: PropTypes.bool,
  hasBg: PropTypes.bool,
  p: PropTypes.oneOf(['1', '2', '3', '4', '5']),
  lighthouseId: PropTypes.string,
};
