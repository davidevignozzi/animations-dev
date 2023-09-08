import gsap from 'gsap';

/**
 * when window finishes loading, the animation starts
 */
window.addEventListener('load', animation);

function animation() {
  const tl = gsap.timeline({ repeat: -1 });

  tl.from('.vertical-slider p', {
    autoAlpha: 0,
    y: 100,
    duration: 0.75,
    stagger: 0.75
  }).to(
    '.vertical-slider p',
    {
      autoAlpha: 0,
      y: -100,
      duration: 0.75,
      stagger: 0.75
    },
    0.75 // absolute position <- at the end of the prev p in .vertical-slider
  );
}
