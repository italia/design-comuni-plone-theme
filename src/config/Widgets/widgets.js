import React from 'react';
import CharCounterTextareaWidget from 'design-comuni-plone-theme/components/ItaliaTheme/manage/Widgets/CharCounterTextareaWidget';
import CharCounterTextWidget from 'design-comuni-plone-theme/components/ItaliaTheme/manage/Widgets/CharCounterTextWidget';
import { DatetimeWidget } from '@plone/volto/config/Widgets';
import { ArrayWidget, WysiwygWidget } from '@plone/volto/components';
import { MultilingualWidget } from 'volto-multilingual-widget';
import IconWidget from 'design-comuni-plone-theme/components/ItaliaTheme/manage/Widgets/IconWidget';
import SubsiteSocialLinksWidget from 'design-comuni-plone-theme/components/ItaliaTheme/manage/Widgets/SubsiteSocialLinksWidget';
import MenuConfigurationForm from 'design-comuni-plone-theme/components/ItaliaTheme/manage/Widgets/MenuConfigurationForm';
import SecondaryMenuConfigurationForm from 'design-comuni-plone-theme/components/ItaliaTheme/manage/Widgets/SecondaryMenuConfigurationForm';
import SubFooterConfigurationForm from 'design-comuni-plone-theme/components/ItaliaTheme/manage/Widgets/SubFooterConfigurationForm';
import SearchSectionsConfigurationWidget from 'design-comuni-plone-theme/components/ItaliaTheme/manage/Widgets/SearchSectionsConfigurationWidget/SearchSectionsConfigurationWidget';
import { defaultIconWidgetOptions } from 'design-comuni-plone-theme/helpers';
import {
  ColorListWidget,
  PathFiltersWidget,
  LocationFiltersWidget,
} from 'design-comuni-plone-theme/components/ItaliaTheme';

const getItaliaWidgets = (config) => {
  config.registerComponent({
    name: 'MenuConfigurationForm',
    component: MenuConfigurationForm,
  });
  config.registerComponent({
    name: 'SecondaryMenuConfigurationForm',
    component: SecondaryMenuConfigurationForm,
  });
  config.registerComponent({
    name: 'SubFooterConfigurationForm',
    component: SubFooterConfigurationForm,
  });

  return {
    id: {
      ...config.widgets.id,
      title: CharCounterTextWidget,
      description: CharCounterTextareaWidget,
      motivo_stato_servizio: (props) => {
        const BlocksWidget = config.widgets.widget.blocks;
        return (
          <BlocksWidget {...props} required={!!props.formData.stato_servizio} />
        );
      },
      icona: (props) => (
        <IconWidget {...props} defaultOptions={defaultIconWidgetOptions} />
      ),
      icon: (
        props, //per il content-type FaqFolder
      ) => <IconWidget {...props} defaultOptions={defaultIconWidgetOptions} />,
      cookie_consent_configuration: MultilingualWidget(),
      data_conclusione_incarico: (props) => (
        <DatetimeWidget {...props} dateOnly={true} />
      ),
      data_insediamento: (props) => (
        <DatetimeWidget {...props} dateOnly={true} />
      ),
      search_sections: SearchSectionsConfigurationWidget,
      tipologie_notizia: MultilingualWidget(
        (props) => <ArrayWidget {...props} creatable={true} wrapped={false} />,
        [],
      ),
      tipologie_unita_organizzativa: MultilingualWidget(
        (props) => <ArrayWidget {...props} creatable={true} wrapped={false} />,
        [],
      ),
      tipologie_documento: MultilingualWidget(
        (props) => <ArrayWidget {...props} creatable={true} wrapped={false} />,
        [],
      ),
      tipologie_persona: MultilingualWidget(
        (props) => <ArrayWidget {...props} creatable={true} wrapped={false} />,
        [],
      ),
      ruoli_persona: MultilingualWidget(
        (props) => <ArrayWidget {...props} creatable={true} wrapped={false} />,
        [],
      ),
      subsite_social_links: SubsiteSocialLinksWidget,
    },
    widget: {
      ...config.widgets.widget,
      richtext: WysiwygWidget,
      color_list: ColorListWidget,
      path_filters: PathFiltersWidget,
      location_filter: LocationFiltersWidget,
    },
  };
};

export default getItaliaWidgets;
