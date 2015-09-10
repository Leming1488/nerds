
var letter = document.querySelector(".letter");
var btn = document.querySelector(".contact .btn");
btn.addEventListener("click", function () {
letter.classList.add("display")
});
window.addEventListener("keydown", function () {
if (event.keyCode == 27) {
	letter.classList.remove("display");
}
});
