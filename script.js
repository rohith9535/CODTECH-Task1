const allQuestions = [
  {
    question: "Which CSS property is used to create rounded corners?",
    answers: [
      { text: "border-radius", correct: true },
      { text: "corner-radius", correct: false },
      { text: "radius", correct: false },
      { text: "curve", correct: false }
    ]
  },
  {
    question: "Which JavaScript method is used to convert an object to JSON text?",
    answers: [
      { text: "JSON.stringify()", correct: true },
      { text: "JSON.parse()", correct: false },
      { text: "JSON.objectify()", correct: false },
      { text: "JSON.serialize()", correct: false }
    ]
  },
  {
    question: "In CSS Grid, which property defines the number of columns?",
    answers: [
      { text: "grid-template-columns", correct: true },
      { text: "grid-columns", correct: false },
      { text: "column-layout", correct: false },
      { text: "template-columns", correct: false }
    ]
  },
  {
    question: "Which HTML tag is best for displaying standalone media with a caption?",
    answers: [
      { text: "<figure>", correct: true },
      { text: "<caption>", correct: false },
      { text: "<media>", correct: false },
      { text: "<content>", correct: false }
    ]
  },
  {
    question: "Which keyword prevents reassignment after a variable is declared?",
    answers: [
      { text: "const", correct: true },
      { text: "let", correct: false },
      { text: "var", correct: false },
      { text: "fixed", correct: false }
    ]
  },
  {
    question: "Which CSS unit is relative to the viewport width?",
    answers: [
      { text: "vw", correct: true },
      { text: "vh", correct: false },
      { text: "rem", correct: false },
      { text: "%", correct: false }
    ]
  },
  {
    question: "Which JavaScript array method returns the first element that matches a condition?",
    answers: [
      { text: "find()", correct: true },
      { text: "filter()", correct: false },
      { text: "map()", correct: false },
      { text: "reduce()", correct: false }
    ]
  },
  {
    question: "What does API stand for?",
    answers: [
      { text: "Application Programming Interface", correct: true },
      { text: "Applied Program Internet", correct: false },
      { text: "Advanced Protocol Input", correct: false },
      { text: "Application Process Integration", correct: false }
    ]
  },
  {
    question: "Which CSS value makes an element a flex container?",
    answers: [
      { text: "display: flex", correct: true },
      { text: "position: flex", correct: false },
      { text: "flex: container", correct: false },
      { text: "layout: flex", correct: false }
    ]
  },
  {
    question: "Which HTTP status code means 'Created'?",
    answers: [
      { text: "201", correct: true },
      { text: "200", correct: false },
      { text: "301", correct: false },
      { text: "404", correct: false }
    ]
  },
  {
    question: "Which method removes the last element from an array?",
    answers: [
      { text: "pop()", correct: true },
      { text: "push()", correct: false },
      { text: "shift()", correct: false },
      { text: "slice()", correct: false }
    ]
  },
  {
    question: "Which HTML attribute is required for accessibility on images?",
    answers: [
      { text: "alt", correct: true },
      { text: "title", correct: false },
      { text: "name", correct: false },
      { text: "aria", correct: false }
    ]
  },
  {
    question: "Which CSS property controls the distance between grid rows?",
    answers: [
      { text: "row-gap", correct: true },
      { text: "grid-gap-row", correct: false },
      { text: "gap-y", correct: false },
      { text: "row-space", correct: false }
    ]
  },
  {
    question: "Which JavaScript event runs when the page is fully loaded?",
    answers: [
      { text: "DOMContentLoaded", correct: true },
      { text: "onready", correct: false },
      { text: "loadPage", correct: false },
      { text: "documentReady", correct: false }
    ]
  },
  {
    question: "What is the default HTTP method for submitting a simple URL request in a browser?",
    answers: [
      { text: "GET", correct: true },
      { text: "POST", correct: false },
      { text: "PATCH", correct: false },
      { text: "DELETE", correct: false }
    ]
  },
  {
    question: "Which CSS property changes the thickness of text?",
    answers: [
      { text: "font-weight", correct: true },
      { text: "font-style", correct: false },
      { text: "text-size", correct: false },
      { text: "line-height", correct: false }
    ]
  },
  {
    question: "Which JavaScript operator checks both value and type equality?",
    answers: [
      { text: "===", correct: true },
      { text: "==", correct: false },
      { text: "=", correct: false },
      { text: "!=", correct: false }
    ]
  },
  {
    question: "Which HTML element is semantically best for the main content area?",
    answers: [
      { text: "<main>", correct: true },
      { text: "<content>", correct: false },
      { text: "<section>", correct: false },
      { text: "<body>", correct: false }
    ]
  },
  {
    question: "Which CSS property sets the stacking order of positioned elements?",
    answers: [
      { text: "z-index", correct: true },
      { text: "order", correct: false },
      { text: "index", correct: false },
      { text: "position-level", correct: false }
    ]
  },
  {
    question: "Which JavaScript method can be used to iterate over all items in an array?",
    answers: [
      { text: "forEach()", correct: true },
      { text: "sort()", correct: false },
      { text: "split()", correct: false },
      { text: "join()", correct: false }
    ]
  }
];

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");
const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");
const timerText = document.getElementById("timer-text");
const scoreText = document.getElementById("score-text");
const scoreDetail = document.getElementById("score-detail");
const questionCard = document.getElementById("question-card");
const confettiCanvas = document.getElementById("confetti-canvas");
const confettiCtx = confettiCanvas.getContext("2d");

