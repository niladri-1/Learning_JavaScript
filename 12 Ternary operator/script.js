// Ternary operator = a shortcut to if{} and else{} statements
//                    helps to assign a variabele based on a condition
//                    condition ? codeIfTrue : codeIfFalse;


let age = 18;
let message1 = age >= 18 ? "You're an adult" : "You're a minor";
console.log(message1); // You're an adult

let isStudent = true;
let message2 = isStudent ? "You are a student" : "You are not a student";
console.log(message2); // You are a student

let amout = 120;
let discount = amout >= 100 ? 10 : 0;
console.log(`Your total is $ ${amout - amout * (discount / 100)}`); // Your total is $ 120