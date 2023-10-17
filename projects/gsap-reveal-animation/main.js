import gsap from 'gsap';

const navLinks = document.querySelectorAll('nav a');
const imgsNav = document.querySelectorAll('nav img');
const title = document.querySelector('h1');
const verticalLine = document.querySelector('.middle-line');
const grapesLogo = document.querySelector('.home-content img');
const homeBtn = document.querySelector('.home-content button');

/**
 * when window finishes loading, the animation starts
 */
window.addEventListener('load', revealAnimation);

function revealAnimation() {
  const tl = gsap.timeline();

  tl.from(title, { autoAlpha: 0, y: -50, delay: 0.2 })
    .to(verticalLine, { height: 200 }, '-=0.2')
    .from(grapesLogo, { autoAlpha: 0, y: -50 }, '-=0.2')
    .from(homeBtn, { autoAlpha: 0, y: -50 }, '-=0.2')
    .from(
      navLinks,
      { autoAlpha: 0, y: -50, duration: 0.4, stagger: 0.1 },
      '-=0.2'
    )
    .from(imgsNav, { autoAlpha: 0, y: -50 });

  // when there is '-=0.2' it means
  // 0.2 seconds before the end of the previous animation
}
