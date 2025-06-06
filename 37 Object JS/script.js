// object = a collection of related propertices and/or methods
//			can represent real world objects (people, products, place)
//			object = {key:value,
// 					  function()}

const person1 = {
	firstName: "Spongebob",
	lastName: "Squarepants",
	age: 30,
	isEmployed: true,
	sayHello: function () { console.log("Hi, I am Spongebob!") },
	eat: () => { console.log("I'm eating a krabby patty") },
}

const person2 = {
	firstName: "Patrick",
	lastName: "Star",
	age: 42,
	isEmployed: false,
	sayHello: () => { console.log("Hay, I'm Patrick!") },
	eat: () => { console.log("I'm eating roast beef, chicken & pizza") },
}

// console.log(person1);
// console.log(person2);


person1.sayHello();
person2.eat();