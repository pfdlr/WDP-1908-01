console.log('hello');

let cartCount = document.querySelector('.cart-counter');

cartCount.addEventListener('DOMSubtreeModified', function () {
  let value = cartCount.innerText.length;
  if (value > 2) {
    cartCount.classList.add('smaller');
  }
  if (value < 3) {
    cartCount.classList.remove('smaller');
  }
});
