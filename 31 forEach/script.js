// forEach() = 	methods used to iterate over the elements
// 				of an array and apply a specified function (callback)
// 				to each element

// 				array.forEach(callback)
// 				element, index, array are provided

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(double);
numbers.forEach(display);

function double(items, index, array) {
	array[index] = items * 2;
}

function display(items) {
	console.log(items);
}

