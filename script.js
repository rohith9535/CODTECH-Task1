const allQuestions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "Home Tool Markup Language", correct: false },
      { text: "Hyperlinks and Text Mark Language", correct: false },
      { text: "Hyper Tool Multi Language", correct: false }
    ]
  },
  {
    question: "Which HTML element is used to include JavaScript?",
    answers: [
      { text: "<script>", correct: true },
      { text: "<javascript>", correct: false },
      { text: "<js>", correct: false },
      { text: "<code>", correct: false }
    ]
  },
  {
    question: "What does CSS stand for?",
    answers: [
      { text: "Cascading Style Sheets", correct: true },
      { text: "Creative Style System", correct: false },
      { text: "Computer Style Sheets", correct: false },
      { text: "Colorful Style Syntax", correct: false }
    ]
  },
  {
    question: "Which CSS property controls text size?",
    answers: [
      { text: "font-size", correct: true },
      { text: "text-style", correct: false },
      { text: "font-weight", correct: false },
      { text: "letter-size", correct: false }
    ]
  },
  {
    question: "Which method adds a new element at the end of an array?",
    answers: [
      { text: "push()", correct: true },
      { text: "pop()", correct: false },
      { text: "shift()", correct: false },
      { text: "unshift()", correct: false }
    ]
  },
  {
    question: "Which keyword declares a block-scoped variable in JavaScript?",
    answers: [
      { text: "let", correct: true },
      { text: "var", correct: false },
      { text: "const", correct: false },
      { text: "static", correct: false }
    ]
  },
  {
    question: "What does DOM stand for?",
    answers: [
      { text: "Document Object Model", correct: true },
      { text: "Digital Ordinance Model", correct: false },
      { text: "Display Object Management", correct: false },
      { text: "Document Order Map", correct: false }
    ]
  },
  {
    question: "Which HTTP method is commonly used to request data?",
    answers: [
      { text: "GET", correct: true },
      { text: "POST", correct: false },
      { text: "PUT", correct: false },
      { text: "PATCH", correct: false }
    ]
  },
  {
    question: "Which CSS layout is best for one-dimensional alignment?",
    answers: [
      { text: "Flexbox", correct: true },
      { text: "Grid", correct: false },
      { text: "Float", correct: false },
      { text: "Position", correct: false }
    ]
  },
  {
    question: "Which tool is commonly used for package management in JavaScript?",
    answers: [
      { text: "npm", correct: true },
      { text: "pip", correct: false },
      { text: "gem", correct: false },
      { text: "composer", correct: false }
    ]
  },
  {
    question: "Which HTML attribute is used for alternative text on images?",
    answers: [
      { text: "alt", correct: true },
      { text: "title", correct: false },
      { text: "src", correct: false },
      { text: "label", correct: false }
    ]
  },
  {
    question: "Which CSS unit is relative to the root font size?",
    answers: [
      { text: "rem", correct: true },
      { text: "em", correct: false },
      { text: "px", correct: false },
      { text: "%", correct: false }
    ]
  },
  {
    question: "Which JavaScript method converts JSON string to object?",
    answers: [
      { text: "JSON.parse()", correct: true },
      { text: "JSON.stringify()", correct: false },
      { text: "JSON.object()", correct: false },
      { text: "JSON.toObject()", correct: false }
    ]
  },
  {
    question: "Which HTML tag defines a navigation section?",
    answers: [
      { text: "<nav>", correct: true },
      { text: "<header>", correct: false },
      { text: "<section>", correct: false },
      { text: "<aside>", correct: false }
    ]
  },
  {
    question: "Which CSS property creates space inside an element?",
    answers: [
      { text: "padding", correct: true },
      { text: "margin", correct: false },
      { text: "gap", correct: false },
      { text: "border", correct: false }
    ]
  },
  {
    question: "Which JavaScript array method creates a new array with filtered values?",
    answers: [
      { text: "filter()", correct: true },
      { text: "map()", correct: false },
      { text: "reduce()", correct: false },
      { text: "forEach()", correct: false }
    ]
  },
  {
    question: "Which HTTP status code means 'Not Found'?",
    answers: [
      { text: "404", correct: true },
      { text: "200", correct: false },
      { text: "301", correct: false },
      { text: "500", correct: false }
    ]
  },
  {
    question: "Which CSS property controls element stacking order?",
    answers: [
      { text: "z-index", correct: true },
      { text: "order", correct: false },
      { text: "position", correct: false },
      { text: "float", correct: false }
    ]
  },
  {
    question: "Which HTML element groups form controls?",
    answers: [
      { text: "<fieldset>", correct: true },
      { text: "<form>", correct: false },
      { text: "<label>", correct: false },
      { text: "<input>", correct: false }
    ]
  },
  {
    question: "Which CSS display value places items in a grid?",
    answers: [
      { text: "grid", correct: true },
      { text: "block", correct: false },
      { text: "inline", correct: false },
      { text: "flex", correct: false }
    ]
  },
  {
    question: "Which JavaScript keyword is used to create a class?",
    answers: [
      { text: "class", correct: true },
      { text: "object", correct: false },
      { text: "new", correct: false },
      { text: "prototype", correct: false }
    ]
  },
  {
    question: "Which tag is used to define a hyperlink?",
    answers: [
      { text: "<a>", correct: true },
      { text: "<link>", correct: false },
      { text: "<href>", correct: false },
      { text: "<url>", correct: false }
    ]
  },
  {
    question: "Which CSS function makes a color semi-transparent?",
    answers: [
      { text: "rgba()", correct: true },
      { text: "rgb()", correct: false },
      { text: "hex()", correct: false },
      { text: "hsl()", correct: false }
    ]
  },
  {
    question: "Which JavaScript method selects the first matching element?",
    answers: [
      { text: "querySelector()", correct: true },
      { text: "getElementsByClassName()", correct: false },
      { text: "querySelectorAll()", correct: false },
      { text: "getElement()", correct: false }
    ]
  },
  {
    question: "Which HTML attribute opens a link in a new tab?",
    answers: [
      { text: "target=\"_blank\"", correct: true },
      { text: "rel=\"new\"", correct: false },
      { text: "blank=\"true\"", correct: false },
      { text: "newtab", correct: false }
    ]
  },
  {
    question: "Which CSS property changes the cursor to a pointer?",
    answers: [
      { text: "cursor", correct: true },
      { text: "pointer-events", correct: false },
      { text: "hover", correct: false },
      { text: "user-select", correct: false }
    ]
  },
  {
    question: "Which JavaScript statement stops a loop?",
    answers: [
      { text: "break", correct: true },
      { text: "stop", correct: false },
      { text: "return", correct: false },
      { text: "exit", correct: false }
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
  progressText.textContent = `Question ${questionNumber} of ${quizQuestions.length}`;
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

  // Trigger a subtle animation on each question change
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
  const colors = ["#ff7a1a", "#ffd39f", "#2e8b57", "#c0392b", "#1f2a32"];
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

const showResults = () => {
  scoreText.textContent = `You scored ${score} out of ${quizQuestions.length}.`;
  scoreDetail.textContent = `${score} correct answers.`;
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
