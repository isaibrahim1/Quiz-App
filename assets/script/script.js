//jshint esversion: 6
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

//add a new question couter
const questionCountElement = document.createElement("div");
questionCountElement.id = "question-count";
questionCountElement.style.marginBottom = "10px";
questionCountElement.style.fontSize = "16px";
questionContainerElement.insertBefore(questionCountElement, questionElement);

let shuffledQuestions, currentQuestionIndex;//shuffled question
let score = 0; //initial score 

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion(); //setnext question
});

//get total number of questions
function getQuestionCount() {
    return questions.length;
}

//display current question number annd totla question number
function displayQuestionCount() {
    if (questionCountElement) {
        questionCountElement.textContent = `Question ${currentQuestionIndex + 1} of ${getQuestionCount()}`;
        // console.log(`Question Count Updated: Question ${currentQuestionIndex + 1} of ${getQuestionCount()}`);
    }
}
//start game function
function startGame() {
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - 0.5); 
    currentQuestionIndex = 0;
    score = 0; //reset score when game start
    questionContainerElement.classList.remove("hide"); //hide start button and show

    const existingResult = document.getElementById("result");
    if (existingResult) {
        existingResult.remove();
    }

     //display question count
    displayQuestionCount();
    setNextQuestion();
   
}

//next question function
function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    displayQuestionCount(); //update question count
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}


function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

//answer function
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });

    if (correct) {
        score++; //increase score if answer correct
    }

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide");

    } else {
        startButton.innerText = "Play Again";
        startButton.classList.remove("hide");
        showResult(); //show result
    }
}

function showResult() {
    questionContainerElement.classList.add("hide");

    const existingResult = document.getElementById("result");
    if (existingResult) {
        existingResult.remove();
    }

    //create and style result
    const resultElement = document.createElement("div");
    resultElement.id = "result";
    resultElement.innerText = `Your score: ${score} / ${questions.length}`;
    resultElement.style.marginBottom = "10px";
    resultElement.style.fontSize = "18px";

    startButton.parentNode.insertBefore(resultElement, startButton);

   
}


//set status correct and wrong function
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }

  
}
function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

//question 
const questions = [
    {
        question: " What keyword is used to declare a variable in JavaScript??",
        answers: [
            { text: "string", correct: false },
            { text: "boolean", correct: false },
            { text: "var", correct: true },
            { text: "function", correct: false }
        ]
    },
    {
        question: " Which of the following is NOT a primitive data type in JavaScript?",
        answers: [
            { text: "number", correct: false },
            { text: "object", correct: true },
            { text: "string", correct: false },
            { text: "boolean", correct: false }
        ]
    },
    {
        "question": " What is the output of the following JavaScript code?\n\n```javascript\nlet x = 5;\nconsole.log(x++);\n```",
        "answers": [
            { "text": "5", "correct": true },
            { "text": "6", "correct": false },
            { "text": "undefined", "correct": false },
            { "text": "Error", "correct": false }
        ]
    },
    {
        "question": " Which of the following is the correct way to declare a constant in JavaScript?",
        "answers": [
            { "text": "variable PI = 3.14;", "correct": false },
            { "text": "const PI = 3.14;", "correct": true },
            { "text": "let PI = 3.14;", "correct": false },
            { "text": "final PI = 3.14;", "correct": false }
        ]
    },
    {
        "question": " What does the 'typeof' operator in JavaScript return for an array?",
        "answers": [
            { "text": "array", "correct": false },
            { "text": "object", "correct": true },
            { "text": "Array", "correct": false },
            { "text": "list", "correct": false }
        ]
    },
    {
        "question": " Which of the following array methods adds new elements to the end of an array and returns the new length of the array?",
        "answers": [
            { "text": "push()", "correct": true },
            { "text": "pop()", "correct": false },
            { "text": "shift()", "correct": false },
            { "text": "unshift()", "correct": false }
        ]
    }, 
    {
        "question": " What will be the value of 'y' after the following JavaScript code is executed?\n\n```javascript\nlet x = 10;\nlet y = x === '10';\n```",
        "answers": [
            { "text": "10", "correct": false },
            { "text": "\"10\"", "correct": false },
            { "text": "true", "correct": false },
            { "text": "false", "correct": true }
        ]
    }
];