import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import expertise from './expertise.png';
import PropTypes from 'prop-types';

import './styles.scss';

gsap.registerPlugin(ScrollTrigger);

const Expertise = () => {
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
    <div className="expertise">
      <article className="expertise__article">
        <img src={expertise} alt="" className="expertise__article__image" ref={imageRef} />
        <div className="expertise__article__text" ref={textRef}>
          <h3 className="expertise__article__title">Mon expertise</h3>
          <p className="expertise__article__p">
            Mon domaine d'expertise s'étend à toutes sortes de meubles aussi bien d'intérieurs que d'extérieurs, aux luminaires ainsi qu'à certains types de décorations d'intérieures comme les miroirs.
          </p>
        </div>
      </article>
    </div>
  );
};

Expertise.propTypes = {};

export default Expertise;
