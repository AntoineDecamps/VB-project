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
        // markers: true,
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
            Après une formation en menuiserie, Benoit exerce son métier au sein de la Défense, très vite, il se consacre à sa vocation première : la création.
            <br></br>
            <br></br> Il commence par réaliser des luminaires contemporains à partir de matériaux recyclés ou au travers d’objets utilitaires déclassés auxquels il donne une nouvelle vie. 
            <br></br>
            <br></br> Aujourd’hui, Benoit franchit un cap en créant sa société VB Design Conception et se lance dans la production de mobiliers, appliques lumineuses et luminaires.
          </p>
        </div>
      </article>
    </div>
  );
};

Identity.propTypes = {};

export default Identity;
