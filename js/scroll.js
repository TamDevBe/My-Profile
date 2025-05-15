const header = document.getElementById("header");
window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
