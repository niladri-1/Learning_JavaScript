// If statements = if a condition is true, execute some code
//                 if not, do somthing else
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age = 0;

mySubmit.onclick = function () {
    age = Number(myText.value);
    if (age > 18) {
        resultElement.textContent = `AGE: ${age}, Sutable.`;
    }

    else if (age == 18) {
        resultElement.textContent = `AGE: ${age}, Sutable.`;
    }
    
    else {
        resultElement.textContent = `AGE: ${age}, Not Sutable.`;
    }
}