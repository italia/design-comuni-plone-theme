import { Component, Children } from 'react';
import PropTypes from 'prop-types';
import withSideEffect from 'react-side-effect';

/**
 * @export
 * @class RemoveBodyClass
 * @extends {Component}
 */
class RemoveBodyClass extends Component {
  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    if (this.props.children) {
      return Children.only(this.props.children);
    }
    return null;
  }
}

RemoveBodyClass.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
};

RemoveBodyClass.defaultProps = {
  children: null,
  className: null,
};

/**
 * reducePropsToState
 * @function reducePropsToState
 * @param {*} propsList propsList
 * @returns {List} classList
 */
function reducePropsToState(propsList) {
  let classList = [];
  propsList.forEach((props) => {
    if (props.className) {
      classList = classList.concat(props.className);
    }
  });
  return classList;
}

/**
 * handleStateChangeOnClient
 * @function handleStateChangeOnClient
 * @param {*} classList classList
 * @returns {null} null
 */
function handleStateChangeOnClient(classList) {
  //  document.body.className = '';
  let domClassNames = [];
  Object.keys(document.body.classList).forEach((k) => {
    domClassNames.push(document.body.classList[k]);
  });

  classList.forEach((className) => {
    // This allows the component to accept more than one class at the same time
    if (className.includes(' ')) {
      className.split(' ').forEach((className) => {
        if (document.body.classList.contains(className)) {
          domClassNames.splice(domClassNames.indexOf(className), 1);
        }
      });
      document.body.classList = domClassNames.join(' ');
    } else {
      if (document.body.classList.contains(className)) {
        domClassNames.splice(domClassNames.indexOf(className), 1);
        document.body.classList = domClassNames.join(' ');
      }
    }
  });
}

export default withSideEffect(
  reducePropsToState,
  handleStateChangeOnClient,
)(RemoveBodyClass);
