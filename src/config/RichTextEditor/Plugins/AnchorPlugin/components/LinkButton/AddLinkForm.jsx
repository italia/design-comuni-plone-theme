/**
 * Add link form.
 * @module components/manage/AnchorPlugin/components/LinkButton/AddLinkForm
 * Customizzato
 * - Aggiunta gestione data-element
 * - Aggiunte opzioni per la select del data-element
 * - Modificate icone ed elementi per stilizzare il tooltip del link
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import cx from 'classnames';
import {
  addAppURL,
  isInternalURL,
  flattenToAppURL,
  URLUtils,
} from '@plone/volto/helpers';

import { doesNodeContainClick } from 'semantic-ui-react/dist/commonjs/lib';
import { Input, Form, Button } from 'semantic-ui-react';
import { defineMessages, injectIntl } from 'react-intl';

import clearSVG from '@plone/volto/icons/clear.svg';
import navTreeSVG from '@plone/volto/icons/nav.svg';
import aheadSVG from '@plone/volto/icons/ahead.svg';

import withObjectBrowser from '@plone/volto/components/manage/Sidebar/ObjectBrowser';
import { withRouter } from 'react-router';

import { Icon, SelectWidget } from '@plone/volto/components';

const messages = defineMessages({
  placeholder: {
    id: 'Enter URL or select an item',
    defaultMessage: 'Enter URL or select an item',
  },
  placeholderLighthouse: {
    id: 'Select a data-element ID',
    defaultMessage: 'Seleziona un data-element ID', // TO DO: da sistemare quando si risolve il bug su i18n
  },
});

/**
 * Add link form class.
 * @class AddLinkForm
 * @extends Component
 */
class AddLinkForm extends Component {
  static propTypes = {
    onChangeValue: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
    onOverrideContent: PropTypes.func.isRequired,
    theme: PropTypes.objectOf(PropTypes.any).isRequired,
    openObjectBrowser: PropTypes.func.isRequired,
  };

  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs AddLinkForm
   */
  constructor(props) {
    super(props);

    this.state = {
      dataElement: props.data.dataElement,
      value: isInternalURL(props.data.url)
        ? flattenToAppURL(props.data.url)
        : props.data.url || '',
      isInvalid: false,
    };
    this.onRef = this.onRef.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Options to data-element select
    this.selectOptions = [
      ['appointment-booking', 'appointment-booking'],
      ['faq', 'faq'],
      ['report-inefficiency', 'report-inefficiency'],
      ['accessibility-link', 'accessibility-link'],
      ['privacy-policy-link', 'privacy-policy-link'],
      ['legal-notes', 'legal-notes'],
    ];
  }

  /**
   * Component did mount
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    setTimeout(() => this.input.focus(), 50);
    document.addEventListener('mousedown', this.handleClickOutside, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside, false);
  }

  handleClickOutside = (e) => {
    if (
      this.linkFormContainer.current &&
      doesNodeContainClick(this.linkFormContainer.current, e)
    )
      return;
    if (this.linkFormContainer.current && this.props.isObjectBrowserOpen)
      return;
    this.onClose();
  };

  /**
   * Ref handler
   * @method onRef
   * @param {Object} node Node
   * @returns {undefined}
   */
  onRef(node) {
    this.input = node;
  }

  linkFormContainer = React.createRef();

  /**
   * Change handler
   * @method onChange
   * @param {Object} value Value
   * @returns {undefined}
   */
  onChange(value, clear) {
    let nextState = { value };
    if (!clear) {
      if (
        this.state.isInvalid &&
        URLUtils.isUrl(URLUtils.normalizeUrl(value))
      ) {
        nextState.isInvalid = false;
      }

      if (isInternalURL(value)) {
        nextState = { value: flattenToAppURL(value) };
      }
    }
    this.setState(nextState);

    if (clear) this.props.onClear();
  }