let currentQuestionIndex = 0;
let score = 0;
let hasAnswered = false;
let timeLeft = 15;
let timerId = null;
let confettiId = null;
let confettiParticles = [];
let quizQuestions = [];

const resetQuizState = () => {
  currentQuestionIndex = 0;
  score = 0;
  hasAnswered = false;
  timeLeft = 15;
};

const showScreen = (screen) => {
  [startScreen, quizScreen, resultScreen].forEach(section => {
    section.classList.toggle("hidden", section !== screen);
  });
};

const updateProgress = () => {
  const questionNumber = currentQuestionIndex + 1;
  progressText.textContent = `Round ${questionNumber} of ${quizQuestions.length}`;
  progressFill.style.width = `${(questionNumber / quizQuestions.length) * 100}%`;
};

const shuffleArray = (array) => {
  const copy = array.slice();
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const clearAnswers = () => {
  answerButtons.innerHTML = "";
  hasAnswered = false;
  nextButton.disabled = true;
};

const resetTimer = () => {
  timeLeft = 15;
  timerText.textContent = `${timeLeft}s`;
  if (timerId) {
    clearInterval(timerId);
  }
  timerId = setInterval(() => {
    timeLeft -= 1;
    timerText.textContent = `${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timerId);
      revealCorrectAnswer();
    }
  }, 1000);
};

const renderQuestion = () => {
  clearAnswers();
  const current = quizQuestions[currentQuestionIndex];
  questionText.textContent = current.question;

  questionCard.classList.remove("question-card");
  void questionCard.offsetWidth;
  questionCard.classList.add("question-card");

  const shuffledAnswers = shuffleArray(current.answers);

  shuffledAnswers.forEach(answer => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "btn answer-btn";
    button.textContent = answer.text;
    button.dataset.correct = answer.correct;
    button.addEventListener("click", handleAnswerClick);
    answerButtons.appendChild(button);
  });

  updateProgress();
  resetTimer();
};

const handleAnswerClick = (event) => {
  if (hasAnswered) return;

  const selectedButton = event.currentTarget;
  const isCorrect = selectedButton.dataset.correct === "true";

  if (isCorrect) {
    selectedButton.classList.add("correct");
    score += 1;
  } else {
    selectedButton.classList.add("wrong");
  }

  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  hasAnswered = true;
  nextButton.disabled = false;
  clearInterval(timerId);
};

const revealCorrectAnswer = () => {
  if (hasAnswered) return;
  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  hasAnswered = true;
  nextButton.disabled = false;
};

const resizeConfettiCanvas = () => {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
};

const createConfetti = () => {
  const colors = ["#0e9f6e", "#5adcb0", "#2a6abc", "#1a1f36", "#f9b44d"];
  confettiParticles = Array.from({ length: 120 }).map(() => ({
    x: Math.random() * confettiCanvas.width,
    y: -20 - Math.random() * confettiCanvas.height,
    r: 4 + Math.random() * 6,
    d: 2 + Math.random() * 4,
    color: colors[Math.floor(Math.random() * colors.length)],
    tilt: Math.random() * 10 - 5,
    tiltSpeed: 0.05 + Math.random() * 0.1
  }));
};

const drawConfetti = () => {
  confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confettiParticles.forEach(p => {
    confettiCtx.beginPath();
    confettiCtx.fillStyle = p.color;
    confettiCtx.ellipse(p.x, p.y, p.r, p.r * 0.6, p.tilt, 0, Math.PI * 2);
    confettiCtx.fill();

    p.y += p.d;
    p.tilt += p.tiltSpeed;
    if (p.y > confettiCanvas.height + 20) {
      p.y = -20;
      p.x = Math.random() * confettiCanvas.width;
    }
  });

  confettiId = requestAnimationFrame(drawConfetti);
};

const startConfetti = () => {
  resizeConfettiCanvas();
  createConfetti();
  cancelAnimationFrame(confettiId);
  drawConfetti();
  setTimeout(stopConfetti, 3000);
};

const stopConfetti = () => {
  cancelAnimationFrame(confettiId);
  confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
};

const getScoreRank = () => {
  const ratio = score / quizQuestions.length;
  if (ratio >= 0.9) return "Elite Sprint Performance";
  if (ratio >= 0.7) return "Strong Frontend Momentum";
  if (ratio >= 0.5) return "Solid Base, Keep Practicing";
  return "Starter Level, Try Another Round";
};

const showResults = () => {
  scoreText.textContent = `You scored ${score} out of ${quizQuestions.length}.`;
  scoreDetail.textContent = `${score} correct answers. Rank: ${getScoreRank()}.`;
  showScreen(resultScreen);
  clearInterval(timerId);
  startConfetti();
};

const goToNextQuestion = () => {
  if (!hasAnswered) return;

  currentQuestionIndex += 1;

  if (currentQuestionIndex < quizQuestions.length) {
    renderQuestion();
  } else {
    showResults();
  }
};

const startQuiz = () => {
  resetQuizState();
  quizQuestions = shuffleArray(allQuestions).slice(0, 10);
  showScreen(quizScreen);
  renderQuestion();
};

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", goToNextQuestion);
restartButton.addEventListener("click", startQuiz);
window.addEventListener("resize", resizeConfettiCanvas);

showScreen(startScreen);
