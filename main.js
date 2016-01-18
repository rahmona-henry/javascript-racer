$('document').ready(function() {
//Players enter racetrack length

var trackLength = prompt("Hello Racers,please choose your racetrack length between:5 and 15 lenghts");

//Check if racetrack is between 5 and 15 lenghts if not issue warning
if(trackLength<5)
{
  alert("Racetrack lenght must be between 5 to 15 please choose again");
}

else if (trackLength>15)
{
  alert("Racetrack lenght must be between 5 to 15 please choose again");
};

//Create racetrack length based on players input
    for (var i = 1; i <= trackLength; i++) {
      console.log(i);
      $(".track").append("<td>");
    };

//Add EventListener that listens for users pushing their player keys and makes their cell active
$(document).on("keyup","<td>",updatePlayerPosition)

  function updatePlayerPosition(e) {
       if(e.keyCode == "81") {
       $("<td>").addClass("black");
     }
      else if(e.keyCode == "80") {
      $("<td>").addClass("black");
    }       


});