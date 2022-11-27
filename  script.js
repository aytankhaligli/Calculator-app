const screenNumber = document.querySelector(".screenNum");

const keys = document.querySelectorAll(".key");

keys.forEach((key) =>
  key.addEventListener("click", function (e) {
    const value = e.target.getAttribute("data-key");

    if (value !== "=" && value !== "d" && value !== "r")
      screenNumber.value += e.target.getAttribute("data-key");

    if (value === "=") screenNumber.value = eval(screenNumber.value);

    if (value === "r") screenNumber.value = "";

    if (value === "d")
      screenNumber.value = (screenNumber.value + "").slice(0, -1);
  })
);
const body = document.body;
const slider = document.querySelector(".slider");
const theme1 = document.querySelector(".theme1");
const theme2 = document.querySelector(".theme2");
const theme3 = document.querySelector(".theme3");
const toggle = document.querySelector(".circle");

const changeTheme1 = function () {
  body.classList.remove("theme-2");
  body.classList.remove("theme-3");
  toggle.style.left = "3px";
};
const changeTheme2 = function () {
  body.classList.remove("theme-3");
  body.classList.add("theme-2");
  toggle.style.left = "38%";
};
const changeTheme3 = function (e) {
  body.classList.remove("theme-2");
  body.classList.add("theme-3");
  toggle.style.left = "70%";
};
theme1.addEventListener("click", changeTheme1);
theme2.addEventListener("click", changeTheme2);
theme3.addEventListener("click", changeTheme3);

slider.addEventListener("click", function (e) {
  if (e.layerX >= 27 || e.layerX <= 40) changeTheme2();
  if (e.layerX >= 50) changeTheme3();
  if (e.layerX <= 20) changeTheme1();
});
