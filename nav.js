// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navUl = document.querySelector('nav ul');

if (toggle && navUl) {
  toggle.addEventListener('click', () => {
    navUl.classList.toggle('open');
  });

  // Close menu when a link is clicked
  navUl.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navUl.classList.remove('open');
    });
  });
}
