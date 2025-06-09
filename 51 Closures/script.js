// closure = a function defined inside of another function,
// 			the inner function has been acess to the variable
// 			and spcope of te outer function.
// 			Allow for private variables and state maintenance
// 			used frequently in JS freameworks: React, Vue, Angular

// 			A closure happens when a function remembers variables
// 			from the place it was created.


// Example 1
function outer() {
	let message = "Hello";

	function inner() {
		console.log(message);
	}
	inner();
}
outer();


// Example 2
function createCounter() {
	let count = 0;
	return function () {
		count++;
		console.log("Count:", count);
	};
}

const counter1 = createCounter();
counter1(); // Count: 1
counter1(); // Count: 2

const counter2 = createCounter();
counter2(); // Count: 1