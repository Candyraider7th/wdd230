const requestURL = 'https://raw.githubusercontent.com/Candyraider7th/wdd230/main/directory/data.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const businesses = jsonObject['businesses'];
    businesses.forEach(displaybusinessescards);// temporary checking for valid response and data parsing
    businesses.forEach(displaybusinesseslist);
  });

function displaybusinessescards(business) {  // Create elements to add to the document
  let card = document.createElement('section');
  let address = document.createElement('p');
  let phonenumber = document.createElement('p');
  let website = document.createElement('a');
  let linkText = document.createElement('p');
  let img = document.createElement('img');
  address.textContent = `${business.address}`;
  phonenumber.textContent = `${business.phonenumber}`;
  website.textContent = `${business.website}`;
  website.href = `${business.website}`;
  img.setAttribute('src', business.imageurl);
  
  // Add/append the section(card) with the h2 element;
  card.appendChild(img);
  card.appendChild(address);
  card.appendChild(phonenumber);
  card.appendChild(website);
  
  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector('div.cards').appendChild(card);
  
}

function displaybusinesseslist(business) {  // Create elements to add to the document
  let list = document.createElement('section');
  let address = document.createElement('p');
  let phonenumber = document.createElement('p');
  let website = document.createElement('a');
  let linkText = document.createElement('p');
  let name = document.createElement('p');
  name.textContent = `${business.name}`
  address.textContent = `${business.address}`;
  phonenumber.textContent = `${business.phonenumber}`;
  website.textContent = `${business.website}`;
  website.href = `${business.website}`;

  
  // Add/append the section(card) with the h2 element;
  list.appendChild(name);
  list.appendChild(address);
  list.appendChild(phonenumber);
  list.appendChild(website);
  
  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector('div.list').appendChild(list);
    
}

function buttonlist() {
    let list = document.getElementById("list_directory");
    let cards = document.getElementById("cards_directory");
    list.classList.remove("hide");
    cards.classList.add("hide");
    cards.classList.remove("cards");
    
}

function buttoncards() {
    let list = document.getElementById("list_directory");
    let cards = document.getElementById("cards_directory");
    list.classList.add("hide");
    cards.classList.remove("hide");
    cards.classList.add("cards");
    }


//To clear out cards
//let card = document.querySelectorAll('.cards')
//card.forEach((item)=>{item.remove();
//})

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