
window.onload = function(){


  /// Global Variables ///

  var wordsAvailable = ["CHEDDAR", "AMERICAN", "MUENSTER", "SWISS", "BRIE",
  "GOUDA", "KASAR", "FETA", "GOAT", "QUESO", "COTIJA", "PARMESAN",
  "MOZZARELLA"];
  var lives = 6;
  var secretWord = "";
  var placeholders = [];
  var ourWord = [];
  var holderArray = [];
  var guess = "";

  /// Create Random Words///
  
    secretWord = wordsAvailable[Math.floor(Math.random() * wordsAvailable.length)];
    for (var i = 0; i < secretWord.length; i++) {
      ourWord.push(secretWord[i]);
      placeholders.push("_ "); }
      $(".secret-word").append(placeholders);
    

  /// Letter Bank Click///

    var clickLetter = $(".letter-bank .btn").click(function(){
            $(this).hide();
            var guess = this.innerHTML; 
            for (var k = 0; k < secretWord.length; k++) { 
              if (guess === secretWord[k]) {
                placeholders[k] = guess;
                lives += 1; } }
              $(".secret-word").text(placeholders.join(" "));
    });


  /// Lives Left ///
     
        $(".letter-bank .btn").click(function() { 
            lives -= 1;
            if (lives === 0) {
              alert("Game Over! I guess you don't really know your cheeses :(");
              window.location.reload(true); 
            };
            $("#liveCount").text(lives);
          });

        // $(".letter-bank .btn").click(function() { 
        //     if (placeholders.length === guess.length) {
        //       alert("You won!");
        //       window.location.reload(true); 
        //     };
        //   });

  /// Hang Mouse ///


};