// Random number to guess is between 19 and 120
// Chrystal numbers are between 1 and 12

// Here we establish the "targetNumber" (set to 50 in this example).
//var targetNumber = 50;

// Here we set the "number-to-guess" header to match the "targetNumber".
// Eventually this will allow us to change the HTML to match the value in the JavaScript.
//$("#number-to-guess").text(targetNumber);
var currentScore = 0;
//var counter = 0;
var targetNumber =  0;
var wins = 0;
var losses = 0;

// Here we created code that selects a number between 1 and 12.
// We'll set this number at the start of the "game".
//var targetNumberText = document.getElementById("number-to-guess");
function setNumbers(){
  currentScore = 0;
  $("#userScore-text").text("Your current score is: " + currentScore);
  $("#wins-text").text("Wins: " + wins);
  $("#losses-text").text("Losses: " + losses);

  targetNumber = Math.floor(Math.random() * 120) + 19;
  //var targetNumber = 5;
  //console.log("Random NUmber to pass is: " + targetNumberText);
  console.log("Random NUmber to guess is: " + targetNumber);
  $("#number-to-guess").text(targetNumber);


  //Create random values from 1 -12 for the cyrstal images
  var crystalValue = [];
  for (var i = 0; i < 4; i++) {
    var numberOptions = [Math.round(Math.random() * 12)];
    console.log("NumberOptions is: " + numberOptions);
    crystalValue.push(Math.round(numberOptions));
    console.log("Crystal Value first: " + crystalValue);
  }
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
  $("#userScore-text").text("Current Score: " + currentScore);

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


// Create an on-click event that responds to button clicks of the crystal image.
//$(".crystal-image").on("click", function() {

    // Each time the user clicks the crystal the counter goes up by 1.
  //  counter += 10;

    //console.log("New Score: " + counter);

    // Here we created some logic to "check" if the click counter matches the targetNumber.
    // Remember, this click event will be triggered with each click.
    // With each click the counter will increase by 10 and be re-evaluated against target.
    //if (counter === targetNumber) {

        // If the numbers match we'll celebrate the user's win.
      //  console.log("You win!");
   //   }
   // else if (counter >= targetNumber) {

        // Then they are alerted with a loss.
        //console.log("You lose!!");
    //}
//console.log("random number is: " + increment);
  //});