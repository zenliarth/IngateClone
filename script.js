const sections = document.querySelectorAll('.js-scroll');
const div1anima = document.querySelector('.section1');
/* const loader = document.querySelector('.loader'); */

function animaScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < 500) {
      section.classList.add('ativo');
    }
  });
}
function anima() {
  div1anima.classList.add('ativo');
}
/* function animaLoader() {
  if (body !== true) {
    loader.classList.add('ativo');
  } else {
    loader.classList.remove('ativo');
  }
} */

window.addEventListener('scroll', animaScroll);
window.addEventListener('load', anima);
