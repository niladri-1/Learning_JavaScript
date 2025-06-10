// Error = An object that is created to represent a problem that occurs
// 		   Occur often with user input or establishing a connection


// try { } = Encloses code that might potentially casuse an error
// catch { } = Catch and handel any thrown Errors from try{ }
// finally { } = (optional) Always executes. Used mostly for clean up
// 				  ex. close files, close connections, release resources


try {
	console.log(x);
	// NETWORK ISSUE
	// PROMISE REJECTION
	// SECURITY ERRORS
}
catch (error) {
	console.log(error); //ReferenceError: x is not defined
}
finally{
	// CLOSE FILES
	// CLOSE CONNECTIONS
	// RELEASE RESOURCE
	console.log('This always execute');
}
console.log('You reach to end!');
/*
ReferenceError: x is not defiened
This always execute
You reach to end!
*/



try {
	console.log('start');
	// NETWORK ISSUE
	// PROMISE REJECTION
	// SECURITY ERRORS
}
catch (error) {
	console.log(error); //ReferenceError: x is not defined
}
finally{
	// CLOSE FILES
	// CLOSE CONNECTIONS
	// RELEASE RESOURCE
	console.log('This always execute');
}
console.log('You reach to end!');

/*
start
This always execute
You reach to end!
*/