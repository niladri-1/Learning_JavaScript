// function declaration = define a reusable block of code
// 						  that performs a specific task.
// 						  We read that befefore.

// function hello() {
// 	console.log("Hi");
// }
// hello();


// function expressions = a way define function as
//						  values or variables

const numbers = [1, 2, 3, 4, 5, 6];

const squreNum = numbers.map(function (element) {
	return Math.pow(element, 2);
});

const isOdd = numbers.filter(function (element) {
	return element % 2 !== 0;
});

const maxNum = numbers.reduce(function (accumulator, element) {
	return Math.max(accumulator, element);
});

console.log(squreNum); // [1,4,9,16,25,36]
console.log(isOdd); // [1,3,5]
console.log(maxNum); // 6