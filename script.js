var colorDetails = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("main");
var button = document.getElementById("genNew");
function setGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	colorDetails.textContent = body.style.background + ";";
}

colorDetails.textContent = "linear-gradient(to right, " + "rgb(255,0,0)" + ", " + "rgb(255,255,0)" + ")";

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);


function setBg() {
  var r = () => Math.random() * 256 >> 0;
  document.body.style.background = `rgb(${r()}, ${r()}, ${r()})`;
  colorDetails.textContent = `rgb(${r()}, ${r()}, ${r()})`;
}

button.addEventListener("click", setBg);