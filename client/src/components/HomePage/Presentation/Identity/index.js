import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import benoit from './benoit.jpg';
import PropTypes from 'prop-types';

import './styles.scss';

gsap.registerPlugin(ScrollTrigger);

const Identity = () => {
  // const titleRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        markers: true,
        start: 'top 85%',
        end: 'bottom bottom',
        toggleActions: 'restart none none reset',
      },
    });
    tl.from(imageRef.current, {
      duration: 1,
      x: -50,
    })
      .from(textRef.current, { y: 50, duration: 1 }, '<');
  }, []);
  return (
    <div className="identity">
      <article className="identity__article">
        <img src={benoit} alt="" className="identity__article__image" ref={imageRef} />
        <div className="identity__article__text" ref={textRef}>
          <h3 className="identity__article__title">Qui suis-je ?</h3>
          <p className="identity__article__p">
            Menuisier et artisan depuis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi molestias unde officia distinctio reprehenderit ab quod nam delectus nobis deleniti dolores adipisci nemo aspernatur cum, et, sint voluptatem temporibus officiis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla praesentium ad eligendi tempora modi a voluptate odio doloremque architecto eos voluptatibus sequi fugit dolor sit amet consectetur adipisicing elit. Nulla praesentium ad eligendi tempora modi a voluptate odio doloremque architecto eos voluptatibus sequi fugit
          </p>
        </div>
      </article>
    </div>
  );
};

Identity.propTypes = {};

export default Identity;
