console.log('hello');

let buttonsOutline = document.querySelectorAll('.btn-outline');

function classToggle (e) {
  e.preventDefault();
  this.classList.toggle('active');
}

buttonsOutline.forEach(function (el) {
  el.addEventListener('click', classToggle);
});
