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

];

const qEl = document.getElementById("question");
const aEl = document.getElementById("Answer");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0, score = 0;

function startQuiz() {
    currentIndex = 0; score = 0;
    nextBtn.textContent = "Next";
    showQuestion();
}

function showQuestion() {
    qEl.textContent = `${currentIndex + 1}. ${questions[currentIndex].question}`;
    aEl.innerHTML = "";
    nextBtn.style.display = "none";

    questions[currentIndex].answers.forEach(({ text, correct }) => {
        const btn = document.createElement("button");
        btn.textContent = text;
        btn.classList.add("btn");
        btn.dataset.correct = correct;
        btn.onclick = selectAnswer;
        aEl.appendChild(btn);
    });
}

function selectAnswer(e) {
    const correct = e.target.dataset.correct === "true";
    if (correct) score++;

    [...aEl.children].forEach(btn => {
        btn.disabled = true;
        if (btn.dataset.correct === "true") btn.classList.add("correct");
        else if (btn === e.target) btn.classList.add("incorrect");
    });

    nextBtn.style.display = "inline-block";
}

function showScore() {
    qEl.textContent = `You scored ${score} out of ${questions.length}`;
    aEl.innerHTML = "";
    let per = score * 100 / questions.length;
    if (per > 60) {
        nextBtn.textContent = `Congratulation you get ${per}%`;
    } else {
        nextBtn.textContent = `You Failed ${per}%`;
    }
    nextBtn.style.display = "inline-block";
}

nextBtn.onclick = () => {
    currentIndex++;
    if (currentIndex < questions.length) showQuestion();
    else showScore();
};

startQuiz();
