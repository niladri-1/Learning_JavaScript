// DOM = DOCUMENT OBJECT MODEL
// 		 Object{} that represents the page you see in the web browser
// 		 and provides you with an API to interact with it.
// 		 Web browser constructs the DOM when it loads an HTML document,
// 		 and structures all the elements in a tree-like representation.
// 		 JavaScript can access the dom to dynamically
// 		 chenge the content, structure and style of a web page.

document.title = "My New title";
document.body.style.backgroundColor = "hsl(0,0%,75%)"

const userName = "abc";
let wellcomeMsg = "Hello, "

wellcomeMsg += userName === "" ? `Guest` : userName;

console.log(wellcomeMsg); //Hello, abc
