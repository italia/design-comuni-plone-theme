import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';
import { RichTextSection } from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  tempi_e_scadenze: {
    id: 'tempi_e_scadenze',
    defaultMessage: 'Tempi e scadenze',
  },
});

const ServizioTempiScadenze = ({ content, moment }) => {
  const intl = useIntl();
  const Moment = moment.default;
  Moment.locale(intl.locale);
  return (
    <RichTextSection
      content={content.tempi_e_scadenze}
      add_class="style_ol_list cmp-timeline"
      tag_id="deadlines"
      title={intl.formatMessage(messages.tempi_e_scadenze)}
    >
      <div class="calendar-vertical mb-3">
        <div class="calendar-vertical mb-3">
          {content.timeline_tempi_scadenze?.map((entry, i) => {
            let milestone_label = (
              <div class="calendar-date-day">
                <small class="calendar-date-day__year"></small>
                <span class="title-xxlarge-regular d-flex justify-content-center"></span>
                <small class="calendar-date-day__month"></small>
              </div>
            );
            if (entry?.data_scadenza) {
              milestone_label = (
                <div class="calendar-date-day">
                  <small class="calendar-date-day__year">
                    {Moment(entry.data_scadenza).format('Y')}
                  </small>
                  <span class="title-xxlarge-regular d-flex justify-content-center">
                    {Moment(entry.data_scadenza).format('DD')}
                  </span>
                  <small class="calendar-date-day__month">
                    {Moment(entry.data_scadenza).format('MMM')}
                  </small>
                </div>
              );
            } else {
              if (entry?.interval_qt && entry?.interval_type)
                milestone_label = (
                  <div class="calendar-date-day">
                    <small class="calendar-date-day__year"></small>
                    <span class="title-xxlarge-regular d-flex justify-content-center">
                      {entry.interval_qt}
                    </span>
                    <small class="calendar-date-day__month">
                      {entry.interval_type}
                    </small>
                  </div>
                );
            }
            return (
              <div class="calendar-date">
                {milestone_label}
                <div class="calendar-date-description rounded">
                  <div class="calendar-date-description-content">
                    <h3 class="title-medium-2 mb-0">{entry.milestone}</h3>
                    {entry?.milestone_description && (
                      <p class="info-text mt-1 mb-0">
                        {entry.milestone_description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </RichTextSection>
  );
};

ServizioTempiScadenze.propTypes = {
  content: PropTypes.shape({
    tempi_e_scadenze: PropTypes.shape({
      data: PropTypes.string,
    }),
    timeline_tempi_scadenze: PropTypes.shape({
      data_scadenza: PropTypes.string,
      milestone: PropTypes.string.isRequired,
      milestone_description: PropTypes.string,
      interval_qt: PropTypes.string,
      interval_type: PropTypes.string,
    }),
  }),
};
export default injectLazyLibs(['moment'])(ServizioTempiScadenze);
