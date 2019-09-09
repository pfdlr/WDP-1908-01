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
  });
});
