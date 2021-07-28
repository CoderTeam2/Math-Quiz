var player1 = localStorage.getItem("Player1");
var player2 = localStorage.getItem("Player2");

var score1 = 0;
var score2 = 0;

document.getElementById("player1N").innerHTML = player1;
document.getElementById("player2N").innerHTML = player2;

document.getElementById("player1S").innerHTML = " : "+score1;
document.getElementById("player2S").innerHTML = " : "+score2;

function send(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var answer = parseInt(num1) * parseInt(num2);
    var qNum = "<h4> Q. "+num1+"X"+num2+"</h4>";
    var input = "<br>Answer : <input type='number' id='answer'";
    var button = "<br><br><br><button class='btn' onclick='check()'>Check</button>";
    var row = qNum + input + button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("num1").innerHTML = "";
    document.getElementById("num2").innerHTML = "";
}
function check(){
    
}