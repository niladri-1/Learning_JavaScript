// this = reference to the object where THIS is used
//		 (the object depends on the immediate context)
//		  persone.nae = this.name

const person1 = {
	name: "Spongebob",
	favFood: "hamburgers",
	sayHello: function() { console.log(`Hi, I'm ${this.name}`) },
	eat() { console.log(`${this.name} is eating ${this.favFood}`) }, //this is a arrow function
}

const person2 = {
	name: "Partick",
	favFood: "pizza",
	sayHello: function() { console.log(`Hi, I'm ${this.name}`) },
	eat() { console.log(`${this.name} is eating ${this.favFood}`) }, //this is a arrow function
}

const person3 = {
	name: "Sandy",
	favFood: "fish",
	sayHello: function() { console.log(`Hi, I'm ${person3.name}`) },
	eat() { console.log(`${this.name} is eating ${person3.favFood}`) }, //this is a arrow function
}

person1.sayHello(); // Hi, I'm Spongebob
person1.eat(); //Spongebob is eating hamburgers

person2.sayHello(); // Hi, I'm Partick
person2.eat(); // Partick is eating pizza

person3.sayHello(); // Hi, I'm Sandy
person3.eat(); // Sandy is eating fish