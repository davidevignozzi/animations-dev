import gsap from 'gsap';

const btnRight = document.querySelector('.btn-next');
const btnLeft = document.querySelector('.btn-prev');
const container = document.querySelector('.container');

/**
 * transform all slides into a new array
 */
const slides = Array.from(document.querySelectorAll('.slide'));

const indexIndicator = document.querySelector(
  '.counter span:nth-child(1)'
);

let index = 0;

/**
 * next Animation
 */
function animRight() {
  const tlRight = gsap.timeline();

  tlRight
    .set(indexIndicator, { innerText: index + 1 })
    .to(slides[index], { duration: 0.6, x: 0 });
}

/**
 * prev animation
 */
function animLeft() {
  const tlLeft = gsap.timeline();

  tlLeft
    .set(indexIndicator, { innerText: index })
    .to(slides[index], { duration: 0.6, x: '-100%' });
}

/**
 * negation
 *
 * animation when the user is at the edge of the slider
 * and tries to go beyond it
 *
 */
function negation() {
  gsap.to(container, {
    keyframes: [
      { duration: 0.1, x: -4 },
      { duration: 0.1, x: 4 },
      { duration: 0.1, x: -4 },
      { duration: 0.1, x: 0 }
    ]
  });
}

function handleDirection(direction) {
  /**
   * on click on next button
   */
  if (direction === 'next') {
    if (index === slides.length - 1) {
      negation();
      return;
    }

    index++;
    animRight();
  }

  /**
   * on click on prev button
   */
  if (direction === 'prev') {
    if (index === 0) {
      negation();
      return;
    }

    animLeft();
    index--;
  }
}

/**
 * on click on next button
 */
btnRight.addEventListener('click', () => {
  handleDirection('next');
});

/**
 * on click on prev button
 */
btnLeft.addEventListener('click', () => {
  handleDirection('prev');
});
