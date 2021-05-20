/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import TemplatesOptions from '@italia/components/ItaliaTheme/Blocks/Listing/Options/TemplatesOptions';

const messages = defineMessages({
  show_only_first_ribbon: {
    id: 'show_only_first_ribbon',
    defaultMessage: 'Mostra il nastro solo sulla prima card',
  },
});

const RibbonCardTemplateOptions = (props) => {
  const { data, block, onChangeBlock } = props;
  const intl = useIntl();

  const setDefaults = () => {
    onChangeBlock(block, {
      ...data,
      show_section: data.show_section === undefined ? true : data.show_section,
      show_type: data.show_type === undefined ? false : data.show_type,
      show_icon: data.show_icon === undefined ? true : data.show_icon,
      show_description:
        data.show_description === undefined ? true : data.show_description,
    });
  };

  useEffect(() => {
    setDefaults();
  }, []);

  useEffect(() => {
    if (!data.show_detail_link) {
      onChangeBlock(block, {
        ...data,
        detail_link_label: undefined,
      });
    }
  }, [data.show_detail_link]);

  return (
    <>
      <TemplatesOptions
        fields={[
          'show_only_first_ribbon',
          'show_icon',
          'show_section',
          'show_type',
          'hide_dates',
          'show_description',
          'show_detail_link',
        ]}
        fieldsConfig={{
          show_only_first_ribbon: {
            default: false,
            label: intl.formatMessage(messages.show_only_first_ribbon),
          },
          hide_dates: { default: false },
          show_detail_link: { default: false },
          show_type: { default: false },
        }}
        {...props}
      />
    </>
  );
};

RibbonCardTemplateOptions.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
};

export default RibbonCardTemplateOptions;
