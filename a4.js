/*
hua's example
var a = document.getElementById("A");
        a.addEventListener("click", a_OnClick);

        function a_OnClick() {
            var body = document.getElementById("body");
            body.style.backgroundColor = "#45823e";
        }
*/
RandomFrameColor();
//randomly change background color of the page
function RandomFrameColor(){
	//first get the body
	var body = document.getElementById("frame");
	var random = Math.random();
	console.log(random);
	if (random > 0.25) {
		body.style.backgroundColor = "#ff49d1";
	}
	if (random > 0.5) {
		body.style.backgroundColor = "#e112ec";
	}
	if (random > 0.8) {
		body.style.backgroundColor = "#ff71f1";
	}
}
