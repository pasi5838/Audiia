
let currentQuestion = 0;
let lives = 3;
let score = 0;
let questions = [];

fetch("soal.json")
  .then(res => res.json())
  .then(data => {
    questions = data;
    showQuestion();
  });

function showQuestion() {
  if (lives <= 0 || currentQuestion >= questions.length) {
    document.getElementById("question").innerText = "Permainan Selesai! Skor: " + score;
    return;
  }
  document.getElementById("question").innerText = questions[currentQuestion].soal;
  document.getElementById("answer").value = "";
  document.getElementById("feedback").innerText = "";
  updateLives();
}

function updateLives() {
  document.getElementById("lives").innerText = "❤️".repeat(lives);
}

function submitAnswer() {
  const userAnswer = document.getElementById("answer").value.toLowerCase();
  const correctAnswer = questions[currentQuestion].jawaban.toLowerCase();
  if (userAnswer === correctAnswer) {
    score++;
    showFirework();
    document.getElementById("feedback").innerText = "Benar! 🎉";
  } else {
    lives--;
    document.getElementById("feedback").innerText = "Salah 😢";
  }
  currentQuestion++;
  setTimeout(showQuestion, 1000);
}

function showFirework() {
  const div = document.createElement("div");
  div.innerText = "💥";
  div.style.position = "fixed";
  div.style.top = Math.random() * 80 + "%";
  div.style.left = Math.random() * 80 + "%";
  div.style.fontSize = "40px";
  document.body.appendChild(div);
  setTimeout(() => document.body.removeChild(div), 800);
}
