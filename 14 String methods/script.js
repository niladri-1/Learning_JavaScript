// string methods = allow you to manipulate and work with text (strings)

let userName = "Bro-Code";
let date = "15-08-1947";

console.log(userName.charAt(0)); //B
console.log(userName.indexOf("o")); //2
console.log(userName.lastIndexOf("o")); //5
console.log(userName.length); //8
console.log(userName.trim()); //Bro-Code
console.log(userName.toUpperCase()); //BRO-CODE
console.log(userName.toLowerCase()); //bro-code
console.log(userName.repeat(3)); //Bro-CodeBro-CodeBro-Code
console.log(userName.startsWith("b")); //true or false -> false
console.log(userName.endsWith("e")); //true or false -> true
console.log(userName.includes(" ")); //true or false -> false

console.log(date.replaceAll("-", "/")); // 15/08/1947
console.log(date.padStart(15, "0")); // 00000015-08-1947
console.log(date.padEnd(15, "0")); // 15-08-194700000