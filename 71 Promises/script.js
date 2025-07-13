// Promise = An object that manages asynchronous operations.
// 			  Wrap a Promise Object around {asynchronous code}
// 			  "I promise to return a value"
// 			  PENDING -> RESOLVED or REJECTED
// 			  new Promise((resolve, reject) => {asynchronous code})

// DO THESE CHORES IN ORDER:

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TACK OUT THE TRASH

function walkDog() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const dogWalked = true;
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
			const isOutTrash = false;
			if (isOutTrash) {
				resolve("You take out the trash 🗑️");
			} else {
				reject("🗑️ You didn't take out the trash!!");
			}
		}, 1800);
	});
}


walkDog().then(value => { console.log(value); return cleanKitchen() })
	.then(value => { console.log(value); return takeOutTrash() })
	.then(value => { console.log(value); console.log("You finished all task!"); })
	.catch(error => console.error(error));