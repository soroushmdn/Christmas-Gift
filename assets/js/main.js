/*@@@@@@@@@@@@@@@@@ SHOW MENU @@@@@@@@@@@@@@@@@*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu');
});

/*@@@@@@@@@ remove menu when click on nav links @@@@@@@@@@*/

const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach((n) => {
  n.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});

/*@@@@@@@@@@@@@@@@@ change header background  @@@@@@@@@@@@@@@@@*/

const header = document.getElementById('header');
window.addEventListener('scroll', scrollHeader);

function scrollHeader() {
  if (this.scrollY >= 50) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}
