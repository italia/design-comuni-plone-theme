import PropTypes from 'prop-types';
import cx from 'classnames';
import { RichTextRender } from 'design-comuni-plone-theme/components/ItaliaTheme/View';
/**
 * RichText view component class.
 * @function RichText
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const RichText = ({
  title,
  title_size = 'h5',
  content,
  add_class,
  children,
  serif = true,
  lighthouseId = '',
  context,
}) => {
  let content_to_display = RichTextRender({
    content: content,
    add_class: add_class,
    serif: serif,
    lighthouseId,
    context,
  });

  const Tag = title_size;

  return content_to_display || children || title ? (
    <>
      {title && (
        <Tag
          className={cx('mt-4', {
            'fw-bold': title_size === 'h6',
          })}
        >
          {title}
        </Tag>
      )}
      {content_to_display}
      {children}
    </>
  ) : null;
};
export default RichText;

RichText.propTypes = {
  title: PropTypes.string,
  title_size: PropTypes.oneOf(['h2', 'h3', 'h4', 'h5', 'h6']),
  content: PropTypes.object,
  add_class: PropTypes.string,
  serif: PropTypes.bool,
  lighthouseId: PropTypes.string,
  context: PropTypes.object,
};
