// Async/Await = Async = makes a function return a promise
//				 Await = makes an async function wait for a promise

// 				Allows you write asynchronous code in synchronous manner
// 				Async doesn't have resolve or reject parameters
// 				Everything after Await is placed in an event queue


function walkDog() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const dogWalked = false;
			if (dogWalked) {
				resolve("You walk the dog 🐕");
			} else {
				reject("🐕 You didn't walk the dog!!");
			}
		}, 1500);
	});
}

function cleanKitchen() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const kitchenClened = true;
			if (kitchenClened) {
				resolve("You clean the kitchen 🧹");
			} else {
				reject("🧹 You didn't clean the kitchen!!");
			}
		}, 2500);
	});
}

function takeOutTrash() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const isOutTrash = true;
			if (isOutTrash) {
				resolve("You take out the trash 🗑️");
			} else {
				reject("🗑️ You didn't take out the trash!!");
			}
		}, 1800);
	});
}

async function doChores() {
	try {
		const walkDogResult = await walkDog();
		console.log(walkDogResult);

		const cleanKitchenResult = await cleanKitchen();
		console.log(cleanKitchenResult);

		const takeOutTrashResult = await takeOutTrash();
		console.log(takeOutTrashResult);

		console.log("You finished all tasks!");
	}
	catch (error) {
		console.error(error);
	}
}


doChores();