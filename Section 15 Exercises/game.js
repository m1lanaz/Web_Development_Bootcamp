var buttonColours = ["red","blue","green","yellow"];

var gamePattern = [];
var userClickedPattern = [];

var level = 0;

var gameStarted = false;

$(document).keypress(function() {
    if (!gameStarted) {
  
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });

  $(".btn").click(function(event){
    var userChosenColor = $(this).attr("id");
    playSound(userChosenColor);
    animatePress("." + userChosenColor);
    userClickedPattern.push(userChosenColor);

    checkAnswer(userClickedPattern.length-1);
});

function nextSequence(){
    userClickedPattern = []
    var randomNumber = Math.floor(Math.random() * 4);
    var randomchosenColour = buttonColours[randomNumber];
    gamePattern.push(randomchosenColour);
 
    $("#" + randomchosenColour).fadeOut(100).fadeIn(100);
    playSound(randomchosenColour);

    level+=1;
    $("#level-title").text("Level " + level);
}


function playSound(name){
    new Audio("sounds/" + name + ".mp3").play();
};

function animatePress(currentColor){
    $(currentColor).addClass("pressed");
    setTimeout(function(){
        $(currentColor).removeClass("pressed");
    }, 50);

}

function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){

        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}