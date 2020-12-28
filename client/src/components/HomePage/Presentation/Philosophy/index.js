import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import philosophy from './philosophy.png';
import PropTypes from 'prop-types';

import './styles.scss';

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
  // const titleRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        markers: true,
        start: 'top bottom',
        end: 'bottom top',
        toggleActions: 'restart none none reset',
      },
    });
    tl.from(imageRef.current, {
      duration: 1,
      x: 50,
    })
      .from(textRef.current, { y: 50, duration: 1 }, '<');
  }, []);
  return (
    <div className="philosophy">
      <article className="philosophy__article">
        <div className="philosophy__article__text" ref={textRef}>
          <h3 className="philosophy__article__title">Ma philosophie</h3>
          <p className="philosophy__article__p">
            Ma philosphie Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi molestias unde officia distinctio reprehenderit ab quod nam delectus nobis deleniti dolores adipisci nemo aspernatur cum, et, sint voluptatem temporibus officiis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla praesentium ad eligendi tempora modi a voluptate odio doloremque architecto eos voluptatibus sequi fugit dolor sit amet consectetur adipisicing elit. Nulla praesentium ad eligendi tempora modi a voluptate odio doloremque architecto eos voluptatibus sequi fugit
          </p>
        </div>
        <img src={philosophy} alt="" className="philosophy__article__image" ref={imageRef} />
      </article>
    </div>
  );
};

Philosophy.propTypes = {};

export default Philosophy;
