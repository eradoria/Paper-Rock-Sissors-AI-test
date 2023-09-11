const brain = require("brain.js");

// Create a neural network
const net = new brain.NeuralNetwork();

// Define the training data
const trainingData = [
  { input: [0, 0, 1], output: [1, 0, 0] }, // Rock -> Paper
  { input: [0, 1, 0], output: [0, 1, 0] }, // Paper -> Paper
  { input: [1, 0, 0], output: [0, 0, 1] }, // Scissors -> Rock
];

// Train the network
net.train(trainingData);

// Define a function to play the game
function playGame(playerMove) {
  const output = net.run(playerMove);

  const computerMove = output.indexOf(Math.max(...output));
  const moves = ["rock", "paper", "scissors"];

  console.log(`Player: ${moves[playerMove.indexOf(1)]}`);
  console.log(`Computer: ${moves[computerMove]}`);

  if (computerMove === playerMove.indexOf(0.5)) {
    console.log("It's a draw!");
  } else if (
    (playerMove.indexOf(1) === 0 && computerMove === 1) ||
    (playerMove.indexOf(1) === 1 && computerMove === 2) ||
    (playerMove.indexOf(1) === 2 && computerMove === 0)
  ) {
    console.log("Computer wins!");
  } else {
    console.log("Player wins!");
  }
}

// Play the game with player's move
const playerMove = [1, 0, 0]; // For example, representing "rock"
playGame(playerMove);
