const mobileBtn = document.getElementById("mobile-btn");

mobileBtn.addEventListener("click", () => {
  document.querySelector(".mobile-menu").classList.toggle("hidden");
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 767) {
    document.querySelector(".mobile-menu").classList.remove("hidden");
  } else {
    document.querySelector(".mobile-menu").classList.add("hidden");
  }
});
