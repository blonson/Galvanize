// Knock Knock JS Code:
document.getElementById("question 2").classList.add("hide");
document.getElementById("button 2").classList.add("hide");
document.getElementById("answer 1").classList.add("hide");


document.getElementById("button 1").addEventListener("click",
function() {
  document.getElementById("question 2").classList.add("show")
  document.getElementById("button 2").classList.add("show")
  window.scrollTo(0,document.body.scrollHeight);
});

document.getElementById("button 2").addEventListener("click",
function() {
  document.getElementById("answer 1").classList.add("show")
  window.scrollTo(0,document.body.scrollHeight);
});
