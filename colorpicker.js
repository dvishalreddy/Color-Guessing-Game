var numOfColors=6;
var colors=generateRandomColors(numOfColors);
var square = document.getElementsByClassName("square");
var colorPicked=pickColor();
var display=document.querySelector("h2");
var message=document.getElementById("message");
var end = String(colorPicked).indexOf(")");
display.textContent="RGB"+colorPicked.slice(3,end+1);
var btnEasy=document.getElementById("btnEasy");
var btnHard=document.getElementById("btnHard");
var resetButton = document.getElementById("reset");
btnEasy.addEventListener("click",function(){
    document.getElementById("header").style.backgroundColor="black";
    resetButton.textContent="New Colors";
    message.textContent="";
    numOfColors=3;
    colors=generateRandomColors(numOfColors);
    colorPicked=pickColor();
    end = String(colorPicked).indexOf(")");
    display.textContent="RGB"+colorPicked.slice(3,end+1);
    for(i=0;i<square.length;i++){
        if(colors[i]){
            square[i].style.backgroundColor=colors[i];
        }
        else{
            square[i].style.display="none";
        }
    }
})
btnHard.addEventListener("click",function(){
    document.getElementById("header").style.backgroundColor="black";
    resetButton.textContent="New Colors";
    message.textContent="";
    numOfColors=6;
    colors=generateRandomColors(numOfColors);
    colorPicked=pickColor();
    end = String(colorPicked).indexOf(")");
    display.textContent="RGB"+colorPicked.slice(3,end+1);
    for(i=0;i<square.length;i++){
        square[i].style.backgroundColor=colors[i];
        square[i].style.display="block";
    }
})
resetButton.addEventListener("click",function(){
    colors=generateRandomColors(numOfColors);
    colorPicked=pickColor();
    end = String(colorPicked).indexOf(")");
    display.textContent="RGB"+colorPicked.slice(3,end+1);
    for(i=0;i<square.length;i++){
        square[i].style.backgroundColor=colors[i];
    }
    document.getElementById("header").style.backgroundColor="rgb(0, 0, 0)";
    message.textContent="";
})
for(var i=0;i<square.length;i++){
    square[i].style.backgroundColor=colors[i];
    square[i].addEventListener("click",function(){
        var temp =this.style.backgroundColor;
        if(temp==colorPicked){
            message.textContent="You guessed it right";
            for(var j=0;j<square.length;j++){
                square[j].style.backgroundColor=colorPicked;
            }
            document.getElementById("header").style.backgroundColor=colorPicked;
            resetButton.textContent="Play Again?";
            resetButton.addEventListener("click",function(){
                resetButton.textContent="New Colors";
            })
        }
        else{
            this.style.backgroundColor="rgb(0, 0, 0)";
            message.textContent="Try Again"
        }
    })
}
function pickColor(){
    var random =Math.floor(Math.random()*colors.length);
    return colors[random];
}
function generateRandomColors(num){
    var arr = [];
    for(var i=0;i<num;i++){
      arr.push(randomColor());
    }
    return arr;
}
function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
