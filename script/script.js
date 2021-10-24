function roll() {
  var x = Math.floor(Math.random() * 6 + 1);
  document.getElementById("number").innerHTML = "You have rolled a " + x;
  if (x === 1) {
    document.getElementById("imageDice").src = "images/1.png";
  } else if (x === 2){
    document.getElementById("imageDice").src = "images/2.png";
  } else if (x === 3){
    document.getElementById("imageDice").src = "images/3.png";
  }
  else if (x === 4){
    document.getElementById("imageDice").src = "images/4.png";
  }
  else if (x === 5){
    document.getElementById("imageDice").src = "images/5.png";
  }
  else if (x === 6){
    document.getElementById("imageDice").src = "images/6.png";
  }
}
