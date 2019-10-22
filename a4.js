/*
hua's example
var a = document.getElementById("A");
        a.addEventListener("click", a_OnClick);

        function a_OnClick() {
            var body = document.getElementById("body");
            body.style.backgroundColor = "#45823e";
        }
*/
var o1 = document.getElementById("O1")
o1.addEventListener("mouseover", ChangeO1Pos);

function ChangeO1Pos{
o1.style.left = "220px";
}
RandomFrameColor();
function RandomFrameColor(){
	var body = document.getElementById("frame");
	var random = Math.random();
	console.log(random);
	if (random < 0.25) {
		body.style.backgroundColor = "#ff49d1";
	}
	else if (random < 0.5) {
		body.style.backgroundColor = "#e112ec";
	}
	else if (random < 0.8) {
		body.style.backgroundColor = "#ffb9f8";
	}
  else if (random < 1.0) {
    body.style.backgroundColor = "#cd00b9";
  }
}
