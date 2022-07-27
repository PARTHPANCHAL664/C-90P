function add_user() 
{
    player1 = document.getElementById("Text_input1").value;
    player2 = document.getElementById("Text_input2").value;

    localStorage.setItem("player1", player1);
    localStorage.setItem("player2", player2);

    window.location = ("quiz_game_page.html");
}