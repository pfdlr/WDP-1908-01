/* New furniture - carousel WDP190801-18 */
/* global tns */
tns({
  container: '.product-carousel',
  items: 1,
  mouseDrag: true,
  slideBy: 'page',
  controlsText: ['<', '>'],
  responsive: {
    575: {
      items: 2
    },
    768: {
      items: 3
    },
    992: {
      items: 4
    }
  }
});
/* Latest blog - carousel WDP190801-20 */
tns({
  container: '.blog-carousel',
  items: 1,
  mouseDrag: true,
  controlsText: ['<', '>'],
  responsive: {
    575: {
      items: 1
    },
    768: {
      items: 2
    },
    992: {
      items: 3
    }
  }
});

/* Brands slider */
tns({
  container: '.brands-slider',
  items: 6,
  mouseDrag: true,
  slideBy: 'page',
  prevButton: '#brands-prev',
  nextButton: '#brands-next',
  nav: false,
  responsive: {
    375: {
      items: 1
    },
    575: {
      items: 2
    },
    768: {
      items: 3
    },
    992: {
      items: 4
    },
    1024: {
      items: 5
    },
    1224: {
      items: 6
    }
  }
});

/*
Overlay toggle for mobile navbar-toggler button  and
class toggle for product-box "like" & "compare" buttons
*/
const toggleBtn = document.querySelector('.navbar-toggler');
const overlay = document.querySelector('.overlay');

toggleBtn.addEventListener('click', function () {
  overlay.classList.toggle('hidden');
});

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

/*
    This script change tabs with fade effect
*/

let getAllTabs = document.querySelectorAll('.section--products .container');

getAllTabs.forEach(showTab);

function showTab (tab) {
  if (tab.getAttribute('class') === 'container tab-pane fade in show') {
    tab.style.display = 'block';
  } else {
    tab.style.display = 'none';
  }

  let buttonsTab = tab.querySelectorAll('.nav-tabs .nav-link');

  buttonsTab.forEach(button => {
    button.addEventListener('click', function (e) {
      let getLink = e.path[0].getAttribute('href').split('-')[1];
      let getCurrentTab = document.querySelector('.container.tab-pane.fade.show');
      let getTargetTab = document.querySelector('.container.tab-pane.fade#' + getLink);

      getCurrentTab.classList.remove('show');
      getCurrentTab.classList.remove('in');
      setTimeout(function () {
        getCurrentTab.style.display = 'none';
      }, 300);

      getTargetTab.classList.add('show');
      getTargetTab.classList.add('in');

      setTimeout(function () {
        getTargetTab.style.display = 'block';
      }, 300);
    });
  });
}
