const arr = ["", "2", "3"];
const randomIndex = Math.floor(Math.random() * arr.length);
const randomElement = arr[randomIndex];

function handleShowClick() {
  document.querySelector(".screen1").classList.toggle("hide");
  document.querySelector(".screen2").classList.toggle("hide");
  const img = document.querySelector(".phrase");
  img.src = `./assets/sorte${randomElement}.png`;
}

function newCookie() {
  document.querySelector(".screen1").classList.toggle("hide");
  document.querySelector(".screen2").classList.toggle("hide");
}

//Eventos
const cookie = document.querySelector("#cookie");
const btnReset = document.querySelector("#btnReset");

cookie.addEventListener("click", handleShowClick);
btnReset.addEventListener("click", newCookie);
