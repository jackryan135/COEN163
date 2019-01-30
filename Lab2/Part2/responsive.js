function myFunction() {
  var x = document.getElementById("myTopnav");
  var y = document.getElementById("hamburger");
  if (x.className === "topnav") {
    x.className += " responsive";
    y.src = "AssetsLab2/Button-02.png";
  } else {
    x.className = "topnav";
    y.src = "AssetsLab2/Button-01.png";
  }
}
