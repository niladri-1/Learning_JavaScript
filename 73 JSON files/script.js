// JSON = (JavaScript Object Notation) data-interchange format
// 		  Used for exxhanging data between a server and a web application
// 		  JSON files {key:value} OR [value1, value2, value3] OR [{}, {}. {}]

// 		  JSON.stringify() = converts a JS object to a JSON string.
// 		  JSON.parse() = converts a JSON string to a JSON object.

const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const namesJsonString = JSON.stringify(names);
console.log(namesJsonString);
const jsonNamesString = JSON.parse(jsonNames);
console.log(jsonNamesString);



const person = { "name": "Spongebob", "age": 30, "isEmployed": true, "hobbies": ["Jellyfishing", "Cooking", "Karate"]}
const jsonPerson = `{ "name": "Spongebob", "age": 30, "isEmployed": true, "hobbies": ["Jellyfishing", "Cooking", "Karate"]}`
const personJsonString = JSON.stringify(person);
console.log(personJsonString);
const jsonPersonString = JSON.parse(jsonPerson);
console.log(jsonPersonString);


const people = [
	{ "name": "Spongebob", "age": 30, "isEmployed": true },
	{ "name": "Patrick", "age": 34, "isEmployed": false },
	{ "name": "Squidward", "age": 50, "isEmployed": true },
	{ "name": "Sandy", "age": 27, "isEmployed": false }
]
const jsonPeople = `[
	{ "name": "Spongebob", "age": 30, "isEmployed": true },
	{ "name": "Patrick", "age": 34, "isEmployed": false },
	{ "name": "Squidward", "age": 50, "isEmployed": true },
	{ "name": "Sandy", "age": 27, "isEmployed": false }
]`
const peopleJsonString = JSON.stringify(people);
console.log(peopleJsonString);
const jsonPeopleString = JSON.parse(peopleJsonString);
console.log(jsonPeopleString);




fetch("names.json")
	.then(response => response.json())
	.then(values => values.forEach(value => console.log(value)))
	.catch(error => console.error(error))

fetch("people.json")
	.then(response => response.json())
	.then(values => values.forEach(value => console.log(value)))
	.catch(error => console.error(error))

fetch("person.json")
	.then(response => response.json())
	.then(value => console.log(value))
	.catch(error => console.error(error))