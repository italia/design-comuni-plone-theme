import React from 'react';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  successivo: {
    id: 'successivo',
    defaultMessage: 'Successivo',
  },
});

export default function NextArrow(props) {
  const intl = useIntl();
  const { className, style, onClick, onKeyDown, title, id } = props;
  const _title = title ?? intl.formatMessage(messages.successivo);
  return (
    <button
      className={className}
      style={{ ...style }}
      onClick={onClick}
      title={_title}
      aria-label={_title}
      aria-hidden={false}
      onKeyDown={onKeyDown}
      id={id}
    >
      <Icon icon="chevron-right" key="chevron-right" title={_title} />
      <span class="visually-hidden">{_title}</span>
    </button>
  );
}
