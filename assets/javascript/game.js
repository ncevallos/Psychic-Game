
      var wins = 0;
      var losses = 0;
      var guessesLeft = 10;
      var wrongGuesses = 0;
      var pcGuess = [Math.floor(Math.random() * (122-97)) + 97]; //First I generate a random number, the limits are those that correspond with ASCII lowercase characters.
      var pcCharGuess = String.fromCharCode(pcGuess);
      //Then using the random number I create a character variable that corresponds to the random number's ASCII value
      var pcCharGuessUC = String.fromCharCode(pcGuess-32);
      //There was no mention of how to handle the difference between lowercase and uppercase characters, so this is the uppercase variable for the corresponding character, and the if will check for both a match of uppercase or lowercase characters.

      function createRandomLetter(){
      pcGuess = [Math.floor(Math.random() * (122-97)) + 97];
      pcCharGuess = String.fromCharCode(pcGuess);
      pcCharGuessUC = String.fromCharCode(pcGuess-32);
      guessesLeft = 10;
      //I created a function that also generates a random letter, this function gets called anytime a player wins or loses the game. Its intention is to reset the random letter's value. 
    }

    document.onkeyup = function(event) {

      var userGuess = event.key;
      var targetDiv = document.getElementById("listOfUserGuesses");

   
      if(guessesLeft >0){
        //As long as the user has guesses left it will enter this block of code which determines if the key the user pressed is equal to the guess.
        if(userGuess === pcCharGuess || userGuess === pcCharGuessUC){
          wins++;
          guessesLeft--;


          var newDiv = document.createElement("div");
           newDiv.innerHTML = userGuess;
           targetDiv.appendChild(newDiv);
           newDiv.setAttribute("class", "incorrectGuesses");
           //appends each letter pressed into a new div

           createRandomLetter(); //call to create a new letter
         }
        else{
          guessesLeft--;

          var newDiv = document.createElement("div");
           newDiv.innerHTML = userGuess;
           targetDiv.appendChild(newDiv);
           newDiv.setAttribute("class", "incorrectGuesses");
        }
    }
    else{
      //this code is reached if the user ran out of guesses.
        alert("You lost!");
          createRandomLetter();
          losses++;
    }
        var html =
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses Left: " + guessesLeft + "</p>";

        // The html that displays the losses, wins, and guesses left.
        document.querySelector("#gameText").innerHTML = html;
    };