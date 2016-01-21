$(document).ready(function(){

var p1Moves = 0;
var p2Moves = 0;
var trackLength = 7;

//function set () {                                                      
 // trackLength = prompt("P1 use 'p' to move. \nP2 use 'q' to move.", 
                        //"Set a track length. MAX 30");
    
  //if (trackLength > 30) {
      //trackLength = 30;
 //}

  //for (var i = 1; i <= trackLength; i++) {
     
      //$("#player1_strip").append("<td>");
      //$("#player2_strip").append("<td>");
  //};
//}

//set();
$(document).on('keyup', function(keyID) {     

  if (keyID.keyCode === 80){                 
    if (p1Moves<trackLength) {                
      updatePlayer('player1_strip');          
      p1Moves++;                              
    }
    else {
      win("P1");                              
    } 
  }
  else if (keyID.keyCode === 81) {
    if (p2Moves<trackLength) {
      updatePlayer('player2_strip');
      p2Moves++;
    }
    else {
      win("P2");
    } 
  }   
});  

function updatePlayer (player) {               //Updates player position by adding and removing active class to table cells.

  var activeCell = $("#" + player + " td.active");
  var moveCell = activeCell.next();
   
  activeCell.removeClass("active");
  moveCell.addClass("active");

};

function win(winner) {
  alert (winner+" has won");                    //Lets user know who won
 

  $("#player1_strip td").removeClass("active");   // and the rest resets the game. (Probably not needed as I reload the page)
  $("#player2_strip td").removeClass("active");

  p1Moves = 0;
  p2Moves = 0;
  
  $("#player1_strip td:nth-child(2)").addClass("active");
  $("#player2_strip td:nth-child(2)").addClass("active");
 
  trackLength = 0; 
  
    location.reload();                          //NOTE; I have made the page reload after a player wins because I could not figure out
                                                //how to delete the tds from my table, which meant a user either had to keep the same 
}                                               //length track or my code would add their track choice to what was already there, and it 
                                                //would get longer and longer. I wanted the user to be able to choose the track length every time
                                                // so went with a page reload, which is probably not the 'proper' way to do it, but the quickest.   
});