  /**
   * Select item handler
   * @method onSelectItem
   * @param {string} e event
   * @param {string} url Url
   * @returns {undefined}
   */
  onSelectItem = (e, url) => {
    e.preventDefault();
    this.setState({
      value: url,
      isInvalid: false,
    });
    this.props.onChangeValue(addAppURL(url));
  };

  /**
   * Clear handler
   * @method clear
   * @param {Object} value Value
   * @returns {undefined}
   */
  clear() {
    const nextState = { value: '' };
    this.setState(nextState);

    this.props.onClear();
  }

  /**
   * Close handler
   * @method onClose
   * @returns {undefined}
   */
  onClose = () => this.props.onOverrideContent(undefined);

  /**
   * Keydown handler
   * @method onKeyDown
   * @param {Object} e Event object
   * @returns {undefined}
   */
  onKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      this.onSubmit();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      this.onClose();
    }
  }

  /**
   * Submit handler
   * @method onSubmit
   * @returns {undefined}
   */
  onSubmit() {
    let { value: url, dataElement } = this.state;

    const checkedURL = URLUtils.checkAndNormalizeUrl(url);
    url = checkedURL.url;
    if (!checkedURL.isValid) {
      this.setState({ isInvalid: true });
      return;
    }

    const editorStateUrl = isInternalURL(url) ? addAppURL(url) : url;

    this.props.onChangeValue(editorStateUrl, dataElement);
    this.onClose();
  }

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    const { value, isInvalid, dataElement } = this.state;
    const className = isInvalid
      ? cx(
          'ui input editor-link',
          'input-anchorlink-theme',
          'input-anchorlink-theme-Invalid',
        )
      : cx('ui input editor-link', 'input-anchorlink-theme');

    return (
      <div className="link-form-container" ref={this.linkFormContainer}>
        <Form.Field>
          <div className="wrapper-fields">
            {/* INPUT LINK */}
            <div className="wrap-field">
              <Input
                className={className}
                id={`field-link`}
                name="link"
                value={value || ''}
                onChange={({ target }) => this.onChange(target.value)}
                placeholder={this.props.intl.formatMessage(
                  messages.placeholder,
                )}
                onKeyDown={this.onKeyDown}
                ref={this.onRef}
              />
              {value.length > 0 ? (
                <Button.Group>
                  <Button
                    basic
                    className="cancel"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      this.clear();
                    }}
                  >
                    <Icon name={clearSVG} size="20px" />
                  </Button>
                </Button.Group>
              ) : (
                <Button.Group>
                  <Button
                    basic
                    icon
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      this.props.openObjectBrowser({
                        mode: 'link',
                        overlay: true,
                        onSelectItem: (url) => {
                          this.onChange(url);
                          this.onSubmit();
                        },
                      });
                    }}
                  >
                    <Icon name={navTreeSVG} size="22px" />
                  </Button>
                </Button.Group>
              )}
            </div>

            {/* DATA-ELEMENT SELECT */}
            <div className="wrap-field">
              <SelectWidget
                id="data-element-select"
                title="data-element"
                placeholder={this.props.intl.formatMessage(
                  messages.placeholderLighthouse,
                )}
                isMulti={false}
                value={dataElement}
                onChange={(_, value) => {
                  this.setState({ dataElement: value });
                }}
                choices={this.selectOptions}
                noValueOption={false}
                wrapped={false}
              />
            </div>
          </div>

          {/* BUTTON SUBMIT */}
          <div className="wrapper-submit">
            <Button.Group>
              <Button
                basic
                primary
                disabled={!value.length > 0}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  this.onSubmit();
                }}
                onKeyDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  this.onSubmit();
                }}
              >
                <Icon name={aheadSVG} size="28px" />
              </Button>
            </Button.Group>
          </div>
        </Form.Field>
      </div>
    );
  }
}

export default compose(injectIntl, withRouter, withObjectBrowser)(AddLinkForm);
