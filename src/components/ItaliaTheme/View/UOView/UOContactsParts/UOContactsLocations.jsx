import React from 'react';

import { Locations } from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const UOContactsLocations = ({ content }) => {
  return content.geolocation?.latitude > 0 ||
    content?.geolocation?.longitude > 0 ||
    content?.sede?.length > 0 ||
    content?.nome_sede?.length > 0 ||
    content?.street?.length > 0 ||
    content?.city?.length > 0 ||
    content?.zip_code?.length > 0 ||
    content?.quartiere?.length > 0 ||
    content?.circoscrizione?.length > 0 ? (
    <div className="mb-5">
      <Locations
        content={content}
        locations={content.sede ?? []}
        load={true}
        details_link={false}
      />
    </div>
  ) : (
    <></>
  );
};
export default UOContactsLocations;
