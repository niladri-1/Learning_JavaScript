// Callbacks = a function that is passed as an argument
//            to another function.


// 				Used to hendel asynchronous operations:
// 				1. Reading a file
// 				2. Network requests
// 				3. Interacting with Database

// 				"Hey, when you're done, call this next."


// Example 1
hello(goodbye); // hello
hello(leave); // good-bye


function hello(callback) {
	console.log("hello");
	callback();
}

function goodbye() {
	console.log("good-bye");
}

function leave() {
	console.log("leave");
}


// Example 2
function sum(callBack, x, y) {
	let result = x + y;
	callBack(result);
}

function displayConsole(result) {
	console.log(result);
}

sum(displayConsole, 10, 20); //30
