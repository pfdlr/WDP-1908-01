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


/*
    This script add slider effect to product gallery
*/
let leftb = document.getElementById('buttonLeft');
let rightb = document.getElementById('buttonRight');
let slider = document.getElementById('slider');
let getAllThumb = document.querySelectorAll('.photo-small');
let getCurrentImg = document.querySelector('#currentImg a');

leftb.addEventListener('click', event => {
  event.preventDefault();
  let getPosition = slider.getAttribute('style').split(':')[1];
  getPosition = parseInt(getPosition) + 100;

  slider.style.left = getPosition + 'px';
});

rightb.addEventListener('click', event => {
  event.preventDefault();
  let getPosition = slider.getAttribute('style').split(':')[1];
  getPosition = parseInt(getPosition) - 100;
  slider.style.left = getPosition + 'px';
});

getAllThumb.forEach(thumb => {
  thumb.addEventListener('click', () => {
    let getImg = thumb.getElementsByTagName('img')[0];
    getCurrentImg.childNodes[0].outerHTML = getImg.outerHTML;
    getCurrentImg.style.animation = 'fadein 0.5s';
    setTimeout(function () {
      getCurrentImg.removeAttribute('style');
    }, 500);
  });
});
