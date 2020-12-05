function myQuizz(event) {
event.preventDefault();

// create a var correctAnswer
let correctAnswer1 = "All of the above";
let correctAnswer2 = "150 minutes of moderate to vigorous per week";
let correctAnswer3 = "All of the above";
let correctAnswer4 = "True";

// create a var chooseAnswer
// querySelector + input = name 
let chooseAnswer1 = document.querySelector("input[name='ans1']:checked").value;
let chooseAnswer2 = document.querySelector("input[name='ans2']:checked").value;
let chooseAnswer3 = document.querySelector("input[name='ans3']:checked").value;
let chooseAnswer4 = document.querySelector("input[name='ans4']:checked").value;


// calculate score
console.log(chooseAnswer)
let points = document.getElementById("score");

// if statement
if (chooseAnswer1 == correctAnswer1) {
  total = 5;
  points.innerHTML = total;

  // alert("Answer Correct")
  // } else {
  // alert("Answer Wrong")
  // }
}  

 if (chooseAnswer2 == correctAnswer2) {
  total = 5;
  points.innerHTML = total;
} 

if (chooseAnswer3 == correctAnswer3) {
  total = 5;
  points.innerHTML = total;
} 

if (chooseAnswer4 == correctAnswer4) {
  total = 5;
  points.innerHTML = total;
} 
else {
  points.innerHTML = total;
}










// if (quest2.value === "150 minutes of moderate to vigorous intensity aerobic physical activity per week") {
//   total = 1;
// } else ("Sorry wrong answer");


// if (quest3.value === "All of the above") {
//   total = 1;
// } else ("Sorry wrong answer");


// if (quest4.value === "True") {
//   total = 1;
// } else ("Sorry wrong answer");

// }