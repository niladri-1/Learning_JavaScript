// array = a variable like structure that can hold multiple values
//         in a single variable.

let fruits = ["apple", "orange", "banana"];

console.log(fruits[0]); // access element
console.log(fruits[1]);	// access element
console.log(fruits[2]); // access element
console.log(fruits[10]); // undefined



for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]); // access all elements
}
// or
for (let fruit of fruits) {
	console.log(fruit); // access all elements
}



fruits[0] = "coconut"; // update existing element
fruits.push("mango"); // add new element at the end
fruits.pop(); // remove last element
fruits.unshift("pineapple"); // add new element at the beginning
fruits.shift(); // remove first element
console.log(fruits.length); // length of array
console.log(fruits.indexOf("orange")); // index of element
fruits.sort(); // sort array
fruits.reverse(); // reverse array