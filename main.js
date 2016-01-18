$( document ).ready(function() {
    console.log( "ready!" );

//Users enter race track lenght
var trackLength = prompt("Hello Racers,please choose your racetrack between: 5 and 15 lenghts " );

//Check if racetrack is between 5 and 15 lenghts if not issue warning
if(trackLength<5)
{
  alert("Racetrack lenght must be between 5 to 15 please choose again");
}

else if (trackLength>15)
{
  alert("Racetrack lenght must be between 5 to 15 please choose again");
};

//Create racetrack length based on users input

    for (var i = 1; i <= trackLength; i++) {
      console.log(i);
      $(".track").append("<td>");
    };

//add event listener for key pressed by users
 $(document).on('keyup', updatePlayerPosition)

  function updatePlayerPosition() {
       if(e.keyCode == "81") {
       $("#Player1").addClass("blue");
     }

      //if(e.keyCode == "80") 
      else {
        $("#Player2").addClass("orange");
      }

}
 


});


