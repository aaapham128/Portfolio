alert("Hey! This is an alert box.");

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
var image = document.querySelectorAll("img").item(4);

function Username() {
  var name = prompt("What is your name?");
}

myButton.onclick = function() {
  var name = prompt("What is your name?");
  document.getElementById("myButton").innerHTML = name + "'s Bio";
}

image.onclick = function() {
    var mySrc = image.getAttribute("src");
    if (image.src == "bts.jpg") {
      image.setAttribute(mySrc ="vixx.jpg");
    }
    else {
      image.setAttribute(mySrc = "bts.jpg");
    }
}
