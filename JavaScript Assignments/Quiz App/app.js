const questions = [
    {
        question: "Which keyword is used to declare a constant in JavaScript?",
        answers: [
            { text: "let", correct: false },
            { text: "var", correct: false },
            { text: "const", correct: true },
            { text: "constant", correct: false }
        ]
    },
    {
        question: "Which method is used to add an element to the end of an array?",
        answers: [
            { text: "push()", correct: true },
            { text: "pop()", correct: false },
            { text: "shift()", correct: false },
            { text: "unshift()", correct: false }
        ]
    },
    {
        question: "What does `===` check in JavaScript?",
        answers: [
            { text: "Value only", correct: false },
            { text: "Type only", correct: false },
            { text: "Both value and type", correct: true },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "What will `typeof null` return in JavaScript?",
        answers: [
            { text: "'null'", correct: false },
            { text: "'object'", correct: true },
            { text: "'undefined'", correct: false },
            { text: "'boolean'", correct: false }
        ]
    },
    {
        question: "Which method converts a JavaScript object to a JSON string?",
        answers: [
            { text: "JSON.stringify()", correct: true },
            { text: "JSON.parse()", correct: false },
            { text: "JSON.convert()", correct: false },
            { text: "JSON.toText()", correct: false }
        ]
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answers: [
            { text: "==", correct: false },
            { text: "=", correct: true },
            { text: "===", correct: false },
            { text: "=>", correct: false }
        ]
    },
    {
        question: "Which of these is a correct way to define a function in JavaScript?",
        answers: [
            { text: "function myFunc()", correct: true },
            { text: "def myFunc()", correct: false },
            { text: "func myFunc()", correct: false },
            { text: "void myFunc()", correct: false }
        ]
    },
    {
        question: "What will `Array.isArray([])` return?",
        answers: [
            { text: "false", correct: false },
            { text: "undefined", correct: false },
            { text: "true", correct: true },
            { text: "null", correct: false }
        ]
    },
    {
        question: "What is a correct syntax for an arrow function?",
        answers: [
            { text: "function => {}", correct: false },
            { text: "() => {}", correct: true },
            { text: "() -> {}", correct: false },
            { text: "{} <= ()", correct: false }
        ]
    },
    {
        question: "What is the result of `2 + '2'` in JavaScript?",
        answers: [
            { text: "4", correct: false },
            { text: "'22'", correct: true },
            { text: "NaN", correct: false },
            { text: "undefined", correct: false }
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("Answer");
const nextButton = document.getElementById("next-btn");


let CurrentQuestionIndex = 0;
let score = 0;
function StartQuiz() {
    CurrentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}

function showQuestion() {
    resetState();
    let CurrentQuestion = questions[CurrentQuestionIndex];
    let questionNo = CurrentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + CurrentQuestion.question;

    CurrentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn")
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", SelectAnswer)
    });
}

function resetState() {
    nextButton.style.display = "none"
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)
    }
}

function SelectAnswer(e) {
    const Selectbtn = e.target;
    const isCorrect = Selectbtn.dataset.correct === "true";

    if (isCorrect) {
        Selectbtn.classList.add("correct");
        score++;
    } else {
        Selectbtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    CurrentQuestionIndex++;
    if (CurrentQuestionIndex < questions.length) {
        showQuestion()
    } else {
        showScore()
    }
}


nextButton.addEventListener("click", () => {
    if (CurrentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        StartQuiz()
    }
})

StartQuiz();