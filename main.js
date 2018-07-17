alert("Hey! This is an alert box.");

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

myButton.onclick = function() {
  var name = prompt("What is your name?");
  localStorage.setItem("name:", name);
  myHeading.innerHTML("name", name);
  onclick(name);
}
