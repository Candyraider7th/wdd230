const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=43.826&lon=-111.7897&exclude=hourly,daily&appid=ceb62e3cb75c64aead656e32d58df47a";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#temp').textContent = ((jsObject.current.temp - 273.15) * 1.8 +32).toFixed(1);
    document.querySelector('#humidity').textContent = jsObject.current.humidity
  
const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
const desc = jsObject.weather[0].description;
document.querySelector('#icon-src').textContent = iconsrc;
document.querySelector('#weathericon').setAttribute('src', iconsrc);
document.querySelector('#weathericon').setAttribute('alt', desc);
document.querySelector('figcaption').textContent = desc;
  });
