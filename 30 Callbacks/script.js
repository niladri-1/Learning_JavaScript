// Callbacks = a function that is passed as an argument
//            to another function.


// 				Used to hendel asynchronous operations:
// 				1. Reading a file
// 				2. Network requests
// 				3. Interacting with Database

// 				"Hey, when you're done, call this next."


// Example 1
function doSomething(callback) {
	console.log("Start");
	setTimeout(() => {
		console.log("Doing something...");
		callback();
	}, 2000); // simulate 2-second delay
}

function done() {
	console.log("Done!");
}

doSomething(done);


// Example 2
function sum(callBack, x, y) {
	let result = x + y;
	callBack(result);
}

function displayConsole(result) {
	console.log(result);
}

sum(displayConsole, 10, 20); //30
