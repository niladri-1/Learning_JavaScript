// super = keyword is used in classes to call the constructor or
// 	 	   access the properties and methods of a parent (superClass)
// 		   this = this object
// 		   super = the parent

class Animal {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	move(speed) {
		console.log(`This ${this.name} run at ${speed}km/s!`);
	}
}

class Rabbit extends Animal {
	constructor(name, age, runSpeed) {
		super(name, age);
		this.runSpeed = runSpeed;
	}
	run() {
		super.move(this.runSpeed);
	}
}

class Fish extends Animal {
	constructor(name, age, swimSpeed) {
		super(name, age);
		this.swimSpeed = swimSpeed;
	}
	swim() {
		super.move(this.swimSpeed);
	}
}

class Hawk extends Animal {
	constructor(name, age, flySpeed) {
		super(name, age);
		this.flySpeed = flySpeed;
	}
	fly() {
		super.move(this.flySpeed);
	}
}


const rabbit = new Rabbit("Rabbit", 1, 25);
const fish = new Fish("Fish", 2, 12);
const hawk = new Hawk("Hawk", 3, 50);



console.log(rabbit.name); //Rabbit
console.log(rabbit.age); //1
console.log(rabbit.runSpeed); //25

console.log(fish.name); //Fish
console.log(fish.age); //2
console.log(fish.swimSpeed); //12

console.log(hawk.name); //Hawk
console.log(hawk.age); //2
console.log(hawk.flySpeed); //50


rabbit.run(); //This Rabbit run at 25km/s!
fish.swim(); //This Fish run at 12km/s!
hawk.fly(); //This Hawk run at 50km/s!