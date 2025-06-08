

// Example 1
const myPerson = {
	fullname: "Spongebob Squarepants",
	age: 30,
	isStudent: true,
	hobbies: ["kerate", "fishing", "cooking"],
	address: {
		state: "124 Conch St.",
		city: "Bikini Bottom",
		country: "Int. Water"
	}
}

console.log(myPerson.fullname, myPerson.age, myPerson.isStudent); //Spongebob Squarepants 30 true
console.log(myPerson.hobbies, myPerson.hobbies[1]); //[ 'kerate', 'fishing', 'cooking' ] fishing
console.log(myPerson.address, myPerson.address.country); //{state: '124 Conch St.', city: 'Bikini Bottom', country: 'Int. Water'} Int. Water



// Example 2
class Person {
	constructor(name, age, ...address) {
		this.name = name;
		this.age = age;
		this.address = new Adress(...address);
	}
}

class Adress {
	constructor(street, city, country) {
		this.street = street;
		this.city = city;
		this.country = country;
	}
}

const person1 = new Person("Spongebob", 30, "124 Conch St.", "Bikini Bottom", "Int. Water");
const person2 = new Person("Partick", 37, "128 Conch St.", "Bikini Bottom", "Int. Water");
const person3 = new Person("Squidward", 45, "126 Conch St.", "Bikini Bottom", "Int. Water");

console.log(person1.name, person1.age, person1.address.street, person1.address.city, person1.address.country); //Spongebob 30 124 Conch St. Bikini Bottom Int. Water
console.log(person2.name, person2.age, person2.address.street, person2.address.city, person2.address.country); //Partick 37 128 Conch St. Bikini Bottom Int. Water
console.log(person3.name, person3.age, person3.address.street, person3.address.city, person3.address.country); //Squidward 45 126 Conch St. Bikini Bottom Int. Water