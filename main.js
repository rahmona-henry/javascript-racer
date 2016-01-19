$('document').ready(function() {

var p1Moves = 0;
var p2Moves = 0;
var tracklenght =7;




    




//Keyup event
$(document).on("keyup", function(keyID) {
 if (keyID.keyCode === 80){ 
   if (p1Moves<trackLength - 1) {
     updatePlayer("player1_strip");        
     p1Moves++;
     }else {
      win("P1")
   };

 }else if (keyID.keyCode === 81) {
   if (p2Moves<trackLength - 1) {
     updatePlayer("player2_strip");
     p2Moves++;
     }else {
     win("P2")
   }; 
 };  
});

function updatePlayer(player) {     
 var activeCell = $("#" + player + "td.active");
 var moveCell = activeCell.next();
  
 activeCell.removeClass("active");
 moveCell.addClass("active");
};

var win = function (winner){
  alert(winner + "wins")
};

});                                              
      