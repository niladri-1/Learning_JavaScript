// static = keyword that defines properties or methods the belong
// 			to a class itself rather than the objects created
// 			from that class (class owns anything static, not the objects)

// Example 1
class MathUtil {
	static PI = 3.14159;

	static getDimameter(radius){
		return radius * 2;
	}

	static getCircumference(radius){
		return 2 * this.PI * radius;
	}

	static getArea(radius){
		return this.PI * radius * radius;
	}
}

console.log(MathUtil.PI); //3.14159
console.log(MathUtil.getDimameter(10)); //20
console.log(MathUtil.getCircumference(5)); //31.4159
console.log(MathUtil.getArea(10)); //314.159


// Example 2
class User {
	static userCount = 0;

	constructor(username) {
		this.username = username;
		User.userCount++;
	}

	sayHello(){
		console.log(`Hello, my username is ${this.username}`);
	}
}

const user1 = new User("Jhon");
const user2 = new User("Sones");
const user3 = new User("Admam");

console.log(User.userCount); // 3
user1.sayHello(); //Hello, my username is Jhon
user2.sayHello(); //Hello, my username is Sones
user3.sayHello(); //Hello, my username is Admam