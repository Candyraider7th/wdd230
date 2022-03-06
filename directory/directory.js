const requestURL = 'https://github.com/Candyraider7th/wdd230/blob/main/directory/data.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const businesses = jsonObject['businesses'];
    businesses.forEach(displaybusinesses);// temporary checking for valid response and data parsing
  });

function displaybusinesses(business) {  // Create elements to add to the document
  let card = document.createElement('section');
  let address = document.createElement('p');
  let phonenumber = document.createElement('p');
  let website = document.createElement('p');
  let img = document.createElement('img');
  address.textContent = `${business.address}`;
  phonenumber.textContent = `${business.phonenumber}`;
  website.textContent = `${business.website}`;
  img.setAttribute('src', business.imageurl);
  img.setAttribute('alt', `${prophet.name} ${prophet.lastname} ${prophet.order}`);
  
  // Add/append the section(card) with the h2 element;
  card.appendChild(address);
  card.appendChild(phonenumber);
  card.appendChild(website);
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