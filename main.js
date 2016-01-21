$(document).ready(function(){
 
//Create a variable Laps which accounts for the players moves on the racetrack
//Create a variable trackLength which takes the players input to create the lenght of the racetrack

var p1Laps = 0;
var p2Laps = 0;
var trackLength = 0;

//Use the prompt method() to display a dialog box which asks the players for their preferred
//tracklength between 5-15 table cells

trackLength = prompt("Players set your preferred track length between 5 -15 lenghts");
  
 if (trackLength < 5) {
    alert("Warning! Please ensure track length is between 5-15 lenghts")
  };

  else if (trackLength > 15) {
    alert(" Warning! Please ensure track length is between 5-15 lenghts")
  };

  else (trackLength !== NaN) {
     alert("Please make sure you enter a number not a letter")
};



for (var i = 1; i <= trackLength; i++) {
     
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
alert (winner+" wins!");                    
 

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