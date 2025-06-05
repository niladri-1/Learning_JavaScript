// .reduce() =  reduce the elements of an array
// 				to a single value


// Example 1
const valuesPrice = [50, 20, 60, 30, 10];
const maxNumber = valuesPrice.reduce(maxValue);
const minNumber = valuesPrice.reduce(minValue);

console.log(maxNumber); //60
console.log(minNumber); //10


function maxValue(accumulator, elements) {
	return Math.max(accumulator, elements);
}
function minValue(accumulator, elements) {
	return Math.min(accumulator, elements);
}



// Example 2
const grades = [10, 20, 70, 80];
const total = grades.reduce(getTotal);

console.log(total); //180

function getTotal(previous, next) {
	return previous + next;
}