console.log('hello');

let buttonsOutline = document.querySelectorAll('.btn-outline');

function classToggle () {
  this.classList.toggle('active');
}

buttonsOutline.forEach(function (el) {
  el.addEventListener('click', classToggle);
});
