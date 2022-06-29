import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HandleAnchor = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      // eslint-disable-next-line no-unused-expressions
      document.getElementById(location.hash.replace('#', ''))?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'center',
      });
    }
  }, [location]);
  return <></>;
};

export default HandleAnchor;
