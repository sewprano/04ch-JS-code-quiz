//DOM Elements
const startScreenEl = document.querySelector("#start-screen");
const timeEl = document.querySelector("#time");
const mainEl = document.querySelector("#main")

let timer = 0;
let score = 0;
let questionIndex = 0;

function startTimer() {
    
}
function displayQuestions() {
    //display question 
    //display answer buttons
}

//evaluate answer
function checkAnswer() {
    //If correct - display "correct" message
    //If incorret:
        //display "wrong" message 
        //subtract 5 seconds from timer
}

//when start button pressed: start game
function startGame() {
    //hide start screen
    startScreenEl.classList.add("hide");
    //Start the timer
    startTimer();
    //display each question and it's answer buttons
    displayQuestions();
}

function endGame() {
    //hide questions
    //calculate final score
        //current score + time left
    //display score
    //present form and sumbit button for initials
    //display start over button
}

//event listener for button clicks
mainEl.addEventListener("click"), (event) => {
    //if start button clicked
    if (event.target.classList.contains("start")) {
        startGame();
    }

    //if answer button clicked
    if (event.target.classList.contains("answer")) {
        checkAnswer(event);
        questionIndex ++;

        //has the last question been reached?
        if (questionIndex == quizQuestions.length) {
            
        }
    }

}



