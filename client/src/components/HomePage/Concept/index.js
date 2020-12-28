import React, { createRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Parallax from 'react-rellax';
import 'animate.css/animate.css';

import mainImage from 'src/components/HomePage/Concept/mainBackground.png';
import Logo from 'src/assets/logo-white.png';
import PropTypes, { checkPropTypes } from 'prop-types';

import './styles.scss';

gsap.registerPlugin(ScrollTrigger);

const Concept = () => {
  const mainTitleRef = createRef(null);
  const topLineRef = createRef(null);
  const bottomLineRef = createRef(null);
  const textRef = createRef(null);
  const titleRef = createRef(null);
  // const addAnimationOnView = (entries) => {
  //   console.log(entries[0]);
  //   console.log(entries[0].isIntersecting);
  //   const targetElement = entries[0].target;
  //   // console.log(targetElement);
  //   if (entries[0].isIntersecting) {
  //     targetElement.classList.add('animated');
  //   }
  //   else {
  //     targetElement.classList.remove('animated');
  //   }
  // };
  // useEffect(() => {
  //   const animatedElement = ref.current;
  //   const observer = new IntersectionObserver(addAnimationOnView, {
  //     threshold: 0.1,
  //   });
  //   observer.observe(animatedElement);
  // });
  useEffect(() => {
    gsap.from(mainTitleRef.current, {
      opacity: 0,
      xPercent: 200,
      ease: 'back',
      rotation: -67,
      duration: 3,
    });
  }, []);
  useEffect(() => {
    gsap.fromTo(topLineRef.current, {
      y: -100,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: topLineRef.current,
        toggleActions: 'play none resume reset',
        // markers: true,
        start: 'top center-=100',
      },
    });
  }, []);
  useEffect(() => {
    console.log(bottomLineRef.current);
    gsap.fromTo(bottomLineRef.current, {
      y: 100,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: topLineRef.current,
        toggleActions: 'play none resume reset',
        start: 'top center-=100',
      },
    });
  }, []);
  useEffect(() => {
    gsap.fromTo(titleRef.current, {
      x: 60,
      // y: 30,
      opacity: 0,
      // rotation: -6,
    }, {
      x: 0,
      // y: 0,
      opacity: 1,
      duration: 1,
      // rotation: 0,
      ease: "back.out(2.7)",
      delay: 0.5,
      scrollTrigger: {
        trigger: topLineRef.current,
        toggleActions: 'play none resume reset',
        start: 'top center-=100',
      },
    });
  }, []);
  useEffect(() => {
    gsap.fromTo(textRef.current, {
      x: 60,
      y: 30,
      opacity: 0,
      rotation: -6,
    }, {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 1,
      rotation: 0,
      ease: "back.out(2.7)",
      delay: 1.5,
      scrollTrigger: {
        trigger: topLineRef.current,
        toggleActions: 'play none resume reset',
        start: 'top center-=100',
      },
    });
  }, []);
  return (
    <section className="concept">
      <Parallax speed={2}>
        <div className="concept__mainTitle" ref={mainTitleRef}>
          <h2 className="concept__mainText">Un homme, un savoir-faire.</h2>
          <p className="concept__mainText">Benoit Van den Broeck, menuisier artisan.</p>
        </div>
      </Parallax>
      <div className="concept__mainImage">
        {/* <img src={mainImage} alt="mainImage" className="concept__mainImage" /> */}
        <Parallax speed={1}>
          <img src={Logo} alt="logo" className="concept__logo" />
        </Parallax>
      </div>
      <div className="concept__topLine" ref={topLineRef} />
      <div className="concept__explanation">
        <div className="animation">
          <h3 className="concept__explanation__title" ref={titleRef}>Une création sur-mesure</h3>
          <p className="concept__explanation__text" ref={textRef}>Nous réalisons en collaboration avec le client des pièces qui lui ressembleront au maximum et s'intégreront au mieux dans son habitat</p>
        </div>
      </div>
      <div className="concept__bottomLine" ref={bottomLineRef} />
    </section>
  );
};

Concept.propTypes = {};

export default Concept;
