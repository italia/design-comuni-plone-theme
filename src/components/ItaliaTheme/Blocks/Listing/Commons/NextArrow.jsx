import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';

export default function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <Icon icon="chevron-right" key="chevron-right" />
    </div>
  );
}
