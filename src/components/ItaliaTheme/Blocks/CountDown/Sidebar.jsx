import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import { defineMessages, useIntl, FormattedMessage } from 'react-intl';
import {
  ObjectBrowserWidget,
  CheckboxWidget,
  SelectWidget,
} from '@plone/volto/components';
import { DatetimeWidget } from '@plone/volto/components';

const messages = defineMessages({
  endDate: {
    id: 'countDown_endDate',
    defaultMessage: 'Scadenza',
  },
  backgroundImage: {
    id: 'backgroundImage',
    defaultMessage: 'Immagine di sfondo',
  },
  showFullWidth: {
    id: 'show_full_width',
    defaultMessage: 'A tutta larghezza',
  },
  showHours: {
    id: 'countDown_showHours',
    defaultMessage: 'Mostra le ore',
  },
  showMinutes: {
    id: 'countDown_showMinutes',
    defaultMessage: 'Mostra i minuti',
  },
  showSeconds: {
    id: 'countDown_showSeconds',
    defaultMessage: 'Mostra i secondi',
  },
  countDownPosition: {
    id: 'countDown_countDownPosition',
    defaultMessage: 'Posizione del contatore',
  },
});

const Sidebar = ({ block, data, onChangeBlock, required }) => {
  const intl = useIntl();

  useEffect(() => {
    onChangeBlock(block, {
      ...data,
      showFullWidth:
        data.showFullWidth === undefined ? true : data.showFullWidth,
      showHours: data.showHours === undefined ? true : data.showHours,
      showMinutes: data.showMinutes === undefined ? true : data.showMinutes,
      showSeconds: data.showSeconds === undefined ? true : data.showSeconds,
      countDownPosition:
        data.countDownPosition === undefined ? 'right' : data.countDownPosition,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Segment.Group raised>
      <header className="header pulled">
        <h2>
          <FormattedMessage id="count_down_block" defaultMessage="Count down" />
        </h2>
      </header>
      <div className="ui form">
        <ObjectBrowserWidget
          id="background"
          title={intl.formatMessage(messages.backgroundImage)}
          description=""
          required={false}
          widgetOptions={{
            pattern_options: {
              selectableTypes: ['Image'],
              maximumSelectionSize: 1,
            },
          }}
          value={data.background ?? []}
          onChange={(id, value) =>
            onChangeBlock(block, { ...data, [id]: value })
          }
        />
        <CheckboxWidget
          id="showFullWidth"
          title={intl.formatMessage(messages.showFullWidth)}
          value={data.showFullWidth ? data.showFullWidth : false}
          onChange={(name, checked) => {
            onChangeBlock(block, { ...data, [name]: checked });
          }}
        />
        <SelectWidget
          id="countDownPosition"
          title={intl.formatMessage(messages.countDownPosition)}
          required={false}
          value={data.countDownPosition}
          intl={intl}
          onChange={(id, value) => {
            onChangeBlock(block, { ...data, [id]: value });
          }}
          choices={[
            ['right', 'Destra'],
            ['left', 'Sinistra'],
            ['center', 'Centrato'],
          ]}
        />
        <DatetimeWidget
          id="endDate"
          title={intl.formatMessage(messages.endDate)}
          value={data.endDate}
          onChange={(name, value) => {
            onChangeBlock(block, { ...data, [name]: value });
          }}
        />
        <CheckboxWidget
          id="showHours"
          title={intl.formatMessage(messages.showHours)}
          value={data.showHours}
          onChange={(name, checked) => {
            onChangeBlock(block, { ...data, [name]: checked });
          }}
        />
        <CheckboxWidget
          id="showMinutes"
          title={intl.formatMessage(messages.showMinutes)}
          value={data.showMinutes}
          onChange={(name, checked) => {
            onChangeBlock(block, { ...data, [name]: checked });
          }}
        />
        <CheckboxWidget
          id="showSeconds"
          title={intl.formatMessage(messages.showSeconds)}
          value={data.showSeconds}
          onChange={(name, checked) => {
            onChangeBlock(block, { ...data, [name]: checked });
          }}
        />
      </div>
    </Segment.Group>
  );
};

Sidebar.propTypes = {
  block: PropTypes.string.isRequired,
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  onChangeBlock: PropTypes.func.isRequired,
  openObjectBrowser: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

export default Sidebar;
