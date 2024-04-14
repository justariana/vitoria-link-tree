const colorOneButton = document.getElementById("colorOne");
const colorTwoButton = document.getElementById("colorTwo");
const colorThreeButton = document.getElementById("colorThree");

const corpo = document.querySelector("body");

colorOneButton.addEventListener("click", () => {
    corpo.style.backgroundColor = "#0F6AD9";
  });
colorTwoButton.addEventListener("click", () => {
    corpo.style.backgroundColor = "#1EE911";
  });
colorThreeButton.addEventListener("click", () => {
    corpo.style.backgroundColor = "#E9BF11";
  });
