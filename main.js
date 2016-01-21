
$(document).ready(function(){

var p1Moves = 0;
var p2Moves = 0;
var trackLength = 0;

function set () {                                                       //Function to let user set track length and build it.
    
  trackLength = prompt("P1 use 'p' to move. \nP2 use 'q' to move.", 
                        "Set a track length. MAX 30");
    
  if (trackLength > 30) {
      trackLength = 30;
  }

  for (var i = 1; i <= trackLength; i++) {
     
      $("#player1_strip").append("<td>");
      $("#player2_strip").append("<td>");
  };
}

set();
//Keyup Event Listener
$(document).on('keyup', function(keyID) {

 if(keyID.keyCode === 80){ 
   if(p1Moves<trackLength) {
      updatePlayer('player1_strip');        
      p1Moves++;
     } 
      else {
      win("P1");
     }
   }

 else if(keyID.keyCode === 81) {
   if(p2Moves<trackLength) {
      updatePlayer('player2_strip');
      p2Moves++;
     }
      else {
      win("P2");
     } 
 }  
});

var updatePlayer = function(player) {  

 var activeCell = $("#" + player + "td.active");
 var moveCell = activeCell.next();
  
 activeCell.removeClass("active");
 moveCell.addClass("active");
};

function win(winner) {
  alert(winner+" wins");
 

$("#player1_strip td").removeClass("active");   
$("#player2_strip td").removeClass("active");

p1Moves = 0;
p2Moves = 0;
  
$("#player1_strip td:nth-child(2)").addClass("active");
$("#player2_strip td:nth-child(2)").addClass("active");

 
  trackLength = 0; 
  
    location.reload();                          

}
});                                              
  