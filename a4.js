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

function ChangeO1Pos {
  o1.style.left = "220px";
}

function ChangeO2Pos {
  o2.style.left = "340px";
}
RandomFrameColor();
function RandomFrameColor() {
  var frame = document.getElementById("frame");
  var random = Math.random();
  console.log(random);
  if (random < 0.25) {
    frame.style.backgroundColor = "#ff49d1";
  } else if (random < 0.5) {
    frame.style.backgroundColor = "#e112ec";
  } else if (random < 0.8) {
    frame.style.backgroundColor = "#ffb9f8";
  } else if (random < 1.0) {
    frame.style.backgroundColor = "#cd00b9";
  }
}
