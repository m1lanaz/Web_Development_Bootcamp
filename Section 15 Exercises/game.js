var buttonColours = ["red","blue","green","yellow"];

var gamePattern = [];

var userClickedPattern = [];

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    randomchosenColour = buttonColours[randomNumber];
    gamePattern.push(randomchosenColour);
 
    $("#" + randomchosenColour).fadeOut(100).fadeIn(100);
    var currentColor = new Audio("sounds/" + randomchosenColour + ".mp3")
    currentColor.play();
}

$(".btn").click(function(event){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
});

