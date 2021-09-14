const sections = document.querySelectorAll('.js-scroll');
const div1anima = document.querySelector('.section1');
const loader = document.querySelector('.loader');
const btnToggle = document.querySelector('.ativar');
const toggle = document.querySelectorAll('.toggle');
const darkMode = document.querySelector('.color');
const imgDarkMode = document.getElementsByTagName('img')[1];

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
function animaToggle() {
  toggle.forEach((toggle) => {
    toggle.classList.toggle('ativo');
  });
}
function animaColor() {
  darkMode.classList.toggle('ativo');
  imgDarkMode.classList.toggle('ativo');
}

function trocaImg() {
  if (imgDarkMode.classList.contains('ativo')) {
    imgDarkMode.src = 'images/night2.png';
    btnToggle.style.background = '#121214';
  } else {
    imgDarkMode.src = 'images/night1.png';
    btnToggle.style.background = '#ff248a';
  }
}
window.addEventListener('scroll', animaScroll);
window.addEventListener('load', anima);
window.addEventListener('load', function () {
  loader.style.display = 'none';
});
btnToggle.addEventListener('click', animaToggle);
btnToggle.addEventListener('click', animaColor);
btnToggle.addEventListener('click', trocaImg);
