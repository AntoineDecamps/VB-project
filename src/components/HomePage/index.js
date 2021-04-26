import React from 'react';
import Concept from 'src/components/HomePage/Concept';
import Presentation from 'src/components/HomePage/Presentation';
import PropTypes from 'prop-types';

import './styles.scss';

const HomePage = () => (
  <div className="homepage">
    <Concept />
    <Presentation />
  </div>
);

HomePage.propTypes = {};

export default HomePage;
