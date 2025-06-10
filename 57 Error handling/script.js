// Error = An object that is created to represent a problem that occurs
// 		   Occur often with user input or establishing a connection


// try { } = Encloses code that might potentially casuse an error
// catch { } = Catch and handel any thrown Errors from try{ }
// finally { } = (optional) Always executes. Used mostly for clean up
// 				  ex. close files, close connections, release resources

try {
	const divident = Number(window.prompt('Enter a divident?'));
	const divisor = Number(window.prompt('Enter a divisor?'));

	if (divisor == 0) {
		throw new Error("You can't divide by zero!");
	}

	if (isNaN(divident) || isNaN(divisor)) {
		throw new Error("value should be a number");
	}

	const result = divident / divisor;
	console.log(result);
} catch (error) {
	console.error(error);
}

console.log('You reached at end!');