import React from 'react';
import PropTypes from 'prop-types';

import BackHomePage from 'src/components/BackOffice/BackHomePage';
import Sidebar from 'src/components/BackOffice/Sidebar';

import './styles.scss';

const BackOffice = () => (
  <div className="backOffice">
    <BackHomePage />
    <Sidebar />
  </div>
);

BackOffice.propTypes = {};

export default BackOffice;
