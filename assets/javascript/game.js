
// Global Variables
var currentScore = 0;
var targetNumber =  0;
var wins = 0;
var losses = 0;

// Here we created code that selects a number between 1 and 12.
// We'll set this number at the start of the "game".
function setNumbers(){
  currentScore = 0;
  $("#userScore-text").text("Your current score: " + currentScore);
  $("#wins-text").text("Wins: " + wins);
  $("#losses-text").text("Losses: " + losses);

  // Create random number to guess
  targetNumber = Math.floor(Math.random() * 120) + 19;
  console.log("Random NUmber to guess is: " + targetNumber);
  // Add this number to page
  $("#number-to-guess").text(targetNumber);

  //Create random values from 1 -12 for the cyrstal images 
  var crystalValue = [];
  for (var i = 0; i < 4; i++) {
    var numberOptions = [Math.floor(Math.random() * 12) + 1];
    console.log("NumberOptions is: " + numberOptions);
    crystalValue.push(Math.round(numberOptions));
    console.log("Crystal Value first: " + crystalValue);
  }
  // Assign the random values to the crystal images
  $("#button1").attr("value", crystalValue[0]);
  $("#button2").attr("value", crystalValue[1]);
  $("#button3").attr("value", crystalValue[2]);
  $("#button4").attr("value", crystalValue[3]); 
  console.log("button vlalues are: " + crystalValue);  
}
setNumbers();

$(".crystal-image").on("click", function() {
  console.log("This button value is" + $(this).attr("value"));
  currentScore = currentScore + (Number($(this).attr("value")));
  $("#userScore-text").text("Your current score: " + currentScore);

  if (currentScore > targetNumber) {
    console.log("You lose");
    losses++;
    $("#losses-text").text("Losses " + losses);
    setNumbers();
  }
  else if (currentScore === targetNumber) {
    wins++;
    $("#wins-text").text("Wins " + losses);
    setNumbers();
  }

});

