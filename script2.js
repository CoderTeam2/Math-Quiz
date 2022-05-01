var player1 = localStorage.getItem("Player1");
var player2 = localStorage.getItem("Player2");

var question_turn = player1;
var answer_turn = player2;

var score1 = 0;
var score2 = 0;

document.getElementById("player1N").innerHTML = player1;
document.getElementById("player2N").innerHTML = player2;

document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1;
document.getElementById("player_question").innerHTML = "Question Turn - " + player2;

document.getElementById("player1S").innerHTML = " : "+score1;
document.getElementById("player2S").innerHTML = " : "+score2;

var answer = 0;
function send(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    answer = parseInt(num1) * parseInt(num2);
    var qNum = "<h4> Q. "+num1+" X "+num2+"</h4>";
    var input = "<br>Answer : <input type='number' id='answer'";
    var button = "<br><br><br><button class='btn' onclick='check()'>Check</button>";
    var row = qNum + input + button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("num1").innerHTML = "";
    document.getElementById("num2").innerHTML = "";
}

function check(){
    var user_answer = document.getElementById("answer").value;
    if (user_answer == answer){
        if (answer_turn == player1){
            score1++;
            document.getElementById("player1S").innerHTML = ' : '+score1;
        }else{
            score2++;
            document.getElementById("player2S").innerHTML = " : "+score2;
        }
        if (answer_turn == player1){
            answer_turn = player2;
            document.getElementById("player_answer").innerHTML = "Answer Turn - "+player2;
            question_turn = player1;
            document.getElementById("player_question").innerHTML = "Question Turn - "+player1;
        }else{
            answer_turn = player1;
            document.getElementById("player_answer").innerHTML = "Answer Turn - "+player1;
            question_turn = player2;
            document.getElementById("player_question").innerHTML = "Question Turn - "+player2;
        }
    }
    document.getElementById("output").innerHTML = "";
}