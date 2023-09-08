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
    start: 'top center+=10%',

    // end: 'bottom top', // <- default values

    // end: 'bottom top-=200', // <- default values - 200px (not the best choise: responsive?)

    // end: 'bottom 50%',
    end: 'bottom top+=10%',

    // For development environment
    markers: true
  }
});
