// create character objects
var ryu = {
  name : "Ryu",
  health : 150,
  moves : [15, 5, 10],
  block : 2
};
var ken = {
  name : "Ken",
  health : 125,
  moves : [10, 5, 15],
  block : 3
};
var chun = {
  name : "Chun Li",
  health : 100,
  moves : [5, 15, 5],
  block : 4
};

var playerChar = null;
var cpuChar = null;

// Sets player and cpu character when button is clicked
$("#ryu").on("click", function() {
  if(playerChar === null){
    playerChar = ryu;
    alert(`Player: ${playerChar.name}`);
  }
  else if(cpuChar === null){
    cpuChar = ryu;
    alert(`Computer: ${cpuChar.name}`);
  }
  else
    alert("Both Characters set");
});
$("#ken").on("click", function() {
  if(playerChar === null){
    playerChar = ken;
    alert(`Player: ${playerChar.name}`);
  }
  else if(cpuChar === null){
    cpuChar = ken;
    alert(`Computer: ${cpuChar.name}`);
  }
  else
    alert("Both Characters set");
});
$("#chun").on("click", function() {
  if(playerChar === null){
    playerChar = chun;
    alert(`Player: ${playerChar.name}`);
  }
  else if(cpuChar === null){
    cpuChar = chun;
    alert(`Computer: ${cpuChar.name}`);
  }
  else
    alert("Both Characters set");
});