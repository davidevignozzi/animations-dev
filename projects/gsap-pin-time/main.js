import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const assets = [
  'assets/spartan.svg',
  'assets/castle.svg',
  'assets/da-vinci.svg',
  'assets/airplane.svg'
];

gsap.registerPlugin(ScrollTrigger);

const dates = ['-3300 | 476', '476 | 1492', '1492 | 1792', '1792 | AJD'];

ScrollTrigger.create({
  trigger: '.sections',
  pin: '.tooltip',

  // Trigger Scroller
  start: 'top: 40%',
  end: 'bottom 55%'
  // markers: true
});

const sections = document.querySelectorAll('.section');

sections.forEach((section, index) => {
  ScrollTrigger.create({
    trigger: section,
    start: 'top center',
    end: 'bottom center',
    onEnter: () => {
      gsap.set('.tooltip-img', {
        attr: { src: assets[index] }
      });
      gsap.set('.tooltip p', {
        innerText: dates[index]
      });
    },
    onEnterBack: () => {
      gsap.set('.tooltip-img', {
        attr: { src: assets[index] }
      });
      gsap.set('.tooltip p', {
        innerText: dates[index]
      });
    }
  });
});
