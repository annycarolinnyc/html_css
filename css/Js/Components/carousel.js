const buttonrigth = window.document.querySelector(".button-arrow.-rigth");
const buttonleft = window.document.querySelector(".button-arrow.-left");
const elements = window.document.querySelector(".elements");
let pixels = 100;
buttonrigth.addEventListener("click", function () {
  pixels = pixels + 10;
  elements.style = `transform: translateX(${pixels}px)`;
});
buttonleft.addEventListener("click", function () {
  pixels = pixels - 10;
  elements.style = `transform: translateX(${pixels}px)`;
});
