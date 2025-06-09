// sort() = method used to sort elements of an array in place.
// 			Sorts elements as string in lexicographic order, not alphabetical
// 			lexicographic = (alphabet + numbers + sysbols)

let fruits = ["pinepple", "orenge", "coconut", "banana", "apple"];
console.log(fruits.sort()); //[ 'apple', 'banana', 'coconut', 'orenge', 'pinepple' ]


let num = [1, 10, 3, 2, 9, 4, 8, 5, 7, 6];
num.sort();
console.log(num); //[1, 10, 3, 2, 9, 4, 8, 5, 7, 6]

num.sort((a, b) => a - b);
console.log(num); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

num.sort((a, b) => b - a);
console.log(num); //[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

const people = [
	{ name: "Spongbob", age: 30, gpa: 3.0 },
	{ name: "Partick", age: 37, gpa: 1.5 },
	{ name: "Squidward", age: 51, gpa: 2.5 },
	{ name: "Sandy", age: 27, gpa: 4.0 },
];

people.sort((a, b) => a.gpa - b.gpa);
console.log(people);
/*[
  { name: 'Partick', age: 37, gpa: 1.5 },
  { name: 'Squidward', age: 51, gpa: 2.5 },
  { name: 'Spongbob', age: 30, gpa: 3 },
  { name: 'Sandy', age: 27, gpa: 4 }
]*/

people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);
/* [
  { name: 'Partick', age: 37, gpa: 1.5 },
  { name: 'Sandy', age: 27, gpa: 4 },
  { name: 'Spongbob', age: 30, gpa: 3 },
  { name: 'Squidward', age: 51, gpa: 2.5 }
] */