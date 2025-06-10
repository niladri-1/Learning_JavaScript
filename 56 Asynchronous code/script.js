// synchronous = executes line by line consecutively in a sequential manner
//				Code that waits for an operation to complete

// asynchronous = allows multiple operations to be performed concurrently without wating
// 					Doesn't block the execution flow and allows the program to continue
// 					(I/O operation, network requests, fetching data)
// 					Handled with: Callbacks, Promises, Async/Awit


func1(func2);

function func1(callback) {
	setTimeout(() => {
		console.log("Task 1");
		callback();
	}, 3000);
}

function func2() {
	console.log("Task 2");
	console.log("Task 3");
	console.log("Task 4");
}