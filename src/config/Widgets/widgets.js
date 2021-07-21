import React from 'react';
import CharCounterDescriptionWidget from '@italia/components/ItaliaTheme/manage/Widgets/CharCounterDescriptionWidget';
import { DatetimeWidget } from '@plone/volto/config/Widgets';
import { ArrayWidget } from '@plone/volto/components';
import { MultilingualWidget } from '@italia/addons/volto-multilingual-widget';
import IconWidget from '@italia/components/ItaliaTheme/manage/Widgets/IconWidget';
import SubsiteSocialLinksWidget from '@italia/components/ItaliaTheme/manage/Widgets/SubsiteSocialLinksWidget';
import SearchSectionsConfigurationWidget from '@italia/components/ItaliaTheme/manage/Widgets/SearchSectionsConfigurationWidget/SearchSectionsConfigurationWidget';
import { defaultIconWidgetOptions } from '@italia/helpers/index';
import {
  ColorListWidget,
  PathFiltersWidget,
} from '@italia/components/ItaliaTheme';

//import TinymceWidget from '@italia/components/ItaliaTheme/manage/Widgets/TinymceWidget';

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
        (props) => <ArrayWidget {...props} wrapped={false} />,
        [],
      ),
      tipologie_unita_organizzativa: MultilingualWidget(
        (props) => <ArrayWidget {...props} wrapped={false} />,
        [],
      ),
      tipologie_documento: MultilingualWidget(
        (props) => <ArrayWidget {...props} wrapped={false} />,
        [],
      ),
      tipologie_persona: MultilingualWidget(
        (props) => <ArrayWidget {...props} wrapped={false} />,
        [],
      ),
      subsite_social_links: SubsiteSocialLinksWidget,
    },
    widget: {
      ...config.widgets.widget,
      // richtext: TinymceWidget
      color_list: ColorListWidget,
      path_filters: PathFiltersWidget,
    },
  };
};

export default getItaliaWidgets;
