// Math = built-in object that provides
//        a collection of properties and methods.

// console.log(Math.PI);
// console.log(Math.E);

let x = 3.21;
let y = 2;
let w = 1;
let z;

z = Math.round(x); // 3
z = Math.floor(x); // 3
z = Math.ceil(x); // 4
z = Math.trunc(x); // 3
z = Math.pow(x, y); // 9
z = Math.sqrt(x); // 3.21
z = Math.log(x); // 3.21
z = Math.sin(x); // 0.14
z = Math.cos(x); // -0.99
z = Math.tan(x); // -0.14
z = Math.abs(x); // 3.21
z = Math.sign(x); // 1
let max = Math.max(x, y, w); // 3
let min = Math.min(x, y, w); // 1

console.log(z);
console.log(max);