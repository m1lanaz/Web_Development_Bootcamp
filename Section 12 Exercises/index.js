var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var leftImg = document.querySelector(".img1");
var imgChange1 = "images/dice" + randomNumber1 + ".png";
leftImg.setAttribute("src", imgChange1);

var rightImg = document.querySelector(".img2");
var imgChange2 = "images/dice" + randomNumber2 + ".png";
rightImg.setAttribute("src", imgChange2);

var h1Element = document.querySelector("h1");
if (randomNumber1 > randomNumber2){
    h1Element.textContent = "🚩 Player 1 Wins! ";
}else if(randomNumber1 < randomNumber2){
    h1Element.textContent = "Player 2 Wins! 🚩";
} else{
    h1Element.textContent = "Draw!"
}