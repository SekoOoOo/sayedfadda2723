var head3 = document.getElementById("hh3"),
    head4 = document.getElementById("ss");

head3.addEventListener("click", act);
window.addEventListener("resize", act2);

function act() {
    if (head4.style.height){
        head4.style.height = null;
      } else {
        head4.style.height = window.innerHeight - 50 + "px";
      }
}
function act2() {
    if (head4.style.height !== null){
        head4.style.height = null;
    }
}

var i,t, ss1e = document.getElementsByClassName("ss1"),
    ss2e = document.getElementsByClassName("ss2");
ss1e[0].addEventListener("mouseover", function() {
    ss2e[0].style.width = "150px";
    ss2e[0].style.opacity = 1;
    console.log("t");
});
ss1e[1].addEventListener("mouseover", function() {
    ss2e[1].style.width = "150px";
    ss2e[1].style.opacity = 1;
    console.log("t");
});
ss1e[2].addEventListener("mouseover", function() {
    ss2e[2].style.width = "150px";
    ss2e[2].style.opacity = 1;
    console.log("t");
});
ss1e[0].addEventListener("mouseout", function() {
    ss2e[0].style.width = "0";
    ss2e[0].style.opacity = 0;
    console.log("t");
});
ss1e[1].addEventListener("mouseout", function() {
    ss2e[1].style.width = "0";
    ss2e[1].style.opacity = 0;
    console.log("t");
});
ss1e[2].addEventListener("mouseout", function() {
    ss2e[2].style.width = "0";
    ss2e[2].style.opacity = 0;
    console.log("t");
});