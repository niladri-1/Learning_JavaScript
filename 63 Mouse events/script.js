// Mouse events = Listen for specific events to create interactive web pages
// 				  events: click, mouseover, mouseout
// 				  .addEventListener (event, callback);

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", event => {
	myBox.style.backgroundColor = "tomato";
	myBox.textContent = "OUCH! 🤕";
});

myButton.addEventListener("mouseover", event => {
	myBox.style.backgroundColor = "yellow";
	myBox.textContent = "Do not do it! 😲";
});


myButton.addEventListener("mouseout", event => {
	myBox.style.backgroundColor = "lightgreen";
	myBox.textContent = "Click me! 😀";
});