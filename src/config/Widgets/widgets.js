import React from 'react';

import { DatetimeWidget } from '@plone/volto/config/Widgets';
import { ArrayWidget, WysiwygWidget } from '@plone/volto/components';
import { MultilingualWidget } from 'volto-multilingual-widget';

import { defaultIconWidgetOptions } from 'design-comuni-plone-theme/helpers';
import {
  CharCounterTextareaWidget,
  SearchSectionsConfigurationWidget,
  CharCounterTextWidget,
  IconWidget,
  SubsiteSocialLinksWidget,
  MenuConfigurationForm,
  SecondaryMenuConfigurationForm,
  SubFooterConfigurationForm,
  ColorListWidget,
  PathFiltersWidget,
  LocationFiltersWidget,
  CanaleDigitaleWidget,
  LuoghiCorrelatiEventoWidget,
} from 'design-comuni-plone-theme/components/ItaliaTheme/manage/Widgets';

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
      canale_digitale: CanaleDigitaleWidget,
    },
    widget: {
      ...config.widgets.widget,
      richtext: WysiwygWidget,
      color_list: ColorListWidget,
      path_filters: PathFiltersWidget,
      location_filter: LocationFiltersWidget,
      luoghi_correlati_evento: LuoghiCorrelatiEventoWidget,
    },
  };
};

export default getItaliaWidgets;
