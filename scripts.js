// Countdown Timer
const nextMeetingDate = new Date("2024-11-10T00:00:00"); // Set the date of the next meeting

function updateTimer() {
  const now = new Date();
  const timeLeft = nextMeetingDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (timeLeft < 0) {
    document.getElementById("timer").innerHTML = "We are together now!";
  }
}

setInterval(updateTimer, 1000);

// Quiz Logic with editing and adding functionality
let quizData = [
  {
    question: "When did we first meet?",
    options: { A: "January 15, 2021", B: "December 25, 2020" },
    correct: "A"
  }
];

function renderQuiz() {
  const quizContainer = document.getElementById('quiz-container');
  quizContainer.innerHTML = ""; // Clear the previous content

  quizData.forEach((item, index) => {
    quizContainer.innerHTML += `
      <div class="quiz-question">
        <p>${item.question}</p>
        <button onclick="checkAnswer('${index}', 'A')">A) ${item.options.A}</button>
        <button onclick="checkAnswer('${index}', 'B')">B) ${item.options.B}</button>
        <button onclick="deleteQuestion(${index})">Delete</button>
        <button onclick="editQuestion(${index})">Edit</button>
      </div>`;
  });
}

function checkAnswer(index, answer) {
  const result = document.getElementById("quiz-result");

  if (answer === quizData[index].correct) {
    result.innerHTML = "Correct! 🎉";
    result.style.color = "green";
  } else {
    result.innerHTML = "Oops! Try again.";
    result.style.color = "red";
  }
}

function addQuestion() {
  const question = document.getElementById('question').value;
  const answerA = document.getElementById('answerA').value;
  const answerB = document.getElementById('answerB').value;
  const correctAnswer = document.getElementById('correct-answer').value;

  if (question && answerA && answerB && correctAnswer) {
    quizData.push({
      question,
      options: { A: answerA, B: answerB },
      correct: correctAnswer
    });

    renderQuiz();
    document.getElementById('quiz-result').innerHTML = "Question added successfully!";
  } else {
    alert("Please fill in all fields!");
  }
}

function deleteQuestion(index) {
  quizData.splice(index, 1);
  renderQuiz();
}

function editQuestion(index) {
  const question = prompt("Edit the question", quizData[index].question);
  const answerA = prompt("Edit option A", quizData[index].options.A);
  const answerB = prompt("Edit option B", quizData[index].options.B);
  const correct = prompt("Edit the correct answer (A or B)", quizData[index].correct);

  quizData[index] = {
    question: question || quizData[index].question,
    options: { A: answerA || quizData[index].options.A, B: answerB || quizData[index].options.B },
    correct: correct || quizData[index].correct
  };

  renderQuiz();
}

// Toggle section visibility
function toggleSection(sectionId) {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    if (section.id === sectionId) {
      section.classList.toggle('hidden');
    } else {
      section.classList.add('hidden');
    }
  });
}

// Return to home page (show navigation only)
function goHome() {
  document.querySelectorAll('section').forEach(section => section.classList.add('hidden'));
}

// Initial rendering of the quiz
renderQuiz();
