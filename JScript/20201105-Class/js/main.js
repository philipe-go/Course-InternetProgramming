var myMSG = document.getElementById("message");

function showMSG(){
    myMSG.className = "show";
}

setTimeout(showMSG, 5000);

var colorFullBox = document.getElementById("color-changer");

var colors = ["red","blue","green","purple"];
var counter = 0;

function changeColor()
{
    if (counter >= colors.length) counter = 0;
    colorFullBox.style.backgroundColor = colors[counter];
    counter++;
}

var myTimer = setInterval(changeColor,3000);

colorFullBox.onclick = function(){
    clearInterval(myTimer);
    colorFullBox.textContent = "Timer Stopped!";
    colorFullBox.style.textAlign = "center";
}