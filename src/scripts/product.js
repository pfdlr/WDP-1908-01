// modal
var showModal = function (event) {
  event.preventDefault();
  document.querySelector('.overlay-modal').classList.add('show');
};

document.querySelector('.cart-box').addEventListener('click', showModal);

var hideModal = function (event) {
  event.preventDefault();
  document.querySelector('.overlay-modal').classList.remove('show');
};

document.querySelector('.close-button').addEventListener('click', hideModal);

document.querySelector('.overlay-modal').addEventListener('click', hideModal);

document.querySelector('.basket-modal').addEventListener('click', function (event) {
  event.stopPropagation();
});

/*
Overlay toggle for mobile navbar-toggler button
*/
const toggleBtn = document.querySelector('.navbar-toggler');
const overlay = document.querySelector('.overlay');

toggleBtn.addEventListener('click', function () {
  overlay.classList.toggle('hidden');
});

/* hiding text on top-bar for mobile */

let loginText = document.querySelectorAll('.login');

if (window.screen.width < 768) {
  loginText.forEach(function (el) {
    el.classList.add('hidden');
  });
}
