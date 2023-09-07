import { useEffect } from 'react';
import gsap from 'gsap';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Buttons from './Buttons';

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
   * Keyframe animation
   */
  const keyframeAnimation = () => {
    gsap.to('.img3', {
      keyframes: [
        { duration: 0.3, x: 100 },
        { duration: 0.3, y: 100 },
        { duration: 0.3, x: 200 }
      ]
    });
  };

  /**
   * Trigger events callbacks
   */
  const triggerEventsAnimation = () => {
    gsap.to('.img3', {
      y: 100,
      duration: 1,
      repeat: 1,

      // Events
      onStart: () => {
        console.log('Start');
      },
      onUpdate: () => {
        console.log('Update');
      },
      onComplete: () => {
        console.log('Complete');
      },
      onRepeat: () => {
        console.log('Repeat');
      }
    });
  };

  /**
   * TWEEN
   */
  gsap.registerEffect({
    name: 'imageAnimation',
    effect: (targets, config) => {
      return gsap.to(targets, {
        duration: config.duration,
        y: 200,
        scale: 1.4
      });
    },
    default: { duration: 2 }
  });

  /**
   * Call animation at the first render
   */
  useEffect(() => {
    // animation();
    // keyframeAnimation();
    // triggerEventsAnimation();

    /**
     * Call the Registered animation
     */
    gsap.effects.imageAnimation('.react', { duration: 5 });
    gsap.effects.imageAnimation('.img3', { duration: 5 });
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
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo vite img3" alt="Vite logo" />
        </a>
      </div>

      {/* <Buttons /> */}
    </>
  );
}

export default App;
