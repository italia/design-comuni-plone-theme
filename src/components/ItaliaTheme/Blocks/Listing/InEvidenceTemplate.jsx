import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardBody,
  CardTitle,
  CardCategory,
  CardText,
  Chip,
  ChipLabel,
  Icon
} from 'design-react-kit/dist/design-react-kit';
import moment from 'moment';
import { flattenToAppURL } from '@plone/volto/helpers';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { getIcon } from '@italia/helpers/index';

const InEvidenceTemplate = ({ items, title, isEditMode }) => {
  console.log(items)

  return (
    <div
      className={cx('in-evidence', {
        'public-ui': isEditMode,
      })}
    >
      <div className="title">{title && <h3>{title}</h3>}</div>
      <div className="container">
        {items.map((item, index) => (
          <Card
            noWrapper={false}
            key={index}
            className={cx('listing-item card-bg', {
              'card-img': index === 0 && item.image,
            })}
          >
            {index === 0 && item.image && (
              <div className="img-responsive-wrapper">
                <div className="img-responsive">
                  <Link to={flattenToAppURL(item['@id'])} className="img-link">
                    <figure className="img-wrapper">
                      <img
                        className="listing-image"
                        src={flattenToAppURL(
                          item.image.scales.preview.download,
                        )}
                        alt={item.title}
                      />
                    </figure>
                  </Link>
                  <div className="card-calendar d-flex flex-column justify-content-center">
                    <span className="card-date">
                      {moment(item.effective).format('D')}
                    </span>
                    <span className="card-day">
                      {moment(item.effective).format('MMMM')}
                    </span>
                  </div>
                </div>
              </div>
            )}
            <CardBody tag="div">
              <CardCategory
                date={item.effective && moment(item.effective).format('ll')}
              >
                <Icon
                  className='icon'
                  color="primary"
                  icon={getIcon(item['@type'])}
                  padding={false}
                />
                {item?.design_italia_meta_type}
              </CardCategory>
              <CardTitle tag="h4" className="big-heading">
                <Link to={flattenToAppURL(item['@id'])}>
                  {item.title || item.id}
                </Link>
              </CardTitle>
              {item.description && <CardText>{item.description}</CardText>}
              {
                item.tassonomia_argomenti?.map((argument, index) => (
                  <Link
                    to={flattenToAppURL(argument['@id'])}
                    key={index}
                    title={argument.title}
                    className="text-decoration-none"
                  >
                    <Chip
                      color="primary"
                      disabled={false}
                      simple
                      tag="div"
                      className="mr-2"
                    >
                      <ChipLabel tag="span">
                        {argument.title}
                      </ChipLabel>
                    </Chip>
                  </Link>
                ))
              }
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

InEvidenceTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkMore: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default InEvidenceTemplate;
