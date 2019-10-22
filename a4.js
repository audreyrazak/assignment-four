/*
hua's example
var a = document.getElementById("A");
        a.addEventListener("click", a_OnClick);

        function a_OnClick() {
            var body = document.getElementById("body");
            body.style.backgroundColor = "#45823e";
        }
*/
var o1 = document.getElementById("O1");
o1.addEventListener("mouseover", ChangeO1Pos);

var o2 = document.getElementById("O2");
o2.addEventListener("mouseover", ChangeO2Pos);

function ChangeO1Pos() {
  o1.style.left = "10px";
}
function ChangeO2Pos() {
  o2.style.left = "-10px";
}
var frame = document.getElementById("frame");
var rand = Math.random();
console.log(rand);

RandomFrameColor();
function RandomFrameColor() {
  if (rand < 0.5) {
    frame.style.backgroundColor = "#ff49d1";
  }
  else {
    frame.style.backgroundColor = "#ff11bc";
  }
}
