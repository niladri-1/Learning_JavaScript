// variable = A container that stores a value.
//            Behaves as if it were the value it containers.

// 1. declaration       let x;
// 2. assignment        x = 100;

// Number
let age = 25;
let price = 10.99;

console.log(typeof age); // number
console.log(`You are ${age} years old.`); // You are 25 years old.
console.log(`The price is $${price}`); // The price is $10.99

// String
let firstname = "Bro";
let email = "abc123@gmail.com";

console.log(typeof firstname); // string
console.log(`You name is ${firstname}`); // You name is Bro
console.log(`You like ${email}`); // You like abc123@gmail.com

// Booleans
let isOnline = true;
let isStudent = false;

console.log(typeof isOnline); // boolean
console.log(`Bro is online: ${isOnline}`); // Bro is online: true
console.log(`You are student: ${isStudent}`); // You are student: false


// Overall
let fullName = "Bro code";
let Age = 25;
let student = false;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${student}`;