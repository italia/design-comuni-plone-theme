import React from 'react';
import PropTypes from 'prop-types';

import { Sponsors } from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const EventoSponsors = ({ content }) => (
  <section id="sponsors" className="it-page-section mb-5">
    <Sponsors content={content} folder_name={'sponsor_evento'} />
  </section>
);

EventoSponsors.propTypes = {
  content: PropTypes.object.isRequired,
};

export default EventoSponsors;
