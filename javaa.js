// Generate random numbers for both players
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Set the images for the dice rolls
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// Determine the winner based on the game rules
function determineWinner(randomNumber1, randomNumber2) {
    let player1Wins = (randomNumber1 % 2 !== 0 && randomNumber1 > randomNumber2);
    let player2Wins = (randomNumber2 % 2 === 0 && randomNumber2 > randomNumber1);

    if (player1Wins) {
        document.querySelector("h1").innerHTML = "Player 1 Wins! 🎉";
    } else if (player2Wins) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆";
    } else {
        document.querySelector("h1").innerHTML = "It's a Draw! 🤝";
    }
}

// Call the function to determine the winner
determineWinner(randomNumber1, randomNumber2);