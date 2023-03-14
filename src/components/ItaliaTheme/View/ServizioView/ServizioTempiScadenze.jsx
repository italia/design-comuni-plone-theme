import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { RichTextSection } from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  tempi_e_scadenze: {
    id: 'tempi_e_scadenze',
    defaultMessage: 'Tempi e scadenze',
  },
});

const ServizioTempiScadenze = ({ content, moment }) => {
  const intl = useIntl();

  return (
    <RichTextSection
      content={content.tempi_e_scadenze}
      add_class="style_ol_list cmp-timeline"
      tag_id="deadlines"
      title={intl.formatMessage(messages.tempi_e_scadenze)}
    >
      <div className="calendar-vertical mb-3">
        <div className="calendar-vertical mb-3">
          {content.timeline_tempi_scadenze?.map((entry, i) => {
            let milestone_label = (
              <div className="calendar-date-day">
                <small className="calendar-date-day__year"></small>
                <span className="title-xxlarge-regular d-flex justify-content-center"></span>
                <small className="calendar-date-day__month"></small>
              </div>
            );
            if (entry?.data_scadenza) {
              milestone_label = (
                <div className="calendar-date-day">
                  <span className="title-xxlarge-regular d-flex justify-content-center mb-1">
                    {moment(entry.data_scadenza).format('DD')}
                  </span>
                  <small className="calendar-date-day__month mb-1">
                    {moment(entry.data_scadenza).format('MMMM')}
                  </small>
                  <small className="calendar-date-day__year">
                    {moment(entry.data_scadenza).format('Y')}
                  </small>
                </div>
              );
            } else {
              if (entry?.interval_qt && entry?.interval_type)
                milestone_label = (
                  <div className="calendar-date-day">
                    <small className="calendar-date-day__year"></small>
                    <span className="title-xxlarge-regular d-flex justify-content-center">
                      {entry.interval_qt}
                    </span>
                    <small className="calendar-date-day__month">
                      {entry.interval_type}
                    </small>
                  </div>
                );
            }
            return (
              <div className="calendar-date">
                {milestone_label}
                <div className="calendar-date-description rounded">
                  <div className="calendar-date-description-content">
                    {entry?.milestone && (
                      <h3 className="title-medium-2 mb-0">{entry.milestone}</h3>
                    )}
                    {entry?.milestone_description && (
                      <p className="info-text mt-1 mb-0">
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
    timeline_tempi_scadenze: PropTypes.arrayOf(
      PropTypes.shape({
        data_scadenza: PropTypes.string,
        milestone: PropTypes.string.isRequired,
        milestone_description: PropTypes.string,
        interval_qt: PropTypes.string,
        interval_type: PropTypes.string,
      }),
    ),
  }),
};
export default ServizioTempiScadenze;
