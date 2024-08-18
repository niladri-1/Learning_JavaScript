// Number guessing game

const minNum = 1;
const maxNum = 5;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;


let attamts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`Guess the number between ${minNum} - ${maxNum}: `);
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert("Please enter a valid number");
    }

    else if (guess < minNum || guess > maxNum) {
        window.alert(`The number is between ${minNum} and ${maxNum}. Please try again.`);
    }

    else {
        attamts++;
        if (guess == answer) {
            window.alert(`Correct! You have guessed correctly in ${attamts} attemps`);
        }

        else if (guess > answer) {
            window.alert("Too high! try again!");
        }

        else if (guess < answer) {
            window.alert("Too low! Try ")
        }
    }
    running = false;
}