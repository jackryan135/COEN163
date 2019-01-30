function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginRight = "250px";
  document.getElementById("main").style.marginLeft = "-250px";
  document.getElementById("hamburger").style.display = "none";
  document.getElementById("exit").style.display = "block";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginRight= "0";
  document.getElementById("main").style.marginLeft = "0px";
  document.getElementById("hamburger").style.display = "block";
  document.getElementById("exit").style.display = "none";
}
