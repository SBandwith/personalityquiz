/*Add your JavaScript here*/
let questionCount;
var fireScore = 0;
var waterScore = 0;
var result = document.getElementById("result")
var restart = document.getElementById("restart")

questionCount = 0;

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

function updateResult(){
  if (fireScore >= 2){
    console.log("You are a Fire Person")
    result.innerHTML="You are a Fire Person";
  } else if (waterScore >= 2){
    console.log("You are a Water Person")
    result.innerHTML="You are a Water Person";
  }
}

function enableQuestion(){
  q1a1.disabled = false; 
  q1a2.disabled = false; 
  q2a1.disabled = false; 
  q2a2.disabled = false;
  q3a1.disabled = false; 
  q3a2.disabled = false;
}

function restartQuiz(){
  result.innerHTML="You are a....";
  fireScore = 0;
  waterScore = 0;
  questionCount = 0;
  enableQuestion();
}

function fire() {
  if (questionCount >= 3) return; // Prevent further clicks after quiz completion
  
  fireScore += 1
  questionCount += 1

  console.log("Question Count: " + questionCount)
  console.log("Fire Score: " + fireScore)

  if (questionCount == 3){
    console.log("The quiz is done")
    updateResult();
  }
};

function water() {
  if (questionCount >= 3) return; // Prevent further clicks after quiz completion
  
  waterScore += 1
  questionCount += 1
  console.log("Question Count: " + questionCount)
  console.log("Water Score: " + waterScore)

  if (questionCount == 3){
    console.log("The quiz is done")
    updateResult();
  }
};

function disableQ1() {
  q1a1.disabled = true; 
  q1a2.disabled = true; 
}

function disableQ2() {
  q2a1.disabled = true; 
  q2a2.disabled = true; 
}

function disableQ3() {
  q3a1.disabled = true; 
  q3a2.disabled = true; 
}




q1a1.addEventListener("click", fire)
q1a2.addEventListener("click", water)

q2a1.addEventListener("click", water)
q2a2.addEventListener("click", fire)

q3a1.addEventListener("click", fire)
q3a2.addEventListener("click", water)
restart.addEventListener("click", restartQuiz)

q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);

q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);

q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);

