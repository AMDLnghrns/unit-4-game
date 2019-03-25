
// Add in wins counter
// Add in loses counter
//if win, reset counter

//Array of random values to assign to the crystals
var randomValue = []
for (var i = 0, t=12; i < t; i++) {
    randomValue.push(Math.floor(Math.random() * t+1))
}

//random number to guess
var targetNumber = 12 + Math.floor(Math.random()*108);
//add targetNumber to "number-to-guess" HTML id
$("#number-to-guess").text(targetNumber);

//wins counter at 0
var wins = 0;
$("#wins").text(wins);
console.log("Wins: " + wins);

//losses counter at 0
var losses = 0;
$("#losses").text(losses);
console.log("Losses: " + losses);

//Counter for player score as the game is played
var counter = 0;
$("#counter").text(counter);

// Now for the hard part. Creating multiple crystals each with their own unique number value.

// An array of random numbers that will be assigned to the crystals.
var numberOptions = [randomValue[0], randomValue[1], randomValue[2], randomValue[3]];

    for(var i = 0; i < numberOptions.length;i++) {
        console.log("Crystal: " + numberOptions[i]);
    }


// Next we create a for loop to create crystals for every numberOption.
for (var i = 0; i < numberOptions.length; i++) {

  // For each iteration, we will create an imageCrystal
  var imageCrystal = $("<img>");

  // First each crystal will be given the class ".crystal-image".
  // This will allow the CSS to take effect.
  imageCrystal.addClass("crystal-image");

  // Each imageCrystal will be given a src link to the crystal image
  imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

  // Each imageCrystal will be given a data attribute called data-crystalValue.
  // This data attribute will be set equal to the array value.
  imageCrystal.attr("data-crystalvalue", numberOptions[i]);

  // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  $("#crystals").append(imageCrystal);
}

// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal-image").on("click", function() {

  // Determining the crystal's value requires us to extract the value from the data attribute.
  // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
  counter += crystalValue;

  // All of the same game win-lose logic applies. So the rest remains unchanged.
//   alert("New score: " + counter);
  console.log("Counter: " + counter);

  if (counter === targetNumber) {
    // alert("You win!");
    wins++;
    counter = 0;
    console.log("Wins: " + wins);
  }

  else if (counter >= targetNumber) {
    // alert("You lose!!");
    losses++;
    console.log("Losses: " + losses);
    counter = 0;
  }

});

