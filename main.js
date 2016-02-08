$(document).ready(function() {

    //Create a variable Laps which accounts for the players moves on the racetrack
    //Create a variable trackLength which takes the players input to create the lenght of the racetrack


    var p1Laps = 0;
    var p2Laps = 0;
    var trackLength = 0;

    //Use the prompt method() to display a dialog box which asks the players for their preferred
    //tracklength between 5-20 table cells

    var startGame = function(trackLenght) {
        trackLength = prompt("Players set your preferred track length between 5 -20 lenghts");

        //Use the if statement to ensure the player input is between the specified track length
        
        if (trackLength < 5 || trackLength > 20) {
            var newtrackLength = alert("Please choose a track lenght between 5-20");
            trackLength = newtrackLength;
            gameOver();
        };


        //Use a for loop to create the racetrack length based on the players input
        
        for (var i = 1; i <= trackLength; i++) {

            //Used the JQuery .append method to insert the required number of table cells/track lenght
            // at the end of the racetrack   
            
            $("#player1_strip").append("<td>");
            $("#player2_strip").append("<td>");
        };

        //Use A keyboard EventListener to listen for a 'keyup' event on keyboard letters Q & P
        
        $(document).on('keyup', function(keyID) {

            //If the letter Q is pushed and the player1 postion is less than the length of the racetrack
            //the updatePlayer function gets called and the P1's position moves forward one cell in the table
            
            if (keyID.keyCode === 81) {

                if (p1Laps < trackLength) {
                    updatePlayer('player1_strip');
                    p1Laps++;
                }
                //Else the win function is called
                else {
                    win("Player1");
                }
            }
            //If the letter P is pushed and the player2 postion is less than the length of the racetrack
            //the updatePlayer function gets called and the P2's position moves forward one cell in the table
            
            if (keyID.keyCode === 80) {

                if (p2Laps < trackLength) {
                    updatePlayer('player2_strip');
                    p2Laps++;
                }
                //Else the win function is called
                
                else {
                    win("Player2");
                }
            }

        });

    }
    startGame();


    //The updatePlayer function uses the .next, .addClass and .removeClass methods to update the players
    // position on the racetrack and highlight which cell position the player is currently sitting on
    
    updatePlayer = function(player) {

        var activeCell = $("#" + player + " td.active");
        var moveCell = activeCell.next();

        activeCell.removeClass("active");
        moveCell.addClass("active");
    };


  $('#button').on('active')
    $('td.active').css('background-color', 'red');

 



    //The win funtion takes in the parameter winner from the EventListener and uses an alert
    // dialog box to display the winning player
    
    function win(winner) {
        alert(winner + " wins!");
        gameOver();
    }
    
    //The gameOver function is used to reload the game after a player has a won. 
    //The reload() method does the same as the reload button in a browser.
    //By default, the reload() method reloads the page from the cache, but you can force it to //
    //reload the page from the server by setting the forceGet parameter to true: location.reload(true)

    function gameOver() {
        window.location.reload(true);
    }


});
