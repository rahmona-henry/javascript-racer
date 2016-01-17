//To prevent any JQuery running before the document has finished loading
$(document).ready(function(){



//Users enter race track lenght
var trackLength = prompt("Hello Racers,please choose your racetrack between: 5 and 15 lenghts " );
//Check if racetrack must be between 5 and 15 lenghts
if(trackLength<5)
{
  alert("Racetrack lenght must be between 5 to 15 please choose again");
}

else if (trackLength>15)
{
  alert("Racetrack lenght must be between 5 to 15 please choose again");
};

//Create racetrack based on users input

    for (i = 1; i <= trackLength; i++) {
      console.log(i);
      $(".track").append("<td>");
    };


});