// variable = A container that stores a value.
//            Behaves as if it were the value it containers.

// 1. declaration       let x;
// 2. assignment        x = 100;

// Number
let age = 25;
let price = 10.99;

console.log(typeof age);
console.log(`You are ${age} years old.`);
console.log(`The price is $${price}`);

// String
let firstname = "Bro";
let email = "abc123@gmail.com";

console.log(typeof firstname);
console.log(`You name is ${firstname}`);
console.log(`You like ${email}`);

// Booleans
let isOnline = true;
let isStudent = false;

console.log(typeof isOnline);
console.log(`Bro is online: ${isOnline}`);
console.log(`You are student: ${isStudent}`);


// Overall
let fullName = "Bro code";
let Age = 25;
let student = false;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${student}`;