// Functions = A selection of reusable code.
//             Declared code once, use it whenever you want.
//             Call the function to execute its code.

function happyBirthday(username, age) {
    console.log(`Happy Birthaday to ${username}`);
    console.log(`You are ${age} years old!`);
}
happyBirthday("Spongebob", 30); // Happy Birthaday to spongebob | You are 30 years old!
happyBirthday("Patrick", 37); // Happy Birthaday to Patrick | You are 37 years old!


function add(x, y) {
    let result = x + y;
    return result;
}
let answer = add(2, 3);
console.log(answer); // 5


function divition(x, y) {
    return x / y;
}
console.log(divition(6, 3)); // 2


function isEven(number) {
    return number % 2 === 0 ? `Yes, this is even` : `This is odd`;
}
console.log(isEven(7)); // Yes, this is even
console.log(isEven(6)); // This is odd


function isValidEmail(email) {
    return email.includes("@") ? true : false;
}
console.log(isValidEmail("brocode@.com")); // false
console.log(isValidEmail("brocode.com")); // false


function isValidPassword(password) {
    return password.length > 6 ? true : false;
}
console.log(isValidPassword("abc123")); // true
console.log(isValidPassword("abc1234")) // false