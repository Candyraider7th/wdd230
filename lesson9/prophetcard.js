const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);// temporary checking for valid response and data parsing
  });

function displayProphets(prophet) {  // Create elements to add to the document
  let card = document.createElement('section');
  let h2 = document.createElement('h2');    // Change the textContent property of the h2 element to contain the prophet's full name
  let dob = document.createElement('p');
  let pob = document.createElement('p');
  let img = document.createElement('img');
  h2.textContent = `${prophet.name} ${prophet.lastname}`;
  dob.textContent = `${prophet.birthdate}`;
  pob.textContent = `${prophet.birthplace}`;
  img.setAttribute('src', prophet.imageurl);
  img.setAttribute('alt', `${prophet.name} ${prophet.lastname} ${prophet.order}`);
  
  // Add/append the section(card) with the h2 element
  card.appendChild(h2);
  card.appendChild(dob);
  card.appendChild(pob);
  card.appendChild(img);
  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector('div.cards').appendChild(card);
}

/*To clear out cards
let card = document.querySelectorAll('.cards')
card.forEach((item)=>{item.remove();
})*/

/*function changeStyles () {
//change styles
if (window.innerWidth > 800 && window.innerwidth < 1000){
let change = document.querySelector('.cards');
change.setAttribute('style', 'background-color: pink; border: 10px solid red; display: block;')
}*/
//event listners for resizing the window and loading window
/*}
window.addEventListener('resize', changeStyles);
window.addEventListener('load', changeStyles);*/