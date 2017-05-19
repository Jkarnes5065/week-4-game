var randomNumber = 0;
var button1Number = 0;
var button2Number = 0;
var button3Number = 0;
var button4Number = 0;
var totalScore = 0;
var wins = 0;
var losses = 0;

function newGame() {
    randomNumber = Math.floor(Math.random() * 30) + 1;
    $("#random-number-box").text(randomNumber);
    console.log(randomNumber);
    button1Number = Math.floor(Math.random() * 10) + 1;
    button2Number = Math.floor(Math.random() * 10) + 1;
    button3Number = Math.floor(Math.random() * 10) + 1;
    button4Number = Math.floor(Math.random() * 10) + 1;
    totalScore = 0;
    $("#input-number-box").text(totalScore);
    $("#win-count").text(wins);
    $("#loss-count").text(losses);


}

$("#button1").on({
    "click": function() {
        updateScore(button1Number);
    }
});

$("#button2").on({
    "click": function() {
        updateScore(button2Number);
    }
});

$("#button3").on({
    "click": function() {
        updateScore(button3Number);
    }
});

$("#button4").on({
    "click": function() {
        updateScore(button4Number);
    }
});

function updateScore(buttonVal) {
    totalScore = totalScore + buttonVal;
    console.log(totalScore)

    $("#input-number-box").text(totalScore);
    if (totalScore > randomNumber) {
        alert("too high!");
        losses = losses+ 1;
        newGame();
    }
    if (totalScore == randomNumber) {
        alert("you win!"); 
        wins = wins + 1;
        newGame();

    }
}

newGame();