const toggle = document.querySelector(".togglenav");

toggle.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle("showmenu");
});

startConfetti();
