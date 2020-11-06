import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import handshake from './handshake.png';
import PropTypes from 'prop-types';

import './styles.scss';

gsap.registerPlugin(ScrollTrigger);

const Identity = () => {
  const titleRef = useRef(null);
  const sectionRef = useRef(null);
  // useEffect(() => {
  //   gsap.from(titleRef.current, {
  //     duration: 1,
  //     autoAlpha: 0,
  //     ease: 'none',
  //     delay: 1,
  //     scrollTrigger: titleRef.current,
  //   });
  // }, [titleRef]);
  // useEffect(() => {
  //   gsap.from(sectionRef.current, {
  //     opacity: 0,
  //     duration: 6,
  //     fontSize: 0,
  //     scaleX: 1.25,
  //     scaleY: 0.75,
  //     scrollTrigger: {
  //       trigger: sectionRef.current,
  //       toggleActions: 'restart none none none',
  //       end: 200,
  //     },
  //   });
  //   gsap.to(sectionRef.current, {
  //     opacity: 1,
  //     fontSize: 1,
  //     duration: 6,
  //     scaleX: 1,
  //     scaleY: 1,
  //   });
  // }, [sectionRef]);
  return (
    <div className="identity" ref={sectionRef}>
      <h3 className="identity__title" ref={titleRef}>Qui suis-je ?</h3>
      <article className="identity__article">
        <p className="identity__article__text">
          Menuisier et artisan depuis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi molestias unde officia distinctio reprehenderit ab quod nam delectus nobis deleniti dolores adipisci nemo aspernatur cum, et, sint voluptatem temporibus officiis.
        </p>
        <img src={handshake} alt="" className="identity__article__image" />
      </article>
    </div>
  );
};

Identity.propTypes = {};

export default Identity;
