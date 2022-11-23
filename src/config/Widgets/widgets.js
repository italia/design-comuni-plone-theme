import React from 'react';
import CharCounterDescriptionWidget from 'design-volto-theme/components/ItaliaTheme/manage/Widgets/CharCounterDescriptionWidget';
import { DatetimeWidget } from '@plone/volto/config/Widgets';
import { ArrayWidget } from '@plone/volto/components';
import { MultilingualWidget } from 'volto-multilingual-widget';
import IconWidget from 'design-volto-theme/components/ItaliaTheme/manage/Widgets/IconWidget';
import SubsiteSocialLinksWidget from 'design-volto-theme/components/ItaliaTheme/manage/Widgets/SubsiteSocialLinksWidget';
import SearchSectionsConfigurationWidget from 'design-volto-theme/components/ItaliaTheme/manage/Widgets/SearchSectionsConfigurationWidget/SearchSectionsConfigurationWidget';
import { defaultIconWidgetOptions } from 'design-volto-theme/helpers/index';
import {
  ColorListWidget,
  PathFiltersWidget,
  LocationFiltersWidget,
} from 'design-volto-theme/components/ItaliaTheme';

//import TinymceWidget from 'design-volto-theme/components/ItaliaTheme/manage/Widgets/TinymceWidget';

const getItaliaWidgets = (config) => {
  return {
    id: {
      ...config.widgets.id,
      description: CharCounterDescriptionWidget,
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
      // richtext: TinymceWidget
      color_list: ColorListWidget,
      path_filters: PathFiltersWidget,
      location_filter: LocationFiltersWidget,
    },
  };
};

export default getItaliaWidgets;
