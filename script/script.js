function roll() {
    var x = Math.floor((Math.random() * 6) + 1);
    document.getElementById("number").innerHTML = "You have rolled a "+x;
  }