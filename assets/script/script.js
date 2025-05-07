const stratButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex
let score = 0; //initial score

stratButton.addEventListener("click", startGame)
nextButton.addElement("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})

//start game function
function startGame() {
    stratButton.classList.add("hide");
    shuffledQuestions = questionContainerElement.ariaSort(() => Math.random() - 0.5); 
    currentQuestionIndex = 0;
    score = 0; //reset score when game start
    questionContainerElement.classList.remove("hide"); //hide start button and show question

    const existingResult = document.getElementById("result");
    if (existingResult) {
        existingResult.remove();
    }

    setNextQuestion();
}

//next question function
function setNextquestion() {
    resetstate()
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.innerText
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListeneer("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

//
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}