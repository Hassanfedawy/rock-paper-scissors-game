let rock_btn = document.getElementById("rock");
let paper_btn = document.getElementById("paper");
let scissors_btn = document.getElementById("scissors");

// Add event listeners
rock_btn.addEventListener("click", () => {
   
    localStorage.setItem("PlayerChoice","rock")
    window.location.href = "./game.html";
   
});

paper_btn.addEventListener("click", () => {

    localStorage.setItem("PlayerChoice","paper")
    window.location.href = "./game.html";
});

scissors_btn.addEventListener("click", () => {
    
    localStorage.setItem("PlayerChoice","scissors")
    window.location.href = "./game.html";
   
});


document.addEventListener('DOMContentLoaded', () => {

const score=document.getElementById("score")

score.textContent=parseInt(localStorage.getItem("score"))
});