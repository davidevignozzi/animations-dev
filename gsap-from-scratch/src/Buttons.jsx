import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Buttons = () => {
  const animation = () => {
    gsap.to('.btn', {
      //   y: '1rem',

      /**
       * Random value between first and second parameter
       * rounded to the third value
       */
      y: 'random(-100, 100, 10)',

      // not random but array of exact values
      //   y: 'random([10,20,50,-30,-10,20])',

      stagger: 0.2,

      /**
       * Wait for logos first
       */
      delay: 2
    });
  };

  useEffect(() => {
    animation();
  }, []);

  return (
    <div className="column">
      <button className="btn">Hello</button>
      <button className="btn">Hello</button>
      <button className="btn">Hello</button>
      <button className="btn">Hello</button>
      <button className="btn">Hello</button>
      <button className="btn">Hello</button>
    </div>
  );
};

export default Buttons;
