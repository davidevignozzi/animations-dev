import { useEffect } from 'react';
import gsap from 'gsap';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  /**
   * Animation
   */
  const animation = () => {
    // gsap.to('.vite', {
    //   x: 100, // assume that you want px
    //   y: '7.5rem',
    //   rotation: '45deg',
    //   duration: 2
    // });
    // gsap.fromTo(
    //   '.vite',
    //   {
    //     /**
    //      * from
    //      */
    //     autoAlpha: 0, // visibility & opacity
    //     x: 100
    //   },
    //   {
    //     /**
    //      * to
    //      */
    //     autoAlpha: 1,
    //     x: 0,
    //     duration: 2,
    //     /**
    //      * Easing
    //      */
    //     // ease: 'power3.inOut'
    //     // ease: 'sine' // the default is .out
    //     // ease: 'none' // shortened keyword
    //     // ease: 'elastic(1, 0.5)'
    //     // ease: 'steps(5)'
    //     ease: 'bounce',
    //     /**
    //      * Utility Props
    //      */
    //     // paused: true,
    //     delay: 1,
    //     repeat: 2,
    //     // repeat: -1 // infinity
    //     repeatDelay: 1,
    //     yoyo: true
    //   }
    // );

    /**
     * To have a delay between multiple elements use stagger
     */
    gsap.to('.logo', {
      opacity: 1,
      y: 0,
      ease: 'power4',
      duration: 2,

      // delay bwtween elements
      // stagger: 0.2

      stagger: {
        // delay bwtween elements
        each: 0.5,

        // choose from where will start the animation
        from: 'end'
      }
    });
  };

  /**
   * Call animation at the first render
   */
  useEffect(() => {
    animation();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </>
  );
}

export default App;
