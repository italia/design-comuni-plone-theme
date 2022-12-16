import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';

export default function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <Icon icon="chevron-left" key="chevron-left-prev" />
    </div>
  );
}
