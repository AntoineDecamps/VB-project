import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Identity = () => (
  <div className="identity">
    <h3 className="identity__title">Qui suis-je ?</h3>
    <article className="identity__article">
      <p className="identity__article__text">
        Menuisier et artisan depuis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi molestias unde officia distinctio reprehenderit ab quod nam delectus nobis deleniti dolores adipisci nemo aspernatur cum, et, sint voluptatem temporibus officiis.
      </p>
      <img src="https://picsum.photos/200/300" alt="" className="identity__article__image" />
    </article>
  </div>
);

Identity.propTypes = {};

export default Identity;
