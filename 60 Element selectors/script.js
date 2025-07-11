// Element selectors = Mathods used to terget and manipulated HTML elements
// 					   They allow you to select one or multiple HTML elements
// 					   from the DOM (Document Object Model)

// 1. document.getElementById()				// ELEMENT OR NULL
// 2. document.getElementsByClassName()		// HTML COLLECTION
// 3. document.getElementsByTagName()		// HTML COLLECTION
// 4. document.querySelector()				// ELEMENT OT NULL
// 5. document.querySelectorAll()			// NODELIST


// 1. document.getElementById()				// ELEMENT OR NULL
const myH1 = document.getElementById("myH1");
myH1.style.backgroundColor = "yellow";
myH1.style.textAlign = "center";
console.log(myH1); //<h1 id="myH1" style="background-color: yellow; text-align: center;">Food R Us</h1>



// 2. document.getElementsByClassName()		// HTML COLLECTION
const fruits = document.getElementsByClassName("fruits");
fruits[0].style.fontSize = "50px";
fruits[1].style.fontFamily = "Arial";
for (let fruit of fruits){
	fruit.style.backgroundColor = "green";
	fruit.style.margin = "2px";
}


// 3. document.getElementsByTagName()		// HTML COLLECTION
const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

h4Elements[0].style.backgroundColor = "lightpink";
h4Elements[1].style.backgroundColor = "darkOrange";
for(liElement of liElements){
	liElement.style.backgroundColor = "Gray";
}



// 4. document.querySelector()				// ELEMENT OT NULL
const classElements = document.querySelector(".fruits");
const h4Element = document.querySelector("h4");

classElements.style.fontStyle = "Italic";
h4Element.style.fontStyle = "Italic";



// 5. document.querySelectorAll()			// NODELIST
const foods = document.querySelectorAll("li");
for(let food of foods){
	food.style.fontWeight = "bold";
	food.style.fontSize = "30px";
}