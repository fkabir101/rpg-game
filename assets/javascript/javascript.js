// Declare Variables
var $menu = $("#menu").html();
var setAttack = 0;

// Game start
function gameStart(){
  console.log($menu);
  $("#menu").remove();
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
$("#fire").on("click", function() {
  setAttack = 0;
});
$("#kick").on("click", function() {
  setAttack = 1;
});
$("#punch").on("click", function() {
  setAttack = 2;
});

// When attack is selected play out who wins
$("#play").on("click", function() {
  var cpuAttack = Math.floor(Math.random()*cpuChar.moves.length);
  console.log("Cpuattack: "+ cpuAttack);
  if(setAttack === 0){
    attack1(cpuAttack);
  }
  else if(setAttack ===1){
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
