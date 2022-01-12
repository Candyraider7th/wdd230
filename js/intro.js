let currentdate = document.lastModified  
document.getElementById("updated").innerHTML = 'Last Updated: ' + currentdate;

let today = new Date();
let currentyear = today.getFullYear()
document.querySelector(".year").innerHTML = '&copy;' + currentyear + ' - Alexander Palmer - Idaho';