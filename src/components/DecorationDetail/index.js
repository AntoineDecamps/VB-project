import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const DecorationDetail = ({ titre }) => (
  <div className="productDetail">{titre}</div>
);

DecorationDetail.propTypes = {};

export default DecorationDetail;
