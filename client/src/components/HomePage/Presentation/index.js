import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Identity from 'src/components/HomePage/Presentation/Identity';
import Philosophy from 'src/components/HomePage/Presentation/Philosophy';
import Expertise from 'src/components/HomePage/Presentation/Expertise';
import PropTypes from 'prop-types';

import './styles.scss';

const Presentation = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  return (
    <section className="presentation">
      {isTabletOrMobile && (
        <>
          <Identity />
          <Philosophy />
          <Expertise />
        </>
      )}
      {isBigScreen && (
        <>
          <p>COMING SOON</p>
        </>
      )}
    </section>
  );
};

Presentation.propTypes = {};

export default Presentation;
