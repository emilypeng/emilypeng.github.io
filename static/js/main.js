const quizData = [
    {
        question: "What should you do if you get tired while snorkeling?",
        options: ["Tread water rapidly", "Step on the sand", "Hold onto a float or float on your back", "Sit down on the coral gently"],
        answer: 2
    },
    {
        question: "What is the best way to avoid sunburns and skin damage when snorkeling?",
        options: ["Wearing chemical sunscreen", "Wearing mineral sunscreen", "Wearing UPF clothing", "Letting the sun tan your skin"],
        answer: 2
    },
    {
        question: "You see a really cool fish up ahead of you. What should you do?",
        options: ["Observe or swim gently towards it", "Swim quickly towards it", "Reach out to touch it", "Offer it some food"],
        answer: 0
    },
    {
        question: "What is the best way to swim when snorkeling?",
        options: ["Using arms only", "Using legs only", "Crawl stroke", "Butterfly stroke"],
        answer: 1
    }, 
    {
        question: "Which of the following is NOT dangerous to the reef?",
        options: ["Stepping on coral", "Stirring up sediment", "Wearing gloves", "Wearing a life jacket"],
        answer: 3
    },
    {
        question: "Why should we take precautions to protect the reef when snorkeling?",
        options: ["Showing your friends how much you care about the ocean", "Supporting an ecosystem that supports many animals and people", "Avoiding fines or jail time for touching the coral."],
        answer: 1
    },
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const quizContainer = document.getElementById('quiz');
    const q = quizData[currentQuestion];
    quizContainer.innerHTML = `
        <h2 class="quiz-heading">${q.question}</h2>
        <ul>
            ${q.options.map((opt, i) => `<li><button class="quiz-btn" onclick="selectAnswer(${i})">${opt}</button></li>`).join('')}
        </ul>
        <b id="feedback"></b>
    `;
}

function selectAnswer(selected) {
    const q = quizData[currentQuestion];
    const feedback = document.getElementById('feedback');
    if (selected === q.answer) {
        score++;
        feedback.textContent = "Correct!";
    } else {
        feedback.textContent = "Incorrect!";
    }
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 1000);
}

function showResults() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = `
        <h2 class="quiz-heading">Quiz Complete!</h2>
        <p id="quiz-score">Your score: ${score} / ${quizData.length}</p>
        <p id="feedback">Thanks for playing!</p>
        <button onclick="restartQuiz()">Restart</button>
    `;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

function showStartScreen() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = `
        <h2 class="quiz-heading">reef responsibility quiz!</h2>
        <p id="txt">Test your knowledge about reef safety and responsible snorkeling.</p>
        <button class="quiz-btn" onclick="startQuiz()">Start Quiz</button>
    `;
}

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

// Update window.onload to show the start screen
window.onload = showStartScreen;