//DOM Elements
const startScreenEl = document.querySelector("#start-screen");
const timeEl = document.querySelector("#time");
const mainEl = document.querySelector("#main");
const messageEl = document.querySelector("#message");
const quizEl = document.querySelector("#quiz");

let timer;
let score = 0;
let questionIndex = 0;
let timeInterval;

function endGame() {
    //calculate final score
        //current score + time left
    //display score
    //display form and sumbit button for initials
    //save score and initials
    //display start over button
}

//evaluate answer
function checkAnswer(event) {
    const chosenAnswer = event.target.dataset.answer;
    //If correct - display "correct" message
    if (chosenAnswer == quizQuestions[questionIndex].answer) {
        score ++;
        messageEl.textContent = "Correct!";
        messageEl.classList.add("green");
    }
    //If incorret:
    else {
        //subtract 5 seconds from timer
        timer -= 5;
        //display "wrong" message 
        messageEl.textContent = "Incorrect!";
        messageEl.classList.add("red");
    }
        
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

function startTimer() {
    
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



