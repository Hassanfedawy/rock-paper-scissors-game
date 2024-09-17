// Play Again Button
const PlayAgain = document.getElementById("PlayAgain");
PlayAgain.addEventListener("click", () => {
    window.location.href = "./index.html";
});


// Game Execution
document.addEventListener('DOMContentLoaded', () => {
    const PlayerMove = document.getElementById("PlayerMove");
    const CompPlay = document.getElementById("CompMove");

    const CompMove = Math.round(Math.random() * 2) + 1;

    // chooses ROCK
    if (localStorage.getItem("PlayerChoice") === "rock") {
        PlayerMove.innerHTML = `<img src="../images/icon-rock.svg" alt="Rock">`;
        PlayerMove.classList.add("rock")
    }
    // chooses PAPER
    else if (localStorage.getItem("PlayerChoice") === "paper") {
        PlayerMove.innerHTML = `<img src="../images/icon-paper.svg" alt="Paper">`;
        PlayerMove.classList.add("paper");
    }
    // chooses SCISSORS
    else {
        PlayerMove.innerHTML = `<img src="../images/icon-scissors.svg" alt="Scissors">`;
        PlayerMove.classList.add("scissors");
    }

    // Computer chooses Rock
    if (CompMove === 1) {
        CompPlay.innerHTML = `<img src="../images/icon-rock.svg" alt="Rock">`;
        CompPlay.classList.add("rock")
    }
    // Computer chooses Paper
    else if (CompMove === 2) {
        CompPlay.innerHTML = `<img src="../images/icon-paper.svg" alt="Paper">`;
        CompPlay.classList.add("paper");
    }
    // Computer chooses Scissors
    else {
        CompPlay.innerHTML = `<img src="../images/icon-scissors.svg" alt="Scissors">`;
        CompPlay.classList.add("scissors");
    }

    // Result
    const result = document.getElementById("result");
    let ScoreDisplay = document.getElementById("score");

    let score = parseInt(localStorage.getItem("score") || "0");
    if (
        (CompMove === 1 && localStorage.getItem("PlayerChoice") === "rock") ||
        (CompMove === 2 && localStorage.getItem("PlayerChoice") === "paper") ||
        (CompMove === 3 && localStorage.getItem("PlayerChoice") === "scissors")
    ) {
        result.textContent = "IT'S A TIE";
    } else if (
        (CompMove === 1 && localStorage.getItem("PlayerChoice") === "scissors") ||
        (CompMove === 2 && localStorage.getItem("PlayerChoice") === "rock") ||
        (CompMove === 3 && localStorage.getItem("PlayerChoice") === "paper")
    ) {
        result.textContent = "YOU LOST";
        score--;
    } else {
        result.textContent = "YOU WIN";
        score++;
    }

    ScoreDisplay.textContent = score;
    localStorage.setItem("score", score);

});
