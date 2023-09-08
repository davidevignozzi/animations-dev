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

    // For development environment
    markers: true
  }
});
