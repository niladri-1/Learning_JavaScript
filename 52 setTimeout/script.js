// setTimeout() = 	function in javascript that allows you to schedule
//					the execution of a function after an amount of time (milliseconds)
// 					Times are approximate
// 					(excution time may vary based on the workload of the javascript runtime env.)

let timeoutId;

function startTimer() {
	console.log('START');
	timeoutId = setTimeout(() => {
		window.alert('Hello');
		console.log('TIME OUT');
	}, 3000);
}

function clearTimer(){
	clearTimeout(timeoutId);
	console.log('CLEARED');
}