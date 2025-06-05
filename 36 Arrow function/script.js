// arrow function = a concise way to write function expressions
//					good for simple functions that you use only once
//					(parameters) => some code

// Example 1
const hello = (name, age) => {
	console.log(`Hello, ${name}`);
	console.log(`Your age is ${age}`);
}
hello("Bro Code", 23);


// Example 2
const numbers = [1, 2, 3, 4, 5, 6];
const squreNum = numbers.map((element) => {
	return Math.pow(element, 2);
});
const isEven = numbers.filter((element) => {
	return element % 2 === 0;
});
const getMax = numbers.reduce((accumulator, element) => {
	return Math.max(accumulator, element);
});

console.log(squreNum); //[ 1, 4, 9, 16, 25, 36 ]
console.log(isEven); //[ 2, 4, 6 ]
console.log(getMax); //6