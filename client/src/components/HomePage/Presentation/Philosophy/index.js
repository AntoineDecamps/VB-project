import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Philosophy = () => (
  <div className="philosophy">
    <div className="philosophy">
      <h3 className="philosophy__title">Philosophie</h3>
      <article className="philosophy__article">
        <p className="philosophy__article__text">
          Ma philosophie Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi molestias unde officia distinctio reprehenderit ab quod nam delectus nobis deleniti dolores adipisci nemo aspernatur cum, et, sint voluptatem temporibus officiis.
        </p>
        <img src="https://picsum.photos/200/300" alt="" className="philosophy__article__image" />
      </article>
    </div>
  </div>
);

Philosophy.propTypes = {};

export default Philosophy;
