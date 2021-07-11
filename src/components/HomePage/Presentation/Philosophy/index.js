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
        // markers: true,
        start: 'top 85%',
        end: 'bottom bottom',
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
            En travaillant des matériaux de récupération et naturels, Benoit imagine et fabrique des mobiliers et luminaires aux lignes audacieuses.
            <br></br>
            <br></br> Les essences de bois utilisées sont locales et de récupération sur des anciens mobiliers de chantier afin d’avoir un minimum d’impact sur l’environnement. Il incorpore dans ses créations des objets usuels qui non plus d’utilité pour leur rende une seconde vie.
            <br></br>
            <br></br> Pour tout projet de décoration, Benoit fabrique des meubles sur mesure, des pièces uniques ou en petite série dans un style contemporain et industriel avec comme valeur principale, le respect de l'environnement.
          </p>
        </div>
        <img src={philosophy} alt="" className="philosophy__article__image" ref={imageRef} />
      </article>
    </div>
  );
};

Philosophy.propTypes = {};

export default Philosophy;
