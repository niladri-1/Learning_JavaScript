// inheritance = allow a new class to inherit properties and methods
//  			from an existing class (parent -> child)
// 				helps with code reusability

class Animel {
	alive = true;

	constructor(name) {
		this.name = name;
	}

	eat() {
		console.log(`${this.name} is eating!`);
	}

	sleep() {
		console.log(`${this.name} is sleeping!`);
	}
}


class Rabbit extends Animel {
	name = "Rabbit";
	run() {
		console.log(`${this.name} can run!`);
	}
}

class Fish extends Animel {
	name = "Fish";
	swime() {
		console.log(`${this.name} can swime!`);
	}
}

const rabbit = new Rabbit();
const fish = new Fish();

rabbit.alive = false;

console.log(rabbit.alive); //true
rabbit.eat(); //Rabbit is eating!
rabbit.sleep(); //Rabbit is sleeping!
rabbit.run(); //Rabbit can run!