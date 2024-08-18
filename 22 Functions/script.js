// Functions = A selection of reusable code.
//             Declared code once, use it whenever you want.
//             Call the function to execute its code.

function happyBirthday(username, age) {
    console.log(`Happy Birthaday to ${username}`);
    console.log(`You are ${age} years old!`);
}
happyBirthday("Spongebob", 30);
happyBirthday("Patrick", 37);


function add(x, y) {
    let result = x + y;
    return result;
}
let answer = add(2, 3);
console.log(answer);


function divition(x, y) {
    return x / y;
}
console.log(divition(6, 3));


function isEven(number) {
    return number % 2 === 0 ? `Yes, this is even` : `This is odd`;
}
console.log(isEven(6));
console.log(isEven(7));


function isValidEmail(email) {
    return email.includes("@") ? true : false;
}
console.log(isValidEmail("brocode@.com"));
console.log(isValidEmail("brocode.com"));


function isValidPassword(password) {
    return password.length > 6 ? true : false;
}
console.log(isValidPassword("abc123"));
console.log(isValidPassword("abc1234"))