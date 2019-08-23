console.log('hello');

/*
    This script replaceing default select style - hide select and replace with ul li list for styling new list
*/

// set select category element to variable
let selectEle = document.getElementById('category');

let numberOfOptions = selectEle.children.length; // Get number of options item
selectEle.classList.add('select-hidden'); // add new class to category with id = category

// wrap old element with new div.select-styled
let orgHtml = selectEle.outerHTML;
let newselect = "<div class='select'>" + orgHtml + '</div>';
selectEle.outerHTML = newselect;

// create new element and append to new wraped div at the end
document.getElementsByClassName('select')[0].innerHTML +=
  "<div class='select-styled'></div>";
let styledSelect = selectEle.firstElementChild.innerHTML;

document.getElementsByClassName('select-styled')[0].innerHTML = styledSelect;

// create new element ul and add new class
let newElem3 = document.createElement('ul');
newElem3.classList.add('select-options');
document.getElementsByClassName('select-styled')[0].outerHTML += newElem3.outerHTML;

// variable with query for new elements
let newOpt = document.querySelectorAll('.category select option');
let soption = document.getElementsByClassName('select-options')[0];

// for each options element add to new li item
for (var i = 0; i < numberOfOptions; i++) {
  soption.innerHTML +=
    '<li rel=' + newOpt[i].getAttribute('value') + '>' + newOpt[i].innerHTML + '</li>';
}
// at begining set display to none
soption.style.display = 'none';

// if clicked on button hide/show active list
document
  .getElementsByClassName('select-styled')[0]
  .addEventListener('click', function (e) {
    e.stopPropagation();
    e.target.classList.toggle('active');
    // set item to show or not
    if (soption.style.display === 'none') {
      soption.style.display = 'block';
    } else {
      soption.style.display = 'none';
    }
  });
// if clicked button else where addd/remove active class
document.addEventListener('click', function () {
  document.getElementsByClassName('select-styled')[0].classList.remove('active');
  soption.style.display = 'none';
});
