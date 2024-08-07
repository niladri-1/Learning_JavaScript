// string methods = allow you to manipulate and work with text (strings)

let userName = "Bro-Code";
let phoneNumber = "15-08-1947";

console.log(userName.charAt(0));
console.log(userName.indexOf("o"));
console.log(userName.length);
console.log(userName.trim());
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
console.log(userName.repeat(3));
console.log(userName.startsWith("b")); //true or false
console.log(userName.endsWith("e")); //true or false

console.log(phoneNumber.replaceAll("-", "/"));
console.log(phoneNumber.padStart(15, "0"));
console.log(phoneNumber.padEnd(15, "0"));
