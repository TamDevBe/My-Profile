const defaulTog = document.getElementById("toggle");
const defaulTog2 = document.getElementById("toggle2");
const navMobile = document.getElementById("nav-mobile");
defaulTog.addEventListener("click", function () {
  navMobile.classList.add("active");
});
defaulTog2.addEventListener("click", function () {
  navMobile.classList.remove("active");
});

// darkmode
const darkmodeSun = document.getElementById("dark-mode-toggle");
const darkmodeMoon = document.getElementById("dark-mode-toggle2");

darkmodeSun.addEventListener("click", function () {
  darkmodeSun.style.display = "none";
  darkmodeMoon.style.display = "block";
  navMobile.classList.add("dark-mode");
  document.body.classList.add("dark-mode");
});
darkmodeMoon.addEventListener("click", function () {
  darkmodeSun.style.display = "block";
  darkmodeMoon.style.display = "none";
  navMobile.classList.remove("dark-mode");
  document.body.classList.remove("dark-mode");
});
