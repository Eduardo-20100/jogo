function addUser(){

    player1 = document.getElementById("player1NameInput").value;
//pegando os valores de player1

    player2 = document.getElementById("player2NameInput").value; 
//pegando os valores de player2

    localStorage.setItem("player1", player1);
//armazenaa os valores de player1

    localStorage.setItem("player2", player2);
//armazena os valores de player2

window.location = "page2.html"
}