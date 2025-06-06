// constructor = special method for defining the
// 				 properties and methods of objects

function Car(make, model, year, color) {
	this.make = make,
	this.model = model,
	this.year = year,
	this.color = color
	this.drive = function() {console.log(`You drive ${this.model}`)}
}

const car1 = new Car("ford", "Mustang", 2024, "red");
const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");

console.log(car1.make); //ford
console.log(car1.model); //Mustang
car1.drive(); //You drive Mustang


console.log(car2.year); // 2025
console.log(car2.color); //blue
car2.drive()