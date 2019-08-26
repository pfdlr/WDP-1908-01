console.log('hello');

let buttonsOutline = document.querySelectorAll('.btn-outline');
let loginText = document.querySelectorAll('.login');

if (window.screen.width < 768) {
  loginText.forEach(function (el) {
    el.classList.add('hidden');
  });
}

function classToggle (e) {
  e.preventDefault();
  this.classList.toggle('active');
}

buttonsOutline.forEach(function (el) {
  el.addEventListener('click', classToggle);
});
