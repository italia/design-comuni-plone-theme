/**
 * View ArgomentoTitle block.
 * @module components/ItaliaTheme/Blocks/ArgomentoTitle/View
 */

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Portal } from 'react-portal';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card,
  CardBody,
  CardText,
} from 'design-react-kit/dist/design-react-kit';
import { CardCategory, Breadcrumbs } from '@italia/components/ItaliaTheme';
import { ArgumentIcon, RichText } from '@italia/components/ItaliaTheme/View';
import { UniversalLink } from '@plone/volto/components';
import { BodyClass, flattenToAppURL } from '@plone/volto/helpers';
import Image from '@plone/volto/components/theme/Image/Image';
import { getContent, resetContent } from '@plone/volto/actions';

/**
 * View title block class.
 * @class View
 * @extends Component
 */

const ArgomentoTitleView = ({ data, properties }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const searchResults = useSelector((state) => state.content?.subrequests);
  // one request is made for every 'unita_amministrative_responsabili' selected
  useEffect(() => {
    if (properties?.unita_amministrative_responsabili?.length > 0) {
      properties.unita_amministrative_responsabili.forEach((x) => {
        dispatch(getContent(flattenToAppURL(x['@id']), null, x['@id']));
      });
    }

    return () => {
      if (properties?.unita_amministrative_responsabili?.length > 0) {
        properties.unita_amministrative_responsabili.forEach((x) => {
          dispatch(resetContent(x['@id']));
        });
      }
    };
  }, [dispatch, properties]);

  return (
    <>
      <div className="ArgomentoTitleWrapper rounded shadow mt-2 mt-lg-5 mb-5">
        <div className="title-description-wrapper col-lg-6">
          <Breadcrumbs pathname={location.pathname} />
          <ArgumentIcon icon={properties?.icona} />
          <h1 className="mb-3">{properties?.title}</h1>
          <p className="description">{properties?.description}</p>
        </div>
        <div className="col-lg-4 offset-lg-2">
          <RichText serif={false} content={properties.ulteriori_informazioni} />

          {properties?.unita_amministrative_responsabili?.length > 0 &&
            properties?.unita_amministrative_responsabili?.map((u, index) => {
              return (
                <div className="row mb-3" key={index}>
                  <div className="w-100">
                    <Card className={'listing-item card-bg border-left-card'}>
                      <div className="d-flex">
                        <CardBody className="">
                          <CardCategory>
                            <span className="text font-weight-bold">
                              <UniversalLink href={flattenToAppURL(u['@id'])}>
                                {u.title || u.id}
                              </UniversalLink>
                            </span>
                          </CardCategory>
                          <CardText>
                            {searchResults[u['@id']]?.data?.street}
                          </CardText>
                        </CardBody>
                        {searchResults[u['@id']]?.data?.image && (
                          <div className="image-container mr-3">
                            <Image
                              image={searchResults[u['@id']].data?.image}
                              alt={searchResults[u['@id'].data?.image_caption]}
                              title={
                                searchResults[u['@id'].data?.image_caption]
                              }
                            />
                          </div>
                        )}
                      </div>
                    </Card>
                  </div>
                </div>
              );
            })}
          {properties?.image ? (
            <>
              <Portal
                node={
                  __CLIENT__ && document.getElementById('portal-header-image')
                }
              >
                <div>
                  <Image
                    image={properties.image}
                    alt={properties.caption ?? properties.title}
                    title={properties.caption ?? properties.title}
                  />
                </div>
              </Portal>
              <BodyClass className="has-image" />
            </>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
};
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
ArgomentoTitleView.propTypes = {
  properties: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ArgomentoTitleView;
