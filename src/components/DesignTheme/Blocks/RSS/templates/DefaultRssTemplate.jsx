import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import moment from 'moment';

import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardCategory,
  CardReadMore,
} from 'design-react-kit/dist/design-react-kit';

const DefaultRSSTemplate = ({ item }) => {
  return (
    <div className="col-12 col-lg-3">
      <div>MA SENZA L'IMMAGINE</div>
      <Card noWrapper={false} tag="div">
        <CardBody tag="div">
          <CardCategory date={moment(item.pubDate).format('DD-MMM-Y')}>
            {item.categories.length > 0 ? item.categories[0]._ : ''}
          </CardCategory>
          <CardTitle className="big-heading" tag="h5">
            {item.title}
          </CardTitle>
          <CardText tag="p" className="text-serif">
            {item.contentSnippet}
          </CardText>
        </CardBody>
        <CardReadMore
          iconName="it-arrow-right"
          tag="a"
          href={item?.link}
          text="Leggi di più"
        />
      </Card>
    </div>
  );
};
DefaultRSSTemplate.propTypes = {
  item: PropTypes.object,
};

export default injectIntl(DefaultRSSTemplate);
