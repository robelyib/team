const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const computerHand = document.getElementById("computerHand");
const resultText = document.getElementById("resultText");
const restartBtn = document.getElementById("restartBtn");

// define weapons array
const weapons = ["rock", "paper", "scissors"];

// initialize state variables
let playerWeapon = "";
let computerWeapon = "";
let result = "";

// add event listeners to the buttons
rockBtn.addEventListener("click", function() { play("rock"); });
paperBtn.addEventListener("click", function() { play("paper"); });
scissorsBtn.addEventListener("click", function() { play("scissors"); });
restartBtn.addEventListener("click", function() { restart(); });

// play the game with the selected weapon
function play(weapon) {
 playerWeapon = weapon;
 computerWeapon = weapons[Math.floor(Math.random() * weapons.length)];
 computerHand.src = `images/${computerWeapon}.png`;
 result = getResult(playerWeapon, computerWeapon);
 resultText.innerHTML = result;
 restartBtn.style.display = "block";
}

// determine the result of the game
function getResult(playerWeapon, computerWeapon) {
 if (playerWeapon === computerWeapon) {
  return "It's a tie!";
 } else if (
  (playerWeapon === "rock" && computerWeapon === "scissors") || 
  (playerWeapon === "paper" && computerWeapon === "rock") ||
  (playerWeapon === "scissors" && computerWeapon === "paper")
 ) {
  return "Player wins!";
 } else {
  return "Computer wins!";
 }
}

// restart the game by resetting the state variables and hiding the restart button
function restart() {
 playerWeapon = "";
 computerWeapon = "";
 result = "";
 computerHand.src = "images/rock.png";
 resultText.innerHTML = "Choose your weapon!";
 restartBtn.style.display = "none";
}

// initialize the game
restart();