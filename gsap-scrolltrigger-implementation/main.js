import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.from('.b2 h2', {
  autoAlpha: 0,
  y: 100,
  scale: 0.5,
  duration: 1,

  scrollTrigger: {
    trigger: '.b2 h2',

    // Trigger Scroller
    // start: 'top bottom', // <- default values
    // start: 'top bottom-=200', // <- default values - 200px (not the best choise: responsive?)
    // start: 'top 50%',
    // start: 'top center+=10%',
    start: 'top 60%',

    // end: 'bottom top', // <- default values
    // end: 'bottom top-=200', // <- default values - 200px (not the best choise: responsive?)
    // end: 'bottom 50%',
    // end: 'bottom top+=10%',
    end: 'bottom 40%',

    // scrub: true, // <- the animation follow the scroll
    scrub: 0.5, // <- the animation follow the scroll 0.5s of damping

    onEnter: () => {
      console.log('Enter');
    },
    onLeave: () => {
      console.log('Leave');
    },
    onEnterBack: () => {
      console.log('Enter Back');
    },
    onLeaveBack: () => {
      console.log('Leave Back');
    }

    // For development environment
    // markers: true
  }
});

ScrollTrigger.create({
  trigger: '.b2',
  pin: true,

  // For development environment
  markers: true
});
