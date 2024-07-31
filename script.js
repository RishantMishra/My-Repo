
let currentQuestion = 0;
const questions = [
  "<h2>ARE YOU EXPERIENCING   HAIR THINNING? </h2>",
  "<h2>DOES SOMEONE IN YOUR FAMILY HISTORY HAVE HAIR LOSS?</h2>",
  "<h2>ARE YOU FACING HAIR LOSS?</h2>",
  "<h2>DO YOU BELIEVE, THE RIGHT KNOWLEDGECAN GET YOU CLOSER TO SOLVING YOUR HAIR LOSS?</h2>",
  "<h2>LASTLY, ARE YOU WILLING TO INVEST SOME TIME & BUDGET INTO SOLVING YOUR HAIR LOSS?</h2>",
  "<h2>LASTLY, WOULD YOU BE WILLING TO INVEST AT LEAST ₹499 FOR THAT RIGHT KNOWLEDGE TO STOP & REVERSE YOUR HAIR LOSS?</h2>",
  "<h2> EXCELLENT! HERE'S WHAT YOU HAVE BEEN MISSING !AT HOME HAIR LOSS SOLUTION GUIDE</h2>",
];

document.getElementById("yes").addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion<6) {
    document.getElementById("question").innerHTML = questions[currentQuestion];
  } else {
    window.location.href = "program.html";
  }
});

document.getElementById("no").addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < 6) {
    document.getElementById("question").innerHTML = questions[currentQuestion];
  } else {
    window.location.href = "program.html";
  }
});

document.getElementById("question").innerHTML = questions[currentQuestion];

function goBack() {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
}
}

showQuestion();