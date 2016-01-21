$(document).ready(function(){

var p1Laps = 0;
var p2Laps = 0;
var trackLength = 7;

//function set () {                                                      
trackLength = prompt("Players set the track length between 5 -15");
    
  //if (trackLength > 30) {
      //trackLength = 30;
 //}

for (var i = 0; i <= trackLength; i++) {
     
      $("#player1_strip").append("<td>");
      $("#player2_strip").append("<td>");
  };
//}

//set();
$(document).on('keyup', function(keyID) {     

  if (keyID.keyCode === 80){  
if(p1Laps<trackLength) {                
 updatePlayer('player1_strip');          
p1Laps++;                              
}
else {
win("Player1");                              
} 
}
else if (keyID.keyCode === 81) {
if (p2Laps<trackLength) {
updatePlayer('player2_strip');
p2Laps++;
}
else {
win("Player2");
} 
}   
});  

updatePlayer = function(player) {               

  var activeCell = $("#" + player + " td.active");
  var moveCell = activeCell.next();
   
  activeCell.removeClass("active");
  moveCell.addClass("active");
};

function win(winner) {
alert (winner+"wins!");                    
 

//$("#player1_strip td").removeClass("active");   
//$("#player2_strip td").removeClass("active");

//p1Laps = 0;
//p2Laps = 0;
  
//$("#player1_strip td:nth-child(2)").addClass("active");
//$("#player2_strip td:nth-child(2)").addClass("active");
 
//trackLength = 0; 
//location.reload();                          
}                                              
                                                                                               
});