const fruits = [
	{ name: "Apple", color: "red", calories: 95 },
	{ name: "Orange", color: "orange", calories: 45 },
	{ name: "Banana", color: "yellow", calories: 105 },
	{ name: "Coconut", color: "white", calories: 159 },
	{ name: "Pineapple", color: "yellow", calories: 37 },
]

console.log(fruits[0].name, fruits[0].color, fruits[0].calories); //Apple red 95
console.log(fruits[2].name, fruits[2].color, fruits[2].calories); //Banana yellow 105

fruits.push({ name: "Graphes", color: "perple", calories: 62 });
console.log(fruits);
/* [
  { name: 'Apple', color: 'red', calories: 95 },
  { name: 'Orange', color: 'orange', calories: 45 },
  { name: 'Banana', color: 'yellow', calories: 105 },
  { name: 'Coconut', color: 'white', calories: 159 },
  { name: 'Pineapple', color: 'yellow', calories: 37 },
  { name: 'Graphes', color: 'perple', calories: 62 }
]*/

fruits.pop();
console.log(fruits);
/*[
  { name: 'Apple', color: 'red', calories: 95 },
  { name: 'Orange', color: 'orange', calories: 45 },
  { name: 'Banana', color: 'yellow', calories: 105 },
  { name: 'Coconut', color: 'white', calories: 159 },
  { name: 'Pineapple', color: 'yellow', calories: 37 }
]*/

fruits.splice(1, 2); // after index 1 remove 2 elements (index 1, 2 are removed)
console.log(fruits);
/*[
  { name: 'Apple', color: 'red', calories: 95 },
  { name: 'Coconut', color: 'white', calories: 159 },
  { name: 'Pineapple', color: 'yellow', calories: 37 }
]*/

// --- forEach() ---
fruits.forEach((element) => {
	console.log(element.name); //Apple Orange Banana Coconut Pineapple
	console.log(element.color); //red orange yellow white yellow
	console.log(element.calories); //95 45 105 159 37
});

// --- map() ---
fruits.map((element) => {
	console.log(element.name); //Apple Orange Banana Coconut Pineapple
	console.log(element.color); //red orange yellow white yellow
	console.log(element.calories); //95 45 105 159 37
});

// --- filter() ---
fruits.filter((element) => {
	element.color.includes("yellow") ? `${element.name}:${element.color}` : null;
});
/*Banana:yellow
Pineapple:yellow*/

// --- reduce() ---
const maxCalories = fruits.reduce((max, fruit) => {
	return fruit.calories > max.calories ? fruit : max;
});
console.log(`${maxCalories.name}:${maxCalories.calories}`); //Coconut:159