import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

/** VANILLA JS
 *
 * const tl = gsap.timeline(
 *      defaults: {
 *
 *      }
 *
 *      repeat: -1, // <- infinity
 *      yoyo: true,
 *
 *      onStart: () => {
 *         console.log('Start');
 *      },
 *      onRepeat: () => {
 *         console.log('Repeat');
 *      },
 *      onComplete: () => {
 *         console.log('Complete');
 *      }
 * )
 *
 * tl
 * .to(
 *      'img1', {
 *          autoAlpha: 1,
 *          duration: 1
 *      }
 * )
 * .to(
 *      'img2', {
 *          autoAlpha: 1,
 *          duration: 1
 *      }, '-=0.75'
 * )
 * .to(
 *      'img3', {
 *          autoAlpha: 1,
 *          duration: 1
 *      }, 3
 * )
 */

const Timeline = () => {
  const containerRef = useRef();
  const image1Ref = useRef();
  const image2Ref = useRef();
  const image3Ref = useRef();
  const TL = useRef();

  /**
   * The useLayoutEffect() hook runs immediately AFTER React has performed all DOM mutations.
   * It's a very handy hook for animation because it ensures that your elements are rendered
   * and ready to be animated.
   *
   */
  useLayoutEffect(() => {
    /**
     * Create our context. != React Context
     *
     * This function is invoked immediately and all GSAP animations and ScrollTriggers
     * created during the execution of this function get recorded
     * so we can revert() them later (cleanup)
     */
    const ctx = gsap.context(() => {
      TL.current = gsap
        .timeline({
          /**
           * Properties and methods of the timeline
           */
          defaults: {
            duration: 1,
            ease: 'power4.out'
          },

          repeat: -1, // <- infinity
          yoyo: true,

          onStart: () => {
            console.log('Start');
          },
          onRepeat: () => {
            console.log('Repeat');
          },
          onComplete: () => {
            console.log('Complete');
          }
        })

        .to(image1Ref.current, {
          autoAlpha: 1
        })

        .to(
          image2Ref.current,
          {
            autoAlpha: 1
          },
          // Position Parameter
          '-=0.75' //<-- Will start at the 0.75 second in the timeline
        )

        .to(
          image3Ref.current,
          {
            autoAlpha: 1
          },
          // Position Parameter
          3 //<-- Will wait 3 second before run
        );
    }, containerRef); // <- IMPORTANT Scopes Selector => Will be the container or root element

    return () => {
      /**
       * cleanup code (optional)
       */
      ctx.revert();
    };
  }, []); // <- empty dependency Array so it doesn't re-run on every render!

  return (
    <div ref={containerRef}>
      <a href="https://vitejs.dev" target="_blank">
        <img
          ref={image1Ref}
          src={viteLogo}
          alt="Vite logo"
          className="logo vite img1"
          style={{ visibility: 'hidden' }}
        />
      </a>
      <a href="https://react.dev" target="_blank">
        <img
          ref={image2Ref}
          src={reactLogo}
          alt="React logo"
          className="logo react img2"
          style={{ visibility: 'hidden' }}
        />
      </a>
      <a href="https://vitejs.dev" target="_blank">
        <img
          ref={image3Ref}
          src={viteLogo}
          alt="Vite logo"
          className="logo vite img3"
          style={{ visibility: 'hidden' }}
        />
      </a>
    </div>
  );
};

export default Timeline;
