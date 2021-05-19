/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { CheckboxWidget } from '@plone/volto/components';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  hide_dates: {
    id: 'hide_dates',
    defaultMessage: 'Nascondi le date',
  },
  show_icon: {
    id: 'show_icon',
    defaultMessage: "Mostra l'icona",
  },
  show_section: {
    id: 'show_section',
    defaultMessage: 'Mostra la sezione',
  },
  show_type: {
    id: 'show_type',
    defaultMessage: 'Mostra il tipo',
  },
  show_description: {
    id: 'show_description',
    defaultMessage: 'Mostra la descrizione',
  },
  show_topics: {
    id: 'show_topics',
    defaultMessage: 'Mostra gli argomenti',
  },
});

const InEvidenceTemplateOptions = ({
  data,
  block,
  onChangeBlock,
  required = false,
}) => {
  const intl = useIntl();

  const setDefaults = () => {
    onChangeBlock(block, {
      ...data,
      show_icon: data.show_icon === undefined ? true : data.show_icon,
      show_section: data.show_section === undefined ? false : data.show_section,
      show_type: data.show_type === undefined ? true : data.show_type,
      show_description:
        data.show_description === undefined ? true : data.show_description,
      show_topics: data.show_topics === undefined ? true : data.show_topics,
    });
  };

  useEffect(() => {
    setDefaults();
  }, []);

  return (
    <>
      <CheckboxWidget
        id="show_icon"
        title={intl.formatMessage(messages.show_icon)}
        value={data.show_icon ? data.show_icon : false}
        onChange={(id, value) => {
          onChangeBlock(block, {
            ...data,
            [id]: value,
          });
        }}
      />

      <CheckboxWidget
        id="show_section"
        title={intl.formatMessage(messages.show_section)}
        value={data.show_section ? data.show_section : false}
        onChange={(id, value) => {
          onChangeBlock(block, {
            ...data,
            [id]: value,
          });
        }}
      />

      <CheckboxWidget
        id="show_type"
        title={intl.formatMessage(messages.show_type)}
        value={data.show_type ? data.show_type : false}
        onChange={(id, value) => {
          onChangeBlock(block, {
            ...data,
            [id]: value,
          });
        }}
      />

      <CheckboxWidget
        id="hide_dates"
        title={intl.formatMessage(messages.hide_dates)}
        value={data.hide_dates ? data.hide_dates : false}
        onChange={(id, value) => {
          onChangeBlock(block, {
            ...data,
            [id]: value,
          });
        }}
      />

      <CheckboxWidget
        id="show_description"
        title={intl.formatMessage(messages.show_description)}
        value={data.show_description ? data.show_description : false}
        onChange={(id, value) => {
          onChangeBlock(block, {
            ...data,
            [id]: value,
          });
        }}
      />

      <CheckboxWidget
        id="show_topics"
        title={intl.formatMessage(messages.show_topics)}
        value={data.show_topics ? data.show_topics : false}
        onChange={(id, value) => {
          onChangeBlock(block, {
            ...data,
            [id]: value,
          });
        }}
      />
    </>
  );
};

InEvidenceTemplateOptions.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
};

export default InEvidenceTemplateOptions;
