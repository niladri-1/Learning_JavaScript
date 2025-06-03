// Logical operators = used to combine or manipulate boolean values
//                     (true or false)

//                      AND = &&
//                      OR = ||
//                      NOT = !

const temp = 30;

// AND
if (temp > 0 && temp <= 30) {
	console.log("Weather is Good!"); // true
}
else {
	console.log("The weather is BAD!"); // false
}

// OR
if (temp <= 0 || temp > 30) {
	console.log("Weather is BAD!"); // true
}
else {
	console.log("Weather is Good!"); // false
}

// NOT
const isSunny = false;

if (!isSunny) {
	console.log("It's not Sunny"); // true
} else {
	console.log("It's Sunny"); // false
}