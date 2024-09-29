// = assignment operator
// == comparison operator (compare if values are equal)
// === strict equality operator (compare if values & datatypes are equal)
// != inequality operator
// !== strict inequality operator


const PI = 3.14;

if (PI == "3.14") {
    console.log("Values are same!"); // true
} else {
    console.log("Values are not same!"); // false
}

if (PI === "3.14") {
    console.log("Values & datatypes are same!"); // true
} else {
    console.log("Values & datatypes are not same!"); // false
}

if (PI != "3.14") {
    console.log("Values are not same!"); // true
} else {
    console.log("Values are same!"); // false
}

if (PI !== "3.14") {
    console.log("Values & datatypes are not same!"); // true
} else {
    console.log("Values & datatypes are same!"); // false
}