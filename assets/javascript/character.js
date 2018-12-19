// create character objects
var andy = {
  name : "andy",
  health : 100,
  maxHealth: 100,
  moves : [15, 10, 10],
  block : 2
};
var max = {
  name : "max",
  health : 150,
  maxHealth: 150,
  moves : [5, 15, 5],
  block : 3
};
var sam = {
  name : "sam",
  health : 125,
  maxHealth: 125,
  moves : [5, 10, 15],
  block : 4
};

var playerChar = null;
var cpuChar = null;

// Sets player and cpu character when button is clicked
$("#andy").on("click", function() {
  if(playerChar === null){
    playerChar = andy;
    alert(`Player: ${playerChar.name}`);
  }
  else if(cpuChar === null){
    cpuChar = andy;
    alert(`Computer: ${cpuChar.name}`);
  }
  else
    alert("Both Characters set");
});
$("#max").on("click", function() {
  if(playerChar === null){
    playerChar = max;
    alert(`Player: ${playerChar.name}`);
  }
  else if(cpuChar === null){
    cpuChar = max;
    alert(`Computer: ${cpuChar.name}`);
  }
  else
    alert("Both Characters set");
});
$("#sam").on("click", function() {
  if(playerChar === null){
    playerChar = sam;
    alert(`Player: ${playerChar.name}`);
  }
  else if(cpuChar === null){
    cpuChar = sam;
    alert(`Computer: ${cpuChar.name}`);
  }
  else
    alert("Both Characters set");
});