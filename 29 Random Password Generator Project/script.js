// RANDOM PASSWORD GENERATOR PROJECT

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
	const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
	const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const numberChars = "0123456789";
	const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

	let allowedChars = "";
	let password = "";

	allowedChars += includeLowercase ? lowercaseChars : "";
	allowedChars += includeUppercase ? uppercaseChars : "";
	allowedChars += includeNumbers ? numberChars : "";
	allowedChars += includeSymbols ? symbolChars : "";

	if (length <= 0) {
		return `(password length must be at least 1)`;
	}

	if (allowedChars.length === 0) {
		return `(At least one set of character must be selected)`;
	}

	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * allowedChars.length);
		password += allowedChars.charAt(randomIndex);
	}

	return password;
}

document.getElementById("generate-btn").onclick = function () {
	const passwordLength = document.getElementById("passlength").value;
	const includeLowercase = true;
	const includeUppercase = true;
	const includeNumbers = true;
	const includeSymbols = true;

	const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
	document.getElementById("password").innerHTML = `Generated password: ${password}`;
	console.log(`Generated password: ${password}`);
};




// ---------------------------------------------------------------
// You can ignor the code below. It's just for the copy button.   |
// ---------------------------------------------------------------

function copyPassword() {
	const passwordText = document.getElementById("password").innerText.replace("Generated password: ", "");

	if (passwordText === "null") {
		document.getElementById("copy-btn").textContent = "Nothing to copy!";
		setTimeout(() => {
			document.getElementById("copy-btn").innerText = "Copy";
		}, 1000);
		return;
	}

	navigator.clipboard.writeText(passwordText)
		.then(() => {
			document.getElementById("copy-btn").innerText = "Copied!";
			setTimeout(() => {
				document.getElementById("copy-btn").innerText = "Copy";
			}, 1000);
		})

}