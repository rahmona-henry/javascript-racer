$(document).ready(function(){
 
//Create a variable Laps which accounts for the players moves on the racetrack
//Create a variable trackLength which takes the players input to create the lenght of the racetrack


var intialise = function(firsttime)
var p1Laps = 0;
var p2Laps = 0;
var trackLength = 0;

//Use the prompt method() to display a dialog box which asks the players for their preferred
//tracklength between 5-15 table cells

trackLength = prompt("Players set your preferred track length between 5 -15 lenghts");

//Use if statements to ensure the player input is between the specified track lenght
 if (trackLength < 5) {
    alert("Warning! Please ensure track length is between 5-15 lenghts")
  };

   if (trackLength > 15) {
    alert(" Warning! Please ensure track length is between 5-15 lenghts")
  };

   //if(trackLength !== NaN) {
     //alert("Please make sure you enter a number not a letter")
//};

//Use a for loop to create the racetrack length based on the players input
for (var i = 1; i <= trackLength; i++) {

//Used the JQuery .append method to insert the required number of table cells/track lenght
// at the end of the racetrack   
      $("#player1_strip").append("<td>");
      $("#player2_strip").append("<td>");
  };
var intialise = function()
//Use A keyboard EventListener to listen for a 'keyup' event on keyboard letters Q & P
$(document).on('keyup', function(keyID) {     

//If the letter Q is pushed and the player1 postion is less than the length of the racetrack
//the updatePlayer function gets called and the P1's position moves forward one cell in the table
  if(keyID.keyCode === 81){

     if(p1Laps<trackLength) {                
     updatePlayer('player1_strip');          
     p1Laps++;                              
     }
//Else the win function is called
   else {
     win("Player1");                              
  } 
}
//If the letter P is pushed and P2'S postion is less than the length of the racetrack
//the updatePlayer function gets called and the P2's position moves forward one cell in the table
  if(keyID.keyCode === 80) {

      if (p2Laps<trackLength) {
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
intialise();




//The updatePlayer function uses the .next, .addClass and .removeClass methods to update the players
// position on the racetrack and highlight which cell position the player is currently sitting on
updatePlayer = function(player) {               

  var activeCell = $("#" + player + " td.active");
  var moveCell = activeCell.next();
   
  activeCell.removeClass("active");
  moveCell.addClass("active");
};

//The win funtion takes in the parameter winner from the EventListener and uses an alert
// dialog box to display the winning player 
function win(winner) {
 alert(winner+" wins!");                    
 
}  

 function onGameOver(){

 if (p1Laps===trackLength);
 {
  intialise();
 }
}
//$("#player1_strip td").removeClass("active");   
//$("#player2_strip td").removeClass("active");

//p1Laps = 0;
//p2Laps = 0;
  
//$("#player1_strip td:nth-child(2)").addClass("active");
//$("#player2_strip td:nth-child(2)").addClass("active");
 
//trackLength = 0; 
//location.reload();                          
                                            
                                                                                               
});