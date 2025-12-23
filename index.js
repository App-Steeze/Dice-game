var randomNumber1 = Math.random()*6;
console.log(randomNumber1);
var roll1 = Math.floor(randomNumber1+1);
var dice1 = "images/dice" + roll1 + ".png";
document.querySelector(".img1").setAttribute("src", dice1);


var randomNumber2 =Math.random()*6;
var roll2 = Math.floor(randomNumber2+1);
var dice2 = "images/dice" + roll2 + ".png";
document.querySelector(".img2").setAttribute("src", dice2);


if(roll1 > roll2){
    document.querySelector("h1").innerHTML= "😎Player1 Won"
}else if(roll2 > roll1){
    document.querySelector("h1").innerHTML= "😎Player2 Won"
}else{
    document.querySelector("h1").innerHTML= "🚩Draw"
}

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(){
    document.querySelector("button").textContent="Reload to start playing";
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");
    document.querySelector("h1").innerHTML= "🔥Start the throw";
}


