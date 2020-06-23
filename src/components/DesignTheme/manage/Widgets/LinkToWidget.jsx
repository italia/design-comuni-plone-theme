import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { defineMessages, injectIntl } from 'react-intl';
import { CheckboxWidget, TextWidget } from '@plone/volto/components';
import clearSVG from '@plone/volto/icons/clear.svg';
import navTreeSVG from '@plone/volto/icons/nav.svg';

const messages = defineMessages({
  LinkTo: {
    id: 'Link to',
    defaultMessage: 'Link a',
  },
  openLinkInNewTab: {
    id: 'Open in a new tab',
    defaultMessage: 'Apri in un nuovo tab',
  },
});

class LinkToWidget extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    data: PropTypes.object.isRequired,
    onChange: PropTypes.func,
    openObjectBrowser: PropTypes.func.isRequired,
    linkField: PropTypes.string,
    targetField: PropTypes.string,
    showTarget: PropTypes.bool,
    title: PropTypes.string,
  };

  /**
   * Default properties.
   * @property {Object} defaultProps Default properties.
   * @static
   */
  static defaultProps = {
    linkField: 'href',
    targetField: 'openLinkInNewTab',
    showTarget: true,
  };

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    const {
      data,
      onChange,
      openObjectBrowser,
      intl,
      linkField,
      targetField,
      showTarget,
      title,
    } = this.props;

    return (
      <>
        <TextWidget
          id={linkField}
          title={title ? title : intl.formatMessage(messages.LinkTo)}
          required={false}
          value={data[linkField]}
          icon={data[linkField] ? clearSVG : navTreeSVG}
          iconAction={
            data[linkField]
              ? () => {
                  onChange(linkField, '');
                }
              : () =>
                  openObjectBrowser({
                    mode: 'link',
                    onSelectItem: (url) => {
                      onChange(linkField, url);
                    },
                  })
          }
          onChange={onChange}
        />
        {showTarget && (
          <CheckboxWidget
            id={targetField}
            title={intl.formatMessage(messages.openLinkInNewTab)}
            value={data[targetField] ? data[targetField] : false}
            onChange={onChange}
          />
        )}
      </>
    );
  }
}

export default injectIntl(LinkToWidget);
