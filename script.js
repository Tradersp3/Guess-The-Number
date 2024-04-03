'use strict';

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct number!";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random()*20) + 1;
console.log(secretNumber);
let highscore = 0;
let score = 20;

const displayMessage = function(message) {
    document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function(){

    const guess = Number(document.querySelector(".guess").value);

    // When no input
    if(!guess) {
        // document.querySelector(".message").textContent = "🚫 No number!";
        displayMessage("🚫 No number!");

    // Correct guess
    } else if(guess === secretNumber) {
        displayMessage("🥳 Correct Number!");
        if (score > highscore) {document.querySelector(".highscore").textContent = score;};
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
    
    // Guess is wrong
    } else if(guess !== secretNumber) {
        if(score > 1) {
            displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            displayMessage("🚫 Game Over...");
            document.querySelector(".score").textContent = "0";
        }

    }
    // // Too low
    // } else if(guess < secretNumber) {
    //     score --;
    //     if(score < 1) {
    //         document.querySelector(".message").textContent = "🏴‍☠️ Game Over...";
    //         document.querySelector(".score").textContent = score;
    //         } else {
    //         document.querySelector(".message").textContent = "📉 Too low!";
    //         document.querySelector(".score").textContent = score;
    //     }
    // } else if(guess > secretNumber) {
    //     score --;
    //     if(score < 1) {
    //         document.querySelector(".message").textContent = "🏴‍☠️ Game Over...";
    //         document.querySelector(".score").textContent = score;
    //         } else {
    //         document.querySelector(".message").textContent = "📈 Too high!";
    //         document.querySelector(".score").textContent = score;
    //     }
    // }
});

document.querySelector(".again").addEventListener("click", function() {
    score = 20;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = "20";
    secretNumber = Math.trunc(Math.random()*20) + 1;
    console.log(secretNumber);
});