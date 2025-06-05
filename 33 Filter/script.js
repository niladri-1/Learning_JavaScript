// .filter() = creates a new array by filtering
// 				out elements


let numbers = [1, 2, 3, 4, 5];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);
console.log(evenNums); //[2, 4]
console.log(oddNums); //[ 1, 3, 5 ]

function isEven(elements) {
	return elements % 2 === 0;
}
function isOdd(elements) {
	return elements % 2 !== 0;
}



// With .map() {why we use .filter() instand of .map()}
let numbers1 = [1, 2, 3, 4, 5];
let evenNums1 = numbers1.map(isEven);
console.log(evenNums1); //[ false, true, false, true, false ]

function isEven(elements) {
	return elements % 2 === 0;
}