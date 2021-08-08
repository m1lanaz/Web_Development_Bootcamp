var buttonColours = ["red","blue","green","yellow"];

var gamePattern = [];

var userClickedPattern = [];

function playSound(name){
    new Audio("sounds/" + name + ".mp3").play();
};

function animatePress(currentColor){
    $(currentColor).addClass("pressed");
    setTimeout(function(){
        $(currentColor).removeClass("pressed");
    }, 50);

}

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    randomchosenColour = buttonColours[randomNumber];
    gamePattern.push(randomchosenColour);
 
    $("#" + randomchosenColour).fadeOut(100).fadeIn(100);
    playSound(randomchosenColour);
}

$(".btn").click(function(event){
    var userChosenColor = $(this).attr("id");
    playSound(userChosenColor);
    animatePress("." + userChosenColor);
    userClickedPattern.push(userChosenColor);
});

