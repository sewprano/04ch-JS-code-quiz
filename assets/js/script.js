//DOM Elements
const startScreenEl = document.querySelector("#start-screen");
const timeEl = document.querySelector("#time");
const mainEl = document.querySelector("#main");
const quizEl = document.querySelector("#quiz");

let timer;
let score = 0;
let questionIndex = 0;
let timeInterval;

function startTimer() {
}

function displayQuestions() {
    //display question & display answer buttons
    quizEl.innerHTML = `
    <h3>${quizQuestions[questionIndex].question}</h3>
    <button data-answer="a" class="answer">${quizQuestions[questionIndex].answerOptions.a}</button>
    <button data-answer="b" class="answer">${quizQuestions[questionIndex].answerOptions.b}</button>
    <button data-answer="c" class="answer">${quizQuestions[questionIndex].answerOptions.c}</button>
    <button data-answer="d" class="answer">${quizQuestions[questionIndex].answerOptions.d}</button>
    `;
    
    //ERROR CHECKING:
    // const test = document.createElement("<p>");
    // test.innerHTML = "test";
    // quizEl.append(test);
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
    //calculate final score
        //current score + time left
    //display score
    //display form and sumbit button for initials
    //save score and initials
    //display start over button
}

//event listener for button clicks
mainEl.addEventListener("click", (event) => {
    // console.log(event.target);
    //if start button clicked
    if (event.target.classList.contains("start")) {
        startGame();
    }

    //if answer button clicked
    if (event.target.classList.contains("answer")) {
        checkAnswer(event);
        questionIndex++;

        //has the last question been reached?
        if (questionIndex == quizQuestions.length) {
            //end timer
            clearInterval(timeInterval);
            //hide quiz
            quizEl.classList.add("hide")
            //end game
            endGame();
        } 
        else {
            displayQuestions();
        }
    }

})



