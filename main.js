// Knock Knock JS Code:
document.getElementById("question 2").classList.add("hide");
document.getElementById("button 2").classList.add("hide");
document.getElementById("question 3").classList.add("hide");
document.getElementById("button 3").classList.add("hide");


document.getElementById("button 1").addEventListener("click",
function() {
  document.getElementById("question 1").classList.add("hide");
  document.getElementById("button 1").classList.add("hide");
  document.getElementById("question 2").classList.add("show");
  document.getElementById("button 2").classList.add("show");
});

document.getElementById("button 2").addEventListener("click",
function() {
  document.getElementById("question 2").classList.add("hide");
  document.getElementById("button 2").classList.add("hide");
  document.getElementById("question 3").classList.add("show");
  document.getElementById("button 3").classList.add("show");
});

document.getElementById("button 3").addEventListener("click",
function() {
  document.getElementById("question 3").classList.add("hide");
  document.getElementById("button 3").classList.add("hide");
});
