// JSON = (JavaScript Object Notation) data-interchange format
// 		  Used for exxhanging data between a server and a web application
// 		  JSON files {key:value} OR [value1, value2, value3] OR [{}, {}. {}]

// 		  JSON.stringify() = converts a JS object to a JSON string.
// 		  JSON.parse() = converts a JSON string to a JSON object.


// 1. JavaScript Array
const names = ["Spongebob", "Patrick"];
console.log("Original Array:", names); // Output: ["Spongebob", "Patrick"]

const namesAsJson = JSON.stringify(names);
console.log("Stringified JSON:", namesAsJson); // Output: '["Spongebob","Patrick"]'

const namesBackToArray = JSON.parse(namesAsJson);
console.log("Parsed Back to Array:", namesBackToArray); // Output: ["Spongebob", "Patrick"]


// 2. JavaScript Object
const person = {
	name: "Spongebob",
	age: 30,
	isEmployed: true,
};
console.log("Original Object:", person); // Output: { name: "Spongebob", age: 30, isEmployed: true }

const personAsJson = JSON.stringify(person);
console.log("Stringified JSON:", personAsJson); // Output: '{"name":"Spongebob","age":30,"isEmployed":true}'

const personBackToObject = JSON.parse(personAsJson);
console.log("Parsed Back to Object:", personBackToObject); // Output: { name: "Spongebob", age: 30, isEmployed: true }


// 3. Array of Objects
const people = [
	{ name: "Spongebob", age: 30 },
	{ name: "Patrick", age: 34 },
];
console.log("Original People Array:", people); // Output: [ { name: "Spongebob", age: 30 }, { name: "Patrick", age: 34 } ]

const peopleAsJson = JSON.stringify(people);
console.log("Stringified People JSON:", peopleAsJson); // Output: '[{"name":"Spongebob","age":30},{"name":"Patrick","age":34}]'

const peopleBackToArray = JSON.parse(peopleAsJson);
console.log("Parsed Back to People Array:", peopleBackToArray); // Output: [ { name: "Spongebob", age: 30 }, { name: "Patrick", age: 34 } ]


// 4. FETCHING JSON FILES FROM SERVER (or local)
fetch("names.json")
	.then(response => response.json())
	.then(data => console.log("Fetched names:", data)) // Output: Fetched names: ["Spongebob", "Patrick"]
	.catch(error => console.error("Error loading names.json:", error));


fetch("people.json")
	.then(response => response.json())
	.then(data => console.log("Fetched people:", data)) // Output: Fetched people: [{ name: "Spongebob", ... }, ...]
	.catch(error => console.error("Error loading people.json:", error));


fetch("person.json")
	.then(response => response.json())
	.then(data => console.log("Fetched person:", data)) // Output: Fetched person: { name: "Spongebob", age: 30, ... }
	.catch(error => console.error("Error loading person.json:", error));
