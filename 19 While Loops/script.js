// while loop = repeat some code WHILE some condition is true


// Test case 1
let userName;
while (userName === "" || userName === null) {
    userName = window.prompt(`Enter your name`);
}

document.getElementById("myId").textContent = `Hello, ${userName}`



// Test case 2
let loggedIn = false;

while (!loggedIn) {
    let username = window.prompt(`Enter your username`);
    let password = window.prompt(`Enter your password`);

    if (username === "myAdmin" && password === "myPassword") {
        loggedIn = true;
        document.getElementById("myId").textContent = `Hello ${username}, you are logged in.`;
    }
    else {
        console.log(`Login failed. Try again!`);
    }
}