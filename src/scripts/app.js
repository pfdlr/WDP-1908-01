/* New furniture - carousel */
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
