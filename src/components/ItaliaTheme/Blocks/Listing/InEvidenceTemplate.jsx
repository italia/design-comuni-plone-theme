import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import moment from 'moment';
import 'moment/min/locales';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardCategory,
  CardText,
  Chip,
  ChipLabel,
  Icon
} from 'design-react-kit/dist/design-react-kit';
import { ConditionalLink } from '@plone/volto/components';
import { flattenToAppURL } from '@plone/volto/helpers';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { getIcon } from '@italia/helpers/index';

const InEvidenceTemplate = ({
  items,
  title,
  isEditMode,
  show_block_bg,
  linkMore,
}) => {
  const intl = useIntl();
  moment.locale(intl.locale);
  return (
    <div
      className={cx('in-evidence', {
        'public-ui': isEditMode,
      })}
    >
      <div
        className={cx('full-width', {
          'bg-light py-5': show_block_bg,
        })}
      >
        <Container className="px-4">
          {title && (
            <Row>
              <Col>
                <h2 className={cx('mb-4', { 'mt-5': !show_block_bg })}>
                  {title}
                </h2>
              </Col>
            </Row>
          )}
          <div className="in-evidence-cards-wrapper">
            {items.map((item, index) => (
              <Card
                key={index}
                className={cx('listing-item card-bg', {
                  'card-img': index === 0 && item.image,
                })}
              >
                {index === 0 && item.image && (
                  <div className="img-responsive-wrapper">
                    <div className="img-responsive">
                      <Link
                        to={flattenToAppURL(item['@id'])}
                        className="img-link"
                      >
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
                      {/* Solo per tipo evento, aggiungere if quando pronto */}
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
                <CardBody>
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
                  <CardTitle tag="h4">
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
          {linkMore?.href && (
            <div className="link-more">
              <ConditionalLink condition={!isEditMode} to={linkMore.href}>
                {linkMore.title}
              </ConditionalLink>
            </div>
          )}
        </Container>
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
