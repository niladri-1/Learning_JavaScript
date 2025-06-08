// get = special method that makes a property readable
// set = special method that makes a property writeable

// validate and modify a value when reading/wriiting a property


class Rectangle{
	constructor(width, height){
		this.width = width;
		this.height = height;
	}

	set width(newWidth){
		if (newWidth > 0) {
			this._width = newWidth;
		} else {
			console.error("Width must be a positive number");
		}
	}

	set height(newHeight){
		if (newHeight > 0) {
			this._height = newHeight;
		} else {
			console.error("Height must be a positive number");
		}
	}

	get width(){
		return this._width;
	}

	get height(){
		return this._height;
	}

	get area(){
		return this._height * this._width;
	}
}

const rectangle1 = new Rectangle(5, 3);
const rectangle2 = new Rectangle(-100, "pizza");

console.log(rectangle1.width); //5
console.log(rectangle1.height); //3
console.log(rectangle1.area); //15

console.log(rectangle2.width); // Width must be a positive number
console.log(rectangle2.height); //Height must be a positive number
console.log(rectangle2.area); //NaN
