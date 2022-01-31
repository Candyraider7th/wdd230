/*
function show() {
  button.classList.add('newstyle');
};

button.addEventListner('mouseover', show);
*/

/*
const buttons = document.getElementsByClassName('.btn');

console.log(buttons);

buttons.addEventListner('click', () => (buttons.classList.add('newstyle')));
*/

/*
function toggleMenu() {
  document.getElementsByClassName("ham")[0].classlist.toggle("responsive");
}
*/

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

/*** Programming Notes **************************************
  Arrow Functions - es6 syntactically compact alternative to a regular function expression
  see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  or https://www.w3schools.com/js/js_arrow_function.asp

  classList property - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  */
let currentdate = document.lastModified  
document.getElementById("updated").innerHTML = 'Last Updated: ' + currentdate;

let today = new Date();
let currentyear = today.getFullYear()
document.querySelector(".year").innerHTML = '&copy;  Los Alamos Chamber ' + currentyear + ' - Alexander Palmer - WDD 230 Project';

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date();
let day = days[d.getDay()];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[d.getMonth()];

let daynumber = d.getDate();
 
document.querySelector(".day").innerHTML = day +', ' + daynumber + ' ' + month + ' '+ currentyear;


