const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5476825&appid=ceb62e3cb75c64aead656e32d58df47a";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#temp').textContent = ((jsObject.main.temp - 273.15) * 1.8 +32).toFixed(1);
    document.querySelector('#ws').textContent = jsObject.wind.speed
  
  const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
  const desc = jsObject.weather[0].description;
  document.querySelector('#icon-src').textContent = iconsrc;
  document.querySelector('#weathericon').setAttribute('src', iconsrc);
  document.querySelector('#weathericon').setAttribute('alt', desc);
  document.querySelector('figcaption').textContent = desc;
  });
