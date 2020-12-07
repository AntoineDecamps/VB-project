import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import handshake from './handshake.png';
import PropTypes from 'prop-types';

import './styles.scss';

gsap.registerPlugin(ScrollTrigger);

const Identity = () => {
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        markers: true,
        start: 'top bottom',
        end: 'bottom top',
        toggleActions: 'restart none none reset',
      },
    });
    tl.from(titleRef.current, {
      duration: 1,
      y: -50,
    })
      .from(imageRef.current, { y: -50, opacity: 0, duration: 1 })
      .from(textRef.current, { y: 50, opacity: 0, duration: 1 }, '<');
  }, []);
  return (
    <div className="identity">
      <h3 className="identity__title" ref={titleRef}>Qui suis-je ?</h3>
      <article className="identity__article">
        <img src={handshake} alt="" className="identity__article__image" ref={imageRef} />
        <p className="identity__article__text" ref={textRef}>
          Menuisier et artisan depuis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi molestias unde officia distinctio reprehenderit ab quod nam delectus nobis deleniti dolores adipisci nemo aspernatur cum, et, sint voluptatem temporibus officiis.
        </p>
      </article>
    </div>
  );
};

Identity.propTypes = {};

export default Identity;
