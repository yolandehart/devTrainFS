const newYear = "1 Jan 2021"

function countDown()
{
const newYearDate = new Date(newYear)
const currentDate = new Date()
const totalSecond = (newYearDate-currentDate)/1000;

const days = Math.floor(totalSecond/3600/24)
const hours = Math.floor(totalSecond/3600)%24;
const mins = Math.floor(totalSecond/60)%60;
const seconds = Math.floor(totalSecond)%60;

const days1 = document.getElementById("days");
const hours1 = document.getElementById("hours");
const mins1 = document.getElementById("mins");
const seconds1 = document.getElementById("seconds");

days1.innerHTML = days;
hours1.innerHTML = hours;
mins1.innerHTML = mins;
seconds1.innerHTML = seconds;
}
setInterval(countDown, 1000 )





















// const countDown = setInterval(function() {

//   const newYearDate = new Date("1 Jan 2021");
//   const currentDate = new Date();
//   const timeLeft = (newYearDate - currentDate)/1000;

//   let secs = Math.floor(timeLeft % 60);
//   let mins = Math.floor((timeLeft/60) % 60);
//   let hours = Math.floor((timeLeft/60/60) % 24);
//   let days = Math.floor((timeLeft/60/60) / 24);

//   let displayDays = document.getElementById("days");
//       displayDays.innerHTML = days;
//   let displayHours = document.getElementById("hours");
//       displayHours.innerHTML = hours;
//   let displayMinutes = document.getElementById("mins");
//       displayMinutes.innerHTML = mins;
//   let displaySecs = document.getElementById("secs");   
//       displaySecs.innerHTML = secs;  
      

//   if (timeLeft < 0) {
//   // clearInterval(myfunc)
//       document.getElementById("days").innerHTML = "0";
//       document.getElementById("hours").innerHTML = "0"; 
//       document.getElementById("mins").innerHTML = "0";
//       document.getElementById("secs").innerHTML = "0";
//       document.getElementById("end").innerHTML = "HAPPY 2021 !!!";
//       document.getElementById("end").style.color = "red";
//       }
// }, 1000);



// Basics of a countdown timer are :
// Set a valid end date.
// Calculate the time remaining.
// Convert the time to a usable format.
// Output the clock data as a reusable object.
// Display the clock on the page, and stop the clock when it reaches zero.
// Step 1 : Set a Valid End Date
// The Valid end date and time should be a string in any of the formats understood by JavaScript’s Date.parse() method.