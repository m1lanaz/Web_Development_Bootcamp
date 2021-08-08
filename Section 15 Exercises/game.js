var buttonColours = ["red","blue","green","yellow"];

var gamePattern = [];

var userClickedPattern = [];

function playSound(name){
    new Audio("sounds/" + name + ".mp3").play();
}

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
    playSound(userChosenColor);
    //var currentClickedColor = new Audio("sounds/" + userChosenColor + ".mp3");
    //currentClickedColor.play();
    userClickedPattern.push(userChosenColor);
});

