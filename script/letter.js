
var letter = document.querySelector(".letter");
var btn = document.querySelector(".contact .btn");
var chest = document.querySelector(".close");
    
btn.addEventListener("click", function () {
btn.preventDefault;
letter.classList.add("display");
});
window.addEventListener("keydown", function () {
if (event.keyCode == 27) {
	letter.classList.remove("display");
}
});
chest.addEventListener("click", function () {
        chest.preventDefault;
        letter.classList.remove("display");
});