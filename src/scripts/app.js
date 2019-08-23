console.log('hello');

const toggleBtn = document.querySelector('.navbar-toggler');
const menu = document.querySelector('#menu');

if (window.screen.width < 768) {
  menu.classList.remove('display');
}

toggleBtn.addEventListener('onclick', function () {
  menu.classList.toggle('display');
});
