/**
 * customizations:
 * used design-react-kit button
 *
 *
 * Button component.
 * This is a wrapper for Buttons, to eventually customize Button component if you don't like to use semantic-ui, for example.
 * @module components/Widget/OTPWidget
 */

import { Button as DesignButton } from 'design-react-kit';

const Button = (props) => {
  let _props = { ...props };
  if (props.primary) {
    _props.color = 'primary';
    delete _props.primary;
  }
  if (props.secondary) {
    _props.color = 'secondary';
    delete _props.secondary;
  }
  if (props.basic) {
    _props.outline = true;
    delete _props.basic;
  }
  if (props.size) {
    switch (props.size) {
      case 'mini':
      case 'tiny':
      case 'small':
        _props.size = 'xs';
        break;
      case 'medium':
      case 'large':
        _props.size = 'sm';
        break;
      case 'big':
      case 'huge':
      case 'massive':
        _props.size = 'lg';
        break;
      default:
        break;
    }
  }
  return <DesignButton {..._props} />;
};

export default Button;
