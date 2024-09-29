// arithmetic operators = operands (values, variables, ctc.)
//                        operators (+, -, *, /, %, **)
//                        ex. 11 = x + 5;

let student = 30;

// student = student + 1; // 31
// student = student - 1; // 30
// student = student * 1; // 30
// student = student / 1; // 30
// student = student % 1; // 30
// student = student ** 1; // 30

// student += 1; // 31
// student -= 1; // 30
// student *= 1; // 30
// student /= 1; // 30
// student %= 1; // 30
// student **= 1; // 30

// student++; // 31
// student--; // 30

console.log(student);


/*
	operator precedence
	1. parenthsis ()
	2. exponents
	3. multiplication & division & modulo
	4. addition & subtraction
*/

let result = 1 + 2 * 3 + 4 ** 2;

console.log(result); // 21
