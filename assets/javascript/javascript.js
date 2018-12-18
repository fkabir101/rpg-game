var $menu = $("#menu").html();
// Game start
function gameStart(){
  console.log($menu);
}

// Start game when button is pressed
$("#start").on("click", function() {
  if(playerChar !== null && cpuChar !== null){
    gameStart();
  }
  else
    alert("Slect two characters");
});
