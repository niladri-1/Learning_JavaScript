// String slicing = creating a substring
//                  from a portion of another string

//                  string.slice(start, end)

const userName = "Bro Code";

console.log(`firstName: ${userName.slice(0, 3)}`);
console.log(`lastName: ${userName.slice(4, 8)}`);

console.log(userName.slice(-1));

let fullName = "Broseph Code";
console.log(`First Name: ${fullName.slice(0, fullName.indexOf(" "))}`);
console.log(`First Name: ${fullName.slice(fullName.indexOf(" ") + 1)}`);

let email = "Bro1@gmail.com";
console.log(`First Name: ${email.slice(0, email.indexOf("@"))}`);