// .map() = accepts a callback and applies that function
// 			to each elemrnt of an array, then return a new array

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(squareFunction);
const cubes = numbers.map(cubeFunction);

console.log(squares);
console.log(cubes);

function squareFunction(elements) {
	return Math.pow(elements, 2);
}
function cubeFunction(elements) {
	return Math.pow(elements, 3);
}


const students = ["Spongebob", "Patrick", "Sandy"];

const studentsUpper = students.map(upperCase);
console.log(studentsUpper);

function upperCase(element) {
	return element.toUpperCase();
}