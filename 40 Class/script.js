// class = (ES6 feature) provides a more structure and cleaner way to
//			work with objects compared to traditional constructor functions
//			ex. static keyword, encapsulation, inheritance

const selesTax = 0.05;

class Product {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}

	displayProduct() {
		console.log(`Product: ${this.name}`);
		console.log(`Price: $${this.price.toFixed(2)}`);

		const total = this.calculateTotal(selesTax);
		console.log(`Total (with tax): $${total.toFixed(2)}`);
	}

	calculateTotal(selesTax) {
		return this.price + (this.price * selesTax);
	}
}


const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.50);
const product3 = new Product("Underware", 100);


product1.displayProduct(); //Product: Shirt, Price: $19.99, Total (with tax): $20.99
product2.displayProduct(); //Product: Pants, Price: $22.50, Total (with tax): $23.63
product3.displayProduct(); //Product: Underware, Price: $100.00, Total (with tax): $105.00