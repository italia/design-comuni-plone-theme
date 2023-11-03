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
  title_size = 'h3',
  title_class_name = 'h5',
  data,
  add_class,
  children,
  serif = true,
  lighthouseId = '',
  content,
}) => {
  let content_to_display = RichTextRender({
    data,
    add_class,
    serif,
    lighthouseId,
    content,
  });

  const Tag = title_size;

  return content_to_display || children || title ? (
    <>
      {title && (
        <Tag
          className={cx('mt-4 it-page-subsection', {
            'fw-bold': title_size === 'h6',
            [title_class_name]: title_class_name,
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
  title_class_name: PropTypes.string,
  data: PropTypes.object,
  add_class: PropTypes.string,
  serif: PropTypes.bool,
  lighthouseId: PropTypes.string,
  content: PropTypes.object,
};
