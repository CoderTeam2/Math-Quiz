function addUsers(){
    localStorage.setItem("Player1", document.getElementById("player1").value);
    localStorage.setItem("Player2", document.getElementById("player2").value);
    window.location = "index2.html";
}