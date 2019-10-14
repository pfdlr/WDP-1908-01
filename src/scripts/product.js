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

// stars review

var stars = document.querySelectorAll('.stars a');
var starsWrapper = document.querySelectorAll('.stars');

for (let star of stars) {
  star.addEventListener('click', onStarClick);
  star.addEventListener('mouseenter', onStarEnter);
}

for (let wrapper of starsWrapper) {
  wrapper.addEventListener('mouseleave', onStarLeave);
}

function onStarClick (event) {
  updateStars(event.currentTarget, 'active');
}

function onStarEnter (event) {
  updateStars(event.currentTarget, 'hovered');
}

function onStarLeave (event) {
  var allStars = event.currentTarget.querySelectorAll('.stars a');
  var allStarsArr = Array.from(allStars);
  var i = 0;

  for (i = 0; i < allStarsArr.length; i++) {
    allStarsArr[i].classList.remove('hovered');
  }
}

function updateStars (element, className) {
  var parent = element.parentNode;
  var allStars = parent.querySelectorAll('.stars a');
  var allStarsArr = Array.prototype.slice.call(allStars);
  var currentElementPosition = allStarsArr.indexOf(element);
  var i = 0;

  for (i = 0; i < allStarsArr.length; i++) {
    allStarsArr[i].classList.remove('full');

    if (i <= currentElementPosition) {
      allStarsArr[i].classList.add(className);
    } else {
      allStarsArr[i].classList.remove(className);
    }
  }
}

// switching tabs
