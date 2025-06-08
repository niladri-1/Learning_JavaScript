// destructuring = extract values from array and objes,
// 					then assign them to variables in a conveient way
// 					[] = to perfrom array destructuring
// 					{} = to perfrom object destructuring

// ---------------- Example 1 ----------------
// ------ Swaps the value of two numbers ------
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a); //2
console.log(b); //1

// ---------------- Example 2 ----------------
// ------ Swaps 2 elemrnts in an array ------
const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];
console.log(colors); //[ 'white', 'green', 'blue', 'black', 'red' ]

// ---------------- Example 3 ----------------
// ------ Assign array elements to variable ------
const colorsName = ["red", "green", "blue", "black", "white"];
const [firstColor, secondColor, thirdColor, ...extraColor] = colorsName;

console.log(firstColor); //red
console.log(secondColor); //green
console.log(extraColor); //[ 'black', 'white' ]

// ---------------- Example 4 ----------------
// ------ Extract values from array ------
const person1 = {
	firstName: "Spongbob",
	lastName: "Squrepants",
	age: 30,
	job: "Fry Cook",
}
const person2 = {
	firstName: "Parick",
	lastName: "Star",
	age: 34,
}

// const {firstName, lastName, age, job} = person1;
const {firstName, lastName, age, job="unemployed"} = person2;
console.log(firstName, lastName, age, job); //Spongbob Squrepants 30 Fry Cook


// ---------------- Example 5 ----------------
// ------ Destructure in finction parameters ------
function displayPerson({firstName, lastName, age, job}) {
	console.log(`name:${firstName} ${lastName}, age:${age}, job:${job}`);
}
const personInfo1 = {
	firstName: "Spongbob",
	lastName: "Squrepants",
	age: 30,
	job: "Fry Cook",
}
const personInfo2 = {
	firstName: "Parick",
	lastName: "Star",
	age: 34,
}

displayPerson(personInfo1); //name:"Spongbob Squrepants", age:"30", job:"Fry Cook"
displayPerson(personInfo2); //name:"Parick Star", age:"34", job:"undefined"