const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

const arr = ["", "2", "3"];
const randomIndex = Math.floor(Math.random() * arr.length);
const randomElement = arr[randomIndex];

function handleShowClick() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
  const img = document.querySelector(".phrase");
  img.src = `./assets/sorte${randomElement}.png`;
}

function newCookie() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

//Eventos
const cookie = document.querySelector("#cookie");
const btnReset = document.querySelector("#btnReset");

cookie.addEventListener("click", handleShowClick);
btnReset.addEventListener("click", newCookie);
