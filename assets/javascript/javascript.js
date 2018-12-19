// Declare Variables to hold html elements
var setAttack = 0;
var gameActive = false;

// Close game interface on load
openMenu();

// Function to removes menu and adds game interface
function gameStart(){
  $("#menu").hide();
  $("#game").show();
  $("#player-health").text(playerChar.health + " / " + playerChar.maxHealth);
  $("#computer-health").text(cpuChar.health + " / " + cpuChar.maxHealth);
  gameActive = true;
}

// Removes game interface and opens menu
function openMenu(){
  $("#game").hide();
  if(gameActive === true)
    $("#menu").show();
}


// Start game when button is pressed and 2 characters selected
$("#start").on("click", function() {
  if(playerChar !== null && cpuChar !== null){
    gameStart();
  }
  else
    alert("Slect two characters");
});

// Create a function to set players attack depending on players button press
$(".attack").on("click", function() {
  setAttack = parseInt(($(this).attr("value")));
  alert(setAttack);
});

// When attack is selected play out who wins
$("#play").on("click", function() { 
  alert("working");
  var cpuAttack = Math.floor(Math.random()*cpuChar.moves.length);
  console.log("Cpuattack: "+ cpuAttack);
  if(setAttack === 0){
    attack1(cpuAttack);
  }
  else if(setAttack === 1){
    attack2(cpuAttack);
  }
  else{
    attack3(cpuAttack);
  }
});

// create a function for all the attacks against computers attacks
function attack1(cpu){
  switch(cpu) {
    case 0:
      alert("tie");
      break;
    case 1:
      alert("cpu wins");
      playerChar.hp = playerChar.hp - cpuChar.moves[1];
      break;
    case 2:
      alert("player wins")
      cpuChar.hp = cpuChar.hp - playerChar.moves[0];
      break;
  }
}
function attack2(cpu){
  switch(cpu) {
    case 0:
      alert("player wins");
      cpuChar.hp = cpuChar.hp - playerChar.moves[1];
      break;
    case 1:
      alert("tie");
      break;
    case 2:
      alert("cpu wins")
      playerChar.hp = playerChar.hp - cpuChar.moves[2];
      break;
  }
}
function attack3(cpu){
  switch(cpu) {
    case 0:
      alert("cpu wins");
      playerChar.hp = playerChar.hp - cpuChar.moves[0];
      break;
    case 1:
      alert("player wins");
      cpuChar.hp = cpuChar.hp - playerChar.moves[3];
      break;
    case 2:
      alert("tie")
      break;
  }
}
