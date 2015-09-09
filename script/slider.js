var slide1 = document.querySelector(".main_slider:nth-child(1)");
var slide2 = document.querySelector(".main_slider:nth-child(2)");
var slide3 = document.querySelector(".main_slider:nth-child(3)");
var img1 = document.querySelector(".slider_logo:nth-child(1)");
var img2 = document.querySelector(".slider_logo:nth-child(2)");
var img3 = document.querySelector(".slider_logo:nth-child(3)");
if (document.querySelector("input[value=first]:checked")) {
slide2.classList.add("display");
img2.classList.add("display");
};