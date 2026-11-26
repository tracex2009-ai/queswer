// 1. Check MCQ Answer
function checkMCQ(button, selectedIndex) {
  const container = button.parentElement;
  const correctIndex = parseInt(container.getAttribute("data-correct"), 10);
  const buttons = container.querySelectorAll(".option-btn");
  const feedback = container.querySelector(".feedback");

  // Reset previous styles
  buttons.forEach(btn => {
    btn.classList.remove("correct", "wrong");
  });

  if (selectedIndex === correctIndex) {
    button.classList.add("correct");
    feedback.textContent = "✅ Correct! 'Affirm' means to declare with confidence.";
    feedback.style.color = "#2e7d32";
  } else {
    button.classList.add("wrong");
    buttons[correctIndex].classList.add("correct");
    feedback.textContent = "❌ Incorrect. The correct answer is highlighted in green.";
    feedback.style.color = "#c62828";
  }
}

// 2. Toggle Subjective Answers (Show / Hide)
function toggleAnswer(button) {
  const answerBox = button.nextElementSibling;
  if (answerBox.classList.contains("hidden")) {
    answerBox.classList.remove("hidden");
    button.textContent = "Hide Answer";
  } else {
    answerBox.classList.add("hidden");
    button.textContent = "Show Answer";
  }
}

// 3. Check Vocabulary Matching Answers
function checkVocabulary() {
  const selects = document.querySelectorAll(".vocab-select");
  let score = 0;

  selects.forEach(select => {
    const correctAnswer = select.getAttribute("data-answer");
    const statusIcon = select.nextElementSibling;

    if (select.value === correctAnswer) {
      score++;
      select.style.borderColor = "#2e7d32";
      select.style.backgroundColor = "#e8f5e9";
      statusIcon.textContent = "✅ Correct";
      statusIcon.style.color = "#2e7d32";
    } else if (select.value === "") {
      select.style.borderColor = "#f57c00";
      select.style.backgroundColor = "#fff3e0";
      statusIcon.textContent = "⚠️ Please select an option";
      statusIcon.style.color = "#e65100";
    } else {
      select.style.borderColor = "#c62828";
      select.style.backgroundColor = "#ffebee";
      statusIcon.textContent = `❌ Wrong (Answer: ${correctAnswer})`;
      statusIcon.style.color = "#c62828";
    }
  });

  const scoreDisplay = document.getElementById("vocab-score");
  scoreDisplay.textContent = `Your Score: ${score} / ${selects.length}`;
}

// 4. Reset Vocabulary Quiz
function resetVocabulary() {
  const selects = document.querySelectorAll(".vocab-select");
  selects.forEach(select => {
    select.value = "";
    select.style.borderColor = "#aaa";
    select.style.backgroundColor = "#fff";
    select.nextElementSibling.textContent = "";
  });
  document.getElementById("vocab-score").textContent = "";
}
function showAllVocabulary() {
  const selects = document.querySelectorAll(".vocab-select");

  selects.forEach(select => {
    const correctAnswer = select.getAttribute("data-answer");
    const statusIcon = select.nextElementSibling;

    select.value = correctAnswer;
    select.style.borderColor = "#1565c0";
    select.style.backgroundColor = "#e3f2fd";
    statusIcon.textContent = `✔ Answer: ${correctAnswer}`;
    statusIcon.style.color = "#0d47a1";
  });

  document.getElementById("vocab-score").textContent = "All correct answers are shown above.";
}
