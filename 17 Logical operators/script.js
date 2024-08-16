// Logical operators = used to combine or manipulate boolean values
//                     (true or false)

//                      AND = &&
//                      OR = ||
//                      NOT = !

const temp = 30;

// AND
if (temp > 0 && temp <= 30) {
    console.log("Weather is Good!");
}
else {
    console.log("The weather is BAD!");
}

// OR
if (temp <= 0 || temp > 30) {
    console.log("Weather is BAD!");
}
else {
    console.log("Weather is Good!");
}

// NOT
const isSunny = false;

if (isSunny) {
    console.log("It's Sunny");
} else {
    console.log("It's not Sunny");
}