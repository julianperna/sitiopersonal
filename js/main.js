const button = document.querySelector('.header__button');
const nav = document.querySelector('.header__nav');
button.addEventListener('click', function () {
  nav.classList.toggle('header__nav--activo');
});
  window.addEventListener("scroll", function () {
    let nav = document.getElementById("header");
    nav.classList.toggle("abajo", window.scrollY > 0);
  });
