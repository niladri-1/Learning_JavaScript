// classList =  Element property in JavaScript used to interact
// 				with an element's list of classes (CSS classes)
// 				Allows you to make reusable classes for many elements
// 				across your webpages

// add()
// remove()
// toggle(Remove if present, Add if not)
// replace(oldClass, newClass)
// contains() // true/false

let buttons = document.querySelectorAll(".myBtns");

// ADD
buttons.forEach(button => {
	button.classList.add("enabled");
});

// REMOVE
buttons.forEach(button => {
	button.classList.remove("enabled");
});

// TOGGLE
buttons.forEach(button => {
	button.addEventListener("mouseover", event => {
		event.target.classList.toggle("hover");
	});

	button.addEventListener("mouseout", event => {
		event.target.classList.toggle("hover");
	});
});

// REPLACE & CONTAINS
buttons.forEach(button => {
	button.addEventListener("click", event => {
		if (event.target.classList.contains("disabled")) {
			event.target.textContent += "😡";
		} else {
			event.target.classList.replace("enabled", "disabled");
		}
	});
});