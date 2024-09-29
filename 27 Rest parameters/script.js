// Rest parameters = 	(...rest) allow a function work with a veriable number of arguments by
// 						bundling them into an array

// 						rest = bundels seperate elements into an array


const food1 = "Pizza";
const food2 = "hamburgers";
const food3 = "hotdogs";
const food4 = "sushi";

function openFridge(...foods) {
	console.log(foods); // [ 'Pizza', 'hamburgers', 'hotdogs', 'sushi' ]
	console.log(...foods); // Pizza hamburgers hotdogs sushi
}
openFridge(food1, food2, food3, food4); // [ 'Pizza', 'hamburgers', 'hotdogs', 'sushi' ]


function getFood(...foods) {
	return foods; // [ 'Pizza', 'hamburgers', 'hotdogs', 'sushi' ]
}
const foods = getFood(food1, food2, food3, food4);
console.log(foods); // [ 'Pizza', 'hamburgers', 'hotdogs', 'sushi' ]
console.log(...foods); // Pizza hamburgers hotdogs sushi






function sum(...numbers) {

	let result = 0;
	for (let number of numbers) {
		result += numbers;
	}
	return result; // 15
}

const total = sum(1, 2, 3, 4, 5);
console.log(`your total is $${total}`); // your total is $15






function getAverage(...numbers) {

	let result = 0;
	for (let number of numbers) {
		result += numbers;
	}
	return result / numbers.length; // 3
}

const average = getAverage(1, 2, 3, 4, 5);
console.log(`your average is ${average}`); // your average is 3






function combineString(...strings) {
	return strings.join(" ");
}

const fullName = combineString("Mr.", "Spongebob", "Squarepants", "III");
console.log(fullName); // Mr. Spongebob Squarepants III