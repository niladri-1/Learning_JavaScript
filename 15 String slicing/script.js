// String slicing = creating a substring
//                  from a portion of another string

//                  string.slice(start, end)

const userName = "Bro Code";

console.log(`firstName: ${userName.slice(0, 3)}`); // Bro
console.log(`lastName: ${userName.slice(4, 8)}`); // Code

console.log(userName.slice(-1)); // d


let fullName = "Broseph Code";
console.log(`First Name: ${fullName.slice(0, fullName.indexOf(" "))}`); // First Name: Bro
console.log(`First Name: ${fullName.slice(fullName.indexOf(" ") + 1)}`); // Last Name: Code

let email = "Bro1@gmail.com";
console.log(`First Name: ${email.slice(0, email.indexOf("@"))}`); // First Name: Bro1
console.log(`Last Name: ${email.slice(email.indexOf("@") + 1)}`); // Last Name: gmail.com