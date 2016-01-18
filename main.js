$('document').ready(function() {
 

//Users enter race track lenght
var trackLength = prompt("Hello Racers,please choose your racetrack between: 5 and 15 lenghts");

//Check if racetrack is between 5 and 15 lenghts if not issue warning
if(trackLength<5)
{
  alert("Racetrack lenght must be between 5 to 15 please choose again");
}

else if (trackLength>15)
{
  alert("Racetrack lenght must be between 5 to 15 please choose again");
};

//Create racetrack lenght based on users input

    for (var i = 1; i <= trackLength; i++) {
      console.log(i);
      $(".racer_table").append("<td>");
    };


//add event listener for keys pressed by players

$(document).on('keyup',function updatePlayerPosition){

  function updatePlayerPosition(e) {

       if(e.keyCode === "81") {
       $(".active").addClass("blue");
        }

      //if(e.keyCode == "80") 
      else {
        $("#Player2").addClass("orange");
      }
}
}



});


