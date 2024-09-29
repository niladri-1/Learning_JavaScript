// Variable scope = where a variable is recognized
//                  and accessible (local vs global).

let x = 10; // global variable

function function1() {
	x = 20; // local variable
	console.log(x); // 20
}

function function2() {
	console.log(x); // 10
}

function1(); // 20
function2(); // 10