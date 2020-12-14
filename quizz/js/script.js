function myQuizz(event) {
event.preventDefault();

// create a var correctAnswer
let correctAnswer1 = "Alloftheabove";
let correctAnswer2 = "150minutesofmoderateactivityperweek";
let correctAnswer3 = "Alloftheabove";
let correctAnswer4 = "True";

// create a var chooseAnswer && querySelector + input = name 
let chooseAnswer1 = document.querySelector("input[name='quest1']:checked").value;
let chooseAnswer2 = document.querySelector("input[name='quest2']:checked").value;
let chooseAnswer3 = document.querySelector("input[name='quest3']:checked").value;
let chooseAnswer4 = document.querySelector("input[name='quest4']:checked").value;

// calculate score
let points = document.getElementById("score");
let total = 0;

// if statement
if (chooseAnswer1 == correctAnswer1) {
  total = 5;
  points.innerHTML = total;
}  
 if (chooseAnswer2 == correctAnswer2) {
  total += 5;
  points.innerHTML = total;
   console.log(total)
} 
if (chooseAnswer3 == correctAnswer3) {
  total += 5;
  points.innerHTML = total;
} 
if (chooseAnswer4 == correctAnswer4) {
  total += 5;
  points.innerHTML = total;
} 
else {
  points.innerHTML = total;
}
}

