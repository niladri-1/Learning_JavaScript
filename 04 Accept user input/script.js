// How to accept user input

// 1. EASY WAY = window promt
// 2. PROFESSIONAL WAY = HTML textbox

// // 1. EASY WAY = window promt
// let userName = window.prompt("What's Your username?");
// console.log(`Your name is ${userName}`);

// // 2. PROFESSIONAL WAY = HTML textbox
let userName;

document.getElementById("mySubmit").onclick = function(){
    userName = document.getElementById("mytext").value;
    document.getElementById("myh1").textContent = `Wellcome, ${userName}`;
}