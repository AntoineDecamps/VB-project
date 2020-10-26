import React from 'react';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';

import './styles.scss';

const Header = () => {
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  return (
    <>
      {isBigScreen && (
        <p>DESKTOP</p>
      )}
      {isTabletOrMobile && (
        <p>MOBILE</p>
      )}
      <div className="header">Header</div>
    </>
  );
};

Header.propTypes = {};

export default Header;
